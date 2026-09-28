# カルワ 小岩 website

A responsive, bilingual static website for カルワ 小岩, an Indian and Nepalese restaurant in Tokyo. The site has four pages: home, restaurant and company information, store and access, and reservations and delivery.

## Hosting with Manus AI

Import this repository as a static website. The site files are at the repository root:

- Entry page: `index.html`
- Build command: none
- Publish/output directory: repository root (`.`)

All navigation and asset URLs are relative, so the site works from the root of a domain or a subdirectory. No package installation, API keys, database, or server-side runtime is required. Serve the files over HTTP for local preview; for example, run `python -m http.server 8789` in the repository folder and open `http://127.0.0.1:8789/`.

## Files

- `index.html` — home page
- `about.html` — restaurant and company information
- `stores.html` — store details, gallery, and map
- `reservation.html` — reservation listings, phone, and delivery links
- `styles.css` and `script.js` — styling, navigation, language switch, and gallery
- `assets/` — optimized WebP photography, logo, and service icons

The large photographs are stored as WebP to reduce transfer size. The original PNG working copies and internal content notes are excluded from the public repository.
