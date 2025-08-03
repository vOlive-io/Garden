////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
callSavedData_cookies();
setInterval(makeSavedData_cookies, 1000);
setInterval(unlockSeed, 1000);
setInterval(createDropdown, 1000);


////////////////////////////////
///        VARIABLES         ///
////////////////////////////////

//Seeds array counts plants AND seeds in inventory
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <base value: dub>, <total planted: int>, <unlocked: bool>],
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>

var seeds = [
	["Start of seeds"],
	["Starter Seeds", [
		["1.1.1.1", "Wheat", "Grows into unprocessed flower, a great start to a small garden!", 5, 0, 1.00, 0, true, false, "Starter"],
		["1.1.1.2", "Grass", "Hard to take care of but once you get the hang of it, you\'ll be swimming in it!", 5, 0, 1.50, 0, true, false, "Starter"],
		["1.1.1.3", "Flowers", "Some random flowers you got at the store, you never know what kind of flowers they will grow....", 5, 0, 2.00, 0, true, false, "Starter"]
	]], 
	["Common Seeds", [
		["1.1.2.1", "Mint", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "Herb"],
		["1.1.2.2", "Corn", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.3", "Basil", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "Herb"],
		["1.1.2.4", "Cucumber", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.5", "Oats", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.6", "Carrot (Red)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.7", "Carrot (Orange)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.8", "Carrot (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.9", "Carrot (White)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.10", "Potato", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "]
		["1.1.2.11", "Carrot", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.12", "Zucchini", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.13", "Cabbage (Green)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.14", "Cabbage (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.15", "Celery", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.16", "Rice", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.17", "Daisy", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.18", "Asparagus", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.19", "Rose", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		["1.1.2.20", "Radish", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", "          "],
		
	]],
	["Uncommon Seeds", [
		["1.1.3.1", "Onion (White)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.2", "Onion (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.3", "Bell Pepper (Red)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.4", "Bell Pepper (Orange)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.5", "Bell Pepper (Yellow)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.6", "Bell Pepper (Green)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.7", "Bell Pepper (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.8", "Rhubarb", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.9", "Ivy", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.10", "Nutmeg", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.11", "Parsley", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.12", "Oyster Mushroom", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.13", "Thime", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.14", "Lavender", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.15", "Lettuce", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.16", "Green Bean", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.17", "Banana", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		["1.1.3.18", "Tremella Mesenterica Mushroom", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", "          "],
		
		
	]],
	["Rare Seeds", [
		["1.1.4.1", "Wasabi", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.2", "Saffron", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.3", "Green Grapes", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.4", "Elderberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.5", "Strawberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.6", "Blueberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.7", "Blackberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.8", "Raspberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.9", "Acai", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.10", "Cranberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.11", "Watermelon", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.12", "Honeydew", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.13", "Cantolope", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.14", "Camomile", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		["1.1.4.15", "Poppy", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", "          "],
		
	]],
	
	["Epic Seeds", [
		["1.1.5.1", "Red Apple Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.2", "Green Apple Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.3", "Black Diamond Apple Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.4", "Apple Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.5", "Maple Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.6", "Mango Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.7", "Cherry Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.8", "Peach Tree", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.9", "Corpse flower", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		["1.1.5.10", "Ruby Roman Grapes", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", "          "],
		
	]],
	["Mythic Seeds", [
		["1.1.6.1", "Bamboo", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", "          "],
		["1.1.6.2", "Black Bat Flower", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", "          "],
		["1.1.6.3", "Shenzhen Nongke Orchid", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", "          "],
		["1.1.6.4", "Pomegranate", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", "          "],
		["1.1.6.5", "Coconut", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", "          "]
	]]
];


var soils = [
	["1.2.1.1", "Soil Name", "Soil Description", 1, true, false],
	["1.2.1.2", "Soil Name", "Soil Description", 1.5, false, false],
	["1.2.1.3", "Soil Name", "Soil Description", 2, false, false]
];

//ACHEVMENTS
var achievements = [
	["2.1.1.1", "Getting Started", "Plant your first seed!", "ach_2.1.1.1", false, false],
	["2.1.1.2", "Humble Garden", "Plant 5 seeds!", "ach_2.1.1.2", false, false]
];
var slotNum = 4;

////////////////////////////////
///       GAME FRONT         ///
////////////////////////////////


function unlockSeed() {
	for (let i = 1; i < seeds.length; i++) {
		for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
			if (seeds[i][1][i3][7] == true && seeds[i][1][i3][8] == false) {
				const seedContainer = document.createElement("div");

				const seed_h1 = document.createElement("h1");
				const seed_h1_text = document.createTextNode(seeds[i][1][i3][1]);
				seed_h1.appendChild(seed_h1_text);

				const seed_p = document.createElement("p");
				const seed_p_text = document.createTextNode(seeds[i][1][i3][2]);
				seed_p.appendChild(seed_p_text);
				
				seedContainer.appendChild(seed_h1);
				seedContainer.appendChild(seed_p);
				const placement = "seed-" + seeds[i][1][i3][0];
				document.getElementById(placement).appendChild(seedContainer);
				seeds[i][1][i3][8] = true;
				document.getElementById(placement).classList.add('unlockedSeeds');
				document.getElementById(placement).classList.remove('lockedSeeds');
			}
		}
	}
}


function createDropdown() {
	const seedContainer = document.createElement("select");
	for (let i = 1; i < seeds.length; i++) {
		for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
			if (seeds[i][1][i3][7] == true) {
				const seed_option = document.createElement("option");
				const seed_option_text = document.createTextNode(seeds[i][1][i3][1] + " " + seeds[i][1][i3][3] + "x");
				seed_option.appendChild(seed_option_text);
				if (seeds[i][1][i3][3] == 0) {
					seed_option.disabled = true;
				}
				seedContainer.appendChild(seed_option);
			}
		}
	}
	seedContainer.id = "seed-list";
	document.getElementById("seed-list").replaceWith(seedContainer);
}
function createNewGardenSlot() {
	slotNum++;
	const newSlot = document.createElement("div");
	newSlot.id = "garden-slot-" + slotNum;
	const newButton = document.createElement("button");
	newButton.id = "slot-" + slotNum + "-button";
    	newButton.innerHTML = "Plant Here";
	newSlot.appendChild(newButton);
	document.getElementById("garden-slots").appendChild(newSlot);
}



function unlockTemplate() {
	const achContainer = document.createElement("li");

	const ach_h1 = document.createElement("h1");
	const ach_h1_text = document.createTextNode("Lemonaid");
	ach_h1.appendChild(ach_h1_text);

	const ach_p = document.createElement("p");
	const ach_p_text = document.createTextNode("yum");
	ach_p.appendChild(ach_p_text);

	achContainer.appendChild(ach_h1);
	achContainer.appendChild(ach_p);
	document.getElementById("myList").appendChild(achContainer);
}






////////////////////////////////
///         COOKIES          ///
////////////////////////////////



function makeSavedData_cookies() {
	const data = {
		//User Cookies
		//user: user,
		//username: username,
		//SEED COOKIES
		seeds: seeds,
	};
	localStorage.setItem('savedData', JSON.stringify(data));
}
function callSavedData_cookies() {
	//const
	savedData = JSON.parse(localStorage.getItem('savedData'));
	if (savedData) {
		//User Cookies
		//user = savedData.user || false;
		//username = savedData.username || "guest";
		//SEED COOKIES		
		seeds = savedData.seeds || seeds;
	}
}




