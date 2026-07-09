import type { ServiceData, AreaData } from "./types";
import { AREAS } from "./areas-data";
import { SERVICES } from "./services-data";

// ─── Area Local Content ────────────────────────────────────────────────────────

export type AreaLocalContent = {
  intro: string;
  roads: string[];
  districts: string[];
  propertyTypes: string;
  accessNotes: string;
  pricingNote: string;
  localFAQs: { q: string; a: string }[];
};

export const AREA_LOCAL_CONTENT: Record<string, AreaLocalContent> = {
  wolverhampton: {
    intro:
      "Wolverhampton is our home city — Get Rapid Removals was founded here in Whitmore Reans and we have served every corner of it since 2019. From WV1 in the city centre to WV14 in Bilston and WV10 in Bushbury, we know every street, every parking restriction, and every awkward access lane.",
    roads: [
      "A449 Stafford Road",
      "A460 Cannock Road",
      "A41 Tettenhall Road",
      "A4123 Wolverhampton Road",
      "M54 Junction 2",
    ],
    districts: [
      "Penn",
      "Graiseley",
      "Whitmore Reans",
      "Heath Town",
      "Low Hill",
      "Bushbury",
      "Tettenhall",
      "Oxley",
      "Fordhouses",
      "Pendeford",
    ],
    propertyTypes:
      "Wolverhampton offers one of the most varied property mixes in the West Midlands. Victorian and Edwardian terraces dominate Penn and Graiseley; 1960s and 1970s council-built semis and flats define Low Hill and Heath Town; executive detached properties line the roads of Tettenhall and Oxley; and a growing number of modern new-build estates are appearing at Pendeford and around the ring road.",
    accessNotes:
      "The Wolverhampton ring road creates some tricky circulation patterns and loading restrictions in the city centre. Graiseley's narrow Victorian streets require careful vehicle choice, and A449/A460 junction traffic peaks sharply during school runs. We factor all of this into your booking.",
    pricingNote:
      "No travel supplement applies — our depot is in Whitmore Reans, so we arrive promptly with no added fuel or mileage costs for Wolverhampton moves.",
    localFAQs: [
      {
        q: "Do you cover all WV postcodes?",
        a: "Yes — we cover WV1 through WV14 in full. Every residential and commercial postcode in Wolverhampton is within our regular service area. No additional charge applies for any WV postcode.",
      },
      {
        q: "How do you handle moving day parking in Wolverhampton city centre?",
        a: "We plan loading bays and speak to Wolverhampton City Council's parking team in advance where required. For properties on restricted city-centre streets we carry out a pre-move access assessment to ensure arrival and loading goes smoothly.",
      },
      {
        q: "Can you move to and from the Tettenhall area?",
        a: "Absolutely. Tettenhall is one of our most popular areas. We use specialist furniture wrapping as standard for the higher-value properties common in Tettenhall, Tettenhall Wood, and Perton.",
      },
      {
        q: "Do you help students moving near the University of Wolverhampton?",
        a: "Yes — we know the University campus area well, including the nearby private student houses and halls of residence. Student-friendly pricing applies and we are familiar with university parking rules on and around the campus.",
      },
      {
        q: "When should I book for an end-of-month Wolverhampton move?",
        a: "End of month is the busiest period for completions across all of Wolverhampton. We recommend booking 2–4 weeks ahead for any end-of-month moving date. Call us early and we will hold the date for you provisionally until contracts are exchanged.",
      },
    ],
  },

  bilston: {
    intro:
      "Bilston is just 3 miles from our Whitmore Reans base, making it one of our fastest-response areas. We serve all of WV14 — from the town centre and high street to Bradley, Ettingshall, and Coseley — and we know the area's property mix and access quirks inside out.",
    roads: ["A463 Wolverhampton Street", "Wellington Road", "Bradley Lane", "Prouds Lane", "High Street"],
    districts: ["Bradley", "Ettingshall", "Coseley", "Stow Heath", "Loxdale", "Mount Pleasant"],
    propertyTypes:
      "Bilston has a strong stock of early 20th-century terraced and semi-detached properties, particularly around the town centre and Loxdale. The Prouds Lane and Ettingshall areas have larger properties on more generous plots. Coseley and Bradley offer a mix of post-war semis and more recent private developments.",
    accessNotes:
      "Bilston High Street has loading restrictions during trading hours. Wellington Road and Bradley Lane provide better van access for most residential moves. Narrow terraced streets off the town centre benefit from our smaller Luton van option.",
    pricingNote:
      "At just 3 miles from our base, Bilston moves carry no fuel supplement. We offer some of our most competitive pricing for local Bilston moves.",
    localFAQs: [
      {
        q: "How long does a local Bilston to Wolverhampton move take?",
        a: "A typical 2–3 bedroom move from Bilston to Wolverhampton covers around 3 miles and takes 3–5 hours including loading and unloading. Larger properties may take 6–8 hours.",
      },
      {
        q: "Do you do house clearances in Bilston?",
        a: "Yes — we offer full and partial house clearances across Bilston and WV14. Same-day clearances are often available. Call us on 07438 447286 for an immediate quote.",
      },
      {
        q: "What about parking for terraced properties in Bilston?",
        a: "We assess parking at the quote stage for all terraced properties. For restricted streets we arrange the most suitable loading position, including residents' permit zones where required.",
      },
      {
        q: "Do you serve Bradley and Ettingshall?",
        a: "Yes — Bradley and Ettingshall are well within our regular Bilston area coverage. We move customers to and from these areas frequently.",
      },
      {
        q: "Can you do a move within Bilston itself?",
        a: "Yes. Local moves entirely within Bilston are very cost-effective given our proximity. Many of our Bilston customers move within the WV14 postcode.",
      },
    ],
  },

  wednesfield: {
    intro:
      "Wednesfield is a busy residential suburb 4 miles from our base, and we serve it constantly — from the Victorian terraces near the town centre to the post-war estates of Ashmore Park and Wood End. We know the area's housing mix and access requirements well.",
    roads: [
      "Wednesfield Road",
      "Lichfield Road",
      "Wood End Road",
      "March End Road",
      "Cannock Road A460",
    ],
    districts: ["Ashmore Park", "Wood End", "New Cross", "Moseley Village", "March End", "Prestwood Road area"],
    propertyTypes:
      "Wednesfield's property stock ranges from Victorian terraces close to the town centre to large post-war semi-detached estates at Ashmore Park and Wood End. New Cross Hospital's proximity brings significant rental and NHS staff housing in the area. Newer private developments are present around March End and the edges of WV11.",
    accessNotes:
      "The New Cross Hospital area sees heavier traffic at shift change times. Ashmore Park and Wood End estates have well-planned residential roads with adequate loading access. Older streets near the town centre can be narrow — we choose the right vehicle size at the quote stage.",
    pricingNote:
      "At 4 miles from our depot, Wednesfield is well within our competitive core area with no distance premium.",
    localFAQs: [
      {
        q: "Can you move near New Cross Hospital in Wednesfield?",
        a: "Yes — we regularly move customers in the New Cross area. We plan moves around hospital shift times to avoid the worst traffic periods on Wednesfield Road.",
      },
      {
        q: "Do you cover the Ashmore Park estates?",
        a: "Yes, fully. Ashmore Park is one of the larger estate areas we regularly serve in WV11. The road access is good and we have no restrictions on serving any street there.",
      },
      {
        q: "Can you move from Wednesfield to Wolverhampton city centre?",
        a: "Yes — this is one of our most common routes. It is a 4-mile journey and we handle it regularly for both house removals and man and van jobs.",
      },
      {
        q: "Do you serve the Wood End area of Wednesfield?",
        a: "Yes, Wood End is fully within our Wednesfield coverage. We have moved many customers from Wood End and know the estate layout well.",
      },
      {
        q: "Can you do a same-day removal from Wednesfield?",
        a: "Yes, subject to availability. Given Wednesfield's proximity to our base, we can often accommodate same-day bookings here when our schedule allows. Call early for best chance.",
      },
    ],
  },

  tettenhall: {
    intro:
      "Tettenhall is one of Wolverhampton's most desirable residential areas, just 3 miles from our base in Whitmore Reans. We specialise in the high-value moves this area demands — from large Edwardian detached properties in Tettenhall Wood to the executive new builds on the Perton estate.",
    roads: ["A41 Tettenhall Road", "Rock Hill", "New Road", "Wergs Road", "Codsall Road"],
    districts: ["Tettenhall Wood", "Perton", "Newbridge", "Tettenhall Village", "Aldersley", "Stockwell End"],
    propertyTypes:
      "Tettenhall is dominated by large Victorian and Edwardian detached houses, many with original features and valuable antique contents. Perton estate offers modern executive detached and semi-detached homes. Tettenhall Village has charming period properties alongside the Rock and the Ridge. Properties here command some of the highest values in Wolverhampton.",
    accessNotes:
      "Rock Hill is steep and requires careful vehicle positioning. Residential streets throughout Tettenhall Wood are wide enough for full-size Luton vans. Perton estate roads are modern and well-designed. We always conduct an access assessment for moves involving large or antique items.",
    pricingNote:
      "Premium property care — specialist furniture wrapping, two-person minimum, careful floor and door protection — is included as standard in our Tettenhall pricing, not charged as an extra.",
    localFAQs: [
      {
        q: "Can you provide specialist packing for antiques and fragile items in Tettenhall?",
        a: "Yes — specialist packing for antiques, fine china, artwork, and fragile items is one of our core skills for Tettenhall moves. We use double-wrapping with blankets and bubble wrap, custom crating where needed, and ensure all valuables travel individually protected.",
      },
      {
        q: "Do you cover moves on Perton estate?",
        a: "Yes — Perton is one of our most regularly served areas. The estate's modern road layout makes loading straightforward and we handle moves here frequently.",
      },
      {
        q: "How do you protect high-value Tettenhall properties during a move?",
        a: "We use floor runners and door-frame protectors throughout the loading and unloading process. All furniture is wrapped in professional quilted blankets. Our team works methodically and carefully — never rushing through narrow doorways or period features.",
      },
      {
        q: "Do you cover Tettenhall Wood?",
        a: "Yes — Tettenhall Wood's leafy residential streets are well within our coverage. We know the access to these properties well and have moved many customers in this area.",
      },
      {
        q: "Can you move a piano from a Tettenhall property?",
        a: "Yes — piano removal is available from Tettenhall properties. Upright pianos are our most common piano move. Grand pianos can be accommodated subject to survey. We provide an individual quote for all piano removals.",
      },
    ],
  },

  "whitmore-reans": {
    intro:
      "Whitmore Reans is home to Get Rapid Removals. We have been based here since 2019 and there is nowhere in Wolverhampton we know better. Zero travel time means maximum responsiveness — if you call before 9am, we can often be with you the same morning.",
    roads: ["Stafford Road", "Dunstall Road", "Tettenhall Road", "Compton Road", "Waterloo Road"],
    districts: ["Dunstall", "Compton", "Parkfields", "Newbridge", "Oxley", "Aldersley"],
    propertyTypes:
      "Whitmore Reans has a wonderful mix of Victorian and Edwardian terraces along the main roads, post-war semi-detached homes on the residential streets, and several modern flat developments. Dunstall Park borders the area, and properties near Stafford Road and Tettenhall Road benefit from excellent transport links into the city centre.",
    accessNotes:
      "Stafford Road is a busy through route and can be congested at peak times — we plan our loading position in advance for properties with direct Stafford Road frontage. Dunstall Road has good access. Residential side streets are generally calm with adequate loading space.",
    pricingNote:
      "Our most competitive pricing applies here — zero depot-to-job travel time means no fuel costs are built into your quote. Whitmore Reans moves are our most efficiently priced service.",
    localFAQs: [
      {
        q: "How quickly can you respond to a same-day request in Whitmore Reans?",
        a: "Whitmore Reans is our fastest response area — being based here, we can often be with you within 1–2 hours of a same-day call. Call us as early as possible to secure availability.",
      },
      {
        q: "Can you help with moves on Dunstall Road?",
        a: "Yes — Dunstall Road is home territory for us. We know the access, the parking, and the property types along this road extremely well.",
      },
      {
        q: "Do you do small local moves within WV6?",
        a: "Yes — local moves entirely within the WV6 postcode are very cost-effective. Man and van moves within Whitmore Reans are among our most frequently booked jobs.",
      },
      {
        q: "Are you familiar with Stafford Road parking restrictions?",
        a: "Yes — we plan for Stafford Road parking requirements carefully. For properties directly on Stafford Road we arrange in advance to minimise time on yellow lines and coordinate with residents where possible.",
      },
      {
        q: "Is moving to or from Whitmore Reans cheaper because you're based here?",
        a: "Yes — effectively. Our zero travel time means your quote doesn't carry any depot-to-job fuel supplement. This makes Whitmore Reans moves our most efficiently priced category.",
      },
    ],
  },

  codsall: {
    intro:
      "Codsall is an affluent village 7 miles west of Wolverhampton, and we serve it regularly for high-quality house removals, estate clearances, and specialist furniture moves. We know Lane Green Road, Birches, Bilbrook, and Oaken, and understand the premium property care this area expects.",
    roads: ["Birches Road", "Lane Green Road", "Wood Road", "Station Road", "Codsall Road"],
    districts: ["Bilbrook", "Birches", "Oaken", "Codsall Wood", "Histons Hill", "School Road area"],
    propertyTypes:
      "Codsall is characterised by 1970s–1990s detached and semi-detached family homes, many on generous plots with garages and outbuildings. Lane Green Road and Oaken host some of the area's larger executive properties. The village centre retains a handful of attractive period properties, and Codsall Wood has rural homes accessed via country lanes.",
    accessNotes:
      "The village centre has limited morning parking near the shops, but residential streets throughout Codsall are well laid out with ample loading access. Country lanes in the Oaken and Codsall Wood area may require our smaller vehicle for initial access assessment.",
    pricingNote:
      "Codsall is 7 miles from our base — a slight distance supplement applies but is often offset by the typically larger property sizes and single-load volumes common in this area.",
    localFAQs: [
      {
        q: "Can you provide specialist packing for high-value Codsall properties?",
        a: "Yes — specialist packing for antiques, fine art, and high-value furniture is available for all Codsall moves. We use professional quilted blankets, bubble wrap, and purpose-made boxes for fragile items as standard.",
      },
      {
        q: "Do you cover Bilbrook?",
        a: "Yes — Bilbrook is fully within our Codsall service area. We regularly move customers between Bilbrook and Wolverhampton, Tettenhall, and further afield.",
      },
      {
        q: "What is the most popular route from Codsall?",
        a: "Codsall to Wolverhampton is our most common Codsall move, often for families relocating closer to the city. Codsall to Tettenhall and Codsall to Stafford are also popular.",
      },
      {
        q: "Can you access properties in Oaken?",
        a: "Yes — we can access Oaken via the village road network. For properties on narrower country lanes we bring our most appropriately sized vehicle and assess access before moving day.",
      },
      {
        q: "Do you move from Codsall Wood properties?",
        a: "Yes — including properties on rural lanes in Codsall Wood. We assess vehicle access at the quote stage and use a smaller transit where needed on the tightest approaches.",
      },
    ],
  },

  dudley: {
    intro:
      "Dudley is 8 miles from our base, deep in the heart of the Black Country, and we serve it well. From Netherton and Gornal to Brierley Hill and Kingswinford, we know the area's character, property stock, and road network across the DY postcodes.",
    roads: ["A461 Birmingham Road", "A459 Castle Hill", "B4176 Himley Road", "A491 Stourbridge Road", "A4036 Pedmore Road"],
    districts: ["Netherton", "Kingswinford", "Gornal", "Brierley Hill", "Pensnett", "Kate's Hill", "Sedgley"],
    propertyTypes:
      "Dudley has a rich variety of Black Country housing stock — rows of pre-war terraces in Netherton and Kate's Hill, 1930s bay-fronted semis in Gornal and Sedgley, post-war council developments at the Priory Estate, and newer private housing around Kingswinford and the Brierley Hill corridor. Merry Hill's retail centre has brought considerable new residential development nearby.",
    accessNotes:
      "Dudley Ring Road sees significant congestion, particularly around the town centre. Narrow Black Country streets in older Netherton and Kate's Hill require careful vehicle positioning. Merry Hill retail traffic affects the Brierley Hill approach at weekends. We factor these into your move time estimate.",
    pricingNote:
      "At 8 miles we apply a small distance supplement, but our pricing remains competitive with local Dudley firms — and our 5-star service standard is consistently higher.",
    localFAQs: [
      {
        q: "Do you cover Netherton for removals and clearances?",
        a: "Yes — Netherton is one of the Dudley areas we serve most frequently. House removals, house clearances, and man and van jobs are all available in Netherton.",
      },
      {
        q: "Do you serve Kingswinford?",
        a: "Yes — Kingswinford is within our regular Dudley service area. We cover the residential streets and newer developments in Kingswinford without any special surcharge beyond the standard Dudley supplement.",
      },
      {
        q: "Can you help with moves near Brierley Hill and Merry Hill?",
        a: "Yes — we frequently serve the Brierley Hill area and are aware of Merry Hill traffic patterns. We schedule moves here to avoid peak retail traffic periods where possible.",
      },
      {
        q: "Do you serve Gornal for house removals?",
        a: "Yes — Upper Gornal and Lower Gornal are both within our coverage. Gornal's semi-detached housing stock is very typical of what we move regularly.",
      },
      {
        q: "How does a Dudley to Wolverhampton move work?",
        a: "Dudley to Wolverhampton is one of our most regular routes — approximately 8 miles via the A461 or A459. A 2–3 bedroom move on this route typically takes 4–6 hours. We know the best route at different times of day.",
      },
    ],
  },

  walsall: {
    intro:
      "Walsall is 9 miles from our base and we serve all WS1–WS9 postcodes regularly. From the pre-war terraces of Pleck and Caldmore to the executive detached properties of Aldridge and Streetly, we know Walsall's full range of property types and access requirements.",
    roads: ["A454 Willenhall Road", "A461 Lichfield Street", "A34 Walsall Road", "M6 Junction 7", "M6 Junction 9"],
    districts: ["Pleck", "Bescot", "Rushall", "Streetly", "Aldridge", "Bloxwich", "Brownhills", "Caldmore"],
    propertyTypes:
      "Walsall's housing stock spans a wide spectrum. Pleck and Caldmore have pre-war terraces and Victorian properties close to the town centre. Bescot and Rushall are dominated by 1930s bay-fronted semis. Streetly and Aldridge offer some of the borough's most desirable executive detached homes. Bloxwich and Brownhills serve the northern commuter market with a mix of semis and estates.",
    accessNotes:
      "Walsall town centre's one-way system requires careful routing for loaded vehicles. M6 access at Junctions 7 and 9 is excellent for longer journeys. Aldridge and Streetly residential streets are wide and well-suited to removals vehicles.",
    pricingNote:
      "The 9-mile route from our base is our most regular medium-distance run. Walsall-to-Wolverhampton and Wolverhampton-to-Walsall are among our most frequently priced routes and remain competitively costed.",
    localFAQs: [
      {
        q: "Do you cover Aldridge for house removals?",
        a: "Yes — Aldridge is one of the more sought-after areas in Walsall borough and we serve it regularly for house removals and packing services. The larger properties here often benefit from our full packing service.",
      },
      {
        q: "Can you move to or from Streetly?",
        a: "Yes — Streetly is within our regular Walsall coverage. The residential streets in Streetly are well-suited to removal vehicles and we move customers here frequently.",
      },
      {
        q: "Do you serve Bloxwich?",
        a: "Yes — Bloxwich is fully within our WS postcode coverage. We cover all areas of Walsall borough, including Bloxwich, without restriction.",
      },
      {
        q: "What is the most common move route for Walsall customers?",
        a: "Walsall to Wolverhampton is by far our most common Walsall route — families and professionals moving between these two Black Country towns make up a significant part of our work.",
      },
      {
        q: "Can you do a house clearance in Brownhills?",
        a: "Yes — Brownhills is within our coverage for house clearances and removals. We can clear any size of property in Brownhills, from a one-bedroom flat to a four-bedroom house.",
      },
    ],
  },

  cannock: {
    intro:
      "Cannock is 10 miles north of our base via the A460 — a route we drive almost every week. As a popular commuter town for Wolverhampton workers, we handle the Cannock-to-Wolverhampton corridor constantly, and know the area's residential character well.",
    roads: ["A460 Cannock Road", "A5 Watling Street", "M6 Toll", "A34 Walsall Road", "A4601 Wolverhampton Road"],
    districts: ["Heath Hayes", "Hednesford", "Norton Canes", "Wimblebury", "Chadsmoor", "Bridgtown"],
    propertyTypes:
      "Cannock's housing is predominantly 1930s–1970s semi-detached, particularly in Chadsmoor and Hednesford. Heath Hayes and Norton Canes have benefited from newer private estate development popular with young families. Hednesford town centre has affordable terraces. The area offers good value for money compared to Wolverhampton, making it a frequent relocation destination.",
    accessNotes:
      "Cannock town centre has good parking and wide roads that suit removals vehicles. The M6 Toll makes the Cannock–Wolverhampton journey fast outside rush hours. Heath Hayes and Norton Canes new estates have well-planned road layouts.",
    pricingNote:
      "At 10 miles via A460 or M6 Toll, Cannock is efficiently reached from our base. The Wolverhampton–Cannock corridor is one of our busiest and most competitively priced medium-distance routes.",
    localFAQs: [
      {
        q: "Do you cover Hednesford for house removals?",
        a: "Yes — Hednesford is one of the Cannock area's main residential centres and we serve it regularly for house removals, house clearances, and man and van jobs.",
      },
      {
        q: "Do you serve Heath Hayes?",
        a: "Yes — Heath Hayes is a busy residential area of Cannock and fully within our service coverage. The newer estates in Heath Hayes are among the most commonly moved properties in the area.",
      },
      {
        q: "How often do you do Cannock to Wolverhampton moves?",
        a: "Cannock to Wolverhampton is one of our most regular routes — typically 2–3 times per week. Many Cannock residents work in Wolverhampton and choose to move back when they want to shorten their commute.",
      },
      {
        q: "Do you serve Norton Canes?",
        a: "Yes — Norton Canes is fully within our Cannock coverage. The newer developments in Norton Canes are very accessible and well-suited to our full-size Luton vans.",
      },
      {
        q: "Can you reach rural properties near Cannock Chase?",
        a: "Yes — we can reach rural properties on the Cannock Chase fringes. Where lane access requires a smaller vehicle, we bring our transit van and reassess on arrival if anything larger is needed.",
      },
    ],
  },

  birmingham: {
    intro:
      "Birmingham is 16 miles from our base and we serve all B postcodes — from Handsworth and Perry Barr in the north to Selly Oak and Edgbaston in the south, and Sutton Coldfield to the east. The M6 gives us fast access and we make this journey regularly for house removals and commercial moves.",
    roads: ["M6 Junction 6", "A34 Walsall Road", "A45 Coventry Road", "M5 Junction 1", "A38 Bristol Road"],
    districts: [
      "Handsworth",
      "Perry Barr",
      "Edgbaston",
      "Harborne",
      "Selly Oak",
      "Sutton Coldfield",
      "Erdington",
      "Moseley",
    ],
    propertyTypes:
      "Birmingham offers an extraordinary range of property types — Victorian terraces in Handsworth and Moseley, Edwardian semis in Harborne and Edgbaston, 1930s semis widespread across inner suburbs, purpose-built city centre apartment blocks, and some of the region's most expensive executive detached homes in Sutton Coldfield and Four Oaks.",
    accessNotes:
      "Birmingham city centre properties in B1–B5 face significant parking challenges and are subject to the ULEZ zone. Suburban areas such as Harborne, Edgbaston, and Moseley have better access. Sutton Coldfield residential streets are wide and well-suited to removal vehicles.",
    pricingNote:
      "Birmingham is 16 miles from our base — the M6 makes this a consistent 30–40 minute transit. Our Birmingham pricing reflects this efficiently, and we remain competitive with local Birmingham firms given our quality.",
    localFAQs: [
      {
        q: "Do you cover Sutton Coldfield for house removals?",
        a: "Yes — Sutton Coldfield is one of Birmingham's most popular residential areas and we serve it regularly. The larger properties in the Sutton Coldfield area are well-suited to our full house removal service.",
      },
      {
        q: "Can you move in and out of Edgbaston?",
        a: "Yes — Edgbaston is a frequent destination for our Birmingham moves. Victorian and Edwardian properties in Edgbaston require careful handling and we have extensive experience with this property type.",
      },
      {
        q: "Do you cover Birmingham city centre apartment moves?",
        a: "Yes — we plan Birmingham city centre moves carefully, researching loading bay access and parking restrictions in advance. We are ULEZ-compliant for city centre moves.",
      },
      {
        q: "Do you cover Harborne?",
        a: "Yes — Harborne is a popular destination for our Birmingham moves, particularly for families moving from Wolverhampton to this desirable suburb. We know the residential streets and access well.",
      },
      {
        q: "Are your vehicles ULEZ-compliant for Birmingham city centre moves?",
        a: "Yes — our vehicles meet ULEZ standards for moves into and within Birmingham's ULEZ zone. You will not face any penalty for having us collect from or deliver to city centre addresses.",
      },
    ],
  },

  "west-bromwich": {
    intro:
      "West Bromwich sits 12 miles from our base in the Sandwell borough, and we serve the full B70–B71 postcode area. Whether you are moving within West Bromwich or making the popular West Brom–to–Wolverhampton journey, we know the routes and the area's diverse housing stock.",
    roads: ["A41 Black Country New Road", "M6 Junction 1", "A4031 Greets Green Road", "A457 Oldbury Road", "A4196 Newton Road"],
    districts: [
      "Great Barr",
      "Stone Cross",
      "Charlemont",
      "Swan Village",
      "Friar Park",
      "Handsworth Wood",
      "Hill Top",
      "Wednesbury",
    ],
    propertyTypes:
      "West Bromwich's housing is dominated by 1930s–1950s semi-detached properties in Great Barr, Stone Cross, and Charlemont — solid, established family homes on straightforward residential streets. Victorian terraces cluster near the town centre and the Birmingham boundary. Post-war estates in Friar Park and Swan Village offer more affordable housing, while Handsworth Wood has some larger late-Victorian properties.",
    accessNotes:
      "M6 Junction 1 provides fast and direct access from Wolverhampton, making transit times consistent and predictable. West Bromwich town centre has some congestion. Great Barr and Stone Cross residential streets are wide and accessible.",
    pricingNote:
      "At 12 miles, West Bromwich is efficiently served via the M6. The West Brom–Wolverhampton corridor is one of our most regular medium-distance routes and is competitively priced.",
    localFAQs: [
      {
        q: "Do you cover Great Barr for house removals?",
        a: "Yes — Great Barr is one of the West Bromwich areas we serve most often. The 1930s–1950s semis in Great Barr are typical of what we move and we know the area's roads well.",
      },
      {
        q: "Do you serve Stone Cross?",
        a: "Yes — Stone Cross is fully within our West Bromwich coverage. Both house removals and house clearances are available in Stone Cross.",
      },
      {
        q: "How common is the West Bromwich to Wolverhampton route?",
        a: "Very common — it is one of our most regularly booked medium-distance routes. We do this journey multiple times each month for families and professionals relocating between the two towns.",
      },
      {
        q: "Do you cover Friar Park?",
        a: "Yes — Friar Park is within our West Bromwich coverage. House clearances are particularly common in Friar Park and we offer these at competitive rates.",
      },
      {
        q: "Can you move from Charlemont?",
        a: "Yes — Charlemont is fully within our service area for house removals, man and van, and clearances. The residential streets in Charlemont give good vehicle access.",
      },
    ],
  },

  stafford: {
    intro:
      "Stafford is 14 miles north on the A449 or M6 — a route we travel regularly, particularly for families relocating from Wolverhampton to Staffordshire's more spacious housing market. We serve the full ST16–ST21 postcode area and know Stafford's residential districts and surrounding villages well.",
    roads: [
      "A449 Wolverhampton–Stafford Road",
      "M6 Junctions 13–14",
      "A518 Newport Road",
      "A34 Stone Road",
      "A5013 Eccleshall Road",
    ],
    districts: ["Wildwood", "Weeping Cross", "Baswich", "Silkmore", "Rising Brook", "Doxey", "Rowley Park"],
    propertyTypes:
      "Stafford's residential offer is dominated by 1970s–1990s detached and semi-detached houses on well-established suburban estates. Wildwood and Weeping Cross attract families seeking good schools and more space than the West Midlands offers at similar prices. New-build estates are expanding in Baswich and around the town edges. Period properties in and around Stafford town centre appeal to those wanting character.",
    accessNotes:
      "Stafford has excellent road access and none of the urban congestion challenges of the larger West Midlands towns. M6 makes the Stafford–Wolverhampton journey fast and predictable. Rural villages surrounding Stafford may require smaller vehicles for lane access.",
    pricingNote:
      "At 14 miles via A449 or M6, Stafford is our most northerly regular area. The Wolverhampton–Stafford corridor is popular and we have competitive fixed-price moves for this route.",
    localFAQs: [
      {
        q: "Do you cover Wildwood in Stafford?",
        a: "Yes — Wildwood is one of Stafford's most popular residential areas and we serve it regularly. Many Wolverhampton families move to Wildwood for the extra space and good schools.",
      },
      {
        q: "Do you serve Weeping Cross?",
        a: "Yes — Weeping Cross is a frequent destination for our Stafford moves. The mix of established and newer housing suits families and the area is easy to access.",
      },
      {
        q: "Is Stafford your most northerly service area?",
        a: "Stafford is our most northerly regular service area — at 14 miles it is comfortably within our coverage. We do also handle longer-distance moves from Stafford to other parts of the UK.",
      },
      {
        q: "Can you reach rural Staffordshire villages from Stafford?",
        a: "Yes — we serve rural villages around Stafford including Gnosall, Eccleshall, Stone, and others. Where narrower lanes require a smaller vehicle, we adjust accordingly and factor this into the quote.",
      },
      {
        q: "Do you cover Baswich?",
        a: "Yes — Baswich is within our regular Stafford service. We frequently move customers into the newer estates developing in the Baswich area.",
      },
    ],
  },
};

// ─── Service Local FAQs ────────────────────────────────────────────────────────

export const SERVICE_LOCAL_FAQS: Record<string, { q: string; a: string }[]> = {
  "house-removals": [
    {
      q: "How many movers do you send for a 3-bedroom house removal?",
      a: "Typically 2–3 team members depending on volume, distance, and access. A 3-bedroom house with good access usually requires 2 experienced movers. Properties with long carries, stairs, or a large volume of items will be allocated 3 movers.",
    },
    {
      q: "Do you wrap furniture before loading?",
      a: "Yes — all upholstered furniture, wooden furniture, and fragile items are wrapped in professional quilted blankets before loading. Mattresses travel in purpose-made bags. No item goes into the van without appropriate protection.",
    },
    {
      q: "Can you move on my completion date?",
      a: "Yes — completion day moves are our most common booking. We liaise with your solicitor's timeline and hold the day for you from the moment you provisionally book. We are experienced in managing the wait for confirmation of funds received.",
    },
    {
      q: "What size van do you use for a house move?",
      a: "A Luton van is standard for a 2-bedroom property. Larger properties (3-bed plus) typically use our larger Luton or may require two vehicles, depending on volume. We confirm vehicle size at the quotation stage.",
    },
    {
      q: "Do you disassemble and reassemble beds and wardrobes?",
      a: "Yes — furniture disassembly and reassembly is included as standard. Beds, flat-pack wardrobes, and most other self-assembly furniture is taken apart before loading and rebuilt at the new property at no extra charge.",
    },
    {
      q: "What happens if my completion is delayed on moving day?",
      a: "We hold your move and wait within reason. Our team will secure your belongings in the vehicle and monitor completion. We understand conveyancing delays happen and we do not leave customers stranded. For very long delays we discuss options calmly on the day.",
    },
    {
      q: "Can you move a TV safely?",
      a: "Yes — televisions are individually wrapped and transported upright. If you have the original box, we recommend using it; if not, we wrap securely with blankets and corner protection. Flatscreen TVs of any size are moved routinely.",
    },
    {
      q: "Do you operate on Bank Holidays?",
      a: "Yes — we work 7 days a week including most Bank Holidays. Bank Holiday availability is limited so we recommend booking early. Pricing is consistent with weekends.",
    },
    {
      q: "Do I receive written confirmation of my booking?",
      a: "Yes — every booking is confirmed in writing. You receive a summary of the agreed date, time, services, and price before moving day so there are no surprises.",
    },
    {
      q: "Can you collect belongings from a storage unit?",
      a: "Yes — storage unit collection is a regular part of our service. We collect from any storage facility and deliver to your new address, or collect from your home and bring to a storage unit.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We ask for 48 hours' notice for cancellations at no charge. Cancellations within 48 hours may incur a modest fee to cover planning and allocation costs. We handle emergency cancellations sympathetically — call us and explain the situation.",
    },
    {
      q: "Can you move fragile or antique items?",
      a: "Yes — specialist wrapping for fragile items and antiques is included as standard, not charged as an extra. Fine china, artwork, mirrors, and antique furniture all receive individual wrapping with appropriate protective materials.",
    },
  ],

  "house-clearance": [
    {
      q: "How long does a house clearance take?",
      a: "A 2-bedroom property typically takes 3–6 hours. A 4-bedroom house with garages, loft, and outbuildings is usually a full day. We confirm an estimated timeframe at the survey stage based on the actual volume of items.",
    },
    {
      q: "Do I need to be present during the clearance?",
      a: "Not necessarily. Many clients arrange a key handover with us and we clear the property in their absence. We contact you immediately if we find anything unexpected or if a decision is needed.",
    },
    {
      q: "What happens if valuable items are found during clearance?",
      a: "We stop work immediately and contact you to report any item that appears to be of value — jewellery, cash, documents, antiques, or artwork. Nothing of potential value is disposed of without your explicit instruction.",
    },
    {
      q: "Do you recycle and donate items from clearances?",
      a: "Yes — all usable items are sorted before disposal. Good-condition furniture and household goods are offered to British Heart Foundation and Salvation Army charity partners. Reusable materials are separated for recycling. We minimise landfill at every clearance.",
    },
    {
      q: "Can you clear a loft and garage as well as the main house?",
      a: "Yes — all areas of the property are included in a full house clearance. Lofts, garages, sheds, outbuildings, and gardens are all cleared. We handle the full scope in one visit.",
    },
    {
      q: "Do you issue a waste transfer note?",
      a: "Yes — we provide a waste transfer note on request. This is your legal protection confirming that waste has been removed and disposed of by a licensed carrier, protecting you from any fly-tipping liability.",
    },
    {
      q: "Is disposal included in the price you quote?",
      a: "Yes — all disposal costs are included in your fixed quote. There are no surprise fees at the end for additional loads or disposal weights. What we quote is what you pay.",
    },
    {
      q: "Can you do a partial clearance of just one room?",
      a: "Yes — partial clearances of any scope are available. Single-room, single-floor, or specific item clearances are all accepted. We quote for the exact scope you need.",
    },
    {
      q: "Can you arrange collection by a named charity?",
      a: "Yes — we can coordinate charity collection from clearances for BHF, Salvation Army, and other local organisations. We sort appropriate items and arrange collection or drop-off as part of the clearance process.",
    },
    {
      q: "Can family members sort through items before you start?",
      a: "Yes — many estate clearances involve family members selecting items to keep first. We work around this process and begin clearance of remaining items at the point you are ready for us.",
    },
    {
      q: "What is the difference between a clearance and a removal?",
      a: "A removal moves your belongings to a new address. A clearance removes unwanted items for recycling, donation, or disposal. Clearances are used when the destination is a skip, charity, or waste facility rather than a new home.",
    },
    {
      q: "Can you provide an inventory of cleared items?",
      a: "Yes — a written inventory or clearance report can be provided on request. This is particularly useful for estate clearances and probate situations where a record of removed items is required.",
    },
  ],

  "man-and-van": [
    {
      q: "What kind of jobs is a man and van service suitable for?",
      a: "Man and van is ideal for single-item moves, small flat moves, student room moves, eBay and Facebook Marketplace collections, furniture deliveries, and any job that doesn't require a full removal team. It is the most flexible and affordable option for smaller requirements.",
    },
    {
      q: "How much does man and van cost per hour?",
      a: "Our man and van service starts from £60–£80 per hour, inclusive of van and driver. Fixed-price quotes are available for jobs where the scope is clearly defined. Contact us for a tailored quote.",
    },
    {
      q: "Can I help load and unload to save money?",
      a: "We do all the carrying as part of the service — that is what you are booking. You are welcome to assist if you wish, but you are under no obligation to lift anything. Our rate is inclusive of all loading and unloading labour.",
    },
    {
      q: "Can you move a sofa with a man and van?",
      a: "Yes — single sofa moves are one of our most common man and van jobs. We bring blankets to protect the sofa, assess the access at both addresses, and handle all the carrying.",
    },
    {
      q: "Do you bring furniture blankets on man and van jobs?",
      a: "Yes — furniture blankets and straps are always on the van, regardless of job size. We protect all items as standard, even on the smallest man and van bookings.",
    },
    {
      q: "Can I book same-day man and van?",
      a: "Often yes — man and van jobs are the most straightforward to accommodate at short notice. Call us as early as possible on the day you need help and we will confirm availability immediately.",
    },
    {
      q: "Can you collect from Facebook Marketplace or eBay?",
      a: "Yes — marketplace collections are a frequent man and van job. We collect from seller addresses across the West Midlands and deliver to your home. This is efficient and removes the stress of hiring a private van.",
    },
    {
      q: "How many items fit in a Luton van?",
      a: "A Luton van holds approximately the contents of a 1-bedroom flat — roughly 600 cubic feet of volume. For larger loads we may recommend two trips or a larger vehicle depending on the job.",
    },
    {
      q: "Do you offer man and van for student halls moves?",
      a: "Yes — student halls moves are a popular man and van booking, particularly at the start and end of the academic year. One or two rooms of student belongings usually fits a single Luton van.",
    },
    {
      q: "Is there a minimum booking time?",
      a: "A 1–2 hour minimum call-out applies, depending on the job. For very small single-item moves we can often provide a fixed price rather than an hourly rate. Contact us to discuss your specific requirement.",
    },
    {
      q: "Can man and van help me move across the West Midlands?",
      a: "Yes — our man and van service covers the whole of our service area, not just short local moves. Wolverhampton to Birmingham, Walsall, Dudley, Stafford, and all points between are all within reach.",
    },
    {
      q: "Is the van and driver included in the price?",
      a: "Yes — van, driver, and all loading and unloading assistance are included in the man and van rate. There are no add-on charges for the vehicle or driver.",
    },
  ],

  "office-removals": [
    {
      q: "Can you move our office outside of business hours?",
      a: "Yes — evening and weekend office moves are available to minimise disruption to your business. Out-of-hours moves are among our most popular commercial bookings as they allow businesses to be operational at their new address from the next morning.",
    },
    {
      q: "How do you handle IT equipment during an office move?",
      a: "IT equipment receives specialist care — computers and monitors are individually wrapped, servers are transported in a protected upright position, and cables are labelled to aid reconnection. We transport; your IT team reconnects.",
    },
    {
      q: "Do you provide crates or boxes for office moves?",
      a: "Yes — professional moving crates are available for hire for office moves. These are more secure and stackable than cardboard boxes and are standard practice for commercial moves.",
    },
    {
      q: "How long does a 20-person office move typically take?",
      a: "A 20-person office move typically takes 1–2 days depending on the volume of equipment, furniture, and archive materials. We plan office moves in detail at the survey stage to give you an accurate timeline.",
    },
    {
      q: "Do you assign a dedicated move manager?",
      a: "Yes — for all larger commercial relocations we assign a dedicated move manager who plans, coordinates, and oversees the entire process. You have one point of contact throughout.",
    },
    {
      q: "Can you coordinate with the building management team?",
      a: "Yes — we liaise with building management at both locations to book loading bays, reserve lifts, and ensure building security protocols are followed. This is part of our standard commercial move service.",
    },
    {
      q: "Can you dispose of old office furniture?",
      a: "Yes — old or redundant office furniture can be removed and responsibly disposed of as part of your office move. We are a licensed waste carrier and handle office furniture disposal properly.",
    },
    {
      q: "Is the initial commercial survey free?",
      a: "Yes — we provide a free on-site commercial survey for all office relocations. The survey allows us to give you an accurate, fixed-price quote rather than an estimate.",
    },
    {
      q: "Can you handle a multi-floor office relocation?",
      a: "Yes — multi-floor offices are handled by sequencing the move floor by floor, working with building management on lift scheduling. We plan the sequence to maintain efficiency throughout.",
    },
    {
      q: "What insurance covers commercial office moves?",
      a: "All commercial moves are covered by our full public liability insurance and goods-in-transit insurance. We can provide insurance documentation for your records or building management requirements.",
    },
    {
      q: "Can you move a small 3-person office?",
      a: "Yes — small offices are very welcome. We price small office moves appropriately — typically a man and van or small team is all that's required for a 3-person office.",
    },
  ],

  "furniture-removals": [
    {
      q: "Can you move a large sofa that won't fit through standard doorways?",
      a: "Yes — we assess difficult sofa moves at the quote stage. Techniques include tilting, upending, and careful navigation through tight angles. Where furniture genuinely cannot pass through, we assess window hoisting or disassembly options.",
    },
    {
      q: "Can you collect furniture from a retailer and deliver to my home?",
      a: "Yes — retailer collection and home delivery is a regular furniture removal job. We collect from furniture stores, IKEA, DFS, Sofology, and any other retailer across the West Midlands and deliver directly to you.",
    },
    {
      q: "Can you move a piano?",
      a: "Yes — upright piano removal is a regular service. We use specialist equipment and experienced handlers for all piano moves. Grand pianos can be accommodated subject to a site survey. We provide an individual quote for each piano move.",
    },
    {
      q: "Can you move gym equipment such as a treadmill or multi-gym?",
      a: "Yes — gym equipment including treadmills, multi-gyms, weight racks, and rowing machines are moved regularly. Most gym equipment is very heavy and awkward — specialist lifting equipment is used where required.",
    },
    {
      q: "Should I empty drawers and wardrobes before a furniture move?",
      a: "Yes — wardrobes and large drawers should be emptied before moving for safety. Clothing can stay in smaller drawers for short moves. Full wardrobes are too heavy to move safely and risk damage to the furniture.",
    },
    {
      q: "Can you move a safe?",
      a: "Yes — standard household safes are moved regularly. Very heavy commercial safes require individual assessment. Always let us know the approximate weight of your safe at the quotation stage.",
    },
    {
      q: "Can you disassemble and reassemble flat-pack furniture?",
      a: "Yes — flat-pack furniture disassembly and reassembly is included in our furniture removal service. IKEA, Argos, and own-brand flat-pack is fully handled. We bring appropriate tools and rebuild at the destination.",
    },
    {
      q: "Can you move a washing machine?",
      a: "Yes — washing machines are moved regularly. We secure the drum with transit bolts before transport. If you don't have the original transit bolts, let us know and we will advise on securing the drum.",
    },
    {
      q: "How do you protect hardwood and solid wood floors during a furniture move?",
      a: "We use felt floor sliders under all heavy items during positioning and lay protective boards on high-traffic routes through the property. No heavy item is dragged without proper protection in place.",
    },
    {
      q: "Can furniture be removed through a window if it won't fit the stairs?",
      a: "Yes — window hoisting is assessed on a case-by-case basis. For large items in upper-floor rooms with no stairway access, this may be the appropriate solution. We assess this at the survey stage.",
    },
    {
      q: "Do you move furniture between rooms in the same house?",
      a: "Yes — in-house furniture moves (reorganising rooms, changing layouts, moving items between floors) are available. These are typically priced as a short man and van job.",
    },
    {
      q: "Can you move a single item of furniture same-day?",
      a: "Often yes — single-item moves are the most straightforward to accommodate at short notice. Call us on the day and we will confirm availability. Man and van is typically the right service for single furniture items.",
    },
  ],

  "packing-services": [
    {
      q: "When should I book a professional packing service?",
      a: "Book packing at the same time as your removal. We typically pack the day before your removal, or on the same day for smaller properties. Booking early ensures both the packing and removal days are secured with the same team.",
    },
    {
      q: "What packing materials do you use?",
      a: "We use double-walled cardboard boxes, bubble wrap, acid-free tissue paper, packing paper, foam corner pieces, mattress bags, wardrobe boxes, and specialist wrapping for fragile items. All materials are included in the packing service price.",
    },
    {
      q: "Can you pack fragile items only, without packing the whole house?",
      a: "Yes — a partial fragile-only packing service is available. This is popular with customers who want to pack most items themselves but want professional wrapping for their china, glassware, artwork, and other breakables.",
    },
    {
      q: "How many boxes does a 3-bedroom house typically require?",
      a: "A 3-bedroom house typically requires 60–90 boxes depending on book collections, kitchenware, and accumulated household items. We bring more than we estimate needing — you are never charged for unopened boxes.",
    },
    {
      q: "Do you offer an unpacking service at the new address?",
      a: "Yes — unpacking at the destination is available. We unpack boxes room by room, position items, and remove all packing waste. This service is booked alongside the packing and removal.",
    },
    {
      q: "Do you pack the loft and garage?",
      a: "Yes — loft and garage packing is included in a full packing service. Loft items often require more robust boxing and careful labelling — we handle this as part of the full property scope.",
    },
    {
      q: "Are professional removal boxes reusable?",
      a: "Yes — professional double-walled removal boxes are significantly more durable than supermarket cardboard and can be reused for 5–10 moves. Many customers keep and store them after their move.",
    },
    {
      q: "How do you label the boxes?",
      a: "Every box is labelled with the destination room and a fragile indicator where applicable. Fragile labels appear on all four sides of fragile boxes. This makes unloading and unpacking far quicker and more organised.",
    },
    {
      q: "Can you wrap antiques and original artwork?",
      a: "Yes — antiques, original artwork, and mirrors receive specialist wrapping with acid-free tissue, custom-cut foam, and corner protection. High-value pieces are always individually wrapped and the last to load, first to unload.",
    },
    {
      q: "Do you wrap mattresses?",
      a: "Yes — all mattresses are wrapped in purpose-made mattress bags as standard. This protects against dust, moisture, and marks during the move.",
    },
    {
      q: "How long does it take to pack a kitchen professionally?",
      a: "A typical kitchen takes 2–4 hours to pack professionally, depending on the volume of crockery, glassware, and appliances. Two packers working systematically can usually complete a well-stocked kitchen in under 3 hours.",
    },
  ],

  "student-moves": [
    {
      q: "When should I book a student move?",
      a: "3–4 weeks ahead for peak summer and September moves. End-of-year moves in June and July are the busiest period — the earlier you book, the better your choice of date. Mid-term moves can often be arranged at shorter notice.",
    },
    {
      q: "Can you move me from university halls into a private student house?",
      a: "Yes — halls-to-private-house is the most common student move we handle. We know the loading restrictions at the major halls of residence and plan accordingly.",
    },
    {
      q: "How much does a student move typically cost?",
      a: "Student moves are priced on a man and van basis from £60–£80 per hour. Most single-room student moves take 1–2 hours; multi-room moves 2–4 hours. Fixed quotes available — contact us with your moving details.",
    },
    {
      q: "Can you do a long-distance end-of-year move back to my home city?",
      a: "Yes — we handle end-of-year long-distance student moves back to parents' addresses across the UK. Fixed-price quotes for long-distance student moves. Wolverhampton students moving to London, Manchester, Leeds, or further afield are covered.",
    },
    {
      q: "Can you move me if I only have one room's worth of belongings?",
      a: "Yes — one room is the classic man and van job. You don't need to have a full flat to book us. Single-room student moves are priced efficiently and don't require a minimum volume.",
    },
    {
      q: "Are you familiar with student parking restrictions near Wolverhampton University?",
      a: "Yes — we know the parking regulations around the University of Wolverhampton campus and nearby residential areas well. We plan loading positions to comply with restrictions and avoid fines.",
    },
    {
      q: "Can you help pack for a student move?",
      a: "Yes — packing assistance is available for students who need help boxing up their room. We bring boxes and packing materials and can pack efficiently even when time is short.",
    },
    {
      q: "What if my move-in date is delayed by the landlord?",
      a: "We understand student move-ins can be delayed. We can hold collected items in our van temporarily between collection and delivery and keep communication open with you throughout.",
    },
    {
      q: "Can you move a single piece of furniture for a student?",
      a: "Yes — single-item student moves (a desk, a wardrobe, a bookshelf) are perfectly suited to our man and van service. We price these as short fixed-price jobs.",
    },
    {
      q: "Is using a man and van service cheaper than van hire for students?",
      a: "Often yes — when you factor in van hire cost, insurance, fuel, and the physical effort of loading and unloading yourself, a man and van from us typically represents better value, particularly for shorter moves.",
    },
  ],

  "same-day-removals": [
    {
      q: "What time should I call to request a same-day removal?",
      a: "As early as possible — ideally before 9am. Same-day availability is confirmed on the morning. Calling early gives us the best chance of deploying a team to you the same day.",
    },
    {
      q: "Does same-day availability cost more?",
      a: "It may carry a small addition depending on circumstances, but we are transparent about cost before confirming. We do not significantly inflate prices for urgency — we understand you may already be under pressure.",
    },
    {
      q: "Can you do a full house removal same-day?",
      a: "Yes — subject to vehicle and team availability. Full house removals are possible on the same day, though these are more constrained by vehicle size and team scheduling than smaller jobs. Call immediately to check.",
    },
    {
      q: "Do you accept same-day bookings on Sundays?",
      a: "Yes — Sunday same-day bookings are accepted between 08:00 and 18:00. Sunday same-day capacity is lower than weekdays, so call as early on the morning as possible.",
    },
    {
      q: "Can you help if my removal company has cancelled at short notice?",
      a: "Yes — last-minute removal company cancellations are one of our most common emergency calls. Call us immediately on 07438 447286 and we will do everything we can to honour your move date.",
    },
    {
      q: "How quickly can you typically arrive after a same-day call?",
      a: "Typically 2–4 hours from your call, depending on our current schedule. For Wolverhampton and very local areas, arrival can sometimes be faster. We give you an honest arrival estimate when you call.",
    },
    {
      q: "Does same-day mean the quality of service is lower?",
      a: "No — the same professional standards, the same furniture protection, and the same careful handling apply regardless of booking notice. We never rush in a way that compromises the quality of the move.",
    },
    {
      q: "Can I book same-day man and van?",
      a: "Yes — man and van same-day bookings are the easiest to accommodate as they require only one vehicle and driver. Call us for immediate availability.",
    },
    {
      q: "What information should I have ready when I call?",
      a: "Confirm the from and to addresses, a brief description of what needs moving, and your preferred time window. The more specific you can be, the faster we can confirm and schedule.",
    },
    {
      q: "Do you keep capacity available for same-day bookings?",
      a: "Yes — we plan our scheduling to retain daily flexibility for same-day and emergency calls. We do not overbook our calendar, which means we are often able to accommodate urgent requests.",
    },
    {
      q: "Can I move into my new property on the same day I receive the keys?",
      a: "Yes — this is one of the most common same-day scenarios. Keys received in the afternoon with a same-day move are entirely achievable, especially for smaller properties and local moves.",
    },
    {
      q: "Do you do same-day house clearances?",
      a: "Yes — same-day house clearances are available subject to property size. A studio or 1-bedroom clearance can usually be done same-day; larger properties may need a next-day booking.",
    },
  ],

  "emergency-removals": [
    {
      q: "What situations count as an emergency removal?",
      a: "Emergency removals cover evictions, domestic emergencies, property flooding requiring evacuation, completion day removal company no-shows, and any situation where you need to move urgently and cannot wait. If in doubt, call us and we will advise.",
    },
    {
      q: "Will your team make any judgements about my situation?",
      a: "No — complete professionalism and discretion are fundamental to how we work. Our team is trained not to ask unnecessary questions and to focus entirely on helping you move safely and efficiently.",
    },
    {
      q: "Can you store items temporarily in an emergency?",
      a: "Short-term holding of items in the vehicle between collection and delivery is available for emergency moves while you arrange your next step. For longer-term storage needs, we can refer you to trusted local storage partners.",
    },
    {
      q: "Are you available out of hours for genuine emergencies?",
      a: "Out-of-hours availability for genuine emergencies is assessed on a case-by-case basis. Call us on 07438 447286 and explain your situation — we will always try to help where we possibly can.",
    },
    {
      q: "Can you assist with a domestic emergency discreetly?",
      a: "Yes — sensitivity and discretion are absolutely fundamental in domestic emergency situations. Our team understands the gravity of these situations and behaves accordingly throughout.",
    },
    {
      q: "How quickly can you typically respond to an emergency in Wolverhampton?",
      a: "For Wolverhampton and nearby areas, we can typically respond within 1–4 hours of an emergency call, depending on our current schedule. We prioritise emergency calls and reassign resources where possible.",
    },
    {
      q: "Can you help move only the most essential items in a crisis?",
      a: "Yes — if time or resources are constrained, we can prioritise essentials first (documents, clothing, medications, electronics) and return for remaining items when circumstances allow.",
    },
    {
      q: "Can you coordinate with solicitors or housing agencies?",
      a: "Yes — we can communicate directly with solicitors, housing associations, letting agents, and local authorities in situations requiring professional coordination. We are experienced in these multi-party arrangements.",
    },
    {
      q: "Does emergency removal cost significantly more?",
      a: "It may carry a small addition, and we will always be transparent about the cost before we confirm. We do not exploit emergency situations — our pricing remains fair and reasonable.",
    },
    {
      q: "What should I tell you when I call for an emergency removal?",
      a: "Give us your location, a brief summary of the situation, a rough sense of how much needs moving, and your time frame. We will take it from there and advise on what we can do.",
    },
  ],

  "end-of-tenancy-clearance": [
    {
      q: "Can you clear a flat without lift access?",
      a: "Yes — properties without lifts are very common and fully within our capability. Stairs and no-lift access are factored into the quote at the survey stage. There are no access types we refuse.",
    },
    {
      q: "Can you work around a letting agent's check-out schedule?",
      a: "Yes — we liaise directly with letting agents to align clearance timing with check-out inspections. We can collect keys from the agent and complete the clearance without the landlord needing to be present.",
    },
    {
      q: "What condition is the property left in after clearance?",
      a: "The property is left completely cleared of all items. Note that clearance is not a cleaning service — carpets, walls, and surfaces are not cleaned as part of clearance. Cleaning is a separate service we can recommend.",
    },
    {
      q: "Can you do a same-day turnaround for landlords with urgent void periods?",
      a: "Subject to property size, yes. Studios and 1-bedroom flats are routinely cleared on the same day. 3-bedroom and larger properties may require a next-day completion. Call us with the property details and we will confirm.",
    },
    {
      q: "Do you remove bags of rubbish left behind by tenants?",
      a: "Yes — all rubbish, refuse bags, and accumulated waste is removed as part of the clearance. The property is left emptied of all items, not just the furniture.",
    },
    {
      q: "Do you handle disconnected appliances?",
      a: "We work around connected and disconnected appliances. We do not disconnect gas appliances ourselves — these must be disconnected by a Gas Safe registered engineer. We will remove pre-disconnected appliances without issue.",
    },
    {
      q: "What about long-term tenants with a very high volume of accumulated items?",
      a: "High-volume clearances are quoted based on an on-site assessment of the actual volume, not a standard property-size rate. This ensures the quote reflects the actual scope of work.",
    },
    {
      q: "If a former tenant's items are still in the property, can we clear them?",
      a: "We advise landlords on the legal notice period required before clearing a former tenant's belongings. Once the legal notice period has elapsed and written notice has been served, we can clear the remaining items.",
    },
    {
      q: "Can you provide a clearance report for deposit dispute purposes?",
      a: "Yes — a written clearance summary confirming the date, scope, and completion of the clearance is available on request. This can be useful in deposit dispute proceedings.",
    },
    {
      q: "Do you clear HMOs as well as standard rental properties?",
      a: "Yes — Houses in Multiple Occupation (HMOs), bedsits, purpose-built flats, and all types of rental property are cleared. HMO clearances are often room-by-room and are quoted accordingly.",
    },
  ],

  "commercial-moves": [
    {
      q: "How long does a commercial relocation typically take?",
      a: "For 10–20 person offices: 1–2 days. Larger organisations receive an individual plan based on the survey. Retail and hospitality moves vary considerably by the volume of stock and fixtures. We give accurate timelines at the survey stage.",
    },
    {
      q: "Can you relocate a retail shop?",
      a: "Yes — retail shop relocations including stock, shelving, display units, and shop fittings are handled. Retail moves are often done overnight or over a trading closure to minimise disruption to sales.",
    },
    {
      q: "Can you move a medical or dental practice?",
      a: "Yes — medical and dental practice moves require specialist care for heavy and precision equipment. We handle the logistics and positioning; calibration and reconnection is by your registered engineering team.",
    },
    {
      q: "Do you have vehicles suitable for warehouse moves?",
      a: "Yes — our commercial fleet includes vehicles up to 7.5 tonnes, with tail-lift and pallet management capability for larger warehouse relocations.",
    },
    {
      q: "Can you manage multi-site moves?",
      a: "Yes — multi-site commercial moves (consolidating from multiple offices, distributing to multiple locations) are planned with your project coordinator. We manage the logistics across all sites.",
    },
    {
      q: "Is the commercial site survey free?",
      a: "Yes — the pre-move commercial site survey is free and forms the basis of our fixed-price commercial quote. We do not charge for the survey regardless of whether you proceed.",
    },
    {
      q: "Can you assist with IT relocation during a commercial move?",
      a: "We safely transport all IT hardware — desktops, laptops, monitors, servers, network equipment. Physical reconnection and network configuration is by your IT team. We label all equipment clearly to assist reconnection.",
    },
    {
      q: "Do your team members wear uniforms?",
      a: "Yes — our commercial removal team works in uniform at all times. A professional appearance is important in commercial environments, particularly during moves that overlap with client-facing operations.",
    },
    {
      q: "Can you work without disrupting clients or customers?",
      a: "Yes — out-of-hours commercial moves are specifically designed to avoid disruption. Evening, weekend, and Bank Holiday moves allow you to be fully operational at your new address for the next business day.",
    },
    {
      q: "What information should employees know before a commercial move?",
      a: "Employees should know the new address, the move date and expected business restart time, any IT changes or login procedure changes, and should receive a copy of our move schedule document so they know what to expect.",
    },
    {
      q: "Do you provide a written commercial move plan?",
      a: "Yes — for larger commercial relocations a written move plan is produced, covering timeline, team allocation, equipment sequence, and communication protocols. This is provided before moving day.",
    },
  ],

  "senior-moves": [
    {
      q: "How do you reduce stress for senior customers during a move?",
      a: "We work entirely at the pace of the senior customer — never rushing, never pressurising. Our team communicates clearly and patiently, handles all heavy lifting, and treats every item with the care and respect it deserves.",
    },
    {
      q: "Can you help a senior decide what to take to their new home?",
      a: "We provide advisory support in the gentlest way possible — all decisions remain entirely with the senior and their family. We never push decisions or suggest disposal without being asked. Our role is to facilitate, not direct.",
    },
    {
      q: "Do you coordinate with care home staff before a move?",
      a: "Yes — we liaise directly with care home or assisted living facility administrators to plan delivery timing, access arrangements, and room setup. This takes the pressure off the family on moving day.",
    },
    {
      q: "Can you work with a senior customer who has dementia?",
      a: "Yes — with patience, calm communication, and full guidance from family members. We follow the family's lead on how to communicate with and around a customer with dementia. The priority is always the senior's comfort and dignity.",
    },
    {
      q: "How do you handle sentimental items during a senior move?",
      a: "Sentimental items receive extra care and are packed individually with particular attention. Where possible, sentimental items are first off the van at the destination so they are present and familiar from the start.",
    },
    {
      q: "Do you reassemble furniture at the new address?",
      a: "Yes — furniture reassembly at the new address is included in the senior move service. We set up the bedroom and essential living areas before we leave so the senior can settle in immediately.",
    },
    {
      q: "Can you help a senior downsize from a large family home to a flat?",
      a: "Yes — downsizing is a core part of our senior move service. We help coordinate what moves to the new home, what can be donated to family members or charity, and what requires responsible disposal.",
    },
    {
      q: "How do you handle antique furniture belonging to a senior customer?",
      a: "Antique furniture receives our most careful handling — specialist wrapping, minimum two-person carrying, and individual protection for all decorative surfaces and original features. Professional packers are recommended for high-value antiques.",
    },
    {
      q: "Can family members be present during a senior move?",
      a: "Yes — family presence is positively encouraged. It is reassuring for the senior customer and helps ensure decisions are made confidently. We are comfortable working with family members throughout.",
    },
    {
      q: "How far in advance should I book a senior move?",
      a: "4–6 weeks is ideal for senior moves given the coordination required with care facilities, family schedules, and the additional planning involved. However, we can accommodate shorter notice when necessary — contact us to discuss.",
    },
  ],

  "long-distance-removals": [
    {
      q: "How is long-distance removal pricing calculated?",
      a: "Long-distance pricing is based on a fixed quote calculated from: volume of items, origin and destination postcodes, access at both properties, and any additional services such as packing. No hidden mileage or fuel charges — your quote is your final price.",
    },
    {
      q: "How long does a Wolverhampton to London removal typically take?",
      a: "A typical 3-bedroom Wolverhampton to London removal takes a full day — loading in the morning, M6/M1 transit, unloading in the afternoon and evening. We depart early to maximise unloading daylight hours.",
    },
    {
      q: "Do you do overnight long-distance moves?",
      a: "Yes — for very long distances (Scotland, far South West, Wales) an overnight arrangement may be appropriate. This is discussed openly at the quotation stage and factored into the fixed price.",
    },
    {
      q: "Can you move from Wolverhampton to Scotland?",
      a: "Yes — Edinburgh, Glasgow, Aberdeen, Inverness, and all Scottish destinations are covered. Scottish moves typically take a full day from Wolverhampton. We provide fixed-price quotes for all Scottish destinations.",
    },
    {
      q: "Can you move to Northern Ireland?",
      a: "Yes — Northern Ireland moves include ferry coordination from Cairnryan or Holyhead to Belfast or Larne. The ferry cost and sailing time are factored into your fixed-price quote.",
    },
    {
      q: "What happens if there is a traffic delay during a long-distance move?",
      a: "We monitor routes and proactively inform you of delays. Our fixed-price quote is not affected by unavoidable traffic delays. We work with you to manage your unloading window if arrival time is pushed back.",
    },
    {
      q: "Is it the same team that loads and unloads?",
      a: "Yes — the same crew that loads your belongings at origin travels with them and unloads at destination. This ensures full accountability and the team's familiarity with how your items are packed.",
    },
    {
      q: "What if the destination property is not ready when we arrive?",
      a: "We plan contingencies for this at the booking stage — confirming likely key collection times, solicitor completion windows, and alternative waiting strategies. For long-distance moves, we always have a plan B.",
    },
    {
      q: "Can a long-distance move be split over two days?",
      a: "Yes — load on day one, secure the vehicle overnight, and unload on day two. This is available for very large properties or when the destination completion time means an evening arrival is impractical.",
    },
    {
      q: "Is extra protection used for long-distance transit?",
      a: "Yes — additional strapping, transit bars, and double-blanket wrapping are used for long-distance moves where items spend more time in transit. We do not apply standard local-move protection to a 5-hour motorway journey.",
    },
    {
      q: "Can items be dropped at an intermediate address during a long-distance move?",
      a: "Yes — interim stops to drop items at a parent's address, a storage facility, or an intermediate property are factored into the fixed-price quote at booking.",
    },
    {
      q: "Does the fixed price include fuel?",
      a: "Yes — all fuel, tolls, and mileage are included in your fixed long-distance quote. There are no hidden charges added after the move. Your quoted price is your final price.",
    },
  ],
};

// ─── Helper: get service area metadata ────────────────────────────────────────

const SERVICE_TITLE_TEMPLATES: Record<string, (areaName: string) => string> = {
  "house-removals": (a) => `House Removals ${a} | Professional Local Movers | Get Rapid Removals`,
  "house-clearance": (a) => `House Clearance ${a} | Licensed Waste Carrier | Get Rapid Removals`,
  "man-and-van": (a) => `Man and Van ${a} | Affordable Same-Day | Get Rapid Removals`,
  "office-removals": (a) => `Office Removals ${a} | Business Relocation | Get Rapid Removals`,
  "furniture-removals": (a) => `Furniture Removals ${a} | Single Items Welcome | Get Rapid Removals`,
  "packing-services": (a) => `Packing Services ${a} | Professional Packers | Get Rapid Removals`,
  "student-moves": (a) => `Student Removals ${a} | Affordable Rates | Get Rapid Removals`,
  "same-day-removals": (a) => `Same Day Removals ${a} | Call Now | Get Rapid Removals`,
  "emergency-removals": (a) => `Emergency Removals ${a} | Rapid Response | Get Rapid Removals`,
  "end-of-tenancy-clearance": (a) => `End of Tenancy Clearance ${a} | Landlords & Tenants | Get Rapid Removals`,
  "commercial-moves": (a) => `Commercial Moving Services ${a} | Business Moves | Get Rapid Removals`,
  "senior-moves": (a) => `Senior Removals ${a} | Caring Expert Team | Get Rapid Removals`,
  "long-distance-removals": (a) => `Long Distance Removals ${a} | UK-Wide | Get Rapid Removals`,
};

const META_DESC_TEMPLATES: Record<string, (area: AreaData) => string> = {
  "house-removals": (a) =>
    `Professional house removals in ${a.name} (${a.postcode}). Fully insured local team, free quotes, same-day available. 5★ rated. Call 07438 447286.`,
  "house-clearance": (a) =>
    `Licensed house clearance in ${a.name}, ${a.postcode}. Full, estate & same-day clearances. Charity donations arranged. Free quote: 07438 447286.`,
  "man-and-van": (a) =>
    `Affordable man and van in ${a.name} (${a.postcode}). Same-day available, from £60/hr. Single items, flat moves & collections. Call 07438 447286.`,
  "office-removals": (a) =>
    `Professional office removals in ${a.name}, ${a.postcode}. Out-of-hours moves, IT equipment care, free survey. Call Get Rapid Removals: 07438 447286.`,
  "furniture-removals": (a) =>
    `Safe furniture removals in ${a.name} (${a.postcode}). Single items welcome, same-day available. Sofas, pianos, wardrobes & more. Call 07438 447286.`,
  "packing-services": (a) =>
    `Expert packing services in ${a.name}, ${a.postcode}. Full or partial packing, all materials supplied. Book with your removal. Call 07438 447286.`,
  "student-moves": (a) =>
    `Affordable student removals in ${a.name} (${a.postcode}). Room moves, halls clearances & end-of-year moves. From £60/hr. Call 07438 447286.`,
  "same-day-removals": (a) =>
    `Same-day removals in ${a.name}, ${a.postcode}. Call now for immediate availability — 07438 447286. Fully insured, professional team ready today.`,
  "emergency-removals": (a) =>
    `Emergency removals in ${a.name} (${a.postcode}). Rapid response for urgent situations. Discreet & professional. Call now: 07438 447286.`,
  "end-of-tenancy-clearance": (a) =>
    `End of tenancy clearance in ${a.name}, ${a.postcode}. Same-day available for landlords & agents. Licensed, thorough. Free quote: 07438 447286.`,
  "commercial-moves": (a) =>
    `Commercial moving services in ${a.name} (${a.postcode}). Office, retail & warehouse moves. Free survey, fixed price. Call 07438 447286.`,
  "senior-moves": (a) =>
    `Caring senior removal service in ${a.name}, ${a.postcode}. Patient, specialist team for downsizing & care home moves. Call 07438 447286.`,
  "long-distance-removals": (a) =>
    `Long distance removals from ${a.name} (${a.postcode}). UK-wide coverage, fixed-price quotes, fully insured. Free quote: 07438 447286.`,
};

const H1_TEMPLATES: Record<string, (areaName: string) => string> = {
  "house-removals": (a) => `House Removals in ${a}`,
  "house-clearance": (a) => `House Clearance Service in ${a}`,
  "man-and-van": (a) => `Man and Van Service in ${a}`,
  "office-removals": (a) => `Office Removals in ${a}`,
  "furniture-removals": (a) => `Furniture Removals in ${a}`,
  "packing-services": (a) => `Professional Packing Services in ${a}`,
  "student-moves": (a) => `Student Removals in ${a}`,
  "same-day-removals": (a) => `Same Day Removals in ${a}`,
  "emergency-removals": (a) => `Emergency Removals in ${a}`,
  "end-of-tenancy-clearance": (a) => `End of Tenancy Clearance in ${a}`,
  "commercial-moves": (a) => `Commercial Moving Services in ${a}`,
  "senior-moves": (a) => `Senior Removals in ${a}`,
  "long-distance-removals": (a) => `Long Distance Removals from ${a}`,
};

const BADGE_TEMPLATES: Record<string, (areaName: string) => string> = {
  "house-removals": (a) => `House Removals · ${a}`,
  "house-clearance": (a) => `House Clearance · ${a}`,
  "man-and-van": (a) => `Man & Van · ${a}`,
  "office-removals": (a) => `Office Removals · ${a}`,
  "furniture-removals": (a) => `Furniture Removals · ${a}`,
  "packing-services": (a) => `Packing Services · ${a}`,
  "student-moves": (a) => `Student Moves · ${a}`,
  "same-day-removals": (a) => `Same Day · ${a}`,
  "emergency-removals": (a) => `Emergency Removals · ${a}`,
  "end-of-tenancy-clearance": (a) => `End of Tenancy · ${a}`,
  "commercial-moves": (a) => `Commercial Moves · ${a}`,
  "senior-moves": (a) => `Senior Removals · ${a}`,
  "long-distance-removals": (a) => `Long Distance · ${a}`,
};

export function getServiceAreaMeta(
  service: ServiceData,
  area: AreaData
): { metaTitle: string; metaDescription: string; h1: string; badge: string; heroSub: string } {
  const titleFn = SERVICE_TITLE_TEMPLATES[service.slug];
  const descFn = META_DESC_TEMPLATES[service.slug];
  const h1Fn = H1_TEMPLATES[service.slug];
  const badgeFn = BADGE_TEMPLATES[service.slug];

  const metaTitle = titleFn ? titleFn(area.name) : `${service.shortTitle} ${area.name} | Get Rapid Removals`;
  const metaDescription = descFn ? descFn(area) : `${service.shortTitle} in ${area.name} (${area.postcode}). Professional, fully insured service. Free quote: 07438 447286.`;
  const h1 = h1Fn ? h1Fn(area.name) : `${service.shortTitle} in ${area.name}`;
  const badge = badgeFn ? badgeFn(area.name) : `${service.shortTitle} · ${area.name}`;

  const heroSub =
    area.distance === "0 miles"
      ? `Based here in ${area.name}. ${service.shortTitle} specialists serving ${area.postcode}. Free quotes, same-day available.`
      : `Professional ${service.shortTitle.toLowerCase()} covering ${area.name} (${area.postcode}) — ${area.distance} from our Wolverhampton base. Fully insured, free quotes.`;

  return { metaTitle, metaDescription, h1, badge, heroSub };
}

// ─── Helper: combined FAQ set ─────────────────────────────────────────────────

export function getServiceAreaFAQs(
  serviceSlug: string,
  areaSlug: string
): { question: string; answer: string }[] {
  const serviceFAQs = SERVICE_LOCAL_FAQS[serviceSlug] ?? [];
  const areaContent = AREA_LOCAL_CONTENT[areaSlug];
  const areaLocalFAQs = areaContent?.localFAQs ?? [];

  // Use the area's index in AREAS for rotation offset so different areas see different subsets
  const areaIndex = AREAS.findIndex((a) => a.slug === areaSlug);
  const offset = areaIndex < 0 ? 0 : areaIndex % Math.max(serviceFAQs.length, 1);

  // Pick 5–6 service FAQs with rotation
  const maxServiceFAQs = Math.min(6, serviceFAQs.length);
  const selectedServiceFAQs: { question: string; answer: string }[] = [];
  for (let i = 0; i < maxServiceFAQs; i++) {
    const idx = (offset + i) % serviceFAQs.length;
    const faq = serviceFAQs[idx];
    selectedServiceFAQs.push({ question: faq.q, answer: faq.a });
  }

  // Pick 3–4 area FAQs
  const maxAreaFAQs = Math.min(4, areaLocalFAQs.length);
  const selectedAreaFAQs = areaLocalFAQs.slice(0, maxAreaFAQs).map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return [...selectedServiceFAQs, ...selectedAreaFAQs];
}

// ─── All 156 combinations ─────────────────────────────────────────────────────

export const ALL_SERVICE_AREA_COMBINATIONS: { areaSlug: string; serviceSlug: string }[] =
  AREAS.flatMap((area) =>
    SERVICES.map((service) => ({
      areaSlug: area.slug,
      serviceSlug: service.slug,
    }))
  );
