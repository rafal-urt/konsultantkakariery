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

interface BlogSection {
  type: 'paragraph' | 'h2' | 'h3' | 'list'
  text?: string
  items?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'zmiana-pracy-bez-chaosu',
    title: 'Zmiana pracy bez chaosu – od czego naprawdę warto zacząć',
    date: '28 października 2025',
    dateISO: '2025-10-28',
    excerpt:
      'Chcesz zmienić pracę, ale nie wiesz od czego zacząć? Dowiedz się, jak krok po kroku zaplanować zmianę zawodową bez niepotrzebnego stresu i chaosu.',
    readingTime: '6 min',
    category: 'Zmiana pracy',
    image: '/gfx/ewelina_1.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Zmiana pracy to jedno z najczęstszych wyzwań, z którymi przychodzą do mnie klienci. Większość z nich wie, że chce czegoś innego, ale nie wie, jak do tego dojść. Chaos, lęk i paraliż decyzyjny to naturalne towarzyszące im uczucia — i to jest dobry punkt startowy, by zrozumieć, dlaczego zmiana pracy bez planu rzadko się udaje.',
      },
      {
        type: 'h2',
        text: 'Dlaczego zmiana pracy wydaje się taka trudna?',
      },
      {
        type: 'paragraph',
        text: 'Problem z większością podejść do zmiany pracy polega na tym, że zaczynamy od końca — od przeglądania ogłoszeń o pracę, zanim wiemy, czego tak naprawdę szukamy. Efektem jest frustracja: wysyłamy aplikacje na oślep, nie wiemy, jak się wyróżnić, a rozmowy kwalifikacyjne kończą się odrzuceniem, którego nie rozumiemy.',
      },
      {
        type: 'paragraph',
        text: 'Zmiana pracy to proces, który wymaga czasu i refleksji. Nie chodzi tylko o znalezienie nowego pracodawcy — chodzi o znalezienie pracy, która będzie lepsiej pasować do Ciebie. A żeby to zrobić, musisz najpierw wiedzieć, kim jesteś zawodowo i czego potrzebujesz.',
      },
      {
        type: 'h2',
        text: 'Zacznij od siebie, nie od ofert pracy',
      },
      {
        type: 'paragraph',
        text: 'Pierwszym krokiem w każdej zmianie zawodowej powinno być zatrzymanie się i zadanie sobie kilku kluczowych pytań. Brzmi prosto, ale w praktyce ta część jest najtrudniejsza, bo wymaga szczerości wobec siebie. Co lubisz robić w pracy — nie to, co powinieneś lubić, ale to, co naprawdę daje Ci energię? Co Cię drażni lub wyczerpuje? Jakie masz kompetencje, których używasz tylko częściowo lub wcale?',
      },
      {
        type: 'paragraph',
        text: 'Warto też zadać pytanie o wartości: co jest dla Ciebie ważne w pracy? Autonomia, stabilność, kontakt z ludźmi, wynagrodzenie, możliwość rozwoju? Kiedy Twoja praca koliduje z Twoimi wartościami, pojawia się poczucie niespełnienia — nawet jeśli na papierze wszystko wygląda dobrze.',
      },
      {
        type: 'h2',
        text: 'Jak określić kierunek zmiany?',
      },
      {
        type: 'paragraph',
        text: 'Po autodiagnozie przychodzi czas na zbadanie możliwości. Nie chodzi o to, by od razu wiedzieć wszystko — chodzi o zawężenie pola możliwości do kilku realnych opcji, które warto zbadać głębiej. Możesz porozmawiać z osobami pracującymi w interesujących Cię branżach, przeczytać opis stanowisk pracy i sprawdzić, czy Twoje umiejętności są dopasowane, a także zastanowić się, jakie dodatkowe kwalifikacje mogłyby Ci pomóc.',
      },
      {
        type: 'list',
        items: [
          'Zidentyfikuj swoje mocne strony i wartości zawodowe',
          'Zbadaj 2-3 kierunki, które Cię interesują',
          'Porozmawiaj z osobami pracującymi w tych obszarach',
          'Sprawdź wymagania na interesujących Cię stanowiskach',
          'Określ luki kompetencyjne i sposób ich uzupełnienia',
        ],
      },
      {
        type: 'h2',
        text: 'Tworzenie planu działania — konkretne kroki',
      },
      {
        type: 'paragraph',
        text: 'Gdy już wiesz, w jakim kierunku chcesz iść, czas stworzyć realny plan. Plan działania powinien być konkretny, mierzalny i podzielony na małe kroki. Nie "znajdę nową pracę" — ale "w tym tygodniu zaktualizuję CV i wyślę 3 aplikacje". Małe kroki redukują lęk i dają poczucie sprawczości.',
      },
      {
        type: 'paragraph',
        text: 'Zmiana pracy to maraton, nie sprint. Pozwól sobie na czas — ale zadbaj o to, żeby każdy tydzień niósł ze sobą choć jedno konkretne działanie. Pamiętaj też, że nie musisz robić tego sam/sama. Konsultantka kariery może pomóc Ci skrócić drogę do właściwego miejsca.',
      },
    ],
  },
  {
    slug: 'gdy-praca-przestaje-pasowac',
    title: 'Gdy praca przestaje pasować: sygnały, których nie warto ignorować',
    date: '28 października 2025',
    dateISO: '2025-10-28',
    excerpt:
      'Czy Twoja praca naprawdę Ci służy? Poznaj sygnały — fizyczne, emocjonalne i zawodowe — które mogą wskazywać, że czas na zmianę.',
    readingTime: '5 min',
    category: 'Wypalenie zawodowe',
    image: '/gfx/ewelina_2.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Niedzielny wieczór. Zamiast odpoczywać, czujesz narastający niepokój na myśl o poranku. Budzik w poniedziałek to nie zapowiedź nowego tygodnia — to coś, czego naprawdę nie chcesz słyszeć. Jeśli to brzmi znajomo, ten wpis jest dla Ciebie.',
      },
      {
        type: 'h2',
        text: 'Fizyczne sygnały, które warto zauważyć',
      },
      {
        type: 'paragraph',
        text: 'Nasze ciało często pierwszym mówi nam, że coś jest nie tak — zanim nasza głowa zdąży to przetworzyć. Chroniczne zmęczenie, bóle głowy, problemy ze snem, napięcie mięśni, częstsze choroby — to mogą być sygnały stresu zawodowego. Organizm reaguje na długotrwałe napięcie psychiczne tak samo jak na fizyczne zagrożenie — mobilizuje zasoby, których potem brakuje do normalnego funkcjonowania.',
      },
      {
        type: 'paragraph',
        text: 'Nie ignoruj tych sygnałów. Nie są słabością — są informacją. Ważne jest, by przyjrzeć się im bez oceniania i zastanowić się, z czym mogą być związane.',
      },
      {
        type: 'h2',
        text: 'Emocjonalne sygnały wypalenia zawodowego',
      },
      {
        type: 'paragraph',
        text: 'Wypalenie zawodowe rzadko pojawia się nagle. To proces, który trwa — często miesiącami lub nawet latami. Do najczęstszych sygnałów emocjonalnych należą: obniżone poczucie sensu w pracy, cynizm wobec współpracowników lub klientów, poczucie uwięzienia bez możliwości zmiany, utrata zaangażowania w projekty, które kiedyś były interesujące.',
      },
      {
        type: 'list',
        items: [
          'Czujesz, że Twoja praca nie ma sensu ani znaczenia',
          'Stajesz się coraz bardziej cyniczny/a wobec pracy i ludzi',
          'Masz trudności z koncentracją i podejmowaniem decyzji',
          'Czujesz się emocjonalnie wyczerpany/a pod koniec dnia',
          'Liczyłeś/aś dni do weekendu i urlopu od miesięcy',
          'Praca wkracza w Twoje życie osobiste i relacje',
        ],
      },
      {
        type: 'h2',
        text: 'Kiedy brak rozwoju staje się problemem',
      },
      {
        type: 'paragraph',
        text: 'Stagnacja zawodowa to jeden z cichych zabójców satysfakcji z pracy. Przez długi czas możesz pracować sprawnie i bez większych problemów — ale jeśli przez rok lub dwa nie nauczyłeś/aś się niczego nowego, nie awansowałeś/aś i nie czujesz, że zmierzasz gdziekolwiek, to warto się temu przyjrzeć.',
      },
      {
        type: 'paragraph',
        text: 'Pytania, które warto sobie zadać: Czy w ciągu ostatniego roku nabyłem/nabyłam nowe umiejętności? Czy widzę dla siebie ścieżkę rozwoju w tej firmie? Czy moje stanowisko i kompetencje odpowiadają moim ambicjom? Czy jestem dumna/dumny ze swojej pracy?',
      },
      {
        type: 'h2',
        text: 'Co zrobić, gdy rozpoznasz te sygnały?',
      },
      {
        type: 'paragraph',
        text: 'Rozpoznanie sygnałów to pierwszy krok — ale sam w sobie nie rozwiązuje problemu. Warto zacząć od rozmowy — ze sobą, z kimś bliskim lub z profesjonalistą. Konsultantka kariery może pomóc Ci ocenić, czy problem leży w konkretnej firmie, stanowisku, branży, czy może w czymś głębszym.',
      },
      {
        type: 'paragraph',
        text: 'Pamiętaj: jeśli praca przestała pasować, to nie jest Twoja wina i nie musisz tego znosić. Zmiana jest możliwa — i często jest bliżej, niż myślisz. Potrzeba tylko odwagi, by spojrzeć na swoją sytuację uczciwie i zacząć działać.',
      },
    ],
  },
  {
    slug: 'pewnosc-siebie-w-karierze',
    title: 'Pewność siebie w karierze – jak ją budować w oparciu o fakty, nie presję',
    date: '28 października 2025',
    dateISO: '2025-10-28',
    excerpt:
      'Pewność siebie w pracy to nie cecha wrodzona, a umiejętność. Dowiedz się, jak ją budować na solidnych fundamentach — bez udawania i zewnętrznej presji.',
    readingTime: '7 min',
    category: 'Pewność siebie',
    image: '/gfx/ewelina_3.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Jednym z najczęstszych powodów, dla których ludzie nie realizują swoich celów zawodowych, nie jest brak kompetencji — to brak wiary we własne możliwości. Pewność siebie w karierze to nie kwestia osobowości ani temperamentu. To umiejętność, którą można rozwijać — świadomie, krok po kroku.',
      },
      {
        type: 'h2',
        text: 'Czym naprawdę jest pewność siebie zawodowa?',
      },
      {
        type: 'paragraph',
        text: 'Wiele osób myli pewność siebie z arogancją albo z poczuciem, że jest się lepszym od innych. To błąd. Prawdziwa pewność siebie zawodowa to przekonanie, że masz kompetencje, doświadczenie i zasoby, by poradzić sobie z wyzwaniami, jakie stawia przed Tobą praca — i że jesteś gotów/a się uczyć w obszarach, gdzie jeszcze brakuje Ci wiedzy.',
      },
      {
        type: 'paragraph',
        text: 'Co ważne — pewność siebie oparta na faktach jest trwałsza niż ta oparta na zewnętrznej walidacji. Możesz budować ją na podstawie konkretnych osiągnięć, feedbacku, kompetencji i wartości, które reprezentujesz. Nie zależy od tego, co pomyślą inni.',
      },
      {
        type: 'h2',
        text: 'Syndrom oszusta a budowanie kariery',
      },
      {
        type: 'paragraph',
        text: 'Syndrom oszusta to przekonanie, że nasze sukcesy są przypadkowe lub niezasłużone — i że prędzej czy później inni to odkryją. Dotyka on nawet bardzo doświadczonych profesjonalistów. Jeśli zdarza Ci się myśleć "jestem tu przez przypadek", "inni są o wiele lepsi" albo "zaraz się okaże, że nic nie wiem" — wiedz, że to bardzo powszechne zjawisko.',
      },
      {
        type: 'paragraph',
        text: 'Problem z syndromem oszusta polega na tym, że sprawia, że umniejszamy swoje osiągnięcia i kompetencje — a to z kolei wpływa na to, jak mówimy o sobie na rozmowach kwalifikacyjnych, jak negocjujemy wynagrodzenie i jak prezentujemy swój wkład w pracy.',
      },
      {
        type: 'h2',
        text: 'Praktyczne ćwiczenia budowania pewności siebie',
      },
      {
        type: 'paragraph',
        text: 'Pierwszym krokiem jest stworzenie listy dowodów. Zapisz wszystkie swoje osiągnięcia zawodowe — nie ogólnikowe ("byłam odpowiedzialna za projekt"), ale konkretne, z mierzalnym efektem ("przygotowałam i poprowadziłam projekt, który skrócił czas obsługi klienta o 30%"). Ta lista staje się Twoim "bankiem dowodów" — do którego możesz wracać, gdy pojawi się wątpliwość w siebie.',
      },
      {
        type: 'list',
        items: [
          'Prowadź "dziennik sukcesów" — zapisuj co tydzień 3 rzeczy, które Ci się udały',
          'Naucz się mówić o swoich kompetencjach konkretnie i bez umniejszania',
          'Szukaj feedbacku od osób, którym ufasz',
          'Ćwicz trudne rozmowy zawodowe w bezpiecznym środowisku',
          'Regularnie przeglądaj swoją listę osiągnięć',
        ],
      },
      {
        type: 'h2',
        text: 'Długoterminowa praca nad pewnością siebie',
      },
      {
        type: 'paragraph',
        text: 'Pewność siebie to nie stan, który osiągasz raz i masz na zawsze. To coś, co wymaga regularnej "pielęgnacji" — szczególnie w momentach trudnych (nowa praca, awans, kryzys zawodowy). Dobrą praktyką jest regularne wracanie do swoich wartości zawodowych i przypominanie sobie, dlaczego robisz to, co robisz.',
      },
      {
        type: 'paragraph',
        text: 'Współpraca z konsultantką kariery jest szczególnie wartościowa właśnie dlatego, że daje zewnętrzne odzwierciedlenie — kogoś, kto pomoże Ci zobaczyć Twoje mocne strony, gdy sam/sama ich nie widzisz. Praca nad pewnością siebie to inwestycja, która procentuje w każdym aspekcie kariery zawodowej.',
      },
    ],
  },
  {
    slug: 'swiadome-decyzje-zawodowe',
    title: 'Świadome decyzje zawodowe: jak wybrać kierunek zgodny ze sobą',
    date: '28 października 2025',
    dateISO: '2025-10-28',
    excerpt:
      'Jak podejmować decyzje zawodowe, które są naprawdę Twoje? Odkryj metodę opartą na wartościach, umiejętnościach i stylu życia.',
    readingTime: '6 min',
    category: 'Decyzje zawodowe',
    image: '/gfx/ewelina_4.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Decyzje zawodowe należą do najtrudniejszych wyborów, jakie podejmujemy w życiu. Dotyczą czegoś, co zajmuje znaczną część naszego czasu, wpływa na nasze finanse, samopoczucie i poczucie sensu. I właśnie dlatego tak wiele osób je odwleka, podejmuje pod wpływem impulsu lub zewnętrznej presji — zamiast w oparciu o autentyczne preferencje.',
      },
      {
        type: 'h2',
        text: 'Wartości jako kompas zawodowy',
      },
      {
        type: 'paragraph',
        text: 'Zanim zaczniesz planować konkretne kroki kariery, warto zadać jedno fundamentalne pytanie: co jest dla Ciebie naprawdę ważne w pracy? Nie to, co powinno być ważne, nie to, co odpowiedziałbyś/odpowiedziałabyś na rozmowie kwalifikacyjnej — ale to, co realnie wpływa na Twoje zadowolenie z pracy.',
      },
      {
        type: 'paragraph',
        text: 'Wartości zawodowe to rzeczy takie jak: autonomia w działaniu, stabilność zatrudnienia, możliwość pomagania innym, wysoki status zawodowy, kreatywność, praca zespołowa, stały rozwój, elastyczność czasu pracy. Każdy ma inną hierarchię tych wartości — i to właśnie ta hierarchia powinna stanowić kompas przy podejmowaniu decyzji zawodowych.',
      },
      {
        type: 'h2',
        text: 'Inwentarz umiejętności i kompetencji',
      },
      {
        type: 'paragraph',
        text: 'Kiedy już wiesz, co jest dla Ciebie ważne, czas spojrzeć na to, co potrafisz. Kompetencje to nie tylko umiejętności techniczne (język programowania, obsługa programów, znajomość procedur), ale też kompetencje miękkie — komunikacja, zarządzanie projektami, praca pod presją, budowanie relacji.',
      },
      {
        type: 'list',
        items: [
          'Wypisz swoje umiejętności techniczne i potwierdź je konkretnymi przykładami',
          'Zidentyfikuj swoje kompetencje miękkie na podstawie feedbacku od innych',
          'Odkryj umiejętności transferowalne, które możesz zabrać do nowej branży',
          'Zidentyfikuj luki, które warto uzupełnić przed zmianą',
          'Zapytaj bliskich: w czym jesteś naprawdę dobry/dobra?',
        ],
      },
      {
        type: 'h2',
        text: 'Jak uwzględnić styl życia w decyzjach zawodowych?',
      },
      {
        type: 'paragraph',
        text: 'Praca to nie wszystko — a jej dopasowanie do reszty Twojego życia ma ogromny wpływ na poczucie dobrostanu. Decydując o zmianie zawodowej, warto wziąć pod uwagę: ile czasu chcesz poświęcać na dojazdy, czy zależy Ci na pracy zdalnej lub hybrydowej, jakie są Twoje zobowiązania rodzinne i zdrowotne, jakie zarobki są niezbędne do zachowania Twojego stylu życia.',
      },
      {
        type: 'paragraph',
        text: 'Często okazuje się, że decyzja zawodowa, która wygląda świetnie "na papierze", w praktyce nie pasuje do życia, jakie chcemy prowadzić. Dopasowanie pracy do stylu życia — a nie odwrotnie — to klucz do długotrwałej satysfakcji zawodowej.',
      },
      {
        type: 'h2',
        text: 'Jak podjąć trudną decyzję zawodową?',
      },
      {
        type: 'paragraph',
        text: 'Kiedy masz już wgląd w swoje wartości, kompetencje i preferencje życiowe, decyzja staje się prostsza — choć nie zawsze łatwa. Pomocna może być analiza plusów i minusów każdej opcji w odniesieniu do Twoich wartości (nie do abstrakcyjnych kryteriów), rozmowa z kimś, kto już pracuje w interesującym Cię obszarze, oraz wyobrażenie sobie, jak wygląda Twój typowy dzień w pracy za 2 lata.',
      },
      {
        type: 'paragraph',
        text: 'Nie czekaj na pewność, bo ta rzadko przychodzi przed podjęciem decyzji. Dobra decyzja zawodowa to taka, która jest spójna z tym, kim jesteś i kim chcesz być — nie ta, która jest idealna. Jeśli czujesz się zagubiony/a w tym procesie, praca z konsultantką kariery może pomóc Ci poukładać te elementy i zobaczyć kierunek, który Ci umknął.',
      },
    ],
  },
  {
    slug: 'wspolpraca-z-konsultantka-kariery',
    title: 'Jak wygląda współpraca z konsultantką kariery? Czego możesz się spodziewać',
    date: '5 listopada 2025',
    dateISO: '2025-11-05',
    excerpt:
      'Zastanawiasz się, czym tak naprawdę zajmuje się konsultantka kariery i jak wygląda ta współpraca w praktyce? Poznaj cały proces — od pierwszej rozmowy do osiągnięcia celu zawodowego.',
    readingTime: '5 min',
    category: 'Zmiana pracy',
    image: '/gfx/smiley-businesswomen-having-meeting.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Wiele osób słyszy "konsultantka kariery" i wyobraża sobie kogoś, kto przeglądnie CV i powie, co poprawić. To zupełnie inne doświadczenie. Współpraca z konsultantką kariery to proces — głębszy, bardziej osobisty i zdecydowanie bardziej skuteczny niż jakikolwiek poradnik czy artykuł.',
      },
      {
        type: 'h2',
        text: 'Pierwsza rozmowa — od czego wszystko się zaczyna',
      },
      {
        type: 'paragraph',
        text: 'Każda współpraca zaczyna się od bezpłatnej rozmowy wstępnej. To nie jest rozmowa kwalifikacyjna ani ocena — to przestrzeń, w której możesz opowiedzieć o swojej sytuacji zawodowej i tym, czego szukasz. Dla mnie to moment, w którym staram się zrozumieć, z czym naprawdę przychodzisz — bo za każdym "chcę zmienić pracę" kryje się inna historia.',
      },
      {
        type: 'paragraph',
        text: 'Na podstawie tej rozmowy razem decydujemy, czy i w jaki sposób współpraca ma sens. Nie każda osoba potrzebuje tego samego — dlatego pracuję w kilku formatach: sesje indywidualne, pakiety, programy intensywne.',
      },
      {
        type: 'h2',
        text: 'Co dzieje się podczas sesji?',
      },
      {
        type: 'paragraph',
        text: 'Sesja to rozmowa — ale ustrukturyzowana, skupiona na Tobie i Twoim celu. W jej trakcie zadaję pytania, które pomagają Ci spojrzeć na swoją sytuację z nowej perspektywy. Nie mówię Ci, co masz robić — pomagam Ci odkryć, co jest dla Ciebie właściwe. To zasadnicza różnica.',
      },
      {
        type: 'list',
        items: [
          'Analiza Twojej sytuacji zawodowej i celów',
          'Identyfikacja wartości, mocnych stron i ograniczających przekonań',
          'Praca nad konkretnym wyzwaniem — CV, rozmowa, decyzja o zmianie',
          'Tworzenie planu działania z konkretnymi krokami',
          'Wsparcie w realizacji i weryfikacja postępów',
        ],
      },
      {
        type: 'h2',
        text: 'Ile sesji jest potrzebnych?',
      },
      {
        type: 'paragraph',
        text: 'To zależy od Twojej sytuacji. Niektóre osoby przychodzą z jednym konkretnym pytaniem i potrzebują 2–3 sesji, by je rozwiązać. Inne chcą przejść przez pełny proces — od diagnozy po nową pracę — i pracujemy razem przez kilka miesięcy. Nie ma jednej odpowiedzi, bo każda droga jest inna.',
      },
      {
        type: 'h2',
        text: 'Czego możesz się spodziewać po współpracy?',
      },
      {
        type: 'paragraph',
        text: 'Efekty, które najczęściej obserwuję u klientów: większa jasność co do kierunku zawodowego, konkretny plan działania, lepiej napisane CV i profil LinkedIn, bardziej pewna i skuteczna autoprezentacja na rozmowach, a przede wszystkim — odwaga do działania. Zmiana kariery to nie jest kwestia szczęścia. To kwestia decyzji, planu i wsparcia.',
      },
    ],
  },
  {
    slug: 'jak-sie-przygotowac-do-rozmowy-kwalifikacyjnej',
    title: 'Jak przygotować się do rozmowy kwalifikacyjnej – o czym zapominają kandydaci',
    date: '12 listopada 2025',
    dateISO: '2025-11-12',
    excerpt:
      'Większość kandydatów przygotowuje się do rozmowy kwalifikacyjnej w ten sam sposób — i właśnie dlatego niczym się nie wyróżniają. Dowiedz się, co naprawdę robi różnicę.',
    readingTime: '7 min',
    category: 'CV i rekrutacja',
    image: '/gfx/2147650899.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Większość kandydatów przed rozmową kwalifikacyjną robi to samo: przegląda stronę firmy, odświeża pamięć o swoim CV i stara się przewidzieć pytania. To dobry start — ale to za mało, żeby naprawdę się wyróżnić. Najlepiej przygotowani kandydaci robią coś więcej.',
      },
      {
        type: 'h2',
        text: 'Zacznij od zrozumienia firmy, nie tylko jej strony',
      },
      {
        type: 'paragraph',
        text: 'Strona internetowa firmy to wizytówka — ale nie prawda o niej. Przed rozmową warto sięgnąć głębiej: przeczytać opinie na Gowork lub Glassdoor, sprawdzić profil LinkedIn firmy i rekrutera, poszukać artykułów czy wywiadów z jej liderami. Chodzi o to, żebyś na rozmowie mógł/mogła mówić o konkretach, a nie ogólnikach.',
      },
      {
        type: 'h2',
        text: 'Przygotuj swoje odpowiedzi metodą STAR',
      },
      {
        type: 'paragraph',
        text: 'Metoda STAR (Sytuacja, Zadanie, Akcja, Rezultat) to sposób na konkretne i przekonujące odpowiedzi na pytania behawioralne. Zamiast "jestem dobry/dobra w zarządzaniu projektami" — opowiedz o konkretnym projekcie, wyzwaniu, działaniu i efekcie. Rekruterzy zapamiętują historię, nie puste deklaracje.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj 5–7 historii z doświadczenia zawodowego w formacie STAR',
          'Sprawdź wymagania ogłoszenia i dopasuj historie do kluczowych kompetencji',
          'Przygotuj pytania do rekrutera — to sygnał zaangażowania',
          'Przećwicz na głos — nie w głowie, ale naprawdę mówiąc',
          'Zadbaj o logistykę — dojazd, strój, sprzęt przy rozmowie online',
        ],
      },
      {
        type: 'h2',
        text: 'Jak odpowiadać na pytanie "Opowiedz o sobie"?',
      },
      {
        type: 'paragraph',
        text: 'To najczęstsze pytanie otwierające i jedno z najmniej przygotowywanych. Twoja odpowiedź powinna trwać 2–3 minuty i być zbudowana jak historia: skąd przyszedłem/przyszłam, co robiłem/robiłam, dokąd zmierzam i dlaczego właśnie ta firma i rola. Nie recytuj CV — opowiedz swoją narrację zawodową.',
      },
      {
        type: 'h2',
        text: 'Najczęstsze błędy kandydatów',
      },
      {
        type: 'paragraph',
        text: 'Zbyt ogólne odpowiedzi, mówienie źle o poprzednim pracodawcy, brak pytań na koniec rozmowy, nieprzygotowanie na pytanie o oczekiwania finansowe — to błędy, które obniżają ocenę nawet dobrych kandydatów. Pamiętaj: rozmowa kwalifikacyjna to nie egzamin — to dwustronna rozmowa. Ty też sprawdzasz, czy chcesz tu pracować.',
      },
    ],
  },
  {
    slug: 'trudne-relacje-w-pracy',
    title: 'Trudne relacje w pracy: kiedy środowisko zawodowe szkodzi Twojemu dobrostanowi',
    date: '19 listopada 2025',
    dateISO: '2025-11-19',
    excerpt:
      'Toksyczne środowisko pracy to jeden z głównych powodów wypalenia zawodowego i rezygnacji z dobrej kariery. Dowiedz się, jak rozpoznać problem i co z nim zrobić.',
    readingTime: '6 min',
    category: 'Wypalenie zawodowe',
    image: '/gfx/2149719323.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Siedzisz przy biurku i obserwujesz, jak współpracownicy cieszą się z sukcesu, którego Ty nie czujesz. Nie wiesz, dlaczego jesteś pomijana/pomijany w rozmowach, projektach, decyzjach. Może to nie jest "coś poważnego" — ale odbija się na Tobie każdego dnia. Trudne relacje w pracy są prawdziwym problemem, którego nie warto bagatelizować.',
      },
      {
        type: 'h2',
        text: 'Czym są toksyczne relacje zawodowe?',
      },
      {
        type: 'paragraph',
        text: 'Toksyczność w miejscu pracy nie zawsze oznacza krzyk czy jawną agresję. Często jest subtelna: pomijanie w komunikacji, przypisywanie sobie cudzych zasług, podważanie kompetencji, wykluczenie z nieformalnych relacji, brak wsparcia w trudnych sytuacjach. Takie zachowania — nawet jeśli nie są intencjonalne — kumulują się i prowadzą do wypalenia.',
      },
      {
        type: 'h2',
        text: 'Sygnały, że środowisko pracy Ci szkodzi',
      },
      {
        type: 'list',
        items: [
          'Czujesz się pomijany/a lub niewidzialny/a w zespole',
          'Boisz się zabierać głos na spotkaniach',
          'Po pracy potrzebujesz czasu, żeby "dojść do siebie"',
          'Twoje sukcesy są ignorowane lub umniejszane',
          'Czujesz napięcie lub lęk na myśl o przyjściu do pracy',
          'Relacje zawodowe wpływają negatywnie na Twoje życie prywatne',
        ],
      },
      {
        type: 'h2',
        text: 'Co możesz zrobić?',
      },
      {
        type: 'paragraph',
        text: 'Pierwszym krokiem jest nazwanie problemu — bez minimalizowania go ("inni mają gorzej") ani katastrofizowania. Zastanów się, czy to relacja z konkretną osobą, kultura całego zespołu, czy struktura organizacji. Od tego zależy, jakie działania mają sens.',
      },
      {
        type: 'paragraph',
        text: 'Jeśli problem dotyczy jednej osoby — czasem warto podjąć bezpośrednią rozmowę lub skorzystać z pośrednictwa przełożonego czy HR. Jeśli jednak toksyczność jest wbudowana w kulturę organizacji, rozmowy wewnętrzne rzadko cokolwiek zmieniają. W takim przypadku warto poważnie rozważyć zmianę środowiska.',
      },
      {
        type: 'h2',
        text: 'Kiedy odejście jest najlepszą decyzją?',
      },
      {
        type: 'paragraph',
        text: 'Odejście z pracy z powodu toksycznego środowiska to nie porażka — to decyzja o ochronie swojego zdrowia psychicznego. Trwanie w miejscu, które systematycznie obniża Twoje poczucie wartości i pochłania energię, ma realne koszty — zawodowe i osobiste. Praca z konsultantką kariery może pomóc Ci ocenić sytuację na chłodno i zaplanować bezpieczne wyjście.',
      },
    ],
  },
  {
    slug: 'rozmowa-kwalifikacyjna-bez-stresu',
    title: 'Rozmowa kwalifikacyjna bez stresu – jak wypaść pewnie i przekonać rekrutera',
    date: '26 listopada 2025',
    dateISO: '2025-11-26',
    excerpt:
      'Stres przed rozmową kwalifikacyjną jest naturalny — ale można go skutecznie oswoić. Poznaj strategie, które pomogą Ci wypaść pewnie i zaprezentować się z najlepszej strony.',
    readingTime: '6 min',
    category: 'CV i rekrutacja',
    image: '/gfx/13153.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Zaproszenie na rozmowę kwalifikacyjną powinno być powodem do radości — w końcu ktoś zauważył Twoje CV i chce Cię poznać. A mimo to dla wielu osób to moment, który wyzwala paraliżujący stres. Dobra wiadomość: stres nie jest problemem. Problem pojawia się tylko wtedy, gdy nie wiesz, jak go wykorzystać.',
      },
      {
        type: 'h2',
        text: 'Skąd bierze się stres przed rozmową?',
      },
      {
        type: 'paragraph',
        text: 'Najczęściej stres wynika z poczucia, że jesteśmy oceniani — i że możemy nie wypaść wystarczająco dobrze. To naturalna reakcja na sytuację, w której stawką jest coś ważnego. Problemem nie jest sama emocja, ale przekonanie, że stres nas "zdradza" albo że świadczy o naszych brakach. Nic z tych rzeczy.',
      },
      {
        type: 'h2',
        text: 'Jak się przygotować, żeby czuć się pewnie?',
      },
      {
        type: 'paragraph',
        text: 'Pewność siebie na rozmowie buduje się przede wszystkim przez dobre przygotowanie. Kiedy wiesz, co chcesz powiedzieć i masz gotowe konkretne przykłady ze swojej pracy, stres naturalnie maleje — bo nie musisz wymyślać odpowiedzi na bieżąco. Przećwicz rozmowę na głos — z kimś bliskim lub przed lustrem.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj konkretne przykłady osiągnięć w formacie STAR',
          'Przećwicz odpowiedź na "Opowiedz o sobie" — max 3 minuty',
          'Przemyśl, dlaczego chcesz pracować w tej firmie i na tym stanowisku',
          'Przygotuj pytania do rekrutera — pokażą Twoje zaangażowanie',
          'Zadbaj o komfort fizyczny: sen, jedzenie, odpowiedni strój',
        ],
      },
      {
        type: 'h2',
        text: 'Techniki radzenia sobie ze stresem w trakcie rozmowy',
      },
      {
        type: 'paragraph',
        text: 'Jeśli poczujesz stres w trakcie rozmowy — zatrzymaj się. Dosłownie. Krótka pauza przed odpowiedzią jest oznaką przemyślenia, nie słabości. Możesz też poprosić o chwilę: "To ważne pytanie, czy mogę przez chwilę je przemyśleć?" Rekruterzy cenią refleksyjność.',
      },
      {
        type: 'h2',
        text: 'Pamiętaj: rozmowa jest obustronna',
      },
      {
        type: 'paragraph',
        text: 'Zmiana perspektywy działa cuda: nie przychodzisz na przesłuchanie — przychodzisz sprawdzić, czy ta firma i rola są dla Ciebie odpowiednie. Ty też oceniasz. To zmienia dynamikę rozmowy i naturalnie obniża poziom stresu. Kiedy traktujesz rozmowę jako spotkanie dwóch stron, a nie egzamin, dużo łatwiej być sobą.',
      },
    ],
  },
  {
    slug: 'pierwsze-tygodnie-w-nowej-pracy',
    title: 'Pierwsze tygodnie w nowej pracy: jak szybko odnaleźć się i zrobić dobre wrażenie',
    date: '3 grudnia 2025',
    dateISO: '2025-12-03',
    excerpt:
      'Zaczynasz nową pracę i chcesz jak najlepiej wykorzystać ten czas? Pierwsze tygodnie mają ogromne znaczenie — dowiedz się, jak je dobrze zaplanować i wejść pewnie w nową rolę.',
    readingTime: '5 min',
    category: 'Zmiana pracy',
    image: '/gfx/2148347260.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Zdobycie nowej pracy to wielki sukces. Ale zaraz po podpisaniu umowy zaczyna się nowe wyzwanie: jak dobrze wejść w nowe środowisko, zrozumieć kulturę organizacji i jak najszybciej zacząć wnosić wartość? Pierwsze tygodnie są kluczowe — i warto je zaplanować świadomie.',
      },
      {
        type: 'h2',
        text: 'Słuchaj więcej niż mówisz',
      },
      {
        type: 'paragraph',
        text: 'Jednym z najważniejszych — i najtrudniejszych — zadań w nowej pracy jest opanowanie pokusa pokazania się. Nawet jeśli masz duże doświadczenie i świetne pomysły, pierwsze tygodnie powinny być przede wszystkim czasem obserwacji i słuchania. Zanim zaproponujesz zmiany, zrozum, dlaczego rzeczy działają tak, jak działają.',
      },
      {
        type: 'h2',
        text: 'Buduj relacje od pierwszych dni',
      },
      {
        type: 'paragraph',
        text: 'Relacje w pracy buduje się latami — ale fundamenty kładziesz w pierwszych tygodniach. Nie czekaj, aż ktoś do Ciebie podejdzie. Przedstawiaj się, pytaj o projekty, zapraszaj współpracowników na kawę. Nie chodzi o sztuczne budowanie networku — chodzi o autentyczne zainteresowanie ludźmi, z którymi będziesz pracować.',
      },
      {
        type: 'list',
        items: [
          'Poznaj osoby kluczowe dla Twojej roli — nie tylko przełożonych',
          'Pytaj zamiast zakładać — nikt nie oczekuje, że od razu wszystko wiesz',
          'Proś o feedback po pierwszym miesiącu — pokaże, że zależy Ci na rozwoju',
          'Zadbaj o zrozumienie celów zespołu, nie tylko swoich zadań',
          'Notuj — dużo informacji przychodzi naraz, pamięć zawodzi',
        ],
      },
      {
        type: 'h2',
        text: 'Jak radzić sobie z syndromem nowego?',
      },
      {
        type: 'paragraph',
        text: 'Poczucie, że wszyscy wiedzą więcej, że popełniasz błędy i że może to była zła decyzja — to bardzo powszechne odczucia w pierwszych tygodniach nowej pracy. To nie sygnał, że jesteś w złym miejscu. To naturalny etap wchodzenia w nową rolę. Daj sobie czas.',
      },
      {
        type: 'h2',
        text: 'Pierwsze 90 dni jako projekt',
      },
      {
        type: 'paragraph',
        text: 'Warto potraktować pierwsze 90 dni jak projekt: z celami, kamieniami milowymi i regularną refleksją. Co chcę wiedzieć po pierwszym miesiącu? Z kim chcę zbudować relacje? Jakie pierwsze wyniki chcę osiągnąć? Taki plan nadaje kierunek i daje poczucie sprawczości — nawet w chaosie wdrożenia.',
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
