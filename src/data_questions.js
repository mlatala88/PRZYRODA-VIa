// Bank 126 pytań dla Działu II: "Moja okolica"
// 7 zestawów po 18 zadań (po 3 z każdego z 6 tematów)
// Każde zadanie jest w 100% interaktywne i NIE wymaga pisania na klawiaturze.

module.exports = [
  // ==========================================
  // ZESTAW 1 (18 zadań)
  // ==========================================
  // T1: Krajobraz mojej okolicy
  {
    id: 'z1_t1_1', set: 1, topic: 0, skill: 'K01', type: 'choice',
    q: 'Czym różni się krajobraz od samej przyrody według podręcznika?',
    opts: [
      'Krajobraz to tylko tereny górskie i lasy.',
      'Krajobraz obejmuje przyrodę oraz wszystkie wytwory rąk człowieka (np. domy i drogi).',
      'Krajobraz to wyłącznie obiekty wybudowane przez ludzi w mieście.',
      'Przyroda i krajobraz to dokładnie to samo.'
    ],
    a: 1,
    why: 'Krajobraz to cały widok terenu. Składa się z przyrody (ożywionej i nieożywionej) oraz elementów stworzonych przez człowieka.',
    src: '54'
  },
  {
    id: 'z1_t1_2', set: 1, topic: 0, skill: 'K02', type: 'bin_sort',
    q: 'Podziel elementy krajobrazu na odpowiednie grupy:',
    bins: ['Przyroda ożywiona', 'Przyroda nieożywiona', 'Wytwór człowieka'],
    items: [
      { text: 'Sosna', bin: 0 },
      { text: 'Rzeka', bin: 1 },
      { text: 'Most betonowy', bin: 2 },
      { text: 'Dzięcioł', bin: 0 },
      { text: 'Głaz granitowy', bin: 1 },
      { text: 'Latarnia uliczna', bin: 2 }
    ],
    why: 'Sosna i dzięcioł to organizmy żywe. Rzeka i skała to przyroda nieożywiona. Most i latarnia zostały zbudowane przez ludzi.',
    src: '54, 85'
  },
  {
    id: 'z1_t1_3', set: 1, topic: 0, skill: 'K06', type: 'match',
    q: 'Połącz przyczynę z bezpośrednim skutkiem w krajobrazie:',
    pairs: [
      { left: 'Wycięcie lasu na zboczu', right: 'Woda i wiatr szybciej wypłukują glebę' },
      { left: 'Płynąca szeroka rzeka', right: 'Ludzie budują przystanie i mosty' },
      { left: 'Odkrycie złóż węgla', right: 'Powstają kopalnie i osiedla górnicze' }
    ],
    why: 'Wszystkie składniki krajobrazu są powiązane: warunki naturalne wpływają na decyzje człowieka, a działania ludzi zmieniają środowisko.',
    src: '58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z1_t2_1', set: 1, topic: 1, skill: 'T02', type: 'bin_sort',
    q: 'Rozdziel podane formy terenu do właściwych szuflad:',
    bins: ['Formy wypukłe', 'Formy wklęsłe', 'Formy płaskie'],
    items: [
      { text: 'Wzgórze', bin: 0 },
      { text: 'Dolina', bin: 1 },
      { text: 'Równina', bin: 2 },
      { text: 'Pagórek', bin: 0 },
      { text: 'Kotlina', bin: 1 },
      { text: 'Góra', bin: 0 }
    ],
    why: 'Wypukłe wznoszą się ponad otoczenie (pagórek, wzgórze, góra). Wklęsłe to zagłębienia (dolina, kotlina). Równina to forma płaska.',
    src: '59–61'
  },
  {
    id: 'z1_t2_2', set: 1, topic: 1, skill: 'T04', type: 'hotspot',
    q: 'Turysta wszedł na samą górę. Kliknij na rysunku SZCZYT wzniesienia:',
    svg: 'mountain',
    hotspots: [
      { id: 'top', x: 50, y: 15, label: 'Najwyższy punkt', correct: true },
      { id: 'slope', x: 30, y: 55, label: 'Zbocze wzniesienia', correct: false },
      { id: 'base', x: 15, y: 88, label: 'Miejsce na dole', correct: false }
    ],
    why: 'Szczyt to najwyżej położony punkt wzniesienia. Stok to zbocze, a podnóże to miejsce u dołu, gdzie góra się zaczyna.',
    src: '61'
  },
  {
    id: 'z1_t2_3', set: 1, topic: 1, skill: 'T03', type: 'choice',
    q: 'Wzniesienie ma wysokość względną 180 metrów (mierzoną od podnóża do szczytu). Jest to:',
    opts: [
      'Pagórek',
      'Wzgórze',
      'Wysoka góra',
      'Dolina rzeczna'
    ],
    a: 1,
    why: 'Wzgórze ma wysokość względną od 50 do 300 m. Pagórek ma do 50 m, a góra powyżej 300 m.',
    src: '61'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z1_t3_1', set: 1, topic: 2, skill: 'S03', type: 'bin_sort',
    q: 'Podziel skały ze względu na ich spójność:',
    bins: ['Skały luźne', 'Skały zwięzłe', 'Skały lite'],
    items: [
      { text: 'Piasek', bin: 0 },
      { text: 'Glina', bin: 1 },
      { text: 'Granit', bin: 2 },
      { text: 'Less', bin: 1 },
      { text: 'Wapień', bin: 2 },
      { text: 'Węgiel kamienny', bin: 2 }
    ],
    why: 'Piasek to skała luźna (ziarna się przesypują). Glina i less to skały zwięzłe. Granit, wapień i węgiel to skały lite.',
    src: '65–66'
  },
  {
    id: 'z1_t3_2', set: 1, topic: 2, skill: 'S05', type: 'choice',
    q: 'Badacz polał nieznaną skałę kroplą octu. Na powierzchni od razu pojawiła się bąbelkująca piana! Jaka to skała?',
    opts: [
      'Granit',
      'Wapień',
      'Węgiel kamienny',
      'Czysty piasek'
    ],
    a: 1,
    why: 'Wapień pieni się w kontakcie z kwasem (np. octem), ponieważ zachodzi reakcja chemiczna z wydzieleniem pęcherzyków gazu.',
    src: '66–67'
  },
  {
    id: 'z1_t3_3', set: 1, topic: 2, skill: 'S06', type: 'match',
    q: 'Dopasuj surowiec skalny do jego zastosowania:',
    pairs: [
      { left: 'Glina', right: 'Wypalanie cegieł i dachówek' },
      { left: 'Granit', right: 'Krawężniki i twarde płyty chodnikowe' },
      { left: 'Piasek', right: 'Produkcja przezroczystego szkła' }
    ],
    why: 'Glina po wypaleniu daje ceramikę i cegły. Twardy granit służy do budowy dróg i pomników. Czysty piasek kwarcowy topi się na szkło.',
    src: '68'
  },

  // T4: Co kryje gleba?
  {
    id: 'z1_t4_1', set: 1, topic: 3, skill: 'G02', type: 'order',
    q: 'Uporządkuj etapy powstawania gleby w kolejności chronologicznej (od 1 do 4):',
    items: [
      'Wietrzenie i kruszenie litej skały przez mróz i deszcz',
      'Zasiedlenie okruchów przez mchy i porosty',
      'Rozkład obumarłych szczątków przez bakterie i powstanie próchnicy',
      'Wykształcenie dojrzałej, wielowarstwowej gleby'
    ],
    correctOrder: [0, 1, 2, 3],
    why: 'Najpierw wietrzeje skała, potem wkraczają pionierskie organizmy, ze szczątków tworzy się próchnica, aż powstaje pełna gleba.',
    src: '69'
  },
  {
    id: 'z1_t4_2', set: 1, topic: 3, skill: 'G05', type: 'hotspot',
    q: 'Kliknij na profilu glebowym POZIOM PRÓCHNICZNY (warstwę decydującą o żyzności):',
    svg: 'soil_profile',
    hotspots: [
      { id: 'litter', x: 50, y: 12, label: 'Ściółka leśna', correct: false },
      { id: 'humus', x: 50, y: 35, label: 'Ciemna warstwa próchnicy', correct: true },
      { id: 'subsoil', x: 50, y: 65, label: 'Warstwa przejściowa', correct: false },
      { id: 'bedrock', x: 50, y: 88, label: 'Lita skała podłoża', correct: false }
    ],
    why: 'Poziom próchniczny to ciemna, bogata w próchnicę warstwa tuż pod ściółką. To w niej rośliny czerpią najwięcej składników.',
    src: '71'
  },
  {
    id: 'z1_t4_3', set: 1, topic: 3, skill: 'G03', type: 'bin_sort',
    q: 'Rozdziel składniki gleby na ożywione i nieożywione:',
    bins: ['Składniki ożywione', 'Składniki nieożywione'],
    items: [
      { text: 'Dżdżownica', bin: 0 },
      { text: 'Okruchy skalne', bin: 1 },
      { text: 'Bakterie glebowe', bin: 0 },
      { text: 'Powietrze', bin: 1 },
      { text: 'Próchnica', bin: 1 },
      { text: 'Korzenie trawy', bin: 0 }
    ],
    why: 'Dżdżownice, bakterie i korzenie to żywe organizmy. Okruchy, powietrze i próchnica to składniki nieożywione (próchnica to martwa materia organiczna).',
    src: '70'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z1_t5_1', set: 1, topic: 4, skill: 'O02', type: 'choice',
    q: 'Uczeń bada wzrost rzeżuchy w ziemi z lasu i w piasku. O czym musi pamiętać, aby doświadczenie było rzetelne?',
    opts: [
      'Musi podlewać obie doniczki dokładnie taką samą ilością wody i trzymać je w tym samym świetle.',
      'Doniczkę z piaskiem powinien schować do ciemnej szafy.',
      'Do ziemi leśnej powinien wsypać nawóz, a do piasku nie.',
      'Może badać w jednej doniczce rzeżuchę, a w drugiej fasolę.'
    ],
    a: 0,
    why: 'W doświadczeniu przyrodniczym zmieniamy tylko jeden badany czynnik (tutaj rodzaj podłoża). Reszta warunków musi być identyczna!',
    src: '76'
  },
  {
    id: 'z1_t5_2', set: 1, topic: 4, skill: 'O03', type: 'choice',
    q: 'Gdy wrzucimy grudkę suchej gleby do słoika z wodą, od razu unoszą się bąbelki. Co to udowadnia?',
    opts: [
      'Że woda zaczyna wrzeć.',
      'Że w porach gleby znajduje się powietrze wypierane przez wodę.',
      'Że w glebie nie ma żadnych minerałów.',
      'Że gleba rozpuszcza się w wodzie jak cukier.'
    ],
    a: 1,
    why: 'Uciekające bąbelki to powietrze glebowe, które woda wypiera z mikroskopijnych przestrzeni między cząstkami ziemi.',
    src: '77'
  },
  {
    id: 'z1_t5_3', set: 1, topic: 4, skill: 'O01', type: 'match',
    q: 'Dopasuj cechę próbki gleby do jej rodzaju:',
    pairs: [
      { left: 'Bardzo ciemna, puszysta, mnóstwo próchnicy', right: 'Kupna ziemia ogrodowa' },
      { left: 'Jasna, sypka, woda przesiąka przez nią błyskawicznie', right: 'Gleba piaszczysta' },
      { left: 'Zbita, klei się do rąk po zmoczeniu, zatrzymuje wodę', right: 'Gleba gliniasta' }
    ],
    why: 'Ziemia ogrodowa jest sztucznie wzbogacona próchnicą. Piasek przepuszcza wodę, a glina jest zbita i plastyczna.',
    src: '74–75'
  },

  // T6: Rośliny i zwierzęta w mojej okolicy
  {
    id: 'z1_t6_1', set: 1, topic: 5, skill: 'P03', type: 'choice',
    q: 'Drzewo w parku ma białą korę z czarnymi spękaniami na dole pnia i wiotkie gałązki. Jakie to drzewo?',
    img: 'assets/img/drzewo_brzoza.jpg',
    opts: [
      'Lipa drobnolistna',
      'Brzoza brodawkowata',
      'Dąb szypułkowy',
      'Sosna zwyczajna'
    ],
    a: 1,
    why: 'Biała kora łuszcząca się cienkimi płatami to znak rozpoznawczy brzozy brodawkowatej.',
    src: '82'
  },
  {
    id: 'z1_t6_2', set: 1, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak wielkości gołębia ma popielatoszary tułów, a głowę, skrzydła i ogon całkowicie czarne. Który to ptak?',
    img: 'assets/img/ptak_wrona.jpg',
    opts: [
      'Gawron',
      'Sroka',
      'Wrona siwa',
      'Szpak'
    ],
    a: 2,
    why: 'Wrona siwa wyróżnia się dwubarwnym upierzeniem: popielaty tułów kontrastuje z czarną głową, skrzydłami i ogonem.',
    src: '83'
  },
  {
    id: 'z1_t6_3', set: 1, topic: 5, skill: 'P07', type: 'multichoice',
    q: 'Zaznacz 3 rzeczywiste powody, dla których dzikie zwierzęta (lisy, dziki) przychodzą do miast:',
    opts: [
      'Łatwy dostęp do resztek jedzenia w otwartych śmietnikach',
      'Chęć zaprzyjaźnienia się z psami i kotami',
      'Zimą w mieście jest cieplej niż w głębi lasu',
      'W mieście nie ma dużych drapieżników (wilków, rysi)',
      'Zwierzęta szukają w mieście sklepów zoologicznych'
    ],
    correctIndices: [0, 2, 3],
    why: 'Zwierzęta wabią resztki pokarmu, cieplejszy mikroklimat miejski zimą oraz brak naturalnych wrogów.',
    src: '81'
  },

  // ==========================================
  // ZESTAW 2 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z2_t1_1', set: 2, topic: 0, skill: 'K03', type: 'choice',
    q: 'Który z poniższych obszarów jest przykładem krajobrazu naturalnego?',
    opts: [
      'Wielki park miejski ze stawem i alejkami w centrum Warszawy',
      'Wiejskie pole pszenicy otoczone sadami owocowymi',
      'Niedostępny, dziki fragment puszczy górskiej bez ścieżek i domów',
      'Zalew powstały po wybudowaniu zapory wodnej'
    ],
    a: 2,
    why: 'Krajobraz naturalny to taki, który powstał i funkcjonuje bez ingerencji człowieka. Parki i pola są stworzone przez ludzi.',
    src: '55'
  },
  {
    id: 'z2_t1_2', set: 2, topic: 0, skill: 'K04', type: 'match',
    q: 'Dopasuj cechę krajobrazu do miasta lub wsi:',
    pairs: [
      { left: 'Duże pola uprawne, zagrody i luźne domy', right: 'Krajobraz wiejski' },
      { left: 'Gęsta zabudowa, wysokie bloki, fabryki i tramwaje', right: 'Krajobraz miejski' },
      { left: 'Naturalne skały i lodowce bez ingerencji ludzi', right: 'Krajobraz naturalny' }
    ],
    why: 'Miasto cechuje gęsta zabudowa i przemysł, wieś rolnictwo i rozproszone domy, a krajobraz naturalny brak śladów człowieka.',
    src: '55–57'
  },
  {
    id: 'z2_t1_3', set: 2, topic: 0, skill: 'K05', type: 'order',
    q: 'Ułóż punkty opisu krajobrazu we właściwej kolejności zgodnie z podręcznikiem:',
    items: [
      'Ukształtowanie terenu (czy płasko, czy góry i doliny)',
      'Wody i roślinność (rzeki, jeziora, lasy)',
      'Ślady działalności człowieka (budynki, drogi, pola)'
    ],
    correctOrder: [0, 1, 2],
    why: 'Zaczynamy od ogólnego ukształtowania powierzchni, potem opisujemy wody i przyrodę, a na końcu obiekty zbudowane przez ludzi.',
    src: '54, 58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z2_t2_1', set: 2, topic: 1, skill: 'T05', type: 'choice',
    q: 'Czym różni się dolina od kotliny?',
    opts: [
      'Dolina to wzniesienie, a kotlina to woda.',
      'Dolina to podłużne obniżenie (często z rzeką), a kotlina to obniżenie otoczone wzniesieniami ze wszystkich stron.',
      'Kotlina jest zawsze płaska jak stół, a dolina ma ponad 1000 m wysokości.',
      'Dolina i kotlina to dwie nazwy tej samej góry.'
    ],
    a: 1,
    why: 'Dolina jest podłużna i wyżłobiona przez rzekę. Kotlina przypomina misę otoczoną ze wszystkich stron wzniesieniami.',
    src: '60'
  },
  {
    id: 'z2_t2_2', set: 2, topic: 1, skill: 'T04', type: 'hotspot',
    q: 'Rowerzysta rozpoczyna podjazd pod górę na samym dole. Kliknij PODNÓŻE wzniesienia:',
    svg: 'mountain',
    hotspots: [
      { id: 'top', x: 50, y: 15, label: 'Szczyt góry', correct: false },
      { id: 'slope', x: 30, y: 55, label: 'Stok wzniesienia', correct: false },
      { id: 'base', x: 15, y: 88, label: 'Miejsce przejścia w teren płaski', correct: true }
    ],
    why: 'Podnóże to dolna część wzniesienia, w której stok przechodzi w otaczający, płaski teren.',
    src: '61'
  },
  {
    id: 'z2_t2_3', set: 2, topic: 1, skill: 'T03', type: 'match',
    q: 'Dopasuj wysokość względną do odpowiedniej formy wypukłej:',
    pairs: [
      { left: 'Wysokość do 50 m od podnóża', right: 'Pagórek' },
      { left: 'Wysokość od 50 do 300 m od podnóża', right: 'Wzgórze' },
      { left: 'Wysokość powyżej 300 m od podnóża', right: 'Góra' }
    ],
    why: 'Progi wysokości względnej to: pagórek do 50 m, wzgórze 50–300 m, góra powyżej 300 m.',
    src: '61'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z2_t3_1', set: 2, topic: 2, skill: 'S01', type: 'choice',
    q: 'Z czego zbudowane są skały według definicji z podręcznika?',
    opts: [
      'Z plastiku i utwardzonego betonu.',
      'Z minerałów — jednego rodzaju lub wielu różnych.',
      'Wyłącznie ze szczątków obumarłych dżdżownic.',
      'Ze sprasowanego piasku i kleju roślinnego.'
    ],
    a: 1,
    why: 'Skała to naturalny materiał Ziemi zbudowany z drobniejszych ziaren zwanych minerałami.',
    src: '64'
  },
  {
    id: 'z2_t3_2', set: 2, topic: 2, skill: 'S04', type: 'choice',
    q: 'Skała jest zwięzła, brunatna, a po dodaniu wody staje się plastyczna i można z niej lepić garnki. Jaka to skała?',
    img: 'assets/img/skala_glina.jpg',
    opts: [
      'Piasek',
      'Granit',
      'Glina',
      'Węgiel kamienny'
    ],
    a: 2,
    why: 'Glina po zmoczeniu staje się plastyczna (nie przepuszcza wody) i od wieków służy do lepienia naczyń oraz cegieł.',
    src: '65, 68'
  },
  {
    id: 'z2_t3_3', set: 2, topic: 2, skill: 'S02', type: 'match',
    q: 'Połącz badanie z właściwością skały, którą ono sprawdza:',
    pairs: [
      { left: 'Próba zarysowania stalowym gwoździem', right: 'Twardość' },
      { left: 'Sprawdzenie, czy skała kruszy się w dłoniach', right: 'Spójność' },
      { left: 'Polanie powierzchni kroplą octu', right: 'Reakcja na kwas (wykrywanie wapienia)' }
    ],
    why: 'Rysowanie bada twardość, kruszenie bada spójność (luźna/zwięzła/lita), a ocet sprawdza obecność wapienia.',
    src: '64, 67'
  },

  // T4: Co kryje gleba?
  {
    id: 'z2_t4_1', set: 2, topic: 3, skill: 'G04', type: 'choice',
    q: 'Czym jest próchnica i dlaczego jest taka ważna dla gleby?',
    opts: [
      'To choroba zębów, która niszczy korzenie roślin.',
      'To ciemna warstwa powstała z rozłożonych szczątków organizmów, która decyduje o żyzności gleby.',
      'To drobny piasek przyniesiony przez wiatr z pustyni.',
      'To substancja chemiczna produkowana wyłącznie w fabrykach nawozów.'
    ],
    a: 1,
    why: 'Próchnica powstaje z rozkładu obumarłych roślin i zwierząt. Nadaje glebie ciemny kolor i zapewnia żyzność.',
    src: '69–71'
  },
  {
    id: 'z2_t4_2', set: 2, topic: 3, skill: 'G06', type: 'choice',
    q: 'Rolnik porównuje dwa pola. Na którym polu plony będą wyższe i dlaczego?',
    opts: [
      'Na polu z grubą, ciemną warstwą próchnicy o strukturze gruzełkowatej.',
      'Na polu z jasnym, suchym piaskiem bez organizmów glebowych.',
      'Na polu zbitą z samej twardej gliny, po której woda spływa jak po asfalcie.',
      'Na polu z litą skałą granitową tuż pod trawą.'
    ],
    a: 0,
    why: 'Gleby o grubej warstwie próchnicy i gruzełkowatej strukturze są najbardziej żyzne — najlepiej trzymają wilgoć i składniki pokarmowe.',
    src: '71, 74'
  },
  {
    id: 'z2_t4_3', set: 2, topic: 3, skill: 'G07', type: 'multichoice',
    q: 'Zaznacz 3 najważniejsze powody, dla których gleba ma kluczowe znaczenie dla Ziemi:',
    opts: [
      'Umożliwia wzrost roślin dających ludziom i zwierzętom pożywienie',
      'Filtruje wodę deszczową i zatrzymuje wilgoć w przyrodzie',
      'Jest siedliskiem życia dla milionów pożytecznych organizmów',
      'Służy do produkcji komputerów i smartfonów',
      'Sprawia, że woda morska staje się słona'
    ],
    correctIndices: [0, 1, 2],
    why: 'Gleba daje pożywienie (podstawa rolnictwa), jest domem organizmów i naturalnym filtrem wody.',
    src: '72'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z2_t5_1', set: 2, topic: 4, skill: 'O03', type: 'choice',
    q: 'Doświadczenie: słoik z wilgotną glebą zakręcono i postawiono przy ciepłym grzejniku. Po godzinie na ściankach pojawiły się kropelki. Co to oznacza?',
    opts: [
      'Że słoik był nieszczelny i wpadł do niego deszcz.',
      'Że w glebie znajduje się woda, która pod wpływem ciepła odparowała i skropliła się na szkle.',
      'Że gleba zamieniła się w czysty tlen.',
      'Że w glebie nie ma wody, lecz tylko suchy gaz.'
    ],
    a: 1,
    why: 'Kropelki na ściankach to skroplona para wodna — dowód na stałą obecność wody w porach glebowych.',
    src: '78'
  },
  {
    id: 'z2_t5_2', set: 2, topic: 4, skill: 'O01', type: 'choice',
    q: 'Dlaczego ziemia ogrodowa ze sklepu różni się od przeciętnej gleby z pobocza drogi?',
    opts: [
      'Bo kupna ziemia to czysty, sztuczny plastik.',
      'Bo ziemia ogrodowa jest specjalnie wzbogacona w dużą ilość próchnicy i składników odżywczych.',
      'Bo gleba przydrożna jest zawsze najbardziej żyzna w całej Polsce.',
      'Nie ma między nimi żadnej różnicy.'
    ],
    a: 1,
    why: 'Ziemia ze sklepu ma specjalnie dobrany skład z dużą zawartością próchnicy i torfu, by kwiaty rosły zdrowo.',
    src: '74–76'
  },
  {
    id: 'z2_t5_3', set: 2, topic: 4, skill: 'O01', type: 'choice',
    q: 'Uczeń zwilżył próbkę gleby z ogrodu i bez problemu uformował z niej gładki wałeczek, który nie pękał i lepił się do dłoni. Jaki składnik dominuje w tej glebie?',
    opts: [
      'Glina — jest drobnoziarnista, lepka i bardzo plastyczna po zmoczeniu.',
      'Piasek — jest sypki i od razu rozsypuje się w palcach.',
      'Czysty żwir — ma ostre, duże kamyki.',
      'Skała lita — nie daje się zmoczyć ani ugnieść.'
    ],
    a: 0,
    why: 'Gleba gliniasta po dodaniu wody pozwala formować trwałe wałeczki i kulki, ponieważ cząstki gliny mocno się ze sobą zlepiają.',
    src: '75'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z2_t6_1', set: 2, topic: 5, skill: 'P03', type: 'choice',
    q: 'Liście tego drzewa są wyraźnie sercowate i asymetryczne u nasady, a przy owocach znajduje się podłużne skrzydełko. Co to za drzewo?',
    img: 'assets/img/drzewo_lipa.jpg',
    opts: [
      'Brzoza brodawkowata',
      'Lipa drobnolistna',
      'Śnieguliczka biała',
      'Dąb szypułkowy'
    ],
    a: 1,
    why: 'Sercowate liście i skrzydełko ułatwiające owocom lot z wiatrem to cechy charakterystyczne lipy drobnolistnej.',
    src: '82'
  },
  {
    id: 'z2_t6_2', set: 2, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak jest mniejszy od wrony, ma ciemnoszary tułów, popielatą szyję i charakterystyczne jasne, białawe oko. Który to ptak?',
    img: 'assets/img/ptak_kawka.jpg',
    opts: [
      'Kawka',
      'Sroka',
      'Kos',
      'Gawron'
    ],
    a: 0,
    why: 'Kawka wyróżnia się jasnoszarą szyją oraz jasnoniebieską lub białawą tęczówką oka.',
    src: '83'
  },
  {
    id: 'z2_t6_3', set: 2, topic: 5, skill: 'P05', type: 'choice',
    q: 'Który owad ma spłaszczone brunatne ciało i charakterystyczne cęgi (szczypce) na końcu odwłoka, którymi broni się przed wrogami?',
    img: 'assets/img/owad_skorek.jpg',
    opts: [
      'Biedronka siedmiokropka',
      'Skorek pospolity (szczypawka)',
      'Rusałka pokrzywnik',
      'Rybik cukrowy'
    ],
    a: 1,
    why: 'Skorek pospolity (popularnie nazywany szczypawką) ma cęgi na odwłoku. Mimo groźnego wyglądu jest nieszkodliwy dla człowieka.',
    src: '84'
  },

  // ==========================================
  // ZESTAW 3 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z3_t1_1', set: 3, topic: 0, skill: 'K01', type: 'choice',
    q: 'Dlaczego asfaltowa ulica i latarnie należą do krajobrazu, mimo że nie są przyrodą?',
    opts: [
      'Ponieważ krajobraz obejmuje cały widok terenu, w tym wytwory pracy rąk ludzkich.',
      'Ponieważ asfalt rośnie na drzewach w lesie.',
      'To pomyłka w podręczniku — latarnia nie należy do krajobrazu.',
      'Ponieważ latarnie świecą w nocy jak gwiazdy.'
    ],
    a: 0,
    why: 'Krajobraz to całościowy obraz przestrzeni — składa się z natury oraz obiektów stworzonych przez człowieka.',
    src: '54'
  },
  {
    id: 'z3_t1_2', set: 3, topic: 0, skill: 'K02', type: 'choice',
    q: 'Wskaż zestaw, w którym znajdują się WYŁĄCZNIE elementy przyrody nieożywionej:',
    opts: [
      'Mech, grzyb borowik, dżdżownica',
      'Głaz granitowy, woda w potoku, piasek na plaży',
      'Drewniana ławka, betonowy płot, asfalt',
      'Wróbel, rzeka, plastikowa butelka'
    ],
    a: 1,
    why: 'Głaz, woda i piasek to elementy natury niemające cech życia (przyroda nieożywiona).',
    src: '54, 85'
  },
  {
    id: 'z3_t1_3', set: 3, topic: 0, skill: 'K06', type: 'choice',
    q: 'Co może być bezpośrednim skutkiem wybudowania ruchliwej autostrady przez środek dużego lasu?',
    opts: [
      'Las natychmiast zamieni się w pustynię piaszczystą.',
      'Zwierzęta mają przeciętą trasę wędrówek, a hałas i spaliny płoszą mieszkańców lasu.',
      'W lesie natychmiast zacznie rosnąć więcej egzotycznych palm.',
      'Autostrada nie ma żadnego wpływu na przyrodę wokół.'
    ],
    a: 1,
    why: 'Droga dzieli las na dwie części, utrudniając zwierzętom przemieszczanie się i zagrażając ich bezpieczeństwu.',
    src: '58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z3_t2_1', set: 3, topic: 1, skill: 'T01', type: 'choice',
    q: 'Jak podręcznik wyjaśnia pojęcie „ukształtowanie terenu”?',
    opts: [
      'To plan lekcji przyrody powieszony na ścianie.',
      'To wszystkie nierówności powierzchni Ziemi: wzniesienia, obniżenia i równiny.',
      'To wyłącznie mapa narysowana na kartce papieru.',
      'To nazwa najwyższego szczytu w Tatrach.'
    ],
    a: 1,
    why: 'Ukształtowanie terenu to ogół form rzeźby powierzchni Ziemi (wypukłych, wklęsłych i płaskich).',
    src: '59'
  },
  {
    id: 'z3_t2_2', set: 3, topic: 1, skill: 'T04', type: 'hotspot',
    q: 'Kliknij na rysunku STOK (nachyloną powierzchnię wzniesienia):',
    svg: 'mountain',
    hotspots: [
      { id: 'top', x: 50, y: 15, label: 'Szczyt', correct: false },
      { id: 'slope', x: 30, y: 55, label: 'Stok wzniesienia', correct: true },
      { id: 'base', x: 15, y: 88, label: 'Podnóże', correct: false }
    ],
    why: 'Stok to pochyła powierzchnia góry między podnóżem a szczytem. Może być stromy lub łagodny.',
    src: '61'
  },
  {
    id: 'z3_t2_3', set: 3, topic: 1, skill: 'T06', type: 'choice',
    q: 'Wycieczka wędruje przez teren: najpierw długo po płaskiej równinie, potem schodzi w dół podłużnym obniżeniem z potokiem na dnie. W jakiej formie terenu się znaleźli?',
    opts: [
      'Na szczycie góry',
      'W dolinie',
      'Na wzgórzu',
      'W jaskini'
    ],
    a: 1,
    why: 'Podłużne obniżenie terenu z płynącym na dnie potokiem to dolina.',
    src: '60'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z3_t3_1', set: 3, topic: 2, skill: 'S05', type: 'choice',
    q: 'Skała jest lita, bardzo twarda, a po przyjrzeniu się widać w niej różnokolorowe ziarna: szare, różowawe i czarne błyszczące. Co to za skała?',
    img: 'assets/img/skala_granit.jpg',
    opts: [
      'Wapień',
      'Granit',
      'Węgiel kamienny',
      'Glina'
    ],
    a: 1,
    why: 'Granit jest skałą litą zbudowaną z widocznych gołym okiem ziaren kwarcu, skalenia i łyszczyku (miki).',
    src: '66'
  },
  {
    id: 'z3_t3_2', set: 3, topic: 2, skill: 'S03', type: 'choice',
    q: 'Która z wymienionych skał jest skałą luźną?',
    opts: [
      'Glina',
      'Piasek',
      'Granit',
      'Wapień'
    ],
    a: 1,
    why: 'Piasek to skała luźna — jej ziarna nie są ze sobą zespolone i łatwo się przesypują.',
    src: '65'
  },
  {
    id: 'z3_t3_3', set: 3, topic: 2, skill: 'S05', type: 'multichoice',
    q: 'Zaznacz 2 cechy węgla kamiennego opisane w podręczniku (s. 66):',
    opts: [
      'Czarna barwa z wyraźnym połyskiem',
      'Pieni się gwałtownie po polaniu octem',
      'Jest skałą litą, ale dość kruchą',
      'Rozpuszcza się w zimnej wodzie jak sól kuchenna'
    ],
    correctIndices: [0, 2],
    why: 'Węgiel kamienny jest czarny z połyskiem, lity, ale stosunkowo kruchy i pali się dając ciepło.',
    src: '66'
  },

  // T4: Co kryje gleba?
  {
    id: 'z3_t4_1', set: 3, topic: 3, skill: 'G01', type: 'choice',
    q: 'Czym różni się gleba od zwykłego, czystego piasku na plaży?',
    opts: [
      'Gleba jest całkowicie sucha i nie zawiera żadnych minerałów.',
      'Gleba zawiera próchnicę, wodę, sole mineralne i żywe organizmy umożliwiające wzrost roślin.',
      'Piasek jest ciemniejszy i ma więcej składników odżywczych niż gleba.',
      'Gleba i piasek to dwie nazwy tej samej substancji.'
    ],
    a: 1,
    why: 'Gleba to żywe podłoże z próchnicą i mikroorganizmami, podczas gdy czysty piasek to jedynie luźne ziarna minerałów pozbawione żyzności.',
    src: '69–71'
  },
  {
    id: 'z3_t4_2', set: 3, topic: 3, skill: 'G03', type: 'choice',
    q: 'Dlaczego próchnica — mimo że powstała ze szczątków roślin i zwierząt — jest zaliczana do składników NIEożywionych gleby?',
    opts: [
      'Bo nie wykonuje już żadnych czynności życiowych (nie oddycha, nie odżywia się i nie rośnie).',
      'To pomyłka — próchnica to żywe zwierzę podobne do pająka.',
      'Ponieważ zrobiono ją z plastiku.',
      'Ponieważ znajduje się głęboko pod ziemią.'
    ],
    a: 0,
    why: 'Próchnica to martwa materia organiczna. Choć pochodzi od organizmów, sama nie wykonuje czynności życiowych.',
    src: '70'
  },
  {
    id: 'z3_t4_3', set: 3, topic: 3, skill: 'G04', type: 'choice',
    q: 'Jak dżdżownice pomagają glebie i rosnącym w niej roślinom?',
    opts: [
      'Zjadają korzenie roślin, żeby pole było puste.',
      'Drążą korytarze napowietrzając glebę i mieszają szczątki organiczne ze składnikami mineralnymi.',
      'Wypijają całą wodę z gleby, powodując suszę.',
      'Wytwarzają kamienie i litą skałę pod ziemią.'
    ],
    a: 1,
    why: 'Dżdżownice spulchniają glebę, wpuszczając powietrze i wodę do korzeni, oraz przekształcają szczątki w żyzną próchnicę.',
    src: '70, 74'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z3_t5_1', set: 3, topic: 4, skill: 'O02', type: 'choice',
    q: 'Podczas doświadczenia posadzono fasolę w glebie piaszczystej i w ziemi próchnicznej. Po 2 tygodniach fasola w ziemi próchnicznej była dwukrotnie wyższa. Jaki jest prawidłowy wniosek?',
    opts: [
      'Gleba bogata w próchnicę zapewnia lepsze warunki do wzrostu i rozwoju fasoli niż gleba piaszczysta.',
      'Fasola nie potrzebuje gleby do życia.',
      'W glebie piaszczystej rośliny rosną najszybciej na świecie.',
      'Doświadczenie nie powiodło się, bo fasola powinna zniknąć.'
    ],
    a: 0,
    why: 'Większy wzrost w ziemi próchnicznej potwierdza, że obecność próchnicy i soli mineralnych sprzyja rozwojowi roślin.',
    src: '76'
  },
  {
    id: 'z3_t5_2', set: 3, topic: 4, skill: 'O03', type: 'choice',
    q: 'Co stałoby się z korzeniami roślin, gdyby pole uprawne zostało całkowicie zalane wodą na wiele tygodni?',
    opts: [
      'Korzenie urosłyby natychmiast o 10 metrów.',
      'Korzenie zaczęłyby obumierać z braku tlenu, ponieważ woda wyparła całe powietrze glebowe.',
      'Rośliny zamieniłyby się w ryby.',
      'Zalanie wodą w ogóle nie wpływa na korzenie.'
    ],
    a: 1,
    why: 'Korzenie roślin oddychają powietrzem glebowym. Długotrwałe zalanie odcina dostęp tlenu, prowadząc do gnicia korzeni.',
    src: '72, 77'
  },
  {
    id: 'z3_t5_3', set: 3, topic: 4, skill: 'O01', type: 'choice',
    q: 'Podczas badania próbki gleby z lasu zauważono obecność dżdżownicy, szczątków liści i ciemny kolor. Świadczy to o tym, że gleba ta:',
    opts: [
      'Jest całkowicie jałowa i martwa.',
      'Jest bogata w próchnicę i organizmy glebowe sprzyjające żyzności.',
      'To lita skała wapienna.',
      'Została skażona plastikiem.'
    ],
    a: 1,
    why: 'Ciemna barwa, szczątki liści i obecność dżdżownic dowodzą aktywnego tworzenia próchnicy i dobrej jakości gleby.',
    src: '74–76'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z3_t6_1', set: 3, topic: 5, skill: 'P03', type: 'choice',
    q: 'Krzew w parku miejskim ma jesienią mnóstwo charakterystycznych, kulistych, śnieżnobiałych owoców. Co to za roślina?',
    img: 'assets/img/krzew_snieguliczka.jpg',
    opts: [
      'Róża dzika',
      'Śnieguliczka biała',
      'Babka lancetowata',
      'Koniczyna biała'
    ],
    a: 1,
    why: 'Śnieguliczka biała słynie z białych, miękkich kulek owoców, które utrzymują się na krzewie także zimą.',
    src: '82'
  },
  {
    id: 'z3_t6_2', set: 3, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak ma bardzo długi, schodkowaty ogon o zielonkawym połysku oraz kontrastowe, czarno-białe upierzenie. Który to ptak?',
    img: 'assets/img/ptak_sroka.jpg',
    opts: [
      'Sroka',
      'Gawron',
      'Kos',
      'Wrona siwa'
    ],
    a: 0,
    why: 'Sroka jest łatwa do rozpoznania dzięki długiemu ogonowi oraz białemu brzuchowi i bokom przy czarnym grzbiecie.',
    src: '83'
  },
  {
    id: 'z3_t6_3', set: 3, topic: 5, skill: 'P05', type: 'choice',
    q: 'Motyl dzienny o ceglastoczerwonych skrzydłach z żółtymi i czarnymi plamami oraz rzędem błękitnych plamek przy krawędzi to:',
    img: 'assets/img/owad_rusalka.jpg',
    opts: [
      'Rusałka pokrzywnik',
      'Bielinek kapustnik',
      'Mól odzieżowy',
      'Skorek pospolity'
    ],
    a: 0,
    why: 'To rusałka pokrzywnik — pospolity i piękny motyl, którego gąsienice żywią się liśćmi pokrzywy.',
    src: '84'
  },

  // ==========================================
  // ZESTAW 4 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z4_t1_1', set: 4, topic: 0, skill: 'K03', type: 'choice',
    q: 'Młody badacz ogląda zdjęcie: widać na nim wycięty las, wielki kamieniołom i ciężarówki wywożące urobek. Jaki to krajobraz?',
    opts: [
      'Krajobraz naturalny',
      'Krajobraz przekształcony przez człowieka (przemysłowy)',
      'Krajobraz pierwotny',
      'Krajobraz bezludny'
    ],
    a: 1,
    why: 'Kamieniołom, drogi i wycinka to wyraźne ślady działalności człowieka — to krajobraz silnie przekształcony.',
    src: '55'
  },
  {
    id: 'z4_t1_2', set: 4, topic: 0, skill: 'K04', type: 'choice',
    q: 'Który element krajobrazu jest typowy dla wsi, a rzadko spotykany w ścisłym centrum wielkiego miasta?',
    opts: [
      'Linia tramwajowa i wieżowce',
      'Rozległe pola uprawne, stodoły i sady',
      'Wielopiętrowe centra handlowe',
      'Podziemne stacje metra'
    ],
    a: 1,
    why: 'Pola uprawne, stodoły i zagrody to elementy charakterystyczne dla krajobrazu wiejskiego.',
    src: '56–57'
  },
  {
    id: 'z4_t1_3', set: 4, topic: 0, skill: 'K02', type: 'choice',
    q: 'Do której grupy elementów krajobrazu należy dąb rosnący na skraju osiedla mieszkaniowego?',
    opts: [
      'Do przyrody ożywionej',
      'Do przyrody nieożywionej',
      'Do wytworów człowieka',
      'Dąb nie należy do krajobrazu'
    ],
    a: 0,
    why: 'Dąb jest żywym organizmem (rośliną), więc należy do przyrody ożywionej, nawet jeśli rośnie na osiedlu.',
    src: '54'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z4_t2_1', set: 4, topic: 1, skill: 'T02', type: 'choice',
    q: 'Która z poniższych form terenu jest formą płaską?',
    opts: [
      'Dolina rzeczna',
      'Równina',
      'Kotlina',
      'Wzgórze'
    ],
    a: 1,
    why: 'Równina to rozległy, płaski lub bardzo lekko falisty obszar Ziemi.',
    src: '60'
  },
  {
    id: 'z4_t2_2', set: 4, topic: 1, skill: 'T03', type: 'choice',
    q: 'Wzniesienie ma wysokość względną 35 metrów. Jaką nazwę nosi ta forma wypukła?',
    opts: [
      'Pagórek',
      'Wzgórze',
      'Góra',
      'Równina'
    ],
    a: 0,
    why: 'Wzniesienie o wysokości względnej do 50 metrów to pagórek.',
    src: '61'
  },
  {
    id: 'z4_t2_3', set: 4, topic: 1, skill: 'T05', type: 'choice',
    q: 'Wyobraź sobie teren otoczony ze wszystkich stron wysokimi wzgórzami, tworzący głęboką „misę”. Jaka to forma wklęsła?',
    opts: [
      'Kotlina',
      'Dolina',
      'Szczyt',
      'Pagórek'
    ],
    a: 0,
    why: 'Kotlina to forma wklęsła zamknięta wzniesieniami ze wszystkich stron, w przeciwieństwie do podłużnej doliny.',
    src: '60'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z4_t3_1', set: 4, topic: 2, skill: 'S03', type: 'choice',
    q: 'Która para skał należy do skał ZWIĘZŁYCH?',
    opts: [
      'Piasek i żwir',
      'Glina i less',
      'Granit i bazalt',
      'Wapień i węgiel'
    ],
    a: 1,
    why: 'Glina i less to skały zwięzłe — ich ziarna są słabo połączone, dają się rozkruszyć w palcach, a z wodą miękną.',
    src: '65'
  },
  {
    id: 'z4_t3_2', set: 4, topic: 2, skill: 'S06', type: 'choice',
    q: 'Z której skały produkuje się kredę do pisania po tablicy oraz wapno budowlane?',
    img: 'assets/img/skala_wapien.jpg',
    opts: [
      'Z węgla kamiennego',
      'Z wapienia',
      'Z granitu',
      'Z piasku'
    ],
    a: 1,
    why: 'Wapień jest surowcem do produkcji kredy, wapna i cementu.',
    src: '68'
  },
  {
    id: 'z4_t3_3', set: 4, topic: 2, skill: 'S05', type: 'choice',
    q: 'Na wycieczce znaleziono kamień. Przy próbie zarysowania stalowym gwoździem okazuje się, że gwóźdź nie zostawia śladu. Co to mówi o skale?',
    opts: [
      'Skała jest bardzo miękka.',
      'Skała charakteryzuje się dużą twardością.',
      'Skała jest skałą luźną.',
      'Skała rozpuszcza się w wodzie.'
    ],
    a: 1,
    why: 'Brak rysy po gwoździu świadczy o dużej twardości skały (np. tak zachowuje się twardy granit).',
    src: '64, 66'
  },

  // T4: Co kryje gleba?
  {
    id: 'z4_t4_1', set: 4, topic: 3, skill: 'G03', type: 'multichoice',
    q: 'Wybierz 3 elementy należące do składników OŻYWIONYCH gleby:',
    opts: [
      'Dżdżownica ziemna',
      'Bakterie glebowe',
      'Okruchy kwarcu',
      'Korzenie rośliny',
      'Krople wody'
    ],
    correctIndices: [0, 1, 3],
    why: 'Dżdżownice, bakterie i korzenie to żywe organizmy zamieszkujące glebę.',
    src: '70'
  },
  {
    id: 'z4_t4_2', set: 4, topic: 3, skill: 'G05', type: 'choice',
    q: 'Co znajduje się na samym spodzie dojrzałego profilu glebowego?',
    opts: [
      'Warstwa świeżych liści (ściółka)',
      'Skała macierzysta (lita lub zwietrzała skała podłoża)',
      'Ciemny poziom próchniczny',
      'Plastikowe rury'
    ],
    a: 1,
    why: 'Pod wszystkimi warstwami gleby znajduje się skała macierzysta, z której wietrzenia powstała gleba.',
    src: '71'
  },
  {
    id: 'z4_t4_3', set: 4, topic: 3, skill: 'G06', type: 'choice',
    q: 'Co to jest struktura gruzełkowata gleby i dlaczego jest pożądana?',
    opts: [
      'To twarda, zabetonowana powierzchnia, po której nie da się chodzić.',
      'To ułożenie cząstek gleby w małe grudki, dzięki czemu woda i powietrze swobodnie docierają do korzeni.',
      'To gleba złożona z wielkich głazów granitowych.',
      'To gleba, która nie ma w sobie ani kropli wody.'
    ],
    a: 1,
    why: 'Struktura gruzełkowata zapewnia optymalny dostęp powietrza i wilgoci, co jest kluczowe dla żyzności gleby.',
    src: '71'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z5_t5_1', set: 4, topic: 4, skill: 'O01', type: 'choice',
    q: 'Gleba z ogrodu babci po ściśnięciu w garści uformowała zwartą kulkę, która nie rozsypała się po otwarciu dłoni. Co przeważa w tej glebie?',
    opts: [
      'Suchy piasek',
      'Cząstki gliny',
      'Czyste żwiry',
      'Lity granit'
    ],
    a: 1,
    why: 'Zdolność do lepienia i zachowywania kształtu to cecha gleb gliniastych o dużej spoistości.',
    src: '74–75'
  },
  {
    id: 'z5_t5_2', set: 4, topic: 4, skill: 'O02', type: 'choice',
    q: 'Uczeń badał wpływ światła na rośliny. W doniczce A dał żyzną glebę i postawił na słońcu, a w doniczce B dał suchy piasek i schował do piwnicy. Dlaczego to doświadczenie jest BŁĘDNE?',
    opts: [
      'Bo zmienił dwa czynniki naraz (glebę i światło), więc nie wiadomo, co wpłynęło na wynik.',
      'Bo fasola nie lubi słońca.',
      'Bo w doniczkach nie wolno siać nasion.',
      'Doświadczenie jest idealne.'
    ],
    a: 0,
    why: 'Złota zasada doświadczenia mówi: zmieniamy tylko jeden czynnik. Zmiana gleby i światła jednocześnie uniemożliwia wyciągnięcie rzetelnego wniosku.',
    src: '76'
  },
  {
    id: 'z5_t5_3', set: 4, topic: 4, skill: 'O03', type: 'choice',
    q: 'Dlaczego deszczówka wsiąkająca w glebę jest oczyszczana przed trafieniem do wód podziemnych?',
    opts: [
      'Ponieważ gleba działa jak naturalny filtr zatrzymujący zanieczyszczenia w swoich warstwach.',
      'Ponieważ w glebie znajdują się chemiczne filtry ze sklepu.',
      'Deszczówka nigdy nie wsiąka w glebę.',
      'Woda w glebie staje się bardziej brudna i trująca.'
    ],
    a: 0,
    why: 'Warstwy gleby, piasku i próchnicy działają jak gigantyczny, naturalny filtr zatrzymujący pyły i zanieczyszczenia.',
    src: '72, 78'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z4_t6_1', set: 4, topic: 5, skill: 'P03', type: 'choice',
    q: 'Roślina łąkowa ma charakterystyczne liście złożone z trzech mniejszych listków z jasnym łukowatym paskiem oraz białe kuliste kwiatostany. Co to za roślina?',
    img: 'assets/img/roslina_koniczyna.jpg',
    opts: [
      'Babka lancetowata',
      'Koniczyna biała',
      'Śnieguliczka biała',
      'Róża dzika'
    ],
    a: 1,
    why: 'Trójlistkowe liście i białe główki to cechy koniczyny białej powszechnej na trawnikach.',
    src: '82'
  },
  {
    id: 'z4_t6_2', set: 4, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak jest cały czarny z metalicznym połyskiem, a u dorosłych osobników nasada masywnego dzioba jest jasna i pozbawiona piór. Jaki to ptak?',
    img: 'assets/img/ptak_gawron.jpg',
    opts: [
      'Kos (samiec)',
      'Gawron',
      'Kawka',
      'Szpak'
    ],
    a: 1,
    why: 'Dorosły gawron ma jasną, nagą skórę wokół nasady dzioba, co odróżnia go od innych czarnych ptaków.',
    src: '83'
  },
  {
    id: 'z4_t6_3', set: 4, topic: 5, skill: 'P06', type: 'choice',
    q: 'W ogrodzie pojawił się kopiec świeżej, pulchnej ziemi. Czyj to ślad?',
    opts: [
      'Latającego dzięcioła',
      'Kreta drążącego podziemne korytarze',
      'Pająka kątnika domowego',
      'Biedronki siedmiokropki'
    ],
    a: 1,
    why: 'Kopce ziemne (kretowiska) są efektem drążenia korytarzy łowieckich przez kreta.',
    src: '70, 81'
  },

  // ==========================================
  // ZESTAW 5 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z5_t1_1', set: 5, topic: 0, skill: 'K01', type: 'order',
    q: 'Ułóż definicję krajobrazu z gotowych klocków słownych:',
    items: [
      'Krajobraz to',
      'wygląd określonego obszaru Ziemi,',
      'obejmujący przyrodę',
      'oraz wytwory rąk człowieka.'
    ],
    correctOrder: [0, 1, 2, 3],
    why: 'Krajobraz to całościowy wygląd fragmentu powierzchni Ziemi łączący przyrodę i obiekty ludzkie.',
    src: '54'
  },
  {
    id: 'z5_t1_2', set: 5, topic: 0, skill: 'K04', type: 'choice',
    q: 'Porównując natężenie ruchu drogowego w dużym mieście i na wsi, co jest prawdą?',
    opts: [
      'W mieście ruch jest zazwyczaj znacznie większy, ulice są szersze i kursuje komunikacja miejska.',
      'Na wsi jest więcej sygnalizacji świetlnych i linii metra niż w Warszawie.',
      'W miastach w ogóle nie ma samochodów.',
      'Ruch na wsi i w mieście jest dokładnie taki sam.'
    ],
    a: 0,
    why: 'Krajobraz miejski charakteryzuje się intensywnym ruchem ulicznym i rozbudowaną infrastrukturą transportową.',
    src: '56–57'
  },
  {
    id: 'z5_t1_3', set: 5, topic: 0, skill: 'K06', type: 'choice',
    q: 'Dlaczego dawniej osady i miasta najchętniej budowano w dolinach rzek?',
    opts: [
      'Ponieważ rzeka zapewniała wodę do picia, ryby oraz wygodny szlak transportowy.',
      'Ponieważ rzeka chroniła przed deszczem.',
      'Ponieważ w rzece łatwiej było budować wieżowce.',
      'To był czysty przypadek.'
    ],
    a: 0,
    why: 'Woda to źródło życia i szlak handlowy — to doskonały przykład wpływu przyrody na osadnictwo człowieka.',
    src: '58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z5_t2_1', set: 5, topic: 1, skill: 'T03', type: 'choice',
    q: 'Wzniesienie ma wysokość względną 650 metrów. Nazywamy je:',
    opts: [
      'Pagórkiem',
      'Wzgórzem',
      'Górą',
      'Kotliną'
    ],
    a: 2,
    why: 'Wzniesienia o wysokości względnej przekraczającej 300 metrów to góry.',
    src: '61'
  },
  {
    id: 'z5_t2_2', set: 5, topic: 1, skill: 'T04', type: 'choice',
    q: 'Stok wzniesienia może być łagodny lub stromy. Na którym stoku łatwiej i bezpieczniej wybudować drogę dla samochodów?',
    opts: [
      'Na stoku bardzo stromym, pionowym jak ściana.',
      'Na stoku łagodnym o niewielkim nachyleniu.',
      'Nachylenie stoku nie ma żadnego znaczenia dla budowy dróg.',
      'Drogi buduje się wyłącznie w powietrzu.'
    ],
    a: 1,
    why: 'Łagodny stok pozwala na bezpieczne poprowadzenie drogi bez ryzyka osuwisk i konieczności ostrych serpentyn.',
    src: '61, 89'
  },
  {
    id: 'z5_t2_3', set: 5, topic: 1, skill: 'T02', type: 'choice',
    q: 'Do jakiej grupy form terenu zaliczamy kotlinę?',
    opts: [
      'Do form wypukłych',
      'Do form wklęsłych',
      'Do form płaskich',
      'Do form podziemnych'
    ],
    a: 1,
    why: 'Kotlina to forma wklęsła — obniżenie otoczone wzniesieniami ze wszystkich stron.',
    src: '59–60'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z5_t3_1', set: 5, topic: 2, skill: 'S02', type: 'choice',
    q: 'Co przyrodnik bada u skały za pomocą wody?',
    opts: [
      'Czy skała potrafi pływać po powierzchni.',
      'Czy skała nasiąka wodą, rozmywa się lub staje się plastyczna.',
      'Jaki dźwięk wydaje skała w temperaturze 100 stopni.',
      'Czy woda zamienia się w sok owocowy.'
    ],
    a: 1,
    why: 'Odporność na działanie wody określa, czy skała zachowuje swoją spójność, czy mięknie (jak glina) lub przepuszcza wodę (jak piasek).',
    src: '64'
  },
  {
    id: 'z5_t3_2', set: 5, topic: 2, skill: 'S05', type: 'choice',
    q: 'Dlaczego granit jest tak chętnie wykorzystywany do budowy schodów zewnętrznych, pomników i krawężników?',
    opts: [
      'Bo jest miękki i rozpuszcza się w deszczu.',
      'Bo jest skałą litą, niezwykle twardą, odporną na ścieranie, mróz i wodę.',
      'Bo jest najlżejszą skałą na Ziemi i unosi się na wietrze.',
      'Bo można go ugnieść w dłoniach jak plastelinę.'
    ],
    a: 1,
    why: 'Twardość, odporność na wodę i mróz czynią granit idealnym materiałem budowlanym na zewnątrz budynków.',
    src: '66, 68'
  },
  {
    id: 'z5_t3_3', set: 5, topic: 2, skill: 'S01', type: 'choice',
    q: 'Na spacerze znaleziono kawałek czerwonej cegły i kawałek betonu. Czy są to skały w rozumieniu przyrody?',
    opts: [
      'Tak, to skały lite.',
      'Nie, cegła i beton to wytwory człowieka, a nie naturalne skały.',
      'Tylko beton jest skałą, a cegła nie.',
      'Tak, powstały przed milionami lat w ziemi.'
    ],
    a: 1,
    why: 'Podręcznik na s. 67 wyraźnie ostrzega: cegły, pustaki i beton to sztuczne wytwory rąk człowieka, a nie naturalne skały!',
    src: '67'
  },

  // T4: Co kryje gleba?
  {
    id: 'z5_t4_1', set: 5, topic: 3, skill: 'G02', type: 'choice',
    q: 'Jaką rolę w powstawaniu gleby odgrywają mchy i porosty (organizmy pionierskie)?',
    opts: [
      'Zasiedlają nagie okruchy skał i wydzielając kwasy, przyspieszają ich dalsze kruszenie.',
      'Podgrzewają skałę do tysiąca stopni.',
      'Zjadają dżdżownice.',
      'Nie odgrywają żadnej roli.'
    ],
    a: 0,
    why: 'Mchy i porosty potrafią żyć na surowej skale, kruszą ją i po obumarciu dają pierwsze cząstki próchnicy.',
    src: '69'
  },
  {
    id: 'z5_t4_2', set: 5, topic: 3, skill: 'G06', type: 'choice',
    q: 'Co oznacza pojęcie „żyzność gleby”?',
    opts: [
      'Ilość złota ukrytego w ziemi.',
      'Zdolność gleby do zaopatrywania roślin w wodę, powietrze i składniki pokarmowe.',
      'Twardość powierzchni gleby podczas suszy.',
      'Stopień zanieczyszczenia gleby przez śmieci.'
    ],
    a: 1,
    why: 'Żyzność to kluczowa właściwość gleby określająca, jak dobrze rosną na niej rośliny.',
    src: '71'
  },
  {
    id: 'z5_t4_3', set: 5, topic: 3, skill: 'G04', type: 'order',
    q: 'Ułóż łańcuch powstawania próchnicy w kolejności logicznej:',
    items: [
      'Opadanie liści i obumieranie roślin na powierzchnię ziemi',
      'Rozdrabnianie i trawienie szczątków przez dżdżownice',
      'Dalszy rozkład przez bakterie i grzyby glebowe',
      'Powstanie ciemnej, żyznej próchnicy w glebie'
    ],
    correctOrder: [0, 1, 2, 3],
    why: 'Szczątki roślin są zjadane przez dżdżownice, rozkładane przez mikroorganizmy i przekształcane w próchnicę.',
    src: '69–71'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z5_t5_1', set: 5, topic: 4, skill: 'O01', type: 'choice',
    q: 'Gleba z lasu sosnowego jest bardzo jasna, sypka, a po podlaniu woda od razu ucieka w głąb. Jaki składnik w niej dominuje?',
    opts: [
      'Glina',
      'Piasek',
      'Próchnica',
      'Węgiel'
    ],
    a: 1,
    why: 'Piasek składa się z luźnych ziaren kwarcu, które nie trzymają wody i tworzą ubogie, jasne gleby piaszczyste.',
    src: '74–75'
  },
  {
    id: 'z5_t5_2', set: 5, topic: 4, skill: 'O02', type: 'choice',
    q: 'W doświadczeniu przyrodniczym próbę, w której zmieniamy badany czynnik, nazywamy:',
    opts: [
      'Próbą badawczą',
      'Próbą kontrolną',
      'Próbą zepsutą',
      'Ślepym losem'
    ],
    a: 0,
    why: 'Próba badawcza to ta, w której zmieniamy badany warunek. Próba kontrolna służy do porównania (warunki standardowe).',
    src: '76'
  },
  {
    id: 'z5_t5_3', set: 5, topic: 4, skill: 'O03', type: 'choice',
    q: 'Dlaczego woda w glebie nie jest czystą wodą destylowaną, lecz „roztworem glebowym”?',
    opts: [
      'Ponieważ są w niej rozpuszczone sole mineralne pobierane przez korzenie roślin.',
      'Ponieważ ktoś wlał do gleby herbatę.',
      'Bo w glebie nie ma żadnej wody.',
      'Bo woda w glebie jest słodka jak syrop.'
    ],
    a: 0,
    why: 'Woda w glebie rozpuszcza minerały, dzięki czemu rośliny mogą wchłaniać niezbędne pierwiastki pokarmowe.',
    src: '72, 77'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z5_t6_1', set: 5, topic: 5, skill: 'P03', type: 'choice',
    q: 'Roślina zielna ma liście o podłużnym, lancetowatym kształcie z wyraźnymi nerwami, zebrane w rozetę przy ziemi, oraz wąski kłos. Co to za roślina?',
    img: 'assets/img/roslina_babka.jpg',
    opts: [
      'Lipa drobnolistna',
      'Babka lancetowata',
      'Koniczyna biała',
      'Brzoza brodawkowata'
    ],
    a: 1,
    why: 'To babka lancetowata — jej podłużne liście od wieków stosowano jako naturalny opatrunek na drobne skaleczenia.',
    src: '82'
  },
  {
    id: 'z5_t6_2', set: 5, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak wielkości drozda ma smoliście czarne upierzenie, a jego dziób i obwódka wokół oka są jaskrawożółte. Co to za ptak?',
    img: 'assets/img/ptak_kos.jpg',
    opts: [
      'Samiec kosa',
      'Wrona siwa',
      'Kawka',
      'Gawron'
    ],
    a: 0,
    why: 'To samiec kosa. Samica kosa jest brunatna, ale samiec wyróżnia się czarnym piórem i żółtym dziobem.',
    src: '83'
  },
  {
    id: 'z5_t6_3', set: 5, topic: 5, skill: 'P05', type: 'choice',
    q: 'Ile czarnych kropek ma na swoich czerwonych pokrywach skrzydeł nasza rodzima biedronka siedmiokropka?',
    img: 'assets/img/owad_biedronka.jpg',
    opts: [
      'Zawsze losową liczbę od 2 do 20',
      'Dokładnie 7 kropek (po 3 na każdej pokrywie i 1 wspólna u góry)',
      'Tylko 2 kropki',
      'Nie ma żadnych kropek'
    ],
    a: 1,
    why: 'Biedronka siedmiokropka ma stały układ dokładnie 7 kropek: 3 + 3 + 1.',
    src: '84'
  },

  // ==========================================
  // ZESTAW 6 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z6_t1_1', set: 6, topic: 0, skill: 'K02', type: 'bin_sort',
    q: 'Rozdziel elementy do dwóch grup: Przyroda vs Wytwory człowieka:',
    bins: ['Elementy przyrody', 'Wytwory człowieka'],
    items: [
      { text: 'Chmura na niebie', bin: 0 },
      { text: 'Betonowy wieżowiec', bin: 1 },
      { text: 'Dzik w lesie', bin: 0 },
      { text: 'Asfaltowa szosa', bin: 1 },
      { text: 'Piasek rzeczny', bin: 0 },
      { text: 'Kombajn rolniczy', bin: 1 }
    ],
    why: 'Chmura, dzik i piasek to elementy natury. Wieżowiec, szosa i kombajn powstały dzięki pracy człowieka.',
    src: '54'
  },
  {
    id: 'z6_t1_2', set: 6, topic: 0, skill: 'K03', type: 'choice',
    q: 'Czy obecność dużej ilości drzew w sadzie jabłoniowym oznacza, że jest to krajobraz naturalny?',
    opts: [
      'Tak, każde skupisko drzew to krajobraz naturalny.',
      'Nie, sad został posadzony przez człowieka, drzewa są pielęgnowane i przycinane — to krajobraz przekształcony.',
      'Sad jabłoniowy to krajobraz nieożywiony.',
      'Tylko jeśli rosną tam dzikie jabłka.'
    ],
    a: 1,
    why: 'Ilość zieleni nie decyduje o naturalności: sad to element rolnictwa stworzony i utrzymywany przez człowieka.',
    src: '55, 57'
  },
  {
    id: 'z6_t1_3', set: 6, topic: 0, skill: 'K06', type: 'match',
    q: 'Połącz działanie człowieka z jego wpływem na krajobraz:',
    pairs: [
      { left: 'Założenie parku krajobrazowego', right: 'Ochrona cennych roślin i zwierząt' },
      { left: 'Budowa fabryki i magazynów', right: 'Wzrost hałasu i zabetonowanie powierzchni' },
      { left: 'Zasypanie rowów melioracyjnych', right: 'Zatrzymanie wody w glebie na łąkach' }
    ],
    why: 'Działania ludzi mogą zarówno niszczyć krajobraz, jak i chronić jego naturalne walory.',
    src: '58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z6_t2_1', set: 6, topic: 1, skill: 'T02', type: 'choice',
    q: 'Która z form terenu jest formą wypukłą?',
    opts: [
      'Dolina rzeczna',
      'Pagórek',
      'Kotlina',
      'Równina'
    ],
    a: 1,
    why: 'Pagórek wznosi się ponad otoczenie, jest więc formą wypukłą.',
    src: '59, 61'
  },
  {
    id: 'z6_t2_2', set: 6, topic: 1, skill: 'T05', type: 'choice',
    q: 'Rzeka Wisła płynie w podłużnym obniżeniu terenu, które sama wyżłobiła. Jak nazywa się to obniżenie?',
    opts: [
      'Dolina rzeczna',
      'Kotlina górska',
      'Wzgórze',
      'Podnóże'
    ],
    a: 0,
    why: 'Rzeki płyną dnami dolin, które żłobią płynącą wodą przez tysiące lat.',
    src: '60'
  },
  {
    id: 'z6_t2_3', set: 6, topic: 1, skill: 'T03', type: 'choice',
    q: 'Wzniesienie ma 220 m wysokości względnej. Jest to:',
    opts: [
      'Pagórek',
      'Wzgórze',
      'Góra',
      'Dolina'
    ],
    a: 1,
    why: 'Przedział od 50 do 300 m wysokości względnej to wzgórze.',
    src: '61'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z6_t3_1', set: 6, topic: 2, skill: 'S04', type: 'choice',
    q: 'Skała zwięzła zbudowana z bardzo drobnego, żółtawego pyłu, z którego woda łatwo wycina głębokie wąwozy, to:',
    opts: [
      'Less',
      'Wapień',
      'Granit',
      'Węgiel'
    ],
    a: 0,
    why: 'Less to skała zwięzła ze zwartego pyłu mineralnego, podatna na powstawanie wąwozów lessowych.',
    src: '65'
  },
  {
    id: 'z6_t3_2', set: 6, topic: 2, skill: 'S06', type: 'match',
    q: 'Dopasuj produkt codziennego użytku do skały, z której powstał:',
    pairs: [
      { left: 'Dachówka ceramiczna na dachu domu', right: 'Glina' },
      { left: 'Szklana butelka na sok', right: 'Piasek kwarcowy' },
      { left: 'Kreda do pisania na szkolnej tablicy', right: 'Wapień' }
    ],
    why: 'Ceramika powstaje z gliny, szkło z piasku, a kreda to odmiana skały wapiennej.',
    src: '68'
  },
  {
    id: 'z6_t3_3', set: 6, topic: 2, skill: 'S03', type: 'choice',
    q: 'Czym charakteryzują się skały lite w przeciwieństwie do zwięzłych i luźnych?',
    opts: [
      'Można je łatwo rozetrzeć w palcach na pył.',
      'Są silnie zespolone, twarde, nie kruszą się w dłoniach ani nie miękną w wodzie.',
      'Są zawsze całkowicie płynne jak woda.',
      'Składają się wyłącznie ze szczątków owadów.'
    ],
    a: 1,
    why: 'Skały lite (np. granit, wapień) mają minerały silnie połączone i nie dają się rozkruszyć w dłoniach.',
    src: '66'
  },

  // T4: Co kryje gleba?
  {
    id: 'z6_t4_1', set: 6, topic: 3, skill: 'G01', type: 'choice',
    q: 'Gdzie na kuli ziemskiej występuje gleba?',
    opts: [
      'Głęboko we wnętrzu Ziemi, w pobliżu jądra.',
      'Wyłącznie na dnie najgłębszych oceanów.',
      'Na lądach, jako wierzchnia warstwa na powierzchni Ziemi.',
      'W chmurach na niebie.'
    ],
    a: 2,
    why: 'Książka precyzuje: gleba to cienka warstwa na powierzchni Ziemi umożliwiająca wzrost roślin.',
    src: '69'
  },
  {
    id: 'z6_t4_2', set: 6, topic: 3, skill: 'G07', type: 'choice',
    q: 'Co stałoby się, gdyby z lądów zniknęła cała gleba?',
    opts: [
      'Ludzie mieliby więcej miejsca na asfaltowe parkingi i nic by się nie stało.',
      'Rośliny lądowe nie miałyby podłoża i pokarmu, co doprowadziłoby do wyginięcia zwierząt i głodu ludzi.',
      'Zwierzęta zaczęłyby latać w kosmosie.',
      'Ziemia zamieniłaby się w wielkie jezioro.'
    ],
    a: 1,
    why: 'Gleba to podstawa życia na lądzie — bez niej nie ma upraw, lasów ani pokarmu.',
    src: '72'
  },
  {
    id: 'z6_t4_3', set: 6, topic: 3, skill: 'G03', type: 'choice',
    q: 'Który ze składników gleby ma kluczowe znaczenie dla oddychania korzeni roślin i zwierząt glebowych?',
    opts: [
      'Powietrze glebowe',
      'Lita skała',
      'Plastik',
      'Szkło'
    ],
    a: 0,
    why: 'Powietrze w porach glebowych dostarcza tlen niezbędny do procesów oddechowych korzeni i organizmów.',
    src: '70, 77'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z6_t5_1', set: 6, topic: 4, skill: 'O02', type: 'choice',
    q: 'Do czego w doświadczeniu służy tzw. „próba kontrolna”?',
    opts: [
      'Do wyrzucenia do kosza na śmieci.',
      'Do porównania z próbą badawczą, aby upewnić się, co naprawdę spowodowało zmianę.',
      'Do podlewania sokiem malinowym.',
      'Próba kontrolna nie ma żadnego znaczenia.'
    ],
    a: 1,
    why: 'Próba kontrolna pokazuje, co dzieje się w standardowych warunkach, umożliwiając obiektywne porównanie.',
    src: '76'
  },
  {
    id: 'z6_t5_2', set: 6, topic: 4, skill: 'O03', type: 'choice',
    q: 'Podczas upalnego lata ziemia w ogrodzie spękała na głębokie szczeliny. Czego zabrakło w tej glebie?',
    opts: [
      'Powietrza',
      'Wody (wilgoci)',
      'Kamieni',
      'Cienia'
    ],
    a: 1,
    why: 'Brak deszczu powoduje wysychanie gleby, utratę wody i pękanie wierzchniej warstwy.',
    src: '77–78'
  },
  {
    id: 'z6_t5_3', set: 6, topic: 4, skill: 'O01', type: 'choice',
    q: 'Która gleba po wyschnięciu tworzy twarde jak kamień bryły, a po zmoczeniu klei się do butów?',
    opts: [
      'Gleba gliniasta',
      'Czysty suchy piasek',
      'Puszysta ziemia z próchnicą',
      'Żwir rzeczny'
    ],
    a: 0,
    why: 'Drobne cząstki gliny silnie wiążą wodę — mokra glina jest lepka, a sucha twardnieje w bryły.',
    src: '74–75'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z6_t6_1', set: 6, topic: 5, skill: 'P03', type: 'choice',
    q: 'Krzew ma gałązki pokryte kolcami, bladoróżowe kwiaty wiosną i ciemnoczerwone owoce bogate w witaminę C jesienią. Co to za roślina?',
    img: 'assets/img/krzew_roza.jpg',
    opts: [
      'Lipa drobnolistna',
      'Róża dzika',
      'Śnieguliczka biała',
      'Brzoza brodawkowata'
    ],
    a: 1,
    why: 'Dzika róża ma kolce i czerwone owoce szupinkowe, z których parzy się witaminową herbatkę.',
    src: '82'
  },
  {
    id: 'z6_t6_2', set: 6, topic: 5, skill: 'P04', type: 'choice',
    q: 'Ptak ma ciemne pióra mieniące się metalicznie na zielono i fioletowo, gęsto nakrapiane jasnymi perełkami, oraz krótki ogon. Jaki to ptak?',
    img: 'assets/img/ptak_szpak.jpg',
    opts: [
      'Szpak',
      'Kos',
      'Kawka',
      'Sroka'
    ],
    a: 0,
    why: 'Szpak słynie z nakrapianego upierzenia o metalicznym połysku i krótkiego ogonka.',
    src: '83'
  },
  {
    id: 'z6_t6_3', set: 6, topic: 5, skill: 'P01', type: 'match',
    q: 'Dopasuj roślinę uprawną do produktu, który z niej otrzymujemy:',
    pairs: [
      { left: 'Pszenica', right: 'Mąka na chleb i bułki' },
      { left: 'Len', right: 'Naturalne tkaniny na ubrania' },
      { left: 'Jabłoń', right: 'Świeże owoce i soki' }
    ],
    why: 'Rośliny uprawne dostarczają nam pożywienia (mąka, owoce) oraz surowców włókienniczych (len).',
    src: '79'
  },

  // ==========================================
  // ZESTAW 7 (18 zadań)
  // ==========================================
  // T1: Krajobraz
  {
    id: 'z7_t1_1', set: 7, topic: 0, skill: 'K05', type: 'choice',
    q: 'Który z opisów najlepiej przedstawia krajobraz podmiejski?',
    opts: [
      'Dziewicza dżungla bez śladów ludzi.',
      'Nowe osiedla domów jednorodzinnych, ogrody, drogi dojazdowe i centra handlowe blisko granicy miasta.',
      'Wysokie szczyty skalne pokryte wiecznym śniegiem.',
      'Pustynia piaszczysta z wydmami.'
    ],
    a: 1,
    why: 'Krajobraz strefy podmiejskiej łączy cechy zabudowy mieszkaniowej z dawnymi terenami rolniczymi.',
    src: '56–58'
  },
  {
    id: 'z7_t1_2', set: 7, topic: 0, skill: 'K02', type: 'choice',
    q: 'Który z elementów krajobrazu należy do przyrody OŻYWIONEJ?',
    opts: [
      'Woda w stawie',
      'Grzyb borowik w lesie',
      'Drewniany pomost wędkarski',
      'Promienie słoneczne'
    ],
    a: 1,
    why: 'Grzyby — podobnie jak rośliny i zwierzęta — to żywe organizmy wykonujące czynności życiowe.',
    src: '54'
  },
  {
    id: 'z7_t1_3', set: 7, topic: 0, skill: 'K06', type: 'choice',
    q: 'Na rzece wybudowano zaporę i elektrownię wodną. Jaki to ma wpływ na krajobraz?',
    opts: [
      'Powstał wielki zbiornik wodny, a człowiek przekształcił naturalną rzekę w krajobraz techniczny.',
      'Rzeka natychmiast zamarzła w lód.',
      'Nie zmieniło się absolutnie nic.',
      'Rzeka popłynęła pod górę do nieba.'
    ],
    a: 0,
    why: 'Budowa zapory to głęboka zmiana krajobrazu naturalnego w przekształcony (powstaje jezioro zaporowe).',
    src: '55, 58'
  },

  // T2: Ukształtowanie terenu
  {
    id: 'z7_t2_1', set: 7, topic: 1, skill: 'T04', type: 'choice',
    q: 'Dokończ zdanie: Stok wzniesienia to...',
    opts: [
      'najwyżej położony czubek góry.',
      'nachylona powierzchnia między szczytem a podnóżem.',
      'płaski teren wokół góry.',
      'głęboka jaskinia pod ziemią.'
    ],
    a: 1,
    why: 'Stok (zbocze) łączy podnóże ze szczytem.',
    src: '61'
  },
  {
    id: 'z7_t2_2', set: 7, topic: 1, skill: 'T02', type: 'match',
    q: 'Dopasuj formę terenu do jej kategorii:',
    pairs: [
      { left: 'Wzgórze', right: 'Forma wypukła' },
      { left: 'Dolina', right: 'Forma wklęsła' },
      { left: 'Równina', right: 'Forma płaska' }
    ],
    why: 'Wzgórze wystaje (wypukła), dolina jest zagłębiona (wklęsła), a równina nie ma nierówności (płaska).',
    src: '59–60'
  },
  {
    id: 'z7_t2_3', set: 7, topic: 1, skill: 'T03', type: 'choice',
    q: 'Jaką wysokość musi mieć wzniesienie mierzone od podnóża, aby nazywać je górą?',
    opts: [
      'Dokładnie 10 metrów',
      'Powyżej 300 metrów',
      'Maksymalnie 50 metrów',
      'Góra musi mieć co najmniej milion metrów'
    ],
    a: 1,
    why: 'Góra to forma terenu o wysokości względnej powyżej 300 metrów od podnóża.',
    src: '61'
  },

  // T3: Rozpoznaję skały
  {
    id: 'z7_t3_1', set: 7, topic: 2, skill: 'S05', type: 'choice',
    q: 'W której skale litej najwyraźniej widać gołym okiem różnokolorowe ziarna różnych minerałów?',
    opts: [
      'W węglu kamiennym',
      'W wapieniu',
      'W granicie',
      'W gładkim szkle'
    ],
    a: 2,
    why: 'Dokładnie takie pytanie zadaje podręcznik na s. 66: różnokolorowe ziarna minerałów widać w granicie!',
    src: '66'
  },
  {
    id: 'z7_t3_2', set: 7, topic: 2, skill: 'S02', type: 'choice',
    q: 'Jakie cztery cechy skał badamy w szkolnym laboratorium przyrodniczym?',
    opts: [
      'Cenę, wagę, zapach i smak',
      'Barwę, spójność, twardość i odporność na działanie wody',
      'Długość, szerokość, datę urodzenia i imię',
      'Kolor oczu, prędkość biegu i głośność'
    ],
    a: 1,
    why: 'Cztery cechy skał z podręcznika (s. 64) to: barwa, spójność, twardość i odporność na działanie wody.',
    src: '64'
  },
  {
    id: 'z7_t3_3', set: 7, topic: 2, skill: 'S06', type: 'choice',
    q: 'Do czego człowiek wykorzystuje węgiel kamienny?',
    opts: [
      'Do pieczenia chleba zamiast mąki.',
      'Jako paliwo opałowe dające ciepło w domach i energię w elektrowniach.',
      'Do robienia przezroczystych szyb w oknach.',
      'Do nawożenia trawnika.'
    ],
    a: 1,
    why: 'Węgiel kamienny jest skałą palną służącą jako źródło energii cieplnej i elektrycznej.',
    src: '66, 68'
  },

  // T4: Co kryje gleba?
  {
    id: 'z7_t4_1', set: 7, topic: 3, skill: 'G07', type: 'choice',
    q: 'Dlaczego nie wolno wylewać do gleby starych olejów silnikowych, farb i chemikaliów?',
    opts: [
      'Bo chemikalia zniszczą żywe organizmy glebowe i zatrują wody gruntowe, które pijemy.',
      'Bo gleba zacznie świecić w nocy.',
      'Bo trawa urośnie zbyt szybko.',
      'Chemikalia są zdrowe dla gleby.'
    ],
    a: 0,
    why: 'Gleba filtruje wodę, ale silne trucizny zabijają pożyteczne bakterie i przedostają się do studni z wodą pitną.',
    src: '72'
  },
  {
    id: 'z7_t4_2', set: 7, topic: 3, skill: 'G05', type: 'choice',
    q: 'Dlaczego poziom próchniczny w profilu glebowym ma wyraźnie ciemny (często prawie czarny) kolor?',
    opts: [
      'Bo ktoś pomalował go czarną farbą.',
      'Z powodu dużej zawartości próchnicy powstałej z rozłożonych szczątków organicznych.',
      'Bo pod ziemią nigdy nie świeci słońce.',
      'Bo w glebie jest tylko węgiel kamienny.'
    ],
    a: 1,
    why: 'Próchnica ma naturalnie bardzo ciemne zabarwienie — im jej więcej, tym gleba jest ciemniejsza i bardziej żyzna.',
    src: '71'
  },
  {
    id: 'z7_t4_3', set: 7, topic: 3, skill: 'G02', type: 'choice',
    q: 'Co rozpoczyna długi proces powstawania gleby na litych skałach?',
    opts: [
      'Zasadzenie jabłoni przez rolnika.',
      'Wietrzenie skał pod wpływem wahań temperatury, zamarzającej wody i wiatru.',
      'Wybudowanie autostrady.',
      'Wykopanie głębokiej studni.'
    ],
    a: 1,
    why: 'Pierwszym etapem jest wietrzenie, które kruszy lity głaz na drobniejsze ziarna i okruchy.',
    src: '69'
  },

  // T5: Gleba w mojej okolicy
  {
    id: 'z7_t5_1', set: 7, topic: 4, skill: 'O03', type: 'choice',
    q: 'Doświadczenie: suchą grudkę gleby wrzucono do wody i zaobserwowano pęcherzyki. Co to za gaz?',
    opts: [
      'Dwutlenek węgla z fabryki',
      'Powietrze glebowe z tlenem',
      'Czysty hel balonowy',
      'Gaz trujący'
    ],
    a: 1,
    why: 'Uciekające bąbelki to zwykłe powietrze wypełniające szczeliny glebowe.',
    src: '77'
  },
  {
    id: 'z7_t5_2', set: 7, topic: 4, skill: 'O02', type: 'choice',
    q: 'Uczeń badał dwie próby rzeżuchy. Wyniki zapisał w tabeli każdego dnia o tej samej porze. Dlaczego systematyczność jest ważna?',
    opts: [
      'Pozwala na dokładne śledzenie tempa wzrostu i rzetelne porównanie obu roślin.',
      'Żeby szybciej skończyć lekcje.',
      'Dla zabawy liczbami.',
      'Nie ma to znaczenia.'
    ],
    a: 0,
    why: 'Dokładne, regularne notatki to podstawa pracy każdego młodego naukowca.',
    src: '76'
  },
  {
    id: 'z7_t5_3', set: 7, topic: 4, skill: 'O01', type: 'choice',
    q: 'Jakie właściwości ma gleba z dużą zawartością próchnicy?',
    opts: [
      'Jest jasna, sypka i nie rosną na niej żadne rośliny.',
      'Jest ciemna, ma strukturę gruzełkowatą, dobrze zatrzymuje wilgoć i składniki pokarmowe.',
      'Jest twarda jak lity granit.',
      'Pieni się po kontakcie z wodą.'
    ],
    a: 1,
    why: 'Próchnica zapewnia optymalne warunki wodne, powietrzne i pokarmowe dla roślin.',
    src: '74–75'
  },

  // T6: Rośliny i zwierzęta
  {
    id: 'z7_t6_1', set: 7, topic: 5, skill: 'P02', type: 'match',
    q: 'Dopasuj zwierzę hodowlane do korzyści, jaką daje człowiekowi:',
    pairs: [
      { left: 'Krowa mleczna', right: 'Mleko na sery, masło i jogurty' },
      { left: 'Owca', right: 'Ciepła wełna na swetry i koce' },
      { left: 'Pszczoła miodna', right: 'Słodki miód i zapylanie kwiatów' }
    ],
    why: 'Zwierzęta gospodarskie od tysiącleci dostarczają pożywienia i surowców.',
    src: '80–81'
  },
  {
    id: 'z7_t6_2', set: 7, topic: 5, skill: 'P06', type: 'choice',
    q: 'W ciemnym kącie piwnicy za szafą wisi gęsta, lejkowata sieć z pająkiem w środku. Czyj to ślad?',
    opts: [
      'Kątnika domowego',
      'Biedronki siedmiokropki',
      'Rybika cukrowego',
      'Kreta'
    ],
    a: 0,
    why: 'Kątnik domowy buduje charakterystyczne płaskie lub lejkowate sieci w zacisznych zakamarkach budynków.',
    src: '81'
  },
  {
    id: 'z7_t6_3', set: 7, topic: 5, skill: 'P07', type: 'choice',
    q: 'Co ludzie powinni robić, aby dzikie lisy i dziki nie wchodziły na osiedla mieszkaniowe?',
    opts: [
      'Zostawiać otwarte worki ze śmieciami na chodniku.',
      'Szczelnie zamykać wiaty śmietnikowe i nie wyrzucać resztek jedzenia pod blokami.',
      'Karmić dziki kanapkami z ręki.',
      'Wypuszczać na ulice wilki.'
    ],
    a: 1,
    why: 'Brak łatwo dostępnego jedzenia to najskuteczniejszy sposób na to, by dzikie zwierzęta pozostały w lasach.',
    src: '81'
  }
];
