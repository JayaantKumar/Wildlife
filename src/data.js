// src/data.js

export const projects = [
  {
    id: "stripes-of-bandhavgarh",
    title: "Stripes of Bandhavgarh",
    year: "2024",
    client: "Conservation India",
    description: "A comprehensive photographic study of the Bengal Tiger in the dense Sal forests of Bandhavgarh. This project captures the raw power and intimate family dynamics of India's apex predator.",
    coverUrl: "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
    images: [
      "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
      "https://nws.ams3.cdn.digitaloceanspaces.com/content/5A33D1474A94741A998AA72B8C722C9B/875-640.webp"
    ]
  },
  {
    id: "ghosts-of-spiti",
    title: "Ghosts of Spiti",
    year: "2023",
    client: "Himalayan Trust",
    description: "Weeks spent tracking the elusive snow leopard at extreme altitudes in the Himalayas. This collection highlights the incredible camouflage and resilience of these mountain phantoms.",
    coverUrl: "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1280px-Irbis4.JPG",
      "https://images.saymedia-content.com/.image/t_share/MTc2NDYyMTcxMDg4Mjk5OTk0/the-endangered-snow-leopard.jpg"
    ]
  },
  {
    id: "kaziranga-giants",
    title: "Kaziranga Giants",
    year: "2022",
    client: "WWF India",
    description: "Navigating the floodplains of Assam to document the Great One-Horned Rhinoceros and the wild Asiatic water buffalo in their misty, primordial habitat.",
    coverUrl: "https://newsarenaindia.com/_next/image?url=https%3A%2F%2Fimages.newsarenaindia.com%2Frhino-3jpg_1732885188883.jpg&w=1920&q=75",
    images: [
      "https://www.clubmahindra.com/blog/media/section_images/worldrhino-5938d440d4dc01b.jpg"
    ]
  }
];

export const safaris = [
  {
    id: "kanha-pench-expedition",
    title: "The Central India Tiger Expedition",
    duration: "8 Days — Prime Season",
    location: "Kanha & Pench National Parks",
    coverUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/ee/92/pench-tiger-safari.jpg?w=1200&h=-1&s=1",
    heroTitle: "Kanha & Pench Photography Safari",
    subtitle: "Track the Bengal Tiger in the heart of India.\nCentral India\nNovember to May\n8-Day Intensive Safari",
    intro: "Central India is the undisputed tiger capital of the world. This safari takes you deep into the pristine Sal and Bamboo forests of Kanha and Pench National Parks—the very landscapes that inspired Rudyard Kipling's 'The Jungle Book'.\n\nOur focus is entirely on securing the best photographic angles for the Royal Bengal Tiger, leopards, Indian wild dogs (Dhole), and the hard-ground Barasingha.",
    whereWeStay: "We stay in premium, eco-friendly luxury lodges located on the buffer zones of the parks. These lodges offer exceptional comfort, local cuisine, and dedicated spaces for evening image review sessions.",
    itinerary: [
      { day: "Day 1", text: "Arrival at Nagpur Airport. Transfer to Pench National Park. Evening orientation and camera setup." },
      { day: "Day 2-3", text: "Morning and afternoon safaris in Pench, targeting tigers and leopards in the teak forests." },
      { day: "Day 4", text: "Morning safari in Pench, followed by a scenic drive to Kanha National Park." },
      { day: "Day 5-7", text: "Full days dedicated to Kanha's Mukki and Kanha zones. Focus on tiger tracking and capturing the mist-filled meadow landscapes." },
      { day: "Day 8", text: "Final morning drive in Kanha. Breakfast, and transfer back to Nagpur for onward flights." }
    ],
    included: ["Airport transfers from Nagpur", "Luxury lodge accommodation", "All meals during the safari", "Exclusive open-top safari gypsies (2 photographers per vehicle)", "All park entry fees and guide charges", "Daily photography tuition and image review"],
    notIncluded: ["Domestic/International flights to Nagpur", "Camera fees (if applicable)", "Personal expenses and tips"],
    howToBook: "Groups are limited to 6 photographers to ensure maximum space in vehicles. Please email us to confirm availability and reserve your spot."
  },
  {
    id: "ranthambore-ruins",
    title: "Tigers & Ancient Ruins",
    duration: "6 Days — Summer",
    location: "Ranthambore National Park",
    coverUrl: "https://www.tigersafariindia.co.uk/wp-content/uploads/2022/06/visitors-enjoying-tiger-safari-in-ranthambore-national-park-1024x683.jpg",
    heroTitle: "Ranthambore Photo Safari",
    subtitle: "Photograph tigers against the backdrop of history.\nRajasthan, India\nApril to June\n6-Day Specialized Safari",
    intro: "Ranthambore offers a wildlife photography aesthetic unlike anywhere else on earth. Here, the Bengal Tiger roams through dry deciduous forests littered with the crumbling ruins of ancient forts and temples.\n\nThis safari is timed for the Indian summer, when water sources dry up and predator activity concentrates around the remaining lakes, offering unparalleled, unobstructed sightings and dramatic, high-contrast lighting.",
    whereWeStay: "Our base is a luxury heritage-style resort located just minutes from the park gates, ensuring we are always the first in line for morning safaris.",
    itinerary: [
      { day: "Day 1", text: "Arrival at Jaipur Airport. Transfer to Ranthambore. Welcome dinner and itinerary briefing." },
      { day: "Day 2-5", text: "Intensive morning and afternoon safaris across zones 1-5. We focus on tracking dominant tigers around the Rajbagh ruins, Padam Talao, and Malik Talao." },
      { day: "Day 6", text: "Final morning game drive. Checkout and transfer back to Jaipur." }
    ],
    included: ["Jaipur airport transfers", "Premium heritage accommodation", "All meals", "Zone-specific safari permits (booked well in advance)", "Dedicated photography guide"],
    notIncluded: ["Flights to Jaipur", "Alcoholic beverages", "Gratuities for local guides and drivers"],
    howToBook: "Ranthambore permits sell out months in advance. We highly recommend booking at least 6 months prior to your desired date."
  },
  {
    id: "kabini-melanistic",
    title: "The Black Panther Quest",
    duration: "5 Days — Winter",
    location: "Kabini, Nagarhole",
    coverUrl: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-03-at-13.06.21-scaled.jpeg",
    heroTitle: "Kabini Predators Safari",
    subtitle: "In search of the elusive ghost of the forest.\nKarnataka, South India\nDecember to March\n5-Day Focused Safari",
    intro: "The southern forests of Kabini (Nagarhole National Park) are lush, dark, and incredibly atmospheric. While the park boasts healthy populations of tigers and massive tusked elephants, our primary focus on this expedition is leopards—including the famed melanistic leopard (Black Panther).\n\nWe navigate the backwaters of the Kabini river and the dense canopy roads, teaching you how to shoot in challenging, low-light conditions.",
    whereWeStay: "We stay in luxury riverside lodges along the Kabini backwaters, offering stunning sunset views and easy access to both land and boat safaris.",
    itinerary: [
      { day: "Day 1", text: "Arrival at Bangalore Airport. Scenic drive to Kabini. Afternoon boat safari on the backwaters to photograph elephants." },
      { day: "Day 2-4", text: "Morning and evening jeep safaris in the Kabini tourism zone. Tracking leopards in the canopy and tigers along the forest tracks." },
      { day: "Day 5", text: "Morning boat or jeep safari. Breakfast and departure to Bangalore." }
    ],
    included: ["Bangalore transfers", "Riverside luxury accommodation", "Mix of jeep and boat safaris", "All park fees and camera permits", "Expert tracking guides"],
    notIncluded: ["Flights to Bangalore", "Personal expenses", "Tips"],
    howToBook: "This is a specialized, fast-paced safari. Contact us directly to join the waitlist for our next Kabini expedition."
  },
  {
    id: "corbett-landscapes",
    title: "First Reserve Safari",
    duration: "7 Days — Spring",
    location: "Jim Corbett National Park",
    coverUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    heroTitle: "Corbett Landscapes & Tigers",
    subtitle: "Wildlife photography in the Himalayan foothills.\nUttarakhand, India\nMarch to May\n7-Day Immersive Safari",
    intro: "Jim Corbett is India's oldest national park and arguably its most beautiful. Nestled in the foothills of the Himalayas, the park features the winding Ramganga river, expansive grasslands (Chaurs), and dense Sal forests.\n\nThis safari is as much about landscape photography as it is about wildlife. We will photograph herds of wild Asian elephants crossing the river, and the majestic Bengal tiger in truly wild, untamed terrain.",
    whereWeStay: "We spend part of our trip in premium resorts on the park periphery, and part of the trip deep inside the park at the historic Dhikala Forest Rest House for exclusive early-morning access.",
    itinerary: [
      { day: "Day 1", text: "Arrival in Delhi. Drive to Corbett National Park. Check into peripheral resort and relax." },
      { day: "Day 2", text: "Morning and evening safaris in the Bijrani or Jhirna zones." },
      { day: "Day 3", text: "Drive into the core zone. Check into Dhikala Forest Rest House. Afternoon safari in the Dhikala Chaur." },
      { day: "Day 4-6", text: "Full days exploring the Ramganga riverbanks and dense forests of Dhikala. Incredible opportunities for wide-angle wildlife photography." },
      { day: "Day 7", text: "Morning safari. Check out from Dhikala and drive back to Delhi." }
    ],
    included: ["Delhi round-trip transfers", "Accommodation in resorts and Dhikala FRH", "All meals", "Exclusive gypsy safaris", "All forest department permits"],
    notIncluded: ["Flights to Delhi", "Tips for FRH staff and guides", "Personal expenses"],
    howToBook: "Dhikala permits are extremely limited and managed by the government. Booking requires advanced planning. Reach out to start the process."
  }
];

export const galleryImages = [
  { id: 1, type: 'Colour', isAwarded: true, date: '2024-01-01', url: 'https://a-z-animals.com/media/animals/images/original/464048079_d7fbbbca7a_k-1024x686.jpg', title: 'Bandhavgarh King' },
  { id: 2, type: 'Black and White', isAwarded: false, date: '2023-12-15', url: 'https://www.dreamladakh.com/blog/wp-content/uploads/2025/12/reamladakh-1.jpg', title: 'Snow Leopard Profile' },
  { id: 3, type: 'Colour', isAwarded: true, date: '2024-02-10', url: 'https://www.thournatureresorts.com/blog/wp-content/uploads/2020/02/Bandipur-National-Park.jpg', title: 'Kaziranga Morning' },
  { id: 4, type: 'Black and White', isAwarded: true, date: '2023-11-20', url: 'https://www.dreamladakh.com/blog/wp-content/uploads/2025/12/reamladakh-1.jpg', title: 'Himalayan Ghost' },
];