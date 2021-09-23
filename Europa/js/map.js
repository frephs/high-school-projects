jQuery(document).ready(function(){
	jQuery("#mapsvg").mapSvg(
		{
			width: 750,
			height: 750,
			viewBox: [0,0,646.36719,654.76562],
			gauge: {
				on: false,
				labels: {
					low: "low",
					high: "high"
				},
				colors: {
					lowRGB: {r: 85,g: 0, b: 0,a: 1},
					highRGB: {r: 238,g: 0, b: 0,a: 1},
					low: "#550000",
					high: "#ee0000",
					diffRGB: {
						r: 153,
						g: 0,
						b: 0,
						a: 0}
					},
					min: 0,
					max: false
				},
				regions: {
					fr: {
						id: "fr",'id_no_spaces': "fr", fill: "#FFA000",
						tooltip: "Francia, 1957"
					},
					be: {
						id: "be",'id_no_spaces': "be", fill: "#FFA000",
						tooltip: "Belgio, 1957"
					},
					de: {
						id: "de",'id_no_spaces': "de", fill: "#FFA000",
						tooltip: "Germania, 1957"
					},
					it: {
						id: "it",'id_no_spaces': "it", fill: "#FFA000",
						tooltip: "Italia, 1957"
					},
					lu: {
						id: "lu",'id_no_spaces': "lu", fill: "#FFA000",
						tooltip: "Lussemburgo, 1957"
					},
					nl: {
						id: "nl",'id_no_spaces': "nl", fill: "#FFA000",
						tooltip: "Paesi bassi, 1957"
					},
					dk: {
						id: "dk",'id_no_spaces': "dk", fill: "#F57C00",
						tooltip: "Paesi bassi, 1973"
					},
					ie: {
						id: "ie",'id_no_spaces': "ie", fill: "#F57C00",
						tooltip: "Paesi bassi, 1973"
					},
					gb: {
						id: "gb",'id_no_spaces': "gb", fill: "#F57C00", 
						tooltip: "Regno unito, 1973"
					},
					gr: {
						id: "gr",'id_no_spaces': "gb", fill: "#EC407A",
						tooltip: "Grecia, 1981"
					},
					es: {
						id: "es",'id_no_spaces': "es", fill: "#f44336",
						tooltip: "Spagna, 1986"
					},
					pt: {
						id: "pt",'id_no_spaces': "pt", fill: "#f44336",
						tooltip: "Portogallo, 1986"
					},
					at: {
						id: "at",'id_no_spaces': "at", fill: "#8BC34A",
						tooltip: "Austria, 1995"
					},
					fi: {
						id: "fi",'id_no_spaces': "fi", fill: "#8BC34A",
						tooltip: "Finlandia, 1995"
					},
					se: {
						id: "se",'id_no_spaces': "se", fill: "#8BC34A",
						tooltip: "Svezia, 1995"
					},
					cy: {
						id: "cy",'id_no_spaces': "cy", fill: "#283593",
						tooltip: "Cipro, 2004"
					},
					cz: {
						id: "cz",'id_no_spaces': "cz", fill: "#283593",
						tooltip: "Repubblica ceca, 2004"
					},
					ew: {
						id: "ew",'id_no_spaces': "ew", fill: "#283593",
						tooltip: "Estonia, 2004"
					},
					hu: {
						id: "hu",'id_no_spaces': "hu", fill: "#283593",
						tooltip: "Ungheria, 2004"
					},
					lt: {
						id: "lt",'id_no_spaces': "lt", fill: "#283593",
						tooltip: "Lituania, 2004"
					},
					lv: {
						id: "lv",'id_no_spaces': "lv", fill: "#283593",
						tooltip: "Latvia, 2004"
					},
					mt: {
						id: "mt",'id_no_spaces': "mt", fill: "#283593",
						tooltip: "Svezia, 2004"
					},
					pl: {
						id: "pl",'id_no_spaces': "pl", fill: "#283593",
						tooltip: "Polonia, 2004"
					},
					si: {
						id: "si",'id_no_spaces': "si", fill: "#283593",
						tooltip: "Slovenia, 2004"
					},
					sk: {
						id: "sk",'id_no_spaces': "sk", fill: "#283593",
						tooltip: "Slovacchia, 2004"
					},
					bg: {
						id: "bg",'id_no_spaces': "bg", fill: "#7E57C2",
						tooltip: "Bulgaria, 2007"
					},
					ro: {
						id: "ro",'id_no_spaces': "ro", fill: "#7E57C2",
						tooltip: "Romania, 2007"
					},
					hr: {
						id: "hr",'id_no_spaces': "hr", fill: "#42A5F5",
						tooltip: "Croazia, 2013"
					}
				},
				source: "https:/mapsvg.com/mapsvg/maps/not-calibrated/europe.svg",
				title: "Europe",
				responsive: true
			}
		);
	}
);
