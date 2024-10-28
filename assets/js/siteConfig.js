let siteConfig = {
    phone1: "+91 0522 4079606",
    phone2: "+91 91708 34007",
    email: "contact@thetravelcare.net",
    address: "Ground Floor, Raj Chamber, 29/9, Rana Pratap Marg, Hazratanj Lucknow 226001 UP INDIA",
    transitionTiming: 6000,
    hero_title: "Journey to explore world",
    popular_destinations: "Popular destination",
    popular_destinations_text: "Explore the world's most breathtaking destinations with us. From nature's beauty to city culture, we've got you covered.",
    popular_destinations_count: 3,
    packages_title: "Our Packages",
    packages_text: "Explore the world's most breathtaking destinations with us. From nature's beauty to city culture, we've got you covered.",
    package_count: 3,
    gallery_title: "Gallery",
    gallery_text: "Explore the world's most breathtaking destinations with us. From nature's beauty to city culture, we've got you covered.",
    about_us: "About TCPL",
    about_us_text: "TRAVEL CARE is one of the leading Travel Company established in the year 2007 based  in  the Capital city of Uttar Pradesh-Lucknow. The company is an integration of experience and customer satisfaction. The company has a reasonable strength of employees with ample office space. All the modern necessities of Travel Management , ultra modern gadgets for Online Reservations, International and Domestic Hotels and Air Ticket reservations, Tour Packages, Cruises, Eurail, Holiday Planning are just a phone call away",
    our_motto:"Our Motto",
    our_motto_text: "The Lifetime Holidays. This motto makes us unique so much so that the client’s specific travel needs are fulfilled. The client's expectations are sensed and understood, suitable travel product is sourced in the customer’s budget.<br/> Customized packages ranging from Honeymoon to business to holiday to all the domestic as well as international destinations are made available to clients. The product range is based on budget and quality but the focus is customer satisfaction. Our armory includes Eurail Passes (Europe Train Passes), Mountain Excursion Tickets, Various Cruise Liners, All major International and Domestic Airlines, International and Domestic Hotel Bookings suit to all budgets and many more. Online Flight Bookings are also our specialty.",
    our_vision: "Our Vision",
    our_vision_text: "Our vision is to provide value based services to our customers through constraint up gradation of ideas translated into reality.<br/> We believe in providing our customer a life time experience of their travel.<br/> We always try our best to give them memorable and comfortable journey more than our expectation."
}


const popularDestinations = [
    {
        image: "./assets/images/italy/canal-6519196.jpg",
        title: "Canal",
        subTitle: "Italy",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
        details: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto. Fusce hic augue velit wisi ips quibusdam pariatur, iusto."
    },
    {
        image: "./assets/images/popular-2.jpg",
        title: "Burj khalifa",
        subTitle: "Dubai",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
        details: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto. Fusce hic augue velit wisi ips quibusdam pariatur, iusto."
    },
    {
        image: "./assets/images/popular-3.jpg",
        title: "Kyoto temple",
        subTitle: "Japan",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
        details: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto. Fusce hic augue velit wisi ips quibusdam pariatur, iusto."
    },
    {
        image: "./assets/images/popular-3.jpg",
        title: "Kyoto temple",
        subTitle: "Japan",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
        details: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto. Fusce hic augue velit wisi ips quibusdam pariatur, iusto."
    },
    {
        image: "./assets/images/popular-3.jpg",
        title: "Kyoto temple",
        subTitle: "Japan",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
        details: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto. Fusce hic augue velit wisi ips quibusdam pariatur, iusto."
    },
];

const packages = [
    {
        image: './assets/images/packege-1.jpg',
        alt: 'Experience The Great Holiday On Beach',
        title: 'Experience The Great Holiday On Beach',
        text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        price: 750,
        offer_price: 520
    },
    {
        image: './assets/images/packege-2.jpg',
        alt: 'Summer Holiday To The Oxolotan River',
        title: 'Summer Holiday To The Oxolotan River',
        text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        price: 520
    },
    {
        image: './assets/images/packege-3.jpg',
        alt: "Santorini Island's Weekend Vacation",
        title: "Santorini Island's Weekend Vacation",
        text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        price: 660
    },
    {
        image: './assets/images/packege-3.jpg',
        alt: "Santorini Island's Weekend Vacation",
        title: "Santorini Island's Weekend Vacation",
        text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.',
        duration: '7D/6N',
        pax: 10,
        location: 'Malaysia',
        price: 660,
        offer_price: 120
    }
];

const images = [
    './assets/images/swiss/europe-7128531.jpg',
    './assets/images/greece/shipwreck-7334280.jpg',
    './assets/images/thailand/vacations-631203.jpg',
    './assets/images/swiss/schilthorn-3033448.jpg',
    './assets/images/italy/channel-3547224.jpg',
    './assets/images/thailand/wat-rong-khun-5429250.jpg',
    './assets/images/italy/venice-3183168.jpg',
    './assets/images/vietnam/pham-ngu-lao-3989110.jpg'
]; // Add your image URLs here


const galleryImages = [
    "./assets/images/azerbaijan/azerbaijan-3699442.jpg",
    "./assets/images/greece/santorini-4044972.jpg",
    "./assets/images/italy/alley-1690053.jpg",
    "./assets/images/swiss/alpine-lake-4243396.jpg",
    "./assets/images/vietnam/gioc-village-waterfall-5689446.jpg",
];