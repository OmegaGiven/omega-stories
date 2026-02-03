# Omega Stories

A Hugo-powered home for short stories and graphic novel previews.

## Quick start

1. Install Hugo (extended).
2. Run the dev server:

```bash
hugo server
```

3. Open the local URL printed in the terminal.

## Editing content

- Add new stories in `content/stories/`.
- Update the homepage intro in `hugo.toml` (`params.description`).
- Customize styles in `static/css/styles.css`.

## GitHub Pages (basic)

1. Set `baseURL` in `hugo.toml` to your GitHub Pages URL.
2. Build the site:

```bash
hugo
```

3. Publish the `public/` folder to GitHub Pages (via a GitHub Actions workflow or by pushing the folder to a `gh-pages` branch).
