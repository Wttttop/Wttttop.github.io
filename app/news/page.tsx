'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { newsItems } from '../lib/data'

// News item interface
interface NewsItem {
  title: string;
  date: string;
  content: string;
}

export default function News() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 mb-6 text-primary hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">News & Updates</h1>
      </div>

      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <span className="text-muted-foreground text-sm">{item.date}</span>
            </div>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 