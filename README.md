# Yinan’s Portfolio Site

The source code for Yinan’s Portfolio site: https://yinanzhao.com/.

## Project Features

- 💻 Modern user interface design
- ⚡ Fast loading speeds and responsive design
- 🪄 Light/Dark mode and smooth animation and transitions
- 💾 Utilized serverless backend services such as Snity and Upstash

## Tech Stack

### Frontend

- **Next.js**: A React framework for building modern server-rendered applications
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Framer Motion**: A React motion library that simplifies creating smooth animations
- **Radix UI**: A React component library optimized for fast development and building high-quality modern web interfaces
- **Sanity**: A fully customizable all-code backend for content-driven websites and apps.

### Backend

- **Next.js API Routes**: Server-side API implementation
- **Upstash**: Serverless data platform, offering low-latency, scalable databases like Redis

### Deployment and Infrastructure

- **Vercel**: Application hosting and automated deployment
- **Sanity**: Content management system
- **Upstash**: Track total visits and article view statistics.

## Local Development

1. Install dependencies

   ```bash
   # Install dependencies
   pnpm install
   ```

2. Configure environment variables

   ```bash
   cp .env.example .env
   ```

   Then edit the `.env` file and fill in the necessary environment variables:

   - `NEXT_PUBLIC_APP_URL`: Application URL
   - `NEXT_PUBLIC_SANITY_DATASET`: Sanity CMS Dataset name
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity CMS project ID
   - `UPSTASH_REDIS_REST_TOKEN`: Upstash Reids REST API token
   - `UPSTASH_REDIS_REST_URL`: Upstash Reids REST API URL

3. Initialize the Sanity CMS admin folder

   ```bash
   npm create sanity@latest -- --template clean --create-project "Your-Project-Name" --dataset production
   ```

4. Start the development server

   ```bash
   pnpm dev
   ```

   Visit http://localhost:3000 to view the application.

## Deployment

This project is pre-configured for direct deployment to the Vercel platform.

1. Fork this project to your GitHub account
2. Import the project in Vercel
3. Configure the necessary environment variables:
   - `NEXT_PUBLIC_APP_URL`: Your Vercel deployment URL (e.g., https://your-app.vercel.app)
4. Once deployed, the app will be accessible
