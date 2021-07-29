import companionPlants from './companion-data.js';

const tomato = {
    id: 'tomato',
    name: 'Tomato',
    image: 'tomato.jpg',
    icon: 'tomato-icon1.png',
    description: `Herbaceous annual in the Solanaceae latin family. 
    Grown for edible fruit. The plant produces yellow flowers. 
    These flowers develop into a round fruit that can come in a variety of colors. `,
    family: 'nightshade',
    space: 2,
    recommendations: 'trellis',
    companions: [
        companionPlants[0].name,
        companionPlants[1].name,
        companionPlants[3].name,
        companionPlants[2].name
    ] };
const cucumber = {
    id: 'cucumber',
    name: 'Cucumber',
    image: 'cucumber.jpg',
    icon: 'cucumber-icon.png',
    description: `Warm season, vining annual. Part of the Cucurbitaceae latin family.
    Produces yellow flowers that typically 
     into curved cylinder fruit although shapes may vary.`,
    family: 'gourd',
    space: 2,
    recommendations: 'trellis',
    companions: [
        companionPlants[0].name,
        companionPlants[6].name,
        companionPlants[8].name,
        companionPlants[4].name
    ]
};
const pepper = {
    id: 'pepper',
    name: 'Pepper',
    image: 'pepper.jpg',
    icon: 'pepper-icon.png',
    description: `Peppers come in a variety of shapes, sizes, and colors. 
    They are part of the Capisicum genus that is a sub-family of the Solanaceae latin family,
    commonly reffered to as nightshades. The vast variety of peppers encompasses a large scope of flavors.
    Peppers are perennials meaning they will grow back for several years given the proper care`,
    family: 'nightshade',
    space: 2,
    recommendations: 'stake',
    companions: [
        companionPlants[4].name,
        companionPlants[9].name,
        companionPlants[7].name,
        companionPlants[1].name
    ]
};
const corn = {
    id: 'corn',
    name: 'Corn',
    image: 'corn.jpg',
    icon: 'corn-icon.png',
    description: `Corn is an annual grass in the latin Paceae family. 
    It is vital to the global food system. The plant can grow up to 3m(9.84ft) tall 
    and is believed to have originated from Central America`,
    family: 'grass',
    space: 2,
    recommendations: 'hills',
    companions: [
        companionPlants[7].name,
        companionPlants[9].name,
        companionPlants[0].name,
        companionPlants[1].name
    ]
};
const berries = {
    id: 'berries',
    name: 'Berries',
    image: 'berries.jpg',
    icon: 'berries-icon.png',
    description: `Berries come in a vast variety of different fruit. 
    A berry is simply a fruit with seeds & pulp produced from the ovary of a single flower
    For our intents and purposes we'll be focusing on black, razz, blue, and strawberries`,
    family: 'heather',
    space: 2,
    recommendations: 'stake',
    companions: [
        companionPlants[3].name,
        companionPlants[0].name,
        companionPlants[1].name,
        companionPlants[5].name
    ]
};
const carrot = {
    id: 'carrot',
    name: 'Carrot',
    image: 'carrot.jpg',
    icon: 'carrot-icon.png',
    description: `Carrots are biennial meaning they occur every two years. 
    Most commonly carrots are grown for the root vegetable, however, 
    the stems and leafs also provide great nutritional value and can be added to salads or entrees`,
    family: 'apiaceae',
    space: 2,
    recommendations: 'till soil',
    companions: [
        companionPlants[0].name,
        companionPlants[3].name,
        companionPlants[1].name,
        companionPlants[2].name
    ]
};
const potato = {
    id: 'potato',
    name: 'Potato',
    image: 'potato.jpg',
    icon: 'potato-icon.png',
    description: `Potatos latin family is the Solanaceae, typically grown for edible tubers.
    The plant produces white or blue flowers and small berries. 
    It is grown for the root vegetable and not the berries it produces. Potatos come in a variety of colors and flavors.
    These are annual plants and will need to be replanted every growing season.`,
    family: 'solanaceae',
    space: 2,
    recommendations: 'till soil',
    companions: [
        companionPlants[0].name,
        companionPlants[3].name,
        companionPlants[1].name,
        companionPlants[2].name
    ]
};
const radish = {
    id: 'radish',
    name: 'Radish',
    image: 'radish.jpg',
    icon: 'radish-icon.png',
    description: `Radishes can be grown annualy or biennialy and are part of the Brassicaceae family. 
    The radish is grown for it's root, it will produce purple and pink flowers. 
    The radish root can be used for salads or cooked in stew/ with meat to add flavor and nutrients`,
    family: 'brassicaceae',
    space: 2,
    recommendations: 'till soil',
    companions: [
        companionPlants[0].name,
        companionPlants[3].name,
        companionPlants[2].name,
        companionPlants[4].name
    ]
};
const squash = {
    id: 'squash',
    name: 'Squash',
    image: 'squash.jpg',
    icon: 'squash-icon.png',
    description: `Squash are herbaceous and annual. 
    The flowers on squash are typically yellow or orange and the fruit produced can range from green, white, yellow, to orange
    The origin of squash is believed to be North & Central America`,
    family: 'cucurbita',
    space: 2,
    recommendations: 'trellis',
    companions: [
        companionPlants[0].name,
        companionPlants[3].name,
        companionPlants[1].name,
        companionPlants[2].name
    ]
};
const lettuce = {
    id: 'lettuce',
    name: 'Lettuce',
    image: 'lettuce.jpg',
    icon: 'lettuce-icon.png',
    description: `Lettuce can be both annual or biennial but is typically planted annualy. 
    There are many varieties of lettuce but a majority prefer similar conditions. Lettuce is often green or red in color.
    The plant prefers more shaded spaces and does not thrive when exposed to direct sunlight for too long.`,
    family: 'daisy',
    space: 2,
    recommendations: 'plant boxes',
    companions: [
        companionPlants[4].name,
        companionPlants[6].name,
        companionPlants[5].name,
        companionPlants[9].name
    ]
};

const plants = [
    tomato,
    cucumber,
    pepper,
    corn,
    berries,
    carrot,
    potato,
    radish,
    squash,
    lettuce
];

export default plants;