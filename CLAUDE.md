# Pravila za rad sa Git-om

## Komanda: TEST
Kad korisnik napiše **TEST**:
1. Proveri da li projekat ima granu `test` (lokalno ili na `origin`).
2. Pre pusha kratko napiši korisniku šta je promenjeno (spisak izmenjenih fajlova i ukratko šta je urađeno).
3. Commituj sve izmene sa kratkim opisom na **srpskom** jeziku.
4. Pushuj:
   - ako postoji grana `test` → prebaci se na nju (ako već nisi) i pushuj na `test`,
   - ako ne postoji → pushuj na trenutnu granu na GitHub.

## Komanda: OBJAVI
Kad korisnik napiše **OBJAVI**:
1. Pre pusha kratko napiši korisniku šta se objavljuje (šta je promenjeno u odnosu na `main`).
2. Ako postoji grana `test`:
   - commituj eventualne necommitovane izmene na `test` i pushuj ih,
   - prebaci se na `main`, povuci najnovije (`git pull`), spoji `test` u `main` (`git merge test`),
   - pushuj `main` na GitHub,
   - vrati se na granu `test`.
3. Ako ne postoji grana `test`:
   - commituj sve izmene (kratak opis na srpskom) direktno na `main` i pushuj `main` na GitHub.

## Opšte
- Uvek pre svakog pusha kratko napiši šta je promenjeno.
- Commit poruke piši kratko i na srpskom.
- Ako dođe do konflikta pri spajanju, zaustavi se i javi korisniku umesto da ga rešavaš na svoju ruku.
