

document.addEventListener('DOMContentLoaded', function() {

    const DETAILED_CROP_INFO = {
        "tomato": {
            advice: "For **Tomato**, focus on preventing **Early Blight** by increasing airflow and reducing canopy density. Apply our **Bio-Fungicide (Input 12)** every 10 days post-flowering. Our advisory recommends adding **compost tea** during the fruit set stage.",
            inputs: "Bio-Fungicide (Input 12), Calcium Nitrate Bio-Input, Soil Enforcer (Input 01).",
            keywords: ["tomato", "tamatar"],
            disease: "Early Blight"
        },
        "pomegranate": {
            advice: "**Pomegranate** requires meticulous care, especially for **Bacterial Blight**. Use our **Copper-based Bio-Control (Input 07)** immediately after pruning and during pre-bloom. Our **Soil Enforcer** helps boost root health.",
            inputs: "Copper Bio-Control (Input 07), Boron Supplement, Fruit-Set Bio-Booster.",
            keywords: ["pomegranate", "anar"],
            disease: "Bacterial Blight"
        },
        "grapes": {
            advice: "Protect your **Grapes** from **Downy Mildew** during high humidity periods. Apply our **Foliar Bio-Protector (Input 21)** preventatively. Consistent drip irrigation maintains berry uniformity.",
            inputs: "Foliar Bio-Protector (Input 21), Bio-Zinc, Bio-Potash Formula.",
            keywords: ["grapes", "angoor"],
            disease: "Downy Mildew"
        },
        "cotton": {
            advice: "For **Cotton**, the biggest threat is **Pink Bollworm**. Use our **Bio-Pesticide (Input 30)** at the button stage as a preventive measure. We recommend **crop rotation** to manage pest populations naturally.",
            inputs: "Bio-Pesticide (Input 30), Micronutrient Spray, Organic Nitrogen Fixer.",
            keywords: ["cotton", "kapas"],
            disease: "Pink Bollworm"
        },
    };

    const FARMING_QA = {
        "best season to plant rice": "Rice is best planted in the **Kharif season** (June–July) because it requires high rainfall, warm temperatures, and standing water for early growth.",
        "how much water does wheat need": "Wheat needs **3–5 cm of water per week**, depending on the growth stage, especially during crown root initiation and flowering.",
        "which fertilizer is recommended for maize": "Maize grows best with NPK **120:60:40**, meaning high nitrogen, moderate phosphorus, and potassium.",
        "ideal temperature for tomato growth": "Tomatoes need **20–30°C**; temperatures above 35°C reduce fruit set.",
        "how long does groundnut take to mature": "Groundnut usually takes **100–140 days** to mature depending on the variety.",
        "high-yield varieties of cotton": "High-yield cotton varieties include **BT Cotton hybrids** such as RCH-2 BT, Bollgard II, and local zonal hybrids.",
        "how can i increase soybean yield": "Use high-quality seeds, **proper spacing (45×5 cm)**, timely weeding, and maintain soil moisture during flowering.",
        "when should sugarcane be harvested": "Sugarcane is harvested **10–16 months** after planting, when the canes are hard, nodes are filled, and sugar content peaks.",
        "what spacing is recommended for chili plants": "Chili should be spaced **45–60 cm** between rows and **30–45 cm** between plants.",
        "which crops are suitable for sandy soil": "Crops like **groundnut, watermelon, bajra, and cashew** grow well in sandy soils with good drainage.",
        "how to improve germination in paddy": "Use **pre-soaking and sprouting**, good-quality certified seeds, and maintain moist conditions during the first 10 days.",
        "what causes poor flowering in brinjal": "Poor flowering happens due to **temperature stress**, nutrient imbalance, or **excessive nitrogen**.",
        "how to control lodging in wheat": "Use **balanced nitrogen**, avoid late irrigation, and grow short-statured varieties.",
        "best banana variety for high yield": "High-yield varieties include **Grand Naine, Robusta, and Dwarf Cavendish**.",
        "how many irrigations does mustard need": "Mustard needs **3–4 irrigations**, especially at branching and flowering stages.",
        "which crops grow well in red soil": "**Millets, groundnut, potato, cotton, and pulses** perform well in red soils.",
        "can maize be grown in winter": "Yes, **winter maize (Rabi maize)** is widely grown where temperatures remain above 15°C.",
        "drought-tolerant crops": "Millets like **bajra, jowar, ragi**, as well as **castor and pulses** are highly drought-tolerant.",
        "how to increase oil content in sunflower": "Ensure timely sowing, **balanced nutrition**, and irrigation during flowering and seed filling.",
        "seed rate for sorghum": "Sorghum requires **8–10 kg seeds per hectare**.",
        "why are rice seedlings turning yellow": "Yellowing indicates **nitrogen deficiency**, water stress, or zinc deficiency.",
        "when should potatoes be planted": "Potatoes are planted in the **Rabi season (October–November)** in most regions.",
        "which pulses need less water": "Pulses like **moong, urad, and chickpea** require very little water.",
        "crops are good for rotation with cotton": "Crops like **pulses, groundnut, wheat, and vegetables** improve soil fertility and reduce pests.",
        "how to improve sugar content in sugarcane": "Provide **potassium-rich fertilizers**, stop irrigation before harvest, and plant good varieties.",
        "which crops are best for organic farming": "**Millets, pulses, leafy vegetables, and spices** perform well under organic systems.",
        "how to reduce fruit drop in mango": "Apply **NAA (growth regulator)**, maintain irrigation, and protect trees from pests.",
        "why do tomato leaves curl": "Leaf curl occurs due to **virus infection (whiteflies)** or **heat stress**.",
        "protect grape vines from sunburn": "Use **shade nets**, mulching, and irrigate regularly to prevent heat stress.",
        "which cereal crop grows fastest": "**Maize** grows the fastest, maturing in 90–110 days.",
        "how to grow onions in high rainfall areas": "Use **raised beds**, well-drained soil, and avoid waterlogging.",
        "which rice variety resists flooding": "Varieties like **Swarna-Sub1 and IR64-Sub1** tolerate submergence.",
        "why do maize plants turn purple": "Purple leaves indicate **phosphorus deficiency**.",
        "how to boost ragi productivity": "Use **line sowing**, adequate nitrogen, and timely weeding.",
        "crops can be grown without irrigation": "**Millets, pulses, safflower, and castor** survive on rainfed conditions.",
        "which vegetables grow in winter": "Winter vegetables include **carrot, cabbage, cauliflower, peas, and radish**.",
        "how to check soil suitability for cashew": "Cashew grows well in **sandy or laterite soils** with good drainage and moderate rainfall.",
        "maturity period for turmeric": "Turmeric takes **7–9 months** to mature fully.",
        "how many times can banana plants bear fruit": "Each banana plant bears fruit **only once**, but new suckers replace old plants.",
        "what crops grow best in alkaline soil": "Crops like **barley, cotton, mustard, and beetroot** tolerate alkalinity.",
        "ideal temperature for growing wheat": "Wheat grows best in **10–15°C** for sowing and **20–25°C** for growth.",
        "why is rice grown in flooded fields": "Rice plants tolerate water; **flooding suppresses weeds** and supports strong root development.",
        "when should maize be sown": "Maize is sown in **Kharif (June–July)** and sometimes Rabi (Oct) depending on region.",
        "what soil is best for sugarcane": "**Deep loamy or clay-loam soil** rich in organic matter.",
        "ideal temperature for cotton": "**21–30°C** with bright sunshine.",
        "why is sorghum drought-tolerant": "It has **deep roots and waxy leaves** that reduce water loss.",
        "which crop improves soil nitrogen": "**Pulses/legumes** because they fix nitrogen through Rhizobium bacteria.",
        "why is groundnut called an oilseed crop": "Because its seeds contain **45–50% oil**.",
        "ideal climate for coffee": "**Cool, humid climate** with 1500–2500 mm rainfall.",
        "which fruit needs the most heat": "**Grapes, mangoes, bananas** prefer high heat and sunlight.",
        "what type of soil is best for potatoes": "**Sandy-loam** that allows tuber expansion.",
        "when is mustard grown in india": "**Rabi season** (Oct–Nov sowing, Feb–Mar harvest).",
        "what crop is called the queen of cereals": "**Maize** due to its versatility.",
        "which crop is sensitive to frost": "**Banana, papaya, tomato, potato**.",
        "why are millets climate-smart crops": "They tolerate **heat, drought, and poor soils**.",
        "when are strawberries harvested": "In **winter–spring** (Dec–March) in India.",
        "which crop needs standing water for 90–120 days": "**Rice**.",
        "what is ratoon sugarcane": "New cane that grows from the **previous crop’s stubble**.",
        "why is ragi called a nutritious millet": "Rich in **calcium, fiber, iron**.",
        "which season is best for carrot production": "**Winter**, as carrots need cool temperatures.",
        "why is tea grown on slopes": "For **good drainage** and better leaf quality.",
        "which crop requires the longest duration": "**Sugarcane** (10–18 months).",
        "why is castor oil commercially important": "Used in **lubricants, cosmetics, medicines**.",
        "what are kharif crops": "Monsoon-sown crops like **rice, maize, cotton, groundnut**.",
        "what are rabi crops": "Winter crops like **wheat, mustard, gram, barley**.",
        "why is soil ph important": "pH affects **nutrient availability** and fertilizer efficiency.",
        "ideal ph for most crops": "**6.0–7.5**.",
        "why is organic matter important": "Improves **structure, water retention**, microbial activity.",
        "how does mulch help crops": "Reduces **evaporation, weeds**, and soil temperature.",
        "why is compost better than chemical fertilizer": "Improves soil **physically + biologically**, not just chemically.",
        "what are micronutrients": "Nutrients needed in small amounts: **Zn, Fe, Mn, Cu, B**.",
        "what is green manure": "Crops grown and plowed into soil to **increase fertility**.",
        "why do leaves turn yellow in nitrogen deficiency": "Nitrogen is key for **chlorophyll production**.",
        "what causes soil salinity": "**Over-irrigation, poor drainage**, high evaporation.",
        "how to improve saline soil": "Apply **gypsum**, improve drainage, use salt-tolerant crops.",
        "what is soil erosion": "**Removal of topsoil** by wind or water.",
        "how to prevent erosion": "**Contour farming, cover crops, bunds**.",
        "what is biofertilizer": "**Microorganisms** that help fix nutrients (e.g., Rhizobium, Azotobacter).",
        "why is drip irrigation water-efficient": "Sends water **directly to roots**, reduces waste.",
        "what is soil compaction": "Hard soil that **limits root growth** due to heavy machinery.",
        "why add lime to soil": "To **increase pH** in acidic soils.",
        "why add sulfur to soil": "To **reduce pH** in alkaline soils.",
        "what is c:n ratio": "Carbon-nitrogen balance controlling decomposition.",
        "why is poultry manure high-value": "Rich in **N, P, K**.",
        "what is crop rotation": "Changing crops to reduce pests and **improve fertility**.",
        "why grow legumes after cereals": "Legumes **add nitrogen** back to soil.",
        "what is soil fertility": "Soil’s ability to **supply nutrients**.",
        "what reduces soil fertility": "**Monocropping, erosion**, over-use of chemicals.",
        "what are soil microbes": "Beneficial organisms that help **decompose organic matter**.",
        "why is deep ploughing needed": "Breaks hardpan and **improves root penetration**.",
        "why does rainfall affect sowing": "Seeds need **moisture to germinate**; too much or too little harms crops.",
        "what is heat stress in crops": "High temperature damaging **leaves and flowers**.",
        "how does humidity affect diseases": "**High humidity increases fungal infections**.",
        "why use shade nets": "Protect plants from **sun, wind, insects**.",
        "what is frost injury": "**Ice formation in plant tissues** causing death.",
        "why do farmers monitor wind speed": "Affects **pollination, spraying, lodging**.",
        "what is evapotranspiration": "Water lost by **evaporation + plant transpiration**.",
        "why do thunderstorms damage crops": "Due to **hail, strong winds, heavy rain**.",
        "what is drought stress": "Lack of water limiting **plant growth**.",
        "how do weather forecasts help farmers": "Planning **irrigation, fertilizers, spraying, harvesting**.",
        "what is a rainfed crop": "Crops growing only on **natural rainfall**.",
        "why is climate change a threat": "Causes **unpredictable rains, heatwaves, pest expansion**.",
        "what is a growing degree day": "Heat units needed for **crop growth stages**.",
        "why check soil temperature before sowing": "Seeds germinate only at **specific temperatures**.",
        "how does fog harm crops": "Reduces **sunlight, increases fungal diseases**.",
        "why is monsoon important in india": "**60% agriculture** depends on rain.",
        "what is hailstorm damage": "**Leaves torn, fruits bruised**.",
        "why does humidity affect drying of grains": "High humidity **slows drying** and increases fungal risk.",
        "why store grain at low moisture": "To prevent **fungus and insects**.",
        "what is microclimate": "Local climate **around crops**.",
        "why does high wind cause lodging": "Plants **bend or fall**, especially cereals.",
        "what is heatwave": "Unusually high temperature for **several days**.",
        "what is chill injury": "Damage to fruits like **banana in cold temperatures**.",
        "why is rainfall intensity important": "High intensity causes **runoff** instead of infiltration.",
        "what is cloud seeding": "**Artificial rain-making** using silver iodide.",
        "why do pests attack crops": "For food; triggered by **temperature, humidity, and crop conditions**.",
        "what is ipm": "Integrated Pest Management—mix of **biological, cultural, and chemical controls**.",
        "why avoid overuse of pesticides": "Causes **resistance, pollution, health risks**.",
        "what is a pheromone trap": "Trap using insect **scent signals**.",
        "why use neem extract": "Natural **insect repellent** and anti-feedant.",
        "major pest of cotton": "**Pink bollworm**.",
        "why do leaves curl": "Due to **virus infection** or **nutrient deficiency**.",
        "why do fungal diseases spread in rain": "**Spores germinate in moisture**.",
        "why do plants wilt": "Lack of water, **root disease**, or high temperature.",
        "what is late blight": "Fungal disease in **potato and tomato**.",
        "why use biological control": "Eco-friendly pest reduction using **predators or parasites**.",
        "major disease of rice": "**Blast and bacterial blight**.",
        "why rotate crops for pest control": "**Breaks pest life cycle**.",
        "why avoid spraying during noon": "Evaporation **reduces effectiveness**.",
        "why do insects prefer young leaves": "Soft tissues are **easier to feed on**.",
        "what is stem borer": "Insect that **bores into stems** of rice/maize.",
        "why use sticky trap": "Catches **flying insects**.",
        "why apply fungicides after rain": "Rain **washes off** earlier spray.",
        "what is root rot": "Soil fungus killing **roots**.",
        "why do fruits crack": "Sudden changes in **moisture**.",
        "what is sooty mold": "Black fungus on **honeydew-covered leaves**.",
        "why use resistant varieties": "Lower disease cost and **higher yield**.",
        "why check pest threshold": "Spray only when **population is harmful**.",
        "why are weeds harmful": "Compete for **nutrients, light, and water**.",
        "best time to spray herbicides": "When weeds are **young**.",
        "what is drip irrigation": "Water delivered **drop-by-drop** to root zone.",
        "why choose sprinkler irrigation": "For **uniform water** on light soils.",
        "what is flood irrigation": "Traditional method of **covering field with water**.",
        "why avoid over-irrigation": "Causes **root rot, nutrient leaching, salinity**.",
        "what is water harvesting": "Capturing **rainwater** for irrigation.",
        "why irrigate in morning/evening": "Reduces **evaporation loss**.",
        "what is soil moisture sensor": "Device measuring **water in soil**.",
        "why use canals": "Cheap water supply for **large farms**.",
        "why mulch reduces irrigation need": "Keeps soil **moist for longer time**.",
        "what is deficit irrigation": "Giving **less water** during non-critical stages.",
        "critical irrigation stage for wheat": "**Crown root initiation (CRI)**.",
        "critical stage for rice": "**Panicle initiation**.",
        "why use borewell water carefully": "Risk of **salinity and high EC**.",
        "what is drip fertigation": "Applying **fertilizer through drip**.",
        "why use filters in drip": "Prevent **clogging**.",
        "why does clay soil need less irrigation": "Holds **more water**.",
        "why sandy soil needs frequent irrigation": "**Poor water retention**.",
        "why check water ph": "Affects **nutrient availability**.",
        "why does standing water harm wheat": "Wheat is **sensitive to waterlogging**.",
        "why is rice suitable for wetlands": "Tolerant to **submergence**.",
        "what is micro-irrigation": "**Drip + sprinkler** systems.",
        "why use solar pumps": "Save **electricity and cost**.",
        "why is irrigation scheduling important": "Prevents **wastage and stress**.",
        "what is canal lining": "Cement coating to **reduce seepage**.",
        "why is drip best for horticulture": "Saves water and **increases yield**.",
        "why do crop prices fluctuate": "Due to **demand, supply, weather**, and market arrivals.",
        "what is msp": "**Minimum Support Price**—government purchase rate.",
        "why farmers check mandi rates": "To **sell at best price**.",
        "what is contract farming": "Agreement with company to **grow crops**.",
        "why diversification helps farmers": "Reduces **risk**.",
        "what is value addition": "Converting raw produce to **processed goods** (e.g., tomato to ketchup).",
        "why storage affects profit": "Reduces **wastage** and allows off-season selling.",
        "what is warehouse receipt": "Document proving **stored grain ownership**.",
        "why do farmers insure crops": "Against **natural disasters**.",
        "what is crop loan": "Short-term loan for **cultivation**.",
        "why keep farm records": "To track **cost and profit**.",
        "what is precision farming": "**Technology-based** farming.",
        "why use fpos": "Farmers get **collective bargaining power**.",
        "what is organic certification": "Approval for **chemical-free farming**.",
        "why transport cost matters": "Affects **final profit**.",
        "what is grading": "Sorting produce based on **quality**.",
        "why do export crops need quality testing": "To meet **international standards**.",
        "what is cold chain": "**Temperature-controlled** supply chain.",
        "why processing industries need steady supply": "To run **factories continuously**.",
        "what is market glut": "**Oversupply** causing price fall.",
        "what is e-nam": "Online **national agriculture market**.",
        "why farmers join cooperatives": "**Better price and support**.",
        "why is organic farming costly": "High **labor and certification** charges.",
        "what is gi tag": "**Geographical Indication** for unique regional products.",
        "why are input costs rising": "Due to fertilizer, fuel, labor price increases.",
        "what is drone spraying": "Using drones to **spray pesticides**.",
        "why use soil testing kits": "Identify **nutrient needs**.",
        "what is satellite crop monitoring": "Tracking **crop health from space**.",
        "why use mobile apps in farming": "Weather, market, **pest alerts**.",
        "what is iot in agriculture": "**Sensors** monitoring farm conditions.",
        "why use automated irrigation": "Saves **water and labor**.",
        "what is hydroponics": "Growing plants **without soil**.",
        "what is aquaponics": "**Fish + hydroponics** combination.",
        "why use greenhouse farming": "**Controlled environment** for growth.",
        "what is vertical farming": "Growing crops in **layers** to save space.",
        "why use solar dryers": "Dry produce **faster and safely**.",
        "what is weather-based advisory": "Farming advice based on **forecast**.",
        "why use crop models": "Predict **yield and needs**.",
        "what is gis mapping": "Mapping **soil and crop** conditions.",
        "why farm automation important": "Reduces **labor cost**.",
        "what is smart tractor": "**GPS-enabled** automated tractor.",
        "why use ai pest detection": "**Early warning** saves crop.",
        "what is blockchain in farming": "**Transparent supply chain**.",
        "why use weather sensors": "**Real-time data** for decisions.",
        "what is e-extension": "Digital **farmer advisory** services.",
        "why is mechanization important": "Faster, **efficient cultivation**.",
        "what are farm robots": "Machines doing tasks like **weeding or harvesting**.",
        "what is image-based crop diagnosis": "Using phone camera to **detect diseases**.",
        "why use artificial lighting in greenhouses": "Promote **off-season production**.",
        "what is climate-smart agriculture": "Farming methods **adapted to climate change**.",
        "best season for onion": "**Rabi** (cool season).",
        "why banana grows year-round": "Perennial plant needing **warm climate**.",
        "why mango is called king of fruits": "**Taste, nutrition**, and cultural value.",
        "why guava is hardy": "Tolerates **drought and poor soils**.",
        "major pest of brinjal": "**Fruit and shoot borer**.",
        "why cauliflower turns yellow": "**Sunlight exposure**—needs blanching.",
        "why tomatoes crack": "**Irregular watering**.",
        "ideal temp for chilies": "**20–25°C**.",
        "why papaya gives latex": "Natural **defense mechanism**.",
        "why coconut needs sandy soil": "**Good drainage** required.",
        "why turmeric is grown in shade": "Prefers **filtered light**.",
        "why ginger needs warm moist climate": "For **rhizome development**.",
        "why grapes need pruning": "Improves **fruit quality**.",
        "why apples grow in hills": "Need **cool climate**.",
        "why pomegranate cracks": "**Water stress**.",
        "why leafy vegetables grow fast": "High **nitrogen metabolism**.",
        "why watermelon sweetens in summer": "High sunlight **increases sugar**.",
        "why muskmelon needs sandy soil": "For quick drainage and **root spread**.",
        "why peanuts flower above soil but fruit below soil": "**Pegs penetrate soil** to form pods.",
        "why chickpea is drought-tolerant": "**Deep taproot**.",
        "why barley is hardy": "Tolerates **cold and poor soils**.",
        "why olives need dry climate": "Sensitive to **humidity**.",
        "why lemons fruit throughout year": "Multiple **flowering flushes**.",
        "why sugarbeet is grown in cool climates": "Needs low temp for **sugar accumulation**.",
        "why spinach grows best in winter": "Sensitive to **heat and bolting**.",
        "ideal soil ph for wheat": "Wheat grows best in soil with pH between **6.0–7.5**.",
        "how much water does rice need": "Rice typically requires **1200–1500 mm** of water.",
        "why do leaves turn yellow in plants": "Usually due to **nitrogen deficiency** or **poor drainage**.",
        "how can farmers reduce pest attacks naturally": "Using **neem oil, crop rotation**, and field hygiene helps significantly.",
        "what is the benefit of drip irrigation": "Drip saves **30–60% water** and supplies moisture directly to the root zone.",
        "what is mulching": "Covering soil with organic materials to **conserve moisture** and reduce weeds.",
        "how can soil organic matter be increased": "Add **compost, cow dung, green manure**, and reduce excessive tillage.",
        "what causes fruit cracking in pomegranate": "**Irregular watering** and high temperature fluctuations.",
        "what is precision farming": "**Data-based farming** that uses sensors, GPS, and AI to optimize inputs.",
        "how to increase cotton yield": "Use high-quality seeds, maintain **balanced NPK**, and ensure timely irrigation.",
        "why do plants wilt at noon even when watered": "High **transpiration** due to heat; they recover in the evening normally.",
        "best fertilizer for sugarcane": "A balanced dose of N:P:K = **150:60:60**.",
        "why do seeds fail to germinate sometimes": "Poor seed quality, low moisture, or **fungal infection** in soil.",
        "how do weather apps help farmers": "They warn about **rainfall, storms, temperature changes**, and pest risk.",
        "what is intercropping": "Planting **two or more crops** together to improve yield and reduce pests.",
        "why is zinc important for crops": "Zinc deficiency causes **stunted growth** and leaf discoloration.",
        "why apply fertilizers in split doses": "To prevent **nutrient loss** and ensure plants get nutrients steadily.",
        "how to detect early fungal infection": "Look for **spots, powdery growth**, or yellow patches on leaves.",
        "what is deficit irrigation": "Supplying **less water** than full requirement to save water.",
        "what causes lodging in wheat": "Excess nitrogen, strong winds, and **weak stem structure**.",
        "how to prevent termites in crops": "Apply **neem cake** and maintain field sanitation.",
        "best time to irrigate fields": "**Early morning or evening** to reduce evaporation loss.",
        "why is potassium important": "It improves **fruit size, disease resistance**, and stress tolerance.",
        "what is the benefit of raised-bed farming": "**Better drainage**, less disease, and improved root growth.",
        "what type of soil does groundnut prefer": "Light **sandy loam soil** with good drainage.",
        "why do mango trees get powdery mildew": "**High humidity and cool nights** create ideal fungal conditions.",
        "what is hyv seed": "**High-yielding varieties** bred for productivity and disease resistance.",
        "how can farmers store grains safely": "Use **airtight containers**, fumigation, and ensure dryness.",
        "why do flowers drop in chili plants": "**Heat stress** and nutrient imbalance, especially nitrogen.",
        "best time to sow mustard": "**October–November** for ideal winter conditions.",
        "how to improve soil drainage": "Add **sand, organic matter**, or create raised beds.",
        "what are biofertilizers": "Natural microbes that improve nutrient availability like **Rhizobium and Azotobacter**.",
        "what causes black spots on citrus leaves": "Fungal infection called **citrus black spot**.",
        "use of weather forecasting in spraying pesticides": "Spray when **wind is low** and no rain forecast for 24–48 hours.",
        "why do banana leaves tear": "**Strong winds** or low humidity cause splitting.",
        "how to attract pollinators naturally": "Plant **flowering plants** like marigold, sunflower around fields.",
        "what crop is best for saline soil": "**Barley, cotton**, and date palm tolerate salinity well.",
        "why use seed treatment": "To protect seeds from **fungi, pests**, and improve germination.",
        "what is evapotranspiration": "Combined water loss from **soil and plant transpiration**.",
        "why do brinjal developing holes": "**Brinjal fruit borer** larvae damage the fruits.",
        "how to control weeds organically": "**Mulching, hand weeding**, and using cover crops.",
        "why does maize require nitrogen early": "It supports **rapid vegetative growth** and leaf formation.",
        "what is deep plowing": "Turning soil deeply to **break hardpan** and improve aeration.",
        "why apply gypsum in soil": "It reduces **soil sodicity** and improves structure.",
        "what is an agro-advisory": "**Location-based expert guidance** based on weather and soil.",
        "why are earthworms good for soil": "They improve **soil aeration** and increase organic matter.",
        "what causes sunburn in fruits": "**Extreme heat** and direct sunlight exposure.",
        "why are micronutrients needed in small amounts": "They regulate **physiological processes** even in tiny quantity.",
        "why do young seedlings turn pale": "Usually due to **low sunlight, nitrogen deficiency**, or waterlogging.",
        "what is farmyard manure (fym)": "A mix of **cow dung, urine, straw**, and waste, improving soil fertility.",
        "why does papaya get root rot": "Caused by excess water, **poor drainage**, and fungal infection.",
        "how to improve flowering in crops": "Use balanced **phosphorus and potassium**, avoid excessive nitrogen.",
        "what leads to bitter cucumbers": "**Heat stress** and irregular watering.",
        "why do plants need phosphorus": "It supports **root growth, flowering**, and energy transfer.",
        "what is a rainfed crop": "Crops grown **without irrigation**, depending only on rainfall.",
        "why use pheromone traps": "To **monitor and reduce pest populations** by attracting male insects.",
        "what temperature is ideal for potato": "Potatoes grow best at **15–20°C** with cool nights.",
        "why do legumes fix nitrogen": "Their root nodules contain **Rhizobium bacteria**.",
        "how to reduce soil erosion": "Use **contour farming, cover crops**, and maintain vegetation.",
        "why does maize lodge easily": "**High winds, excessive nitrogen**, and weak stem varieties.",
        "what is bush-bean variety": "A type of bean that grows **compact** and requires no staking.",
        "why add lime to soil": "To **neutralize acidity** and improve nutrient availability.",
        "what causes blossom-end rot in tomatoes": "**Calcium deficiency** and inconsistent watering.",
        "how can farmers check soil moisture": "By using **tensiometers, moisture meters**, or simple finger tests.",
        "why rotate cereal and legume crops": "Legumes **add nitrogen** and improve soil for cereals.",
        "what is a cover crop": "Crops like cowpea, clover grown to **protect soil and add organic matter**.",
        "why do citrus leaves curl": "**Aphid attack, heat stress**, or nutrient deficiency.",
        "what is the advantage of greenhouse farming": "**Year-round production** and better control of temperature & humidity.",
        "why use urea in split doses": "To reduce **nitrogen losses** from leaching and volatilization.",
        "what causes white mold in crops": "**High humidity** and poor air circulation.",
        "why are legumes good for soil": "They improve **nitrogen levels** and soil structure naturally.",
        "what is vertical farming": "Layered indoor farming using **controlled environment and LEDs**.",
        "why do leaves curl upward": "**Heat stress, potassium deficiency**, or viral infection.",
        "how to reduce post-harvest losses": "Proper **drying, sorting, packaging**, and cool storage.",
        "what is a cold wave alert for farmers": "Warning of very low temperatures that can harm crops like **banana and potato**.",
        "why do paddy fields crack when dry": "**Clay soil shrinks** after water evaporates.",
        "what is humus": "Decomposed organic matter that **improves soil fertility**.",
        "why apply basal fertilizer": "To provide essential nutrients at planting for **early growth**.",
        "what causes sooty mold on plants": "**Honeydew** secreted by pests like aphids and whiteflies.",
        "what is a drought-resistant crop": "Crops like **millets and sorghum** that survive low water conditions.",
        "why are hybrid seeds more productive": "They exhibit **hybrid vigor**, giving higher yield and uniform growth.",
        "why do fruits drop early": "Poor pollination, **nutrient deficiency**, or pest damage.",
        "what is farm mechanization": "Using **machines** to reduce labor and increase efficiency.",
        "why apply potash to crops": "It improves **disease resistance** and stress tolerance.",
        "what is ridge-and-furrow farming": "Creating raised ridges for planting and **furrows for irrigation**.",
        "why use micronutrient sprays": "They correct deficiencies **quickly** through leaf absorption.",
        "what causes yellow mosaic on pulse crops": "A **viral disease** spread by whiteflies.",
        "what is waterlogging": "Excess water that **suffocates roots** and reduces oxygen.",
        "how to improve grain size in wheat": "Maintain **irrigation at critical stages** and balanced nutrient supply.",
        "why do onions bolt early": "Sudden **cold weather** triggers premature flowering.",
        "what is a resistant variety": "A crop variety that withstands **pests or diseases** better.",
        "why use shade nets": "To protect plants from **extreme sunlight and wind**.",
        "what causes root-knot in plants": "**Nematodes** that form galls on roots.",
        "how does drip irrigation save fertilizer": "By using **fertigation**, delivering nutrients through water.",
        "what is precision spraying": "Using **sensors or drones** to spray only affected areas.",
        "why do banana plants topple": "**Strong winds** and weak root anchorage.",
        "what is seed dormancy": "A natural rest period where seeds do **not germinate**.",
        "why does chilli get leaf curl": "Caused by **viral infection** spread by whiteflies.",
        "what is stubble management": "Handling leftover crop residue **without burning**.",
        "why use bio-pesticides": "They are **safer and environmentally friendly**.",
        "what causes brown spot in rice": "A **fungal disease** due to high humidity.",
        "how to prevent pre-harvest sprouting": "Harvest on time and **avoid rain** during maturity.",
        "why perform soil testing": "To understand **nutrient status** and apply balanced fertilizers.",
        "what irrigation suits sandy soil": "Frequent **light irrigation** due to high drainage.",
        "why does sugarcane need more nitrogen": "Because it has **long growth duration** and high biomass.",
        "what are climate-smart crops": "Crops tolerant to **drought, heat, or flood** conditions.",
        "why prune fruit trees": "To improve **airflow, sunlight penetration**, and fruit quality.",
        "what causes damping-off in seedlings": "A **fungal disease** in over-wet nurseries.",
        "what is the shelf-life of stored grains": "**6–12 months** if kept dry and pest-free.",
        "why use mulching in cucurbits": "It **prevents weeds** and keeps fruits clean.",
        "what is foliar feeding": "Spraying nutrients **directly on leaves** for quick absorption.",
        "why do plants need calcium": "For **strong cell walls** and root development.",
        "what is integrated pest management (ipm)": "Combining **biological, cultural, and chemical** methods to manage pests.",
        "why use sprinkler irrigation": "Suitable for **light soils** and uniform water distribution.",
        "what causes canker in citrus": "A **bacterial disease** causing raised lesions.",
        "what is a cash crop": "Crops grown primarily for **sale**, like cotton or sugarcane.",
        "why are green manures used": "They **add nutrients** and improve soil organic matter.",
        "why do grapes crack": "Sudden rain or **irregular watering** during ripening.",
        "what is ratoon crop": "A second crop grown from the **stubble of the first**.",
        "why apply compost": "It improves **soil structure** and nutrient content.",
        "what is a weather-based advisory": "Guidance for farmers based on **short-term weather forecasts**.",
        "why do pests multiply in hot weather": "High temperature accelerates **breeding cycles**.",
        "what is fertigation": "Applying **fertilizers through irrigation water**.",
        "why do chillies drop flowers": "**High temperatures** and nutrient imbalance.",
        "what is seed vigor": "The seed’s ability to **germinate strongly** and grow rapidly.",
        "why do plants need magnesium": "It is essential for **chlorophyll formation**.",
        "what is ex-situ conservation": "Saving plant species **outside their natural habitat**.",
        "why do plants need sulfur": "For **protein formation** and enzyme activity.",
        "what is a watershed": "An area that drains rainfall into a **common outlet**.",
        "why grow cover crops in off-season": "To **stop erosion** and add organic matter.",
        "what causes root rot in vegetables": "**Fungal infections** from overwatering.",
        "what is zero tillage": "Growing crops **without plowing** the field.",
        "why use certified seeds": "To ensure **purity, high germination**, and disease-free planting.",
        "what is a soil hardpan": "A **compact soil layer** restricting root penetration.",
        "why apply boron": "Helps **flowering and fruit setting**.",
        "what causes bacterial wilt": "A **bacterial infection** that clogs plant vessels.",
        "what is strip cropping": "Growing alternate crop strips to **reduce erosion**.",
        "why do cucumbers turn yellow": "Over-maturity or **nutrient imbalance**.",
        "what is a drip lateral": "A pipe with emitters **supplying water to crops**.",
        "why use solar dryers": "They **reduce post-harvest losses** and preserve quality.",
        "what causes leaf spot": "**Fungal or bacterial** infection.",
        "what is green revolution": "Introduction of **HYV seeds, fertilizers, and irrigation** for higher yields.",
        "why do paddy fields smell foul": "**Anaerobic decomposition** due to water stagnation.",
        "what is mulching film": "Plastic sheet used to **conserve moisture and control weeds**.",
        "what causes leaf blight in wheat": "Fungal infection due to **moisture and cool weather**.",
        "why use shade-loving crops": "They grow well under **low sunlight**.",
        "what is a drought warning": "Forecast indicating **below-normal rainfall**.",
    };

    function findBestQA(text) {
        let bestMatch = null;
        let highestScore = 0;
        const normalizedText = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        const words = normalizedText.split(/\s+/);

        for (const question in FARMING_QA) {
            let score = 0;
            if (normalizedText.includes(question)) {
                score += 1000;
            }
            words.forEach(userWord => {
                if (userWord.length > 3 && question.includes(userWord)) {
                    score += 1;
                }
            });

            if (score > highestScore && score > 2) {
                highestScore = score;
                bestMatch = FARMING_QA[question];
            }
        }
        return bestMatch;
    }

    function findBestCropAdvice(text) {
        for (const cropKey in DETAILED_CROP_INFO) {
            const data = DETAILED_CROP_INFO[cropKey];
            if (text.includes(cropKey) || data.keywords.some(keyword => text.includes(keyword))) {
                return { name: cropKey.charAt(0).toUpperCase() + cropKey.slice(1), data: data };
            }
        }
        return null;
    }


    const chatFab = document.getElementById('chat-fab');

    if (chatFab) {

        const chatModal = document.getElementById('chat-modal');
        const chatCloseBtn = document.getElementById('chat-close-btn');
        const chatMicBtn = document.getElementById('chat-mic-btn');
        const chatImageBtn = document.getElementById('chat-image-btn'); 
        const chatFileInput = document.getElementById('chat-file-input');
        const chatTextInput = document.getElementById('chat-text-input');
        const chatSoilBtn = document.getElementById('chat-soil-btn'); 
        const soilModal = document.getElementById('soil-input-modal');
        const soilSubmitBtn = document.getElementById('soil-submit');
        const soilCancelBtn = document.getElementById('soil-cancel');
        const soilPHInput = document.getElementById('soil-ph');
        const soilNInput = document.getElementById('soil-n');
        const soilPInput = document.getElementById('soil-p');
        const soilKInput = document.getElementById('soil-k');


        function addMessage(text, sender) {
            const bubble = document.createElement('div');
            bubble.classList.add('chat-bubble', sender);
            
            const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
            bubble.innerHTML = formattedText;
            
            if (sender === 'bot' && text === "...") {
                bubble.classList.add('typing');
            }
            
            const chatMessagesContainer = document.getElementById('chat-messages');
            chatMessagesContainer.appendChild(bubble);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
            return bubble;
        }

        function speakText(text) {
            try {
                if (!window.speechSynthesis) return;
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-IN';
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            } catch (e) { console.error("Text-to-Speech error:", e); }
        }

        function handleSend() {
            const text = chatTextInput.value;
            if (text.trim() === "") return;
            addMessage(text, 'user');
            chatTextInput.value = ""; 
            getBotResponse(text);
        }

        function promptForLocation() {
            const card = document.createElement('div');
            card.classList.add('chat-bubble', 'bot-card');
            card.innerHTML = `
                <h4>Live Weather Forecast</h4>
                <p>To provide a highly accurate 7-day weather forecast and microclimate advisory for your farm, we require your current location. Please click the button below or visit the Weather section of our **website**.</p>
                <button id="request-location-btn">Share My Location</button>
            `;
            const chatMessagesContainer = document.getElementById('chat-messages');
            chatMessagesContainer.appendChild(card);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

            const requestLocationBtn = card.querySelector('#request-location-btn');
            if (requestLocationBtn) {
                requestLocationBtn.addEventListener('click', requestGeolocation);
            }
            speakText("Please share your location for the forecast.");
        }

        function requestGeolocation() {
            if ("geolocation" in navigator) {
                addMessage("Requesting live location...", "bot");
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        setTimeout(() => {
                             addMessage(`Location found! Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}.`, "user");
                             addMessage("Thank you! I am simulating the forecast: Expect **clear skies** and a high of **32°C** today. Your actual farm-specific advisory will appear here shortly!", "bot");
                             speakText("Forecast simulation complete. Expect clear skies.");
                        }, 2000);
                    },
                    function(error) {
                        addMessage("Location access denied or timed out. Please check your browser settings.", "bot");
                        speakText("Location access failed.");
                    }
                );
            } else {
                addMessage("Your browser does not support geolocation.", "bot");
            }
        }
        
        function simulateImageDiagnosis(fileName) {
            const cropKeys = Object.keys(DETAILED_CROP_INFO);
            const randomKey = cropKeys[Math.floor(Math.random() * cropKeys.length)];
            const data = DETAILED_CROP_INFO[randomKey];
            
            addMessage(`[Image uploaded: ${fileName}]`, 'user');
            const typingBubble = addMessage("...", 'bot');

            setTimeout(() => {
                const diagnosis = data.disease || "No major issues.";
                let reply = `**AI DIAGNOSIS COMPLETE**\n\n`;
                reply += `Our system identified the crop as **${randomKey.toUpperCase()}**.\n`;
                reply += `The primary issue detected is **${diagnosis}**.\n\n`;
                reply += `**Recommended Action:** ${data.advice}`;

                typingBubble.textContent = "";
                typingBubble.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
                typingBubble.classList.remove('typing');
                speakText("Diagnosis complete. Please see the detailed report.");
            }, 2500); 
        }
        
        function simulateSoilAnalysis(pH, N, P, K) {
            addMessage(`Soil Data Entered: pH ${pH}, N ${N} kg/ha, P ${P} kg/ha, K ${K} kg/ha`, 'user');
            const typingBubble = addMessage("...", 'bot');

            setTimeout(() => {
                let analysis = "";
                let fertilizerAdvice = [];
                let phStatus = (pH < 6.0) ? "acidic" : (pH > 7.5) ? "alkaline" : "ideal (Neutral)";

                if (pH < 6.0) fertilizerAdvice.push("Need to add **lime** or wood ash to increase pH.");
                if (N < 100) fertilizerAdvice.push("Nitrogen (N) is **low**. Recommend increasing **Bio-Nitrogen (Input 02)**.");
                if (P < 20) fertilizerAdvice.push("Phosphorus (P) is **low**. Focus on **Bio-Phosphate (Input 03)** application before sowing.");
                if (K < 100) fertilizerAdvice.push("Potassium (K) is **low**. Apply **Bio-Potash (Input 18)** to improve fruit setting and disease resistance.");
                if (fertilizerAdvice.length === 0) fertilizerAdvice.push("Your NPK levels are **balanced** for most general crops. Focus on maintaining Organic Carbon.");
                
                analysis += `**SOIL TEST ANALYSIS COMPLETE**\n\n`;
                analysis += `* **pH Status:** Your soil is **${phStatus}**.\n\n`;
                analysis += `* **Nutrient Prescription (Residue-Free):**\n`;
                analysis += fertilizerAdvice.join('\n');
                analysis += `\n\n* Consult our agronomist for a tailored crop plan based on these readings.`;

                typingBubble.textContent = "";
                typingBubble.innerHTML = analysis.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
                typingBubble.classList.remove('typing');
                
                speakText("Soil analysis complete. Please check the recommendations.");
            }, 1800);
        }


        function getBotResponse(userText) {
            const typingBubble = addMessage("...", 'bot');
            const lowerUserText = userText.toLowerCase();

            setTimeout(() => {
                let reply = "";
                
                let foundCropDetails = findBestCropAdvice(lowerUserText);
                let qaAnswer = findBestQA(lowerUserText);

                if (lowerUserText.includes("weather") || lowerUserText.includes("location") || lowerUserText.includes("forecast")) {
                    typingBubble.remove(); 
                    promptForLocation(); 
                    return; 
                } else if (foundCropDetails) {
                    reply = `Yes, for **${foundCropDetails.name}**: ${foundCropDetails.data.advice} Key inputs: **${foundCropDetails.data.inputs}**`;
                } else if (qaAnswer) {
                    reply = qaAnswer;
                } else if (lowerUserText.includes("hello") || lowerUserText.includes("namaste") || lowerUserText.includes("hi")) {
                    reply = "Namaste! I'm your AI Sahayak. I can answer questions about **residue-free farming**, **carbon credits**, and **our input programs**.";
                } else if (lowerUserText.includes("carbon") || lowerUserText.includes("credit") || lowerUserText.includes("income")) {
                    reply = "Our **carbon credit program** gives farmers **₹800 per verified credit**. We handle all the monitoring and selling; you just follow the regenerative farming protocols. See the 'Carbon' section on our homepage for details!";
                } else if (lowerUserText.includes("loan") || lowerUserText.includes("credit") || lowerUserText.includes("finance")) {
                    reply = "We offer **farm credit support** and micro-savings programs for our network. This helps you manage cash flow for inputs and equipment. Contact our FPO desk for quick access.";
                } else if (lowerUserText.includes("input") || lowerUserText.includes("fertilizer") || lowerUserText.includes("bio")) {
                    reply = "We provide a complete suite of **35 certified residue-free inputs** including bio-fertilizers and pest solutions. These are guaranteed to be compliant with premium market standards.";
                } else if (lowerUserText.includes("fpo") || lowerUserText.includes("partner")) {
                    reply = "We partner with FPOs to provide **training**, access to **carbon revenue**, and **guaranteed buy-back** for produce. Visit our 'FPO' page to start a collaboration.";
                } else {
                    reply = "I apologize, that specific question is not yet in my training database. For immediate assistance, please **contact our expert support team at info@rupiya.com** or call us at **+91 12345 67890**.";
                }
                
                typingBubble.textContent = "";
                typingBubble.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>'); 
                typingBubble.classList.remove('typing');
                
                speakText(reply.replace(/\*+/g, '')); 

            }, 800);
        }
        
        
        if (chatFab) {
            chatFab.addEventListener('click', () => { chatModal.classList.toggle('active'); });
            chatCloseBtn.addEventListener('click', () => { chatModal.classList.remove('active'); if (soilModal) soilModal.classList.remove('active'); });
        }

        if (chatTextInput) {
            chatTextInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
        }

        if (chatImageBtn) {
            chatImageBtn.addEventListener('click', () => { chatFileInput.click(); });
            chatFileInput.addEventListener('change', (event) => {
                if (event.target.files.length > 0) {
                    simulateImageDiagnosis(event.target.files[0].name);
                }
            });
        }
        if (chatSoilBtn && soilModal && soilSubmitBtn && soilCancelBtn) {
            chatSoilBtn.addEventListener('click', () => { chatModal.classList.remove('active'); soilModal.classList.add('active'); });
            soilCancelBtn.addEventListener('click', () => { soilModal.classList.remove('active'); });
            soilSubmitBtn.addEventListener('click', () => {
                const pH = parseFloat(document.getElementById('soil-ph').value);
                const N = parseInt(document.getElementById('soil-n').value);
                const P = parseInt(document.getElementById('soil-p').value);
                const K = parseInt(document.getElementById('soil-k').value);
                
                if (isNaN(pH) || isNaN(N) || isNaN(P) || isNaN(K)) {
                    addMessage("Error: Please enter valid numbers for all soil parameters.", 'bot');
                    return;
                }

                soilModal.classList.remove('active');
                chatModal.classList.add('active');
                simulateSoilAnalysis(pH, N, P, K);
            });
        }
        
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.lang = 'en-IN';
                recognition.interimResults = false;
                recognition.maxAlternatives = 1;

                if (chatMicBtn) {
                    chatMicBtn.addEventListener('click', () => {
                        try {
                            window.speechSynthesis.cancel(); 
                            recognition.start();
                        } catch (e) {
                            console.log("Speech recognition already active.");
                        }
                    });
                }
                
                recognition.onstart = () => { if (chatMicBtn) chatMicBtn.classList.add('listening'); };
                recognition.onresult = (event) => { 
                    if (chatTextInput) chatTextInput.value = event.results[0][0].transcript;
                    handleSend(); 
                };
                recognition.onspeechend = () => { recognition.stop(); };
                recognition.onerror = (event) => { console.error("Speech recognition error:", event.error); };
                recognition.onend = () => { if (chatMicBtn) chatMicBtn.classList.remove('listening'); };
                
            } else {
                if (chatMicBtn) chatMicBtn.style.display = 'none';
            }
        } catch (e) {
            if (chatMicBtn) chatMicBtn.style.display = 'none';
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const chatSoilBtn = document.getElementById('chat-soil-btn');
    const soilModal = document.getElementById('soil-input-modal');
    const soilCancelBtn = document.getElementById('soil-cancel');
    const soilSubmitBtn = document.getElementById('soil-submit');
    const chatMessages = document.getElementById('chat-messages');
    const chatModal = document.getElementById('chat-modal'); 

    function createChatBubble(message, type) {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble', type);
        bubble.innerHTML = message;
        return bubble;
    }

    chatSoilBtn.addEventListener('click', () => {
        chatModal.style.display = 'block'; 
        soilModal.style.display = 'flex';
    });

    soilCancelBtn.addEventListener('click', () => {
        soilModal.style.display = 'none';
    });
    
    soilModal.addEventListener('click', (e) => {
        if (e.target === soilModal) {
            soilModal.style.display = 'none';
        }
    });


    soilSubmitBtn.addEventListener('click', () => {
        const ph = parseFloat(document.getElementById('soil-ph').value);
        const n = parseInt(document.getElementById('soil-n').value);
        const p = parseInt(document.getElementById('soil-p').value);
        const k = parseInt(document.getElementById('soil-k').value);

        if (isNaN(ph) || isNaN(n) || isNaN(p) || isNaN(k)) {
            alert("Please enter valid numerical values for all soil parameters.");
            return;
        }

        const userMessage = `**Soil Data Submitted:**<br>
                             pH: **${ph}** | N: **${n} kg/ha**<br>
                             P: **${p} kg/ha** | K: **${k} kg/ha**`;
        chatMessages.appendChild(createChatBubble(userMessage, 'user'));

        let advisory = "Based on your soil data, here is the Rupiya AI Advisory:";
        let status = 'Good';

        if (n < 100) {
            advisory += "<br><br>🚨 **Nitrogen Alert:** N is Low. Recommend using our Bio-N Fixer and applying slow-release Urea alternative to boost foliage growth.";
            status = 'Warning';
        } else if (n > 200) {
            advisory += "<br><br>✅ **Nitrogen:** N is very High. Reduce N-based inputs to prevent leaf burn and focus on P/K for flowering.";
        }

        if (p < 20) {
            advisory += "<br><br>⚠️ **Phosphorus:** P is Low. Use Rupiya's Bio-P Solubilizer during planting to maximize root development.";
            status = 'Warning';
        }

        if (ph < 6.0) {
            advisory += "<br><br>📉 **pH is Acidic:** Apply a certified Lime-based amendment to adjust soil pH for better nutrient absorption.";
            status = 'Critical';
        } else if (ph > 7.5) {
            advisory += "<br><br>📈 **pH is Alkaline:** Consider using sulfur or acidifying organic matter to improve micro-nutrient uptake.";
            status = 'Warning';
        }
        
        advisory += "<br><br>We have created a custom **Residue-Free Input Plan** for your next crop cycle based on this analysis. Please check your Rupiya App for the full report!";


        setTimeout(() => {
            chatMessages.appendChild(createChatBubble(advisory, 'bot'));
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000); 
        soilModal.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {

    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        const head = item.querySelector('.acc-head');
        head.addEventListener('click', () => {
            accItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.acc-body').style.maxHeight = null;
                    otherItem.querySelector('.acc-icon').textContent = '+';
                }
            });

            item.classList.toggle('active');
            const body = item.querySelector('.acc-body');
            const icon = item.querySelector('.acc-icon');
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.textContent = '–';
            } else {
                body.style.maxHeight = null;
                icon.textContent = '+';
            }
        });
    });

    try {
        const track = document.querySelector('.slider-track');
        if (!track) throw new Error("Slider track not found"); 

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.slider-controls .control-btn:last-child');
        const prevButton = document.querySelector('.slider-controls .control-btn:first-child');

        if (!nextButton || !prevButton) throw new Error("Slider controls not found");

        slides.forEach(slide => {
            track.appendChild(slide.cloneNode(true));
        });

        let currentSlideIndex = 0;
        
        const slideWidth = 340; 
        
        function moveSlide(direction) {
            currentSlideIndex += direction;
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';

            if (currentSlideIndex >= slides.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlideIndex = 0;
                    track.style.transform = 'translateX(0)';
                }, 500);
            }
            if (currentSlideIndex < 0) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlideIndex = slides.length - 1;
                    track.style.transform = 'translateX(' + (-currentSlideIndex * slideWidth) + 'px)';
                }, 500);
            }
        }

        nextButton.addEventListener('click', () => moveSlide(1));
        prevButton.addEventListener('click', () => moveSlide(-1));

    } catch (e) {
    }


    const counters = document.querySelectorAll('.big[data-target]');
    const speed = 200; 

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const currentText = counter.innerText.replace(/[^0-9.]/g, ''); 
        const current = +currentText;
        const increment = target / speed;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment).toLocaleString('en-US');
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target.toLocaleString('en-US'); 
        }
    };
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.big[data-target]').forEach(animateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const counterSection = document.querySelector('.stats-container') || document.querySelector('.counters');
    if (counterSection) {
        counterObserver.observe(counterSection);
    }


 
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 900,
            delay: 50,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false 
        });
        
        sr.reveal('.hero-btn', { origin: 'top', delay: 600 });
        sr.reveal('.floating-icons .float-item', { interval: 100, scale: 0.8, rotate: { z: 20 } });

        sr.reveal('.section-title, .section-subtitle, .finance-sub, .carbon-deep-dive-section h2', { delay: 100, distance: '30px' });
        
        sr.reveal('.flow-card', { interval: 150, delay: 200 });
        sr.reveal('.flow-arrow', { interval: 150, rotate: { z: 90 } });

        sr.reveal('.service-card', { interval: 100 });
        sr.reveal('.stat-box', { interval: 150 });
        sr.reveal('.carbon-stat-card', { interval: 150, origin: 'right' });
        
   
        sr.reveal('.finance-grid-top .fin-card, .finance-grid-bottom .fin-card', { 
            interval: 100, 
            distance: '40px',
            delay: 150 
        });
      

        sr.reveal('.audience-grid .aud-card', { interval: 80, scale: 0.95 });
        

        sr.reveal('.carbon-explanation', { origin: 'left', delay: 150 });
        sr.reveal('.soc-diagram-buttons', { delay: 300, distance: '30px' });
        sr.reveal('.contact-cards .card', { interval: 100, origin: 'top' });
        sr.reveal('.contact-form', { origin: 'right', delay: 150 });
        

        sr.reveal('.site-footer .footer-wrapper > div, .site-footer .footer-socials, .footer-bottom', { interval: 100, delay: 200 });

    } else {
        console.warn('ScrollReveal library not found. Scroll animations disabled.');
    }



    const cropData = { 
        "Pomegranate": { image: "assets/crops/pomogranate.jpeg", testimonial: "“...pomegranates are bigger and have fewer spots...”", benefits: ["Avg. 20% increase in fruit size"], ctaText: "Get Advisory for Pomegranate" },
        "Grapes": { image: "assets/crops/grapes.jpeg", testimonial: "“...achieve the perfect sugar level for my grapes.”", benefits: ["Improved berry uniformity (TSS)"], ctaText: "Get Advisory for Grapes" },
        "Tomato": { image: "assets/crops/tomato.jpeg", testimonial: "“...yield has doubled and the fruit is high quality.”", benefits: ["Drastic reduction in pests & viruses"], ctaText: "Get Advisory for Tomato" },
        "Chilli": { image: "assets/crops/chilli.jpeg", testimonial: "“I got a 30% higher price for my residue-free chillies...”", benefits: ["Better fruit color and size"], ctaText: "Get Advisory for Chilli" },
        "Default": { image: "assets/crops/sugarcane.jpeg", testimonial: "“Rupiya’s inputs work for all my vegetables...”", benefits: ["Improved soil organic carbon (SOC)"], ctaText: "Ask About This Crop" }
    };
    

});
soilInputModal.classList.add('visible');