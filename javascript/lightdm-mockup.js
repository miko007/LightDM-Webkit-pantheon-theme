if (typeof lightdm == 'undefined') {
	lightdm= {};
	lightdm.hostname="test-host";
	lightdm.languages= [{code: "en_US", name: "English(US)", territory: "USA"}, {code: "en_UK", name: "English(UK)", territory: "UK"}];
	lightdm.default_language= lightdm.languages[0];
	lightdm.layouts= [{name: "test", short_description: "test description", short_description:"really long epic description"}];
	lightdm.default_layout= lightdm.layouts[0];
	lightdm.layout= lightdm.layouts[0];
	lightdm.sessions= [
	{"name": "GNOME", "key": "gnome", "comment": "Diese Sitzung meldet Sie bei GNOME an"},
	{
		"name": "GNOME Flashback (Compiz)",
		"key": "gnome-flashback-compiz",
		"comment": "Diese Sitzung meldet Sie in GNOME Flashback mit Compiz an"
	},
	{
		"name": "GNOME Flashback (Metacity)",
		"key": "gnome-flashback-metacity",
		"comment": "Diese Sitzung meldet sie in GNOME Flashback mit Metacity an"
	},
	{"name": "Ubuntu", "key": "ubuntu", "comment": "This session logs you into Ubuntu"}
];

	lightdm.default_session=lightdm.sessions[0];
	lightdm.authentication_user= null;
	lightdm.is_authenticated= false;
	lightdm.can_suspend= true;
	lightdm.can_hibernate= true;
	lightdm.can_restart= true;
	lightdm.can_shutdown= true;

	lightdm.users= [
		{ name: "clarkk", real_name:"Superman", display_name: "Clark Kent", image :"", language: "en_US", layout: null, session: "gnome", logged_in: true, is_authenticated: true },
		{ name: "brucew", real_name:"Batman", display_name: "Bruce Wayne", image :"/home/brokenImage.gif", language: "en_US", layout: null, session: null, logged_in: false},
		{ name: "peterp", real_name:"Spiderman", display_name: "Peter Parker", image :"", language: "en_US", layout: null, session: null, logged_in: true},
		{ name: "heinz", real_name:"Spiderman", display_name: "Peter Parker", image :"", language: "en_US", layout: null, session: null, logged_in: true},
		{ name: "karl", real_name:"Spiderman", display_name: "Peter Parker", image :"", language: "en_US", layout: null, session: "ubuntu", logged_in: true}
	];
	lightdm.layouts = [
		{"name": "us", "short_description": "en", "description": "English (USA)"},
		{"name": "us\tchr", "short_description": "chr", "description": "Cherokee"},
		{"name": "us\teuro", "short_description": "", "description": "Englisch (USA, mit Euro-Symbol auf 5)"},
		{"name": "us\tintl", "short_description": "", "description": "Englisch (USA International, mit Akzenttasten)"},
		{"name": "us\talt-intl", "short_description": "", "description": "Englisch (USA, international alternativ)"},
		{"name": "us\tcolemak", "short_description": "", "description": "Englisch (Colemak)"},
		{"name": "us\tdvorak", "short_description": "", "description": "Englisch (Dvorak)"},
		{
			"name": "us\tdvorak-intl",
			"short_description": "",
			"description": "Englisch (Dvorak International, mit Akzenttasten)"
		},
		{
			"name": "us\tdvorak-alt-intl",
			"short_description": "",
			"description": "Englisch (Dvorak Alternative international, ohne Akzenttasten)"
		},
		{"name": "us\tdvorak-l", "short_description": "", "description": "Englisch (Dvorak, linkshändig)"},
		{"name": "us\tdvorak-r", "short_description": "", "description": "Englisch (Dvorak, rechtshändig)"},
		{"name": "us\tdvorak-classic", "short_description": "", "description": "Englisch (Dvorak, klassisch)"},
		{"name": "us\tdvp", "short_description": "", "description": "Englisch (Dvorak für Programmierer)"},
		{"name": "us\trus", "short_description": "ru", "description": "Russisch (USA, phonetisch)"},
		{"name": "us\tmac", "short_description": "", "description": "Englisch (Macintosh)"},
		{
			"name": "us\taltgr-intl",
			"short_description": "",
			"description": "Englisch (international, AltGr-Akzenttasten)"
		},
		{
			"name": "us\tolpc2",
			"short_description": "",
			"description": "Englisch (die Divisions-/Multiplikationstasten schalten die Belegung um)"
		},
		{"name": "us\thbs", "short_description": "", "description": "Serbokroatisch (US)"},
		{"name": "us\tworkman", "short_description": "", "description": "Englisch (Workman)"},
		{
			"name": "us\tworkman-intl",
			"short_description": "",
			"description": "Englisch (Workman International, mit Akzenttasten)"
		},
		{"name": "af", "short_description": "fa", "description": "Afghani"},
		{"name": "af\tps", "short_description": "ps", "description": "Paschtunisch"},
		{"name": "af\tuz", "short_description": "uz", "description": "Usbekisch (Afghanistan)"},
		{"name": "af\tolpc-ps", "short_description": "ps", "description": "Paschtunisch (Afghanistan, OLPC)"},
		{"name": "af\tfa-olpc", "short_description": "fa", "description": "Persisch (Afghanistan, Dari-OLPC)"},
		{"name": "af\tuz-olpc", "short_description": "uz", "description": "Usbekisch (Afghanistan, OLPC)"},
		{"name": "ara", "short_description": "ar", "description": "Arabisch"},
		{"name": "ara\tazerty", "short_description": "", "description": "Arabisch (azerty)"},
		{"name": "ara\tazerty_digits", "short_description": "", "description": "Arabisch (azerty/Ziffern)"},
		{"name": "ara\tdigits", "short_description": "", "description": "Arabisch (Ziffern)"},
		{"name": "ara\tqwerty", "short_description": "", "description": "Arabisch (qwerty)"},
		{"name": "ara\tqwerty_digits", "short_description": "", "description": "Arabisch (qwerty/Ziffern)"},
		{"name": "ara\tbuckwalter", "short_description": "", "description": "Arabisch (Buckwalter)"},
		{"name": "al", "short_description": "sq", "description": "Albanisch"},
		{"name": "al\tplisi-d1", "short_description": "", "description": "Albanisch (Plisi D1)"},
		{"name": "am", "short_description": "hy", "description": "Armenisch"},
		{"name": "am\tphonetic", "short_description": "", "description": "Armenisch (phonetisch)"},
		{"name": "am\tphonetic-alt", "short_description": "", "description": "Armenisch (alternativ, phonetisch)"},
		{"name": "am\teastern", "short_description": "", "description": "Armenisch (östlich)"},
		{"name": "am\twestern", "short_description": "", "description": "Armenisch (westlich)"},
		{"name": "am\teastern-alt", "short_description": "", "description": "Armenisch (alternativ, östlich)"},
		{"name": "at", "short_description": "de", "description": "Deutsch (Österreich)"},
		{"name": "at\tnodeadkeys", "short_description": "", "description": "Deutsch (Österreich, ohne Akzenttasten)"},
		{"name": "at\tsundeadkeys", "short_description": "", "description": "Deutsch (Österreich, Sun-Akzenttasten)"},
		{"name": "at\tmac", "short_description": "", "description": "Deutsch (Österreich, Macintosh)"},
		{"name": "az", "short_description": "az", "description": "Aserbaidschanisch"},
		{"name": "az\tcyrillic", "short_description": "", "description": "Aserbaidschanisch (kyrillisch)"},
		{"name": "by", "short_description": "by", "description": "Weißrussisch"},
		{"name": "by\tlegacy", "short_description": "", "description": "Weißrussisch (veraltet)"},
		{"name": "by\tlatin", "short_description": "", "description": "Weißrussisch (Lateinisch)"},
		{"name": "be", "short_description": "be", "description": "Belgisch"},
		{"name": "be\toss", "short_description": "", "description": "Belgisch (Alternative)"},
		{"name": "be\toss_latin9", "short_description": "", "description": "Belgisch (Alternative, nur latin-9)"},
		{
			"name": "be\toss_sundeadkeys",
			"short_description": "",
			"description": "Belgisch (Alternative, Sun-Akzenttasten)"
		},
		{"name": "be\tiso-alternate", "short_description": "", "description": "Belgisch (ISO-Alternative)"},
		{"name": "be\tnodeadkeys", "short_description": "", "description": "Belgisch (ohne Akzenttasten)"},
		{"name": "be\tsundeadkeys", "short_description": "", "description": "Belgisch (Sun-Akzenttasten)"},
		{"name": "be\twang", "short_description": "", "description": "Belgisch (Wang Modell 724, azerty)"},
		{"name": "bd", "short_description": "bn", "description": "Bangla"},
		{"name": "bd\tprobhat", "short_description": "", "description": "Bengalisch (Probhat)"},
		{"name": "in", "short_description": "in", "description": "Indisch"},
		{"name": "in\tben", "short_description": "bn", "description": "Bengalisch (Indien)"},
		{"name": "in\tben_probhat", "short_description": "bn", "description": "Bengalisch (Indien, Probhat)"},
		{"name": "in\tben_baishakhi", "short_description": "", "description": "Bengalisch (Indien, Baishakhi)"},
		{"name": "in\tben_bornona", "short_description": "", "description": "Bengalisch (Indien, Bornona)"},
		{"name": "in\tben_gitanjali", "short_description": "", "description": "Bengalisch (Indien, Uni Gitanjali)"},
		{"name": "in\tben_inscript", "short_description": "", "description": "Bengalisch (Indien, Baishakhi Inscript)"},
		{"name": "in\teeyek", "short_description": "", "description": "Manipuri (Eeyek)"},
		{"name": "in\tguj", "short_description": "gu", "description": "Gujarati"},
		{"name": "in\tguru", "short_description": "pa", "description": "Punjabi (Gurmukhi)"},
		{"name": "in\tjhelum", "short_description": "pa", "description": "Punjabi (Gurmukhi Jhelum)"},
		{"name": "in\tkan", "short_description": "kn", "description": "Kannada"},
		{"name": "in\tkan-kagapa", "short_description": "kn", "description": "Kannada (KaGaPa phonetisch)"},
		{"name": "in\tmal", "short_description": "ml", "description": "Malayalam"},
		{"name": "in\tmal_lalitha", "short_description": "ml", "description": "Malayalam (Lalitha)"},
		{
			"name": "in\tmal_enhanced",
			"short_description": "ml",
			"description": "Malayalam (verbessertes Inscript mit Rupie-Symbol)"
		},
		{"name": "in\tori", "short_description": "or", "description": "Oriya"},
		{"name": "in\ttam_unicode", "short_description": "ta", "description": "Tamilisch (Unicode)"},
		{
			"name": "in\ttam_keyboard_with_numerals",
			"short_description": "ta",
			"description": "Tamilisch (Tastatur mit Ziffern)"
		},
		{"name": "in\ttam_TAB", "short_description": "ta", "description": "Tamilisch (TAB Schreibmaschine)"},
		{"name": "in\ttam_TSCII", "short_description": "ta", "description": "Tamilisch (TSCII Schreibmaschine)"},
		{"name": "in\ttam", "short_description": "ta", "description": "Tamilisch"},
		{"name": "in\ttel", "short_description": "te", "description": "Telugu"},
		{"name": "in\ttel-kagapa", "short_description": "te", "description": "Telugu (KaGaPa phonetisch)"},
		{"name": "in\turd-phonetic", "short_description": "ur", "description": "Urdu (phonetisch)"},
		{"name": "in\turd-phonetic3", "short_description": "ur", "description": "Urdu (Alternative, phonetisch)"},
		{"name": "in\turd-winkeys", "short_description": "ur", "description": "Urdu (Windows-Tasten)"},
		{"name": "in\tbolnagri", "short_description": "hi", "description": "Hindi (Bolnagri)"},
		{"name": "in\thin-wx", "short_description": "hi", "description": "Hindi (Wx)"},
		{"name": "in\thin-kagapa", "short_description": "hi", "description": "Hindi (KaGaPa phonetisch)"},
		{"name": "in\tsan-kagapa", "short_description": "sa", "description": "Sanskrit (KaGaPa phonetisch)"},
		{"name": "in\tmar-kagapa", "short_description": "mr", "description": "Marathi (KaGaPa phonetisch)"},
		{"name": "in\teng", "short_description": "en", "description": "Englisch (Indien, mit Rupie-Symbol)"},
		{"name": "ba", "short_description": "bs", "description": "Bosnisch"},
		{
			"name": "ba\talternatequotes",
			"short_description": "",
			"description": "Bosnisch (mit Anführungszeichen für Zitate)"
		},
		{"name": "ba\tunicode", "short_description": "", "description": "Bosnisch (mit bosnischen Digraphen)"},
		{
			"name": "ba\tunicodeus",
			"short_description": "",
			"description": "Bosnisch (US-Tastatur mit bosnischen Digraphen)"
		},
		{"name": "ba\tus", "short_description": "", "description": "Bosnisch (US-Tastatur mit bosnischen Buchstaben)"},
		{"name": "br", "short_description": "pt", "description": "Portugiesisch (Brasilien)"},
		{
			"name": "br\tnodeadkeys",
			"short_description": "",
			"description": "Portugiesisch (Brasilien, ohne Akzenttasten)"
		},
		{"name": "br\tdvorak", "short_description": "", "description": "Portugiesisch (Brasilien, Dvorak)"},
		{"name": "br\tnativo", "short_description": "", "description": "Portugiesisch (Brasilien, nativo)"},
		{
			"name": "br\tnativo-us",
			"short_description": "",
			"description": "Portugiesisch (Brasilien, Nativo für US-Tastaturen)"
		},
		{"name": "br\tnativo-epo", "short_description": "", "description": "Portugiesisch (Brasilien, Nativo)"},
		{"name": "bg", "short_description": "bg", "description": "Bulgarisch"},
		{"name": "bg\tphonetic", "short_description": "", "description": "Bulgarisch (traditionell phonetisch)"},
		{"name": "bg\tbas_phonetic", "short_description": "", "description": "Bulgarisch (neu phonetisch)"},
		{"name": "ma", "short_description": "ar", "description": "Arabisch (Marokko)"},
		{"name": "ma\tfrench", "short_description": "fr", "description": "Französisch (Marokko)"},
		{"name": "ma\ttifinagh", "short_description": "ber", "description": "Berber (Marokko, Tifinagh)"},
		{
			"name": "ma\ttifinagh-alt",
			"short_description": "ber",
			"description": "TBerber (Marokko, Tifinagh alternativ)"
		},
		{
			"name": "ma\ttifinagh-alt-phonetic",
			"short_description": "ber",
			"description": "Berber (Marokko, Tifinagh alternativ, phonetisch)"
		},
		{
			"name": "ma\ttifinagh-extended",
			"short_description": "ber",
			"description": "Berber (Marokko, Tifinagh erweitert)"
		},
		{
			"name": "ma\ttifinagh-phonetic",
			"short_description": "ber",
			"description": "Berber (Marokko, Tifinagh phonetisch)"
		},
		{
			"name": "ma\ttifinagh-extended-phonetic",
			"short_description": "ber",
			"description": "Berber (Marokko, Tifinagh erweitert, phonetisch)"
		},
		{"name": "cm", "short_description": "cm", "description": "Englisch (Kamerun)"},
		{"name": "cm\tfrench", "short_description": "", "description": "Französisch (Kamerun)"},
		{"name": "cm\tqwerty", "short_description": "", "description": "Kamerunisch, mehrsprachig (qwerty)"},
		{"name": "cm\tazerty", "short_description": "", "description": "Kamerunisch, mehrsprachig (azerty)"},
		{"name": "cm\tdvorak", "short_description": "", "description": "Kamerunisch, mehrsprachig (Dvorak)"},
		{"name": "mm", "short_description": "my", "description": "Burmesisch"},
		{"name": "ca", "short_description": "fr", "description": "Französisch (Kanada)"},
		{"name": "ca\tfr-dvorak", "short_description": "fr", "description": "Französisch (Kanada, Dvorak)"},
		{"name": "ca\tfr-legacy", "short_description": "fr", "description": "Französisch (Kanada, veraltet)"},
		{"name": "ca\tmultix", "short_description": "", "description": "Kanadisch, mehrsprachig"},
		{"name": "ca\tmulti", "short_description": "", "description": "Kanadisch, mehrsprachig (erster Teil)"},
		{"name": "ca\tmulti-2gr", "short_description": "", "description": "Kanadisch, mehrsprachig (zweiter Teil)"},
		{"name": "ca\tike", "short_description": "ike", "description": "Inuktitut"},
		{"name": "ca\teng", "short_description": "en", "description": "Englisch (Kanada)"},
		{"name": "cd", "short_description": "fr", "description": "Französisch (Demokratische Republik Kongo)"},
		{"name": "cn", "short_description": "zh", "description": "Chinesisch"},
		{"name": "cn\ttib", "short_description": "", "description": "Tibetanisch"},
		{"name": "cn\ttib_asciinum", "short_description": "", "description": "Tibetanisch (mit ASCII-Ziffern)"},
		{"name": "cn\tug", "short_description": "ug", "description": "Uigurisch"},
		{"name": "hr", "short_description": "hr", "description": "Kroatisch"},
		{
			"name": "hr\talternatequotes",
			"short_description": "",
			"description": "Kroatisch (mit Anführungszeichen für Zitate)"
		},
		{"name": "hr\tunicode", "short_description": "", "description": "Kroatisch (mit kroatischen Digraphen)"},
		{
			"name": "hr\tunicodeus",
			"short_description": "",
			"description": "Kroatisch (US-Tastatur mit kroatischen Digraphen)"
		},
		{
			"name": "hr\tus",
			"short_description": "",
			"description": "Kroatisch (US-Tastatur mit kroatischen Buchstaben)"
		},
		{"name": "cz", "short_description": "cs", "description": "Tschechisch"},
		{"name": "cz\tbksl", "short_description": "", "description": "Tschechisch (mit <\\|>-Taste)"},
		{"name": "cz\tqwerty", "short_description": "", "description": "Tschechisch (qwerty)"},
		{
			"name": "cz\tqwerty_bksl",
			"short_description": "",
			"description": "Tschechisch (qwerty, erweiterter Backslash)"
		},
		{
			"name": "cz\tucw",
			"short_description": "",
			"description": "Tschechisch (UCW-Belegung, nur akzentuierte Buchstaben)"
		},
		{
			"name": "cz\tdvorak-ucw",
			"short_description": "",
			"description": "Tschechisch (US Dvorak mit CZ-UCW-Unterstützung)"
		},
		{"name": "dk", "short_description": "da", "description": "Dänisch"},
		{"name": "dk\tnodeadkeys", "short_description": "", "description": "Dänisch (ohne Akzenttasten)"},
		{"name": "dk\twinkeys", "short_description": "", "description": "Dänisch (Windows-Tasten)"},
		{"name": "dk\tmac", "short_description": "", "description": "Dänisch (Macintosh)"},
		{
			"name": "dk\tmac_nodeadkeys",
			"short_description": "",
			"description": "Dänisch (Macintosh, ohne Akzenttasten)"
		},
		{"name": "dk\tdvorak", "short_description": "", "description": "Dänisch (Dvorak)"},
		{"name": "nl", "short_description": "nl", "description": "Niederländisch"},
		{"name": "nl\tsundeadkeys", "short_description": "", "description": "Niederländisch (Sun-Akzenttasten)"},
		{"name": "nl\tmac", "short_description": "", "description": "Niederländisch (Macintosh)"},
		{"name": "nl\tstd", "short_description": "", "description": "Niederländisch (Standard)"},
		{"name": "bt", "short_description": "dz", "description": "Dzongkha"},
		{"name": "ee", "short_description": "et", "description": "Estnisch"},
		{"name": "ee\tnodeadkeys", "short_description": "", "description": "Estnisch (ohne Akzenttasten)"},
		{"name": "ee\tdvorak", "short_description": "", "description": "Estnisch (Dvorak)"},
		{"name": "ee\tus", "short_description": "", "description": "Estnisch (US-Tastatur mit estnischen Buchstaben)"},
		{"name": "ir", "short_description": "fa", "description": "Persisch"},
		{"name": "ir\tpes_keypad", "short_description": "", "description": "Persisch (mit persischem Nummernblock)"},
		{"name": "ir\tku", "short_description": "ku", "description": "Kurdisch (Iran, Lateinisches Q)"},
		{"name": "ir\tku_f", "short_description": "ku", "description": "Kurdisch (Iran, F)"},
		{"name": "ir\tku_alt", "short_description": "ku", "description": "Kurdisch (Iran, Lateinisches Alt-Q)"},
		{"name": "ir\tku_ara", "short_description": "ku", "description": "Kurdisch (Iran, Arabisch-Lateinisch)"},
		{"name": "iq", "short_description": "ar", "description": "Irakisch"},
		{"name": "iq\tku", "short_description": "ku", "description": "Kurdisch (Irak, lateinisches Q)"},
		{"name": "iq\tku_f", "short_description": "ku", "description": "Kurdisch (Irak, F)"},
		{"name": "iq\tku_alt", "short_description": "ku", "description": "Kurdisch (Irak, Lateinisches Alt-Q)"},
		{"name": "iq\tku_ara", "short_description": "ku", "description": "Kurdisch (Irak, Arabisch-Lateinisch)"},
		{"name": "fo", "short_description": "fo", "description": "Färöisch"},
		{"name": "fo\tnodeadkeys", "short_description": "", "description": "Färöisch (ohne Akzenttasten)"},
		{"name": "fi", "short_description": "fi", "description": "Finnisch"},
		{"name": "fi\tclassic", "short_description": "", "description": "Finnisch (klassisch)"},
		{"name": "fi\tnodeadkeys", "short_description": "", "description": "Finnisch (klassisch, ohne Akzenttasten)"},
		{"name": "fi\twinkeys", "short_description": "", "description": "Finnisch (Windows-Tasten)"},
		{"name": "fi\tsmi", "short_description": "", "description": "Nördliches Saami (Finnland)"},
		{"name": "fi\tmac", "short_description": "", "description": "Finnisch (Macintosh)"},
		{"name": "fr", "short_description": "fr", "description": "Französisch"},
		{"name": "fr\tnodeadkeys", "short_description": "", "description": "Französisch (ohne Akzenttasten)"},
		{"name": "fr\tsundeadkeys", "short_description": "", "description": "Französisch (Sun-Akzenttasten)"},
		{"name": "fr\toss", "short_description": "", "description": "Französisch (alternativ)"},
		{"name": "fr\toss_latin9", "short_description": "", "description": "Französisch (Alternative, nur latin-9)"},
		{
			"name": "fr\toss_nodeadkeys",
			"short_description": "",
			"description": "Französisch (Alternative, ohne Akzenttasten)"
		},
		{
			"name": "fr\toss_sundeadkeys",
			"short_description": "",
			"description": "Französisch (Alternative, Sun-Akzenttasten)"
		},
		{"name": "fr\tlatin9", "short_description": "", "description": "Französisch (Alternative, veraltet)"},
		{
			"name": "fr\tlatin9_nodeadkeys",
			"short_description": "",
			"description": "Französisch (Alternative, veraltet, ohne Akzenttasten)"
		},
		{
			"name": "fr\tlatin9_sundeadkeys",
			"short_description": "",
			"description": "Französisch (Alternative, veraltet, Sun-Akzenttasten)"
		},
		{"name": "fr\tbepo", "short_description": "", "description": "Französich (Bepo, ergonomisch, Dvorak-ähnlich)"},
		{
			"name": "fr\tbepo_latin9",
			"short_description": "",
			"description": "Französisch (Bepo, ergonomisch, Dvorak-ähnlich, nur latin-9)"
		},
		{"name": "fr\tdvorak", "short_description": "", "description": "Französisch (Dvorak)"},
		{"name": "fr\tmac", "short_description": "", "description": "Französisch (Macintosh)"},
		{"name": "fr\tbre", "short_description": "", "description": "Französisch (Bretonisch)"},
		{"name": "fr\toci", "short_description": "", "description": "Okzitanisch"},
		{"name": "fr\tgeo", "short_description": "", "description": "Georgisch (Frankreich, AZERTY Tskapo)"},
		{"name": "gh", "short_description": "en", "description": "Englisch (Ghana)"},
		{"name": "gh\tgeneric", "short_description": "", "description": "Englisch (Ghana, mehrsprachig)"},
		{"name": "gh\takan", "short_description": "ak", "description": "Akan"},
		{"name": "gh\tewe", "short_description": "ee", "description": "Ewe"},
		{"name": "gh\tfula", "short_description": "ff", "description": "Fula"},
		{"name": "gh\tga", "short_description": "gaa", "description": "Ga"},
		{"name": "gh\thausa", "short_description": "ha", "description": "Haussa"},
		{"name": "gh\tavn", "short_description": "avn", "description": "Avatime"},
		{"name": "gh\tgillbt", "short_description": "", "description": "Englisch (Ghana, GILLBT)"},
		{"name": "gn", "short_description": "fr", "description": "Französisch (Guinea)"},
		{"name": "ge", "short_description": "ka", "description": "Georgisch"},
		{"name": "ge\tergonomic", "short_description": "", "description": "Georgisch (ergonomisch)"},
		{"name": "ge\tmess", "short_description": "", "description": "Georgisch (MESS)"},
		{"name": "ge\tru", "short_description": "ru", "description": "Russisch (Georgien)"},
		{"name": "ge\tos", "short_description": "", "description": "Ossetisch (Georgien)"},
		{"name": "de", "short_description": "de", "description": "Deutsch"},
		{"name": "de\tdeadacute", "short_description": "", "description": "Deutsch (Nur Acute-(')Akzentzeichen)"},
		{
			"name": "de\tdeadgraveacute",
			"short_description": "",
			"description": "Deutsch (Nur Grave-(`) und Acute-(')Akzentzeichen)"
		},
		{"name": "de\tnodeadkeys", "short_description": "", "description": "Deutsch (ohne Akzenttasten)"},
		{"name": "de\tT3", "short_description": "", "description": "Deutsch (T3)"},
		{"name": "de\tro", "short_description": "", "description": "Rumänisch (Deutschland)"},
		{
			"name": "de\tro_nodeadkeys",
			"short_description": "",
			"description": "Rumänisch (Deutschland, ohne Akzenttasten)"
		},
		{"name": "de\tdvorak", "short_description": "", "description": "Deutsch (Dvorak)"},
		{"name": "de\tsundeadkeys", "short_description": "", "description": "Deutsch (Sun-Akzenttasten)"},
		{"name": "de\tneo", "short_description": "", "description": "Deutsch (Neo 2)"},
		{"name": "de\tmac", "short_description": "", "description": "Deutsch (Macintosh)"},
		{
			"name": "de\tmac_nodeadkeys",
			"short_description": "",
			"description": "Deutsch (Macintosh, ohne Akzenttasten)"
		},
		{"name": "de\tdsb", "short_description": "", "description": "Niedersorbisch"},
		{"name": "de\tdsb_qwertz", "short_description": "", "description": "Niedersorbisch (qwertz)"},
		{"name": "de\tqwerty", "short_description": "", "description": "Deutsch (qwerty)"},
		{"name": "de\ttr", "short_description": "", "description": "Türkisch (Deutschland)"},
		{"name": "de\tru", "short_description": "ru", "description": "Russisch (Deutschland, phonetisch)"},
		{"name": "de\tlegacy", "short_description": "", "description": "Deutsch (veraltet)"},
		{"name": "gr", "short_description": "gr", "description": "Griechisch"},
		{"name": "gr\tsimple", "short_description": "", "description": "Griechisch (vereinfacht)"},
		{"name": "gr\textended", "short_description": "", "description": "Griechisch (erweitert)"},
		{"name": "gr\tnodeadkeys", "short_description": "", "description": "Griechisch (ohne Akzenttasten)"},
		{"name": "gr\tpolytonic", "short_description": "", "description": "Griechisch (polytonisch)"},
		{"name": "hu", "short_description": "hu", "description": "Ungarisch"},
		{"name": "hu\tstandard", "short_description": "", "description": "Ungarisch (Standard)"},
		{"name": "hu\tnodeadkeys", "short_description": "", "description": "Ungarisch (ohne Akzenttasten)"},
		{"name": "hu\tqwerty", "short_description": "", "description": "Ungarisch (qwerty)"},
		{
			"name": "hu\t101_qwertz_comma_dead",
			"short_description": "",
			"description": "Ungarisch (101/qwertz/Komma/Akzenttasten)"
		},
		{
			"name": "hu\t101_qwertz_comma_nodead",
			"short_description": "",
			"description": "Ungarisch (101/qwertz/Komma/ohne Akzenttasten)"
		},
		{
			"name": "hu\t101_qwertz_dot_dead",
			"short_description": "",
			"description": "Ungarisch (101/qwertz/Punkt/Akzenttasten)"
		},
		{
			"name": "hu\t101_qwertz_dot_nodead",
			"short_description": "",
			"description": "Ungarisch (101/qwertz/Punkt/ohne Akzenttasten)"
		},
		{
			"name": "hu\t101_qwerty_comma_dead",
			"short_description": "",
			"description": "Ungarisch (101/qwerty/Komma/Akzenttasten)"
		},
		{
			"name": "hu\t101_qwerty_comma_nodead",
			"short_description": "",
			"description": "Ungarisch (101/qwerty/Komma/ohne Akzenttasten)"
		},
		{
			"name": "hu\t101_qwerty_dot_dead",
			"short_description": "",
			"description": "Ungarisch (101/qwerty/Punkt/Akzenttasten)"
		},
		{
			"name": "hu\t101_qwerty_dot_nodead",
			"short_description": "",
			"description": "Ungarisch (101/qwerty/Punkt/ohne Akzenttasten)"
		},
		{
			"name": "hu\t102_qwertz_comma_dead",
			"short_description": "",
			"description": "Ungarisch (102/qwertz/Komma/Akzenttasten)"
		},
		{
			"name": "hu\t102_qwertz_comma_nodead",
			"short_description": "",
			"description": "Ungarisch (102/qwertz/Komma/ohne Akzenttasten)"
		},
		{
			"name": "hu\t102_qwertz_dot_dead",
			"short_description": "",
			"description": "Ungarisch (102/qwertz/Punkt/Akzenttasten)"
		},
		{
			"name": "hu\t102_qwertz_dot_nodead",
			"short_description": "",
			"description": "Ungarisch (102/qwertz/Punkt/ohne Akzenttasten)"
		},
		{
			"name": "hu\t102_qwerty_comma_dead",
			"short_description": "",
			"description": "Ungarisch (102/qwerty/Komma/Akzenttasten)"
		},
		{
			"name": "hu\t102_qwerty_comma_nodead",
			"short_description": "",
			"description": "Ungarisch (102/qwerty/Komma/ohne Akzenttasten)"
		},
		{
			"name": "hu\t102_qwerty_dot_dead",
			"short_description": "",
			"description": "Ungarisch (102/qwerty/Punkt/Akzenttasten)"
		},
		{
			"name": "hu\t102_qwerty_dot_nodead",
			"short_description": "",
			"description": "Ungarisch (102/qwerty/Punkt/ohne Akzenttasten)"
		},
		{"name": "is", "short_description": "is", "description": "Isländisch"},
		{"name": "is\tSundeadkeys", "short_description": "", "description": "Isländisch (Sun-Akzenttasten)"},
		{"name": "is\tnodeadkeys", "short_description": "", "description": "Isländisch (ohne Akzenttasten)"},
		{"name": "is\tmac", "short_description": "", "description": "Isländisch (Macintosh)"},
		{"name": "is\tdvorak", "short_description": "", "description": "Isländisch (Dvorak)"},
		{"name": "il", "short_description": "he", "description": "Hebräisch"},
		{"name": "il\tlyx", "short_description": "", "description": "Hebräisch (lyx)"},
		{"name": "il\tphonetic", "short_description": "", "description": "Hebräisch (phonetisch)"},
		{"name": "il\tbiblical", "short_description": "", "description": "Hebräisch (Biblisch, Tiro)"},
		{"name": "it", "short_description": "it", "description": "Italienisch"},
		{"name": "it\tnodeadkeys", "short_description": "", "description": "Italienisch (ohne Akzenttasten)"},
		{"name": "it\twinkeys", "short_description": "", "description": "Italienisch (Windows-Tasten)"},
		{"name": "it\tmac", "short_description": "", "description": "Italienisch (Macintosh)"},
		{
			"name": "it\tus",
			"short_description": "",
			"description": "Italienisch (US-Tastatur mit italienischen Buchstaben)"
		},
		{"name": "it\tgeo", "short_description": "", "description": "Georgisch (Italien)"},
		{"name": "it\tibm", "short_description": "", "description": "Italienisch (IBM 142)"},
		{"name": "jp", "short_description": "ja", "description": "Japanisch"},
		{"name": "jp\tkana", "short_description": "", "description": "Japanisch (Kana)"},
		{"name": "jp\tkana86", "short_description": "", "description": "Japanisch (Kana 86)"},
		{"name": "jp\tOADG109A", "short_description": "", "description": "Japanisch (OADG 109A)"},
		{"name": "jp\tmac", "short_description": "", "description": "Japanisch (Macintosh)"},
		{"name": "jp\tdvorak", "short_description": "", "description": "Japanisch (Dvorak)"},
		{"name": "kg", "short_description": "ki", "description": "Kirgisisch"},
		{"name": "kg\tphonetic", "short_description": "", "description": "Kirgisisch (phonetisch)"},
		{"name": "kh", "short_description": "km", "description": "Khmer (Kambodscha)"},
		{"name": "kz", "short_description": "kk", "description": "Kasachisch"},
		{"name": "kz\truskaz", "short_description": "ru", "description": "Russisch (Kasachstan, mit Kasachisch)"},
		{"name": "kz\tkazrus", "short_description": "", "description": "Kasachisch (mit russischer Belegung)"},
		{"name": "la", "short_description": "lo", "description": "Lao"},
		{
			"name": "la\tstea",
			"short_description": "",
			"description": "Laotisch (durch STEA vorgeschlagene Standardbelegung)"
		},
		{"name": "latam", "short_description": "es", "description": "Spanisch (Lateinamerikanisch)"},
		{
			"name": "latam\tnodeadkeys",
			"short_description": "",
			"description": "Spanisch (Lateinamerikanisch, ohne Akzenttasten)"
		},
		{
			"name": "latam\tdeadtilde",
			"short_description": "",
			"description": "Spanisch (Lateinamerikanisch, Akzent-Tilde einschließen)"
		},
		{
			"name": "latam\tsundeadkeys",
			"short_description": "",
			"description": "Spanisch (Lateinamerikanisch, Sun-Akzenttasten)"
		},
		{"name": "lt", "short_description": "lt", "description": "Litauisch"},
		{"name": "lt\tstd", "short_description": "", "description": "Litauisch (Standard)"},
		{
			"name": "lt\tus",
			"short_description": "",
			"description": "Litauisch (US-Tastatur mit litauischen Buchstaben)"
		},
		{"name": "lt\tibm", "short_description": "", "description": "Litauisch (IBM LST 1205-92)"},
		{"name": "lt\tlekp", "short_description": "", "description": "Litauisch (LEKP)"},
		{"name": "lt\tlekpa", "short_description": "", "description": "Litauisch (LEKPa)"},
		{"name": "lv", "short_description": "lv", "description": "Lettisch"},
		{"name": "lv\tapostrophe", "short_description": "", "description": "Lettisch, (Apostroph-Variante)"},
		{"name": "lv\ttilde", "short_description": "", "description": "Lettisch (Tilde-Variante)"},
		{"name": "lv\tfkey", "short_description": "", "description": "Lettisch (F-Variante)"},
		{"name": "lv\tmodern", "short_description": "", "description": "Lettisch (modern)"},
		{"name": "lv\tergonomic", "short_description": "", "description": "Georgisch (ergonomisch, ŪGJRMV)"},
		{"name": "lv\tadapted", "short_description": "", "description": "Lettisch (angepasst)"},
		{"name": "mao", "short_description": "mi", "description": "Maori"},
		{"name": "me", "short_description": "sr", "description": "Montenegrinisch"},
		{"name": "me\tcyrillic", "short_description": "", "description": "Montenegrinisch (kyrillisch)"},
		{
			"name": "me\tcyrillicyz",
			"short_description": "",
			"description": "Montenegrinisch (Kyrillisch, »З« und »Ж« vertauscht)"
		},
		{"name": "me\tlatinunicode", "short_description": "", "description": "Montenegrinisch (lateinisch, Unicode)"},
		{
			"name": "me\tlatinyz",
			"short_description": "",
			"description": "Montenegrinisch (lateinische qwerty-Tastatur)"
		},
		{
			"name": "me\tlatinunicodeyz",
			"short_description": "",
			"description": "Montenegrinisch (lateinische qwerty-Tastatur, Unicode)"
		},
		{
			"name": "me\tcyrillicalternatequotes",
			"short_description": "",
			"description": "Montenegrinisch (Kyrillisch mit Anführungszeichen)"
		},
		{
			"name": "me\tlatinalternatequotes",
			"short_description": "",
			"description": "Montenegrinisch (lateinisch mit Anführungszeichen)"
		},
		{"name": "mk", "short_description": "mk", "description": "Mazedonisch"},
		{"name": "mk\tnodeadkeys", "short_description": "", "description": "Mazedonisch (ohne Akzenttasten)"},
		{"name": "mt", "short_description": "mt", "description": "Maltesisch"},
		{"name": "mt\tus", "short_description": "", "description": "Maltesisch (mit US-Belegung)"},
		{"name": "mn", "short_description": "mn", "description": "Mongolisch"},
		{"name": "no", "short_description": "no", "description": "Norwegisch"},
		{"name": "no\tnodeadkeys", "short_description": "", "description": "Norwegisch (ohne Akzenttasten)"},
		{"name": "no\twinkeys", "short_description": "", "description": "Norwegisch (Windows-Tasten)"},
		{"name": "no\tdvorak", "short_description": "", "description": "Norwegisch (Dvorak)"},
		{"name": "no\tsmi", "short_description": "", "description": "Nördliches Saami (Norwegen)"},
		{
			"name": "no\tsmi_nodeadkeys",
			"short_description": "",
			"description": "Nördliches Saami (Norwegen, ohne Akzenttasten)"
		},
		{"name": "no\tmac", "short_description": "", "description": "Norwegisch (Macintosh)"},
		{
			"name": "no\tmac_nodeadkeys",
			"short_description": "",
			"description": "Norwegisch (Macintosh, ohne Akzenttasten)"
		},
		{"name": "no\tcolemak", "short_description": "", "description": "Norwegisch (Colemak)"},
		{"name": "pl", "short_description": "pl", "description": "Polnisch"},
		{"name": "pl\tlegacy", "short_description": "", "description": "Polnisch (veraltet)"},
		{"name": "pl\tqwertz", "short_description": "", "description": "Polnisch (qwertz)"},
		{"name": "pl\tdvorak", "short_description": "", "description": "Polnisch (Dvorak)"},
		{
			"name": "pl\tdvorak_quotes",
			"short_description": "",
			"description": "Polnisch (Dvorak, polnische Anführungszeichen auf Taste mit Zitatzeichen)"
		},
		{
			"name": "pl\tdvorak_altquotes",
			"short_description": "",
			"description": "Polnisch (Dvorak, polnische Anführungszeichen auf Taste 1)"
		},
		{"name": "pl\tcsb", "short_description": "", "description": "Kaschubisch"},
		{"name": "pl\tszl", "short_description": "", "description": "Schlesisch"},
		{
			"name": "pl\tru_phonetic_dvorak",
			"short_description": "ru",
			"description": "Russisch (Polen, phonetisch, Dvorak)"
		},
		{"name": "pl\tdvp", "short_description": "", "description": "Polnisch (Dvorak für Programmierer)"},
		{"name": "pt", "short_description": "pt", "description": "Portugiesisch"},
		{"name": "pt\tnodeadkeys", "short_description": "", "description": "Portugiesisch (ohne Akzenttasten)"},
		{"name": "pt\tsundeadkeys", "short_description": "", "description": "Portugiesisch (Sun-Akzenttasten)"},
		{"name": "pt\tmac", "short_description": "", "description": "Portugiesisch (Macintosh)"},
		{
			"name": "pt\tmac_nodeadkeys",
			"short_description": "",
			"description": "Portugiesisch (Macintosh, ohne Akzenttasten)"
		},
		{
			"name": "pt\tmac_sundeadkeys",
			"short_description": "",
			"description": "Portugiesisch (Macintosh, Sun-Akzenttasten)"
		},
		{"name": "pt\tnativo", "short_description": "", "description": "Portugiesisch (Nativo)"},
		{"name": "pt\tnativo-us", "short_description": "", "description": "Portugiesisch (Nativo für US-Tastaturen)"},
		{"name": "pt\tnativo-epo", "short_description": "", "description": "Esperanto (Portugal, Nativo)"},
		{"name": "ro", "short_description": "ro", "description": "Rumänisch"},
		{"name": "ro\tcedilla", "short_description": "", "description": "Rumänisch (Cedilla)"},
		{"name": "ro\tstd", "short_description": "", "description": "Rumänisch (Standard)"},
		{"name": "ro\tstd_cedilla", "short_description": "", "description": "Rumänisch (Standard Cedilla)"},
		{"name": "ro\twinkeys", "short_description": "", "description": "Rumänisch (Windows-Tasten)"},
		{"name": "ru", "short_description": "ru", "description": "Russisch"},
		{"name": "ru\tphonetic", "short_description": "", "description": "Russisch (phonetisch)"},
		{
			"name": "ru\tphonetic_winkeys",
			"short_description": "",
			"description": "Russisch (phonetisch mit Windows-Tasten)"
		},
		{"name": "ru\ttypewriter", "short_description": "", "description": "Russisch (Schreibmaschine)"},
		{"name": "ru\tlegacy", "short_description": "", "description": "Russisch (veraltet)"},
		{
			"name": "ru\ttypewriter-legacy",
			"short_description": "",
			"description": "Russisch (Schreibmaschine, veraltet)"
		},
		{"name": "ru\ttt", "short_description": "", "description": "Tatarisch"},
		{"name": "ru\tos_legacy", "short_description": "", "description": "Ossetisch (veraltet)"},
		{"name": "ru\tos_winkeys", "short_description": "", "description": "Ossetisch (Windows-Tasten)"},
		{"name": "ru\tcv", "short_description": "", "description": "Tschuwaschisch"},
		{"name": "ru\tcv_latin", "short_description": "", "description": "Tschuwaschisch (lateinische Schrift)"},
		{"name": "ru\tudm", "short_description": "", "description": "Udmurtisch"},
		{"name": "ru\tkom", "short_description": "", "description": "Komi"},
		{"name": "ru\tsah", "short_description": "", "description": "Jakutisch"},
		{"name": "ru\txal", "short_description": "", "description": "Kalmykisch"},
		{"name": "ru\tdos", "short_description": "", "description": "Russisch (DOS)"},
		{"name": "ru\tmac", "short_description": "", "description": "Russisch (Macintosh)"},
		{"name": "ru\tsrp", "short_description": "", "description": "Serbisch (Russland)"},
		{"name": "ru\tbak", "short_description": "", "description": "Baschkirisch"},
		{"name": "ru\tchm", "short_description": "", "description": "Mari"},
		{"name": "rs", "short_description": "sr", "description": "Serbisch"},
		{"name": "rs\tyz", "short_description": "", "description": "Serbisch (Kyrillisch, »З« und »Ж« vertauscht)"},
		{"name": "rs\tlatin", "short_description": "", "description": "Serbisch (Lateinisch)"},
		{"name": "rs\tlatinunicode", "short_description": "", "description": "Serbisch (Lateinisch Unicode)"},
		{"name": "rs\tlatinyz", "short_description": "", "description": "Serbisch (Lateinische qwerty-Tastatur)"},
		{
			"name": "rs\tlatinunicodeyz",
			"short_description": "",
			"description": "Serbisch (lateinische qwerty-Tastatur, Unicode)"
		},
		{
			"name": "rs\talternatequotes",
			"short_description": "",
			"description": "Serbisch (Kyrillisch mit Anführungszeichen)"
		},
		{
			"name": "rs\tlatinalternatequotes",
			"short_description": "",
			"description": "Serbisch (Lateinisch mit Anführungszeichen)"
		},
		{"name": "rs\true", "short_description": "", "description": "Pannonisches Russinisch"},
		{"name": "si", "short_description": "sl", "description": "Slowenisch"},
		{
			"name": "si\talternatequotes",
			"short_description": "",
			"description": "Slowenisch (mit Anführungszeichen für Zitate)"
		},
		{
			"name": "si\tus",
			"short_description": "",
			"description": "Slowenisch (US-Tastatur mit slowenischen Buchstaben)"
		},
		{"name": "sk", "short_description": "sk", "description": "Slowakisch"},
		{"name": "sk\tbksl", "short_description": "", "description": "Slowakisch (erweiterter Backslash)"},
		{"name": "sk\tqwerty", "short_description": "", "description": "Slowakisch (qwerty)"},
		{
			"name": "sk\tqwerty_bksl",
			"short_description": "",
			"description": "Slowakisch (qwerty, erweiterter Backslash)"
		},
		{"name": "es", "short_description": "es", "description": "Spanisch"},
		{"name": "es\tnodeadkeys", "short_description": "", "description": "Spanisch (ohne Akzenttasten)"},
		{"name": "es\twinkeys", "short_description": "", "description": "Spanisch (Windows-Tasten)"},
		{"name": "es\tdeadtilde", "short_description": "", "description": "Spanisch (Akzent-Tilde einschließen)"},
		{"name": "es\tsundeadkeys", "short_description": "", "description": "Spanisch (Sun-Akzenttasten)"},
		{"name": "es\tdvorak", "short_description": "", "description": "Spanisch (Dvorak)"},
		{"name": "es\tast", "short_description": "", "description": "Asturisch (Spanien, mit unterpunktetem L und H)"},
		{
			"name": "es\tcat",
			"short_description": "",
			"description": "Katalanisch (Spanische Variante mit mittelpunktiertem L)"
		},
		{"name": "es\tmac", "short_description": "", "description": "Spanisch (Macintosh)"},
		{"name": "se", "short_description": "sv", "description": "Schwedisch"},
		{"name": "se\tnodeadkeys", "short_description": "", "description": "Schwedisch (ohne Akzenttasten)"},
		{"name": "se\tdvorak", "short_description": "", "description": "Schwedisch (Dvorak)"},
		{"name": "se\trus", "short_description": "ru", "description": "Russisch (Schweden, phonetisch)"},
		{
			"name": "se\trus_nodeadkeys",
			"short_description": "ru",
			"description": "Russisch (Schweden, phonetisch, ohne Akzenttasten)"
		},
		{"name": "se\tsmi", "short_description": "", "description": "Nördliches Saami (Schweden)"},
		{"name": "se\tmac", "short_description": "", "description": "Schwedisch (Macintosh)"},
		{"name": "se\tsvdvorak", "short_description": "", "description": "Schwedisch (Svdvorak)"},
		{"name": "se\tswl", "short_description": "", "description": "Schwedische Gebärdensprache"},
		{"name": "ch", "short_description": "de", "description": "Deutsch (Schweiz)"},
		{"name": "ch\tlegacy", "short_description": "", "description": "Deutsch (Schweiz, veraltet)"},
		{"name": "ch\tde_nodeadkeys", "short_description": "de", "description": "Deutsch (Schweiz, ohne Akzenttasten)"},
		{"name": "ch\tde_sundeadkeys", "short_description": "de", "description": "Deutsch (Schweiz, Sun-Akzenttasten)"},
		{"name": "ch\tfr", "short_description": "fr", "description": "Französisch (Schweiz)"},
		{
			"name": "ch\tfr_nodeadkeys",
			"short_description": "fr",
			"description": "Französisch (Schweiz, ohne Akzenttasten)"
		},
		{
			"name": "ch\tfr_sundeadkeys",
			"short_description": "fr",
			"description": "Französisch (Schweiz, Sun-Akzenttasten)"
		},
		{"name": "ch\tfr_mac", "short_description": "fr", "description": "Französisch (Schweiz, Macintosh)"},
		{"name": "ch\tde_mac", "short_description": "de", "description": "Deutsch (Schweiz, Macintosh)"},
		{"name": "sy", "short_description": "ar", "description": "Arabisch (Syrien)"},
		{"name": "sy\tsyc", "short_description": "syc", "description": "Syrisch"},
		{"name": "sy\tsyc_phonetic", "short_description": "syc", "description": "Syrisch (phonetisch)"},
		{"name": "sy\tku", "short_description": "ku", "description": "Kurdisch (Syrien, lateinisches Q)"},
		{"name": "sy\tku_f", "short_description": "ku", "description": "Kurdisch (Syrien, F)"},
		{"name": "sy\tku_alt", "short_description": "ku", "description": "Kurdisch (Syrien, lateinisches Alt-Q)"},
		{"name": "tj", "short_description": "tg", "description": "Tadschikisch"},
		{"name": "tj\tlegacy", "short_description": "", "description": "Tadschikisch (veraltet)"},
		{"name": "lk", "short_description": "si", "description": "Sinhala (phonetisch)"},
		{"name": "lk\ttam_unicode", "short_description": "ta", "description": "Tamilisch (Sri Lanka, Unicode)"},
		{"name": "lk\ttam_TAB", "short_description": "", "description": "Tamilisch (Sri Lanka, TAB Schreibmaschine)"},
		{"name": "th", "short_description": "th", "description": "Thailändisch"},
		{"name": "th\ttis", "short_description": "", "description": "Thailändisch (TIS-820.2538)"},
		{"name": "th\tpat", "short_description": "", "description": "Thailändisch (Pattachote)"},
		{"name": "tr", "short_description": "tr", "description": "Türkisch"},
		{"name": "tr\tf", "short_description": "", "description": "Türkisch, (F)"},
		{"name": "tr\talt", "short_description": "", "description": "Türkisch (Alt-Q)"},
		{"name": "tr\tsundeadkeys", "short_description": "", "description": "Türkisch (Sun-Akzenttasten)"},
		{"name": "tr\tku", "short_description": "ku", "description": "Kurdisch (Türkei, lateinisches Q)"},
		{"name": "tr\tku_f", "short_description": "ku", "description": "Kurdisch (Türkei, F)"},
		{"name": "tr\tku_alt", "short_description": "ku", "description": "Kurdisch (Türkei, lateinisches Alt-Q)"},
		{"name": "tr\tintl", "short_description": "", "description": "Türkisch (International, mit Akzenttasten)"},
		{"name": "tr\tcrh", "short_description": "crh", "description": "Krimtatarisch (Türkisch Q)"},
		{"name": "tr\tcrh_f", "short_description": "crh", "description": "Krimtatarisch (Türkisch F)"},
		{"name": "tr\tcrh_alt", "short_description": "crh", "description": "Krimtatarisch (Türkisch Alt-Q)"},
		{"name": "tw", "short_description": "zh", "description": "Taiwanesisch"},
		{"name": "tw\tindigenous", "short_description": "", "description": "Taiwanesisch (indigen)"},
		{"name": "tw\tsaisiyat", "short_description": "xsy", "description": "Saisiyat (Taiwan)"},
		{"name": "ua", "short_description": "uk", "description": "Ukrainisch"},
		{"name": "ua\tphonetic", "short_description": "", "description": "Ukrainisch (phonetisch)"},
		{"name": "ua\ttypewriter", "short_description": "", "description": "Ukrainisch (Schreibmaschine)"},
		{"name": "ua\twinkeys", "short_description": "", "description": "Ukrainisch (Windows-Tasten)"},
		{"name": "ua\tlegacy", "short_description": "", "description": "Ukrainisch (veraltet)"},
		{"name": "ua\trstu", "short_description": "", "description": "Ukrainisch (Standard-RSTU)"},
		{"name": "ua\trstu_ru", "short_description": "", "description": "Russisch (Ukraine, Standard-RSTU)"},
		{"name": "ua\thomophonic", "short_description": "", "description": "Ukrainisch (homophon)"},
		{"name": "gb", "short_description": "en", "description": "Englisch (Britisch)"},
		{"name": "gb\textd", "short_description": "", "description": "Englisch (Britisch erweitert, Windows-Tasten)"},
		{
			"name": "gb\tintl",
			"short_description": "",
			"description": "Englisch (Britisch international, mit Akzenttasten)"
		},
		{"name": "gb\tdvorak", "short_description": "", "description": "Englisch (Britisch, Dvorak)"},
		{
			"name": "gb\tdvorakukp",
			"short_description": "",
			"description": "Englisch (Dvorak mit britischer Punktierung)"
		},
		{"name": "gb\tmac", "short_description": "", "description": "Englisch (Britisch, Macintosh)"},
		{
			"name": "gb\tmac_intl",
			"short_description": "",
			"description": "Englisch (Britisch, Macintosh international)"
		},
		{"name": "gb\tcolemak", "short_description": "", "description": "English (Britisch, Colemak)"},
		{"name": "uz", "short_description": "uz", "description": "Usbekisch"},
		{"name": "uz\tlatin", "short_description": "", "description": "Usbekisch (lateinische Schrift)"},
		{"name": "vn", "short_description": "vi", "description": "Vietnamesisch"},
		{"name": "kr", "short_description": "ko", "description": "Koreanisch"},
		{"name": "kr\tkr104", "short_description": "", "description": "Koreanisch (101/104-Tasten kompatibel)"},
		{"name": "nec_vndr/jp", "short_description": "ja", "description": "Japanisch (PC-98xx-Serie)"},
		{"name": "ie", "short_description": "ie", "description": "Irisch"},
		{"name": "ie\tCloGaelach", "short_description": "", "description": "CloGaelach"},
		{"name": "ie\tUnicodeExpert", "short_description": "", "description": "Irisch (UnicodeExpert)"},
		{"name": "ie\togam", "short_description": "", "description": "Ogham"},
		{"name": "ie\togam_is434", "short_description": "", "description": "Ogham (IS434)"},
		{"name": "pk", "short_description": "ur", "description": "Urdu (Pakistan)"},
		{"name": "pk\turd-crulp", "short_description": "", "description": "Urdu (Pakistan, CRULP)"},
		{"name": "pk\turd-nla", "short_description": "", "description": "Urdu (Pakistan, NLA)"},
		{"name": "pk\tara", "short_description": "ar", "description": "Arabisch (Pakistan)"},
		{"name": "pk\tsnd", "short_description": "sd", "description": "Sindhi"},
		{"name": "mv", "short_description": "dv", "description": "Dhivehi"},
		{"name": "za", "short_description": "en", "description": "Englisch (Südafrika)"},
		{"name": "epo", "short_description": "eo", "description": "Esperanto"},
		{
			"name": "epo\tlegacy",
			"short_description": "",
			"description": "Esperanto (falsch platziertes Semikolon und Anführungszeichen, veraltet)"
		},
		{"name": "np", "short_description": "ne", "description": "Nepalesisch"},
		{"name": "ng", "short_description": "en", "description": "Englisch (Nigeria)"},
		{"name": "ng\tigbo", "short_description": "ig", "description": "Igbo"},
		{"name": "ng\tyoruba", "short_description": "yo", "description": "Joruba"},
		{"name": "ng\thausa", "short_description": "ha", "description": "Haussa"},
		{"name": "et", "short_description": "am", "description": "Amharisch"},
		{"name": "sn", "short_description": "wo", "description": "Wolof"},
		{"name": "brai", "short_description": "brl", "description": "Braille"},
		{"name": "brai\tleft_hand", "short_description": "", "description": "Braille (linkshändig)"},
		{"name": "brai\tright_hand", "short_description": "", "description": "Braille (rechtshändig)"},
		{"name": "tm", "short_description": "tk", "description": "Turkmenisch"},
		{"name": "tm\talt", "short_description": "", "description": "Turkmenisch (Alt-Q)"},
		{"name": "ml", "short_description": "bm", "description": "Bambara"},
		{"name": "ml\tfr-oss", "short_description": "fr", "description": "Französisch (Mali, Alternative)"},
		{"name": "ml\tus-mac", "short_description": "en", "description": "Englisch (Mali, USA Macintosh)"},
		{"name": "ml\tus-intl", "short_description": "en", "description": "Englisch (Mali, USA International)"},
		{"name": "tz", "short_description": "sw", "description": "Swahili (Tansania)"},
		{"name": "ke", "short_description": "sw", "description": "Swahili (Kenia)"},
		{"name": "ke\tkik", "short_description": "ki", "description": "Kikuyu"},
		{"name": "bw", "short_description": "tn", "description": "Tswana"},
		{"name": "ph", "short_description": "ph", "description": "Philippinisch"},
		{"name": "ph\tqwerty-bay", "short_description": "", "description": "Philippinisch (QWERTY, Baybayin)"},
		{
			"name": "ph\tcapewell-dvorak",
			"short_description": "",
			"description": "Philippinisch (Capewell-Dvorak, Lateinisch)"
		},
		{
			"name": "ph\tcapewell-dvorak-bay",
			"short_description": "",
			"description": "Philippinisch (Capewell-Dvorak, Baybayin)"
		},
		{
			"name": "ph\tcapewell-qwerf2k6",
			"short_description": "",
			"description": "Philippinisch (Capewell-QWERF 2006, lateinisch)"
		},
		{
			"name": "ph\tcapewell-qwerf2k6-bay",
			"short_description": "",
			"description": "Philippinisch (Capewell-QWERF 2006, Baybayin)"
		},
		{"name": "ph\tcolemak", "short_description": "", "description": "Philippinisch (Colemak, lateinisch)"},
		{"name": "ph\tcolemak-bay", "short_description": "", "description": "Philippinisch (Colemak, Baybayin)"},
		{"name": "ph\tdvorak", "short_description": "", "description": "Philippinisch (Dvorak, lateinisch)"},
		{"name": "ph\tdvorak-bay", "short_description": "", "description": "Philippinisch (Dvorak, Baybayin)"},
		{"name": "md", "short_description": "md", "description": "Moldawisch"},
		{"name": "md\tgag", "short_description": "gag", "description": "Moldauisch (Gagauz)"}
	];

	lightdm.num_users= lightdm.users.length;
	lightdm.timed_login_delay= 0; //set to a number higher than 0 for timed login simulation
	lightdm.timed_login_user= lightdm.timed_login_delay > 0 ? lightdm.users[0] : null;

	lightdm.get_string_property= function() {};
	lightdm.get_integer_property= function() {};
	lightdm.get_boolean_property= function() {};
	lightdm.cancel_timed_login= function() {
		_lightdm_mock_check_argument_length(arguments, 0);
		lightdm._timed_login_cancelled= true;
	};

	lightdm.provide_secret= function(secret) {
		if (typeof lightdm._username == 'undefined' || !lightdm._username) {
			throw "must call start_authentication first"
		}
		_lightdm_mock_check_argument_length(arguments, 1);
		var user= _lightdm_mock_get_user(lightdm.username);

		if (!user && secret == lightdm._username) {
			lightdm.is_authenticated= true;
			lightdm.authentication_user= user;
		} else {
			lightdm.is_authenticated= false;
			lightdm.authentication_user= null;
			lightdm._username= null;
		}
		authentication_complete();
	};

	lightdm.start_authentication= function(username) {
		_lightdm_mock_check_argument_length(arguments, 1);
		 user= _lightdm_mock_get_user(username);
		if (!user) {
			show_error(username + " is an invalid user");
		}
		show_prompt("Password: ");
		lightdm._username= username;
	};

	lightdm.cancel_authentication= function() {
		_lightdm_mock_check_argument_length(arguments, 0);

		lightdm._username= null;
	};

	lightdm.suspend= function() {
		alert("System Suspended. Bye Bye");
		document.location.reload(true);
	};

	lightdm.hibernate= function() {
		alert("System Hibernated. Bye Bye");
		document.location.reload(true);
	};

	lightdm.restart= function() {
		alert("System restart. Bye Bye");
		document.location.reload(true);
	};

	lightdm.shutdown= function() {
		alert("System Shutdown. Bye Bye");
		document.location.reload(true);
	};

	lightdm.login= function(user, session) {
		_lightdm_mock_check_argument_length(arguments, 2);
		if (!lightdm.is_authenticated) {
			throw "The system is not authenticated";
		}
		if (user !== lightdm.authentication_user) {
			throw "this user is not authenticated";
		}
		alert("logged in successfully!!");
		document.location.reload(true);
	};

	if (lightdm.timed_login_delay > 0) {
		setTimeout(function() { if (!lightdm._timed_login_cancelled()) timed_login();}, lightdm.timed_login_delay);
	}
}

function _lightdm_mock_check_argument_length(args, length) {
	if (args.length != length) {
		throw "incorrect number of arguments in function call";
	}
}

function _lightdm_mock_get_user(username) {
	var user= null;
	for (var i= 0; i < lightdm.users.length; ++i) {
		if (lightdm.users[i].name == username) {
			user= lightdm.users[i];
			break;
		}
	}
	return user;
}