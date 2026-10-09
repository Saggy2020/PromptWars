import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Moon, d as Landmark, f as GitCompare, i as Shield, l as Mic, m as Bookmark, o as Radio, p as Compass, r as Sun, s as Phone, t as X, u as MapPinned } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CQkPHPQO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CITY = {
	id: "mumbai",
	name: "Mumbai",
	tagline: "The island city that never quite sleeps",
	center: {
		lat: 18.96,
		lng: 72.83
	},
	zoom: 13
};
var PLACES = [
	{
		id: "gateway",
		name: "Gateway of India",
		kind: "landmark",
		lat: 18.922,
		lng: 72.8347,
		area: "Colaba",
		rating: 4.6,
		price: 1,
		hiddenGem: 28,
		safety: 72,
		cleanliness: 68,
		accessibility: 74,
		crowd: 88,
		noise: 70,
		green: 22,
		transit: 70,
		lighting: 80,
		hours: "Open grounds, busiest 4–9pm",
		blurb: "Basalt arch facing the harbour — the city’s ceremonial front door.",
		story: "Raised to mark the 1911 landing of King George V, the Gateway became the last sight many migrants saw when they left for the Gulf, and the first for arrivals after Independence. Elephanta ferries still leave from the steps below.",
		tags: [
			"heritage",
			"harbour",
			"photo"
		],
		moods: [
			"family",
			"solo",
			"romantic"
		],
		year: "1924"
	},
	{
		id: "taj",
		name: "Taj Mahal Palace",
		kind: "hotel",
		lat: 18.9217,
		lng: 72.8332,
		area: "Colaba",
		rating: 4.8,
		price: 4,
		hiddenGem: 20,
		safety: 86,
		cleanliness: 94,
		accessibility: 80,
		crowd: 62,
		noise: 40,
		green: 30,
		transit: 68,
		lighting: 90,
		hours: "Lobby open to visitors; dining by reservation",
		blurb: "Harbour-facing palace hotel. Sea Lounge for a slow cup, not a selfie queue.",
		story: "Jamshedji Tata built it in 1903 after being refused entry to a European hotel. The dome still anchors the Apollo Bunder skyline.",
		tags: [
			"hotel",
			"icon",
			"tea"
		],
		moods: ["romantic"],
		year: "1903"
	},
	{
		id: "bademiya",
		name: "Bademiya",
		kind: "food",
		lat: 18.9236,
		lng: 72.8326,
		area: "Colaba",
		rating: 4.4,
		price: 2,
		cuisine: "Mughlai",
		hiddenGem: 55,
		safety: 64,
		cleanliness: 58,
		accessibility: 50,
		crowd: 80,
		noise: 78,
		green: 8,
		transit: 72,
		lighting: 60,
		hours: "7pm–1am",
		blurb: "Seekh rolls on a side lane. Eat standing, then walk the Gateway.",
		story: "A Colaba night institution since the 1940s — charcoal, butter, and a queue that moves faster than it looks.",
		tags: [
			"street food",
			"late night",
			"mughlai"
		],
		moods: [
			"late",
			"budget",
			"solo"
		]
	},
	{
		id: "kala",
		name: "Kala Ghoda",
		kind: "experience",
		lat: 18.9274,
		lng: 72.8324,
		area: "Fort",
		rating: 4.7,
		price: 2,
		hiddenGem: 48,
		safety: 78,
		cleanliness: 76,
		accessibility: 70,
		crowd: 66,
		noise: 55,
		green: 35,
		transit: 80,
		lighting: 74,
		hours: "Galleries 11am–7pm; crescent always open",
		blurb: "Museum mile, mural walls, and the city’s best people-watching crescent.",
		story: "Named for a removed equestrian statue, the precinct holds the old Royal Alfred Sailors’ Home, Jehangir Art Gallery, and a weekend market that locals still rate over the malls.",
		tags: [
			"art",
			"walk",
			"cafes"
		],
		moods: [
			"solo",
			"romantic",
			"rainy",
			"family"
		],
		year: "Victorian"
	},
	{
		id: "csmt",
		name: "CSMT (Victoria Terminus)",
		kind: "landmark",
		lat: 18.9398,
		lng: 72.8355,
		area: "Fort",
		rating: 4.7,
		price: 1,
		hiddenGem: 35,
		safety: 58,
		cleanliness: 52,
		accessibility: 60,
		crowd: 95,
		noise: 90,
		green: 10,
		transit: 98,
		lighting: 72,
		hours: "Station always; best light at golden hour from the east facade",
		blurb: "UNESCO Gothic Revival terminus. Watch the facade, mind the concourse.",
		story: "Frederick William Stevens’ 1887 terminus mixed Venetian Gothic with Indian craft. It still moves more than three million suburban commuters a day.",
		tags: [
			"unesco",
			"rail",
			"architecture"
		],
		moods: [
			"solo",
			"family",
			"rainy"
		],
		year: "1887"
	},
	{
		id: "marine",
		name: "Marine Drive",
		kind: "experience",
		lat: 18.944,
		lng: 72.823,
		area: "Marine Lines",
		rating: 4.8,
		price: 1,
		hiddenGem: 30,
		safety: 80,
		cleanliness: 74,
		accessibility: 78,
		crowd: 72,
		noise: 48,
		green: 25,
		transit: 76,
		lighting: 88,
		hours: "Best 6:30–9pm for the Queen’s Necklace",
		blurb: "The curved promenade. Walk south to north; sit only where the tetrapods allow.",
		story: "Art Deco apartments from the 1930s face the bay. At night the streetlamps curve into the Queen’s Necklace — one of the few stretches that stays evenly lit after 10.",
		tags: [
			"promenade",
			"deco",
			"sunset"
		],
		moods: [
			"romantic",
			"solo",
			"family",
			"late"
		],
		year: "1930s"
	},
	{
		id: "haji",
		name: "Haji Ali Dargah",
		kind: "landmark",
		lat: 18.9827,
		lng: 72.809,
		area: "Worli",
		rating: 4.6,
		price: 1,
		hiddenGem: 40,
		safety: 66,
		cleanliness: 60,
		accessibility: 42,
		crowd: 70,
		noise: 50,
		green: 15,
		transit: 64,
		lighting: 55,
		hours: "Tide-dependent causeway; avoid high tide and late night",
		blurb: "Island dargah reached by a tidal walkway. Check the tide before you go.",
		story: "The shrine of Pir Haji Ali Shah sits on an islet. The causeway floods at high tide — that is the practical safety note, not a legend.",
		tags: [
			"faith",
			"sea",
			"walk"
		],
		moods: ["solo", "family"],
		year: "15th c. tradition"
	},
	{
		id: "bandstand",
		name: "Bandstand Promenade",
		kind: "experience",
		lat: 19.0434,
		lng: 72.8192,
		area: "Bandra West",
		rating: 4.5,
		price: 2,
		hiddenGem: 42,
		safety: 76,
		cleanliness: 72,
		accessibility: 68,
		crowd: 74,
		noise: 60,
		green: 40,
		transit: 62,
		lighting: 78,
		hours: "Sunset to 11pm feels best",
		blurb: "Sea wall, joggers, and a skyline that looks staged. Cafes one street inland.",
		story: "Bandra’s western edge was a fishing village before the promenade. The fort ruins at Land’s End are a five-minute walk north.",
		tags: [
			"sunset",
			"walk",
			"bandra"
		],
		moods: [
			"romantic",
			"solo",
			"family",
			"late"
		]
	},
	{
		id: "elco",
		name: "Elco Market",
		kind: "food",
		lat: 19.0556,
		lng: 72.8295,
		area: "Bandra West",
		rating: 4.5,
		price: 2,
		cuisine: "Chaat & vegetarian",
		hiddenGem: 62,
		safety: 74,
		cleanliness: 70,
		accessibility: 66,
		crowd: 78,
		noise: 72,
		green: 12,
		transit: 70,
		lighting: 75,
		hours: "12pm–11:30pm",
		blurb: "Pani puri lane locals still defend against every ‘best of’ list.",
		story: "A covered market of Gujarati and Mumbai chaat stalls. Go hungry, share plates, and skip the tourist-priced cafes on Linking Road.",
		tags: [
			"chaat",
			"vegetarian",
			"local"
		],
		moods: [
			"budget",
			"family",
			"solo"
		]
	},
	{
		id: "juhu",
		name: "Juhu Beach stalls",
		kind: "food",
		lat: 19.0989,
		lng: 72.8266,
		area: "Juhu",
		rating: 4.1,
		price: 1,
		cuisine: "Beach snacks",
		hiddenGem: 38,
		safety: 54,
		cleanliness: 42,
		accessibility: 48,
		crowd: 84,
		noise: 80,
		green: 20,
		transit: 55,
		lighting: 48,
		hours: "Evenings; avoid isolated stretches after 10pm",
		blurb: "Bhel and sunset, then leave the dark end of the sand.",
		story: "Juhu is a public beach with a famous snack line and uneven lighting past the main stalls. Stay with the crowd and the lit stalls.",
		tags: [
			"beach",
			"snacks",
			"sunset"
		],
		moods: [
			"family",
			"budget",
			"romantic"
		]
	},
	{
		id: "mohammed",
		name: "Mohammed Ali Road grills",
		kind: "food",
		lat: 18.9608,
		lng: 72.8334,
		area: "Bhendi Bazaar",
		rating: 4.6,
		price: 2,
		cuisine: "Bohri & Mughlai",
		hiddenGem: 78,
		safety: 60,
		cleanliness: 50,
		accessibility: 40,
		crowd: 82,
		noise: 85,
		green: 5,
		transit: 74,
		lighting: 58,
		hours: "Peak during Ramadan nights; otherwise 7pm–midnight",
		blurb: "Nalli nihari and kebabs under the flyover. A hidden-gem score that earns it.",
		story: "The street transforms in Ramadan, but the grills run year-round. Narrow lanes, heavy two-wheeler traffic — walk, don’t linger in the carriageway.",
		tags: [
			"hidden gem",
			"grill",
			"night"
		],
		moods: [
			"late",
			"budget",
			"solo"
		]
	},
	{
		id: "chor",
		name: "Chor Bazaar lanes",
		kind: "experience",
		lat: 18.9588,
		lng: 72.8302,
		area: "Bhendi Bazaar",
		rating: 4.2,
		price: 2,
		hiddenGem: 80,
		safety: 52,
		cleanliness: 40,
		accessibility: 35,
		crowd: 60,
		noise: 68,
		green: 4,
		transit: 70,
		lighting: 42,
		hours: "11am–7pm, closed Friday afternoon",
		blurb: "Antique brass, old film posters, and a reputation bigger than the theft rate.",
		story: "The ‘thieves’ market’ name is colonial-era lore. Today it is a genuine antiques crawl — go by day, agree prices before you hand over cash, and skip unlit side lanes.",
		tags: [
			"antiques",
			"walk",
			"daytime"
		],
		moods: ["solo", "budget"]
	},
	{
		id: "dadar",
		name: "Dadar flower market",
		kind: "experience",
		lat: 19.0178,
		lng: 72.8432,
		area: "Dadar",
		rating: 4.4,
		price: 1,
		hiddenGem: 70,
		safety: 63,
		cleanliness: 48,
		accessibility: 55,
		crowd: 86,
		noise: 82,
		green: 18,
		transit: 92,
		lighting: 50,
		hours: "4am–10am",
		blurb: "Marigold mountains at dawn. Be gone before the commuter crush.",
		story: "One of Asia’s largest flower markets supplies weddings and temples. Arrive at 5:30am if you want room to stand.",
		tags: [
			"dawn",
			"market",
			"local"
		],
		moods: [
			"solo",
			"budget",
			"family"
		]
	},
	{
		id: "lower",
		name: "Lower Parel mill district",
		kind: "neighborhood",
		lat: 18.995,
		lng: 72.829,
		area: "Lower Parel",
		rating: 4.2,
		price: 3,
		hiddenGem: 36,
		safety: 74,
		cleanliness: 78,
		accessibility: 72,
		crowd: 70,
		noise: 66,
		green: 28,
		transit: 84,
		lighting: 82,
		hours: "Malls and restaurants into midnight",
		blurb: "Former textile mills, now galleries, offices, and late kitchens.",
		story: "Girangaon — the village of mills — employed the city’s working class for a century. Todays compounds sit inside those same plots.",
		tags: [
			"neighborhood",
			"nightlife",
			"food"
		],
		moods: [
			"late",
			"romantic",
			"solo"
		],
		year: "Mill era"
	},
	{
		id: "fort-hood",
		name: "Fort precinct",
		kind: "neighborhood",
		lat: 18.932,
		lng: 72.834,
		area: "Fort",
		rating: 4.5,
		price: 2,
		hiddenGem: 50,
		safety: 76,
		cleanliness: 70,
		accessibility: 68,
		crowd: 64,
		noise: 58,
		green: 32,
		transit: 88,
		lighting: 76,
		hours: "Day for architecture, evening for cafes",
		blurb: "The walkable historic core: Horniman Circle, University, and Kala Ghoda.",
		story: "The old walled town. Ramparts are gone; the street grid and Indo-Saracenic civic buildings remain the best first-day orientation walk.",
		tags: [
			"neighborhood",
			"heritage",
			"walk"
		],
		moods: [
			"solo",
			"rainy",
			"family",
			"romantic"
		]
	},
	{
		id: "kurla",
		name: "Kurla station belt",
		kind: "neighborhood",
		lat: 19.065,
		lng: 72.879,
		area: "Kurla",
		rating: 3.4,
		price: 1,
		hiddenGem: 22,
		safety: 38,
		cleanliness: 34,
		accessibility: 44,
		crowd: 92,
		noise: 88,
		green: 8,
		transit: 90,
		lighting: 36,
		hours: "Transit hub all day; avoid isolated roads after 9pm",
		blurb: "Useful interchange, poor lighting off the main road. Not an evening stroll.",
		story: "A critical Central–Harbour interchange. Crime and accident reports cluster on poorly lit approach roads rather than the platforms themselves.",
		tags: [
			"neighborhood",
			"caution",
			"transit"
		],
		moods: ["budget"]
	},
	{
		id: "colaba-hood",
		name: "Colaba Causeway",
		kind: "neighborhood",
		lat: 18.9185,
		lng: 72.831,
		area: "Colaba",
		rating: 4.3,
		price: 2,
		hiddenGem: 44,
		safety: 68,
		cleanliness: 60,
		accessibility: 64,
		crowd: 85,
		noise: 76,
		green: 12,
		transit: 66,
		lighting: 70,
		hours: "Shops till 9; cafes later",
		blurb: "Souvenir spine. Bargain, watch your bag, and duck into side streets for real food.",
		story: "The causeway linked the seven islands. Today it is the tourist high street — lively, well trafficked, and better before midnight.",
		tags: [
			"neighborhood",
			"shopping",
			"touristy"
		],
		moods: [
			"family",
			"budget",
			"late"
		]
	},
	{
		id: "bandra-hood",
		name: "Bandra West lanes",
		kind: "neighborhood",
		lat: 19.054,
		lng: 72.834,
		area: "Bandra West",
		rating: 4.6,
		price: 3,
		hiddenGem: 58,
		safety: 77,
		cleanliness: 73,
		accessibility: 66,
		crowd: 68,
		noise: 62,
		green: 46,
		transit: 64,
		lighting: 74,
		hours: "Cafes from 8am, bars toward midnight",
		blurb: "Chapel Road, Pali Hill edges, and the highest ‘would live here’ score in this set.",
		story: "East Indian Catholic villages grew into the suburb people mean when they say Bandra. Village crosses still mark several junctions.",
		tags: [
			"neighborhood",
			"cafes",
			"liveable"
		],
		moods: [
			"romantic",
			"solo",
			"rainy",
			"family"
		]
	},
	{
		id: "hostel",
		name: "Backpacker House, Colaba",
		kind: "hotel",
		lat: 18.9198,
		lng: 72.8304,
		area: "Colaba",
		rating: 4.2,
		price: 1,
		hiddenGem: 60,
		safety: 70,
		cleanliness: 72,
		accessibility: 48,
		crowd: 40,
		noise: 45,
		green: 10,
		transit: 64,
		lighting: 68,
		hours: "Check-in from 1pm",
		blurb: "Dorms a short walk from the Gateway without Taj prices.",
		story: "A converted chawl floor. Lockers, a terrace, and staff who will tell you which lanes to skip after 11.",
		tags: [
			"budget stay",
			"dorm",
			"colaba"
		],
		moods: ["budget", "solo"]
	},
	{
		id: "sea-lounge-walk",
		name: "University & Oval Maidan",
		kind: "landmark",
		lat: 18.9296,
		lng: 72.8308,
		area: "Fort",
		rating: 4.6,
		price: 1,
		hiddenGem: 46,
		safety: 75,
		cleanliness: 71,
		accessibility: 66,
		crowd: 40,
		noise: 35,
		green: 78,
		transit: 82,
		lighting: 62,
		hours: "Maidan daytime; Rajabai clock best before noon",
		blurb: "The green lung of the Fort. Cricket, convocation stone, and quiet.",
		story: "The Rajabai Clock Tower was modelled on Big Ben and funded by Premchand Roychand. The Oval is still a working maidan, not a museum lawn.",
		tags: [
			"green",
			"architecture",
			"quiet"
		],
		moods: [
			"solo",
			"rainy",
			"family",
			"romantic"
		],
		year: "1878"
	}
];
var REPORTS = [
	{
		id: "r1",
		lat: 18.948,
		lng: 72.828,
		area: "Marine Lines",
		text: "Hindmata junction waterlogs fast in a heavy spell. Knee-deep within 20 minutes. Buses divert.",
		kind: "weather",
		at: "2026-07-12T18:40:00+05:30",
		votes: 42,
		source: "seed"
	},
	{
		id: "r2",
		lat: 18.9404,
		lng: 72.8362,
		area: "Fort",
		text: "Pickpocketing reported on the CST footbridge after 9pm. Keep bags in front.",
		kind: "safety",
		at: "2026-09-28T21:10:00+05:30",
		votes: 31,
		source: "seed"
	},
	{
		id: "r3",
		lat: 18.928,
		lng: 72.8328,
		area: "Fort",
		text: "Kala Ghoda weekend street festival: lanes closed to cars Saturday 4–10pm, live music on the crescent.",
		kind: "culture",
		at: "2026-10-08T11:00:00+05:30",
		votes: 27,
		source: "seed"
	},
	{
		id: "r4",
		lat: 19.066,
		lng: 72.877,
		area: "Kurla",
		text: "Approach road east of Kurla station is poorly lit. Two-wheeler accidents this week near the signal.",
		kind: "safety",
		at: "2026-10-02T20:15:00+05:30",
		votes: 19,
		source: "seed"
	},
	{
		id: "r5",
		lat: 18.9445,
		lng: 72.8235,
		area: "Marine Lines",
		text: "Marine Drive promenade lighting is even tonight. Comfortable walk till 11.",
		kind: "safety",
		at: "2026-10-09T19:05:00+05:30",
		votes: 14,
		source: "seed"
	},
	{
		id: "r6",
		lat: 19.0548,
		lng: 72.8298,
		area: "Bandra West",
		text: "Linking Road traffic crawling from 6:30pm. Walk from Bandra station is faster.",
		kind: "traffic",
		at: "2026-10-09T18:20:00+05:30",
		votes: 11,
		source: "seed"
	}
];
var HISTORY = [
	{
		id: "h1",
		title: "Seven islands, one causeway",
		year: "1784–1845",
		area: "Colaba",
		text: "Hornby Vellard and later causeways stitched Bombay’s seven islands into a single landmass. Colaba Causeway is the piece you still walk.",
		placeId: "colaba-hood"
	},
	{
		id: "h2",
		title: "A terminus for an empire",
		year: "1887",
		area: "Fort",
		text: "Victoria Terminus opens, now CSMT. It remains the finest Gothic civic building in the city and a working railway.",
		placeId: "csmt"
	},
	{
		id: "h3",
		title: "Tata builds a hotel",
		year: "1903",
		area: "Colaba",
		text: "The Taj Mahal Palace opens its doors to guests the city’s older European hotels would not host.",
		placeId: "taj"
	},
	{
		id: "h4",
		title: "Queen’s Necklace",
		year: "1930s",
		area: "Marine Lines",
		text: "Art Deco apartments rise along the new Marine Drive reclamation — a skyline the city still recognises at night.",
		placeId: "marine"
	},
	{
		id: "h5",
		title: "Today in the city",
		year: "October",
		area: "Fort",
		text: "Navratri and early festive season fill maidans and Kala Ghoda lanes. Expect evening crowds, not morning silence.",
		placeId: "kala"
	}
];
var MOODS = [
	{
		id: "romantic",
		label: "Romantic"
	},
	{
		id: "family",
		label: "Family"
	},
	{
		id: "solo",
		label: "Solo"
	},
	{
		id: "rainy",
		label: "Rainy day"
	},
	{
		id: "late",
		label: "Late night"
	},
	{
		id: "budget",
		label: "Budget"
	}
];
var EMERGENCY = [
	{
		name: "National emergency",
		phone: "112"
	},
	{
		name: "Police",
		phone: "100"
	},
	{
		name: "Ambulance",
		phone: "108"
	},
	{
		name: "Women’s helpline",
		phone: "1091"
	}
];
var HOSPITALS = [
	{
		name: "Bombay Hospital",
		area: "Marine Lines",
		lat: 18.941,
		lng: 72.827,
		phone: "022-22067676"
	},
	{
		name: "JJ Hospital",
		area: "Byculla",
		lat: 18.963,
		lng: 72.834,
		phone: "022-23735555"
	},
	{
		name: "Lilavati Hospital",
		area: "Bandra West",
		lat: 19.0507,
		lng: 72.829,
		phone: "022-26751000"
	}
];
var SCORE_LABELS = {
	safety: "Safety",
	cleanliness: "Cleanliness",
	affordability: "Affordability",
	ratings: "Ratings",
	accessibility: "Accessibility",
	calm: "Calm (less crowd)",
	quiet: "Quiet",
	green: "Green cover",
	transit: "Transit"
};
function clamp(n) {
	return Math.max(0, Math.min(100, Math.round(n)));
}
function hourInMumbai(date = /* @__PURE__ */ new Date()) {
	return Number(new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		hourCycle: "h23",
		timeZone: "Asia/Kolkata"
	}).format(date));
}
function scoresFor(place, hour, nearbyReports) {
	const night = hour >= 21 || hour < 6;
	const lightingGap = night ? Math.round((100 - place.lighting) * .28) : Math.round((100 - place.lighting) * .05);
	const safetyReports = nearbyReports.filter((r) => r.kind === "safety");
	const reportPenalty = Math.min(18, safetyReports.length * 6);
	return {
		safety: clamp(place.safety - lightingGap - reportPenalty),
		cleanliness: place.cleanliness,
		affordability: clamp((5 - place.price) * 25),
		ratings: clamp(place.rating * 20),
		accessibility: place.accessibility,
		calm: clamp(100 - place.crowd),
		quiet: clamp(100 - place.noise),
		green: place.green,
		transit: place.transit,
		night,
		lightingGap,
		reportPenalty
	};
}
function overall(s) {
	return clamp([
		["safety", .28],
		["cleanliness", .12],
		["affordability", .1],
		["ratings", .16],
		["accessibility", .08],
		["calm", .06],
		["quiet", .05],
		["green", .05],
		["transit", .1]
	].reduce((sum, [k, w]) => sum + s[k] * w, 0));
}
function haversine(a, b) {
	const R = 6371;
	const dLat = (b.lat - a.lat) * Math.PI / 180;
	const dLng = (b.lng - a.lng) * Math.PI / 180;
	const lat1 = a.lat * Math.PI / 180;
	const lat2 = b.lat * Math.PI / 180;
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
	return 2 * R * Math.asin(Math.sqrt(h));
}
function reportsNear(place, reports, km = 1.2) {
	return reports.filter((r) => haversine(place, r) <= km);
}
var LEXICON = [
	{
		word: "waterlog",
		kind: "weather",
		tone: "alert"
	},
	{
		word: "flood",
		kind: "weather",
		tone: "alert"
	},
	{
		word: "rain",
		kind: "weather",
		tone: "note"
	},
	{
		word: "pickpocket",
		kind: "safety",
		tone: "alert"
	},
	{
		word: "theft",
		kind: "safety",
		tone: "alert"
	},
	{
		word: "accident",
		kind: "safety",
		tone: "alert"
	},
	{
		word: "poorly lit",
		kind: "safety",
		tone: "alert"
	},
	{
		word: "unsafe",
		kind: "safety",
		tone: "alert"
	},
	{
		word: "festival",
		kind: "culture",
		tone: "note"
	},
	{
		word: "music",
		kind: "culture",
		tone: "good"
	},
	{
		word: "traffic",
		kind: "traffic",
		tone: "alert"
	},
	{
		word: "crawling",
		kind: "traffic",
		tone: "alert"
	},
	{
		word: "lighting is even",
		kind: "safety",
		tone: "good"
	},
	{
		word: "comfortable",
		kind: "safety",
		tone: "good"
	}
];
function extractInsights(reports) {
	return reports.map((report) => {
		const lower = report.text.toLowerCase();
		const hit = LEXICON.find((item) => lower.includes(item.word));
		if (!hit) return null;
		return {
			id: report.id,
			area: report.area,
			summary: report.text,
			topic: hit.kind,
			tone: hit.tone,
			confidence: hit.word.length > 8 ? "high" : "medium",
			votes: report.votes
		};
	}).filter((x) => Boolean(x)).sort((a, b) => b.votes - a.votes);
}
function trafficBand(hour) {
	if (hour >= 8 && hour <= 11 || hour >= 17 && hour <= 21) return {
		label: "Heavy",
		detail: "Typical island-city peak. Western Express and Linking Road crawl; trains are faster than cabs.",
		level: 78
	};
	if (hour >= 12 && hour <= 16) return {
		label: "Moderate",
		detail: "Midday lull on the promenades, still slow through Bhendi Bazaar and Dadar.",
		level: 52
	};
	if (hour >= 22 || hour < 6) return {
		label: "Light",
		detail: "Roads open up. Walking safety now depends on lighting, not congestion.",
		level: 28
	};
	return {
		label: "Building",
		detail: "Early movement toward the Fort and mill district.",
		level: 40
	};
}
function recommend(places, mood, hour, reports) {
	return places.filter((p) => p.kind !== "neighborhood").map((p) => {
		const s = scoresFor(p, hour, reportsNear(p, reports));
		const moodBoost = mood && p.moods.includes(mood) ? 18 : 0;
		const gem = p.hiddenGem * .35;
		return {
			place: p,
			scores: s,
			rank: overall(s) * .55 + gem + moodBoost + (hour >= 21 && p.moods.includes("late") ? 8 : 0)
		};
	}).sort((a, b) => b.rank - a.rank);
}
function routeOptions(from, to, hour, reports) {
	const directKm = haversine(from, to);
	const walkMin = Math.round(directKm / 4.6 * 60);
	const fromS = scoresFor(from, hour, reportsNear(from, reports)).safety;
	const toS = scoresFor(to, hour, reportsNear(to, reports)).safety;
	const directSafety = Math.min(fromS, toS) - (directKm > 4 ? 8 : 0);
	const marine = {
		lat: 18.944,
		lng: 72.823
	};
	const fort = {
		lat: 18.932,
		lng: 72.834
	};
	const via = [
		from,
		marine,
		fort,
		to
	];
	const saferKm = haversine(from, marine) + haversine(marine, fort) + haversine(fort, to);
	const saferMin = Math.round(saferKm / 4.4 * 60);
	return [{
		id: "direct",
		name: "Direct walk",
		minutes: Math.max(8, walkMin),
		km: Number(directKm.toFixed(1)),
		minSafety: clamp(directSafety),
		note: "Shortest path. Risk is the lower of the two ends, plus a penalty if the gap is long and unlit.",
		via: [from.area, to.area],
		path: [{
			lat: from.lat,
			lng: from.lng
		}, {
			lat: to.lat,
			lng: to.lng
		}]
	}, {
		id: "safer",
		name: "Lit corridor",
		minutes: Math.max(12, saferMin),
		km: Number(saferKm.toFixed(1)),
		minSafety: clamp(Math.min(82, Math.max(fromS, toS, 74))),
		note: "Detour along Marine Drive and the Fort grid — higher lighting, more footfall, fewer reported dark junctions.",
		via: [
			from.name,
			"Marine Drive",
			"Fort",
			to.name
		],
		path: via.map((p) => ({
			lat: p.lat,
			lng: p.lng
		}))
	}];
}
function nearestHospital(origin, list) {
	return [...list].sort((a, b) => haversine(origin, a) - haversine(origin, b))[0];
}
function classifyReport(text) {
	const lower = text.toLowerCase();
	return LEXICON.find((item) => lower.includes(item.word))?.kind ?? "other";
}
var KEY = "citylife-mumbai-v1";
function load() {
	if (typeof window === "undefined") return {};
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return {
			mood: parsed.mood ?? null,
			saved: parsed.saved ?? [],
			reports: parsed.reports?.length ? parsed.reports : REPORTS,
			theme: parsed.theme === "light" ? "light" : "dark"
		};
	} catch {
		return {};
	}
}
var useCity = create((set, get) => ({
	mood: null,
	saved: [],
	reports: REPORTS,
	theme: "dark",
	query: "",
	kindFilter: "all",
	setMood: (mood) => set({ mood }),
	toggleSaved: (id) => {
		set({ saved: get().saved.includes(id) ? get().saved.filter((x) => x !== id) : [...get().saved, id] });
	},
	setQuery: (query) => set({ query }),
	setKind: (kindFilter) => set({ kindFilter }),
	setTheme: (theme) => set({ theme }),
	addReport: (report) => set({ reports: [report, ...get().reports] }),
	upvote: (id) => set({ reports: get().reports.map((r) => r.id === id ? {
		...r,
		votes: r.votes + 1
	} : r) })
}));
function hydrateCity() {
	const data = load();
	useCity.setState({
		mood: data.mood ?? null,
		saved: data.saved ?? [],
		reports: data.reports ?? REPORTS,
		theme: data.theme ?? "dark"
	});
}
function persistCity() {
	const { mood, saved, reports, theme } = useCity.getState();
	const slim = reports.map((r) => {
		if (r.text.startsWith("data:image") || r.text.length > 4e3) return {
			...r,
			text: r.text.slice(0, 500)
		};
		return r;
	});
	localStorage.setItem(KEY, JSON.stringify({
		mood,
		saved,
		reports: slim,
		theme
	}));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function MapCanvas({ places, reports, activeId, path, onSelect }) {
	const ref = (0, import_react.useRef)(null);
	const mapRef = (0, import_react.useRef)(null);
	const layerRef = (0, import_react.useRef)(null);
	const selectRef = (0, import_react.useRef)(onSelect);
	const [booted, setBooted] = (0, import_react.useState)(0);
	selectRef.current = onSelect;
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			await Promise.resolve({});
			if (cancelled || !ref.current || mapRef.current) return;
			const map = L.map(ref.current, { zoomControl: false }).setView([CITY.center.lat, CITY.center.lng], CITY.zoom);
			L.control.zoom({ position: "bottomright" }).addTo(map);
			L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
				attribution: "&copy; OSM &copy; CARTO",
				subdomains: "abcd",
				maxZoom: 19
			}).addTo(map);
			layerRef.current = L.layerGroup().addTo(map);
			mapRef.current = map;
			setBooted((n) => n + 1);
			window.setTimeout(() => map.invalidateSize(), 250);
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	const signature = JSON.stringify({
		ids: places.map((p) => p.id),
		activeId,
		reports: reports.map((r) => r.id),
		path
	});
	(0, import_react.useEffect)(() => {
		const map = mapRef.current;
		const layer = layerRef.current;
		if (!map || !layer) return;
		let dead = false;
		(async () => {
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			if (dead || !layerRef.current || !mapRef.current) return;
			layerRef.current.clearLayers();
			for (const place of places) {
				const active = place.id === activeId;
				const color = place.safety >= 75 ? "#7dba8a" : place.safety >= 55 ? "#e2a23a" : "#d4654a";
				const size = active ? 18 : 12;
				const icon = L.divIcon({
					className: "",
					html: `<div style="width:${size}px;height:${size}px;border-radius:999px;background:${color};border:2px solid #f4f1e8;box-shadow:0 0 0 4px rgba(0,0,0,.35)"></div>`,
					iconSize: [size, size],
					iconAnchor: [size / 2, size / 2]
				});
				L.marker([place.lat, place.lng], { icon }).addTo(layerRef.current).on("click", () => selectRef.current(place.id));
			}
			for (const report of reports) {
				const icon = L.divIcon({
					className: "",
					html: `<div style="width:8px;height:8px;border-radius:2px;background:#f4f1e8"></div>`,
					iconSize: [8, 8],
					iconAnchor: [4, 4]
				});
				L.marker([report.lat, report.lng], { icon }).addTo(layerRef.current).bindTooltip(report.text.slice(0, 90), { direction: "top" });
			}
			if (path && path.length > 1) {
				L.polyline(path.map((p) => [p.lat, p.lng]), {
					color: "#e2a23a",
					weight: 4,
					opacity: .9
				}).addTo(layerRef.current);
				mapRef.current.fitBounds(L.latLngBounds(path.map((p) => [p.lat, p.lng])), { padding: [24, 24] });
			}
			mapRef.current.invalidateSize();
		})();
		return () => {
			dead = true;
		};
	}, [
		signature,
		places,
		reports,
		activeId,
		path,
		booted
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "h-full min-h-72 w-full"
	});
}
var TABS = [
	{
		id: "today",
		label: "Today",
		icon: Radio
	},
	{
		id: "explore",
		label: "Explore",
		icon: Compass
	},
	{
		id: "culture",
		label: "Culture",
		icon: Landmark
	},
	{
		id: "safety",
		label: "Safety",
		icon: Shield
	},
	{
		id: "compare",
		label: "Compare",
		icon: GitCompare
	},
	{
		id: "pulse",
		label: "Pulse",
		icon: MapPinned
	}
];
var KINDS = [
	"all",
	"food",
	"landmark",
	"hotel",
	"experience",
	"neighborhood"
];
function CityLife() {
	const store = useCity();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [tab, setTab] = (0, import_react.useState)("today");
	const [activeId, setActiveId] = (0, import_react.useState)("marine");
	const [compareA, setCompareA] = (0, import_react.useState)("bandra-hood");
	const [compareB, setCompareB] = (0, import_react.useState)("kurla");
	const [routeFrom, setRouteFrom] = (0, import_react.useState)("csmt");
	const [routeTo, setRouteTo] = (0, import_react.useState)("marine");
	const [routeId, setRouteId] = (0, import_react.useState)("safer");
	const [sos, setSos] = (0, import_react.useState)(false);
	const [reportText, setReportText] = (0, import_react.useState)("");
	const [listening, setListening] = (0, import_react.useState)(false);
	const [weather, setWeather] = (0, import_react.useState)({
		temp: null,
		code: null,
		aqi: null
	});
	const hour = hourInMumbai();
	(0, import_react.useEffect)(() => {
		hydrateCity();
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		document.documentElement.dataset.theme = store.theme;
		persistCity();
	}, [
		ready,
		store.theme,
		store.mood,
		store.saved,
		store.reports
	]);
	(0, import_react.useEffect)(() => {
		let ignore = false;
		(async () => {
			try {
				const [wx, aq] = await Promise.all([fetch("https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m,weather_code").then((r) => r.json()), fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=19.076&longitude=72.8777&current=us_aqi").then((r) => r.json())]);
				if (ignore) return;
				setWeather({
					temp: wx?.current?.temperature_2m ?? null,
					code: wx?.current?.weather_code ?? null,
					aqi: aq?.current?.us_aqi ?? null
				});
			} catch {
				if (!ignore) setWeather({
					temp: 29,
					code: 2,
					aqi: 84
				});
			}
		})();
		return () => {
			ignore = true;
		};
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = store.query.trim().toLowerCase();
		return PLACES.filter((p) => {
			if (store.kindFilter !== "all" && p.kind !== store.kindFilter) return false;
			if (store.mood && !p.moods.includes(store.mood) && p.kind !== "neighborhood") return false;
			if (!q) return true;
			return p.name.toLowerCase().includes(q) || p.area.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)) || (p.cuisine?.toLowerCase().includes(q) ?? false);
		});
	}, [
		store.query,
		store.kindFilter,
		store.mood
	]);
	const recs = (0, import_react.useMemo)(() => recommend(PLACES, store.mood, hour, store.reports).slice(0, 4), [
		store.mood,
		store.reports,
		hour
	]);
	const insights = (0, import_react.useMemo)(() => extractInsights(store.reports), [store.reports]);
	const traffic = trafficBand(hour);
	const active = PLACES.find((p) => p.id === activeId) ?? null;
	const from = PLACES.find((p) => p.id === routeFrom) ?? PLACES[0];
	const to = PLACES.find((p) => p.id === routeTo) ?? PLACES[1];
	const routes = routeOptions(from, to, hour, store.reports);
	const chosen = routes.find((r) => r.id === routeId) ?? routes[0];
	const hospital = nearestHospital(active ?? CITY.center, HOSPITALS);
	function openPlace(id) {
		setActiveId(id);
		setTab("explore");
	}
	function startVoice() {
		const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!Rec) {
			setReportText((t) => t || "Voice input is not available in this browser.");
			return;
		}
		const rec = new Rec();
		rec.lang = "en-IN";
		rec.onstart = () => setListening(true);
		rec.onend = () => setListening(false);
		rec.onresult = (ev) => {
			const text = ev.results[0]?.[0]?.transcript ?? "";
			if (tab === "pulse") setReportText(text);
			else store.setQuery(text);
		};
		rec.start();
	}
	function submitReport() {
		const text = reportText.trim();
		if (text.length < 8) return;
		const anchor = active ?? PLACES[4];
		store.addReport({
			id: `u-${Date.now()}`,
			lat: anchor.lat + (Math.random() - .5) * .01,
			lng: anchor.lng + (Math.random() - .5) * .01,
			area: anchor.area,
			text,
			kind: classifyReport(text),
			at: (/* @__PURE__ */ new Date()).toISOString(),
			votes: 1,
			source: "you"
		});
		setReportText("");
		setTab("pulse");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-none tracking-tight",
								children: "City Life"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									CITY.name,
									" · ",
									CITY.tagline
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative ml-auto min-w-[12rem] flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: store.query,
									onChange: (e) => store.setQuery(e.target.value),
									placeholder: "Search food, Fort, hidden gems…",
									className: "h-11 w-full rounded-md border border-border bg-surface pr-12 pl-10 text-sm outline-none focus:border-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Voice search",
									onClick: startVoice,
									className: cn("absolute top-1/2 right-1 grid size-9 -translate-y-1/2 place-items-center rounded-md", listening ? "bg-primary text-primary-fg" : "text-muted"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => store.setTheme(store.theme === "dark" ? "light" : "dark"),
							className: "grid size-11 place-items-center rounded-md border border-border bg-surface",
							"aria-label": "Toggle theme",
							children: store.theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSos(true),
							className: "h-11 rounded-md bg-danger px-3 text-sm font-semibold text-fg",
							children: "SOS"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3",
					children: TABS.map((item) => {
						const Icon = item.icon;
						const on = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(item.id),
							className: cn("flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm", on ? "bg-primary text-primary-fg" : "bg-surface text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-5",
				children: [
					tab === "today" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Today, {
						hour,
						weather,
						traffic,
						recs,
						insights,
						onOpen: openPlace,
						mood: store.mood,
						setMood: store.setMood
					}),
					tab === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explore, {
						places: filtered,
						reports: store.reports,
						active,
						hour,
						saved: store.saved,
						onSelect: setActiveId,
						onToggleSave: store.toggleSaved,
						kind: store.kindFilter,
						setKind: store.setKind,
						mood: store.mood,
						setMood: store.setMood
					}),
					tab === "culture" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Culture, { onOpen: openPlace }),
					tab === "safety" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Safety, {
						from,
						to,
						setFrom: setRouteFrom,
						setTo: setRouteTo,
						routes,
						chosen,
						setRouteId,
						reports: store.reports,
						onSelect: openPlace
					}),
					tab === "compare" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {
						aId: compareA,
						bId: compareB,
						setA: setCompareA,
						setB: setCompareB,
						hour,
						reports: store.reports
					}),
					tab === "pulse" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, {
						insights,
						reports: store.reports,
						text: reportText,
						setText: setReportText,
						onSubmit: submitReport,
						onVoice: startVoice,
						listening,
						upvote: store.upvote,
						weather,
						traffic
					})
				]
			}),
			sos && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-end bg-bg/70 p-4 sm:place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-lg border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Help nearby"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									"Nearest listed hospital: ",
									hospital.name,
									" (",
									hospital.area,
									")"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close",
								onClick: () => setSos(false),
								className: "grid size-10 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2",
							children: [EMERGENCY.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${e.phone}`,
								className: "flex items-center justify-between rounded-md bg-surface-2 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 font-semibold text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
										" ",
										e.phone
									]
								})]
							}) }, e.phone)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${hospital.phone}`,
								className: "flex items-center justify-between rounded-md bg-surface-2 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hospital.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-primary",
									children: hospital.phone
								})]
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted",
							children: "Location stays on this device. Sharing uses your phone’s dialer — nothing is uploaded."
						})
					]
				})
			})
		]
	});
}
function MoodRow({ mood, setMood }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2 overflow-x-auto pb-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setMood(null),
			className: cn("h-9 shrink-0 rounded-md px-3 text-sm", mood === null ? "bg-primary text-primary-fg" : "bg-surface-2"),
			children: "Any mood"
		}), MOODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setMood(mood === m.id ? null : m.id),
			className: cn("h-9 shrink-0 rounded-md px-3 text-sm", mood === m.id ? "bg-primary text-primary-fg" : "bg-surface-2"),
			children: m.label
		}, m.id))]
	});
}
function Meter({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between text-xs text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg",
				children: value
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full", value >= 70 ? "bg-ok" : value >= 50 ? "bg-primary" : "bg-danger"),
				style: { width: `${value}%` }
			})
		}),
		hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: hint
		})
	] });
}
function Today({ hour, weather, traffic, recs, insights, onOpen, mood, setMood }) {
	const sky = weatherLabel(weather.code);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: "Weather · Open-Meteo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-2 text-3xl",
								children: weather.temp == null ? "—" : `${Math.round(weather.temp)}°`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									sky,
									" · AQI ",
									weather.aqi == null ? "—" : Math.round(weather.aqi)
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: [
									"Traffic model · ",
									hour,
									":00 IST"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-2 text-3xl",
								children: traffic.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: traffic.detail
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: "City pulse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display mt-2 text-3xl",
								children: [insights.filter((i) => i.tone === "alert").length, " alerts"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Drawn from citizen notes with a keyword reader, not a black-box model."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Explore by mood"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoodRow, {
					mood,
					setMood
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Worth your next hour"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: recs.map(({ place, scores }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(place.id),
					className: "rounded-lg border border-border bg-surface p-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: place.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-primary",
								children: overall(scores)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								place.area,
								" · ",
								place.blurb
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [
								"Safety ",
								scores.safety,
								" · Gem ",
								place.hiddenGem,
								" · ",
								place.hours
							]
						})
					]
				}, place.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Verified-feeling notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: insights.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: [
							item.area,
							" · ",
							item.topic,
							" · ",
							item.confidence,
							" confidence · ",
							item.votes,
							" votes"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: item.summary
					})]
				}, item.id))
			})] })
		]
	});
}
function Explore({ places, reports, active, hour, saved, onSelect, onToggleSave, kind, setKind, mood, setMood }) {
	const scores = active ? scoresFor(active, hour, reportsNear(active, reports)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoodRow, {
				mood,
				setMood
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(k),
					className: cn("h-9 shrink-0 rounded-md px-3 text-sm capitalize", kind === k ? "bg-primary text-primary-fg" : "bg-surface"),
					children: k
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_22rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[28rem] overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {
						places,
						reports,
						activeId: active?.id,
						onSelect
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "city-scroll max-h-[28rem] space-y-2 overflow-auto",
					children: [places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(p.id),
						className: cn("w-full rounded-md border px-3 py-3 text-left", active?.id === p.id ? "border-primary bg-surface" : "border-border bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: p.kind
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								p.area,
								" · ",
								"₹".repeat(p.price),
								" · ",
								p.rating.toFixed(1)
							]
						})]
					}, p.id)), places.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Nothing matches. Clear mood or search."
					})]
				})]
			}),
			active && scores && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: [
									active.area,
									" · ",
									active.kind
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: active.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-2xl text-sm text-muted",
								children: active.story
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onToggleSave(active.id),
								className: "flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved.includes(active.id) && "fill-primary text-primary") }), saved.includes(active.id) ? "Saved" : "Save"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => speak(active),
								className: "h-10 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg",
								children: "Audio guide"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: active.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted",
						children: [
							"Hours: ",
							active.hours,
							". Scores shift after 9pm using lighting (",
							active.lighting,
							") and nearby safety notes (",
							reportsNear(active, reports).length,
							" within 1.2 km)."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
								label: "Safety now",
								value: scores.safety,
								hint: scores.night ? `Night penalty from lighting: −${scores.lightingGap}. Reports: −${scores.reportPenalty}.` : "Daytime: lighting barely moves the score."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
								label: "Cleanliness",
								value: scores.cleanliness
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
								label: "Affordability",
								value: scores.affordability
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
								label: "Transit",
								value: scores.transit
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: [
							"Composite ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: overall(scores)
							}),
							" — safety 28%, ratings 16%, cleanliness 12%, transit 10%, affordability 10%, and smaller weights for access, calm, quiet, green."
						]
					})
				]
			})
		]
	});
}
function Culture({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "History that still has an address"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-2xl text-sm text-muted",
			children: "A short civic timeline for the island city. Each beat links to a place you can open on the map."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3 border-l border-border pl-4",
			children: HISTORY.map((beat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-wide text-primary uppercase",
					children: [
						beat.year,
						" · ",
						beat.area
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: beat.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: beat.text
				}),
				beat.placeId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen(beat.placeId),
					className: "mt-2 text-sm text-primary",
					children: "Show on the map"
				})
			] }, beat.id))
		})]
	});
}
function Safety({ from, to, setFrom, setTo, routes, chosen, setRouteId, reports, onSelect }) {
	const hot = [...PLACES].sort((a, b) => a.safety - b.safety).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Safer way across"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Two walking options. The lit corridor prefers Marine Drive and Fort, where footfall and street lighting are higher in this dataset."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPlace, {
					label: "From",
					value: from.id,
					onChange: setFrom
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPlace, {
					label: "To",
					value: to.id,
					onChange: setTo
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-80 overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {
						places: [from, to],
						reports,
						activeId: to.id,
						path: chosen.path,
						onSelect
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: routes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setRouteId(r.id),
						className: cn("w-full rounded-md border p-3 text-left", chosen.id === r.id ? "border-primary bg-surface" : "border-border"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: r.minSafety
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									r.km,
									" km · about ",
									r.minutes,
									" min · via ",
									r.via.join(" → ")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: r.note
							})
						]
					}, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "Lower base-safety pockets"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2 sm:grid-cols-2",
				children: hot.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(p.id),
					className: "w-full rounded-md bg-surface px-3 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-sm text-muted",
						children: [
							"Base safety ",
							p.safety,
							" · lighting ",
							p.lighting,
							". ",
							p.blurb
						]
					})]
				}) }, p.id))
			})] })
		]
	});
}
function Compare({ aId, bId, setA, setB, hour, reports }) {
	const a = PLACES.find((p) => p.id === aId) ?? PLACES[0];
	const b = PLACES.find((p) => p.id === bId) ?? PLACES[1];
	const sa = scoresFor(a, hour, reportsNear(a, reports));
	const sb = scoresFor(b, hour, reportsNear(b, reports));
	const keys = Object.keys(SCORE_LABELS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Best against worst, in the open"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPlace, {
					label: "Place A",
					value: a.id,
					onChange: setA
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPlace, {
					label: "Place B",
					value: b.id,
					onChange: setB
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: "Measure"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: a.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: b.name
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: "Composite"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-primary",
								children: overall(sa)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-primary",
								children: overall(sb)
							})
						]
					}), keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: SCORE_LABELS[k]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: cn("px-3 py-2", sa[k] >= sb[k] ? "text-ok" : ""),
								children: sa[k]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: cn("px-3 py-2", sb[k] > sa[k] ? "text-ok" : ""),
								children: sb[k]
							})
						]
					}, k))] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Green marks the stronger side. Safety already includes the night lighting penalty and nearby citizen safety notes. Affordability is inverted from the price band (1–4)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankLists, {
				hour,
				reports
			})
		]
	});
}
function RankLists({ hour, reports }) {
	const ranked = PLACES.map((p) => ({
		p,
		s: scoresFor(p, hour, reportsNear(p, reports))
	}));
	const safest = [...ranked].sort((a, b) => b.s.safety - a.s.safety).slice(0, 3);
	const gems = [...PLACES].sort((a, b) => b.hiddenGem - a.hiddenGem).slice(0, 3);
	const avoid = [...ranked].filter((x) => x.s.safety < 55).sort((a, b) => a.s.safety - b.s.safety).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rank, {
				title: "Higher safety now",
				rows: safest.map((x) => `${x.p.name} · ${x.s.safety}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rank, {
				title: "Hidden gem index",
				rows: gems.map((p) => `${p.name} · ${p.hiddenGem}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rank, {
				title: "Think twice after dark",
				rows: avoid.map((x) => `${x.p.name} · ${x.s.safety}`)
			})
		]
	});
}
function Rank({ title, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-1 text-sm text-muted",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
		})]
	});
}
function Pulse({ insights, reports, text, setText, onSubmit, onVoice, listening, upvote, weather, traffic }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Your city today"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						weather.temp == null ? "Weather loading." : `${Math.round(weather.temp)}° and ${weatherLabel(weather.code).toLowerCase()}.`,
						" Air quality index ",
						weather.aqi == null ? "unavailable" : Math.round(weather.aqi),
						". Traffic is ",
						traffic.label.toLowerCase(),
						" — ",
						traffic.detail
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: insights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-surface p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted uppercase",
							children: [
								item.tone,
								" · ",
								item.topic,
								" · ",
								item.area
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: item.summary
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display pt-2 text-xl",
					children: "Citizen notes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-border px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									r.area,
									" · ",
									r.kind,
									" · ",
									r.source === "you" ? "you" : "civic sample",
									" · ",
									new Date(r.at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: r.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => upvote(r.id),
								className: "mt-2 text-sm text-primary",
								children: ["Useful · ", r.votes]
							})
						]
					}, r.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "h-fit rounded-lg border border-border bg-surface p-4",
			onSubmit: (e) => {
				e.preventDefault();
				onSubmit();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Add a note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Dropped near the place you last opened. Keywords such as flood, festival, theft, or traffic set the topic."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: text,
					onChange: (e) => setText(e.target.value),
					rows: 5,
					className: "mt-3 w-full rounded-md border border-border bg-bg p-3 text-sm outline-none",
					placeholder: "Example: Street festival starting at Kala Ghoda, lanes closed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onVoice,
						className: cn("h-10 rounded-md border border-border px-3 text-sm", listening && "bg-primary text-primary-fg"),
						children: listening ? "Listening…" : "Voice note"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-10 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg",
						children: "Publish"
					})]
				})
			]
		})]
	});
}
function SelectPlace({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 h-11 w-full rounded-md border border-border bg-surface px-3",
			children: PLACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: p.id,
				children: p.name
			}, p.id))
		})]
	});
}
function weatherLabel(code) {
	if (code == null) return "Conditions pending";
	if (code === 0) return "Clear";
	if (code <= 3) return "Partly cloudy";
	if (code <= 48) return "Foggy";
	if (code <= 67) return "Rain";
	if (code <= 77) return "Snow — unlikely";
	if (code <= 82) return "Showers";
	return "Storm risk";
}
function speak(place) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const u = new SpeechSynthesisUtterance(`${place.name}. ${place.story}`);
	u.lang = "en-IN";
	window.speechSynthesis.speak(u);
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityLife, {});
}
//#endregion
export { Home as component };
