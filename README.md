# FitRoster Pro Marketing URL

This repository contains the standalone static marketing, support, guide, and privacy pages for FitRoster Pro.

Current structure:

- `index.html` is a single static page with built-in copy for English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Thai, Malay, Russian, German, French, and Spanish.
- `guide.html` is the multilingual HTML usage guide subpage. It covers setup, editable exercise names, custom exercises, coach-trainee workflows, records, analysis, backup, and settings with language- and device-specific screenshot paths.
- `feedback.html` is the public exercise item feedback page. It lets users enter a missing exercise name, select a reference image for preview, and open an email draft to `fox3nova@gmail.com`.
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
- Use `https://fox3nova.github.io/FitRoster-Pro/feedback.html` as the exercise item feedback URL.

Language behavior:

- The pages detect `navigator.languages` and map supported locales to the closest available FitRoster Pro language.
- Pages can request a specific language with `?lang=<locale>`, for example `guide.html?lang=zh-Hant`.
- Manual language selection is available from the top navigation and is saved in `localStorage` under `fitroster.marketing.language`.

Usage-guide screenshots:

- Run `Scripts/capture_release_screenshots.py` with the built simulator app to write App Store screenshots, manual screenshots, and the website guide screenshot copy.
- Website guide screenshots can be converted into slim JPG files under `assets/guide-tutorial/<locale>/`.
- The HTML guide uses the selected site language to load matching localized tutorial screenshots.

## 2026-09-17 — Public launch notice and disclosure review

- User reports App Review approval; App Store Connect read-only verification shows Pro app `6793795531` (`com.novafly.FitRoster.Pro`) version 1.0 is `READY_FOR_SALE` / `READY_FOR_DISTRIBUTION`, downloadable.
- Homepage now shows a dated, selectable-text “Free to download before October 30, 2026” notice and direct Pro App Store links. The announcement preserves the user's “before October 30” wording; inclusion of October 30, timezone and the App Store price schedule were not changed or independently established. Do not infer permanent free use or free provider API usage. Review/remove the launch campaign when it ends.
- Added a visible Apple Health card and direct localized links to the detailed privacy disclosure. Existing disclosure was checked against the app's HealthKit service and provider consent gate: latest body mass read, completed workouts written, optional permission, named AI providers, request data, revocation and delivered-data limits.
- Added provider API cost and AI accuracy/medical-limit explanations to the homepage, privacy, support and guide disclosure sections, in all 11 site languages. These are website clarifications; the app consent version and permissions were not changed.
- Clarified the consent heading to avoid suggesting that a new provider-consent dialog appears for every request. Fixed homepage `?lang=` precedence. Policy update date is September 17, 2026.
- Verified JS syntax, relative links/assets for all four pages, no empty new/disclosure text in all 11 languages on homepage/privacy, coach-to-athlete switch, localized privacy jump, support/guide rendering, and desktop/390px/320px layout screenshots. No horizontal overflow in tested homepage/privacy mobile language views.
- Public Apple lookup had not returned the Pro app during this check; the download target was established from App Store Connect's app ID. No App Store prices, app binary, or review submission were modified.
