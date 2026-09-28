// ===================== CAR DATA =================
// One object = one car. Key must exactly match the data-id you put
// on that car's .car-card in index.html (e.g. data-id="mustang-gt").
//
// image      -> same photo already used on the main garage card
// image2     -> second/reveal-section photo for the detail page (add your own path)
// video      -> clip for the video section (add your own path)
// model3d    -> .gltf path for <model-viewer> (leave "" if you don't have one yet)
// longDesc   -> longer write-up for the detail page (data-desc on the card stays short)
// rental     -> daily rental price (USD)

const cars = {

  "mustang-gt": {
    brand: "FORD",
    name: "MUSTANG GT",
    year: "2023",
    category: "COUPE",
    power: "460 hp",
    drive: "rear-wheel drive",
    price: "$45,000",
    rental: "$149 / day",
    image: "pics/gt.jpg",
    video: "vids/gt.mp4",
    model3d: "3d/mustang/scene.gltf",
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
    rental: "$399 / day",
    image: "pics/porsche.jpg",
    video: "vids/Porsche 911_ Exterior _ Interior Design.(720P_HD).mp4",
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
    rental: "$65 / day",
    image: "pics/rav.jpg",
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
    rental: "$89 / day",
    image: "pics/model.jpg",
    video: "",
    model3d: "3d/tesla/scene.gltf",
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
    rental: "$449 / day",
    image: "pics/sclass.jpg",
    video: "vids/mercedes.mp4",
    model3d: "3d/mercedes/scene.gltf",
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
    rental: "$299 / day",
    image: "pics/ranger.jpg",
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
    rental: "$129 / day",
    image: "pics/civic.jpg",
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
    rental: "$139 / day",
    image: "pics/challenge.jpg",
    video: "vids/dodge.mp4",
    model3d: "3d/challenger/scene.gltf",
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
    rental: "$279 / day",
    image: "pics/m4.jpg",
    video: "vids/bmw.mp4",
    model3d: "3d/bmw/scene.gltf",
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
    rental: "$399 / day",
    image: "pics/audi.jpg",
    video: "vids/audi.mp4",
    model3d: "3d/audi/scene.gltf",
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
    rental: "$119 / day",
    image: "pics/ford.jpg",
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
    rental: "$1,299 / day",
    image: "pics/lambo.jpg",
    video: "vids/lambo.mp4",
    model3d: "3d/hurrican/scene.gltf",
    longDesc: "Pure Italian theater. A screaming naturally aspirated V10 wrapped in sharp, aggressive bodywork."
  }

};