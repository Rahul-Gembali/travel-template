/**
 * HORIZONS — EDITORIAL COMPENDIUM DATA ARCHITECTURE
 * Exhaustive, unabridged dataset for 6 global cultural havens.
 * Curated with slow-travel journalism aesthetics, high-res Unsplash photography,
 * verified boutique lodging, authentic hidden gems, and humanized traveler field notes.
 */

export const CITIES_DATA = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    tagline: "Silent Cedar, Moss Sanctuaries & Living Rituals",
    theme: "Meditative Gardens & Ancient Alleys",
    vibe: "Heritage",
    accentColor: "terracotta",
    coordinates: {
      lat: 35.0116,
      lng: 135.7681,
      display: "35° 00′ 42″ N, 135° 46′ 05″ E",
      elevation: "54 m",
    },
    bestSeason: "Late October – Late November & Early April",
    currency: "JPY (¥)",
    weather: {
      temp: "18°C",
      condition: "Misty Rain & Cedar Breeze",
      timeZone: "Asia/Tokyo",
      tzOffset: "+09:00",
    },
    narrative: [
      "Kyoto does not reveal itself to the hurried passerby. Long after the morning bus tours depart the gilded pavilions, the ancient capital slips back into its rhythmic cadence of sliding shoji screens, weeping willows brushing the Shirakawa canal, and the dry tap of cedar sandals against polished river stone. Here, architecture is less about asserting dominance over the terrain than framing the negative space between moss and timber. In districts like Nishijin and Kamigamo, narrow machiya townhouses harbor fourth-generation lacquer artisans and indigo dyers who still judge the humidity of the air by the way morning water evaporates from unglazed clay tiles.",
      "To walk Kyoto properly is to surrender the impulse for total capture. Dawn breaks cold over the Eastern Hills, illuminating the dry-gravel waves of Zen gardens where every raked furrow mirrors the sea. Evenings dissolve into the scent of binchotan charcoal and simmering dashi wafting through Pontocho’s shadowed alleyways. It is a city suspended between austere monastic discipline and sensual refinement—a reminder that beauty is sweetest when fragile and transient."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
      alt: "Traditional pagoda illuminated at dusk overlooking Kyoto's historic Higashiyama district",
      credit: "Su San Lee / Unsplash",
      caption: "Higashiyama at twilight, framed by cedar eaves and stone stairways."
    },
    gallery: [
      {
        id: "kyo-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
        alt: "Clean lines of traditional wooden engawa veranda overlooking a raked Japanese rock garden",
        title: "Engawa & Moss Horizon",
        credit: "Sora Sagano / Unsplash"
      },
      {
        id: "kyo-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop",
        alt: "Atmospheric lantern-lit stone alleyway in Gion during early evening",
        title: "Gion Stone Pathway",
        credit: "Susann Schuster / Unsplash"
      },
      {
        id: "kyo-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1200&auto=format&fit=crop",
        alt: "Golden autumn maples framing a tranquil temple pond with water reflections",
        title: "Maple Canopy Reflections",
        credit: "David Emrich / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-kyo-1",
        name: "Sowaka Ryokan",
        neighborhood: "Yasaka / Gion",
        style: "Restored Sukiya-Style Sanctuary",
        priceTier: "$$$$",
        pricePerNight: "¥84,000 / night",
        perks: [
          "Private Hinoki Cedar Onsen",
          "Centuries-old Courtyard Moss Garden",
          "Michelin-recognized Kaiseki Breakfast"
        ],
        bookingLink: "#booking-sowaka",
        summary: "A seamless juxtaposition of a 100-year-old traditional sukiya annex and a razor-sharp minimalist modern wing designed by architect Shigeru Uchida."
      },
      {
        id: "stay-kyo-2",
        name: "The Shinmonzen",
        neighborhood: "Shinmonzen-dori",
        style: "Contemporary Luxury Machiya",
        priceTier: "$$$$",
        pricePerNight: "¥115,000 / night",
        perks: [
          "Architecture by Tadao Ando",
          "Direct River Balcony Overlooks",
          "Jean-Georges Farm-to-Table Dining"
        ],
        bookingLink: "#booking-shinmonzen",
        summary: "Nine intimate suites set behind an authentic antique dealer facade, showcasing Ando's trademark silky cast-concrete paired with raw Japanese cypress."
      },
      {
        id: "stay-kyo-3",
        name: "Genji Kyoto",
        neighborhood: "Kamogawa Riverbank",
        style: "Boutique Botanical Retreat",
        priceTier: "$$$",
        pricePerNight: "¥42,000 / night",
        perks: [
          "Rooftop Sky Garden with Mountain Views",
          "Handcrafted Washi Paper Lighting",
          "Curated Single-Origin Uji Green Teas"
        ],
        bookingLink: "#booking-genji",
        summary: "Intimate riverside residence inspired by the Tale of Genji, featuring micro-pocket gardens (tsuboniwa) woven through every private living space."
      }
    ],
    underratedGems: [
      {
        id: "gem-kyo-1",
        name: "Honen-in Temple Grounds",
        category: "Secret Moss Sanctuary",
        insiderTip: "Bypass the congested Philosopher's Path crowds at 7:15 AM. Slip through Honen-in's moss-thatched gate to witness the twin raised sand mounds freshly sculpted into seasonal geometric motifs."
      },
      {
        id: "gem-kyo-2",
        name: "Weekenders Coffee Tominokoji",
        category: "Underground Cafe",
        insiderTip: "Tucked inside an improbable gravel parking lot behind a traditional tile roof. Order a hand-poured washed Ethiopian roast and sip it beside their miniature stone bamboo garden."
      },
      {
        id: "gem-kyo-3",
        name: "Ichijoji Bookstore District",
        category: "Bohemian Literary Quarter",
        insiderTip: "Board the vintage Eizan Electric Railway to Keiryu-gai. Spend an afternoon browsing Keibunsha Ichijoji—one of the world's finest indie bookstores—then queue for tonkotsu ramen at Menya Gokkei."
      }
    ],
    reviews: [
      {
        id: "rev-kyo-1",
        author: "Clara Lindqvist",
        country: "Sweden",
        archetype: "Architect & Landscape Designer",
        date: "November 2025",
        rating: 5,
        praise: "The spatial rhythm of Sowaka was a masterclass in light filtration. Waking up to the scent of wet hinoki wood and damp moss will redefine your standard of quiet luxury.",
        caveat: "Popular temples like Nanzen-ji fill up by 9:00 AM sharp; schedule all your contemplative wandering for the dawn hours before the city wakes."
      },
      {
        id: "rev-kyo-2",
        author: "Kenjiro Takahashi",
        country: "Canada",
        archetype: "Solo Food & Tea Writer",
        date: "October 2025",
        rating: 5,
        praise: "The tea ceremony at Ippodo’s tearoom followed by a stroll along the Kamogawa River during sunset is transcendent. Kyoto’s culinary restraint is unparalleled.",
        caveat: "Cash remains king in smaller obanzai diners and traditional crafts stalls—keep plenty of 1,000-yen notes on hand."
      },
      {
        id: "rev-kyo-3",
        author: "Elena Rostova",
        country: "Germany",
        archetype: "Couple on Sabbatical",
        date: "September 2025",
        rating: 4,
        praise: "Rent a mamachari bicycle and pedal along the riverbank all the way up to Kamigamo Shrine. It felt like stepping into an intimate Edo-period scroll.",
        caveat: "Late summer humidity can be punishing; pack light linen garments and carry a pocket towel like the locals."
      }
    ]
  },
  {
    id: "oaxaca",
    name: "Oaxaca",
    country: "Mexico",
    continent: "Americas",
    tagline: "Volcanic Cantera, Ancient Smoke & Textile Sovereignty",
    theme: "Culinary Alchemy & Indigenous Craft",
    vibe: "Culinary",
    accentColor: "ochre",
    coordinates: {
      lat: 17.0732,
      lng: -96.7266,
      display: "17° 04′ 23″ N, 96° 43′ 35″ W",
      elevation: "1,555 m",
    },
    bestSeason: "October – April (Dia de los Muertos & Dry Winter)",
    currency: "MXN ($)",
    weather: {
      temp: "24°C",
      condition: "Crisp Sun & Wild Agave Warmth",
      timeZone: "America/Mexico_City",
      tzOffset: "-06:00",
    },
    narrative: [
      "Perched in the high central valley where the Sierra Madre mountain ranges converge, Oaxaca (pronounced wah-HAH-kah) is an open-air sensory symposium. The city’s green volcanic quarry stone (cantera verde) glows with an ethereal viridian hue under the high-altitude morning sun. Here, sixteenth-century baroque cloisters share courtyards with Zapotec and Mixtec textile collectives whose natural cochineal reds and wild indigo vats have remained unbroken for two millennia. Every cobblestone corner carries the fragrance of roasted cacao beans, burning copal resin, and hand-pressed heirloom corn tortillas puffing gently over wood-fired clay comales.",
      "Oaxaca is defined above all by its culinary depth. To eat here is to experience mole not as a single sauce, but as a ceremonial architectural construct of thirty toasted seeds, dry chiles, plantains, and bitter chocolate simmered over twelve hours. Nightfall brings a convivial hum to the Santo Domingo esplanade, where families congregate beneath towering candelabra cacti, mezcaleros pour wild-harvested Tobalá into shallow jícara gourds, and brass bands fill the cool mountain air with festive brass melodies."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1600&auto=format&fit=crop",
      alt: "Colonial street in Oaxaca with green cantera stone facades leading to the Santo Domingo church",
      credit: "Roman Lopez / Unsplash",
      caption: "Santo Domingo de Guzmán bathed in late afternoon amber light."
    },
    gallery: [
      {
        id: "oax-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1512816689685-6188373305c4?q=80&w=1200&auto=format&fit=crop",
        alt: "The vaulted colonial stone arches and botanical garden of Santo Domingo Oaxaca",
        title: "Cantera Arches & Agave Courtyard",
        credit: "Carlos Lindner / Unsplash"
      },
      {
        id: "oax-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop",
        alt: "Traditional clay comal with roasted chiles, tomatoes, and corn tortillas in Oaxaca market",
        title: "Smoky Comal & Chile Varieties",
        credit: "Javier Garcia / Unsplash"
      },
      {
        id: "oax-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
        alt: "The petrified limestone waterfalls and natural mineral pools of Hierve el Agua",
        title: "Hierve el Agua Mineral Cliffs",
        credit: "Erick Butler / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-oax-1",
        name: "Grana B&B",
        neighborhood: "Centro Histórico",
        style: "Restored 18th-Century Casona",
        priceTier: "$$$",
        pricePerNight: "$3,800 MXN / night",
        perks: [
          "Courtyard Water Fountain & Bougainvillea",
          "Artisanal Oaxacan Breakfast by Local Cooks",
          "Sunlit Rooftop Terrace Overlooking Santo Domingo"
        ],
        bookingLink: "#booking-grana",
        summary: "A tranquil sanctuary with lime-washed adobe walls, hand-loomed Zapotec wool textiles, and quiet arched porticos that shield you from the city's pulse."
      },
      {
        id: "stay-oax-2",
        name: "Hotel Sin Nombre",
        neighborhood: "Calle 20 de Noviembre",
        style: "North African-Influenced Brutalist Minimalist",
        priceTier: "$$$$",
        pricePerNight: "$6,200 MXN / night",
        perks: [
          "Triple-Height Central Light Well & Plunge Pool",
          "Plant-Based Oaxacan Gastronomic Restaurant",
          "Underground Mezcal Tasting Cava"
        ],
        bookingLink: "#booking-sinnombre",
        summary: "Designed by architect Joshua Rice, featuring soaring vaulted brick ceilings, stark white plaster, and bespoke hand-carved Sabino wood furnishings."
      },
      {
        id: "stay-oax-3",
        name: "Boulenc Bed & Bakery",
        neighborhood: "Calle Porfirio Díaz",
        style: "Bohemian Sourdough Sanctuary",
        priceTier: "$$",
        pricePerNight: "$2,600 MXN / night",
        perks: [
          "Complimentary Fresh Morning Sourdough & Jams",
          "Lush Secret Courtyard Garden",
          "Record Player & Vinyl Library in Suites"
        ],
        bookingLink: "#booking-boulenc",
        summary: "Seven bohemian suites located right above Oaxaca’s beloved fermentation bakery, full of exposed brick, antique tile work, and vintage leather armchairs."
      }
    ],
    underratedGems: [
      {
        id: "gem-oax-1",
        name: "Mercado de la Cosecha (Organic Market)",
        category: "Local Artisanal Market",
        insiderTip: "Skip the tourist stalls on Wednesday morning. Visit this shaded courtyard for Tejate—the ancient frothy maize and cacao elixir served in painted jícara bowls—and tamales wrapped in banana leaf."
      },
      {
        id: "gem-oax-2",
        name: "In Situ Mezcalería",
        category: "Underground Mezcal Tasting Room",
        insiderTip: "Curated by mezcal historian Ulises Torrentera. Ask for small-batch ancestral distillations made in clay pots from wild agaves like Tepeztate and Arroqueño."
      },
      {
        id: "gem-oax-3",
        name: "Teotitlán del Valle Studio Visits",
        category: "Indigenous Textile Village",
        insiderTip: "Take a local colectivo 30 minutes east to the home studio of the Mendoza family. Watch them grind cochineal insects into brilliant vermilion and carmine dye before your eyes."
      }
    ],
    reviews: [
      {
        id: "rev-oax-1",
        author: "Mateo Alvarez",
        country: "Spain",
        archetype: "Chef & Culinary Researcher",
        date: "January 2026",
        rating: 5,
        praise: "The complexity of Mole Negro at Criollo and the street tacos al carbón outside the church gates made this the most inspiring culinary destination of my life.",
        caveat: "Mezcal is potent (often 48-52% ABV); sip slowly with orange slices and sal de gusano rather than shooting it like tequila."
      },
      {
        id: "rev-oax-2",
        author: "Brianna Scott",
        country: "United States",
        archetype: "Textile Enthusiast & Solo Backpacker",
        date: "November 2025",
        rating: 5,
        praise: "Staying at Grana was pure magic. The soft morning light hitting the terracotta pots in the central courtyard set the most peaceful tone for daily explorations.",
        caveat: "Cobblestone streets are uneven throughout Centro; leave thin-soled shoes behind and wear sturdy walking shoes."
      },
      {
        id: "rev-oax-3",
        author: "Liam O'Connor",
        country: "Ireland",
        archetype: "Photographer",
        date: "December 2025",
        rating: 4,
        praise: "The light at Hierve el Agua early in the morning before tourist vans arrive is unforgettable. The mineral terraces look like they belong on another planet.",
        caveat: "The road to Hierve el Agua is winding and narrow; hire a dedicated private driver rather than joining an overcrowded transit bus."
      }
    ]
  },
  {
    id: "tbilisi",
    name: "Tbilisi",
    country: "Georgia",
    continent: "Europe",
    tagline: "Carved Wooden Balconies, Sulfur Vapors & 8,000-Year Qvevri Wine",
    theme: "Bohemian Architecture & Natural Wine",
    vibe: "Heritage",
    accentColor: "plum",
    coordinates: {
      lat: 41.7151,
      lng: 44.8271,
      display: "41° 42′ 54″ N, 44° 49′ 37″ E",
      elevation: "490 m",
    },
    bestSeason: "May – June & September – October",
    currency: "GEL (₾)",
    weather: {
      temp: "19°C",
      condition: "Warm Terrace Sunlight & River Breeze",
      timeZone: "Asia/Tbilisi",
      tzOffset: "+04:00",
    },
    narrative: [
      "Nestled dramatically in the gorge carved by the Mtkvari River beneath the crumbling ramparts of Narikala Fortress, Tbilisi is an intoxicating crossroads of Persian, Russian imperial, and European neoclassical soul. The city’s historic heart is famous for its 'Italian courtyards'—sprawling communal residential quadrangles framed by intricately carved, turquoise-and-ochre lace balconies where vine arbors sag under sweet Isabella grapes. Sulfur hot springs bubble beneath domed brick bathhouses in Abanotubani, releasing warm mineral vapors into the cool dusk.",
      "Today, Tbilisi pulses with an electric creative renaissance. Soviet-era sewing factories and publishing houses have been transformed into cavernous cultural hubs, underground techno venues, and cutting-edge art galleries. Diners gather in dimly lit natural wine bars to debate politics over clay amphora (qvevri) wines aged underground with skin contact, accompanied by warm, cheese-stuffed adjaruli khachapuri and fragrant coriander-laced stewed beans served in unglazed earthenware."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
      alt: "Panoramic view of Old Tbilisi with colorful carved wooden balconies cascading down the cliffside",
      credit: "Neil Soni / Unsplash",
      caption: "Old Tbilisi balconies clinging to the cliffs above the Mtkvari River."
    },
    gallery: [
      {
        id: "tbi-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop",
        alt: "Intricate carved wooden balconies in Sololaki district with pastel turquoise paint",
        title: "Sololaki Lace Balconies",
        credit: "Denis Arslanbekov / Unsplash"
      },
      {
        id: "tbi-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
        alt: "Steaming hot Georgian khinkali dumplings sprinkled with fresh coarse black pepper",
        title: "Hand-Folded Khinkali",
        credit: "Eteri Skhirtladze / Unsplash"
      },
      {
        id: "tbi-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1578922864825-5d4669e2c699?q=80&w=1200&auto=format&fit=crop",
        alt: "Narikala fortress ruins standing guard over the autumn Caucasus foothills",
        title: "Narikala Fortress Lookout",
        credit: "Max van den Oetelaar / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-tbi-1",
        name: "Rooms Hotel Tbilisi",
        neighborhood: "Vera District",
        style: "Industrial Chic Publishing House",
        priceTier: "$$$",
        pricePerNight: "₾420 / night",
        perks: [
          "Verdant Glasshouse Courtyard Lounge",
          "Rich Leather & Reclaimed Timber Interiors",
          "Acclaimed Farm-to-Table Georgian Kitchen"
        ],
        bookingLink: "#booking-rooms",
        summary: "The flagship pioneer of Georgia's design revolution, converting an expansive Soviet-era publishing house into an international hub of creative energy."
      },
      {
        id: "stay-tbi-2",
        name: "Stamba Hotel",
        neighborhood: "Vera District",
        style: "Brutalist Botanical Marvel",
        priceTier: "$$$$",
        pricePerNight: "₾680 / night",
        perks: [
          "Soaring 5-Story Glass-Bottomed Rooftop Pool",
          "Living Botanical Atrium with Mature Trees",
          "On-Site Chocolaterie & Roastery"
        ],
        bookingLink: "#booking-stamba",
        summary: "A magnificent preservation of industrial brutalism featuring exposed printing presses, velvet banquettes, and towering jungle foliage suspended in mid-air."
      },
      {
        id: "stay-tbi-3",
        name: "Keto & Kote Guesthouse",
        neighborhood: "Mtatsminda",
        style: "Intimate Bohemian Villa",
        priceTier: "$$",
        pricePerNight: "₾210 / night",
        perks: [
          "Panoramic Old Town View Balconies",
          "Cellar of Rare Kakhetian Qvevri Vintages",
          "Home-baked Puri Bread & Matsoni Yogurt"
        ],
        bookingLink: "#booking-keto",
        summary: "An unassuming hilltop hideaway perched above the Funicular station, where quiet reading corners overlook the terracotta sea of Old Town roofs."
      }
    ],
    underratedGems: [
      {
        id: "gem-tbi-1",
        name: "Gvinis Keli (Wine Cellar of 8,000 Vintages)",
        category: "Underground Natural Wine Sanctuary",
        insiderTip: "Wander down the dimly lit brick cellar steps near Betlemi Street. Ask Giga for an amber Rkatsiteli aged 9 months in qvevri on wild yeasts; pairs miraculously with Sulguni cheese."
      },
      {
        id: "gem-tbi-2",
        name: "Dry Bridge Flea Market (Mshrali Khidi)",
        category: "Historical Bazaar",
        insiderTip: "Spread over tarps along the river park. Arrive at 10:30 AM to find Soviet film cameras (Zenit, FED), antique Caucasian kilim rugs, and enamel jewelry sold directly by elderly residents."
      },
      {
        id: "gem-tbi-3",
        name: "Chugureti Courtyard Stairwells",
        category: "Architectural Discovery",
        insiderTip: "Explore the neglected Art Nouveau entranceways along Aghmashenebeli Avenue. Peer into entry halls to glimpse century-old trompe-l'œil ceiling murals and iron spiral staircases."
      }
    ],
    reviews: [
      {
        id: "rev-tbi-1",
        author: "Jonas Vaitkus",
        country: "Lithuania",
        archetype: "Sommelier & Travel Essayist",
        date: "October 2025",
        rating: 5,
        praise: "Georgia’s amber wines will ruin conventional commercial wines for you forever. The depth and tannins from the clay qvevri aging are revelatory.",
        caveat: "Old Town sidewalks can be sheer and crumbling; proper grip footwear is essential when hiking up to the Narikala Fortress."
      },
      {
        id: "rev-tbi-2",
        author: "Sophie Delacroix",
        country: "France",
        archetype: "Interior Architect",
        date: "September 2025",
        rating: 5,
        praise: "Stamba Hotel is one of the top five hospitality designs in all of Europe. The contrast between raw concrete columns and warm brass library lamps is breathtaking.",
        caveat: "Traffic along the main river highway can get chaotic during evening rush hour; rely on the efficient metro or walk whenever possible."
      },
      {
        id: "rev-tbi-3",
        author: "Arjun Mehta",
        country: "India",
        archetype: "Digital Nomad & Food Explorer",
        date: "August 2025",
        rating: 4,
        praise: "Khinkali eating is an art form—bite a tiny hole, slurp the piping hot broth, then devour the dumpling. Cheap, incredibly delicious, and warmly hosted everywhere.",
        caveat: "Sulfur baths in Abanotubani have an intense aroma that lingers on skin and silver jewelry—remove all jewelry before soaking."
      }
    ]
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    tagline: "Seven Hills, Calcada Pavements & Golden Atlantic Light",
    theme: "Coastal Light, Azulejos & Fado",
    vibe: "Coastal",
    accentColor: "aegean",
    coordinates: {
      lat: 38.7223,
      lng: -9.1393,
      display: "38° 43′ 20″ N, 9° 08′ 21″ W",
      elevation: "15 m",
    },
    bestSeason: "April – June & September – October",
    currency: "EUR (€)",
    weather: {
      temp: "22°C",
      condition: "Atlantic Breeze & Crisp Golden Sunlight",
      timeZone: "Europe/Lisbon",
      tzOffset: "+00:00",
    },
    narrative: [
      "Lisbon owes its mythical luminescence to the vast Tagus Estuary, which acts as a colossal mirror reflecting the Atlantic sun upward onto pastel limestone facades, weathered azulejo tiles, and the undulating black-and-white limestone mosaic of the calçada pavements. Built across seven steep amphitheater hills, the city is a triumph of vertical urban poetry. Yellow vintage trams rattle through impossibly tight alleys in Alfama and Mouraria, where laundry flaps like celebratory pennants from wrought-iron balconies and melancholic fado chords escape from doorway taverns.",
      "Beyond the historic miradouros (scenic lookouts) where locals linger with cold bica espressos and pasteis de nata dusted with cinnamon, Lisbon is an effortlessly contemporary maritime capital. The riverside warehouses of Marvila have sprouted microbreweries and experimental design studios, while Principe Real’s shaded botanical squares house independent fashion outposts and seafood bars serving charcoal-grilled sea bass and percebes (goose barnacles) hauled fresh from the tempestuous Sintra coast."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=1600&auto=format&fit=crop",
      alt: "Iconic yellow Tram 28 climbing the steep cobblestone streets of Lisbon framed by pastel buildings",
      credit: "Aayush Gupta / Unsplash",
      caption: "Tram 28 grinding up through the sun-bleached contours of Alfama."
    },
    gallery: [
      {
        id: "lis-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200&auto=format&fit=crop",
        alt: "Intricate cobalt blue and white antique azulejo ceramic tiles covering an old Lisbon facade",
        title: "Cobalt Azulejos Facade",
        credit: "Claudio Schwarz / Unsplash"
      },
      {
        id: "lis-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop",
        alt: "Freshly baked pastel de nata egg custard tarts dusted with powdered cinnamon and sugar",
        title: "Warm Pasteis de Nata",
        credit: "Helena Lopes / Unsplash"
      },
      {
        id: "lis-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1200&auto=format&fit=crop",
        alt: "Panoramic golden hour view from Miradouro de Santa Luzia over Alfama red rooftops and Tagus river",
        title: "Miradouro Golden Hour",
        credit: "Liam McKay / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-lis-1",
        name: "Santa Clara 1728",
        neighborhood: "Alfama / Campo de Santa Clara",
        style: "Restored 18th-Century Palacete",
        priceTier: "$$$$",
        pricePerNight: "€640 / night",
        perks: [
          "Architecture by Manuel Aires Mateus",
          "Six Secluded Suites with Tagus River Vistas",
          "Candlelit Communal Dining Table in Limestone"
        ],
        bookingLink: "#booking-santaclara",
        summary: "Part of the Silent Living collection, this former palace is an ode to calm minimalism with pink limestone baths, raw pine floorboards, and linen drapes."
      },
      {
        id: "stay-lis-2",
        name: "The Lumiares Hotel & Spa",
        neighborhood: "Bairro Alto",
        style: "Art Deco Boutique Townhouse",
        priceTier: "$$$",
        pricePerNight: "€320 / night",
        perks: [
          "Rooftop Sunset Bar with View of St. George Castle",
          "Full-Service Wellness Spa & Steam Room",
          "Custom Handwoven Geometric Tapestries"
        ],
        bookingLink: "#booking-lumiares",
        summary: "Perched at the top of the Gloria Funicular, marrying the golden bohemian spirit of Bairro Alto with polished boutique apartment living."
      },
      {
        id: "stay-lis-3",
        name: "Casa do Barão",
        neighborhood: "Chiado",
        style: "19th-Century Baronial Residence",
        priceTier: "$$",
        pricePerNight: "€185 / night",
        perks: [
          "Private Walled Garden with Hidden Swimming Pool",
          "Intimate Library with Vintage Art Monographs",
          "Breakfast Served Under Lemon & Fig Trees"
        ],
        bookingLink: "#booking-barao",
        summary: "A quiet urban oasis hidden behind an understated doorway in Chiado, offering vintage mid-century furniture and a peaceful garden pool."
      }
    ],
    underratedGems: [
      {
        id: "gem-lis-1",
        name: "Miradouro do Monte Agudo",
        category: "Secret Panoramic Viewpoint",
        insiderTip: "While crowds pack Miradouro da Senhora do Monte, walk 10 minutes further north to Monte Agudo. Grab a glass of Vinho Verde from the unassuming kiosk and watch the sun dip behind the 25 de Abril Bridge."
      },
      {
        id: "gem-lis-2",
        name: "Taberna do Mar",
        category: "Underground Seafood Atelier",
        insiderTip: "Located in Graça, seats just 16 diners. Chef Filipe Rodrigues blends Japanese nigiri techniques with Portuguese coastal sardines, mackerel, and smoked eel. Reserve 2 weeks in advance."
      },
      {
        id: "gem-lis-3",
        name: "Casa do Alentejo Courtyard",
        category: "Hidden Moorish Courtyard",
        insiderTip: "Step off busy Rua das Portas de Santo Antão into what looks like an ordinary doorway. Inside lies a breathtaking 17th-century neo-Moorish riad with horseshoe arches and hand-painted tile rooms."
      }
    ],
    reviews: [
      {
        id: "rev-lis-1",
        author: "Beatriz Mendoza",
        country: "Argentina",
        archetype: "Photographer & Writer",
        date: "December 2025",
        rating: 5,
        praise: "The quality of light in Lisbon around 5:00 PM is unlike anywhere else on earth. The way it reflects off the Tagus onto the pink and yellow plaster is pure enchantment.",
        caveat: "The calçada cobblestones are buffed smooth by centuries of footsteps and can be dangerously slippery when wet. Wear shoes with genuine rubber soles."
      },
      {
        id: "rev-lis-2",
        author: "Marcus Weber",
        country: "Switzerland",
        archetype: "Architect",
        date: "November 2025",
        rating: 5,
        praise: "Santa Clara 1728 is pure architectural transcendence. The restraint, the tactile limestone sinks, and the silence right in the heart of Alfama is astonishing.",
        caveat: "Tram 28 has become heavily congested with queues; take Tram 12 or simply wander on foot to discover much more authentic corners."
      },
      {
        id: "rev-lis-3",
        author: "Amara Okonkwo",
        country: "United Kingdom",
        archetype: "Solo Cultural Traveler",
        date: "October 2025",
        rating: 4,
        praise: "A fado evening in a tiny unamplified tasca in Mouraria brought tears to my eyes. The intimacy and emotional weight of the singing is unforgettable.",
        caveat: "The hills are relentlessly steep—prepare for your calves to feel the burn after your first full day of exploring."
      }
    ]
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    tagline: "Table Mountain Ramparts, Kelp Forests & Atlantic Surf",
    theme: "Ocean Meets Granite Monoliths",
    vibe: "Nature",
    accentColor: "sage",
    coordinates: {
      lat: -33.9249,
      lng: 18.4241,
      display: "33° 55′ 30″ S, 18° 25′ 26″ E",
      elevation: "25 m",
    },
    bestSeason: "November – March (Vibrant Coastal Summer)",
    currency: "ZAR (R)",
    weather: {
      temp: "25°C",
      condition: "Crisp Ocean Sunlight & Benguela Breeze",
      timeZone: "Africa/Johannesburg",
      tzOffset: "+02:00",
    },
    narrative: [
      "Few metropolitan landscapes match the primal drama of Cape Town. Here, the flat-topped monolith of Table Mountain towers over a city cradled between the freezing turquoise rollers of the Atlantic and the warm swells of False Bay. When the south-easterly wind blows, the legendary 'tablecloth' cloud cascades down the mountain’s vertical sandstone cliffs like dry ice, evaporating before it touches the botanical gardens below. Along the coastline, giant granite boulders frame the white-sand coves of Clifton and Llandudno, where Atlantic kelp forests shelter endemic marine life.",
      "Cape Town’s human geography is equally layered. In the pastel-hued enclave of Bo-Kaap on the slopes of Signal Hill, the melodic calls to prayer echo off cobblestones, celebrating the city’s rich Cape Malay heritage through spiced bobotie and warm koesisters. A short drive past the Twelve Apostles brings you into the leafy Constantia wine valley, where vines have produced legendary Muscat vintages since 1685 beneath the shade of ancient oak avenues."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1600&auto=format&fit=crop",
      alt: "Majestic view of Table Mountain overlooking Cape Town city bowl and harbor during clear day",
      credit: "Kahl Orr / Unsplash",
      caption: "The sandstone mass of Table Mountain presiding over the Atlantic seaboard."
    },
    gallery: [
      {
        id: "cpt-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1200&auto=format&fit=crop",
        alt: "Vibrant and colorful historic Cape Malay houses along the cobblestones of Bo-Kaap",
        title: "Bo-Kaap Pastel Heritage",
        credit: "Dan Grinwis / Unsplash"
      },
      {
        id: "cpt-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        alt: "Seared seafood and locally grown South African organic produce served in contemporary bistro",
        title: "Coastal Foraged Dining",
        credit: "Kobby Mendez / Unsplash"
      },
      {
        id: "cpt-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        alt: "Turquoise waves crashing against giant smooth granite boulders at Clifton Beach",
        title: "Clifton Granite Boulders",
        credit: "Sean Oulashin / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-cpt-1",
        name: "Ellerman House",
        neighborhood: "Bantry Bay",
        style: "Edwardian Mansion & Private Gallery",
        priceTier: "$$$$",
        pricePerNight: "R18,500 / night",
        perks: [
          "Unmatched Atlantic Ocean Horizon Views",
          "Private Collection of 1,000+ Contemporary SA Artworks",
          "Indigenous Fynbos Botanical Spa"
        ],
        bookingLink: "#booking-ellerman",
        summary: "The pinnacle of South African private hospitality, perched high on the cliffs of Bantry Bay with tiered gardens and an architectural subterranean wine gallery."
      },
      {
        id: "stay-cpt-2",
        name: "The Silo Hotel",
        neighborhood: "V&A Waterfront",
        style: "Grain Silo Architectural Icon",
        priceTier: "$$$$",
        pricePerNight: "R24,000 / night",
        perks: [
          "Architecture by Thomas Heatherwick Studio",
          "Pillowed Convex Geometric Glass Windows",
          "Rooftop Infinity Pool Overlooking Harbor"
        ],
        bookingLink: "#booking-silo",
        summary: "Occupying the historic grain elevator tower above Zeitz MOCAA museum, this bold design feat transforms industrial concrete into crystalline luxury."
      },
      {
        id: "stay-cpt-3",
        name: "Tintswalo Atlantic",
        neighborhood: "Chapman’s Peak Drive",
        style: "Off-Grid Ocean Shore Lodge",
        priceTier: "$$$$",
        pricePerNight: "R12,500 / night",
        perks: [
          "Private Pebble Beach at the Water’s Edge",
          "Direct Views Across Hout Bay to Sentinel Peak",
          "Nightly Wood-Fired Beachfront Dinners"
        ],
        bookingLink: "#booking-tintswalo",
        summary: "The only luxury lodge permitted directly inside the Table Mountain National Park marine reserve, where ocean spray practically touches your private timber deck."
      }
    ],
    underratedGems: [
      {
        id: "gem-cpt-1",
        name: "Oudekraal Nature Reserve Cove",
        category: "Hidden Coastal Reserve",
        insiderTip: "Tucked along the coastal road between Camps Bay and Llandudno. Pack snorkeling gear for the protected kelp channel where gentle pajama sharks and seals drift amongst towering sea bamboo."
      },
      {
        id: "gem-cpt-2",
        name: "The Gin Bar / Honest Chocolate Courtyard",
        category: "Secret Courtyard Hideaway",
        insiderTip: "Walk into Honest Chocolate on Wale Street, head out through the back door, and enter a candlelit Mediterranean courtyard housing a speakeasy devoted to craft South African fynbos gins."
      },
      {
        id: "gem-cpt-3",
        name: "Kirstenbosch Boomslang Walkway at 7:30 AM",
        category: "Botanical Canopy Walk",
        insiderTip: "Enter the gardens through the top gate early. Stroll the curved timber-and-steel canopy walkway as morning mist curls over the proteas and sunbirds feed on nectar."
      }
    ],
    reviews: [
      {
        id: "rev-cpt-1",
        author: "Julian Thorne",
        country: "Australia",
        archetype: "Surfer & Marine Biologist",
        date: "February 2026",
        rating: 5,
        praise: "Free-diving in the kelp forests off Oudekraal felt like entering an underwater cathedral. The raw power of nature here is unmatched by any city I know.",
        caveat: "The Benguela current means Atlantic water is bitterly cold (10-14°C); bring at least a 4/3mm wetsuit if you plan on swimming."
      },
      {
        id: "rev-cpt-2",
        author: "Nandi Khumalo",
        country: "South Africa",
        archetype: "Art Curator & Local Insider",
        date: "January 2026",
        rating: 5,
        praise: "The Silo’s architecture is genuinely awe-inspiring, and paired with the Zeitz MOCAA museum downstairs, Cape Town has cemented its place as a global art epicenter.",
        caveat: "The 'Cape Doctor' summer wind can blow with fierce intensity; always check wind forecasts before booking outdoor boat trips."
      },
      {
        id: "rev-cpt-3",
        author: "Frederik Hansen",
        country: "Denmark",
        archetype: "Couple on Sabbatical",
        date: "December 2025",
        rating: 5,
        praise: "Driving Chapman's Peak at sunset in an open-top rental is a cinematic memory that will stay with us forever. The dining scene is world-class and remarkably affordable.",
        caveat: "Load shedding / power outages can occur; ensure your accommodation has backup solar or battery inverters."
      }
    ]
  },
  {
    id: "bergen",
    name: "Bergen",
    country: "Norway",
    continent: "Europe",
    tagline: "Hanseatic Timber, Rain-Slicked Slate & Fjord Gateways",
    theme: "Fjord Gateways & Nordic Simplicity",
    vibe: "Nature",
    accentColor: "umber",
    coordinates: {
      lat: 60.3913,
      lng: 5.3221,
      display: "60° 23′ 28″ N, 5° 19′ 19″ E",
      elevation: "12 m",
    },
    bestSeason: "May – September (Mild Fjord Summer & White Nights)",
    currency: "NOK (kr)",
    weather: {
      temp: "14°C",
      condition: "Crisp Nordic Mist & Pine-Scented Rain",
      timeZone: "Europe/Oslo",
      tzOffset: "+01:00",
    },
    narrative: [
      "Encircled by seven mist-wreathed mountains and flanked by the deep fjords of western Norway, Bergen possesses an austere, elemental grandeur. The city’s calling card is Bryggen—a UNESCO World Heritage waterfront row of sagging, colorful Hanseatic timber warehouses whose wooden floorboards have creaked under the weight of dried cod and grain trade since the fourteenth century. Rain falls in Bergen with legendary frequency, but rather than dampening the spirit, it lends the cobblestone alleyways of Sandviken a luminous, reflective sheen that makes cozying up inside a candlelit wooden cafe all the more poetic.",
      "Beyond the historic wharf, Bergen is the undisputed gateway to Norway’s dramatic maritime wilderness. Funicular railways hoist travelers directly from the city center up into mountain pine forests where hiking trails lead to hidden mountain tarns and panoramic views of the Byfjorden. The emerging New Nordic culinary movement thrives here, centered on cold-water langoustines, foraged cloudberries, juniper-smoked game, and wild brown trout pulled from glacial streams."
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      alt: "Scenic view of Bergen harbor and fjord surrounded by forested mountains under soft Nordic daylight",
      credit: "Michal Parzuchowski / Unsplash",
      caption: "The Hanseatic harbor of Bergen nestled between coastal mountains."
    },
    gallery: [
      {
        id: "ber-arch",
        category: "Architecture",
        url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
        alt: "The historic colorful wooden houses of Bryggen wharf reflecting in the calm harbor waters",
        title: "Bryggen Hanseatic Timber Wharf",
        credit: "Jarand K. Løkeland / Unsplash"
      },
      {
        id: "ber-street",
        category: "Food & Street Life",
        url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
        alt: "Artisanal Norwegian bakery counter with warm cardamom buns and pour-over coffee",
        title: "Cardamom Buns & Light Roasts",
        credit: "Kristofer K/ Unsplash"
      },
      {
        id: "ber-nature",
        category: "Nature & Scenery",
        url: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1200&auto=format&fit=crop",
        alt: "Majestic sheer cliffs of a Norwegian fjord with cascading waterfalls and calm deep water",
        title: "Glacial Fjord Escarpment",
        credit: "Steinar Engeland / Unsplash"
      }
    ],
    stays: [
      {
        id: "stay-ber-1",
        name: "Villa Terminus",
        neighborhood: "City Centre",
        style: "Heritage Wooden Villa",
        priceTier: "$$$",
        pricePerNight: "2,800 kr / night",
        perks: [
          "Interiors by Claesson Koivisto Rune",
          "Protected 18th-Century Timber Architecture",
          "Curated Scandinavian Design Library"
        ],
        bookingLink: "#booking-villaterminus",
        summary: "An exclusive 18-room sanctuary where iconic Scandinavian architects have preserved original timber beams while introducing bespoke muted-oak furniture."
      },
      {
        id: "stay-ber-2",
        name: "Opus XVI",
        neighborhood: "Vågsallmenningen",
        style: "Neo-Classical Edvard Grieg Tribute",
        priceTier: "$$$$",
        pricePerNight: "3,600 kr / night",
        perks: [
          "Operated by Descendants of Composer Edvard Grieg",
          "Granite Bathroom Spas with Heated Floors",
          "Afternoon Tea Accompanied by Live Classical Piano"
        ],
        bookingLink: "#booking-opus",
        summary: "A grand 1876 bank building transformed into a culturally rich hotel that honors Norway’s musical heritage with quiet contemporary refinement."
      },
      {
        id: "stay-ber-3",
        name: "Bergen Børs Hotel",
        neighborhood: "Fish Market Square",
        style: "Former 1862 Stock Exchange",
        priceTier: "$$$$",
        pricePerNight: "3,200 kr / night",
        perks: [
          "1-Star Michelin Restaurant BARE on Site",
          "Restored Neo-Renaissance Mirror Halls",
          "Direct Harborside Views of Bryggen Wharf"
        ],
        bookingLink: "#booking-bors",
        summary: "Occupying the city’s former stock exchange, combining grand mahogany wall paneling and soaring ceiling vaults with modern Nordic minimalism."
      }
    ],
    underratedGems: [
      {
        id: "gem-ber-1",
        name: "Tippetue Trail on Mount Fløyen",
        category: "Secret Mountain Descent",
        insiderTip: "Take the Fløibanen funicular up, but skip the paved main path down. Follow the winding gravel Tippetue trail through mossy hemlock groves to encounter misty fairytale stillness."
      },
      {
        id: "gem-ber-2",
        name: "Kaffemisjonen",
        category: "Specialty Nordic Roastery",
        insiderTip: "Located near the base of the funicular. Ask for a light roast Kenyan aeropress brewed with local mountain water—the clarity and fruit acidity is unmatched in Scandinavia."
      },
      {
        id: "gem-ber-3",
        name: "Nordnes Sjøbad",
        category: "Historic Sea Bath & Sauna",
        insiderTip: "At the tip of the cobblestone Nordnes peninsula. Plunge into the frigid Atlantic sea pool (even in autumn!), then warm your bones in the communal timber sauna facing the open fjord."
      }
    ],
    reviews: [
      {
        id: "rev-ber-1",
        author: "Astrid Lindholm",
        country: "Finland",
        archetype: "Architect & Hiker",
        date: "August 2025",
        rating: 5,
        praise: "Villa Terminus was an absolute dream. The bespoke furniture by Claesson Koivisto Rune and the quiet garden courtyard made it feel like a private collector's home.",
        caveat: "It rains roughly 240 days a year in Bergen. Don't fight it—invest in a quality Helly Hansen or Norwegian Rain trench coat and enjoy the moody atmosphere."
      },
      {
        id: "rev-ber-2",
        author: "David Chen",
        country: "Singapore",
        archetype: "Food & Coffee Explorer",
        date: "July 2025",
        rating: 5,
        praise: "The tasting menu at BARE inside Bergen Børs with local fjord langoustines was one of the top meals of my travels. And the cardamom buns at Colonialen are legendary.",
        caveat: "Norway is notoriously expensive for dining and wine; budget accordingly or explore the fresh seafood at the local fish market."
      },
      {
        id: "rev-ber-3",
        author: "Evelyn Reed",
        country: "United States",
        archetype: "Solo Nature Backpacker",
        date: "June 2025",
        rating: 5,
        praise: "Swimming at Nordnes Sjøbad during midsummer white nights with the sun barely dipping below the horizon was a spiritual experience. Bergen has my heart.",
        caveat: "Book the Flåm railway and fjord ferries well ahead during summer; tickets sell out weeks in advance."
      }
    ]
  }
];

export const CONTINENTS = ["All", "Europe", "Asia", "Americas", "Africa"];

export const VIBES = [
  { id: "all", label: "All Vibes" },
  { id: "Heritage", label: "Heritage & Rituals" },
  { id: "Culinary", label: "Culinary Alchemy" },
  { id: "Coastal", label: "Coastal & Light" },
  { id: "Nature", label: "Monoliths & Fjords" }
];
