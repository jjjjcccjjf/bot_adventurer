'use strict'

let objects = [];
let items = [];
let monsters = [];
let npcs = [];
let actions = [];
let locations = []

locations = [
	{ 
		name: "room", 
		descriptions: ["dim", "brightly lit", "menacing", "dangerous", "normal", "common", "damp", "relatively safe", "foggy", "misty", "clear", "bright", "fine", "pretty regular", "eerie", "creepy", "dark", "safe", "creaking", "alright", "funny", "pretty normal", "normal", "normal", "normal", "normal", "normal"] 
	}
];

actions = [
	{ 
		name: "movement_between_rooms", 
		descriptions: ["proceeded", "entered", "moved", "went", "climbed", "ran", "walked", "strolled"] 
	}
	// ,
	// { 
	// 	name: "wait", 
	// 	descriptions: ["waited", "stayed", "stayed put", "did nothing"] 
	// }
];

let resources = {
	locations: locations,
	objects: objects,
	items: items,
	monsters: monsters,
	npcs: npcs,
	actions: actions
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

	let phrase = "you did nothing.";

	switch(action.name) {
		case 'movement_between_rooms':
		let action_p = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		let location_p = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		phrase = generateMovementPhrase(action_p, location_p)
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
	return "you " + a + " to a " + l + "."
}


exports.generate = function () {
  return dispatch(resources)
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