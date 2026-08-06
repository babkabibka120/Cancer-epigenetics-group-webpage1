# Cancer Epigenetics Research Group

Personal research-group website for the Cancer Epigenetics Research Group at the Biomedical Research Center, Slovak Academy of Sciences.

## Features

- research profile and group overview
- team directory with ORCID and contact links
- ongoing and completed international and national projects
- selected publications with DOI links
- complete publication archive synchronized with ORCID
- responsive layout for desktop and mobile

## Technology

- React 19
- TypeScript
- vinext / Vite
- Cloudflare Worker endpoint for the ORCID publication archive

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Main files

- `app/page.tsx` — homepage content
- `app/projects/page.tsx` — complete project archive
- `app/publications/page.tsx` — complete publication archive
- `app/globals.css` — visual design and responsive styles
- `worker/index.ts` — ORCID API integration
- `public/` — images and icons

## Publication data

The complete publication archive is loaded from the public ORCID profile `0000-0002-4906-5652`. Selected homepage publications are maintained in `app/page.tsx`.

## Repository setup

```bash
git init
git add .
git commit -m "Add Cancer Epigenetics Research Group website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with the GitHub account and repository name.

## Privacy

Do not commit `.env` files or credentials. They are excluded through `.gitignore`.
