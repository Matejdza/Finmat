# FINMAT · sajt (prototip D)

Radna verzija sajta za pregled sa klijentom. Napravljena je iz prototipa D sa canvasa.

```
index.html     ceo sajt (CSS i JS su u fajlu)
img/           hero slika, fotografije radova, ikonica za telefon
d/index.html   preusmerava stari link /d/ na početnu
.nojekyll      da GitHub Pages ne obrađuje fajlove
```

Sajt sam bira raspored prema širini ekrana:
- telefon do 599 px
- tablet od 600 do 1199 px
- računar od 1200 px

Provereno na širinama 320–1920 px, u Chrome-u i Safari-ju, na Android-u i iOS-u, bez horizontalnog skrolovanja.

## Postavljanje na GitHub Pages

1. U postojećem repozitorijumu (npr. `finmat`) obrišite stare fajlove: `index.html`, folder `b`, folder `d`.
2. **Add file → Upload files**, pa prevucite **sadržaj** foldera `finmat-github`: `index.html`, foldere `img` i `d`, `.nojekyll` i ovaj README. Zatim **Commit changes**.
   - Fajl `.nojekyll` je skriven. Na Mac-u ga u Finder-u prikažete sa Cmd+Shift+. ; bez njega sajt i dalje radi.
3. **Settings → Pages**: Branch **main**, folder **/ (root)**, pa **Save**. Ako je ovo već podešeno, ne treba ništa menjati.
4. Posle 1–2 minuta sajt je na `https://<korisnik>.github.io/finmat/`. Stari link `.../finmat/d/` vodi na istu stranicu.

## Šta radi u ovoj verziji

- **Galerija:** 17 fotografija u 13 pločica, od toga 4 pre/posle. Ima filtere, dugme „Prikaži još radova“ i prikaz preko celog ekrana (Uporedi / Pre / Posle).
- **Usluge:** klik na uslugu je označi u formi za upit.
- **Forma:** usluge se biraju iz padajućeg menija. Posle slanja prikazuje gotovu poruku koja se šalje na WhatsApp ili kopira za Viber.
- **Česta pitanja:** polje „Pitajte nas“. Odgovori su zasad unapred pripremljeni po ključnim rečima, ne daje ih pravi AI.
- **Kontakt kartice:** imaju dugme za kopiranje broja i email adrese.
- **Na telefonu:** donja traka Pozovi / WhatsApp / Upit i slajder „Kako radimo“.

## Pre objavljivanja pravog sajta

- **Upiti na email:** napravite besplatan ključ na web3forms.com (na email firme). Upišite ga u `var WEB3FORMS_KEY = '';` pri dnu `index.html`.
- **Pravi AI asistent:** treba povezati AI servis (npr. Claude API preko male serverske funkcije), uz uputstvo šta firma radi i šta sme da obeća.
- **Pretraga:** obrišite red `<meta name="robots" content="noindex, nofollow">`, pa Google može da prikaže sajt. Kad postoji domen, u `og:image` upišite punu adresu slike (npr. `https://finmat.rs/img/hero-renoviranje.jpg`).
- **Za potvrdu sa klijentom:** tekstovi u Čestim pitanjima, „besplatna procena“ u hero delu i formi, glavni broj za WhatsApp (sada Dejanov), nazivi fotografija u galeriji.
