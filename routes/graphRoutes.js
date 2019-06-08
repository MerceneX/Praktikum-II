const express = require("express"),
	router = express.Router({ mergeParams: true }),
	QueryMan = require("../lib/queries");

const accidentsCollection = "nesrece",
	peopleCollection = "osebe";

router.get("/23", async (req, res) => {
	// N/A
	const values = [2014, 2015, 2016, 2017, 2018];
	const keys = ["leto", "nesrece"];
	const queryMan = QueryMan.getQueryMan(23);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			23,
			"Nesreče glede na leto",
			values,
			[],
			accidentsCollection,
			"Datum_Nesrece",
			true
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/24", async (req, res) => {
	// N/A
	const values = ["0w", "1w", "2w", "3w", "4w", "5w", "6w"];
	const decodedValues = [
		"ponedeljek",
		"torek",
		"sreda",
		"četrtek",
		"petek",
		"sobota",
		"nedelja"
	];
	const keys = ["dan", "nesrece"];
	const queryMan = QueryMan.getQueryMan(24);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			24,
			"Nesreče glede na dan",
			values,
			decodedValues,
			accidentsCollection,
			"dan_v_tednu",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/25", async (req, res) => {
	//PRVR
	const values = ["J", "O", "D", "N", "M", "S", "V", "T"];
	const decodedValues = [
		"JASNO",
		"OBLAČNO",
		"DEŽEVNO",
		"NEZNANO",
		"MEGLA",
		"SNEG",
		"VETER",
		"TOČA"
	];
	const keys = ["vreme", "nesrece"];
	const queryMan = QueryMan.getQueryMan(25);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			25,
			"Nesreče glede na vreme",
			values,
			decodedValues,
			accidentsCollection,
			"PRVR_Vreme",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/26", async (req, res) => {
	//PRVZ
	const values = [
		"NP",
		"SV",
		"PV",
		"OS",
		"HI",
		"PD",
		"PR",
		"VR",
		"TO",
		"CE",
		"VO"
	];
	const decodedValues = [
		"Nepravilnost pešca",
		"Nepravilna smer vožnje",
		"Premiki z vozilom",
		"Ostalo",
		"Neprilagojena Hitrost",
		"Neupoštevanje pravil o prednosti",
		"Nepravilno prehitevanje",
		"Neustrezna varnostna razdalja",
		"Nepravilnost na tovoru",
		"Nepravilnost na cesti",
		"Neustrezna varnostna razdalja"
	];
	const keys = ["vzrok", "nesrece"];
	const queryMan = QueryMan.getQueryMan(26);
	if (queryMan) {
		console.log("QueryMan is alive!");
		res.json(queryMan.data);
	} else {
		const queryMan = new QueryMan(
			26,
			"Nesreče glede na vzroke",
			values,
			decodedValues,
			accidentsCollection,
			"PRVZ_vzrok",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/27", async (req, res) => {
	//LVVN
	const values = [7, 11, 5, 12, 8, 10, 2, 4, 9, 3, 6, 1];
	const decodedValues = [
		"tovorno vozilo",
		"delovno vozilo",
		"avtobus",
		"tovorno vozilo",
		"tovorno vozilo",
		"vlečno vozilo",
		"osebni avtomobil",
		"avtobus",
		"tovorno vozilo",
		"avtobus",
		"avtobus",
		"osebni avtomobil"
	];
	const keys = ["vozilo", "nesrece"];
	const queryMan = QueryMan.getQueryMan(27);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			27,
			"Nesreče glede na vozilo",
			values,
			decodedValues,
			accidentsCollection,
			"LVVN_vrsta_vozila",
			true
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/28", async (req, res) => {
	//PRVU
	const values = [
		"AV",
		"DS",
		"K1",
		"KM",
		"KO",
		"KR",
		"KV",
		"LK",
		"LV",
		"M1",
		"MK",
		"MO",
		"OA",
		"OD",
		"OS",
		"PE",
		"PO",
		"PT",
		"SD",
		"SK",
		"SM",
		"SP",
		"SV",
		"TK",
		"TR",
		"TV",
		"UC",
		"KO",
		"MK",
		"OA",
		"PE",
		"PT",
		"XX"
	];
	const decodedValues = [
		"VOZNIK AVTOBUSA",
		"VOZNIK DELOVNEGA STROJA",
		"VOZNIK KOLESA S POMOŽNIM ELEKTRIČNIM MOTORJEM",
		"VOZNIK KOLESA Z MOTORJEM",
		"KOLESAR",
		"X-KRŠITELJ - JRM",
		"VOZNIK KOMBINIRANEGA VOZILA",
		"VOZNIK LAHKEGA ŠTIRIKOLESA",
		"LASTNIK VOZILA",
		"VOZNIK MOPEDA DO 25 KM/H",
		"VOZNIK MOTORNEGA KOLESA",
		"VOZNIK MOPEDA",
		"VOZNIK OSEBNEGA AVTOMOBILA",
		"ODGOVORNA OSEBA",
		"OSTALO",
		"PEŠEC",
		"PRAVNA OSEBA",
		"POTNIK",
		"POSAMEZNIK, S.P., KI SAMOSTOJNO OPRAVLJA DEJAVNOST IN ZAPOSLUJE DRUGE",
		"VOZNIK ŠTIRIKOLESA",
		"SKRBNIK MLADOLETNIKA",
		"SAMOSTOJNI PODJETNIK",
		"VOZNIK SPECIALNEGA VOZILA",
		"VOZNIK TRIKOLESA",
		"VOZNIK TRAKTORJA",
		"VOZNIK TOVORNEGA VOZILA",
		"UČITELJ VOŽNJE MED USPOSABLJANJEM KANDIDATA ZA VOZNIKA MV",
		"KOLESARJI",
		"VOZNIKI MOTORNIH KOLES",
		"VOZNIKI OSEBNIH AVTOMOBILOV",
		"PEŠCI",
		"POTNIKI",
		"DRUGI UDELEŽENCI"
	];
	const keys = ["udelezenec", "nesrece"];
	const queryMan = QueryMan.getQueryMan(28);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			28,
			"Nesreče glede na udelezence",
			values,
			decodedValues,
			peopleCollection,
			"PRVO_vloga_udelezenca",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});
router.get("/29", async (req, res) => {
	//N/A
	const values = [true, false];
	const decodedValues = ["Praznik", "Delovnik"];
	const keys = ["dan", "nesrece"];
	const queryMan = QueryMan.getQueryMan(29);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			29,
			"Nesreče glede na praznik",
			values,
			decodedValues,
			accidentsCollection,
			"je_praznik",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/30", async (req, res) => {
	//PRTN
	const values = ["BT", "ČT", "NT", "OP", "OS", "PP", "PR", "PZ", "TO", "TV"];
	const decodedValues = [
		"BOČNO TRČENJE",
		"ČELNO TRČENJE",
		"NALETNO TRČENJE",
		"OPLAŽENJE",
		"OSTALO",
		"POVOŽENJE PEŠCA",
		"PREVRNITEV VOZILA",
		"POVOŽENJE ŽIVALI",
		"TRČENJE V OBJEKT",
		"TRČENJE V STOJEČE / PARKIRANO VOZILO"
	];
	const keys = ["tip", "nesrece"];
	const queryMan = QueryMan.getQueryMan(30);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			30,
			"Nesreče glede na tip",
			values,
			decodedValues,
			accidentsCollection,
			"PRPV_Tip_Nesrece",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/31", async (req, res) => {
	//PRSP
	const values = ["E", "G", "N", "R", "Z"];
	const decodedValues = ["NEZNANO", "GOST", "NORMALEN", "REDEK", "ZASTOJI"];
	const keys = ["promet", "nesrece"];
	const queryMan = QueryMan.getQueryMan(31);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			31,
			"Nesreče glede na stanje prometa",
			values,
			decodedValues,
			accidentsCollection,
			"PRSP_Promet",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/32", async (req, res) => {
	//LOVC
	const values = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"A",
		"H",
		"L",
		"M",
		"N",
		"R",
		"T",
		"V",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"H",
		"L",
		"N",
		"T",
		"V"
	];
	const decodedValues = [
		"AVTOCESTA",
		"GLAVNA CESTA",
		"GLAVNA CESTA",
		"REGIONALNA CESTA",
		"REGIONALNA CESTA",
		"REGIONALNA CESTA",
		"AVTOCESTA - STARA",
		"HITRA CESTA",
		"LOKALNA CESTA",
		"MAGISTRALNA CESTA - STARA",
		"NASELJE Z ULIČNIM SISTEMOM",
		"REGIONALNA CESTA - STARA",
		"TURISTIČNA CESTA",
		"NASELJE BREZ ULIČNEGA SISTEMA",
		"AC",
		"G1",
		"G2",
		"R1",
		"R2",
		"R3",
		"HC",
		"XC",
		"MESTO",
		"RT",
		"VAS"
	];
	const keys = ["cesta", "nesrece"];
	const queryMan = QueryMan.getQueryMan(32);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			32,
			"Nesreče glede na tipe cest",
			values,
			decodedValues,
			accidentsCollection,
			"LOVC_vrsta_ceste",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

router.get("/33", async (req, res) => {
	//LVZN
	const values = ["M", "Z"];
	const decodedValues = ["Moški", "Ženske"];
	const keys = ["spol", "nesrece"];
	const queryMan = QueryMan.getQueryMan(33);
	if (queryMan) res.json(queryMan.data);
	else {
		const queryMan = new QueryMan(
			33,
			"Nesreče glede na spol",
			values,
			decodedValues,
			peopleCollection,
			"spol",
			false
		);
		res.json(await queryMan.queryData(keys));
	}
});

module.exports = router;
