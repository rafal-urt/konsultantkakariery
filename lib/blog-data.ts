export interface BlogPost {
  slug: string
  title: string
  date: string
  dateISO: string
  excerpt: string
  readingTime: string
  category: string
  image?: string
  content: BlogSection[]
}

export interface BlogSection {
  type: 'paragraph' | 'h2' | 'h3' | 'list' | 'quote' | 'callout'
  text?: string
  title?: string
  items?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'wspolpraca-z-konsultantka-kariery',
    title: 'Jak wygląda współpraca z konsultantką kariery? Czego możesz się spodziewać',
    date: '5 lutego 2026',
    dateISO: '2026-02-05',
    excerpt:
      'Zastanawiasz się, czym tak naprawdę zajmuje się konsultantka kariery i jak wygląda ta współpraca w praktyce? Poznaj cały proces — od pierwszej rozmowy do osiągnięcia celu zawodowego.',
    readingTime: '7 min',
    category: 'Zmiana pracy',
    image: '/gfx/smiley-businesswomen-having-meeting.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Wiele osób słyszy "konsultantka kariery" i wyobraża sobie kogoś, kto przeglądnie CV i zasugeruje kilka poprawek. W rzeczywistości to zupełnie inne doświadczenie — głębsze, bardziej spersonalizowane i zdecydowanie bardziej skuteczne niż jakikolwiek poradnik. Zanim zdecydujesz się umówić na rozmowę, masz prawo wiedzieć, jak ten proces wygląda od środka.',
      },
      {
        type: 'h2',
        text: 'Pierwsza rozmowa — bezpłatna i bez presji',
      },
      {
        type: 'paragraph',
        text: 'Każda współpraca zaczyna się od bezpłatnej, 30-minutowej rozmowy wstępnej. To nie jest ocena ani preselekcja — to przestrzeń, w której możesz opowiedzieć o swojej sytuacji zawodowej i o tym, czego szukasz. Słucham wtedy uważnie: nie po to, żeby od razu dawać rozwiązania, ale żeby zrozumieć, z czym naprawdę przychodzisz.',
      },
      {
        type: 'paragraph',
        text: 'Za każdym "chcę zmienić pracę" kryje się inna historia. Ktoś tkwi od lat w tej samej firmie i boi się zmian. Ktoś inny zmienił pracę trzy razy w dwa lata i nie wie dlaczego wciąż nie jest zadowolony. Ktoś wraca na rynek po urlopie rodzicielskim i nie wie, od czego zacząć. Pierwsza rozmowa pomaga mi zrozumieć, gdzie jesteś — i ustalić, czy i jak mogę Ci pomóc.',
      },
      {
        type: 'h2',
        text: 'Diagnoza zawodowa — punkt startowy każdej współpracy',
      },
      {
        type: 'paragraph',
        text: 'Jeśli zdecydujemy się na współpracę, zaczynamy od diagnozy. To etap, który wiele osób pomija, a który decyduje o wszystkim. Diagnoza obejmuje analizę wartości zawodowych — co jest dla Ciebie naprawdę ważne w pracy, nie co "powinno" być ważne. Przyglądamy się kompetencjom: co umiesz, co lubisz robić, a co robisz tylko dlatego, że kiedyś się na to zgodziłeś/aś. Badamy też przekonania, które blokują zmianę — bo często to nie brak umiejętności stoi na drodze, ale strach przed oceną, perfekcjonizm lub syndrom oszusta.',
      },
      {
        type: 'callout',
        title: 'Ważne',
        text: 'Diagnoza nie jest testem, który można "zdać" lub "oblać". To narzędzie do lepszego zrozumienia siebie — i punkt startowy do planowania realnych kroków. Każda osoba przechodzi przez nią inaczej, w swoim tempie.',
      },
      {
        type: 'h2',
        text: 'Jak wyglądają sesje?',
      },
      {
        type: 'paragraph',
        text: 'Sesja trwa zazwyczaj 60–90 minut i odbywa się online lub stacjonarnie w Lublinie. To rozmowa prowadzona według określonej struktury — nie swobodna pogawędka, ale też nie przesłuchanie. Pytam, słucham, konfrontuję z faktami i pomagam Ci zobaczyć rzeczy, których sam/sama nie dostrzegasz, bo jesteś zbyt blisko swojej sytuacji.',
      },
      {
        type: 'paragraph',
        text: 'W zależności od etapu współpracy, sesja może dotyczyć: analizy kompetencji i budowania narracji zawodowej, pracy nad CV i profilem LinkedIn, przygotowania do konkretnych rozmów kwalifikacyjnych, planowania strategii zmiany branży, a czasem — po prostu nazwania tego, co Cię blokuje i ustalenia, co z tym zrobić.',
      },
      {
        type: 'list',
        items: [
          'Każda sesja kończy się konkretnymi ustaleniami i zadaniami — nie tylko refleksją',
          'Między sesjami masz dostęp do mnie przez wiadomości w pilnych sprawach',
          'Tempo pracy ustalamy razem — nie ma odgórnego harmonogramu',
          'Możesz zadawać pytania, wracać do poprzednich tematów i korygować kurs',
          'Sesje są nagrywane (za Twoją zgodą), żebyś mógł/mogła wracać do treści',
        ],
      },
      {
        type: 'h2',
        text: 'Ile sesji potrzebujesz?',
      },
      {
        type: 'paragraph',
        text: 'To pytanie zadaje prawie każda osoba na pierwszej rozmowie — i rozumiem, dlaczego. Trudno wejść w coś, nie wiedząc, na co się decydujesz. Odpowiedź jest nieidealnie prosta: to zależy. Jeśli przychodzisz z jednym konkretnym problemem (np. chcesz przepisać CV albo przygotować się do zbliżającej się rozmowy), wystarczą 1–3 sesje. Jeśli chcesz przejść przez pełną zmianę kariery — od diagnozy do pierwszego dnia w nowej pracy — pracujemy razem przez 3–6 miesięcy.',
      },
      {
        type: 'quote',
        text: 'Nie pracuję według jednego schematu — bo każda droga zawodowa jest inna. Ważne jest, żebyś wychodził/wychodziła z każdej sesji z czymś konkretnym w ręku.',
      },
      {
        type: 'h2',
        text: 'Na jakie efekty możesz liczyć?',
      },
      {
        type: 'paragraph',
        text: 'Efekty współpracy różnią się w zależności od tego, z czym przychodzisz. Najczęściej obserwuję u klientów kilka wspólnych zmian: większą jasność co do kierunku zawodowego, czyli konkretną odpowiedź na pytanie "czego tak naprawdę chcę". Do tego konkretny plan działania — nie ogólnikowy, ale podzielony na etapy z terminami. Lepiej napisane, spójne dokumenty aplikacyjne. Bardziej pewna i naturalna autoprezentacja na rozmowach. I — może najważniejsze — odwagę do działania, która zastępuje odkładanie decyzji na "kiedyś".',
      },
      {
        type: 'list',
        items: [
          'Jasność co do wartości zawodowych i kierunku kariery',
          'Spójne CV i profil LinkedIn dopasowane do celu',
          'Pewność siebie w rozmowach kwalifikacyjnych i negocjacjach',
          'Konkretny plan z krokami i terminami, który faktycznie realizujesz',
          'Umiejętność mówienia o swoich osiągnięciach bez umniejszania',
          'Decyzje zawodowe podejmowane świadomie, a nie pod presją',
        ],
      },
      {
        type: 'h2',
        text: 'Dla kogo jest konsultacja kariery?',
      },
      {
        type: 'paragraph',
        text: 'Pracuję z osobami na bardzo różnych etapach: z kimś, kto właśnie skończył studia i nie wie, w którą stronę iść. Z kimś z 15-letnim doświadczeniem, kto wypalił się i chce zacząć od nowa. Z kimś, kto wraca na rynek po przerwie rodzicielskiej i czuje, że rynek go/ją wyprzedził. Wspólnym mianownikiem nie jest branża ani wiek — to poczucie, że coś jest nie tak, i chęć, żeby to zmienić.',
      },
      {
        type: 'h2',
        text: 'Zacznij od jednej rozmowy',
      },
      {
        type: 'paragraph',
        text: 'Nie musisz wiedzieć, czego dokładnie potrzebujesz. Nie musisz mieć gotowego pytania ani określonego problemu. Wystarczy, że czujesz, że coś chcesz zmienić — i że nie wiesz, jak to zrobić. Od tego właśnie zaczynamy. Pierwsza rozmowa jest bezpłatna, niezobowiązująca i zajmuje 30 minut. Możesz ją umówić przez formularz na stronie.',
      },
    ],
  },
  {
    slug: 'jak-sie-przygotowac-do-rozmowy-kwalifikacyjnej',
    title: 'Jak przygotować się do rozmowy kwalifikacyjnej – o czym zapominają kandydaci',
    date: '12 lutego 2026',
    dateISO: '2026-02-12',
    excerpt:
      'Większość kandydatów przygotowuje się do rozmowy kwalifikacyjnej w ten sam sposób — i właśnie dlatego niczym się nie wyróżniają. Dowiedz się, co naprawdę robi różnicę.',
    readingTime: '8 min',
    category: 'CV i rekrutacja',
    image: '/gfx/2147650899.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Wyobraź sobie, że rekruter ma przed sobą 10 kandydatów. Wszyscy przejrzeli stronę firmy, wszyscy mają przygotowane odpowiedzi na "Opowiedz o sobie", wszyscy powiedzą, że ich największą wadą jest perfekcjonizm. Jak w takiej sytuacji wyróżnić się w sposób, który naprawdę przekona? Odpowiedź leży w głębszym przygotowaniu — takim, do którego większość kandydatów nie dociera.',
      },
      {
        type: 'h2',
        text: 'Zrozum firmę głębiej niż inni kandydaci',
      },
      {
        type: 'paragraph',
        text: 'Strona internetowa to minimum — nie wyróżnik. Kandydaci, którzy robią wrażenie, przychodzą z czymś więcej: znajomością aktualnych wyzwań branżowych firmy, wiedząc co pisały o niej media w ostatnich miesiącach, znając opinie pracowników z Gowork lub Glassdoor. Sprawdź profil LinkedIn firmy i rekrutera — zrozumiesz kulturę, którą promują. Poszukaj wywiadów z CEO lub dyrektorem działu, do którego aplikujesz.',
      },
      {
        type: 'paragraph',
        text: 'Po co to wszystko? Żebyś na rozmowie mówił/mówiła o konkretach, a nie ogólnikach. Żebyś zadawał/a inteligentne pytania. I żebyś sam/sama wiedział/a, czy ta firma to miejsce, w którym naprawdę chcesz pracować — bo rozmowa kwalifikacyjna działa w dwie strony.',
      },
      {
        type: 'h2',
        text: 'Metoda STAR — jak opowiadać o doświadczeniu, żeby zapamiętano',
      },
      {
        type: 'paragraph',
        text: 'STAR to skrót od: Sytuacja (jaki był kontekst?), Zadanie (co było Twoim celem lub problemem do rozwiązania?), Akcja (co konkretnie zrobiłeś/zrobiłaś?) i Rezultat (co osiągnąłeś/osiągnęłaś — najlepiej w liczbach). Ta struktura zmienia odpowiedzi z ogólnikowych deklaracji w konkretne, wiarygodne historie. Rekruterzy zadają pytania behawioralne właśnie po to, żeby usłyszeć coś rzeczywistego — nie "jestem dobrym liderem", ale historię o tym, jak zbudowałeś/aś zespół w trudnych warunkach.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj 6–8 historii z różnych obszarów: liderstwo, rozwiązywanie problemów, współpraca, presja czasowa, porażka i wyciągnięte wnioski',
          'Do każdej historii dołącz mierzalny rezultat — procenty, kwoty, skrócony czas, liczba osób',
          'Sprawdź wymagania w ogłoszeniu i dopasuj swoje przykłady do kluczowych kompetencji',
          'Przećwicz każdą historię na głos — inaczej brzmi w głowie, inaczej wypowiedziana',
          'Jedna historia może odpowiadać na wiele pytań — wystarczy zmienić akcent',
        ],
      },
      {
        type: 'callout',
        title: 'Wskazówka praktyczna',
        text: 'Stwórz tabelę: w jednej kolumnie pytanie behawioralne (np. "Opowiedz o sytuacji, gdy zawiodłeś/aś"), w drugiej historia w formacie STAR. To ćwiczenie pokazuje luki — miejsca, gdzie nie masz dobrego przykładu. Lepiej je odkryć przed rozmową niż w trakcie.',
      },
      {
        type: 'h2',
        text: 'Jak odpowiedzieć na "Opowiedz o sobie"?',
      },
      {
        type: 'paragraph',
        text: '"Opowiedz o sobie" to pytanie, które otwiera większość rozmów — i jedno z najmniej przygotowywanych. Twoja odpowiedź powinna trwać 2–3 minuty i być zbudowana jak narracja zawodowa: skąd przyszedłem/przyszłam, co robiłem/robiłam i czego się nauczyłem/nauczyłam, dlaczego jestem tutaj i co mogę wnieść. Nie recytuj CV chronologicznie. Opowiedz historię prowadzącą wprost do tej rozmowy.',
      },
      {
        type: 'quote',
        text: 'Rekruterzy zapamiętują kandydatów, którzy opowiadają spójną, konkretną historię — nie tych, którzy wyliczają stanowiska z CV.',
      },
      {
        type: 'h2',
        text: 'Pytania o wynagrodzenie — jak nie dać się zaskoczyć',
      },
      {
        type: 'paragraph',
        text: 'To temat, którego większość kandydatów się boi i dlatego jest nieprzygotowana. Tymczasem zasada jest prosta: sprawdź rynek przed rozmową. Raporty płacowe Pracuj.pl, Sedlak & Sedlak, ogłoszenia z widełkami, rozmowy z osobami w branży — to wszystko daje Ci realne dane. Podaj konkretny zakres, nie odpowiadaj "to zależy od oferty". Niejasność w kwestii wynagrodzenia jest sygnałem braku znajomości własnej wartości rynkowej.',
      },
      {
        type: 'h2',
        text: 'Pytania do rekrutera — dlaczego robią różnicę',
      },
      {
        type: 'paragraph',
        text: 'Brak pytań na koniec rozmowy to jeden z najczęstszych błędów. "Nie mam pytań" mówi rekruterowi, że albo nie jesteś zainteresowany/a, albo nie myślisz strategicznie. Tymczasem dobre pytania nie tylko robią wrażenie — pomagają Ci ocenić, czy naprawdę chcesz tu pracować.',
      },
      {
        type: 'list',
        items: [
          '"Jak wygląda typowy pierwszy miesiąc na tym stanowisku?"',
          '"Jakie wyzwania stoją przed zespołem w najbliższym półroczu?"',
          '"Co sprawia, że osoby na podobnych stanowiskach odnoszą tu sukces?"',
          '"Jak wygląda feedback i ścieżka rozwoju w tej firmie?"',
          '"Jakie są kolejne kroki rekrutacji i kiedy mogę spodziewać się odpowiedzi?"',
        ],
      },
      {
        type: 'h2',
        text: 'Najczęstsze błędy, które kosztują ofertę',
      },
      {
        type: 'paragraph',
        text: 'Spóźnienie (nawet na rozmowę online — sprawdź sprzęt dzień wcześniej). Mówienie źle o poprzednim pracodawcy — to zawsze działa na niekorzyść kandydata. Zbyt ogólne odpowiedzi bez przykładów. Nieznajomość firmy poza stroną "O nas". Brak entuzjazmu — rekruterzy szukają kogoś, kto naprawdę chce tu pracować, nie kogoś, kto przyszedł z obowiązku. I najważniejsze: brak przygotowania na trudne pytania. Twoje największe porażki, luki w CV, odejście z poprzedniej pracy — na to wszystko warto mieć gotową, spokojną odpowiedź.',
      },
    ],
  },
  {
    slug: 'trudne-relacje-w-pracy',
    title: 'Trudne relacje w pracy: kiedy środowisko zawodowe szkodzi Twojemu dobrostanowi',
    date: '19 lutego 2026',
    dateISO: '2026-02-19',
    excerpt:
      'Toksyczne środowisko pracy to jeden z głównych powodów wypalenia zawodowego i rezygnacji z dobrej kariery. Dowiedz się, jak rozpoznać problem i jakie masz opcje.',
    readingTime: '7 min',
    category: 'Wypalenie zawodowe',
    image: '/gfx/2149719323.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Jest poniedziałkowy ranek. Wstajesz i zamiast myśleć o zadaniach dnia, czujesz ciężar w żołądku na samą myśl o przyjściu do biura. Siedzisz przy biurku i obserwujesz, jak współpracownicy śmieją się, świętują sukcesy, wymieniają spojrzenia — z których jesteś wykluczona/y. Może mówisz sobie, że przesadzasz. Że to normalne. Że inni mają gorzej. Ale Twoje ciało wie lepiej.',
      },
      {
        type: 'h2',
        text: 'Czym jest toksyczne środowisko pracy?',
      },
      {
        type: 'paragraph',
        text: 'Toksyczność w miejscu pracy rzadko wygląda jak scena z filmowego thrillera. Częściej jest subtelna — i właśnie dlatego trudna do nazwania. To niekoniecznie krzyk przełożonego czy jawna agresja. To komentarze, które zostawiają w Tobie coś nieprzyjemnego. Zebrania, z których wychodzisz z poczuciem, że Twój głos nie istnieje. Sukcesy, które znikają bez słowa uznania. Błędy, które są publicznie piętnowane. Informacje przekazywane wszystkim — tylko nie Tobie.',
      },
      {
        type: 'paragraph',
        text: 'Toksyczne środowisko może dotyczyć jednej relacji (z przełożonym, ze współpracownikiem) lub całej kultury organizacji. To ważne rozróżnienie — bo od niego zależy, co możesz z tym zrobić.',
      },
      {
        type: 'h2',
        text: 'Sygnały, których nie wolno ignorować',
      },
      {
        type: 'list',
        items: [
          'Czujesz napięcie lub lęk przed przyjściem do pracy — regularnie, nie tylko w trudniejsze dni',
          'Jesteś pomijany/a w komunikacji, spotkaniach lub projektach bez jasnego powodu',
          'Twoje pomysły są ignorowane, a gdy ktoś inny je powtórzy — są doceniane',
          'Po pracy potrzebujesz długiego czasu, żeby "dojść do siebie" — praca wyczerpuje Cię emocjonalnie',
          'Zacząłeś/zaczęłaś wątpić w swoje kompetencje, mimo że wcześniej byłeś/byłaś pewny/a siebie',
          'Relacje zawodowe zaczynają negatywnie wpływać na Twoje życie prywatne, sen lub zdrowie',
          'Boisz się zabierać głos — bo spotkałeś/aś się z krytyką, wyśmianiem lub brakiem reakcji',
        ],
      },
      {
        type: 'callout',
        title: 'To nie Twoja wina',
        text: 'Jedną z najtrudniejszych rzeczy w toksycznych środowiskach jest to, że często sprawiają, że wątpimy w siebie zamiast w system. Jeśli rozpoznajesz te sygnały — nie szukaj błędu wyłącznie w sobie. Środowisko naprawdę może być problemem.',
      },
      {
        type: 'h2',
        text: 'Jak toksyczność niszczy Cię zawodowo — i osobiście',
      },
      {
        type: 'paragraph',
        text: 'Długotrwałe funkcjonowanie w toksycznym środowisku ma konkretne, mierzalne skutki. Zawodowo: stagnacja (nie rozwijasz się, bo energia idzie na przetrwanie), utrata motywacji, obniżone poczucie własnej wartości, które przenosi się na kolejne etapy kariery. Zdrowotnie: chroniczny stres, problemy ze snem, bóle psychosomatyczne, stany lękowe. Osobiście: wychodzisz z pracy wyczerpany/a i wnosisz ten ciężar do domu — do relacji, do rodziny, do siebie.',
      },
      {
        type: 'quote',
        text: 'Środowisko, w którym pracujesz, kształtuje to, kim stajesz się zawodowo. Możesz mieć świetne kompetencje i niszczyć je latami w miejscu, które Cię pomniejsza.',
      },
      {
        type: 'h2',
        text: 'Zanim zdecydujesz się odejść — co możesz zrobić',
      },
      {
        type: 'paragraph',
        text: 'Odejście nie zawsze jest pierwszym ani jedynym krokiem. Czasem warto najpierw nazwać problem — na piśmie, dla siebie. Zapisz konkretne sytuacje, które Cię dotykają: daty, słowa, okoliczności. To daje dystans i materiał do rozmowy — z przełożonym, z HR lub z samym/samą sobą. Jeśli problem dotyczy relacji z konkretną osobą, bezpośrednia rozmowa — spokojnie, bez atakowania — czasem przynosi zmianę. Jeśli nie przynosi: masz prawo eskalować.',
      },
      {
        type: 'paragraph',
        text: 'Jeśli natomiast toksyczność jest wbudowana w kulturę firmy — w sposób, w jaki zarządza się, komunikuje i traktuje ludzi — wewnętrzne rozmowy rzadko cokolwiek zmieniają trwale. W takiej sytuacji pytanie nie brzmi "czy odejść?", ale "kiedy i jak to zrobić bezpiecznie".',
      },
      {
        type: 'h2',
        text: 'Jak zaplanować bezpieczne wyjście',
      },
      {
        type: 'list',
        items: [
          'Nie podejmuj decyzji o odejściu w najgorszym momencie emocjonalnym — daj sobie 2–4 tygodnie',
          'Zacznij szukać nowej pracy zanim odejdziesz — negocjujesz z mocniejszej pozycji będąc zatrudnionym/ą',
          'Nie mów w biurze o planach odejścia, zanim masz podpisaną nową umowę',
          'Zadbaj o referencje — przemyśl, kogo poprosisz i zrób to przed odejściem',
          'Przygotuj się na pytanie "dlaczego odchodzisz" — miej neutralną, spokojną odpowiedź',
          'Rozważ wsparcie konsultantki kariery przy planowaniu zmiany i odbudowie pewności siebie',
        ],
      },
      {
        type: 'h2',
        text: 'Dbanie o siebie to nie słabość',
      },
      {
        type: 'paragraph',
        text: 'Mamy tendencję do racjonalizowania środowisk, które nam szkodzą: "to tylko praca", "mogło być gorzej", "może się przyzwyczaję". Ale 8 godzin dziennie to nie "tylko praca" — to ogromna część życia, która kształtuje to, jak się czujesz, jak myślisz o sobie i jak funkcjonujesz. Masz prawo wymagać środowiska, które Cię szanuje. I masz prawo szukać takiego miejsca — nawet jeśli w tej chwili wydaje Ci się to za trudne.',
      },
    ],
  },
  {
    slug: 'rozmowa-kwalifikacyjna-bez-stresu',
    title: 'Rozmowa kwalifikacyjna bez stresu – jak wypaść pewnie i przekonać rekrutera',
    date: '26 lutego 2026',
    dateISO: '2026-02-26',
    excerpt:
      'Stres przed rozmową kwalifikacyjną jest naturalny — ale można go skutecznie oswoić. Poznaj strategie, które pomogą Ci wypaść pewnie i zaprezentować się z najlepszej strony.',
    readingTime: '7 min',
    category: 'CV i rekrutacja',
    image: '/gfx/13153.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Dostałeś/aś zaproszenie na rozmowę kwalifikacyjną. Przez chwilę czujesz ulgę i radość — a potem zaczyna się znajomy film: co powiem, jak zapomnę, co pomyślą, co jeśli zadadzą pytanie, na które nie znam odpowiedzi. Stres przed rozmową jest absolutnie naturalny. Problem pojawia się tylko wtedy, gdy zamiast mobilizować — paraliżuje. I z tym można skutecznie pracować.',
      },
      {
        type: 'h2',
        text: 'Stres to nie wróg — to sygnał',
      },
      {
        type: 'paragraph',
        text: 'Stres jest odpowiedzią organizmu na sytuację, w której coś ważnego stoi na szali. To nie słabość — to ewolucyjny mechanizm mobilizowania zasobów. Kandydaci, którzy rozumieją to przesunięcie perspektywy, zyskują ogromną przewagę: zamiast walczyć ze stresem, uczą się go wykorzystywać. Podwyższony poziom adrenaliny przed rozmową sprawia, że jesteś bardziej skupiony/a, szybciej myślisz i masz więcej energii. Pytanie tylko, czy skierujesz tę energię we właściwą stronę.',
      },
      {
        type: 'h2',
        text: 'Jak przygotowanie eliminuje stres — skuteczniej niż cokolwiek innego',
      },
      {
        type: 'paragraph',
        text: 'Większość stresu przed rozmową wynika z niepewności: co zostanę zapytany/a, co o sobie powiedzieć, jak wypaść. Dobre przygotowanie redukuje tę niepewność — i tym samym redukuje stres. Kiedy wiesz, co chcesz powiedzieć, i masz gotowe konkretne przykłady ze swojej pracy, nie musisz niczego wymyślać na bieżąco. A improwizacja pod presją prawie nigdy nie wychodzi tak dobrze jak solidne przygotowanie.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj odpowiedzi na najczęstsze pytania behawioralne w formacie STAR',
          'Przećwicz odpowiedź na "Opowiedz o sobie" — na głos, nie w głowie — min. 3 razy',
          'Sprawdź firmę dogłębnie: produkty, kultura, aktualne wyzwania, opinie pracowników',
          'Przygotuj 4–5 pytań do rekrutera — to zmniejsza lęk przez przywrócenie sprawczości',
          'Zadbaj o logistykę: godzina, dojazd, strój, sprzęt przy rozmowie online — bez niespodzianek',
        ],
      },
      {
        type: 'h2',
        text: 'Techniki mentalne i oddechowe przed rozmową',
      },
      {
        type: 'paragraph',
        text: 'W dniu rozmowy warto mieć kilka technik "na ostry dyżur". Oddychanie przeponowe: 4 sekundy wdech, 6 sekund wydech, powtórzone 5 razy — aktywuje układ przywspółczulny i fizycznie obniża poziom napięcia. Wizualizacja: wyobraź sobie rozmowę, która idzie dobrze. Nie cudownie, nie perfekcyjnie — po prostu dobrze. Twój mózg nie odróżnia wyobraźni od rzeczywistości i traktuje wizualizację jako "trening". "Power pose": dwie minuty przed rozmową w otwartej, pewnej pozie — badania Amy Cuddy pokazują, że to realnie zmienia poziom hormonów.',
      },
      {
        type: 'callout',
        title: 'Sprawdzone ćwiczenie na stres',
        text: 'Wieczór przed rozmową: zapisz 3 osiągnięcia zawodowe, z których jesteś dumny/dumna. Rankiem przeczytaj je na głos. To proste ćwiczenie aktywuje zasoby i przypomina Ci, że masz konkretną wartość — nie idziesz na łaskę i niełaskę rekrutera.',
      },
      {
        type: 'quote',
        text: 'Pewność siebie na rozmowie kwalifikacyjnej to nie brak strachu. To działanie mimo niego — i wiedza, że masz coś wartościowego do zaoferowania.',
      },
      {
        type: 'h2',
        text: 'Mowa ciała — co mówisz zanim otworzysz usta',
      },
      {
        type: 'paragraph',
        text: 'Rekruter ocenia Cię od pierwszych sekund — zanim padnie pierwsze pytanie. Pewny uścisk dłoni (przy spotkaniu stacjonarnym), kontakt wzrokowy, wyprostowana sylwetka — te sygnały komunikują pewność siebie niezależnie od tego, co czujesz w środku. Przy rozmowie online: zadbaj o neutralne tło, dobrą kamerę na poziomie oczu, dobre oświetlenie. Techniczne problemy i zaburzona komunikacja niekoniecznie dyskwalifikują — ale pierwsza minuta naprawdę robi różnicę.',
      },
      {
        type: 'h2',
        text: 'Trudne pytania — jak nie dać się zaskoczyć',
      },
      {
        type: 'paragraph',
        text: 'Luki w CV, odejście z poprzedniej pracy, brak doświadczenia w konkretnym obszarze, prośba o samokrytykę — na to wszystko warto mieć przemyślaną, spokojną odpowiedź. Nie chodzi o ukrywanie faktów, ale o opowiedzenie ich we właściwym kontekście. "Odszedłem/odeszłam, bo szukam środowiska, w którym mogę się rozwijać" — to nie wymówka, to prawda. Pamiętaj: cisza i chwila namysłu przed odpowiedzią to oznaka refleksyjności, nie słabości.',
      },
      {
        type: 'list',
        items: [
          '"Jaka jest Twoja największa wada?" — wybierz realną słabość, pokaż co z nią robisz',
          '"Dlaczego odszedłeś/odeszłaś z poprzedniej pracy?" — neutralnie, bez krytyki pracodawcy',
          '"Gdzie widzisz siebie za 5 lat?" — bądź szczery/a, ale powiąż z rolą i firmą',
          '"Dlaczego chcesz tu pracować?" — miej konkretną, opartą na faktach odpowiedź',
          '"Co wiesz o naszej firmie?" — tu brak przygotowania jest najlepiej widoczny',
        ],
      },
      {
        type: 'h2',
        text: 'Po rozmowie — niezależnie od wyniku',
      },
      {
        type: 'paragraph',
        text: 'Wyślij wiadomość z podziękowaniem — to wyróżnia kandydatów i pokazuje profesjonalizm. Zapisz swoje obserwacje: co poszło dobrze, co następnym razem zrobisz inaczej, jak oceniasz firmę. Jeśli nie dostałeś/aś oferty — możesz zapytać o feedback. Nie wszyscy go udzielają, ale ci, którzy tak — dają Ci cenny materiał do pracy. I pamiętaj: odmowa nie jest oceną Twojej wartości. Jest wynikiem konkretnego momentu, w którym ktoś inny pasował do tej roli trochę lepiej — lub decyzja zapadła z powodów, o których nie wiesz.',
      },
    ],
  },
  {
    slug: 'pierwsze-tygodnie-w-nowej-pracy',
    title: 'Pierwsze tygodnie w nowej pracy: jak szybko odnaleźć się i zrobić dobre wrażenie',
    date: '5 marca 2026',
    dateISO: '2026-03-05',
    excerpt:
      'Zaczynasz nową pracę i chcesz jak najlepiej wykorzystać ten czas? Pierwsze tygodnie mają ogromne znaczenie — dowiedz się, jak je dobrze zaplanować i wejść pewnie w nową rolę.',
    readingTime: '6 min',
    category: 'Zmiana pracy',
    image: '/gfx/2148347260.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Podpisałeś/podpisałaś umowę. Świętowałeś/świętowałaś. A teraz — pierwszego ranka w nowej pracy — czujesz mieszaninę ekscytacji i czegoś, co przypomina lekką panikę. Nowe twarze, nowe procesy, nowa kultura, nowe oczekiwania. I pytanie, które brzęczy gdzieś w głowie: czy dałem/dałam radę, tu gdzie już podjąłem/podjęłam decyzję? Spokojnie — to, co teraz czujesz, jest absolutnie normalne. I da się przez to przejść mądrze.',
      },
      {
        type: 'h2',
        text: 'Pierwsze dni — obserwuj zanim zaczniesz działać',
      },
      {
        type: 'paragraph',
        text: 'Jednym z najczęstszych błędów nowych pracowników jest zbyt wczesne wchodzenie z pomysłami i propozycjami zmian. Nawet jeśli masz duże doświadczenie i widzisz "oczywiste" usprawnienia — zatrzymaj się. Pierwsze tygodnie powinny być przede wszystkim czasem obserwacji: jak ludzie się tu komunikują, jakie są niepisane zasady, kto naprawdę ma wpływ (niekoniecznie ten, kto jest najwyżej w hierarchii), co działa dobrze i dlaczego.',
      },
      {
        type: 'paragraph',
        text: 'Za pozornie nieefektywnymi rozwiązaniami często stoją ważne powody: historyczne decyzje, ograniczenia techniczne, kompromisy między działami. Zanim zaproponujesz zmianę — zrozum, dlaczego jest tak, jak jest. To nie tylko oszczędza Cię przed niezręcznymi sytuacjami, ale pokazuje Twoją dojrzałość zawodową.',
      },
      {
        type: 'h2',
        text: 'Relacje przede wszystkim — nawet jeśli jesteś introwertykiem',
      },
      {
        type: 'paragraph',
        text: 'Sukces w nowej pracy rzadko zależy wyłącznie od kompetencji technicznych. Zależy od relacji — od tego, czy ludzie chcą z Tobą pracować, czy Ci ufają, czy czują, że jesteś "swój/swoja". I te relacje budujesz właśnie teraz, w pierwszych tygodniach, kiedy wszyscy patrzą na Ciebie z naturalną ciekawością.',
      },
      {
        type: 'list',
        items: [
          'Przedstawiaj się aktywnie — nie czekaj, aż ktoś do Ciebie podejdzie',
          'Pytaj o projekty, kontekst, historię — "Jak to tutaj działa?" to najlepsza rozmowa startowa',
          'Zapraszaj współpracowników na kawę lub krótką rozmowę — małe gesty budują duże relacje',
          'Poznaj osoby kluczowe dla Twojej roli, nie tylko tych w tym samym pokoju',
          'Zapamiętuj imiona — to jeden z najprostszych przejawów szacunku dla rozmówcy',
          'Okazuj wdzięczność za pomoc — nowi pracownicy często są wspierani, ale rzadko dziękują',
        ],
      },
      {
        type: 'callout',
        title: 'Pamiętaj',
        text: 'Bycie nowym to jeden z nielicznych momentów, w których możesz pytać o podstawowe rzeczy bez utraty wiarygodności. Korzystaj z tego okna — za 3 miesiące pytanie o coś oczywistego będzie bardziej niezręczne. Teraz masz przyzwolenie na "nie wiem, możesz mi wytłumaczyć?".',
      },
      {
        type: 'quote',
        text: 'Nowi pracownicy, którzy aktywnie słuchają i zadają dobre pytania, szybciej budują autorytet niż ci, którzy od pierwszego dnia mówią, co i jak zmienić.',
      },
      {
        type: 'h2',
        text: 'Syndrom nowego pracownika — to normalne i przejściowe',
      },
      {
        type: 'paragraph',
        text: 'Poczucie, że wszyscy wiedzą więcej, że nie nadążasz, że może to była zła decyzja — to "krzywa onboardingu". Badania pokazują, że większość nowych pracowników doświadcza tego między 3. a 8. tygodniem pracy. Produktywność spada, bo uczysz się nowego systemu, nie masz jeszcze zaufanych kolegów i działasz na niepełnych informacjach. To absolutnie normalne i przejściowe — zazwyczaj mija między 6. a 12. tygodniem.',
      },
      {
        type: 'paragraph',
        text: 'Jeśli poczujesz, że wątpisz w swoją decyzję — przypomnij sobie, dlaczego jej podjąłeś/podjęłaś. Zapisz powody. Nie oceniaj nowego miejsca na podstawie pierwszych 2–3 tygodni, bo to jak ocenianie filmów po trailerze.',
      },
      {
        type: 'h2',
        text: 'Jak pokazać wartość — bez bycia nachalnym',
      },
      {
        type: 'paragraph',
        text: 'Wykazanie wartości w nowej pracy nie polega na bieganiu z pomysłami od pierwszego dnia. Polega na rzetelnym wykonywaniu tego, czego od Ciebie oczekują — terminowo, solidnie, bez wymówek. Polega na aktywnym uczestnictwie w spotkaniach: nie dominowaniu, ale obecności. Na zgłaszaniu się do zadań, których nikt inny nie chce, a które wymagają dobrego wykonania. I na małych gestach: dotrzymywanie słowa, odpowiadanie na maile, pamiętanie o ustaleniach.',
      },
      {
        type: 'h2',
        text: 'Plan na pierwsze 90 dni — ustrukturyzowane wejście',
      },
      {
        type: 'paragraph',
        text: 'Warto potraktować pierwsze 90 dni jak projekt z konkretnymi etapami. Pomocna jest struktura 30-60-90: pierwszy miesiąc to uczenie się i słuchanie. Drugi — budowanie relacji i pierwsze samodzielne działania. Trzeci — wdrażanie i pierwsze mierzalne efekty. Do każdego etapu możesz przypisać konkretne cele: kogo chcę poznać, co chcę rozumieć, co chcę zrobić.',
      },
      {
        type: 'list',
        items: [
          '30 dni: rozumiem procesy, poznałem/poznałam kluczowe osoby, wiem czego się ode mnie oczekuje',
          '60 dni: samodzielnie realizuję zadania, buduję relacje poza bezpośrednim zespołem',
          '90 dni: dostarczam pierwsze konkretne wyniki, mam feedback od przełożonego',
          'Poproś o rozmowę feedbackową po 30 i 60 dniach — sam/sama zainicjuj',
          'Regularnie notuj: co zrozumiałem/zrozumiałam, co mnie zaskoczyło, co chcę zbadać głębiej',
        ],
      },
      {
        type: 'h2',
        text: 'Zmiana pracy to proces, nie zdarzenie',
      },
      {
        type: 'paragraph',
        text: 'Wiele osób myśli, że zmiana pracy kończy się w dniu podpisania umowy. W rzeczywistości zaczyna się właśnie wtedy — i trwa kilka dobrych miesięcy. Pierwsze tygodnie w nowej pracy to ostatni etap procesu zmiany zawodowej i pierwszy etap budowania nowego rozdziału. Warto wejść w ten czas świadomie — z planem, z cierpliwością wobec siebie i z ciekawością, która potrafi zastąpić lęk.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
