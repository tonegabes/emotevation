# Emotevation - Daily Motivation Quote Generator

[![Deploy to GitHub Pages](https://github.com/tonegabes/emotevation/actions/workflows/deploy.yml/badge.svg)](https://github.com/tonegabes/emotevation/actions/workflows/deploy.yml)

A beautiful Next.js application that generates personalized motivational quotes based on a user's name and the current date. The application uses a deterministic algorithm to ensure that the same name and date combination always produces the same quote.

## Features

- **Name Input**: Enter your name to personalize the motivational quote
- **Date Selection**: Choose a date to generate a quote for (defaults to today)
- **Consistent Quote Generation**: The same name and date will always generate the same quote
- **Responsive Design**: Works beautifully on mobile and desktop
- **Beautiful UI**: Gradient backgrounds, animated elements, and clean design

## Technologies Used

- **Next.js**: React framework for building the application
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **React Hooks**: For state management

## How It Works

The application uses a seeded random number generator to ensure that the same name and date combination always produces the same motivational quote. The algorithm:

1. Creates a seed string from the user's name and the selected date
2. Generates a deterministic "random" number based on this seed
3. Uses this number to select a quote from our collection of motivational quotes

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://fonts.google.com/specimen/Inter) for a great typography experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured for deployment on GitHub Pages. You can deploy manually or using GitHub Actions.

### Manual Deployment

```bash
npm run deploy
```

### GitHub Actions Automated Deployment

This project includes a GitHub Actions workflow that automatically deploys your site to GitHub Pages when you push to the main branch.

To set up GitHub Actions deployment:

1. Push your code to GitHub
2. Go to your repository settings on GitHub
3. Navigate to "Pages" and select "GitHub Actions" as the source
4. Push any changes to your main branch to trigger a deployment

The application will be deployed to: https://tonegabes.github.io/emotevation/

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Troubleshooting

### Common Issues

#### ESLint Version Conflicts

If you encounter errors like:
```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error While resolving: eslint-config-next@14.x.x
npm error Found: eslint@9.x.x
```

This is due to incompatible ESLint versions. To fix:

```bash
# Run the reinstall script
npm run reinstall

# Or manually fix the ESLint version
npm install eslint@8.57.0 --save-dev
```

#### GitHub Actions Build Failures

If your GitHub Actions workflows are failing, check the logs for specific errors. Common fixes:

```bash
# Clean install locally and push package-lock.json
rm -rf node_modules
npm cache clean --force
npm install
git add package-lock.json
git commit -m "Update package-lock.json to fix dependency issues"
git push
```

For more troubleshooting information, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
