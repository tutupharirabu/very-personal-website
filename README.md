# very-personal-website

Personal portfolio of **Irfan Zharauri (Zara)** — a single-page site styled as a
**code editor / IDE**, because the whole point is to represent me as a coder.
Built with [Astro](https://astro.build/) (static output) and deployable on **Cloudflare Pages**.

## The idea

The site *is* an editor. A left **Profile / Contact** sidebar shows my bio as
syntax-highlighted source; the main pane is a set of "files" you switch between via
tabs (`readme.js`, one file per project, `experience.js`, `stack.js`, `certs.js`),
each rendered with a line-number gutter, ASCII decoration, and embedded browser
previews. Includes a working light/dark theme toggle, collapsible sidebar, and a
responsive fallback for small screens.

## Stack

- **Astro** (static output) — no client framework; interactivity is vanilla `<script>`.
- **Tailwind CSS v4** via `@tailwindcss/vite`; the editor theme lives in `src/styles/global.css` (CSS-first, `data-theme` light/dark).
- **@fontsource/ibm-plex-mono** — self-hosted monospace, used throughout.

## Structure

```
src/
  data/            content modules (bio, projects, experience, highlights, certifications, stack, social)
  layouts/
    BaseLayout.astro   html shell, fonts, global.css, no-flash theme init
  styles/global.css    editor theme: tokens, line-gutter counter, ascii, browser-frame, responsive
  components/
    ide/
      EditorShell.astro   two-pane frame, file tabs, theme/sidebar toggles (JS)
      Sidebar.astro       Profile/Contact source view + live preview panel
      Line.astro          one numbered code line (CSS-counter gutter)
      AsciiBand.astro     decorative numbered "comment" lines
      BrowserFrame.astro  mock browser window around a screenshot
      files/              ReadmeFile, ProjectFile (reused x5), ExperienceFile, StackFile, CertificationsFile
    MusicToggle.astro     floating ambient-audio control
  pages/index.astro       registers the files and composes the editor
  assets/                 images + audio (processed by Astro)
public/                   static files served as-is (favicon, logo)
```

## Project Setup

```sh
npm install
```

### Develop (hot reload)

```sh
npm run dev        # http://localhost:4321
```

### Build for production

```sh
npm run build      # static output → dist/
npm run preview    # preview the production build locally
```

## Deploy (Cloudflare Pages)

Point Cloudflare Pages at this repo with build command `npm run build` and output
directory `dist`. No SSR adapter is required — the site is fully static.
