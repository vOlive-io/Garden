////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
var seedSelect = document.getElementById("seed-list");
callSavedData_cookies();
setInterval(makeSavedData_cookies, 1000);
setInterval(unlockSeed, 1000);
setInterval(changeSeason, 15000);
mySelect.addEventListener('change', (event) => {
	findSeed();
});
//setInterval(createDropdown, 1000);


////////////////////////////////
///        VARIABLES         ///
////////////////////////////////

//Seeds array counts plants AND seeds in inventory
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <base value: dub>, <total planted: int>, <unlocked: bool>],
var seasonNum = 0;
var selectedSeed = "wheat";

var seeds = [
	["Start of seeds", ["Seed Types", [
		[0, "Garden Produce", 0],
		[1, "Herbs & Spices", 0],
		[2, "Roots & Bulbs", 0],
		[3, "Grains", 0],
		[4, "Berries, Fruits & Nuts", 0],
		[5, "Trees", 0],
		[6, "Flowers", 0]
	]]],
	["Starter Seeds", [
		["1.1.1.1", "Wheat", "Grows into unprocessed flower, a great start to a small garden!", 5, 0, 1.00, 0, true, false, "Starter"],
		["1.1.1.2", "Grass", "Hard to take care of but once you get the hang of it, you\'ll be swimming in it!", 5, 0, 1.50, 0, true, false, "Starter"],
		["1.1.1.3", "Flowers", "Some random flowers you got at the store, you never know what kind of flowers they will grow....", 5, 0, 2.00, 0, true, false, "Starter"]
	]], 
	["Common Seeds", [
		["1.1.2.1", "Corn", "Time for a BBQ, with some corn-on-the-COB!", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.2", "Potato", "P-O-T-A-T-O that spells POTATO!", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.3", "Zucchini", "A ", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.4", "Cabbage (Green)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.5", "Cabbage (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.6", "Celery", "They say that it takes more calories to digest than gained by eating it.... ", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.8", "Cucumber", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 0],
		["1.1.2.9", "Mint", "A great and classic herb to grow, now don't let it get out of control.", 0, 0, 0.00, 0, false, false, "Common", 1],
		["1.1.2.10", "Fennel", "This reminds me of California trails, covered in dill fennel.", 0, 0, 0.00, 0, false, false, "Common", 1],
		["1.1.2.11", "Basil", "Now it times for you to make some pesto!", 0, 0, 0.00, 0, false, false, "Common", 1],
		["1.1.2.12", "Carrot (Red)", "I never knew these were real until looking up different carrot varieties for this game.", 0, 0, 0.00, 0, false, false, "Common", 2],
		["1.1.2.13", "Carrot (Orange)", "Classic, never gets old..... until it does.", 0, 0, 0.00, 0, false, false, "Common", 2],
		["1.1.2.14", "Carrot (Purple)", "The coolest variety of a carrot ever!", 0, 0, 0.00, 0, false, false, "Common", 2],
		["1.1.2.15", "Carrot (White)", "This is a thing? What does it taste like, that's for you to find out!", 0, 0, 0.00, 0, false, false, "Common", 2],
		["1.1.2.16", "Radish", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 2],
		["1.1.2.17", "Oats", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 3],
		["1.1.2.7", "Rice", "It might not look nice when harvested, but rest assured, when cooked or steamed right, you will get great food.", 0, 0, 0.00, 0, false, false, "Common", 3],
		["1.1.2.19", "Rose", "Praised for the looks and smell, but......  I don't smell anything, but they look beautiful", 0, 0, 0.00, 0, false, false, "Common", 6],
		["1.1.2.20", "Daisy", "Seed Description", 0, 0, 0.00, 0, false, false, "Common", 6]

	
	]],
	["Uncommon Seeds", [
		["1.1.3.1", "Bell Pepper (Red)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.2", "Tremella Mesenterica Mushroom", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.3", "Rhubarb", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.4", "Bell Pepper (Orange)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.5", "Bell Pepper (Yellow)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.6", "Bell Pepper (Green)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.7", "Lettuce", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.8", "Bell Pepper (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.9", "Oyster Mushroom", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 0],
		["1.1.3.10", "Thime", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 1],
		["1.1.3.11", "Lavender", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 1],
		["1.1.3.12", "Nutmeg", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 1],
		["1.1.3.13", "Parsley", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 1],
		["1.1.3.14", "Green Bean", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 1],
		["1.1.3.15", "Onion (White)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 2],
		["1.1.3.16", "Onion (Purple)", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 2],
		["1.1.3.17", "Banana", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 5],
		["1.1.3.18", "Ivy", "Seed Description", 0, 0, 0.00, 0, false, false, "Uncommon", 6],

		
	]],
	["Rare Seeds", [
		["1.1.4.1", "Saffron", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 1],
		["1.1.4.2", "Camomile", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 1],
		["1.1.4.3", "Wasabi", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 2],
		["1.1.4.4", "Green Grapes", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.5", "Elderberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.6", "Strawberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.7", "Blueberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.8", "Blackberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.9", "Raspberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.10", "Acai", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.11", "Cranberry", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.12", "Watermelon", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.13", "Honeydew", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.14", "Cantolope", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 4],
		["1.1.4.15", "Poppy", "Seed Description", 0, 0, 0.00, 0, false, false, "Rare", 6]
		
	]],
	["Epic Seeds", [
		["1.1.5.10", "Ruby Roman Grapes", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 4],
		["1.1.5.1", "Red Apple", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.2", "Green Apple", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.3", "Black Diamond Apple", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.4", "Apple", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.5", "Maple", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.6", "Mango", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.7", "Cherry", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.8", "Peach", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 5],
		["1.1.5.9", "Corpse Flower", "Seed Description", 0, 0, 0.00, 0, false, false, "Epic", 6],
	]],
	["Mythic Seeds", [
		["1.1.6.4", "Pomegranate", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", 4],
		["1.1.6.1", "Bamboo", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", 5],
		["1.1.6.5", "Coconut", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", 5],
		["1.1.6.3", "Shenzhen Nongke Orchid", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", 6],
		["1.1.6.2", "Black Bat Flower", "Seed Description", 0, 0, 0.00, 0, false, false, "Mythic", 6]
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

function changeSeason() {
	let seasonColors = ["#c2f7ab", "#ffe066","#ffc58f","#b5f1ff"];
	let seasonNames = ["Spring", "Summer", "Autumn", "Winter"];
	let garden = document.getElementById("gardenUI");
	let label = document.getElementById("seasonName");
	let newColor = seasonColors[seasonNum];
	garden.style.backgroundColor = newColor;
	seasonName.innerHTML = seasonNames[seasonNum];
	seasonNum = (seasonNum + 1) % seasonColors.length; 
}

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


function findSeed() {
	const seedName = seedSelect.options[seedSelect.selectedIndex].text.toLowerCase();	
	const allIndividualSeeds = seeds.slice(1).flatMap(categoryEntry => categoryEntry[1]);	
	selectedSeed = allIndividualSeeds.find(seed => {
		return Array.isArray(seed) && seed[1].toLowerCase() === seedName.toLowerCase();
	});
	if (selectedSeed) {
    		console.log("Selected Seed Data:", selectedSeed);
	} else {
	    console.log("shit");
	}
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

changeSeason();


