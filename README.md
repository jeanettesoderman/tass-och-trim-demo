# Tass & Trim demo v1

Demo nummer 4 i webbplatskatalogen.

## Stil
Lekfull men elegant hundtrim-sajt med:
- creme, beige och varm rosa
- salviagröna accenter
- mjuka former
- varm och inbjudande känsla

## Anpassning
Det mesta ligger i `config.js`:
- företagsnamn
- telefon och e-post
- område
- hero-text
- om-text
- behandlingar
- galleri
- prisnivåer
- bilder
- formulärläge

## Kundbilder
Lägg kundens egna bilder i `images/` och byt sökvägarna i `config.js`.

## Publicering
Samma flöde som övriga demos:
VS Code → GitHub → Netlify.


## Complete multilingual local-test build

Languages:
Svenska, English, Dansk, Deutsch, Español, Français, Italiano, Português.

Test locally before any GitHub/Netlify push:
1. Open this folder in VS Code.
2. Click Go Live.
3. Test `?lang=en`, `?lang=de`, `?lang=it`.
4. Scroll from top to footer.
5. Check navigation, hero, trust strip, services, about section, gallery, prices, reviews, booking form, placeholders, select options and footer.
6. Push only after the local version looks correct.

Prices intentionally keep the Swedish demo's SEK amounts. Only the surrounding wording is translated.


## v2 exact-source translation pass
This version was rebuilt against the ACTUAL strings in index.html, config.js and script.js.
It also fixes the broken gallery image and adds form placeholders.
Test locally only before the final Netlify push.
