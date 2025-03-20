# Dr. Tuo Wu - Academic Homepage

This is the personal academic homepage for Dr. Tuo Wu, Research Fellow at Nanyang Technological University (NTU), specializing in wireless communications, signal processing, optimization algorithms, and machine learning.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for education, research interests, publications, honors, and professional activities
- Detailed publications page with all research work
- Fully static site - perfect for GitHub Pages hosting
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

## Google Scholar Citation Data

The homepage displays citation metrics from Google Scholar. To update these statistics:

1. Update the static data in the `scholarData` constant in `app/page.tsx` with your current citation numbers
2. Rebuild and redeploy the site

Since this is a fully static site optimized for GitHub Pages, it doesn't include dynamic API calls that could fail during the static export process.

## Deployment

This site can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploying with GitHub Actions

This repository is configured with GitHub Actions to automatically build and deploy the static website to GitHub Pages whenever changes are pushed to the main branch.

To use this feature:

1. Push your code to a GitHub repository
2. Go to your repository settings -> Pages
3. Under "Build and deployment" -> "Source", select "GitHub Actions"
4. Make sure your repository is public, or you have GitHub Pro for private repositories
5. Push a change to the main branch or manually trigger the workflow from the Actions tab

The GitHub Actions workflow will:
- Build your fully static Next.js site
- Create necessary files for GitHub Pages like .nojekyll and 404.html
- Deploy it to GitHub Pages
- Make it available at `https://your-username.github.io/wutuo`

You may need to adjust the `basePath` in `next.config.ts` if your repository has a different name.

#### Troubleshooting GitHub Actions Deployment

If you encounter issues with the GitHub Actions deployment:

1. **Check the workflow execution logs** in the Actions tab to identify specific errors
2. **Verify repository permissions** - make sure the repository has proper permissions set for GitHub Pages
3. **Custom domain configuration** - if using a custom domain, update the `basePath` in `next.config.ts` to an empty string
4. **Route issues** - if some pages don't load correctly, make sure all internal links use the Next.js `Link` component
5. **Image loading issues** - all images should use the Next.js `Image` component with proper configuration

For 404 errors after deployment, check that:
- The `trailingSlash: true` option is set in `next.config.ts`
- Links in your application use the correct paths with the `basePath` considered

#### Troubleshooting Build Failures

If your build fails in GitHub Actions, try these solutions:

1. **ESLint Errors**: The workflow uses `--no-lint` flag to prevent ESLint errors from failing the build. You can also:
   - Fix ESLint errors in your code
   - Use the `.eslintrc.json` file to disable specific rules
   - Ensure proper quotes and apostrophes are escaped in text content

2. **Static Site Issues**: When using a fully static site approach:
   - Ensure you don't have any server-side or API route code that isn't compatible with static export
   - Replace dynamic data fetching with static data in your components
   - Make sure all images are handled properly with the `unoptimized: true` setting

3. **File Path Issues**: For GitHub Pages deployment:
   - Remember that all paths start with your repository name (e.g., `/wutuo/`) in production
   - Use relative paths for assets when possible
   - Ensure the `basePath` in `next.config.ts` matches your repository name

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
