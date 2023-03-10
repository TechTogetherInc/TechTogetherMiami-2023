# TechTogether Miami's site

TechTogether's site is made using [vite](https://vitejs.dev/).

## Development

To get started, run

```bash
npm install
// Or
npm i
```

to install the dependencies. This only needs to happen once. To start the website, run

```bash
npm run dev
```

## Deployment

Every time a push is made to the `dev` branch, a GitHub workflow runs which:

-   Builds the app
-   Pushes the app on the main branch
-   Deploys that to the techtogether site
