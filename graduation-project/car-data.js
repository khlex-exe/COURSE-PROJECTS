// ===================== CAR DATA =====================
// One object = one car. Key must exactly match the data-id you put
// on that car's .car-card in index.html (e.g. data-id="mustang-gt").
//
// image      -> same photo already used on the main garage card
// image2     -> second/reveal-section photo for the detail page (add your own path)
// video      -> clip for the video section (add your own path)
// model3d    -> .gltf path for <model-viewer> (leave "" if you don't have one yet)
// longDesc   -> longer write-up for the detail page (data-desc on the card stays short)

const cars = {

  "mustang-gt": {
    brand: "FORD",
    name: "MUSTANG GT",
    year: "2023",
    category: "COUPE",
    power: "460 hp",
    drive: "rear-wheel drive",
    price: "$45,000",
    image: "pics/gt.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "The Garage's benchmark muscle coupe — big V8 power in a nimble, rear-drive body."
  },

  "911-carrera": {
    brand: "PORSCHE",
    name: "911 CARRERA",
    year: "2022",
    category: "SPORTS",
    power: "379 hp",
    drive: "rear-wheel drive",
    price: "$105,000",
    image: "pics/911.jpg",
    image2: "pics/porsche.jpg",
    video: "vids/porsche-911.mp4",
    model3d: "3d/porsche/scene.gltf",
    longDesc: "The definitive everyday sports car. Timeless silhouette and surgical precision on canyon roads."
  },

  "rav4": {
    brand: "TOYOTA",
    name: "RAV4",
    year: "2024",
    category: "SUV",
    power: "203 hp",
    drive: "all-wheel drive",
    price: "$32,000",
    image: "pics/rav.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "Reliable, versatile, and ready for anything. The perfect daily driver with capable all-wheel drive."
  },

  "model-3": {
    brand: "TESLA",
    name: "MODEL 3",
    year: "2023",
    category: "SEDAN",
    power: "283 hp",
    drive: "electric",
    price: "$42,000",
    image: "pics/model.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "The future of the daily commute. Instant electric torque paired with minimalist, cutting-edge technology."
  },

  "amg-gt": {
    brand: "MERCEDES-BENZ",
    name: "AMG GT",
    year: "2023",
    category: "LUXURY",
    power: "496 hp",
    drive: "all-wheel drive",
    price: "$115,000",
    image: "pics/sclass.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "The ultimate expression of executive luxury. Unmatched comfort, ambient lighting, and smooth power."
  },

  "range-rover-sport": {
    brand: "LAND ROVER",
    name: "RANGE ROVER SPORT",
    year: "2023",
    category: "SUV",
    power: "395 hp",
    drive: "all-wheel drive",
    price: "$85,000",
    image: "pics/ranger.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "British luxury meets rugged capability. Command the road in absolute comfort and undeniable style."
  },

  "civic-type-r": {
    brand: "HONDA",
    name: "CIVIC TYPE R",
    year: "2023",
    category: "HATCHBACK",
    power: "315 hp",
    drive: "front-wheel drive",
    price: "$44,000",
    image: "pics/civic.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "A front-wheel-drive track weapon. Aggressive aero, a manual transmission, and pure driving engagement."
  },

  "challenger-rt": {
    brand: "DODGE",
    name: "CHALLENGER R/T",
    year: "2022",
    category: "MUSCLE",
    power: "375 hp",
    drive: "rear-wheel drive",
    price: "$40,000",
    image: "pics/challenge.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "Old-school American muscle. A roaring Hemi V8 wrapped in a retro-styled, unapologetically wide body."
  },

  "bmw-m4": {
    brand: "BMW",
    name: "M4",
    year: "2023",
    category: "COUPE",
    power: "503 hp",
    drive: "all-wheel drive",
    price: "$78,000",
    image: "pics/m4.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "Aggressive styling matched by brutal twin-turbo power. A true driver's coupe built for the Autobahn."
  },

  "audi-rs6": {
    brand: "AUDI",
    name: "RS6 AVANT",
    year: "2023",
    category: "WAGON",
    power: "591 hp",
    drive: "all-wheel drive",
    price: "$122,000",
    image: "pics/audi.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "The ultimate family supercar. A practical wagon body hiding a monstrous twin-turbo V8."
  },

  "ford-bronco": {
    brand: "FORD",
    name: "BRONCO",
    year: "2023",
    category: "SUV",
    power: "330 hp",
    drive: "four-wheel drive",
    price: "$48,000",
    image: "pics/ford.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "Built wild. A retro-inspired off-roader designed to conquer any trail you point it at."
  },

  "lambo-huracan": {
    brand: "LAMBORGHINI",
    name: "HURACÁN",
    year: "2022",
    category: "SUPERCAR",
    power: "631 hp",
    drive: "all-wheel drive",
    price: "$260,000",
    image: "pics/lambo.jpg",
    image2: "",
    video: "",
    model3d: "",
    longDesc: "Pure Italian theater. A screaming naturally aspirated V10 wrapped in sharp, aggressive bodywork."
  }

};