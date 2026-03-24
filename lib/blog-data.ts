export interface BlogPost {
  slug: string
  title: string
  date: string
  dateISO: string
  excerpt: string
  readingTime: string
  category: string
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
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
