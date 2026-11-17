// Moduł NAUKA dla Działu I: "Spotkanie z przyrodą"
// Podręcznik Nowej Ery "Odkrywam przyrodę 4", s. 11–52

module.exports = [
  {
    id: 'd1_t1',
    title: 'Co to jest przyroda?',
    pages: '12–16',
    icon: '🌱',
    color: '#2e7d32',
    intro: 'Poznaj różnicę między przyrodą ożywioną i nieożywioną, odkryj czynności życiowe organizmów i dowiedz się, czym są wytwory człowieka.',
    steps: [
      {
        title: 'Czym jest przyroda?',
        badge: 'Podstawowe pojęcie',
        text: '<strong>Przyroda</strong> to cały otaczający nas świat, który powstał bez udziału człowieka. Obejmuje zarówno żywe organizmy, jak i elementy martwej natury.',
        subtext: 'Pamiętaj: Wszystko, co wybudował lub wyprodukował człowiek (domy, samochody, drogi, ubrania), to <strong>wytwory człowieka</strong> — NIE należą one do przyrody!',
        discovery: [
          { label: '🌿 Przyroda ożywiona', desc: 'Wszystkie żywe organizmy: rośliny, zwierzęta, grzyby oraz niewidoczne gołym okiem bakterie.' },
          { label: '🪨 Przyroda nieożywiona', desc: 'Elementy natury, które nie żyją: woda, powietrze, skały, piasek, gleba oraz słońce (światło i ciepło).' },
          { label: '🚗 Wytwory człowieka', desc: 'Obiekty wykonane przez ludzi: mosty, asfaltowe ulice, komputery, meble, ubrania i plastik.' }
        ]
      },
      {
        title: 'Czynności życiowe organizmów',
        badge: 'Cechy życia (s. 14)',
        text: 'Co odróżnia małego wróbla od kamienia? Wróbel jest organizmem żywym, ponieważ wykonuje <strong>czynności życiowe</strong>:',
        features: [
          { name: '1. Odżywianie się', desc: 'Pobieranie pokarmu dostarczającego energii i budulca do życia.' },
          { name: '2. Oddychanie', desc: 'Pobieranie tlenu i uwalnianie energii niezbędnej do funkcjonowania.' },
          { name: '3. Wydalanie', desc: 'Usuwanie z organizmu zbędnych i szkodliwych produktów przemiany materii.' },
          { name: '4. Ruch', desc: 'Zdolność do przemieszczania się (zwierzęta) lub poruszania częściami ciała (np. kwiaty zwracające się do słońca).' },
          { name: '5. Wzrost i rozwój', desc: 'Zwiększanie rozmiarów i masy oraz nabywanie nowych umiejętności i cech.' },
          { name: '6. Rozmnażanie się', desc: 'Wydawanie na świat potomstwa, dzięki czemu gatunek może przetrwać.' },
          { name: '7. Reakcja na bodźce', desc: 'Odbieranie sygnałów z otoczenia (dźwięków, światła, temperatury, dotyku) i reagowanie na nie.' }
        ],
        warning: 'Ruch chmury na niebie wywołany przez wiatr NIE oznacza, że chmura żyje! Chmura jest poruszana z zewnątrz i nie wykonuje czynności życiowych.'
      }
    ]
  },
  {
    id: 'd1_t2',
    title: 'Sposób na naukę i cyfrowy dobrostan',
    pages: '17–24',
    icon: '⚡',
    color: '#e65100',
    intro: 'Dowiedz się, jak dbać o swój mózg, ile godzin snu potrzebuje uczeń klasy 4 oraz jak mądrze korzystać z internetu i telefonu.',
    steps: [
      {
        title: 'Jak efektywnie uczyć się przyrody?',
        badge: 'Higiena pracy umysłowej (s. 18–19)',
        text: 'Nasz mózg uczy się najlepiej, gdy stworzymy mu odpowiednie warunki:',
        details: [
          'Wyłącz powiadomienia w telefonie i odłóż go z dala od biurka (rozpraszacze kradną uwagę!).',
          'Rób krótkie przerwy (5–10 minut) po każdych 20–30 minutach nauki.',
          'Przewietrz pokój przed nauką — świeży tlen jest paliwem dla komórek mózgowych.',
          'Pij czystą wodę i zadbaj o porządek na biurku (miej pod ręką tylko to, co potrzebne do danego zadania).'
        ],
        rule: 'Rób JEDNĄ rzecz na raz! Nauka z jednoczesnym oglądaniem filmików trwa dwa razy dłużej i przynosi gorsze efekty.'
      },
      {
        title: 'Sen — fundament zdrowia i pamięci',
        badge: 'Regeneracja mózgu (s. 19)',
        text: 'Podczas snu mózg porządkuje wiadomości zdobyte w ciągu dnia i utrwala je w pamięci długotrwałej.',
        thresholds: [
          { form: 'Wymagana ilość snu', height: '9–11 godzin', icon: '🌙', example: 'Tyle snu potrzebuje uczeń w Twoim wieku, by rano być wypoczętym i gotowym do myślenia.' },
          { form: 'Skutki zarwanej nocy', height: 'Brak skupienia', icon: '🥱', example: 'Gorsza pamięć, rozdrażnienie, bóle głowy i wolniejsze tempo nauki w szkole.' }
        ]
      },
      {
        title: 'Ile czasu przed ekranem?',
        badge: 'Cyfrowy dobrostan (s. 21–24)',
        text: 'Internet i gry mogą być świetnym źródłem wiedzy i rozrywki, ale wymagają umiaru:',
        bullets: [
          '<strong>Bezpieczny czas:</strong> Po szkole warto ograniczyć gry i media społecznościowe, a czas wolny spędzać na świeżym powietrzu, uprawiając sport lub rozwijając hobby.',
          '<strong>Sygnały ostrzegawcze nadużywania internetu:</strong> Niepokój i złość, gdy nie można skorzystać z telefonu; zaniedbywanie snu, lekcji i spotkań z przyjaciółmi na żywo; myślenie tylko o grze.',
          '<strong>Uzależnienie:</strong> Stan, w którym człowiek nie potrafi przestać korzystać z sieci, nawet gdy widzi, że niszczy to jego zdrowie i relacje z bliskimi.'
        ],
        tip: 'Zasada 20-20-20 dla oczu: po 20 minutach patrzenia w ekran, spójrz przez okno na obiekt oddalony o min. 6 metrów przez 20 sekund!'
      }
    ]
  },
  {
    id: 'd1_t3',
    title: 'Badam przyrodę jak naukowiec',
    pages: '25–36',
    icon: '🧪',
    color: '#00838f',
    intro: 'Poznaj 5 zmysłów badacza, różnicę między obserwacją a doświadczeniem oraz zasady bezpiecznego eksperymentowania.',
    steps: [
      {
        title: 'Zmysły w badaniach przyrodniczych',
        badge: 'Jak poznajemy świat? (s. 26–27)',
        text: 'Informacje z otoczenia odbieramy za pomocą pięciu zmysłów i współpracujących z nimi narządów:',
        table: [
          { feat: 'Zmysł', city: 'Narząd zmysłu', village: 'Co pozwala badać?' },
          { feat: 'Wzrok', city: 'Oko', village: 'Barwę, kształt, wielkość, ruch obiektów' },
          { feat: 'Słuch', city: 'Ucho', village: 'Dźwięki, głosy ptaków, szum wiatru i wody' },
          { feat: 'Węch', city: 'Nos', village: 'Zapachy kwiatów, ziemi, ziół' },
          { feat: 'Smak', city: 'Język', village: 'Smak słodki, słony, kwaśny, gorzki, umami' },
          { feat: 'Dotyk', city: 'Skóra', village: 'Gładkość, twardość, ciepło, zimno, ucisk' }
        ],
        warning: 'Zasada bezpieczeństwa: W przyrodzie i laboratorium NIGDY nie badamy smakiem nieznanych roślin, grzybów ani substancji chemicznych!'
      },
      {
        title: 'Obserwacja a doświadczenie',
        badge: 'Dwie metody badań (s. 31–33, 48)',
        compare: [
          {
            name: 'Obserwacja',
            shape: 'Bierne zbieranie danych',
            features: 'Badacz przygląda się obiektom lub zjawiskom w ich naturalnym stanie, NIE wpływając na nie i NIE zmieniając warunków (np. liczenie ptaków w parku).',
            icon: '👀'
          },
          {
            name: 'Doświadczenie (eksperyment)',
            shape: 'Aktywne badanie',
            features: 'Badacz celowo ZMIENIA jeden wybrany czynnik, aby sprawdzić, jaki będzie tego skutek (np. badanie wzrostu rzeżuchy przy różnym podlewaniu).',
            icon: '🧪'
          }
        ]
      },
      {
        title: 'Jak zaplanować rzetelne doświadczenie?',
        badge: 'Etapy pracy badacza (s. 32–33)',
        timeline: [
          { step: '1', title: 'Pytanie badawcze', desc: 'Pytanie, na które chcemy znaleźć odpowiedź (np. „Czy światło wpływa na wzrost rzeżuchy?”).' },
          { step: '2', title: 'Hipoteza', desc: 'Nasze przypuszczenie przed rozpoczęciem badania (np. „Rzeżucha rosnąca w świetle urośnie wyższa niż w ciemności”).' },
          { step: '3', title: 'Próba badawcza i kontrolna', desc: 'Dwa zestawy: w próbie badawczej zmieniamy badany czynnik (np. ciemność), w próbie kontrolnej warunki są standardowe (światło).' },
          { step: '4', title: 'Wynik i wniosek', desc: 'Notujemy pomiary i sprawdzamy, czy hipoteza została potwierdzona czy obalona.' }
        ],
        rule: 'Pamiętaj: w doświadczeniu zmieniamy TYLKO JEDEN czynnik! Próby powtarzamy kilkukrotnie, aby wykluczyć przypadkowy błąd.'
      },
      {
        title: 'Bezpieczeństwo i znaki ostrzegawcze',
        badge: 'Piktogramy (s. 35)',
        text: 'Podczas doświadczeń należy przestrzegać instrukcji nauczyciela i zwracać uwagę na piktogramy ostrzegawcze na opakowaniach:',
        discovery: [
          { label: '☠️ Czaszka z piszczelami', desc: 'Substancja toksyczna (trująca). Połknięcie, wdychanie lub kontakt ze skórą zagraża zdrowiu i życiu!' },
          { label: '🔥 Płomień', desc: 'Substancja łatwopalna. Należy trzymać ją z dala od ognia, iskier i źródeł ciepła.' },
          { label: '🧪 Kwas na dłoni / metalu', desc: 'Substancja żrąca. Może poparzyć skórę i zniszczyć ubranie lub stół.' },
          { label: '💥 Wybuchająca bomba', desc: 'Substancja wybuchowa. Może wybuchnąć pod wpływem uderzenia lub podgrzania.' }
        ]
      }
    ]
  },
  {
    id: 'd1_t4',
    title: 'Przyrządy przyrodnika i mikroskop',
    pages: '28–29, 37–41',
    icon: '🔬',
    color: '#4527a0',
    intro: 'Poznaj przyrządy ułatwiające obserwację świata i opanuj budowę oraz działanie mikroskopu optycznego.',
    steps: [
      {
        title: 'Przyrządy badawcze w terenie',
        badge: 'Narzędzia odkrywcy (s. 28–29)',
        cards: [
          { name: '🔍 Lupa', desc: 'Służy do powiększania drobnych szczegółów bliskich obiektów trzymanych w dłoni (żyłki liścia, odnóża mrówki).' },
          { name: '🔭 Lornetka', desc: 'Służy do obserwacji obiektów znacznie oddalonych od obserwatora (ptaki w koronach drzew, płochliwe sarny na łące).' },
          { name: '📏 Taśma miernicza', desc: 'Służy do precyzyjnego pomiaru długości i obwodów (np. obwód pnia drzewa).' },
          { name: '🌡️ Termometr', desc: 'Służy do pomiaru temperatury powietrza, wody lub gleby w stopniach Celsjusza.' }
        ]
      },
      {
        title: 'Budowa mikroskopu optycznego',
        badge: 'Kluczowy schemat (s. 38–39)',
        text: 'Mikroskop służy do oglądania obiektów niewidocznych gołym okiem. Składa się z części optycznych i mechanicznych:',
        features: [
          { name: 'A. Okular', desc: 'Znajduje się na samej górze. Przez niego patrzymy okiem — powiększa obraz utworzony przez obiektyw.' },
          { name: 'B. Rewolwer', desc: 'Ruchoma tarcza, której obrót pozwala na szybką zmianę obiektywu na mocniejszy lub słabszy.' },
          { name: 'C. Obiektywy', desc: 'Zestaw soczewek umieszczonych tuż nad preparatem, które dają pierwsze, główne powiększenie.' },
          { name: 'D. Stolik', desc: 'Płaska płytka z łapkami, na której umieszcza się preparat mikroskopowy na szkiełku.' },
          { name: 'E. Śruba makrometryczna', desc: 'Duże pokrętło służące do szybkiego, wstępnego (zgrubnego) ustawiania ostrości.' },
          { name: 'F. Śruba mikrometryczna', desc: 'Mniejsze pokrętło służące do bardzo dokładnego, precyzyjnego dostrojenia ostrości.' },
          { name: 'G. Źródło światła / lusterko', desc: 'Oświetla preparat od dołu, aby promienie światła przeszły przez cienką próbkę do obiektywu.' }
        ]
      },
      {
        title: 'Jak obliczyć powiększenie mikroskopu?',
        badge: 'Zasada matematyczna (s. 39)',
        text: 'Powiększenie całego mikroskopu to <strong>iloczyn</strong> (mnożenie) powiększenia okularu i obiektywu:',
        rule: 'Powiększenie = Powiększenie okularu × Powiększenie obiektywu',
        examples: [
          { cause: 'Okular 10x i Obiektyw 20x', effect: '10 × 20 = 200-krotne powiększenie obrazu' },
          { cause: 'Okular 10x i Obiektyw 40x', effect: '10 × 40 = 400-krotne powiększenie obrazu' }
        ],
        tip: 'Preparat mikroskopowy musi być bardzo cienki, aby światło mogło przez niego swobodnie przejść!'
      }
    ]
  },
  {
    id: 'd1_t5',
    title: 'Kierunki geograficzne i kompas',
    pages: '42–46',
    icon: '🧭',
    color: '#00695c',
    intro: 'Naucz się wyznaczać kierunki świata na mapie i w terenie oraz opanuj bezbłędne posługiwanie się kompasem.',
    steps: [
      {
        title: 'Róża kierunków świata',
        badge: 'Kierunki główne i pośrednie (s. 43)',
        text: 'Wyróżniamy 4 kierunki główne oraz 4 kierunki pośrednie:',
        columns: [
          {
            title: 'Kierunki główne',
            items: ['<strong>N (North)</strong> — Północ', '<strong>S (South)</strong> — Południe', '<strong>E (East)</strong> — Wschód', '<strong>W (West)</strong> — Zachód']
          },
          {
            title: 'Kierunki pośrednie',
            items: ['<strong>NE</strong> — Północny wschód (między N i E)', '<strong>SE</strong> — Południowy wschód (między S i E)', '<strong>SW</strong> — Południowy zachód (między S i W)', '<strong>NW</strong> — Północny zachód (między N i W)']
          }
        ],
        tip: 'Gdy stoisz twarzą na PÓŁNOC (N): za plecami masz POŁUDNIE (S), po prawej stronie WSCHÓD (E), a po lewej ZACHÓD (W)!'
      },
      {
        title: 'Jak zbudowany jest kompas?',
        badge: 'Budowa i zasada działania (s. 42)',
        cards: [
          { name: '🧭 Igła magnetyczna', desc: 'Lekki magnes zawieszony na ostrzu. Jej północny koniec (oznaczony kolorem niebieskim, ciemnym lub literą N) zawsze wskazuje północ magnetyczną Ziemi.' },
          { name: '⭕ Tarcza z podziałką', desc: 'Okrągła płytka z oznaczonymi skrótami kierunków świata (N, S, E, W oraz stopniami od 0° do 360°).' },
          { name: '🛡️ Obudowa z przezroczystym wieczkiem', desc: 'Chroni delikatną igłę przed wiatrem i uszkodzeniem.' }
        ]
      },
      {
        title: 'Jak prawidłowo używać kompasu?',
        badge: 'Instrukcja krok po kroku (s. 45)',
        stepsList: [
          '1. Połóż kompas płasko na dłoni lub na poziomym podłożu.',
          '2. Upewnij się, że w pobliżu nie ma magnesów, metalowych przedmiotów ani telefonu komórkowego (mogą zakłócić igłę!).',
          '3. Poczekaj, aż igła przestanie drgać i swobodnie się zatrzyma.',
          '4. Delikatnie obracaj obudowę kompasu, aż litera N na tarczy pokryje się dokładnie z północnym końcem igły.',
          '5. Teraz możesz bezbłędnie odczytać każdy kierunek w terenie!'
        ],
        warning: 'Gdy zawracasz o 180° (idziesz w przeciwnym kierunku): przeciwieństwem N jest S, W jest E, a przeciwieństwem SW jest NE!'
      }
    ]
  }
];
