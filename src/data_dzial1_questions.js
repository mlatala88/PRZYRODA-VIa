// Bank pytań dla Działu I: "Spotkanie z przyrodą"
// 5 zestawów testowych po 15 zadań (po 3 z każdego z 5 tematów)
// 100% interaktywne bez pisania na klawiaturze.

module.exports = [
  // ==========================================
  // ZESTAW 1 (15 zadań)
  // ==========================================
  // T1: Co to jest przyroda?
  {
    id: 'd1_z1_t1_1', set: 1, topic: 0, skill: 'D1_P01', type: 'bin_sort',
    q: 'Rozdziel elementy do właściwych koszyków:',
    bins: ['Przyroda ożywiona', 'Przyroda nieożywiona', 'Wytwór człowieka'],
    items: [
      { text: 'Kot domowy', bin: 0 },
      { text: 'Chmura na niebie', bin: 1 },
      { text: 'Rower górski', bin: 2 },
      { text: 'Grzyb borowik', bin: 0 },
      { text: 'Głaz granitowy', bin: 1 },
      { text: 'Drewniany płot', bin: 2 }
    ],
    why: 'Kot i grzyb to organizmy żywe. Chmura i głaz to przyroda nieożywiona. Rower i płot (mimo że z drewna) zostały wykonane przez człowieka.',
    src: '14, 47, 50'
  },
  {
    id: 'd1_z1_t1_2', set: 1, topic: 0, skill: 'D1_P02', type: 'choice',
    q: 'Wiatr przesuwa chmurę po niebie. Czy ten ruch oznacza, że chmura jest organizmem żywym?',
    opts: [
      'Tak, każdy poruszający się obiekt to istota żywa.',
      'Nie, chmura jest wprawiana w ruch przez wiatr i nie wykonuje czynności życiowych.',
      'Tak, bo chmury potrafią pić wodę z jezior.',
      'Nie, ponieważ chmury produkują ludzie w fabrykach.'
    ],
    a: 1,
    why: 'Sam ruch wywołany wiatrem nie świadczy o życiu. Organizmy żywe wykonują czynności życiowe, takie jak odżywianie, oddychanie i wzrost.',
    src: '14, 50'
  },
  {
    id: 'd1_z1_t1_3', set: 1, topic: 0, skill: 'D1_P03', type: 'multichoice',
    q: 'Zaznacz 3 cechy, które są czynnościami życiowymi organizmów:',
    opts: [
      'Oddychanie i odżywianie się',
      'Rdzenienie pod wpływem deszczu',
      'Wzrost, rozwój i rozmnażanie się',
      'Topnienie na słońcu',
      'Reagowanie na bodźce z otoczenia'
    ],
    correctIndices: [0, 2, 4],
    why: 'Organizmy żywe oddychają, odżywiają się, rosną, rozmnażają i reagują na bodźce. Rdzewienie i topnienie to procesy fizykochemiczne.',
    src: '14'
  },

  // T2: Sposób na naukę i cyfrowy dobrostan
  {
    id: 'd1_z1_t2_1', set: 1, topic: 1, skill: 'D1_N01', type: 'choice',
    q: 'Podczas nauki powiadomienia w telefonie co chwilę odrywają Cię od zeszytu. Co jest najlepszym rozwiązaniem?',
    opts: [
      'Odkładam telefon do drugiego pokoju i wyciszam powiadomienia.',
      'Odpisuję natychmiast na każdą wiadomość.',
      'Włączam dodatkowo telewizor, żeby było głośniej.',
      'Uczę się i gram jednocześnie na podzielonym ekranie.'
    ],
    a: 0,
    why: 'Usunięcie rozpraszaczy pozwala mózgowi skupić się na jednym zadaniu, dzięki czemu nauka trwa krócej i przynosi lepsze rezultaty.',
    src: '18–19'
  },
  {
    id: 'd1_z1_t2_2', set: 1, topic: 1, skill: 'D1_N02', type: 'choice',
    q: 'Ile godzin snu na dobę potrzebują dzieci w wieku 10 lat według podręcznika?',
    opts: [
      '4–5 godzin',
      '6–7 godzin',
      '9–11 godzin',
      'Wystarczy 2 godziny drzemki w dzień'
    ],
    a: 2,
    why: 'Podręcznik podaje 9–11 godzin snu. Wypoczęty mózg sprawniej przetwarza informacje i zapamiętuje materiał z lekcji.',
    src: '19'
  },
  {
    id: 'd1_z1_t2_3', set: 1, topic: 1, skill: 'D1_N03', type: 'choice',
    q: 'Która sytuacja jest niepokojącym sygnałem ostrzegawczym nadużywania internetu?',
    opts: [
      'Odkładam telefon, gdy mija ustalony z rodzicami czas.',
      'Czuję niepokój i złość bez telefonu i chcę być bez przerwy online.',
      'Korzystam z encyklopedii w sieci, by przygotować referat do szkoły.',
      'Po skończeniu lekcji idę na rower z kolegami.'
    ],
    a: 1,
    why: 'Ciągła potrzeba bycia online i złość przy próbie odłożenia urządzenia to opisane w książce sygnały ostrzegawcze uzależnienia.',
    src: '22, 48'
  },

  // T3: Badam przyrodę jak naukowiec
  {
    id: 'd1_z1_t3_1', set: 1, topic: 2, skill: 'D1_B01', type: 'choice',
    q: 'Uczeń liczy ptaki przylatujące do karmnika i notuje ich gatunki. Nie zmienia żadnych warunków w ogrodzie. To badanie to:',
    opts: [
      'Doświadczenie (eksperyment)',
      'Obserwacja przyrodnicza',
      'Hipoteza naukowa',
      'Wniosek końcowy'
    ],
    a: 1,
    why: 'Obserwacja polega na uważnym przyglądaniu się obiektom i zjawiskom w ich naturalnym stanie, bez celowej ingerencji badacza.',
    src: '31, 48'
  },
  {
    id: 'd1_z1_t3_2', set: 1, topic: 2, skill: 'D1_B02', type: 'choice',
    q: 'Przed przystąpieniem do badania zapisujesz przypuszczalną odpowiedź na pytanie badawcze. Ten zapis to:',
    opts: [
      'Wynik pomiaru',
      'Hipoteza',
      'Gotowy wniosek',
      'Próba kontrolna'
    ],
    a: 1,
    why: 'Hipoteza to prawdopodobna, przypuszczalna odpowiedź, którą sprawdzamy dopiero w trakcie przeprowadzanego badania.',
    src: '32'
  },
  {
    id: 'd1_z1_t3_3', set: 1, topic: 2, skill: 'D1_B03', type: 'choice',
    q: 'Na butelce ze środkiem chemicznym widnieje symbol czaszki ze skrzyżowanymi piszczelami. Co oznacza ten piktogram?',
    opts: [
      'Substancja toksyczna (trująca)',
      'Substancja łatwopalna',
      'Substancja bezpieczna do picia',
      'Nawóz do kwiatów'
    ],
    a: 0,
    why: 'Czaszka ze skrzyżowanymi piszczelami ostrzega przed substancją silnie toksyczną (trującą).',
    src: '35, 49'
  },

  // T4: Przyrządy i mikroskop
  {
    id: 'd1_z1_t4_1', set: 1, topic: 3, skill: 'D1_M01', type: 'choice',
    q: 'Ptak siedzi wysoko w koronie drzewa. Który przyrząd pozwoli go dokładnie obejrzeć?',
    opts: [
      'Mikroskop optyczny',
      'Lornetka',
      'Lupa ręczna',
      'Taśma miernicza'
    ],
    a: 1,
    why: 'Lornetka służy do obserwacji obiektów oddalonych od obserwatora, np. płochliwych ptaków w koronach drzew.',
    src: '28'
  },
  {
    id: 'd1_z1_t4_2', set: 1, topic: 3, skill: 'D1_M02', type: 'choice',
    q: 'Okular mikroskopu powiększa 10 razy, a obiektyw 20 razy. Jakie jest całkowite powiększenie tego mikroskopu?',
    opts: [
      '30 razy',
      '200 razy',
      '120 razy',
      '2 razy'
    ],
    a: 1,
    why: 'Powiększenia okularu i obiektywu mnożymy: 10 × 20 = 200 razy.',
    src: '39'
  },
  {
    id: 'd1_z1_t4_3', set: 1, topic: 3, skill: 'D1_M03', type: 'match',
    q: 'Dopasuj część mikroskopu do jej funkcji:',
    pairs: [
      { left: 'Okular', right: 'Soczewka na samej górze, przez którą patrzymy' },
      { left: 'Stolik', right: 'Płytka, na której kładziemy preparat' },
      { left: 'Śruba makrometryczna', right: 'Pokrętło do wstępnego ustawiania ostrości' }
    ],
    why: 'Okular służy do patrzenia, stolik trzyma szkiełko z preparatem, a śruba makrometryczna szybko reguluje odległość.',
    src: '38–39'
  },

  // T5: Kierunki geograficzne i kompas
  {
    id: 'd1_z1_t5_1', set: 1, topic: 4, skill: 'D1_K01', type: 'choice',
    q: 'Jaki kierunek oznacza międzynarodowy skrót NW?',
    opts: [
      'Północny wschód',
      'Północny zachód',
      'Południowy zachód',
      'Południowy wschód'
    ],
    a: 1,
    why: 'N to North (Północ), W to West (Zachód). NW oznacza kierunek pośredni: północny zachód.',
    src: '43'
  },
  {
    id: 'd1_z1_t5_2', set: 1, topic: 4, skill: 'D1_K02', type: 'choice',
    q: 'Stoisz twarzą na PÓŁNOC. W którą stronę wskazuje Twoja prawa ręka?',
    opts: [
      'Na południe',
      'Na zachód',
      'Na wschód',
      'Na północny zachód'
    ],
    a: 2,
    why: 'Gdy stoisz twarzą na północ (N), za plecami masz południe (S), po lewej zachód (W), a po prawej wschód (E).',
    src: '44–45'
  },
  {
    id: 'd1_z1_t5_3', set: 1, topic: 4, skill: 'D1_K03', type: 'choice',
    q: 'Dlaczego nie należy używać kompasu w pobliżu magnesów, stalowych barierek ani linii wysokiego napięcia?',
    opts: [
      'Bo kompas może wybuchnąć.',
      'Ponieważ metal i pole magnetyczne zakłócają igłę magnetyczną, przez co fałszuje kierunek.',
      'Bo kompas rozładuje baterie w telefonie.',
      'Metal nie ma żadnego wpływu na igłę kompasu.'
    ],
    a: 1,
    why: 'Igła kompasu to mały magnes. Zewnętrzne pola magnetyczne i żelazo przyciągają ją, uniemożliwiając prawidłowe wskazanie północy.',
    src: '45'
  },

  // ==========================================
  // ZESTAW 2 (15 zadań)
  // ==========================================
  // T1: Co to jest przyroda?
  {
    id: 'd1_z2_t1_1', set: 2, topic: 0, skill: 'D1_P01', type: 'choice',
    q: 'Który zestaw zawiera wyłącznie elementy przyrody nieożywionej?',
    opts: [
      'Dąb, trawa, mrówka',
      'Powietrze, woda w rzece, piasek kwarcowy',
      'Drewniany most, asfalt, beton',
      'Wróbel, skała, samochód'
    ],
    a: 1,
    why: 'Powietrze, woda i piasek to elementy natury, które nie wykonują czynności życiowych (przyroda nieożywiona).',
    src: '14, 47'
  },
  {
    id: 'd1_z2_t1_2', set: 2, topic: 0, skill: 'D1_P02', type: 'choice',
    q: 'Do której grupy elementów zaliczamy grzyba borowika rosnącego w lesie?',
    opts: [
      'Do przyrody ożywionej',
      'Do przyrody nieożywionej',
      'Do wytworów człowieka',
      'Grzyby nie należą do przyrody'
    ],
    a: 0,
    why: 'Grzyby — obok roślin i zwierząt — to żywe organizmy wykonujące czynności życiowe.',
    src: '14'
  },
  {
    id: 'd1_z2_t1_3', set: 2, topic: 0, skill: 'D1_P03', type: 'match',
    q: 'Połącz czynność życiową z jej prostym opisem:',
    pairs: [
      { left: 'Odżywianie się', right: 'Pobieranie pokarmu dającego energię' },
      { left: 'Oddychanie', right: 'Pobieranie tlenu niezbędnego do życia' },
      { left: 'Rozmnażanie się', right: 'Wydawanie na świat potomstwa' }
    ],
    why: 'Każdy organizm musi pobierać pokarm, oddychać tlenem i zapewniać przetrwanie gatunku.',
    src: '14'
  },

  // T2: Sposób na naukę
  {
    id: 'd1_z2_t2_1', set: 2, topic: 1, skill: 'D1_N01', type: 'choice',
    q: 'Po 25 minutach intensywnej nauki przyrody warto:',
    opts: [
      'Uczyć się przez kolejne 3 godziny bez żadnego odpoczynku.',
      'Zrobić krótką 5-minutową przerwę, wywietrzyć pokój i napić się wody.',
      'Włączyć głośną grę akcji na komputerze.',
      'Zarwać noc, żeby skończyć cały podręcznik.'
    ],
    a: 1,
    why: 'Krótki odpoczynek pozwala mózgowi zregenerować neuroprzekaźniki i utrzymać wysoką koncentrację.',
    src: '18–19'
  },
  {
    id: 'd1_z2_t2_2', set: 2, topic: 1, skill: 'D1_N02', type: 'choice',
    q: 'Dlaczego po bardzo krótkiej nocy trudniej skupić się na lekcjach w szkole?',
    opts: [
      'Bo mózg nie zdążył odpocząć i uporządkować informacji w pamięci.',
      'Bo sen w ogóle nie ma związku z pracą mózgu.',
      'Bo im mniej śpimy, tym mamy lepszą pamięć.',
      'To nieprawda — zmęczenie pomaga w nauce.'
    ],
    a: 0,
    why: 'Sen to czas biologicznej regeneracji neuronów i konsolidacji pamięci.',
    src: '18–19'
  },
  {
    id: 'd1_z2_t2_3', set: 2, topic: 1, skill: 'D1_N03', type: 'choice',
    q: 'Co może być zdrowotnym skutkiem wielogodzinnego, codziennego siedzenia przed ekranem bez ruchu?',
    opts: [
      'Lepsza kondycja fizyczna i zdrowsze serce',
      'Wady postawy, bóle pleców, pogorszenie wzroku i kłopoty ze snem',
      'Automatyczna znajomość języków obcych',
      'Brak jakiegokolwiek wpływu na zdrowie'
    ],
    a: 1,
    why: 'Brak ruchu i niebieskie światło ekranów przed snem prowadzą do wad postawy, zmęczenia oczu i bezsenności.',
    src: '23, 48'
  },

  // T3: Badam przyrodę
  {
    id: 'd1_z2_t3_1', set: 2, topic: 2, skill: 'D1_B01', type: 'match',
    q: 'Dopasuj badanie do narządu zmysłu, którym je wykonujemy:',
    pairs: [
      { left: 'Rozpoznanie szelestu liści i głosu sikory', right: 'Ucho (słuch)' },
      { left: 'Sprawdzenie, czy kora brzozy jest gładka czy szorstka', right: 'Skóra (dotyk)' },
      { left: 'Rozpoznanie zapachu mięty pieprzowej', right: 'Nos (węch)' }
    ],
    why: 'Każdy narząd zmysłu odbiera specyficzne bodźce ze środowiska.',
    src: '26–27'
  },
  {
    id: 'd1_z2_t3_2', set: 2, topic: 2, skill: 'D1_B02', type: 'choice',
    q: 'Badacz sprawdza, czy rodzaj podłoża wpływa na wysokość odbicia piłeczki. Jak powinien zaplanować próby?',
    opts: [
      'Zmienia podłoże, piłeczkę i wysokość rzutu jednocześnie.',
      'Zmienia wyłącznie podłoże — ta sama piłeczka jest upuszczana z tej samej wysokości.',
      'Za każdym razem rzuca z inną siłą pod innym kątem.',
      'Wystarczy zgadnąć wynik bez wykonywania prób.'
    ],
    a: 1,
    why: 'Złota zasada doświadczenia: zmieniamy tylko jeden czynnik. Inaczej nie dowiemy się, co spowodowało zmianę wyniku.',
    src: '32–33'
  },
  {
    id: 'd1_z2_t3_3', set: 2, topic: 2, skill: 'D1_B03', type: 'choice',
    q: 'Podczas lekcji w pracowni rozbiła się probówka. Co należy zrobić?',
    opts: [
      'Zbierać odłamki gołymi rękami i schować do kieszeni.',
      'Natychmiast zgłosić wypadek nauczycielowi i nie dotykać szkła.',
      'Udawać, że nic się nie stało i uciec z sali.',
      'Zalać probówkę gorącą wodą.'
    ],
    a: 1,
    why: 'Wszelkie wypadki i uszkodzenia sprzętu w pracowni natychmiast zgłaszamy dorosłemu opiekunowi.',
    src: '34'
  },

  // T4: Przyrządy i mikroskop
  {
    id: 'd1_z2_t4_1', set: 2, topic: 3, skill: 'D1_M01', type: 'choice',
    q: 'Chcesz dokładnie obejrzeć żyłki na spodniej stronie trzymanego w dłoni liścia. Jaki przyrząd wybierzesz?',
    opts: [
      'Kompas',
      'Taśmę mierniczą',
      'Lupę ręczną',
      'Termometr'
    ],
    a: 2,
    why: 'Lupa powiększa drobne szczegóły bliskich obiektów.',
    src: '28–29'
  },
  {
    id: 'd1_z2_t4_2', set: 2, topic: 3, skill: 'D1_M02', type: 'choice',
    q: 'Które pokrętło w mikroskopie służy do BARDZO DOKŁADNEGO, precyzyjnego ustawienia ostrości obrazu?',
    opts: [
      'Śruba makrometryczna',
      'Śruba mikrometryczna',
      'Rewolwer',
      'Wyłącznik lampki'
    ],
    a: 1,
    why: 'Śruba makrometryczna służy do wstępnego ustawienia, a śruba mikrometryczna do dokładnego dostrojenia ostrości.',
    src: '39'
  },
  {
    id: 'd1_z2_t4_3', set: 2, topic: 3, skill: 'D1_M03', type: 'choice',
    q: 'Gdzie umieszcza się szkiełko z preparatem mikroskopowym podczas obserwacji?',
    opts: [
      'Na stoliku mikroskopu pod obiektywem',
      'Wewnątrz tubusa obok okularu',
      'Na śrubie makrometrycznej',
      'Bezpośrednio na żarówce oświetlacza'
    ],
    a: 0,
    why: 'Preparat kładziemy na stoliku mikroskopu i mocujemy metalowymi łapkami.',
    src: '38–39'
  },

  // T5: Kompas i kierunki
  {
    id: 'd1_z2_t5_1', set: 2, topic: 4, skill: 'D1_K01', type: 'choice',
    q: 'Który kierunek leży dokładnie między południem (S) a wschodem (E)?',
    opts: [
      'Północny wschód (NE)',
      'Południowy wschód (SE)',
      'Południowy zachód (SW)',
      'Północny zachód (NW)'
    ],
    a: 1,
    why: 'Kierunkiem pośrednim między S i E jest SE — południowy wschód.',
    src: '43'
  },
  {
    id: 'd1_z2_t5_2', set: 2, topic: 4, skill: 'D1_K02', type: 'choice',
    q: 'Idziesz na południowy zachód (SW). Nagle zawracasz o 180 stopni. W jakim kierunku idziesz teraz?',
    opts: [
      'Północny wschód (NE)',
      'Południowy wschód (SE)',
      'Północny zachód (NW)',
      'Czyste południe (S)'
    ],
    a: 0,
    why: 'Zawrócenie oznacza wybór kierunku dokładnie przeciwnego na róży kierunków: przeciwieństwem SW jest NE.',
    src: '43–45'
  },
  {
    id: 'd1_z2_t5_3', set: 2, topic: 4, skill: 'D1_K03', type: 'choice',
    q: 'Który koniec igły magnetycznej kompasu wskazuje kierunek północny?',
    opts: [
      'Koniec jaśniejszy, biały lub srebrny',
      'Koniec wyróżniony ciemniejszym kolorem (niebieskim lub czerwonym) albo literą N',
      'Oba końce wskazują to samo',
      'Igła obraca się losowo i nic nie wskazuje'
    ],
    a: 1,
    why: 'Wyróżniony (ciemniejszy/kolorowy) grot igły magnetycznej wskazuje północ magnetyczną Ziemi.',
    src: '42'
  },

  // ==========================================
  // ZESTAW 3 (15 zadań)
  // ==========================================
  // T1: Co to jest przyroda?
  {
    id: 'd1_z3_t1_1', set: 3, topic: 0, skill: 'D1_P01', type: 'bin_sort',
    q: 'Rozdziel elementy do właściwych koszyków:',
    bins: ['Przyroda ożywiona', 'Przyroda nieożywiona', 'Wytwór człowieka'],
    items: [
      { text: 'Bocian biały', bin: 0 },
      { text: 'Rosa na trawie', bin: 1 },
      { text: 'Plastikowa butelka', bin: 2 },
      { text: 'Sosna zwyczajna', bin: 0 },
      { text: 'Piasek morski', bin: 1 },
      { text: 'Szklana szyba', bin: 2 }
    ],
    why: 'Bocian i sosna to żywe organizmy. Rosa i piasek to elementy przyrody nieożywionej. Plastik i szkło wytworzył człowiek.',
    src: '14, 47, 50'
  },
  {
    id: 'd1_z3_t1_2', set: 3, topic: 0, skill: 'D1_P02', type: 'choice',
    q: 'Czy roślina w doniczce jest organizmem żywym, skoro nie potrafi biegać?',
    opts: [
      'Nie, bo tylko zwierzęta są istotami żywymi.',
      'Tak, ponieważ wykonuje czynności życiowe: odżywia się, oddycha, rośnie i reaguje na bodźce.',
      'Tylko wtedy, gdy kwitnie.',
      'Nie, rośliny doniczkowe zaliczamy do mebli.'
    ],
    a: 1,
    why: 'Rośliny to pełnoprawne organizmy żywe — mimo że nie biegają, odżywiają się (fotosynteza), oddychają, rosną i poruszają liśćmi ku światłu.',
    src: '14'
  },
  {
    id: 'd1_z3_t1_3', set: 3, topic: 0, skill: 'D1_P03', type: 'multichoice',
    q: 'Wskaż 3 elementy należące do przyrody ożywionej:',
    opts: [
      'Dżdżownica w glebie',
      'Kamień granitowy',
      'Muchomor czerwony w lesie',
      'Krople deszczu',
      'Paproć leśna'
    ],
    correctIndices: [0, 2, 4],
    why: 'Dżdżownica (zwierzę), muchomor (grzyb) i paproć (roślina) to żywe organizmy. Kamień i deszcz to przyroda nieożywiona.',
    src: '14, 47'
  },

  // T2: Sposób na naukę i cyfrowy dobrostan
  {
    id: 'd1_z3_t2_1', set: 3, topic: 1, skill: 'D1_N01', type: 'choice',
    q: 'Ile snu potrzebuje uczeń klasy 4, aby mózg w pełni się zregenerował?',
    opts: [
      'Około 4–5 godzin',
      'Około 9–11 godzin',
      'Wystarczą 2 godziny przed szkołą',
      'Dzieci w tym wieku nie potrzebują snu'
    ],
    a: 1,
    why: 'Według podręcznika uczeń w wieku 10 lat potrzebuje od 9 do 11 godzin snu na dobę.',
    src: '19'
  },
  {
    id: 'd1_z3_t2_2', set: 3, topic: 1, skill: 'D1_N02', type: 'choice',
    q: 'Czym jest uzależnienie od urządzeń cyfrowych (smartfona, gier)?',
    opts: [
      'Kupieniem nowego telefonu w sklepie.',
      'Stanem, w którym człowiek nie kontroluje czasu w sieci i zaniedbuje sen, naukę oraz relacje z ludźmi.',
      'Szybkim pisaniem wiadomości na klawiaturze.',
      'Zdolnością do programowania gier komputerowych.'
    ],
    a: 1,
    why: 'Uzależnienie to utrata kontroli nad czasem przed ekranem i rezygnacja z innych sfer życia na rzecz internetu.',
    src: '24'
  },
  {
    id: 'd1_z3_t2_3', set: 3, topic: 1, skill: 'D1_N03', type: 'choice',
    q: 'Na czym polega zasada ochrony oczu 20-20-20 podczas pracy przed ekranem?',
    opts: [
      'Po 20 minutach patrzymy przez 20 sekund na obiekt oddalony o min. 6 metrów (20 stóp).',
      'Gramy 20 godzin, śpimy 20 minut i jemy 20 posiłków.',
      'Mrugamy 20 razy na minutę przez 20 dni.',
      'Czytamy 20 stron podręcznika w 20 minut.'
    ],
    a: 0,
    why: 'Zasada 20-20-20 daje mięśniom oka czas na rozluźnienie akomodacji po patrzeniu z bliska.',
    src: '23'
  },

  // T3: Badam przyrodę
  {
    id: 'd1_z3_t3_1', set: 3, topic: 2, skill: 'D1_B01', type: 'choice',
    q: 'Jaka jest główna różnica między doświadczeniem a obserwacją przyrodniczą?',
    opts: [
      'W doświadczeniu badacz celowo zmienia jeden wybrany warunek, a w obserwacji nie ingeruje.',
      'W obserwacji zawsze używa się mikroskopu, a w doświadczeniu nigdy.',
      'Doświadczenie wykonuje się tylko na lekcjach plastyki.',
      'Nie ma żadnej różnicy, to dokładnie to samo.'
    ],
    a: 0,
    why: 'Obserwacja to bierne przyglądanie się, a doświadczenie (eksperyment) wymaga aktywnej zmiany badanego czynnika.',
    src: '31, 48'
  },
  {
    id: 'd1_z3_t3_2', set: 3, topic: 2, skill: 'D1_B02', type: 'order',
    q: 'Ułóż etapy pracy młodego naukowca we właściwej kolejności:',
    items: [
      'Sformułowanie pytania badawczego',
      'Postawienie hipotezy (przypuszczenia)',
      'Przeprowadzenie próby badawczej i kontrolnej',
      'Wyciągnięcie wniosku z wyników'
    ],
    correctOrder: [0, 1, 2, 3],
    why: 'Najpierw pytamy, potem stawiamy hipotezę, następnie przeprowadzamy próbę i na końcu wyciągamy wniosek.',
    src: '32–33'
  },
  {
    id: 'd1_z3_t3_3', set: 3, topic: 2, skill: 'D1_B03', type: 'choice',
    q: 'Co oznacza znak ostrzegawczy z symbolem płomienia na pojemniku z płynem?',
    opts: [
      'Płyn jest bardzo zimny.',
      'Substancja jest łatwopalna i należy trzymać ją z dala od ognia.',
      'Płyn można bezpiecznie pić.',
      'Pojemnik służy do gaszenia pożarów.'
    ],
    a: 1,
    why: 'Płomień ostrzega przed substancjami łatwopalnymi, które mogą gwałtownie zapalić się od iskry lub ciepła.',
    src: '35'
  },

  // T4: Przyrządy i mikroskop
  {
    id: 'd1_z3_t4_1', set: 3, topic: 3, skill: 'D1_M01', type: 'choice',
    q: 'Okular mikroskopu ma powiększenie 10x, a obiektyw 40x. Jakie jest całkowite powiększenie obrazu?',
    opts: [
      '50 razy (10 + 40)',
      '400 razy (10 × 40)',
      '30 razy (40 - 10)',
      '4 razy (40 ÷ 10)'
    ],
    a: 1,
    why: 'Powiększenie mikroskopu obliczamy mnożąc powiększenie okularu przez powiększenie obiektywu: 10 × 40 = 400 razy.',
    src: '39'
  },
  {
    id: 'd1_z3_t4_2', set: 3, topic: 3, skill: 'D1_M02', type: 'choice',
    q: 'Dlaczego preparat mikroskopowy musi być bardzo cienki?',
    opts: [
      'Żeby zmieścił się do kieszeni badacza.',
      'Aby promienie światła mogły przez niego swobodnie przejść do obiektywu.',
      'Żeby obiektyw nie pękł pod ciężarem próbki.',
      'Cienkie preparaty szybciej schną na powietrzu.'
    ],
    a: 1,
    why: 'Mikroskop optyczny działa w świetle przechodzącym — gruba, nieprzezroczysta próbka dałaby jedynie czarną plamę.',
    src: '38–39'
  },
  {
    id: 'd1_z3_t4_3', set: 3, topic: 3, skill: 'D1_M03', type: 'match',
    q: 'Dopasuj przyrząd do zadania terenowego:',
    pairs: [
      { left: 'Lornetka', right: 'Obserwacja płochliwych ptaków w koronach drzew' },
      { left: 'Taśma miernicza', right: 'Pomiar obwodu pnia wiekowego dębu' },
      { left: 'Termometr', right: 'Pomiar temperatury wody w stawie' }
    ],
    why: 'Lornetka przybliża dalekie obiekty, taśma mierzy odległości i obwody, a termometr temperaturę.',
    src: '28–29'
  },

  // T5: Kompas i kierunki
  {
    id: 'd1_z3_t5_1', set: 3, topic: 4, skill: 'D1_K01', type: 'choice',
    q: 'Stoisz twarzą zwrócony dokładnie na północ (N). W którą stronę wskazuje Twoja lewa ręka?',
    opts: [
      'Na wschód (E)',
      'Na zachód (W)',
      'Na południe (S)',
      'W górę w niebo'
    ],
    a: 1,
    why: 'Gdy stoisz twarzą na północ: po prawej masz wschód (E), po lewej zachód (W), a za plecami południe (S).',
    src: '43'
  },
  {
    id: 'd1_z3_t5_2', set: 3, topic: 4, skill: 'D1_K02', type: 'choice',
    q: 'Jaki kierunek na róży wiatrów leży dokładnie naprzeciwko północnego zachodu (NW)?',
    opts: [
      'Północny wschód (NE)',
      'Południowy wschód (SE)',
      'Południowy zachód (SW)',
      'Czyste południe (S)'
    ],
    a: 1,
    why: 'Przeciwieństwem północy (N) jest południe (S), a zachodu (W) wschód (E). Stąd przeciwieństwem NW jest SE.',
    src: '43'
  },
  {
    id: 'd1_z3_t5_3', set: 3, topic: 4, skill: 'D1_K03', type: 'choice',
    q: 'Jak prawidłowo przygotować kompas do odczytania kierunku w terenie?',
    opts: [
      'Mocno nim potrząsać w biegu.',
      'Położyć płasko i obrócić obudowę, aż litera N zrówna się ze wskazaniem igły magnetycznej.',
      'Trzymać go pionowo przy uchu.',
      'Położyć na masce rozgrzanego samochodu.'
    ],
    a: 1,
    why: 'Kompas musi leżeć poziomo, a obudowę obracamy do zgrania litery N z północnym grotem igły.',
    src: '45'
  },

  // ==========================================
  // ZESTAW 4 (15 zadań)
  // ==========================================
  // T1: Co to jest przyroda?
  {
    id: 'd1_z4_t1_1', set: 4, topic: 0, skill: 'D1_P01', type: 'choice',
    q: 'Drewniana ławka w parku powstała z drewna ściętego drzewa. Do jakiej kategorii ją zaliczamy?',
    opts: [
      'Do przyrody ożywionej, bo drewno rosło w lesie.',
      'Do wytworów człowieka, bo została zaprojektowana i zrobiona przez ludzi.',
      'Do przyrody nieożywionej.',
      'Do minerałów.'
    ],
    a: 1,
    why: 'Nawet jeśli obiekt zrobiono z surowca naturalnego (drewno, skóra, wełna), to obróbka człowieka czyni z niego wytwór rąk ludzkich.',
    src: '14, 50'
  },
  {
    id: 'd1_z4_t1_2', set: 4, topic: 0, skill: 'D1_P02', type: 'choice',
    q: 'Woda w górskim potoku płynie, pieni się i paruje. Czy woda jest przyrodą ożywioną?',
    opts: [
      'Tak, bo porusza się tak szybko jak ryba.',
      'Nie, woda to przyroda nieożywiona — nie ma budowy komórkowej i nie wykonuje czynności życiowych.',
      'Tak, bo bez wody nic by nie żyło.',
      'Tylko woda ciepła jest ożywiona.'
    ],
    a: 1,
    why: 'Woda to niezbędny do życia, ale nieożywiony element przyrody.',
    src: '14, 47'
  },
  {
    id: 'd1_z4_t1_3', set: 4, topic: 0, skill: 'D1_P03', type: 'choice',
    q: 'Roślina na oknie wygina łodygę w stronę padającego światła słonecznego. Jaka to czynność życiowa?',
    opts: [
      'Wydalanie',
      'Reakcja na bodźce (światło)',
      'Rozmnażanie się',
      'Oddychanie'
    ],
    a: 1,
    why: 'Zwracanie się rośliny ku słońcu (fototropizm) to przykład reakcji żywego organizmu na bodziec świetlny.',
    src: '14'
  },

  // T2: Sposób na naukę
  {
    id: 'd1_z4_t2_1', set: 4, topic: 1, skill: 'D1_N01', type: 'choice',
    q: 'Dlaczego jednoczesna nauka i odpisywanie na wiadomości w telefonie (tzw. wielozadaniowość) jest błędem?',
    opts: [
      'Bo telefon szybciej się rozładowuje.',
      'Bo mózg musi bezustannie przełączać uwagę, co męczy i drastycznie obniża zapamiętywanie.',
      'Wielozadaniowość jest najlepszym sposobem nauki.',
      'Bo telefon może przegrzać zeszyt.'
    ],
    a: 1,
    why: 'Ludzki mózg nie przetwarza dwóch skomplikowanych zadań jednocześnie — ciągłe odrywanie się niszczy skupienie.',
    src: '18–19'
  },
  {
    id: 'd1_z4_t2_2', set: 4, topic: 1, skill: 'D1_N02', type: 'choice',
    q: 'Który nawyk wieczorny najlepiej sprzyja głębokiemu, regenerującemu snowi?',
    opts: [
      'Oglądanie dynamicznych filmików w łóżku do północy.',
      'Odłożenie smartfona i wyłączenie ekranów na co najmniej 30–60 minut przed snem.',
      'Picie mocnej coli i słodkich napojów gazowanych przed zaśnięciem.',
      'Granie na konsoli przy zgaszonym świetle.'
    ],
    a: 1,
    why: 'Niebieskie światło ekranów hamuje wydzielanie melatoniny — hormonu snu. Ograniczenie ekranów przed snem ułatwia zasypianie.',
    src: '19, 23'
  },
  {
    id: 'd1_z4_t2_3', set: 4, topic: 1, skill: 'D1_N03', type: 'multichoice',
    q: 'Zaznacz 2 zdrowe sposoby na spędzenie 10-minutowej przerwy w nauce:',
    opts: [
      'Wywietrzenie pokoju, rozciąganie i napicie się wody',
      'Krótki spacer lub wyjście na balkon',
      'Włączenie gry akcji na konsoli',
      'Oglądanie rolek na telefonie'
    ],
    correctIndices: [0, 1],
    why: 'Ruch, świeże powietrze i woda dają odpoczynek zmysłom i dotleniają mózg. Ekrany w przerwie nie dają odpoczynku.',
    src: '18'
  },

  // T3: Badam przyrodę
  {
    id: 'd1_z4_t3_1', set: 4, topic: 2, skill: 'D1_B01', type: 'choice',
    q: 'Którym ze zmysłów BEZWZGLĘDNIE NIE WOLNO badać nieznanych leśnych roślin, grzybów ani preparatów?',
    opts: [
      'Wzrokiem',
      'Słuchem',
      'Smakiem',
      'Węchem z dużej odległości'
    ],
    a: 2,
    why: 'Próbowanie smakiem grozi śmiertelnym zatruciem lub ciężkim oparzeniem chemicznym!',
    src: '26, 34'
  },
  {
    id: 'd1_z4_t3_2', set: 4, topic: 2, skill: 'D1_B02', type: 'choice',
    q: 'W doświadczeniu z nasionami badacz postawił doniczkę A w ciepłym pokoju, a doniczkę B w lodówce. Czym różnią się warunki?',
    opts: [
      'Tylko temperaturą — pozostałe warunki (wilgotność, rodzaj nasion) są identyczne.',
      'W doniczce A rośnie fasola, a w doniczce B kaktus.',
      'Doniczka A jest podlewana sokiem, a B octem.',
      'Warunki różnią się wszystkim naraz.'
    ],
    a: 0,
    why: 'Aby doświadczenie było rzetelne, zmieniamy tylko jeden badany czynnik (w tym przypadku temperaturę).',
    src: '32–33'
  },
  {
    id: 'd1_z4_t3_3', set: 4, topic: 2, skill: 'D1_B03', type: 'choice',
    q: 'Co oznacza znak ostrzegawczy z symbolem czaszki ze skrzyżowanymi piszczelami?',
    opts: [
      'Substancja toksyczna (trująca) — zagraża życiu i zdrowiu.',
      'Pirat morski.',
      'Substancja łatwopalna.',
      'Kruche szkło.'
    ],
    a: 0,
    why: 'Czaszka z piszczelami to międzynarodowy znak oznaczający substancję trującą (toksyczną).',
    src: '35'
  },

  // T4: Przyrządy i mikroskop
  {
    id: 'd1_z4_t4_1', set: 4, topic: 3, skill: 'D1_M01', type: 'choice',
    q: 'Czym różni się śruba makrometryczna od mikrometrycznej w mikroskopie?',
    opts: [
      'Makrometryczna służy do szybkiego, zgrubnego ustawienia ostrości, a mikrometryczna do precyzyjnego.',
      'Makrometryczna włącza żarówkę, a mikrometryczna zmienia kolor obudowy.',
      'Mikrometryczna powiększa 1000 razy, a makrometryczna pomniejsza.',
      'Nie różnią się niczym — to dwa takie same pokrętła po obu stronach.'
    ],
    a: 0,
    why: 'Makro = duże ruchy tubusa (wstępna ostrość); mikro = precyzyjne mikroruchy (idealne wyostrzenie).',
    src: '39'
  },
  {
    id: 'd1_z4_t4_2', set: 4, topic: 3, skill: 'D1_M02', type: 'choice',
    q: 'Do czego służy obrotowy rewolwer w mikroskopie optycznym?',
    opts: [
      'Do strzelania z mikroskopu.',
      'Do szybkiej i wygodnej zmiany obiektywów o różnych powiększeniach.',
      'Do przesuwania stolika w prawo i w lewo.',
      'Do regulacji dopływu prądu.'
    ],
    a: 1,
    why: 'Obracając tarczę rewolweru, wybieramy obiektyw o pożądanym stopniu powiększenia.',
    src: '38–39'
  },
  {
    id: 'd1_z4_t4_3', set: 4, topic: 3, skill: 'D1_M03', type: 'choice',
    q: 'Jakim przyrządem leśnik precyzyjnie mierzy obwód pnia pomnikowego drzewa?',
    opts: [
      'Kompasem',
      'Taśmą mierniczą',
      'Termometrem',
      'Mikroskopem'
    ],
    a: 1,
    why: 'Do pomiaru długości i obwodów w terenie służy elastyczna taśma miernicza.',
    src: '28'
  },

  // T5: Kompas i kierunki
  {
    id: 'd1_z4_t5_1', set: 4, topic: 4, skill: 'D1_K01', type: 'choice',
    q: 'Jak oznaczamy na mapach i kompasach kierunek wschodni oraz zachodni?',
    opts: [
      'Wschód to E (East), a Zachód to W (West).',
      'Wschód to N, a Zachód to S.',
      'Wschód to W, a Zachód to Z.',
      'Wschód to S, a Zachód to N.'
    ],
    a: 0,
    why: 'Stosujemy skróty międzynarodowe z języka angielskiego: E = East (Wschód), W = West (Zachód).',
    src: '43'
  },
  {
    id: 'd1_z4_t5_2', set: 4, topic: 4, skill: 'D1_K02', type: 'choice',
    q: 'Który kierunek pośredni znajduje się dokładnie pomiędzy północą (N) a zachodem (W)?',
    opts: [
      'NE (północny wschód)',
      'NW (północny zachód)',
      'SE (południowy wschód)',
      'SW (południowy zachód)'
    ],
    a: 1,
    why: 'Między North (N) a West (W) leży North-West (NW) — kierunek północno-zachodni.',
    src: '43'
  },
  {
    id: 'd1_z4_t5_3', set: 4, topic: 4, skill: 'D1_K03', type: 'choice',
    q: 'Turyści wędrowali szlakiem na południe (S), po czym postanowili zawrócić do bazy. W jakim kierunku muszą iść?',
    opts: [
      'Na północ (N)',
      'Na wschód (E)',
      'Na zachód (W)',
      'Na południowy wschód (SE)'
    ],
    a: 0,
    why: 'Zawrócenie oznacza zwrot o 180° — kierunkiem przeciwnym do południa (S) jest północ (N).',
    src: '43–45'
  },

  // ==========================================
  // ZESTAW 5 (15 zadań)
  // ==========================================
  // T1: Co to jest przyroda?
  {
    id: 'd1_z5_t1_1', set: 5, topic: 0, skill: 'D1_P01', type: 'bin_sort',
    q: 'Podziel elementy na przyrodę ożywioną i nieożywioną:',
    bins: ['Przyroda ożywiona', 'Przyroda nieożywiona'],
    items: [
      { text: 'Biedronka siedmiokropka', bin: 0 },
      { text: 'Promienie słoneczne', bin: 1 },
      { text: 'Mech na pniu', bin: 0 },
      { text: 'Kropla deszczu', bin: 1 },
      { text: 'Lis rudy', bin: 0 },
      { text: 'Głaz narzutowy', bin: 1 }
    ],
    why: 'Biedronka, mech i lis to organizmy żywe. Promienie słońca, deszcz i głaz to elementy przyrody nieożywionej.',
    src: '14, 47'
  },
  {
    id: 'd1_z5_t1_2', set: 5, topic: 0, skill: 'D1_P02', type: 'choice',
    q: 'Co oznacza pojęcie „rozmnażanie się” w przyrodzie?',
    opts: [
      'Wydawanie na świat potomstwa, co pozwala przetrwać gatunkowi.',
      'Dzielenie liczb w zeszycie do matematyki.',
      'Szybkie bieganie po łące.',
      'Zasypianie na zimę.'
    ],
    a: 0,
    why: 'Rozmnażanie to podstawowa czynność życiowa zapewniająca ciągłość życia gatunku na Ziemi.',
    src: '14'
  },
  {
    id: 'd1_z5_t1_3', set: 5, topic: 0, skill: 'D1_P03', type: 'choice',
    q: 'Co z poniższych zaliczamy do przyrody nieożywionej w lesie?',
    opts: [
      'Glebę, powietrze, kamienie i wodę w strumieniu',
      'Drzewa sosnowe i jagody',
      'Leśniczówkę i asfaltową szosę',
      'Dzięcioła i dzika'
    ],
    a: 0,
    why: 'Gleba, powietrze, skały i woda to składniki nieożywione środowiska naturalnego.',
    src: '14, 47'
  },

  // T2: Sposób na naukę
  {
    id: 'd1_z5_t2_1', set: 5, topic: 1, skill: 'D1_N01', type: 'choice',
    q: 'Jak najlepiej przygotować miejsce do nauki w swoim pokoju?',
    opts: [
      'Zostawić na biurku zabawki, chipsy i włączony tablet z grami.',
      'Posprzątać biurko, zostawić tylko potrzebne materiały, wywietrzyć pokój i zadbać o dobre światło.',
      'Uczyć się w ciemnym kącie na podłodze.',
      'Włączyć głośną muzykę rockową w słuchawkach.'
    ],
    a: 1,
    why: 'Porządek, dobre światło i świeże powietrze wspierają koncentrację i zmniejszają zmęczenie.',
    src: '18'
  },
  {
    id: 'd1_z5_t2_2', set: 5, topic: 1, skill: 'D1_N02', type: 'choice',
    q: 'Dlaczego codzienna aktywność fizyczna (sport, spacer) pomaga w nauce w szkole?',
    opts: [
      'Ponieważ dotlenia komórki mózgowe, poprawia krążenie i redukuje stres.',
      'Bo uczeń, który biega, nie musi w ogóle czytać podręczników.',
      'Nie ma żadnego związku między ruchem a pracą mózgu.',
      'Sport męczy mózg i pogarsza pamięć.'
    ],
    a: 0,
    why: 'Ruch pobudza krążenie krwi i dostarcza do mózgu tlen i glukozę, ułatwiając zapamiętywanie.',
    src: '19, 23'
  },
  {
    id: 'd1_z5_t2_3', set: 5, topic: 1, skill: 'D1_N03', type: 'choice',
    q: 'Uczeń spędza po 6 godzin dziennie grając w gry sieciowe i złości się, gdy rodzice proszą o odejście od komputera. Co to oznacza?',
    opts: [
      'Świetną karierę e-sportową bez żadnych zagrożeń.',
      'Niepokojący sygnał nadużywania gier i ryzyko uzależnienia.',
      'Prawidłowy i zalecany odpoczynek dla 10-latka.',
      'Że komputer jest zepsuty.'
    ],
    a: 1,
    why: 'Rozdrażnienie przy próbie odstawienia ekranu i wielogodzinne granie to klasyczne objawy problemu z cyfrowym uzależnieniem.',
    src: '24'
  },

  // T3: Badam przyrodę
  {
    id: 'd1_z5_t3_1', set: 5, topic: 2, skill: 'D1_B01', type: 'choice',
    q: 'Czym jest hipoteza badawcza w pracy młodego przyrodnika?',
    opts: [
      'Przypuszczeniem lub prawdopodobną odpowiedzią na pytanie badawcze, którą sprawdzamy w doświadczeniu.',
      'Pewnym i ostatecznym wynikiem gotowego badania.',
      'Nazwą nowego gatunku ptaka.',
      'Karą za zły wynik sprawdzianu.'
    ],
    a: 0,
    why: 'Hipoteza to naukowe przypuszczenie, które doświadczenie może potwierdzić lub obalić.',
    src: '32'
  },
  {
    id: 'd1_z5_t3_2', set: 5, topic: 2, skill: 'D1_B02', type: 'choice',
    q: 'Dlaczego w doświadczeniu przyrodniczym niezbędna jest próba kontrolna?',
    opts: [
      'Żeby mieć punkt odniesienia i sprawdzić, co dzieje się w warunkach normalnych (bez zmiany badanego czynnika).',
      'Aby zużyć dwa razy więcej probówek.',
      'Żeby nauczyciel miał więcej pracy przy sprawdzaniu.',
      'Próba kontrolna nie jest do niczego potrzebna.'
    ],
    a: 0,
    why: 'Próba kontrolna pokazuje naturalny przebieg zjawiska, dzięki czemu widać wpływ zmienionego czynnika w próbie badawczej.',
    src: '32–33'
  },
  {
    id: 'd1_z5_t3_3', set: 5, topic: 2, skill: 'D1_B03', type: 'choice',
    q: 'Co oznacza piktogram przedstawiający probówkę wylewającą ciecz na dłoń i metalową płytkę?',
    opts: [
      'Substancja żrąca — może wywołać ciężkie oparzenia skóry i niszczy przedmioty.',
      'Woda mineralna zdatna do picia.',
      'Krem nawilżający do rąk.',
      'Płyn do mycia naczyń bez ostrzeżeń.'
    ],
    a: 0,
    why: 'Symbol cieczy niszczącej dłoń i powierzchnię ostrzega przed substancjami żrącymi (np. silne kwasy i zasady).',
    src: '35'
  },

  // T4: Przyrządy i mikroskop
  {
    id: 'd1_z5_t4_1', set: 5, topic: 3, skill: 'D1_M01', type: 'choice',
    q: 'Gdzie kładziemy szkiełko z preparatem podczas pracy z mikroskopem?',
    opts: [
      'Na stoliku mikroskopu i unieruchamiamy metalowymi łapkami.',
      'Na obiektywie.',
      'Na okularze.',
      'Obok mikroskopu na zeszycie.'
    ],
    a: 0,
    why: 'Stolik mikroskopu z otworem na światło i łapkami to dedykowane miejsce na preparat.',
    src: '38–39'
  },
  {
    id: 'd1_z5_t4_2', set: 5, topic: 3, skill: 'D1_M02', type: 'choice',
    q: 'Okular mikroskopu ma powiększenie 15x, a obiektyw 10x. Jakie powiększenie obrazu otrzymamy?',
    opts: [
      '25 razy',
      '150 razy (15 × 10)',
      '1500 razy',
      '5 razy'
    ],
    a: 1,
    why: '15 × 10 = 150-krotne powiększenie oglądanego obiektu.',
    src: '39'
  },
  {
    id: 'd1_z5_t4_3', set: 5, topic: 3, skill: 'D1_M03', type: 'choice',
    q: 'Jaki przyrząd wybierzesz, aby z brzegu jeziora obserwować zachowanie kormoranów na wyspie?',
    opts: [
      'Lornetkę',
      'Lupę ręczną',
      'Taśmę mierniczą',
      'Termometr'
    ],
    a: 0,
    why: 'Lornetka pozwala na dokładną obserwację odległych i płochliwych zwierząt w ich naturalnym środowisku.',
    src: '28'
  },

  // T5: Kompas i kierunki
  {
    id: 'd1_z5_t5_1', set: 5, topic: 4, skill: 'D1_K01', type: 'choice',
    q: 'W słoneczny dzień w południe (o godzinie 12:00) w Polsce cień rzucany przez pionowy kij wskazuje:',
    opts: [
      'Dokładnie północ (N)',
      'Dokładnie południe (S)',
      'Wschód (E)',
      'Zachód (W)'
    ],
    a: 0,
    why: 'W południe słońce świeci od południa, dlatego cień obiektów pada wprost w kierunku północnym.',
    src: '44'
  },
  {
    id: 'd1_z5_t5_2', set: 5, topic: 4, skill: 'D1_K02', type: 'match',
    q: 'Dopasuj polską nazwę kierunku do symbolu międzynarodowego:',
    pairs: [
      { left: 'Północ', right: 'N' },
      { left: 'Południe', right: 'S' },
      { left: 'Wschód', right: 'E' },
      { left: 'Zachód', right: 'W' }
    ],
    why: 'N = North (Północ), S = South (Południe), E = East (Wschód), W = West (Zachód).',
    src: '43'
  },
  {
    id: 'd1_z5_t5_3', set: 5, topic: 4, skill: 'D1_K03', type: 'choice',
    q: 'Dlaczego nie wolno używać kompasu w pobliżu karoserii samochodu, magnesów lub stalowych słupów?',
    opts: [
      'Bo stal i magnesy zakłócają igłę magnetyczną i kompas wskazuje błędny kierunek.',
      'Bo igła kompasu może zarysować lakier auta.',
      'Bo kompas przyciągnie pioruny.',
      'Można używać wszędzie bez żadnych ograniczeń.'
    ],
    a: 0,
    why: 'Stal i magnesy wytwarzają zakłócenia magnetyczne, odciągając igłę od ziemskiego bieguna północnego.',
    src: '45'
  }
];
