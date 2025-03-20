# Dr. Tuo Wu - Academic Homepage

This is the personal academic homepage for Dr. Tuo Wu, Research Fellow at Nanyang Technological University (NTU), specializing in wireless communications, signal processing, optimization algorithms, and machine learning.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for education, research interests, publications, honors, and professional activities
- Detailed publications page with all research work
- Automatic citation metrics updates from Google Scholar
- Built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Google Scholar Integration

The homepage automatically fetches and displays your citation metrics from Google Scholar. To configure this for your own profile:

1. Find your Google Scholar ID (it's in the URL of your profile page, e.g., `https://scholar.google.com/citations?user=YOUR_ID`)
2. Update the `SCHOLAR_ID` constant in `app/api/scholar/route.ts` with your ID
3. The application will fetch your citation count, h-index, and i10-index directly from Google Scholar
4. The data is cached for 24 hours to avoid excessive requests to Google Scholar

This feature uses a serverless API endpoint to scrape the citation data since Google Scholar doesn't provide an official API.

## Deployment

This site can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploying with GitHub Actions

This repository is configured with GitHub Actions to automatically build and deploy the website to GitHub Pages whenever changes are pushed to the main branch.

To use this feature:

1. Push your code to a GitHub repository
2. Go to your repository settings -> Pages
3. Under "Build and deployment" -> "Source", select "GitHub Actions"
4. Make sure your repository is public, or you have GitHub Pro for private repositories
5. Push a change to the main branch or manually trigger the workflow from the Actions tab

The GitHub Actions workflow will:
- Build your Next.js application
- Deploy it to GitHub Pages
- Make it available at `https://your-username.github.io/wutuo`

You may need to adjust the `basePath` in `next.config.ts` if your repository has a different name.

### Deploying to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/import).

1. Create a Vercel account if you don't have one
2. Connect your GitHub repository
3. Vercel will automatically deploy your website

### Deploying to Other Platforms

For other platforms, build the application and deploy the static files:

```bash
npm run build
npm run export
```

This will generate a static version of your site in the `out` directory that can be deployed to any static hosting service.

## Customization

### Updating Content

- Most of the content can be updated in the `app/page.tsx` file
- Publications data is stored in the `app/publications/page.tsx` file
- Styling can be modified in `app/globals.css`

### Adding New Pages

You can add new pages by creating new files in the `app` directory. Next.js provides automatic routing based on the file structure.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Dr. Tuo Wu - tuo.wu@ntu.edu.sg
