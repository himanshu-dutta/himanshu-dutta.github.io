## Overview

This repository is a personal website built with the "Minimal Light" Jekyll theme. This guide explains the project layout, how publications are stored and rendered, what properties are supported, how to add or edit publications, how configuration options map to the template, and how to preview locally.

## Where files live (most important)

- Site configuration: `_config.yml`
- Publications (data source): `_data/publications.yml`
- Publications renderer / layout: `_includes/publications.md`
- Site layout / HTML head: `_layouts/homepage.html`
- Index content (includes the publications section): `index.md`
- Static assets (images, css, js, pdfs): `assets/` and `assets/img/`
- Pre-built HTML (if you prefer to inspect compiled output): `html_source_file/` and `_site/` (after building locally)

## Publications: data model and rendering contract

Publications are defined in `_data/publications.yml` under the `main:` list. The homepage template iterates over `site.data.publications.main` and expects each entry to be a mapping (YAML object) with some or all of the following keys:

- `title` (string) — REQUIRED (used as visible title). The template wraps the title in an anchor that points to `link.pdf`.
- `authors` (string) — REQUIRED (rendered as-is; you can include simple inline HTML such as `<strong>` to emphasize your name)
- `conference_short` (string) — OPTIONAL (short badge label like "CVPR" or "ICML"). NOTE: the current template shows `conference_short` only when `image` is present (see caveat below).
- `conference` (string) — OPTIONAL (full conference/journal name, year, and additional formatting; rendered inside an `<em>` block)
- `pdf` (string / URL) — OPTIONAL (link used for the title anchor and the "PDF" button). If you don't have a PDF, use the project page URL or omit, but know the title anchor uses this field directly.
- `bibtex` (string / URL) — OPTIONAL (URL shown as "BibTex" button)
- `code` (string / URL) — OPTIONAL (URL shown as "Code" button)
- `page` (string / URL) — OPTIONAL (URL shown as "Project Page" button)
- `image` (string / path) — OPTIONAL (path to an image used as teaser thumbnail). Typical path: `./assets/img/teaser_example.png` or `assets/img/your_image.png`.
- `notes` (string) — OPTIONAL (rendered as red emphasized text next to the buttons; useful for "Oral", "Spotlight" etc.)
- `others` (string / HTML) — OPTIONAL (rendered as raw HTML in the links area for any extra links or badges)

Caveats in current template behavior

- The template wraps the publication block like this: it first checks `if link.image`, then prints the `<img>` and (inside the same `if`) prints the `conference_short` abbr. That means `conference_short` will only appear if `image` is present. If you want a badge without an image, edit `_includes/publications.md` (see the template section below) to move the `conference_short` `if` out of the `image` block.
- The title anchor uses `{{ link.pdf }}` as `href`. If you prefer the title to link to a project page when no PDF exists, either set `pdf` to the project page URL or edit the template to use `link.pdf | default: link.page`.
- `authors` is output as raw HTML; be careful to properly escape YAML (wrap strings in quotes if they contain colons or special characters).

Example (minimal) entry

```yaml
main:
  - title: "My Paper Title"
    authors: "Alice A., <strong>Your Name</strong>, Bob B."
    conference_short: "ICML"
    conference: "International Conference on Machine Learning, 2026."
    pdf: "https://example.com/mypaper.pdf"
    bibtex: "https://example.com/mypaper.bib"
    code: "https://github.com/you/mypaper"
    image: "./assets/img/my-paper-teaser.png"
    notes: "Oral Presentation"

```

Recommended conventions

- Use `./assets/img/...` for `image` (consistent with existing files). Keep images < 300 px wide and around 123×270 or similar aspect ratio so the layout stays neat.
- Put your own PDFs in `assets/files/` and use `assets/files/your.pdf` for `pdf` links if you want local hosting.
- Keep `authors` as a single string. If you want to highlight yourself, wrap your name with `<strong>...</strong>`.

Where HTML is rendered

- The rendering logic is in `_includes/publications.md`. It loops:

  {% raw %}{% for link in site.data.publications.main %}{% endraw %}

  and uses these fields to populate each publication's block. If you need a different layout, edit that file (it contains the HTML/CSS hook points).

Template excerpts (what to edit if you need different behavior)

- `_includes/publications.md` — controls how each entry is turned into HTML. Key behaviors to change if you want different link precedence or to show `conference_short` without an image.
- `_layouts/homepage.html` — controls the page head and the social icons for variables like `site.github_link`, `site.cv_link`, `site.font`, `site.auto_dark_mode`, and which CSS files load.

Important site configuration variables (from `_config.yml`)

- `title` — shown as page title and in head `<title>`
- `position` — printed under your name
- `affiliation` — printed and linked with `affiliation_link` (if set)
- `email` — printed under your name
- `keywords`, `description`, `canonical` — SEO metadata
- `google_scholar`, `cv_link`, `github_link`, `linkedin`, `twitter` — social links printed in the header
- `avatar`, `favicon`, `favicon_dark` — image paths
- `enable_footnote` — when true prints the "Powered by Jekyll..." footnote
- `auto_dark_mode` — controls which CSS files are loaded (dark-mode-aware or not)
- `font` — either "Serif" or "Sans Serif" — controls which font CSS is included
- `google_analytics` — optional analytics id used in the footer script

Quick examples for `_config.yml` changes

If you want a logo/favicon change, point `avatar` and `favicon` to files under `assets/img/`.

If you want to disable dark-mode automatic styling:

```yaml
auto_dark_mode: false
```

Previewing locally (macOS / zsh)

1. Install Ruby and Bundler if you don't have them. Then in the repo root run:

```bash
bundle install
bundle add webrick
bundle exec jekyll serve
```

2. Open http://localhost:4000 in your browser. The `_includes/publications.md` will render using `_data/publications.yml`.

Troubleshooting & common pitfalls

- YAML indentation and quoting: YAML is indentation-sensitive. Always use 2 spaces and wrap strings that contain `:` or leading special characters in quotes.
- Broken title links: If a `pdf` field is missing, the title anchor will point to an empty value. Either set `pdf` to a project page URL or edit `_includes/publications.md` to choose a fallback: `href="{{ link.pdf | default: link.page }}"`.
- Missing `conference_short`: remember the template currently shows the badge only when `image` exists. Move the `conference_short` check outside the `image` `if` if you want the badge always visible.
- HTML in YAML: the `authors` and `conference` fields accept inline HTML. If you include tags, ensure the YAML parser doesn't treat them as special by wrapping the whole value in double quotes.

Small improvements you can make (low risk)

- Move the `conference_short` `if` out of the `image` block in `_includes/publications.md` so badges display even without images.
- Change title link to prefer `pdf` but fall back to `page`:

  Replace `href="{{ link.pdf }}"` with `href="{{ link.pdf | default: link.page }}"`

- Add a small script or validation step (pre-commit or CI) that checks each `main` entry has `title` and `authors` fields.

Where to make custom layout changes

- If you need to change HTML structure/formatting, edit `_includes/publications.md`.
- If you need to change the header, social icons, or which CSS files are included, edit `_layouts/homepage.html`.

If you'd like, I can:

- Make the two low-risk template changes mentioned above (badge display independent of image, title link fallback).
- Add a small validation script (Ruby or Node) to check `publications.yml` for required fields.

Last notes

I added this `USER_GUIDE.md` to the repository root as a living document. If you'd like I can expand it with: an annotated example publication, a small automated sanity checker, or update templates to make data-entry less error-prone.

---
Generated: 2026-05-16
