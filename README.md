# FitRoster Pro Marketing URL

This repository contains the standalone static marketing, support, guide, and privacy pages for FitRoster Pro.

Current structure:

- `index.html` is a single static page with built-in copy for English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Thai, Malay, Russian, German, French, and Spanish.
- `guide.html` is the multilingual HTML usage guide subpage. It covers setup, editable exercise names, custom exercises, coach-trainee workflows, records, analysis, backup, and settings with language- and device-specific screenshot paths.
- `support.html` is the public App Store support page with contact, FAQ, usage-guide, product, and privacy links in the same language set.
- `privacy.html` is the public App Store privacy policy page with the same multilingual language structure.
- `assets/site-i18n.js` provides shared language metadata, browser-language detection, manual language switching, and the added multilingual copy used by all three pages.
- `assets/marketing/<locale>/` stores slim localized JPEG screenshots used by the public product page.
- `assets/start-silver-fitroster.png` is the release logo asset copied from `Import Data/FitRoster Pro Logo/start_silver_fitroster.PNG`.
- `assets/guide-tutorial/<locale>/` stores slim localized screenshots used by the detailed HTML usage tutorial.

Open locally:

```bash
open index.html
```

Deploy target:

- The public GitHub Pages site for `fox3nova/FitRoster-Pro` serves from the `main` branch repository root (`/`).
- Use `https://fox3nova.github.io/FitRoster-Pro/` as the App Store Connect Marketing URL after GitHub Pages finishes publishing.
- Use `https://fox3nova.github.io/FitRoster-Pro/support.html` as the App Store Connect Support URL.
- Use `https://fox3nova.github.io/FitRoster-Pro/privacy.html` as the App Store Connect Privacy Policy URL.

Language behavior:

- The pages detect `navigator.languages` and map supported locales to the closest available FitRoster Pro language.
- Pages can request a specific language with `?lang=<locale>`, for example `guide.html?lang=zh-Hant`.
- Manual language selection is available from the top navigation and is saved in `localStorage` under `fitroster.marketing.language`.

Usage-guide screenshots:

- Run `Scripts/capture_release_screenshots.py` with the built simulator app to write App Store screenshots, manual screenshots, and the website guide screenshot copy.
- Website guide screenshots can be converted into slim JPG files under `assets/guide-tutorial/<locale>/`.
- The HTML guide uses the selected site language to load matching localized tutorial screenshots.
