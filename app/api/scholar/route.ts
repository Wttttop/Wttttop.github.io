import { NextResponse } from 'next/server';
import { load } from 'cheerio';

// This ensures the route works with static exports
export const dynamic = 'force-static';
// Increase the revalidate time to reduce build warnings
export const revalidate = 86400; // 24 hours

// Replace this with your actual Google Scholar ID
const SCHOLAR_ID = 'xMbNr1UAAAAJ'; // Your actual Google Scholar ID

export async function GET() {
  try {
    // Fetch the Google Scholar profile page
    const response = await fetch(`https://scholar.google.com/citations?user=${SCHOLAR_ID}&hl=en`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const $ = load(html);

    // Extract citation data
    // The selectors might need adjustment based on Google Scholar's HTML structure
    const citations = $('td.gsc_rsb_std').eq(0).text();
    const hIndex = $('td.gsc_rsb_std').eq(2).text();
    const i10Index = $('td.gsc_rsb_std').eq(4).text();

    // Cache the response for 24 hours (in seconds)
    return NextResponse.json(
      { 
        citations, 
        hIndex, 
        i10Index,
        lastUpdated: new Date().toISOString() 
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=86400',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    
    // Return default values if there's an error
    return NextResponse.json(
      { 
        citations: '777', 
        hIndex: '10', 
        i10Index: '20',
        error: 'Failed to fetch latest data',
        lastUpdated: new Date().toISOString() 
      },
      { status: 200 }
    );
  }
} 