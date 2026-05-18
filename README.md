This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy To Namecheap With GitHub Actions

This repository includes a workflow at `.github/workflows/deploy-namecheap.yml` that builds the app as a static export and uploads the generated `out/` directory to your Namecheap hosting account.

The workflow runs on pushes to `main` and can also be triggered manually from GitHub Actions.

### 1. Add GitHub repository secrets

In your GitHub repository, add these Actions secrets:

- `NAMECHEAP_SERVER`: your FTP or FTPS host, for example `ftp.yourdomain.com`
- `NAMECHEAP_USERNAME`: your Namecheap hosting username
- `NAMECHEAP_PASSWORD`: your Namecheap hosting password
- `NAMECHEAP_SERVER_DIR`: the remote folder to deploy to, for example `/public_html/`

Optional:

- `NAMECHEAP_PROTOCOL`: set this to `ftps` if your hosting account uses FTPS. If omitted, the workflow falls back to `ftp`.

### 2. Push to `main`

On each push to `main`, GitHub Actions will install dependencies, run `npm run build`, and upload the generated static site from `out/`.

### 3. Static export note

This deployment path is intended for Namecheap shared hosting or other static hosting environments. The app is configured for Next.js static export in `next.config.mjs`, so server-only Next.js features such as API routes or runtime server rendering will require a Node-capable host instead.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy a full Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
