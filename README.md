<h1>Next.js/React Code challenge</h1>

## Purpose
Illustrate you have a solid grasp of the fundamentals required to create a react/next.js based application by building a simple multi-route SPA using the Open Brewery DB API (https://www.openbrewerydb.org/documentation/01-listbreweries).

## Expectations

ATK does have its own design and UI team so we don't expect a pixel-perfect design but we do expect that you'll have a solid understanding of page composition, accessibility, and proper markup. Your application will be created in a compressed timeframe (we suggest 4-5 hrs but please no more than 6-8 hrs) so we don't expect a work of art or a magnificent feat of engineering. Your app should interact with the API in a way that provides the user with a reasonable browsing and discovery experience.

Get as much done as you can, but don't worry if you don't finish it all in the allotted time. We're looking at how you organize your code, manage API requests and structure your markup. We'd prefer 50% done with 100% great code, markup, and layout than 100% done with a rushed implementation and inaccessible markup.

## Requirements

 Getting started

Create an empty public repo on GitHub.
https://nextjs.org/docs <-- use create-next-app to lay the foundation. Choose typescript or javascript, either is fine.
Peruse the Open Brewery DB API
Home Page
Highlight a "featured" brewery. The logic regarding "featured" is yours to determine. This could be a brewery in a random geographic region, type of brewery or even based upon the user's current location.

Provide a 'browseable' grid of breweries with a 'Type' filter corresponding to the by_type filter options here: https://www.openbrewerydb.org/documentation/01-listbreweries. Pagination is not required. Show only the first page of the results. The results grid should have a mobile-first design that changes the number of items per row from two, to three, to four, when resizing the browser from mobile through desktop sizes.

Search Page
Provide a simple search interface with a search input and a grid of results. The grid should follow the same 2-up, 3-up, 4-up pattern from the browse page.
Detail Page
Display the full details of a brewery using the id value from the search or browse page result set. Make use of as many details from the API as possible, being sure to prevent errors from missing data.

Display a shortlist of 'similar' breweries based on brewery_type

Display a list of other breweries "nearby" based on lat/lng data (if available)


<h1>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).</h1>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
