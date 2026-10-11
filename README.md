# The Body Works

Static rebuild of The Body Works website (luxury massage, Chapeltown, Bolton), mirrored from the Wix draft.

## Pages
- `index.html` – home
- `treatments.html` – full treatment menu, enhancements, wellness plans, gift cards

## Booking links
Every Book / Gift / Contact button has a `data-book="<key>"` attribute.
Set the real URLs in `BOOKING_LINKS` at the top of `js/site.js`. Empty keys fall back to `DEFAULT_BOOKING_URL`.
Only `https://`, `mailto:` and `tel:` links are accepted.

## Images
Photos load from the site's Wix media library (`static.wixstatic.com`).
To host them yourself, download them into an `images/` folder and update the `src` paths.

## Hosting
Plain HTML/CSS/JS, no build step. Works on GitHub Pages, Netlify or Vercel as-is.
