# Jeewan Khatri, portfolio

Personal portfolio for **tekkhatri.ninja**. React, Vite, TypeScript, Tailwind CSS and Motion.

## Run it locally

```bash
npm install
npm run dev
```

## Edit the words

Everything you read on the site is in `src/content.ts`. Change the text there and the layout updates itself.

- **Your photo:** put a picture at `public/portrait.jpg` (portrait shape, 4:5). Until then a JK monogram shows.
- **Project screenshots:** pass `image="/your-file.jpg"` to a `Cover` to replace the coloured cover.
- **Contact email:** change `email` in `src/content.ts`.

## Publish on GitHub Pages

1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site automatically.

## Point tekkhatri.ninja at it

The file `public/CNAME` already tells GitHub the domain. In your **name.com** dashboard, open **DNS records** for tekkhatri.ninja and add:

| Type  | Host | Answer                |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | t2-khatri.github.io   |

Then in **Settings > Pages**, enter `tekkhatri.ninja` as the custom domain and tick **Enforce HTTPS** once it becomes available. DNS can take up to 24 hours.
