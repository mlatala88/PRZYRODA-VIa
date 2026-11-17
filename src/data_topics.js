// Kompletne dane modułu NAUKA dla Działu II: "Moja okolica"
// Zgodne w 100% z podręcznikiem Nowej Ery "Odkrywam przyrodę 4", s. 53-90

module.exports = [
  {
    id: 't1',
    title: 'Krajobraz mojej okolicy',
    pages: '54–58',
    icon: '🏞️',
    color: '#2e7d32',
    intro: 'Dowiedz się, czym różni się krajobraz od przyrody, jak odróżnić miasto od wsi i jakie zależności łączą człowieka ze środowiskiem.',
    steps: [
      {
        title: 'Czym jest krajobraz?',
        badge: 'Podstawowe pojęcie',
        text: '<strong>Krajobraz</strong> to wygląd określonego obszaru Ziemi, który możemy objąć wzrokiem. W krajobrazie widzimy zarówno elementy przyrody (drzewa, rzeki, skały), jak i wszystko to, co zbudował człowiek (domy, mosty, drogi).',
        subtext: 'Pamiętaj: Przyroda to tylko część krajobrazu! Samochód czy wieżowiec należą do krajobrazu, ale NIE są przyrodą.',
        svgType: 'landscape_intro',
        discovery: [
          { label: '🌿 Przyroda ożywiona', desc: 'Rośliny, zwierzęta, grzyby — organizmy wykonujące czynności życiowe.' },
          { label: '🪨 Przyroda nieożywiona', desc: 'Skały, piasek, woda, powietrze, słońce — naturalne składniki bez życia.' },
          { label: '🏠 Wytwory człowieka', desc: 'Budynki, asfaltowe drogi, latarnie, mosty, pola uprawne.' }
        ]
      },
      {
        title: 'Krajobraz naturalny a przekształcony',
        badge: 'Podział krajobrazów',
        text: 'W zależności od tego, jak bardzo człowiek zmienił dany teren, wyróżniamy dwa główne rodzaje krajobrazu:',
        bullets: [
          '<strong>Krajobraz naturalny:</strong> Powstał bez udziału człowieka. Nie ma w nim dróg, fabryk ani domów (np. wysokie góry, pierwotna puszcza, naturalne torfowisko). W Polsce jest go bardzo niewiele!',
          '<strong>Krajobraz przekształcony (kulturowy):</strong> Nosi wyraźne ślady działalności ludzkiej. Człowiek wyciął lasy pod pola, wybudował osiedla, fabryki i drogi.'
        ],
        svgType: 'landscape_compare',
        tip: 'Zieleń w miejskim parku nie oznacza krajobrazu naturalnego — park został zaprojektowany i posadzony przez ludzi!'
      },
      {
        title: 'Miasto a wieś — porównanie',
        badge: 'Okolice człowieka',
        text: 'W krajobrazie przekształconym najczęściej spotykamy krajobrazy wiejskie i miejskie:',
        table: [
          { feat: 'Zabudowa', city: 'Gęsta, wysokie bloki i kamienice', village: 'Luźna, domy jednorodzinne, zagrody' },
          { feat: 'Drogi i ruch', city: 'Szerokie ulice, dużo aut, tramwaje', village: 'Wąskie drogi, mniejszy ruch' },
          { feat: 'Zieleń', city: 'Parki, skwery, aleje miejskie', village: 'Pola uprawne, łąki, sady, lasy' },
          { feat: 'Zwierzęta', city: 'Gołębie, wróble, psy, koty', village: 'Krowy, kury, konie, dzikie ptaki' }
        ],
        svgType: 'city_vs_village'
      },
      {
        title: 'Jak opisać krajobraz okolicy?',
        badge: 'Plan opisu',
        text: 'Aby dobrze opisać krajobraz na lekcji przyrody, warto trzymać się 3 prostych kroków:',
        stepsList: [
          '1. <strong>Ukształtowanie terenu:</strong> Czy jest płasko (równina), czy są pagórki, wzgórza, czy strome doliny?',
          '2. <strong>Wody i roślinność:</strong> Czy płynie rzeka, jest jezioro, rośnie las, czy rozciągają się łąki?',
          '3. <strong>Ślady działalności ludzi:</strong> Jakie stoją budynki, jak biegną drogi i mosty, jak zagospodarowano ziemię?'
        ],
        svgType: 'landscape_plan'
      },
      {
        title: 'Zależności w krajobrazie',
        badge: 'Przyczyna i skutek',
        text: 'Wszystkie elementy krajobrazu wpływają na siebie nawzajem:',
        examples: [
          { cause: 'Płynąca rzeka', effect: 'Ludzie budują nad nią mosty, przystanie i osady, bo woda dawała ryby i szlak transportowy.' },
          { cause: 'Żyzna gleba', effect: 'Rolnicy zamieniają łąki na pola uprawne, powstaje krajobraz rolniczy.' },
          { cause: 'Wycięcie lasu', effect: 'Wiatr i deszcz szybciej niszczą wierzchnią warstwę gleby, a zwierzęta tracą schronienie.' }
        ],
        svgType: 'dependencies'
      }
    ]
  },
  {
    id: 't2',
    title: 'Ukształtowanie terenu w mojej okolicy',
    pages: '59–63',
    icon: '⛰️',
    color: '#388e3c',
    intro: 'Poznaj formy wypukłe, wklęsłe i płaskie. Dowiedz się, czym różni się góra od wzgórza i jak rozpoznać części wzniesienia.',
    steps: [
      {
        title: 'Co to jest ukształtowanie terenu?',
        badge: 'Nierówności Ziemi',
        text: 'Powierzchnia Ziemi nie jest gładka. Wszelkie wzniesienia, obniżenia oraz tereny płaskie tworzą <strong>ukształtowanie terenu</strong> (podręcznik używa określenia <em>ukształtowanie terenu</em>).',
        subtext: 'Wyróżniamy 3 główne grupy form terenu: formy wypukłe, formy wklęsłe oraz formy płaskie.',
        svgType: 'terrain_overview'
      },
      {
        title: 'Formy terenu — trzy grupy',
        badge: 'Klasyfikacja',
        cards: [
          { name: 'Formy wypukłe (wzniesienia)', desc: 'Wznoszą się ponad otaczający teren: pagórek, wzgórze, góra.' },
          { name: 'Formy wklęsłe (obniżenia)', desc: 'Zagłębienia terenu poniżej poziomu otoczenia: dolina, kotlina.' },
          { name: 'Formy płaskie', desc: 'Równiny — rozległe obszary bez wyraźnych wzniesień i obniżeń.' }
        ],
        svgType: 'terrain_types'
      },
      {
        title: 'Budowa wzniesienia',
        badge: 'Interaktywny schemat',
        text: 'Każde wzniesienie — czy to pagórek, czy wielka góra — składa się z trzech głównych części:',
        discovery: [
          { label: '🏔️ Szczyt', desc: 'Najwyższy punkt wzniesienia.' },
          { label: '📐 Stok (zbocze)', desc: 'Nachylona powierzchnia między podnóżem a szczytem. Może być łagodny (łatwo wejść) lub stromy (trudno wejść).' },
          { label: '🥾 Podnóże', desc: 'Miejsce na samym dole, w którym wzniesienie zaczyna się podnosić z otaczającego terenu.' }
        ],
        svgType: 'mountain_parts'
      },
      {
        title: 'Pagórek, wzgórze i góra',
        badge: 'Jak mierzymy wysokość?',
        text: 'Aby odróżnić pagórek od góry, mierzymy <strong>wysokość względną</strong> — czyli od podnóża do szczytu!',
        thresholds: [
          { form: 'Pagórek', height: 'do 50 m', icon: '🟢', example: 'Niewielkie wzniesienie w parku lub lesie.' },
          { form: 'Wzgórze', height: 'od 50 do 300 m', icon: '🟡', example: 'Wzniesienie, na które wejście wymaga dłuższego marszu.' },
          { form: 'Góra', height: 'powyżej 300 m', icon: '🔴', example: 'Wysokie wzniesienie o stromych stokach, np. Śnieżka, Rysy.' }
        ],
        svgType: 'height_comparison',
        warning: 'Pamiętaj: progi mierzymy od podnóża! Na sprawdzianie pojawiają się jednoznaczne liczby: 20 m (pagórek), 150 m (wzgórze), 600 m (góra).'
      },
      {
        title: 'Dolina a kotlina — formy wklęsłe',
        badge: 'Porównanie obniżeń',
        compare: [
          {
            name: 'Dolina',
            shape: 'Podłużne obniżenie terenu',
            features: 'Ma dno i stoki (zbocza). Na dnie doliny niemal zawsze płynie rzeka lub potok, który wyżłobił to obniżenie.',
            icon: '🏞️'
          },
          {
            name: 'Kotlina',
            shape: 'Zagłębienie w kształcie misy',
            features: 'Jest otoczona wzniesieniami ze wszystkich stron. Wygląda jak olbrzymia miska w terenie.',
            icon: '🥣'
          }
        ],
        svgType: 'valley_vs_basin'
      }
    ]
  },
  {
    id: 't3',
    title: 'Rozpoznaję skały',
    pages: '64–68',
    icon: '🪨',
    color: '#5d4037',
    intro: 'Odkryj tajemnice skał i minerałów. Naucz się badać twardość, spójność i zachowanie wobec wody oraz octu!',
    steps: [
      {
        title: 'Czym jest skała?',
        badge: 'Definicja książkowa',
        text: '<strong>Skała</strong> to naturalny materiał budujący powierzchnię Ziemi. Każda skała składa się z drobniejszych cząstek — <strong>minerałów</strong>.',
        subtext: 'Niektóre skały składają się tylko z jednego minerału (np. wapień), a inne z wielu różnych (np. granit składa się z kwarcu, skalenia i miki).',
        img: 'assets/img/granit_mineraly.jpg',
        imgCaption: 'Granit i budujące go minerały: jasny kwarc, różowy skaleń i czarna mika (s. 64)',
        svgType: 'rock_intro'
      },
      {
        title: '4 właściwości badane u skał',
        badge: 'Jak bada przyrodnik?',
        text: 'Gdy badamy skałę, sprawdzamy cztery kluczowe cechy:',
        features: [
          { name: '1. Barwa', desc: 'Kolor skały (np. czarny węgiel, jasny wapień, różowo-szary granit).' },
          { name: '2. Spójność', desc: 'Czy ziarna są luźne, zwięzłe (dają się rozkruszyć), czy lite (silnie zespolone)?' },
          { name: '3. Twardość', desc: 'Czy skałę da się zarysować paznokciem lub stalowym gwoździem?' },
          { name: '4. Działanie wody i kwasu', desc: 'Czy rozmywa się w wodzie? Czy po polaniu octem pieni się (reakcja wapienia)?' }
        ],
        svgType: 'rock_test_methods'
      },
      {
        title: 'Podział skał ze względu na spójność',
        badge: 'Kluczowa klasyfikacja',
        text: 'To jedno z najważniejszych zagadnień na sprawdzianie! Wyróżniamy:',
        categories: [
          {
            type: 'Skały luźne',
            desc: 'Ziarna nie są ze sobą połączone, łatwo się przesypują w dłoni.',
            examples: 'Piasek, żwir'
          },
          {
            type: 'Skały zwięzłe',
            desc: 'Ziarna są słabo połączone. Można je rozkruszyć palcami, a po zmoczeniu stają się plastyczne (lepkie).',
            examples: 'Glina, less'
          },
          {
            type: 'Skały lite',
            desc: 'Minerały są silnie połączone. Nie można ich rozkruszyć w dłoni ani rozmiękczyć wodą. Są bardzo twarde!',
            examples: 'Granit, wapień, węgiel kamienny, piaskowiec'
          }
        ],
        svgType: 'rock_cohesion'
      },
      {
        title: 'Poznajemy najważniejsze skały',
        badge: 'Karty skał (s. 65–66)',
        rockCards: [
          { name: 'Piasek', type: 'Luźna', color: 'Żółtawy, jasny', feat: 'Pojedyncze twarde ziarenka, przepuszcza wodę.', use: 'Wyrób szkła, beton, zaprawy murarskie.', img: 'assets/img/skala_piasek.jpg' },
          { name: 'Żwir', type: 'Luźna', color: 'Różnobarwny', feat: 'Zaokrąglone kamyki powyżej 2 mm, luźno zsypane.', use: 'Podkłady kolejowe i drogowe, produkcja betonu.', img: 'assets/img/skala_zwir.jpg' },
          { name: 'Glina', type: 'Zwięzła', color: 'Brunatna, rdzawa, szara', feat: 'Po zmoczeniu staje się plastyczna i nie przepuszcza wody.', use: 'Cegły, dachówki, naczynia ceramiczne.', img: 'assets/img/skala_glina.jpg' },
          { name: 'Less', type: 'Zwięzła', color: 'Żółtawy, pyłowy', feat: 'Drobny pył naniesiony przez wiatr, łatwo kruszy się w palcach.', use: 'Tworzy niezwykle żyzne gleby (czarnoziemy).', img: 'assets/img/skala_less.jpg' },
          { name: 'Granit', type: 'Lita', color: 'Szary lub różowawy', feat: 'Widać różnokolorowe ziarna kwarcu, skalenia i miki! Bardzo twardy.', use: 'Krawężniki, pomniki, blaty, schody.', img: 'assets/img/skala_granit.jpg' },
          { name: 'Wapień', type: 'Lita', color: 'Biały, kremowy, szary', feat: 'Średnio twardy. <strong>Pieni się pod wpływem octu!</strong>', use: 'Kreda do tablicy, produkcja cementu i wapna.', img: 'assets/img/skala_wapien.jpg' },
          { name: 'Piaskowiec', type: 'Lita', color: 'Żółty, beżowy, czerwony', feat: 'Zlepione ziarna piasku spojone lepiszczem mineralnym.', use: 'Kamień budowlany, rzeźby, płytki elewacyjne.', img: 'assets/img/skala_piaskowiec.jpg' },
          { name: 'Węgiel kamienny', type: 'Lita', color: 'Czarny z połyskiem', feat: 'Kruchy, pali się jasnym płomieniem dając ciepło.', use: 'Opał, paliwo w elektrowniach.', img: 'assets/img/skala_wegiel.jpg' }
        ],
        svgType: 'rock_samples'
      },
      {
        title: 'Test z octem i karta obserwacji',
        badge: 'Doświadczenie (s. 67)',
        text: 'Na stronie 67 podręcznika opisano proste doświadczenie z wykrywaniem wapienia:',
        stepsList: [
          'Gdy polejemy skałę kroplą <strong>octu</strong>, w kontakcie z <strong>wapieniem</strong> natychmiast pojawia się <strong>bąbelkująca piana</strong> (wydziela się dwutlenek węgla).',
          'Granit i węgiel nie pienią się pod wpływem octu!',
          '<strong>Ważna zasada:</strong> Cegły, pustaki i beton NIE są skałami — to wytwory człowieka!'
        ],
        svgType: 'vinegar_test'
      }
    ]
  },
  {
    id: 't4',
    title: 'Co kryje gleba?',
    pages: '69–72',
    icon: '🌱',
    color: '#6d4c41',
    intro: 'Zajrzyj w głąb Ziemi! Dowiedz się, z czego składa się gleba, jak powstaje próchnica i dlaczego dżdżownica jest najlepszym przyjacielem rolnika.',
    steps: [
      {
        title: 'Czym jest gleba?',
        badge: 'Definicja',
        text: '<strong>Gleba</strong> to wierzchnia, cienka warstwa na powierzchni Ziemi. Zapewnia roślinom wodę, powietrze oraz niezbędne do życia składniki pokarmowe.',
        subtext: 'Bez gleby rośliny nie mogłyby rosnąć na lądzie, a ludzie i zwierzęta nie mieliby pokarmu!',
        svgType: 'soil_definition'
      },
      {
        title: '4 etapy powstawania gleby',
        badge: 'Jak rodzi się gleba? (s. 69)',
        timeline: [
          { step: '1', title: 'Wietrzenie skał', desc: 'Mrozy, deszcze, wiatr i słońce kruszą litą skałę na drobne okruchy.' },
          { step: '2', title: 'Pierwsze organizmy', desc: 'Na okruchach skał osiedlają się odporne mchy i porosty, które dalej rozkruszają skałę.' },
          { step: '3', title: 'Powstanie próchnicy', desc: 'Obumarłe szczątki roślin i zwierząt są rozkładane przez bakterie i dżdżownice w ciemną próchnicę.' },
          { step: '4', title: 'Dojrzała gleba', desc: 'Tworzy się wielowarstwowa gleba, na której mogą rosnąć wysokie trawy, krzewy i drzewa.' }
        ],
        svgType: 'soil_formation'
      },
      {
        title: 'Składniki gleby: ożywione i nieożywione',
        badge: 'Skład gleby',
        text: 'W każdej garści ziemi kryją się dwa rodzaje składników:',
        columns: [
          {
            title: 'Składniki ożywione (żywe organizmy)',
            items: ['Dżdżownice, pędraki, larwy', 'Korzenie rosnących roślin', 'Bakterie i grzyby glebowe', 'Krety i ryjówki drążące nory']
          },
          {
            title: 'Składniki nieożywione (martwa materia)',
            items: ['Okruchy skał (ziarna piasku, ił, pył)', 'Woda z rozpuszczonymi solami', 'Powietrze glebowe', '<strong>Próchnica (humus)</strong> — uwaga, to składnik nieożywiony!']
          }
        ],
        svgType: 'soil_components',
        warning: 'Częsta pułapka na teście: Próchnica powstała ze szczątków organizmów, ale sama próchnica jest składnikiem NIEożywionym!'
      },
      {
        title: 'Profil glebowy — zajrzyj pod powierzchnię',
        badge: 'Warstwy gleby (s. 71)',
        img: 'assets/img/profil_glebowy.jpg',
        imgCaption: 'Autentyczny profil glebowy z podręcznika: poziomy 1–4',
        layers: [
          { name: '1. Ściółka / poziom wierzchni', desc: 'Opadłe liście, gałązki, szczątki roślin.' },
          { name: '2. Poziom próchniczny (najważniejszy!)', desc: 'Ciemna, żyzna warstwa bogata w próchnicę. Tu rozwijają się korzenie roślin.' },
          { name: '3. Warstwa przejściowa', desc: 'Jaśniejsza warstwa, wymywane są do niej sole mineralne.' },
          { name: '4. Skała macierzysta', desc: 'Lita lub zwietrzała skała stanowiąca podłoże, na którym powstała gleba.' }
        ],
        svgType: 'soil_profile'
      },
      {
        title: 'Żyzność gleby i rola organizmów',
        badge: 'Dlaczego gleba daje plony?',
        text: '<strong>Żyzność</strong> to zdolność gleby do zaopatrywania roślin w wodę, powietrze i składniki pokarmowe.',
        bullets: [
          'Im grubsza i ciemniejsza jest warstwa próchnicy, tym gleba jest <strong>bardziej żyzna</strong>.',
          '<strong>Dżdżownice</strong> drążą korytarze, spulchniając glebę (napowietrzają ją) i mieszają szczątki organiczne ze składnikami mineralnymi.',
          'Żyzna gleba ma tzw. <strong>strukturę gruzełkowatą</strong> — wygląda jak małe okruszki, zatrzymuje wilgoć i nie zbija się w twardą skorupę.'
        ],
        svgType: 'earthworm_role'
      }
    ]
  },
  {
    id: 't5',
    title: 'Gleba w mojej okolicy',
    pages: '73–78',
    icon: '🪴',
    color: '#8d6e63',
    intro: 'Przeprowadź naukowe doświadczenie! Porównaj glebę z ogrodu ze sklepową ziemią i sprawdź, jak badać wodę i powietrze w ziemi.',
    steps: [
      {
        title: 'Gleba z okolicy a ziemia ogrodowa',
        badge: 'Badanie próbek',
        text: 'Ziemia uniwersalna kupiona w kwiaciarni jest przygotowana specjalnie dla roślin doniczkowych: jest bardzo ciemna, lekka, puszysta i ma mnóstwo próchnicy.',
        subtext: 'Gleba z naszej okolicy może być bardzo różna: na piaskach jest jasna i sypka, w dolinie rzeki ciemna i wilgotna, a na glinie zbita i lepka.',
        svgType: 'soil_compare'
      },
      {
        title: 'Jak poprawnie zaplanować doświadczenie?',
        badge: 'Zasada naukowa (s. 76)',
        text: 'Gdy badamy, czy roślina lepiej rośnie w glebie z ogrodu czy w piasku, musimy pamiętać o żelaznej regule badacza:',
        rule: 'Zmieniamy TYLKO JEDEN czynnik (rodzaj gleby)!',
        details: [
          'Taka sama ilość światła w obu doniczkach.',
          'Taka sama temperatura w pokoju.',
          'Taka sama ilość i częstotliwość podlewania tą samą wodą.',
          'Nasiona tej samej rośliny (np. rzeżucha z jednej torebki).'
        ],
        svgType: 'experiment_rules',
        tip: 'Jeśli w jednej doniczce zmienisz glebę, a do tego postawisz ją w ciemnym kącie i przestaniesz podlewać — wniosek będzie nieważny!'
      },
      {
        title: 'Woda i powietrze w glebie',
        badge: 'Doświadczenie w słoiku (s. 77–78)',
        experiments: [
          {
            title: 'Czy w glebie jest powietrze?',
            action: 'Wrzuć zwartą grudkę suchej gleby do słoika z wodą.',
            result: 'Z grudki natychmiast zaczynają uciekać ku górze <strong>bąbelki powietrza</strong>! To dowód, że gleba zawiera pory z powietrzem niezbędnym dla korzeni.'
          },
          {
            title: 'Czy w glebie jest woda?',
            action: 'Włóż grudkę gleby do słoika, zamknij szczelnie i postaw na słońcu lub przy kaloryferze.',
            result: 'Na ściankach słoika pojawią się <strong>kropelki rosy</strong>. To odparowana woda glebowa.'
          }
        ],
        svgType: 'jar_air_water'
      }
    ]
  },
  {
    id: 't6',
    title: 'Rośliny i zwierzęta w mojej okolicy',
    pages: '79–84',
    icon: '🪶',
    color: '#1b5e20',
    intro: 'Naucz się bezbłędnie rozpoznawać 6 roślin, 6 ptaków i 3 owady z okolicy na fotografiach. Poznaj dzikich i domowych sąsiadów.',
    steps: [
      {
        title: 'Korzyści z przyrody i uprawy',
        badge: 'Dla człowieka (s. 79–81)',
        categories: [
          { cat: 'Uprawa roślin', items: 'Tlen do oddychania, warzywa, owoce i zboża (żywność), drewno na meble i papier, len i bawełna na ubrania, zioła lecznicze.' },
          { cat: 'Hodowla zwierząt', items: 'Mleko, jaja, wełna na swetry, miód od pszczół, naturalny nawóz na pola.' },
          { cat: 'Zwierzęta domowe', items: 'Pies i kot: przyjaźń, towarzystwo, poczucie bezpieczeństwa, nauka troski i odpowiedzialności.' }
        ],
        svgType: 'benefits_nature'
      },
      {
        title: 'Rozpoznajemy 6 lokalnych roślin',
        badge: 'Atlas roślin (s. 82)',
        plants: [
          { name: 'Lipa drobnolistna', leaf: 'Sercowaty, u nasady niesymetryczny', fruit: 'Małe kuliste orzeszki ze skrzydełkiem (ułatwia lot na wietrze).', img: 'assets/img/drzewo_lipa.jpg' },
          { name: 'Brzoza brodawkowata', leaf: 'Trójkątny lub rombowaty', bark: 'Biała kora łuszcząca się cienkimi płatami, czarne bruzdy w dole.', img: 'assets/img/drzewo_brzoza.jpg' },
          { name: 'Śnieguliczka biała', desc: 'Krzew w parkach', fruit: 'Charakterystyczne białe, gąbczaste kulki jesienią (niejadalne!).', img: 'assets/img/krzew_snieguliczka.jpg' },
          { name: 'Róża dzika', desc: 'Krzew z kolcami', fruit: 'Ciemnoczerwone owoce bogate w witaminę C, liście z kilku listków.', img: 'assets/img/krzew_roza.jpg' },
          { name: 'Koniczyna biała', leaf: 'Trójlistkowy z jasnym łukiem', flower: 'Białe kuliste główki na trawnikach i łąkach.', img: 'assets/img/roslina_koniczyna.jpg' },
          { name: 'Babka lancetowata', leaf: 'Długie wąskie liście przy ziemi', stem: 'Długa bezlistna łodyga z brunatnym kłosem na szczycie.', img: 'assets/img/roslina_babka.jpg' }
        ],
        svgType: 'plants_atlas'
      },
      {
        title: 'Rozpoznajemy 6 lokalnych ptaków',
        badge: 'Atlas ptaków (s. 83)',
        birds: [
          { name: 'Gawron', look: 'Cały czarny z fioletowym połyskiem. U dorosłych jasna, naga skóra u nasady dzioba i pierzaste „nogawice”.', img: 'assets/img/ptak_gawron.jpg' },
          { name: 'Kawka', look: 'Mniejsza od gawrona, ciemnoszary tułów, jasnoszara szyja i kark, charakterystyczne białe lub jasnoniebieskie oko.', img: 'assets/img/ptak_kawka.jpg' },
          { name: 'Sroka', look: 'Bardzo długi schodkowaty ogon, kontrastowe czarno-białe upierzenie (biały brzuch i boki, czarny grzbiet i głowa).', img: 'assets/img/ptak_sroka.jpg' },
          { name: 'Szpak', look: 'Krótki ogon, ciemne pióra nakrapiane jasnymi perełkami/trójkącikami, ostry dziób (wiosną żółty).', img: 'assets/img/ptak_szpak.jpg' },
          { name: 'Kos (samiec)', look: 'Cały smoliście czarny, z jaskrawożółtym lub pomarańczowym dziobem i żółtą obwódką oka (samica jest brunatna).', img: 'assets/img/ptak_kos.jpg' },
          { name: 'Wrona siwa', look: 'Wyraźnie dwubarwna: popielatoszary tułów oraz czarna głowa, gardło, skrzydła i ogon.', img: 'assets/img/ptak_wrona.jpg' }
        ],
        svgType: 'birds_atlas'
      },
      {
        title: 'Poznajemy owady z naszej okolicy',
        badge: 'Atlas owadów (s. 84)',
        insects: [
          { name: 'Skorek pospolity (szczypawka)', desc: 'Spłaszczone brunatne ciało ze szczypcami (cęgami) na końcu odwłoka do obrony i składania skrzydeł. Nie gryzie ludzi!', img: 'assets/img/owad_skorek.jpg' },
          { name: 'Biedronka siedmiokropka', desc: 'Czerwone pokrywy z dokładnie 7 kropkami (po 3 z każdej strony i 1 u góry przy tarczce). Zjada szkodliwe mszyce.', img: 'assets/img/owad_biedronka.jpg' },
          { name: 'Rusałka pokrzywnik', desc: 'Ceglastoczerwony motyl dzienny z czarno-żółtymi plamami i rzędem błękitnych plamek na brzegu skrzydeł. Gąsienice żyją na pokrzywach.', img: 'assets/img/owad_rusalka.jpg' },
          { name: 'Biedronka azjatycka (arlekina)', desc: 'Gatunek inwazyjny: ma zmienną liczbę kropek (od 0 do 23) i literę M lub W na przedpleczu. Wypiera naszą siedmiokropkę.', img: 'assets/img/owad_biedronka_azjatycka.jpg' }
        ],
        svgType: 'insects_atlas'
      },
      {
        title: 'Dlaczego dzikie zwierzęta przychodzą do miast?',
        badge: 'Zwierzęta w mieście (s. 81)',
        reasons: [
          { r: 'Łatwe jedzenie', d: 'Otwarte śmietniki, resztki rzucane ptakom, miski z karmą dla kotów.' },
          { r: 'Cieplejszy mikroklimat', d: 'W mieście zimą jest cieplej o 2–3 stopnie niż w szczerym polu.' },
          { r: 'Mniej drapieżników', d: 'Brak wilków i rysi, które polują na sarny czy dziki w głębi lasu.' }
        ],
        synanthropic: 'W naszych domach mieszkają też drobni lokatorzy: kątnik domowy (pająk w zakamarkach) oraz rybik cukrowy (szybki owad w ciepłych łazienkach).',
        svgType: 'urban_wildlife'
      },
      {
        title: 'Ślady obecności zwierząt',
        badge: 'Praca detektywa (s. 70, 81, 90)',
        clues: [
          { clue: 'Kopiec świeżej ziemi', who: 'Kret drążący podziemne tunele.' },
          { clue: 'Gruzełki na powierzchni gleby', who: 'Dżdżownice po przetrawieniu szczątków.' },
          { clue: 'Zgryziona kora na dole pnia', who: 'Zając lub sarna szukające pożywienia zimą.' },
          { clue: 'Lejkowata sieć w kącie piwnicy', who: 'Pająk kątnik polujący na owady.' },
          { clue: 'Zgubione pióro lub wypluwka', who: 'Ptak żerujący w okolicy (np. sowa, sroka).' }
        ],
        svgType: 'animal_tracks'
      }
    ]
  }
];
