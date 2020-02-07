'use strict'

let objects = [];
let items = [];
let monsters = [];
let npcs = [];
let actions = [];
let locations = []
let ambient = []

locations = [
	{ 
		name: "room", 
		descriptions: ["dim", "brightly lit", "menacing", "dangerous", "normal", "common", "damp", "relatively safe", "foggy", "misty", "clear", "bright", "fine", "pretty regular", "eerie", "creepy", "dark", "safe", "creaking", "alright", "funny", "pretty normal", "normal", "normal", "normal", "normal", "normal"] 
	},
	{ 
		name: "cliff", 
		descriptions: ["steep", "high", "dark", "foreboding", "scary", "mesmerizing", "stunning"] 
	},
];

actions = [
	{ 
		name: "movement_between_rooms", 
		descriptions: ["proceeded", "entered", "moved", "went", "climbed", "ran", "walked", "strolled"] 
	},
	{ 
		name: "wait", 
		descriptions: ["waited", "stayed", "stayed put", "marvelled the scenery", "inhaled a lungful of air"] 
	},
	// { 
	// 	name: "did_nothing", 
	// 	descriptions: [] 
	// },
	// { 
	// 	name: "feel_possesive", 
	// 	descriptions: ["eyelids felt heavy"] 
	// },
	// { 
	// 	name: "feel", 
	// 	descriptions: ["felt cold", "shivered", "felt comfortable", "felt energized", "felt lonely", "felt fine", "felt a shiver ran down your spine", "felt at ease", "felt well-rested"] 
	// }
];

ambient = [
	{
		name: "smell", 
		descriptions: ["the smell of fish", "a whiff of blood", "the smell of blood", "the stench of death", "the aroma of flowers", "the smell of coffee", "layers of dust", "the smell of the sea"],
		helpers: ["wafted through your senses", "pervaded your nostrils", "came from somewhere", "was absent", "was vaguely present"]
	}
]


let resources = {
	locations: locations,
	objects: objects,
	items: items,
	monsters: monsters,
	npcs: npcs,
	actions: actions,
	ambient: ambient
}

/**
 * dispatch action
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function dispatch(resources) {
	let actions = resources.actions
	let locations = resources.locations

	let action = actions[Math.floor(Math.random() * actions.length)] // draw random action
	let location = locations[Math.floor(Math.random() * locations.length)] // draw random location

	let phrase = ""

	switch(action.name) {

		case 'movement_between_rooms':
		let action_mbr = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		let location_mbr = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		phrase = generateMovementPhrase(action_mbr, location_mbr)
		break

        case 'wait':
		let action_w = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		let location_w = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		phrase = generateWaitPhrase(action_w, location_w)
		break

		case 'did_nothing':
		default:
		phrase = "you did nothing."
		break
	}

	return phrase
}

/**
 * [generateMovementPhrase description]
 * @param  {[type]} a action
 * @param  {[type]} l location
 * @return {[type]}   [description]
 */
function generateMovementPhrase(a, l) {
	return "you " + a + " to the " + l + "."
}

function generateWaitPhrase(a, l) {
	return "you " + a + " at the " + l + "."
}

function generateAmbient(ambient) {
	let ambient_phrase = ""
	switch (ambient.name) {
		case 'smell':
		ambient_phrase = ambient.descriptions[Math.floor(Math.random() * ambient.descriptions.length)] + " " + ambient.helpers[Math.floor(Math.random() * ambient.helpers.length)]
	}

	return ambient_phrase
}

function randomAmbient(phrase, resources) {
	let ambient = resources.ambient[Math.floor(Math.random() * resources.ambient.length)]

	let ambient_array = [
		phrase,
		phrase,
		phrase,
		generateAmbient(ambient) + ". " + phrase,
		phrase + " " + generateAmbient(ambient) + ".",
		phrase,
		phrase,
	]
	return ambient_array[Math.floor(Math.random() * ambient_array.length)]
}

exports.generate = function () {
   let phrase = dispatch(resources)
   return randomAmbient(phrase, resources)
}


/*
# Adventure Bot

A text-based rpg adventure twitter bot

## Resources
* Locations
    * Rooms
    * Floors
* Objects
    * Furniture
* Items
    * Weapons
    * Consumables
* Monsters
    * Common
* NPCs
    * Travelers
**/