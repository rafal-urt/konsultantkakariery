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
    slug: 'wspolpraca-z-konsultantka-kariery',
    title: 'Jak wygląda współpraca z konsultantką kariery? Czego możesz się spodziewać',
    date: '5 listopada 2025',
    dateISO: '2025-11-05',
    excerpt:
      'Zastanawiasz się, czym tak naprawdę zajmuje się konsultantka kariery i jak wygląda ta współpraca w praktyce? Poznaj cały proces — od pierwszej rozmowy do osiągnięcia celu zawodowego.',
    readingTime: '6 min',
    category: 'Zmiana pracy',
    image: '/gfx/smiley-businesswomen-having-meeting.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Wiele osób słyszy "konsultantka kariery" i wyobraża sobie kogoś, kto przeglądnie CV i powie, co poprawić. Tymczasem to zupełnie inne doświadczenie. Współpraca z konsultantką kariery to proces — głębszy, bardziej osobisty i zdecydowanie bardziej skuteczny niż jakikolwiek poradnik czy artykuł. Zanim się spotkamy, masz prawo wiedzieć, czego się spodziewać.',
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
        text: 'Na podstawie tej rozmowy razem decydujemy, czy i w jaki sposób współpraca ma sens. Nie każda osoba potrzebuje tego samego — dlatego pracuję w kilku formatach: jednorazowa konsultacja, pakiety sesji, program intensywny. Nic nie jest z góry narzucone.',
      },
      {
        type: 'h2',
        text: 'Co dzieje się podczas sesji?',
      },
      {
        type: 'paragraph',
        text: 'Sesja to rozmowa — ale ustrukturyzowana, skupiona na Tobie i Twoim celu. W jej trakcie zadaję pytania, które pomagają Ci spojrzeć na swoją sytuację z nowej perspektywy. Nie mówię Ci, co masz robić — pomagam Ci odkryć, co jest dla Ciebie właściwe. To zasadnicza różnica, której wiele osób nie spodziewa się na początku.',
      },
      {
        type: 'paragraph',
        text: 'W zależności od etapu, na którym jesteś, sesja może dotyczyć bardzo różnych rzeczy: wartości zawodowych, analizy doświadczenia, przygotowania CV, ćwiczenia rozmowy kwalifikacyjnej, przełamywania blokad czy planowania kolejnych kroków. Każda sesja kończy się konkretnymi zadaniami i ustaleniami — nie tylko refleksją.',
      },
      {
        type: 'list',
        items: [
          'Analiza Twojej sytuacji zawodowej i celów na start',
          'Identyfikacja wartości, mocnych stron i ograniczających przekonań',
          'Praca nad konkretnym wyzwaniem — CV, rozmowa kwalifikacyjna, decyzja o zmianie',
          'Tworzenie planu działania z konkretnymi, mierzalnymi krokami',
          'Wsparcie w realizacji i weryfikacja postępów między sesjami',
          'Przestrzeń na pytania, wątpliwości i korekty kursu',
        ],
      },
      {
        type: 'h2',
        text: 'Ile sesji jest potrzebnych?',
      },
      {
        type: 'paragraph',
        text: 'To zależy od Twojej sytuacji i celu. Niektóre osoby przychodzą z jednym konkretnym pytaniem — np. "czy to dobre CV?" albo "jak odpowiedzieć na te pytania na rozmowie?" — i potrzebują 1–2 sesji. Inne chcą przejść przez pełny proces: od diagnozy zawodowej, przez budowanie strategii, aż po pierwsze tygodnie w nowej pracy. W takim przypadku pracujemy razem przez kilka miesięcy.',
      },
      {
        type: 'paragraph',
        text: 'Nie ma jednego słusznego formatu. Ważne jest, żeby dopasować go do tego, czego faktycznie potrzebujesz — nie do tego, co brzmi najlepiej. Dlatego zawsze zaczynam od rozmowy, a nie od sprzedaży pakietu.',
      },
      {
        type: 'h2',
        text: 'Czego możesz się spodziewać po współpracy?',
      },
      {
        type: 'paragraph',
        text: 'Efekty, które najczęściej obserwuję u klientów: większa jasność co do kierunku zawodowego, konkretny plan działania z terminami, lepiej napisane CV i profil LinkedIn, bardziej pewna i naturalna autoprezentacja na rozmowach, umiejętność mówienia o swoich osiągnięciach bez umniejszania ich wagi. Ale przede wszystkim — odwaga do działania. Zmiana kariery to nie jest kwestia szczęścia ani idealnego momentu. To kwestia decyzji, planu i wsparcia.',
      },
      {
        type: 'h2',
        text: 'Czy to jest dla mnie?',
      },
      {
        type: 'paragraph',
        text: 'Współpraca z konsultantką kariery jest dla Ciebie, jeśli czujesz, że tkwisz w miejscu, masz ogólne poczucie, że "coś jest nie tak", ale nie wiesz dokładnie co — albo jeśli wiesz, czego chcesz, ale nie wiesz, jak to osiągnąć. Pracuję z osobami na bardzo różnych etapach: od pierwszej zmiany pracy, przez powrót po przerwie, aż po decyzje o całkowitym przebranżowieniu. Jeśli jesteś gotowy/a na rozmowę — zapraszam.',
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
        text: 'Większość kandydatów przed rozmową kwalifikacyjną robi to samo: przegląda stronę firmy, odświeża pamięć o swoim CV i stara się przewidzieć pytania. To dobry start — ale to za mało, żeby naprawdę się wyróżnić. Najlepiej przygotowani kandydaci robią coś więcej. I właśnie to "coś więcej" robi największą różnicę.',
      },
      {
        type: 'h2',
        text: 'Zacznij od zrozumienia firmy, nie tylko jej strony',
      },
      {
        type: 'paragraph',
        text: 'Strona internetowa firmy to wizytówka — nie prawda o niej. Przed rozmową warto sięgnąć głębiej: przeczytać opinie pracowników na Gowork lub Glassdoor, sprawdzić profil LinkedIn firmy i rekrutera, poszukać artykułów czy wywiadów z jej liderami, zobaczyć, jak firma komunikuje się w mediach społecznościowych. Chodzi o to, żebyś na rozmowie mógł/mogła mówić o konkretach, a nie ogólnikach — i żebyś sam/sama wiedział/a, czy ta firma jest miejscem, w którym chcesz pracować.',
      },
      {
        type: 'h2',
        text: 'Przygotuj swoje odpowiedzi metodą STAR',
      },
      {
        type: 'paragraph',
        text: 'Metoda STAR (Sytuacja, Zadanie, Akcja, Rezultat) to sposób na konkretne i przekonujące odpowiedzi na pytania behawioralne — czyli te, które zaczynają się od "Opowiedz mi o sytuacji, gdy...". Zamiast "jestem dobry/dobra w zarządzaniu projektami" — opowiedz o konkretnym projekcie, wyzwaniu, działaniu i efekcie. Rekruterzy zapamiętują historię, nie puste deklaracje.',
      },
      {
        type: 'paragraph',
        text: 'Przygotuj minimum 5–7 takich historii z różnych obszarów: współpraca, rozwiązywanie problemów, zarządzanie czasem, trudne decyzje, osiągnięcia. Jedna historia często odpowie na wiele różnych pytań — zależy od tego, który aspekt akcentujesz.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj 5–7 historii z doświadczenia zawodowego w formacie STAR',
          'Sprawdź wymagania ogłoszenia i dopasuj swoje przykłady do kluczowych kompetencji',
          'Przygotuj pytania do rekrutera — to sygnał zaangażowania i przemyślanego podejścia',
          'Przećwicz odpowiedzi na głos — nie w głowie, ale naprawdę mówiąc',
          'Zadbaj o logistykę: dojazd, strój, sprzęt przy rozmowie online, ciche otoczenie',
        ],
      },
      {
        type: 'h2',
        text: 'Jak odpowiadać na pytanie "Opowiedz o sobie"?',
      },
      {
        type: 'paragraph',
        text: 'To najczęstsze pytanie otwierające i jedno z najmniej przygotowywanych. Twoja odpowiedź powinna trwać 2–3 minuty i być zbudowana jak historia: skąd przyszedłem/przyszłam, co robiłem/robiłam, dlaczego jestem tutaj i co mogę wnieść. Nie recytuj CV — opowiedz swoją narrację zawodową. To pierwsze wrażenie, które rekruter zabierze z rozmowy.',
      },
      {
        type: 'h2',
        text: 'Jak rozmawiać o oczekiwaniach finansowych?',
      },
      {
        type: 'paragraph',
        text: 'Jedno z najtrudniejszych pytań, którego większość kandydatów się boi. Zasada jest prosta: bądź przygotowany/a. Sprawdź widełki dla podobnych stanowisk w regionie (raporty płacowe, ogłoszenia z widełkami, rozmowy branżowe). Podaj konkretną kwotę lub zakres — nie "to zależy". Niepewność w tym temacie osłabia Twoją pozycję negocjacyjną.',
      },
      {
        type: 'h2',
        text: 'Najczęstsze błędy kandydatów',
      },
      {
        type: 'paragraph',
        text: 'Zbyt ogólne odpowiedzi bez konkretnych przykładów, mówienie źle o poprzednim pracodawcy, brak pytań na koniec rozmowy, nieprzygotowanie na pytanie o oczekiwania finansowe, spóźnienie (nawet na rozmowę online) — to błędy, które obniżają ocenę nawet dobrych kandydatów. Pamiętaj: rozmowa kwalifikacyjna to nie egzamin — to dwustronna rozmowa. Ty też sprawdzasz, czy chcesz tu pracować.',
      },
    ],
  },
  {
    slug: 'trudne-relacje-w-pracy',
    title: 'Trudne relacje w pracy: kiedy środowisko zawodowe szkodzi Twojemu dobrostanowi',
    date: '19 listopada 2025',
    dateISO: '2025-11-19',
    excerpt:
      'Toksyczne środowisko pracy to jeden z głównych powodów wypalenia zawodowego i rezygnacji z dobrej kariery. Dowiedz się, jak rozpoznać problem i jakie masz opcje.',
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
        text: 'Toksyczność w miejscu pracy nie zawsze oznacza krzyk czy jawną agresję. Często jest subtelna: pomijanie w komunikacji, przypisywanie sobie cudzych zasług, podważanie kompetencji bez podstaw, wykluczenie z nieformalnych relacji, brak wsparcia w trudnych sytuacjach, ciągła krytyka bez konstruktywnego feedbacku. Takie zachowania — nawet jeśli nie są intencjonalne — kumulują się i prowadzą do realnego wypalenia.',
      },
      {
        type: 'h2',
        text: 'Sygnały, że środowisko pracy Ci szkodzi',
      },
      {
        type: 'list',
        items: [
          'Czujesz się pomijany/a lub niewidzialny/a w zespole mimo starań',
          'Boisz się zabierać głos na spotkaniach, bo spotkałeś/aś się z krytyką lub ignorowaniem',
          'Po pracy potrzebujesz długiego czasu, żeby "dojść do siebie" emocjonalnie',
          'Twoje sukcesy są ignorowane, umniejszane lub przypisywane innym',
          'Czujesz napięcie lub lęk na myśl o przyjściu do pracy albo w trakcie weekendu',
          'Relacje zawodowe zaczynają negatywnie wpływać na Twoje życie prywatne i zdrowie',
        ],
      },
      {
        type: 'h2',
        text: 'Co możesz zrobić — krok po kroku',
      },
      {
        type: 'paragraph',
        text: 'Pierwszym krokiem jest nazwanie problemu bez minimalizowania go ("inni mają gorzej") ani katastrofizowania ("to się nigdy nie zmieni"). Zastanów się, czy problem dotyczy relacji z konkretną osobą, kultury całego zespołu, czy struktury organizacji. Od tego zależy, jakie działania mają sens.',
      },
      {
        type: 'paragraph',
        text: 'Jeśli problem dotyczy jednej osoby — czasem warto podjąć bezpośrednią, spokojną rozmowę lub skorzystać z pośrednictwa przełożonego czy działu HR. Dokumentuj sytuacje, które Cię dotykają — daty, okoliczności, słowa. Jeśli jednak toksyczność jest wbudowana w kulturę organizacji, rozmowy wewnętrzne rzadko cokolwiek zmieniają w sposób trwały.',
      },
      {
        type: 'h2',
        text: 'Kiedy odejście jest najlepszą decyzją?',
      },
      {
        type: 'paragraph',
        text: 'Odejście z pracy z powodu toksycznego środowiska to nie porażka — to decyzja o ochronie swojego zdrowia psychicznego i zawodowego. Trwanie w miejscu, które systematycznie obniża Twoje poczucie wartości i pochłania energię, ma realne koszty: zawodowe (stagnacja, wypalenie), zdrowotne (stres, bezsenność, napięcia) i osobiste (pogorszenie relacji, utrata pasji). Praca z konsultantką kariery może pomóc Ci ocenić sytuację na chłodno i zaplanować bezpieczne, przemyślane wyjście — zamiast impulsywnej decyzji.',
      },
      {
        type: 'h2',
        text: 'Dbanie o siebie to nie słabość',
      },
      {
        type: 'paragraph',
        text: 'Mamy tendencję do racjonalizowania środowisk, które nam szkodzą: "to tylko praca", "mogło być gorzej", "może się przyzwyczaję". Ale środowisko, w którym spędzasz 8 godzin dziennie, kształtuje to, kim jesteś zawodowo i jako człowiek. Masz prawo wymagać więcej — i masz prawo szukać miejsca, w którym Twoja praca i Ty jako osoba będziecie traktowani z szacunkiem.',
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
        text: 'Zaproszenie na rozmowę kwalifikacyjną powinno być powodem do radości — w końcu ktoś zauważył Twoje CV i chce Cię poznać. A mimo to dla wielu osób to moment, który wyzwala paraliżujący stres. Dobra wiadomość: stres nie jest problemem. Problem pojawia się tylko wtedy, gdy nie wiesz, jak go wykorzystać i jak się z nim obchodzić.',
      },
      {
        type: 'h2',
        text: 'Skąd bierze się stres przed rozmową?',
      },
      {
        type: 'paragraph',
        text: 'Najczęściej stres wynika z poczucia, że jesteśmy oceniani — i że możemy nie wypaść wystarczająco dobrze. To naturalna reakcja na sytuację, w której stawką jest coś ważnego. Problemem nie jest sama emocja, ale przekonanie, że stres nas "zdradza" albo że świadczy o naszych brakach. Nic z tych rzeczy. Stres aktywizuje zasoby — kluczem jest umiejętne nim zarządzanie.',
      },
      {
        type: 'h2',
        text: 'Jak się przygotować, żeby czuć się pewnie?',
      },
      {
        type: 'paragraph',
        text: 'Pewność siebie na rozmowie buduje się przede wszystkim przez dobre przygotowanie. Kiedy wiesz, co chcesz powiedzieć i masz gotowe konkretne przykłady ze swojej pracy, stres naturalnie maleje — bo nie musisz wymyślać odpowiedzi na bieżąco. Improwizacja pod presją rzadko wychodzi dobrze. Przygotowanie — prawie zawsze.',
      },
      {
        type: 'list',
        items: [
          'Przygotuj konkretne przykłady osiągnięć w formacie STAR (Sytuacja, Zadanie, Akcja, Rezultat)',
          'Przećwicz odpowiedź na "Opowiedz o sobie" — powinna trwać 2–3 minuty i być spójna',
          'Przemyśl, dlaczego chcesz pracować w tej firmie i na tym stanowisku — miej konkretne powody',
          'Przygotuj 3–5 pytań do rekrutera — to sygnał zaangażowania i przygotowania',
          'Zadbaj o komfort fizyczny dzień wcześniej: odpowiedni sen, posiłek, strój bez niespodzianek',
        ],
      },
      {
        type: 'h2',
        text: 'Techniki radzenia sobie ze stresem w trakcie rozmowy',
      },
      {
        type: 'paragraph',
        text: 'Jeśli poczujesz stres w trakcie rozmowy — zatrzymaj się. Dosłownie. Krótka pauza przed odpowiedzią jest oznaką przemyślenia, nie słabości. Możesz też powiedzieć wprost: "To ważne pytanie, czy mogę przez chwilę je przemyśleć?" Rekruterzy cenią refleksyjność. Powolny, spokojny oddech przed odpowiedzią naprawdę działa — to nie jest mit.',
      },
      {
        type: 'paragraph',
        text: 'Unikaj też błędu zbyt szybkiego mówienia. Stres często przyspiesza tempo wypowiedzi — co utrudnia zrozumienie i sprawia wrażenie nerwowości. Świadome zwolnienie i mówienie w naturalnym rytmie to jeden z najprostszych sposobów na bardziej pewną autoprezentację.',
      },
      {
        type: 'h2',
        text: 'Pamiętaj: rozmowa jest obustronna',
      },
      {
        type: 'paragraph',
        text: 'Zmiana perspektywy działa cuda: nie przychodzisz na przesłuchanie — przychodzisz sprawdzić, czy ta firma i rola są dla Ciebie odpowiednie. Ty też oceniasz. To zmienia dynamikę rozmowy i naturalnie obniża poziom stresu. Kiedy traktujesz rozmowę jako spotkanie dwóch stron, a nie egzamin z własnej wartości, dużo łatwiej być sobą — a właśnie tego szukają najlepsi rekruterzy.',
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
        text: 'Zdobycie nowej pracy to wielki sukces. Ale zaraz po podpisaniu umowy zaczyna się nowe wyzwanie: jak dobrze wejść w nowe środowisko, zrozumieć kulturę organizacji i jak najszybciej zacząć wnosić wartość? Pierwsze tygodnie są kluczowe — i warto je zaplanować świadomie, a nie zdawać się na przypadek.',
      },
      {
        type: 'h2',
        text: 'Słuchaj więcej niż mówisz',
      },
      {
        type: 'paragraph',
        text: 'Jednym z najważniejszych — i najtrudniejszych — zadań w nowej pracy jest opanowanie pokusy natychmiastowego pokazania się. Nawet jeśli masz duże doświadczenie i świetne pomysły, pierwsze tygodnie powinny być przede wszystkim czasem obserwacji i słuchania. Zanim zaproponujesz zmiany, zrozum, dlaczego rzeczy działają tak, jak działają. Często za nieefektywnymi na pozór rozwiązaniami stoją ważne powody — historyczne, personalne lub strategiczne.',
      },
      {
        type: 'h2',
        text: 'Buduj relacje od pierwszych dni',
      },
      {
        type: 'paragraph',
        text: 'Relacje w pracy buduje się latami — ale fundamenty kładziesz w pierwszych tygodniach. Nie czekaj, aż ktoś do Ciebie podejdzie. Przedstawiaj się, pytaj o projekty i kontekst, zapraszaj współpracowników na kawę lub krótką rozmowę. Nie chodzi o sztuczne budowanie networku — chodzi o autentyczne zainteresowanie ludźmi, z którymi będziesz pracować. Ludzie pamiętają tych, którzy pytają i słuchają.',
      },
      {
        type: 'list',
        items: [
          'Poznaj osoby kluczowe dla Twojej roli — nie tylko bezpośrednich przełożonych',
          'Pytaj zamiast zakładać — nikt nie oczekuje, że od razu wszystko wiesz',
          'Proś o feedback po pierwszym miesiącu — pokaże, że zależy Ci na rozwoju',
          'Zadbaj o zrozumienie celów całego zespołu, nie tylko swoich indywidualnych zadań',
          'Notuj — dużo informacji przychodzi naraz, a pamięć zawodzi w nowym środowisku',
        ],
      },
      {
        type: 'h2',
        text: 'Jak radzić sobie z syndromem nowego?',
      },
      {
        type: 'paragraph',
        text: 'Poczucie, że wszyscy wiedzą więcej, że popełniasz za dużo błędów i że może to była zła decyzja — to bardzo powszechne odczucia w pierwszych tygodniach nowej pracy. Mają nawet swoją nazwę: "krzywa onboardingu". To nie sygnał, że jesteś w złym miejscu. To naturalny, przejściowy etap wchodzenia w nową rolę. Daj sobie czas — zazwyczaj mija po 6–12 tygodniach.',
      },
      {
        type: 'h2',
        text: 'Pierwsze 90 dni jako projekt',
      },
      {
        type: 'paragraph',
        text: 'Warto potraktować pierwsze 90 dni jak projekt: z celami, kamieniami milowymi i regularną refleksją. Zadaj sobie pytania: Co chcę wiedzieć po pierwszym miesiącu? Z kim chcę zbudować relacje do końca drugiego? Jakie pierwsze konkretne wyniki chcę pokazać do końca trzeciego? Taki plan nadaje kierunek i daje poczucie sprawczości — nawet w chaosie wdrożenia. I pamiętaj — zmiana pracy to nie koniec procesu. To nowy jego etap.',
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
