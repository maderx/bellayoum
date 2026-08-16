# Bella Youm — Portfolio Site

A static, no-build-step website for stage manager & theatre producer Bella Youm.
Plain HTML/CSS/JS — no framework, no bundler. Every menu item is its own real page.

## Pages

| Page | File |
|---|---|
| Opening / Home | `index.html` |
| Profile | `profile.html` |
| Portfolio | `portfolio.html` |
| Archive (hub — 3 doors) | `archive.html` |
| Archive · Pottery | `archive-pottery.html` |
| Archive · Photography | `archive-photography.html` |
| Archive · Boxing | `archive-boxing.html` |
| Contact | `contact.html` |

## Folder structure

```
css/style.css          shared stylesheet (all pages)
js/site.js              shared behavior: header spotlight, EN/KR toggle, curtain intro, slideshows
js/render.js             renders portfolio rows / archive doors / gallery grids from the data files
js/data/portfolio.js     list of productions — edit this to add/remove a production
js/data/archive.js       archive doors + gallery items — edit this to add/remove photos
images/opening/          hero photo + curtain-intro circle photo
images/profile/          portrait
portfolio/<slug>/        production photos, one folder per show — DROP NEW PHOTOS HERE
archive/doors/           the 3 cover photos on the Archive hub page
archive/pottery/
archive/photography/
archive/boxing/          photos for each archive gallery — DROP NEW PHOTOS HERE
```

`portfolio/` and `archive/` sit at the project root — that's where new material goes. `images/` only
holds the profile portrait and the opening/hero photos, which rarely change.

## How to add a new production to Portfolio

1. Create `portfolio/<slug>/` and drop in photos, named `01.jpg`, `02.jpg`, `03.jpg`, …
2. Open `js/data/portfolio.js` and add an object to the `PORTFOLIO` array:
   ```js
   {
     num: "04",
     title: "Show Title",
     date: "Mon YYYY",
     director: "Name",
     venue: "Venue",
     role: "My Role",
     folder: "portfolio/<slug>",
     images: ["01.jpg", "02.jpg", "03.jpg"]
   }
   ```
3. Save. `portfolio.html` renders it automatically — no other file changes needed.

## How to add photos to an Archive gallery

1. Drop image files into `archive/pottery/`, `archive/photography/`, or `archive/boxing/`.
2. Open `js/data/archive.js`, find the matching key inside `GALLERIES`, and add an item:
   ```js
   { src: "07.jpg", caption: "2026 · Studio", size: "s2x2" }
   ```
   Size options (grid-column × grid-row span): `s2x2`, `s2x3`, `s3x3`, `s4x3`, `s1x3`.
3. To reserve a spot for later instead of filling it, use `{ slot: true, size: "s2x2" }` — it renders
   as a quiet "EMPTY" panel until you swap it for a real entry.

## Replacing single fixed images

These are referenced directly in the HTML/data by fixed filename — just overwrite the file in place,
no code change needed:

- `images/opening/stage.jpg` — the big opening photo
- `images/opening/intro-iris.jpg` — curtain-intro circle photo
- `images/profile/portrait.jpg` — profile portrait
- `archive/doors/pottery.jpg`, `photography.jpg`, `boxing.jpg` — Archive hub cover photos

## Language toggle

Every page ships English and Korean text on elements with `data-en` / `data-kr`. The EN/KR buttons in
the header switch between them and the choice is remembered (via `localStorage`) across page loads.

## Running locally

No build step required. Two ways to preview:

- Open `index.html` directly in a browser (double-click it, or drag it into a tab).
- Or serve the folder so it behaves exactly like it will on a real host:
  ```bash
  cd /Users/jasonlee/Documents/claude/ai_home_port_3
  python3 -m http.server 8421 --bind 127.0.0.1
  ```
  then visit `http://127.0.0.1:8421/`. (`.claude/launch.json` is preconfigured to attach the
  Claude Code browser preview to that address once the server above is running.)

## Deploying

This folder is a plain static site, so it deploys as-is to GitHub Pages, Netlify, Vercel, or any static
host. Connect it to a GitHub repo and a custom domain whenever you're ready — no code changes required.
