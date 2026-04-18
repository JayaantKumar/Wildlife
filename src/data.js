// src/data.js
// ... (keep your existing galleryImages and safaris arrays)

export const projects = [
  {
    id: "serengeti-shadows",
    title: "Serengeti Shadows",
    year: "2023",
    client: "BBC Wildlife",
    description: "Capturing the monochrome beauty of the African Savannah during the dry season. This project focuses on the raw predator-prey dynamics and the vast, unforgiving landscape of the Serengeti.",
    coverUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1200",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200",
      "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=1200",
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200"
    ]
  },
  {
    id: "arctic-sentinels",
    title: "Arctic Sentinels",
    year: "2024",
    client: "National Geographic",
    description: "A deep dive into the lives of polar bears in the Svalbard archipelago. A visual documentation of survival, patience, and the stark beauty of a rapidly changing icy frontier.",
    coverUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?w=1200",
      "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=1200",
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"
    ]
  },
  {
    id: "himalayan-ghosts",
    title: "Ghosts of the Himalayas",
    year: "2022",
    client: "Conservation International",
    description: "Weeks spent tracking the elusive snow leopard at extreme altitudes. This collection highlights the incredible camouflage and resilience of these mountain phantoms.",
    coverUrl: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=1200",
      "https://images.unsplash.com/photo-1504173010664-32509aaefe4e?w=1200",
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200"
    ]
  },
  {
    id: "oceanic-leviathans",
    title: "Oceanic Leviathans",
    year: "2021",
    client: "Ocean Conservancy",
    description: "An underwater exploration of the world's largest mammals. Immersive imagery from the depths of the Pacific, capturing the gentle grace of humpback and blue whales.",
    coverUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
      "https://images.unsplash.com/photo-1568430462989-44163eb17ab2?w=1200",
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=1200"
    ]
  }
];

export const safaris = [
  {
    id: "amboseli-elephants",
    title: "Amboseli Elephants",
    duration: "7 Days — September",
    location: "Amboseli, Kenya",
    coverUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800",
  },
  {
    id: "great-migration",
    title: "The Great Migration",
    duration: "8 Days — August and September",
    location: "Maasai Mara, Kenya",
    coverUrl: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800",
    
    // Detailed Content for Great Migration
    heroTitle: "Great Migration Photo Safari",
    subtitle: "Photograph the Great Migration in 2026\nMaasai Mara, Kenya\nAugust and September\n7-day Photo Safaris",
    intro: "The Great Migration is one of the most spectacular events in the natural world, sometimes referred to as the greatest show on earth. The migration is a movement of 1.5 million wildebeest with 400,000 zebra and 200,000 gazelles accompanying them along the way, making a total of over 2 million migrating from the Maasai Mara into the Serengeti in Tanzania between July and October.\n\nThe Maasai Mara is like no other place in Africa; the density of wildlife in the Maasai Mara is a photographer’s dream.\n\nThe Great Migration safaris will concentrate on the migrating wildebeest, zebra, giraffe, antelope, hippo, elephant, and of course the Maasai Mara’s famous big cats. We might even see a lion kill, a cheetah chase, or a black rhino.\n\nAll in all, these African photo safaris produce life-long memories and the images are often framed by the Mara’s famous sunrises, sunsets, and dramatic vistas.\n\nTo reserve your spot on The Great Migration safari please contact me.",
    isForYou: [
      { title: "All Photographers Are Welcome", text: "Photographers of all levels are welcome. Our tour leaders are full-time wildlife photographers with great experience in the field as well as in guiding and photographic instruction. Each tour offers a small client-leader ratio that allows for personal attention and customized guidance on photography." },
      { title: "Creative Photography", text: "We pride ourselves on the highest level of creative wildlife photography. We’ll show you creative techniques to set your pictures apart from the rest. In addition to these, we will also cover traditional techniques like portraiture, action, focusing, and composition." },
      { title: "Image Reviews and Tuition", text: "After our morning drives, we offer tuition on photographic techniques and post-processing. We also host image review sessions in a more formal setting during the week. Our goal is for you to make the most out of your experience and to take home pictures you’ve long desired." }
    ],
    highlights: [
      { title: "Location", text: "Our camp is located away from the tourist traffic on the edge of the reserve, near to the action and with access to the main crossing points some twenty minutes away from the Mara River itself where we can see wildebeest crossings." },
      { title: "Photographic Vehicles", text: "Our new photographic vehicles have open sides and also maximise the space and flexibility that a photographer needs. Each participant has a whole row of seats, as well as provisions for beanbags and clamps on the open sides and the roof." },
      { title: "Lens Hire", text: "Lens hire is available from our base here in the Maasai Mara, so you do not need to worry about the hiring, delivery, and return of it in your home country. It also alleviates any potential problem of airline carry-on weight restrictions. Currently, we have 300mm and 400mm f/2.8 lenses with matching 1.4 converters in both Canon and Nikon mounts." },
      { title: "Documentation", text: "Included in the tour price is an exclusive 36-page book written by David entitled Photographing Wildlife in The Maasai Mara. Other documentation includes animal and bird lists, rules and ethics guidelines, and detailed maps of the area." },
      { title: "In Camp Tuition", text: "We also offer tuition in camp when we are not on drives, which may cover such topics as basic camera usage to wildlife photography techniques, focussing for wildlife, photographic composition, flash, and macro photography." },
      { title: "Lightroom and Photoshop Tuition", text: "Included in the trip cost is optional guidance on image processing in either Adobe Lightroom or Photoshop. We demonstrate post-processing techniques as they apply to wildlife photography. Both colour and black-and-white treatments will be covered." },
      { title: "Ground Transportation", text: "Because flights from Nairobi to the Mara have strict weight restrictions on luggage of only 15 kg/person, we provide transportation for the rest of your luggage to the camp by road." },
      { title: "Optional Excursions", text: "We offer optional excursions: a balloon ride at sunrise over the Maasai Mara with champagne breakfast, and a visit to a nearby Maasai village." }
    ],
    whereWeStay: "Our camp is chosen with a purpose in mind, away from the tourist traffic that frequents the Maasai Mara at that time of year, yet within range of the Mara River and the wildebeest crossing points in the Maasai Mara game reserve.\n\nOur camps are the eco-friendly and small and tastefully but differently furnished, well-equipped tents. Our decor aims to enhance the surrounding environment.\n\nThe experience is not your average hotel or lodge experience, it’s about being right in the hub of one of the most famous wildlife reserves in the world and part of the Kenya safari experience.",
    datesAndCosts: "August and September 2026 – 7 Day Itineraries\n25th August – 31st August  – (open)\n8th September – 14th September – (open)\n\nThe cost of these all-inclusive safaris in 2026 is $8400 per person.\nBookings are secured with a 20% deposit per person, with the balance being required 90 days before.\nA single, optional supplement is available at $1700 extra.\n\nThe Great Migration Photo Safari can be linked to our 7-day Amboseli Elephants Safari.",
    financialProtection: "Payments to be made in $US\nYour deposit is used to secure your accommodations, internal flights, hotel transfers and park permits, many of which require early payment.\nPayments for all safaris are made through Shona Travel which means you have the financial protection of booking through a registered tour operator. Your money is 100% safe and if one of our suppliers goes bust, your money is fully protected. Shona Travel can also book your flights for full financial protection. Please download our terms and conditions here.",
    howToBook: "Our tour groups are small at 6 - 9 participants, so space is limited.\nTo reserve your spot in this tour please email me at email@jhondoe.net\n\nSingle supplements are optional for single travellers who want their own room and tent. Otherwise single travellers are paired with another single traveller of the same gender.\nFor those who wish to join two dates for one continuous longer safari, we can at a cost less than two combined.\nFor all dates, we offer reduced costs for Kenyan residents. If you are a Kenyan resident, please enquire.",
    included: ["One night Serena Hotel stay", "Flights to and from the Masai Mara from Wilson airport", "All airport transfers and ground transportation of luggage", "Six nights accommodation and in the Maasai Mara", "All park fees", "Exclusive vehicles and qualified driver guides", "Optional walking safari", "Flying Doctor emergency medical service", "Local alcoholic beverages at camp", "Photographing Wildlife In The Maasai Mara eBook", "All lectures, presentations and tuition"],
    notIncluded: ["International flights", "Kenya visa ($50)", "Alcoholic beverages Serena, and non-local alcoholic beverages at camp", "Tips and gratuities for camp staff and guides"],
    optionsCost: ["Camera and Lens hire", "Balloon ride and champagne breakfast ($450)", "Maasai Village visit ($30)"],
    itinerary: [
      { day: "Day 1", text: "We are picked up from Nairobi Airport on arrival by our driver and delivered to the Serena Hotel in Nairobi, where we will all meet and introduce ourselves." },
      { day: "Day 2", text: "At 8:00 AM we transfer to Wilson Airport some 15 minutes away for a 45 minute a flight to our camp in the Maasai Mara. We arrive in time for a camp welcome and introduction, and then after lunch we embark on our first afternoon drive. At about 6:30 we return to camp to relax in front of the boma (campfire) before dinner at about 7:30-8:00." },
      { day: "Day 3", text: "Our first full day in the Mara. We are woken with a pre-dawn tea, coffee and biscuits before we set out on our drive at 6:00 am to photograph in the best light of the day. After a break for a picnic breakfast, we continue until about midday, depending on animal activity. Then it’s back to camp for lunch, rest, editing or backing up your images, or attending a talk or workshop session. Then at 4:00 we head out for our afternoon drive as on the previous day." },
      { day: "Day 4, 5 and 6", text: "as Day 3." },
      { day: "Day 7", text: "We have time for a full morning drive before returning to camp at 11:00 for lunch then at 4:00 am we’ll catch our return flight to Nairobi. For the remainder of that afternoon and evening we can just relax at the Serena Hotel by the pool or at the bar before transfer to Nairobi Airport for our international flights home." }
    ],
    guides: "We are a small team of award-winning wildlife photographers and experienced photography tutors in the field of natural history. We have won awards in Wildlife Photographer of the Year, Nature’s Best and GDT European Wildlife Photographer of the Year, and our work is published regularly. Our photographic experience extends back to the days of film, paper and manual focus cameras.\n\nJhon Doe is an exhibiting wildlife photographer, having won awards for his work which favours a fine art style in both colour and black & white.\n\nJhon has been awarded six times in Wildlife Photographer of the Year. In 2011, his image A Flick of the Tail was chosen as the cover of that year’s Wildlife Photographer of the Year portfolio and in 2019 he was awarded as their peoples’ choice winner for his image Bond of Brothers.\n\nHis images have been published widely in the press and several photographic monthlies, in both the UK and abroad. Jhon also holds exhibitions of his work, most recently at the Royal Geographic Society in London. His debut book As Long As There Are Animals was published in late 2014, and All Eyes Speak One Language in 2022."
  },
  {
    id: "uganda-primates",
    title: "Uganda's Primates",
    duration: "10 & 15 Days — October and November",
    location: "Kibale and Bwindi, Uganda",
    coverUrl: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=800",
  },
  {
    id: "tigers-of-india",
    title: "Tigers Of India",
    duration: "9 Days — April May",
    location: "Bandhavgarh",
    coverUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800",
  },
  {
    id: "wildlife-of-india",
    title: "Wildlife of India",
    duration: "15 Days — April",
    location: "Kaziranga Pench Bandhavgarh",
    coverUrl: "https://images.unsplash.com/photo-1564349683136-77e08bef1ed1?w=800",
  },
  {
    id: "big-cats-safari",
    title: "Big Cats Photo Safari",
    duration: "8 Days — February and March",
    location: "Maasai Mara, Kenya",
    coverUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800",
  }
];

export const galleryImages = [
  { id: 1, type: 'Colour', isAwarded: true, date: '2024-01-01', url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200', title: 'Orange Ember' },
  { id: 2, type: 'Black and White', isAwarded: false, date: '2023-12-15', url: 'https://images.unsplash.com/photo-1504173010664-32509aaefe4e?w=1200', title: 'Silver Mane' },
  { id: 3, type: 'Colour', isAwarded: true, date: '2024-02-10', url: 'https://images.unsplash.com/photo-1564349683136-77e08bef1ed1?w=1200', title: 'Forest Spirit' },
  { id: 4, type: 'Black and White', isAwarded: true, date: '2023-11-20', url: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=1200', title: 'Ghost of the Mountain' },
];