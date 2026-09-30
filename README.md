# FINMAT — predlozi dizajna sajta (radna verzija)

Pregled dva predloga za klijenta. Fotografije radova stižu naknadno, pa su na njihovim mestima prazna polja „Fotografija uskoro“.

```
index.html      početna: izbor između predloga B i D
b/index.html    predlog B — Tamni luksuz (crna i zlatna)
d/index.html    predlog D — Grafit (tamna grafitna paleta)
.nojekyll       da GitHub Pages ne obrađuje fajlove
```

Svaki predlog je jedan HTML fajl (CSS i JS su u njemu). Nema build koraka ni zavisnosti, samo fontovi sa Google Fonts.

## Postavljanje na GitHub Pages

1. Na github.com napravite novi repozitorijum, npr. `finmat`. Može da bude Public.
2. **Add file → Upload files**. Prevucite **sadržaj** foldera `finmat-github` (`index.html`, folderi `b` i `d`, `.nojekyll`, ovaj README), pa kliknite **Commit changes**.
   - Fajl `.nojekyll` je skriven. Na Mac-u ga u Finder-u prikažite sa Cmd+Shift+. ; bez njega sajt i dalje radi.
3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch **main**, folder **/ (root)**, pa **Save**.
4. Posle 1–2 minuta sajt je na:
   - `https://<korisnik>.github.io/finmat/` — početna sa izborom
   - `https://<korisnik>.github.io/finmat/b/` — predlog B
   - `https://<korisnik>.github.io/finmat/d/` — predlog D

Ako umesto novog repozitorijuma koristite postojeći `<korisnik>.github.io`, stavite sve u podfolder `finmat/` i adrese su iste kao gore.

## Šta radi u ovoj verziji

- Prilagođeno za računar, tablet i telefon (Chrome, Safari, Firefox; Android i iOS). Provereno na širinama 1440, 768, 390 i 320 px, bez horizontalnog skrolovanja.
- Meni: na telefonu i tabletu preko celog ekrana; Escape ga zatvara.
- Galerija: filter po vrsti prostora i prikaz preko celog ekrana sa strelicama, sličicama, tastaturom (← → Esc) i prevlačenjem prstom.
- Forma za upit: proverava obavezna polja. Dok se ne upiše Web3Forms ključ, pravi gotovu poruku koja se šalje na WhatsApp jednim klikom ili se kopira za Viber.
- Na telefonu: donja traka Pozovi / WhatsApp / Upit.
- Samo D, na telefonu: usluge kao spisak koji se otvara dodirom, „Kako radimo“ kao slajder, izbor usluga u formi kao padajući meni.
- Stranice imaju `noindex`, pa ih Google ne prikazuje u pretrazi dok su u izradi.

## Pre objavljivanja pravog sajta

- **Upiti na email:** napravite besplatan ključ na web3forms.com (na email firme) i upišite ga u `const WEB3FORMS_KEY = "";` u `b/index.html` ili `d/index.html`.
- **Fotografije:** umesto praznih polja u galeriji i hero delu. Sistem za zamenu slika se dodaje kad stignu fotografije.
- **Tekstovi za potvrdu sa klijentom:** odgovori u Čestim pitanjima (besplatna procena, rokovi, materijal), glavni broj za WhatsApp (sada Dejanov), linkovi ka Instagramu i Facebooku.
- **Za domen:** skinuti `noindex`, dodati Open Graph sliku za deljenje linka i favicon u PNG formatu.
