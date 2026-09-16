# Aaryan Sharma — portfolio + recipes

Built with [Eleventy](https://www.11ty.dev/) — plain HTML/CSS/JS output, no client-side
framework, no build step required by the browser. New content is just a markdown file.

## Running it locally

```bash
npm install
npm start        # http://localhost:8080, live-reloads as you edit
npm run build    # builds the static site into _site/
```

## Adding a new case study

Drop a new `.md` file into `src/work/`, copy the front matter shape from an existing one:

```yaml
---
title: Your Project Title
year: 2026
date: 2026-01-01
featured: false          # true pins it under "Featured only" filter
stack: [Python, SQL]      # shown as tags + used to compute your About-page skill meters
topics: Marketing, NLP    # comma-separated, shown under the tags
description: One or two sentences shown on the card.
stats:
  - label: Some Metric
    value: "42%"
---
Your write-up in markdown goes here.
```

It'll automatically show up on the homepage grid — no other file needs editing.

## Adding a new recipe

Same idea, in `src/personal/`. Copy the front matter from
`src/personal/chipotle-black-bean-tacos.md` — it's the one fully fleshed-out example.
`ingredientGroups` and `method` are both lists, so add as many as you need.

## Skills on the About page

Skill bars are computed at build time in `src/_data/skills.js` — NOT hand-typed. They're a
blend of two things:

1. How many Work case studies list a given `stack` tag
2. How often a tracked keyword shows up in `src/_data/resumeText.js`

Update `src/_data/resumeText.js` when you update your resume, and add/remove entries in
`src/_data/resumeKeywords.json` to track different keywords. Skills with zero matching case
studies still show up (labeled "from resume") but aren't clickable, since there's nothing to
filter to yet.

## Things you said you'd handle after export

- Real headshot photo → replace the "AS" placeholder in `src/about.njk`, drop the image in
  `src/assets/images/`
- Real LinkedIn/GitHub links + resume file → edit `src/_data/site.js`
- Favicon → replace `src/assets/images/favicon.ico`

## Deploying

Push to `main` and the included GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds and deploys automatically. One-time setup:

1. In your repo: **Settings → Pages → Source → GitHub Actions**
2. If this repo is NOT `your-username.github.io` (i.e. it's a normal project repo), open
   `.github/workflows/deploy.yml` and change `PATH_PREFIX: "/"` to `PATH_PREFIX: "/your-repo-name/"`
3. Push to `main` — check the **Actions** tab for build status, then your site is live at
   the URL GitHub Pages gives you.
