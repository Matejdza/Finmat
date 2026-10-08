# FINMAT · sajt (prototip D)

Radna verzija sajta za pregled sa klijentom. Napravljena je iz prototipa D sa canvasa.

```
index.html     ceo sajt (CSS i JS su u fajlu, tekst je upisan i u sam HTML)
img/           hero slika, fotografije radova (WebP), slika za deljenje, logo, ikonica za telefon
favicon.ico    ikonica sajta (i favicon.svg)
robots.txt     pravila za pretraživače
sitemap.xml    spisak stranica za Google
.nojekyll      da GitHub Pages ne obrađuje fajlove
```

Sajt sam bira raspored prema širini ekrana:
- telefon do 599 px
- tablet od 600 do 1199 px
- računar od 1200 px

Provereno na širinama 320–1920 px, u Chrome-u i Safari-ju, na Android-u i iOS-u, bez horizontalnog skrolovanja.

## Postavljanje na GitHub Pages

1. U repozitorijumu klikni **Add file → Upload files** i prevuci **sadržaj** foldera `finmat-github`: `index.html`, folder `img`, `favicon.ico`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll` i ovaj README. Zatim **Commit changes**. Fajlovi sa istim imenom se sami zamene novim. Stari folder `d` možeš da obrišeš, više se ne koristi.
   - Fajl `.nojekyll` je skriven. Na Mac-u ga u Finder-u prikažeš sa Cmd+Shift+. ; bez njega sajt i dalje radi.
2. **Settings → Pages**: Branch **main**, folder **/ (root)**. Ako je to već podešeno, ne treba ništa menjati.
3. Posle 1–2 minuta sajt je na `https://<korisnik>.github.io/<repozitorijum>/`. Ako vidiš staru verziju, osveži stranicu sa Cmd+Shift+R (Mac) ili Ctrl+F5 (Windows).

## Šta je na sajtu

- **Redosled:** hero, usluge, galerija, Zašto FINMAT, Ključ u ruke, Kako radimo, česta pitanja, forma za upit, kontakt.
- **Galerija:** 17 fotografija u 13 pločica, od toga 4 pre/posle. Ima filtere, dugme „Prikaži još radova“ i prikaz preko celog ekrana (Uporedi / Pre / Posle).
- **Svetle sekcije:** „Zašto FINMAT“ i „Zatražite ponudu“.
- **Jedno dugme za upit:** „Pošaljite upit“ u zaglavlju i hero delu, a na telefonu „Upit“ u donjoj traci.
- **Usluge:** klik na uslugu je označi u formi za upit.
- **Forma:** usluge se biraju iz padajućeg menija. Posle slanja prikazuje gotovu poruku koja se šalje na WhatsApp ili kopira za Viber.
- **Česta pitanja:** polje „Pitajte nas“. Odgovori su zasad unapred pripremljeni po ključnim rečima, ne daje ih pravi AI.
- **Kontakt kartice:** imaju dugme za kopiranje broja i email adrese.
- **Na telefonu:** donja traka Pozovi / WhatsApp / Upit, slajderi „Zašto FINMAT“ i „Kako radimo“.

## Pre objavljivanja pravog sajta

- **Upiti na email:** Web3Forms ključ je upisan u `var WEB3FORMS_KEY` pri dnu `index.html`; upiti stižu na finmat.rs@gmail.com. Novi ključ se pravi na web3forms.com.
- **Pravi AI asistent:** treba povezati AI servis (npr. Claude API preko male serverske funkcije), uz uputstvo šta firma radi i šta sme da obeća.
- **Pretraga (SEO):** sajt je označen kao pravi (`index, follow`). Adresa `https://finmat.rs/` je upisana u canonical, slike za deljenje, strukturisane podatke, `robots.txt` i `sitemap.xml`. Kad domen proradi, dodaj fajl `CNAME` sa `finmat.rs` i prijavi sitemap u Google Search Console.
- **Za potvrdu sa klijentom:** tekstovi u Čestim pitanjima, „besplatna procena“ u traci ispod hero dela i u tekstu pored forme, glavni broj za WhatsApp (sada Dejanov), nazivi fotografija u galeriji.
