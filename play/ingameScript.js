callSavedData_cookies();
////////////////////////////////
///        VARIABLES         ///
////////////////////////////////
//Seeds array counts plants AND seeds in inventory
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],

var seasonNum = 0;
var selectedSeed = "wheat";
var mon = 0.00;

var slotNum = 4;
var gardenValue = 1.00;
var seedsUnlocked = 3;
var seedsHavested = 0;

var seedPackPrice = 5;
var commonPrice = 50;
var uncommonPrice = 500;
var rarePrice = 5000;
var epicPrice = 50000;
var mythicPrice = 100000;

var seedPackUp = 1.1;
var commonUp = 1.2;
var uncommonUp = 1.2;
var rareUp = 1.2;
var epicUp = 1.2;
var mythicUp = 1.5;


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
	["Common Seeds", [
		["1.1.1.1", "Wheat", "Grows into unprocessed flower, a great start to a small garden!", 5, 1, 3, 2.00, 0, true, false, "Starter", 3, 0],
		["1.1.1.2", "Grass", "Hard to take care of, but once you get the hang of it, you\'ll be swimming in it!", 5, 1, 3, 2.50, 0, true, false, "Starter", 0, 0],
		["1.1.1.3", "Corn", "Time for a BBQ, with some corn-on-the-COB!", 0, 1, 3, 3.00, 0, false, false, "Common", 0, 0],
		["1.1.1.4", "Potato", "P-O-T-A-T-O that spells POTATO!", 0, 1, 3, 3.00, 0, false, false, "Common", 0, 0],
		["1.1.1.5", "Zucchini", "A thick cucumber-looking vegetable, that can make some tasty muffins, look it up.", 0, 1, 3, 3.50, 0, false, false, "Common", 0, 0],
		["1.1.1.6", "Cabbage (Green)", "A filling vegetable, that could probably only last me a day", 0, 2, 3, 4.00, 0, false, false, "Common", 0, 0],
		["1.1.1.7", "Cabbage (Purple)", "I always have some hand on taco night!", 0, 2, 3, 4.00, 0, false, false, "Common", 0, 0],
		["1.1.1.8", "Celery", "They say that it takes more calories to digest than gained by eating it.... ", 0, 1, 3, 3.00, 0, false, false, "Common", 0, 0],
		["1.1.1.9", "Cucumber", "Try some with chilly pepper powder, it's very good.", 0, 1, 3, 2.00, 0, false, false, "Common", 0, 0],
		["1.1.1.10", "Mint", "A great and classic herb to grow, now don't let it get out of control.", 0, 1, 3, 3.00, 0, false, false, "Common", 1, 0],
		["1.1.1.11", "Fennel", "This reminds me of California trails, covered in fennel.", 0, 1, 3, 5.00, 0, false, false, "Common", 1, 0],
		["1.1.1.12", "Basil", "Now it's time for you to make some pesto!", 0, 1, 3, 5.00, 0, false, false, "Common", 1, 0],
		["1.1.1.13", "Carrot (Red)", "I never knew these were real until looking up different carrot varieties for this game.", 0, 1, 3, 4.00, 0, false, false, "Common", 2, 0],
		["1.1.1.14", "Carrot (Orange)", "Classic, never gets old..... until it does.", 0, 1, 3, 4.00, 0, false, false, "Common", 2, 0],
		["1.1.1.15", "Carrot (Purple)", "The coolest variety of a carrot ever!", 0, 1, 3, 4.00, 0, false, false, "Common", 2, 0],
		["1.1.1.16", "Carrot (White)", "This is a thing? What does it taste like, that's for you to find out!", 0, 1, 3, 4.00, 0, false, false, "Common", 2, 0],
		["1.1.1.17", "Radish", "If you pickle it, it tastes great with sushi.", 0, 1, 3, 6.00, 0, false, false, "Common", 2, 0],
		["1.1.1.18", "Oats", "A healthy replacement to cereal, but I doubt any of us care.", 0, 1, 3, 3.00, 0, false, false, "Common", 3, 0],
		["1.1.1.19", "Rice", "It might not look nice when harvested, but rest assured, when cooked or steamed right, you will get great food.", 0, 1, 3, 6.50, 0, false, false, "Common", 3, 0],
		["1.1.1.20", "Flowers", "Some random flowers you got at the store, you never know what kind of flowers they will grow....", 5, 1, 3, 2.00, 0, true, false, "Starter", 6, 0],
		["1.1.1.21", "Rose", "Praised for the looks and smell, but......  I don't smell anything, but they look beautiful", 0, 4, 3, 10.00, 0, false, false, "Common", 6, 0],
		["1.1.1.22", "Sunflower", "A pretty flower to start your garden growing journey. Looks pretty and has great seeds.", 0, 2, 3, 7.50, 0, false, false, "Common", 6, 0]
	]],
	["Uncommon Seeds", [
		["1.1.2.1", "Bell Pepper (Red)", "Not all spicy, and it's a good food to add color to your diet.", 0, 2, 3, 7.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.2", "Bell Pepper (Orange)", "A bell pepper is the fruit of a flowering plant, a cultivar of Capsicum annuum. While used as a vegetable in culinary.........", 0, 2, 3, 7.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.3", "Bell Pepper (Yellow)", "The rainbow of bell pepper goes on, yellow is the best tasting one. (In my opinion)", 0, 2, 3, 7.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.4", "Bell Pepper (Green)", "The 'hardest' of the bell peppers having a slightly thicker crunch.", 0, 2, 3, 7.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.5", "Bell Pepper (Purple)", "Great color on a dress, great color on some food! ", 0, 2, 3, 8.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.6", "Tremella Mesenterica Mushroom", "The classic 'witch' mushroom! WITCH! WITCH! WITCH!", 0, 1, 3, 10.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.7", "Rhubarb", "My mom makes great strawberry and rhubarb pie..... hint hint", 0, 2, 3, 8.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.8", "Lettuce", "Seed Description", 0, 1, 3, 5.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.9", "Oyster Mushroom", "Seed Description", 0, 0.5, 3, 5.00, 0, false, false, "Uncommon", 0, 0],
		["1.1.2.10", "Thime", "Seed Description", 0, 1, 3, 5.00, 0, false, false, "Uncommon", 1, 0],
		["1.1.2.11", "Lavender", "Seed Description", 0, 2, 3, 15.00, 0, false, false, "Uncommon", 1, 0],
		["1.1.2.12", "Nutmeg", "Seed Description", 0, 2, 3, 10.00, 0, false, false, "Uncommon", 1, 0],
		["1.1.2.13", "Parsley", "Seed Description", 0, 1, 3, 10.00, 0, false, false, "Uncommon", 1, 0],
		["1.1.2.14", "Green Bean", "Seed Description", 0, 3, 3, 12.00, 0, false, false, "Uncommon", 1, 0],
		["1.1.2.15", "Onion (White)", "Seed Description", 0, 3, 3, 9.00, 0, false, false, "Uncommon", 2, 0],
		["1.1.2.16", "Onion (Purple)", "Seed Description", 0, 3, 3, 9.00, 0, false, false, "Uncommon", 2, 0],
		["1.1.2.17", "Banana", "Seed Description", 0, 2, 3, 20.00, 0, false, false, "Uncommon", 5, 0],
		["1.1.2.18", "Ivy", "Seed Description", 0, 2, 3, 10.00, 0, false, false, "Uncommon", 6, 0]
	]],
	["Rare Seeds", [
		["1.1.3.1", "Saffron", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 1, 0],
		["1.1.3.2", "Camomile", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 1, 0],
		["1.1.3.3", "Wasabi", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 2, 0],
		["1.1.3.4", "Green Grapes", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.5", "Elderberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.6", "Strawberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.7", "Blueberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.8", "Blackberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.9", "Raspberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.10", "Acai", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.11", "Cranberry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.12", "Watermelon", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.13", "Honeydew", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.14", "Cantolope", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 4, 0],
		["1.1.3.15", "Poppy", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Rare", 6, 0]
	]],
	["Epic Seeds", [
		["1.1.4.1", "Ruby Roman Grapes", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 4, 0],
		["1.1.4.1", "Red Apple", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.2", "Green Apple", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.3", "Black Diamond Apple", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.4", "Apple", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.5", "Maple", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.6", "Mango", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.7", "Cherry", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.8", "Peach", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0],
		["1.1.4.9", "Corpse Flower", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Epic", 6, 0],
		["1.1.4.10", "Coconut", "While often referred to as a nut in culinary contexts, it is not a nut. In contrast, the FDA classifies coconut as a tree nut for food allergen labeling purposes. But scientifically speaking, it is a fruit, specifically a drupe, which is a type of fruit with a shell covering surrounding a seed. Which begs the question, where is the coconut seed?", 0, 0, 3, 0.00, 0, false, false, "Epic", 5, 0]
	]],
	["Mythic Seeds", [
		["1.1.5.1", "King Coconut", "Firey red, pationate and powerful are the perfect words to describe the King Coconut (or me, you could say both). Primarily found in Sri Lanka, a beautiful place in South Asia, they make a name for themselves with their refreshing taste.", 0, 0, 3, 0.00, 0, false, false, "Mythic", 4, 0, "#f5bc42"],
		["1.1.5.2", "Pomegranate", "My personal favorite fruit to eat, my personal least favorite to clean up. Pomegranates have tons of seeds and in various cultures, they often represent fertility, abundance, and prosperity.", 0, 0, 3, 0.00, 0, false, false, "Mythic", 4, 0, "#9c0034"],
		["1.1.5.3", "Bamboo", "Found primarily in warm and moist tropical and temperate climates bamboo is a strong, green, tall, delicious (to pandas) and majestic plant. It covers a total of 0.38% of the earth. ", 0, 0, 3, 0.00, 0, false, false, "Mythic", 5, 0, "#c1df51"],
		["1.1.5.4", "Moonflower", "Also known as the tropical white morning-glory, grown, this stunning flower grows annually, depending on the region.", 0, 0, 3, 0.00, 0, false, false, "Mythic", 5, 0, "#d395ff"],
		["1.1.5.5", "Shenzhen Nongke Orchid", "Coming in hot with world fame, and an auction price higher than my salary for ten years, this orchid is renowned for its beautiful shape, stunning colors, and the fact that it only blooms once every few years.", 0, 0, 3, 0.00, 0, false, false, "Mythic", 6, 0, "#ebffc7"],
		["1.1.5.6", "Black Bat Flower", "This flower bears a stunning resemblance to a bat. The black bat flower is considered poisonous, to pets, and humans, and everything, so, don't eat it.", 0, 0, 3, 0.00, 0, false, false, "Mythic", 6, 0, "#785691"]
	]],
	["Alchemy Seeds", [
		["1.1.6.1", "Romor Vine", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Alchemy", 4, 0],
		["1.1.6.2", "Soulbloom Lily", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Alchemy", 4, 1],
		["1.1.6.3", "Tree of Eternal Truths", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Alchemy", 5, 0],
		["1.1.6.4", "Queen Orcid", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Alchemy", 5, 0],
		["1.1.6.5", "Sherical Hexflower", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Alchemy", 6, 3],
	]],
	["Tools Seeds/Soils", [
		["1.1.7.1", "Water Bed", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Tool", 4, 0],
		["1.1.7.2", "Soil Bed", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Tool", 4, 1],
		["1.1.7.3", "", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Tool", 5, 0],
		["1.1.7.4", "", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Tool", 5, 0],
		["1.1.7.5", "", "Seed Description", 0, 0, 3, 0.00, 0, false, false, "Tool", 6, 0]
	]]
];




//ACHEVMENTS
var achievements = [
	["Start of Achevments", ["Achievement Types", [
	 [1, "Seeds Planted", 15],
	 [2, "Seeds Unlocked", 0],
	 [2, "Achievement Type", 0],
	 [2, "Achievement Type", 0]
	]]],
	["Seeds Planted", [
		["2.1.1.1", "Getting Started", "Plant your first seed!", "Achievement Description", false, false],
		["2.1.1.2", "Microsopic Garden", "Plant 5 seeds!", "Achievement Description",false, false],
		["2.1.1.3", "Tiny Garden", "Plant 10 seeds!", "Achievement Description",false, false],
		["2.1.1.4", "Small Garden", "Plant 25 seeds!", "Achievement Description",false, false],
		["2.1.1.5", "Humble Garden", "Plant 50 seeds!", "Achievement Description",false, false],
		["2.1.1.6", "Average Garden", "Plant 100 seeds!", "Achievement Description",false, false],
		["2.1.1.7", "Mediocer Garden", "Plant 250 seeds!", "Achievement Description",false, false],
		["2.1.1.8", "Big Garden", "Plant 500 seeds!", "Achievement Description",false, false],
		["2.1.1.9", "Large Garden", "Plant 1,000 seeds!", "Achievement Description",false, false],
		["2.1.1.10", "Huge Garden", "Plant 2,500 seeds!", "Achievement Description",false, false],
		["2.1.1.11", "Giant Garden", "Plant 5,000 seeds!", "Achievement Description",false, false],
		["2.1.1.12", "Massive Garden", "Plant 10,000 seeds!", "Achievement Description",false, false],
		["2.1.1.13", "Humongus Garden", "Plant 25,000 seeds!", "Achievement Description",false, false],
		["2.1.1.14", "Enormous Garden", "Plant 50,000 seeds!", "Achievement Description",false, false],
		["2.1.1.15", "Divine Garden", "Plant 100,000 seeds!", "Achievement Description",false, false]
	]],
	["Seeds Unlocked", [
		["2.1.2.1", "Achievement Name", "Achievement Criteria", "Achievement Description",false, false],
		["2.1.2.2", "Achievement Name", "Achievement Criteria", "Achievement Description",false, false],
	 	["2.1.2.3", "Achievement Name", "Achievement Criteria", "Achievement Description",false, false]
	]]
];

////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
document.getElementById("mon-spot").innerHTML = "You have " + mon + "$";
document.getElementById("value-spot").innerHTML = "Garden Value: " + gardenValue + "x";
unlockSeed();
refreshDropdown();
setInterval(makeSavedData_cookies, 1000);
setInterval(refreshVitals, 1000);
setInterval(changeSeason, 15000);
//setInterval(refreshDropdown, 1000);
document.getElementById('garden-slots').addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') { 
		const gardenBedLocation = event.target; 
		console.log("Button ID:", gardenBedLocation.id);
		plantSeed(gardenBedLocation);
	}
});

////////////////////////////////
///       GAME FRONT         ///
////////////////////////////////
function changeSeason() {
	let seasonColors = ["#c2f7ab", "#ffe066","#ffc58f","#b5f1ff"];
	let seasonNames = ["Spring", "Summer", "Autumn", "Winter"];
	seasonNum = (seasonNum + 1) % seasonColors.length; 

	let garden = document.getElementById("gardenUI");
	let label = document.getElementById("seasonName");
	let newColor = seasonColors[seasonNum];
	garden.style.backgroundColor = newColor;
	seasonName.innerHTML = seasonNames[seasonNum];
}
function unlockSeed() {
	const slots = document.createElement("div");
	slots.id = "seed-slots";
	document.getElementById("seed-slots").replaceWith(slots);
	for (let i = 1; i < seeds.length; i++) {
		for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
			if (seeds[i][1][i3][8] == true) {
				
				const seedContainer = document.createElement("div");

				const seed_h1 = document.createElement("h1");
				const seed_h1_text = document.createTextNode(seeds[i][1][i3][1] + " (" + seeds[i][1][i3][3] + "x)");
				seed_h1.appendChild(seed_h1_text);
				seasonNameInput = "winter";
				if (seeds[i][1][i3][5] == 2) {seasonNameInput = "autumn";}
				if (seeds[i][1][i3][5] == 1) {seasonNameInput = "summer";}
				if (seeds[i][1][i3][5] == 0) {seasonNameInput = "spring";}
				const seed_br = document.createElement("br");
				const seed_p = document.createElement("p");
				const p_part_1 = "Grows slower in " + seasonNameInput + ".";
				const p_part_2 = "Grows for " + (seeds[i][1][i3][6]*gardenValue) + "$" + " (" + seeds[i][1][i3][6] + " * garden value)"; 
				const p_part_3 = "Takes " + seeds[i][1][i3][4] + " season(s) to grow"; 
				const seed_p_text = document.createTextNode(seeds[i][1][i3][2]);
				const seed_p_text_1 = document.createTextNode(p_part_1);
				const seed_p_text_2 = document.createTextNode(p_part_2);
				const seed_p_text_3 = document.createTextNode(p_part_3);
				seed_p.appendChild(seed_p_text);
				seed_p.appendChild(seed_br);
				seed_p.appendChild(seed_p_text_1);
				seed_p.appendChild(seed_br);
				seed_p.appendChild(seed_p_text_2);
				seed_p.appendChild(seed_br);
				seed_p.appendChild(seed_p_text_3);
				
				
				seedContainer.appendChild(seed_h1);
				seedContainer.appendChild(seed_p);
				const placement = "seed-" + seeds[i][1][i3][0];
				seedContainer.id = placement;
				document.getElementById("seed-slots").appendChild(seedContainer);
				seeds[i][1][i3][9] = true;
				document.getElementById(placement).classList.add('unlockedSeeds');
				if (seeds[i][1][i3][10] == "Mythic") {
					document.getElementById(placement).style.background = seeds[i][1][i3][13];
					document.getElementById(placement).style.border = "#000000 groove 10px";
				} else { 
					document.getElementById(placement).style.background = "#fff3d6";
					document.getElementById(placement).style.border = "#5e502d groove 10px";
				}
				document.getElementById(placement).style.width = "80%";
				document.getElementById(placement).style.paddingLeft = "5%";
				document.getElementById(placement).style.paddingRight = "5%";
			}
		}
	}
}
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],
function refreshDropdown() {
	const seedContainer = document.createElement("select");
	for (let i = 1; i < seeds.length; i++) {
		const seed_option = document.createElement("option");
		const seed_option_text = document.createTextNode("---" + seeds[i][1][3][10] + "---");
		seed_option.disabled = true;
		seed_option.appendChild(seed_option_text);
		seedContainer.appendChild(seed_option);
		for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
			if (seeds[i][1][i3][8] == true) {
				const seed_option = document.createElement("option");
				const seed_option_text = document.createTextNode(seeds[i][1][i3][1]); // + " " + seeds[i][1][i3][3] + "x"
				seed_option.appendChild(seed_option_text);
				seedContainer.appendChild(seed_option);
			}
		}
	}
	seedContainer.id = "seed-list";
	document.getElementById("seed-list").replaceWith(seedContainer);
}
function refreshVitals() {
	document.getElementById("mon-spot").innerHTML = "You have " + mon + "$";
	document.getElementById("value-spot").innerHTML = "Garden Value: " + gardenValue + "x";
	
	if (commonPrice == 0) {document.getElementById("common-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("common-unlock-pack-price").innerHTML = commonPrice + "$";}
	
	if (uncommonPrice == 0) {document.getElementById("uncommon-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("uncommon-unlock-pack-price").innerHTML = uncommonPrice + "$";}
	
	if (rarePrice == 0) {document.getElementById("rare-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("rare-unlock-pack-price").innerHTML = rarePrice + "$";}
	
	if (epicPrice == 0) {document.getElementById("epic-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("epic-unlock-pack-price").innerHTML = epicPrice + "$";}
	
	if (mythicPrice == 0) {document.getElementById("mythic-unlock-pack-price").innerHTML = "SOLD OUT!";} 
	else {document.getElementById("mythic-unlock-pack-price").innerHTML = mythicPrice + "$";}
	
	document.getElementById("seed-pack-price").innerHTML = seedPackPrice + "$";
	unlockSeed();
	findSeed();
	
}
function createNewGardenSlot() {
	slotNum++;
	const newSlot = document.createElement("div");
	newSlot.id = "garden-slot-" + slotNum;
	const newButton = document.createElement("button");
	newButton.id = "garden-slot-" + slotNum + "-button";
	const newButtonText = document.createElement("p");
	newButtonText.id = "garden-slot-" + slotNum + "-button-text";
    newButton.innerHTML = "Plant Here";
	newSlot.appendChild(newButton);
	newSlot.appendChild(newButtonText);
	document.getElementById("garden-slots").appendChild(newSlot);
	gardenValue = gardenValue + 0.5;
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
	let seedSelect = document.getElementById("seed-list");
	const seedName = seedSelect.options[seedSelect.selectedIndex].text.toLowerCase();	
	const allIndividualSeeds = seeds.slice(1).flatMap(categoryEntry => categoryEntry[1]);	
	selectedSeed = allIndividualSeeds.find(seed => {
		return Array.isArray(seed) && seed[1].toLowerCase() === seedName.toLowerCase();
	});
	if (selectedSeed) {
    		//console.log(selectedSeed);
			document.getElementById("seed-num").innerHTML = "You have " + selectedSeed[3] + "x seeds left";
	} else {
	    console.log("shit");
	}
}
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],
function plantSeed(gardenBedLocation) {
	let bedData = [document.getElementById(([gardenBedLocation.id.substr(0, gardenBedLocation.id.length-7)])), document.getElementById(gardenBedLocation.id), document.getElementById(gardenBedLocation.id + "-text")];
	findSeed();
	if (selectedSeed[3] > 0) {
		selectedSeed[3]--;
		bedData[2].innerHTML = selectedSeed[1] + " is growing";
		bedData[1].style.display = "none";
		refreshVitals();
		if (seasonNum == selectedSeed[5]) {
			bedData[0].style.border = "10px red groove";
			setTimeout(harvest, 15000*(selectedSeed[4]+1), selectedSeed, bedData);
		} else {
			bedData[0].style.border = "10px green groove";
			setTimeout(harvest, 15000*selectedSeed[4], selectedSeed, bedData);
		}
	} else {
		makeAlert(1);
	}
}
function harvest(seed, bedData) {
	bedData[1].style.display = "block";
	bedData[2].innerHTML = "";
	bedData[0].style.border = "10px white groove";
	seed[7]++;
	mon = mon + (seed[6]*gardenValue);
	seedsHavested++;
	refreshVitals();
}
function buySeed(pack) {
	if(pack == 0) {	
		if (mon >= seedPackPrice) {
			const allIndividualSeeds = seeds.slice(1).flatMap(categoryEntry => categoryEntry[1]);	
			let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
			checkGoodPull(unlockSeed, pack);		
		} else {makeAlert(2);}
	}
	if(pack == 1) {	
		if (commonPrice == 0) {
			makeAlert(4);
		} else {
			if (mon >= commonPrice) {
				const allIndividualSeeds = seeds[1][1];
				let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
				checkGoodPull(unlockSeed, pack);		
			} else {makeAlert(2);}
		}
	}
	if(pack == 2) {	
		if (uncommonPrice == 0) {
			makeAlert(4);
		} else {
			if (mon >= uncommonPrice) {
				const allIndividualSeeds = seeds[2][1];
				let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
				checkGoodPull(unlockSeed, pack);		
			} else {makeAlert(2);}
		}
	}
	if(pack == 3) {	
		if (rarePrice == 0) {
			makeAlert(4);
		} else {
			if (mon >= rarePrice) {
				const allIndividualSeeds = seeds[3][1];
				let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
				checkGoodPull(unlockSeed, pack);		
			} else {makeAlert(2);}
		}
	}
	if(pack == 4) {	
		if (epicPrice == 0) {
			makeAlert(4);
		} else {
			if (mon >= epicPrice) {
				const allIndividualSeeds = seeds[4][1];
				let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
				checkGoodPull(unlockSeed, pack);		
			} else {makeAlert(2);}
		}
	}
	if(pack == 5) {	
		if (mythicPrice == 0) {
			makeAlert(4);
		} else {
			if (mon >= mythicPrice) {
				const allIndividualSeeds = seeds[5][1];
				let unlockSeed = allIndividualSeeds[Math.floor(Math.random() * allIndividualSeeds.length)];
				checkGoodPull(unlockSeed, pack);		
			} else {makeAlert(2);}
		}
	}
}

function checkGoodPull(unlockSeed, pack) {
	if(pack == 0) {
		if (unlockSeed[8] == true) {
				unlockSeed[3] = unlockSeed[3] + 10;
				mon = mon - seedPackPrice;
				seedPackPrice = Math.round(seedPackPrice * seedPackUp);
				refreshVitals();
		} else {buySeed(pack);}
	}
	if(pack == 1) {
		if (unlockSeed[8] == false) {
				unlockSeed[8] = true;
				unlockSeed[3] = unlockSeed[3] + 5;
				mon = mon - commonPrice;
				commonPrice = Math.round(commonPrice * commonUp);
				if (commonPrice == 1597) {
					commonPrice = 0;
				}
				refreshVitals();
		} else {buySeed(pack);}
	}
	if(pack == 2) {
		if (unlockSeed[8] == false) {
				unlockSeed[8] = true;
				unlockSeed[3] = unlockSeed[3] + 5;
				mon = mon - uncommonPrice;
				uncommonPrice = Math.round(uncommonPrice * uncommonUp);
				if (uncommonPrice == 13313) {
					uncommonPrice = 0;
				}
				refreshVitals();
		} else {buySeed(pack);}
	}
	if(pack == 3) {
		if (unlockSeed[8] == false) {
				unlockSeed[8] = true;
				unlockSeed[3] = unlockSeed[3] + 5;
				mon = mon - rarePrice;
				rarePrice = Math.round(rarePrice * rareUp);
				if (rarePrice == 77035) {
					rarePrice = 0;
				}
				refreshVitals();
		} else {buySeed(pack);}
	}
	if(pack == 4) {
		if (unlockSeed[8] == false) {
				unlockSeed[8] = true;
				unlockSeed[3] = unlockSeed[3] + 5;
				mon = mon - epicPrice;
				epicPrice = Math.round(epicPrice * epicUp);
				if (epicPrice == 371504) {
					epicPrice = 0;
				}
				refreshVitals();
		} else {buySeed(pack);}
	}
	if(pack == 5) {
		if (unlockSeed[8] == false) {
				unlockSeed[8] = true;
				unlockSeed[3] = unlockSeed[3] + 5;
				mon = mon - mythicPrice;
				mythicPrice = Math.round(mythicPrice * mythicUp);
				if (mythicPrice == 1139063) {
					mythicPrice = 0;
				}
				refreshVitals();
		} else {buySeed(pack);}
	}
}
function makeAlert(alertCode) {
	if (alertCode == 0) {
		document.getElementById("alert").style.display = "none";
		document.getElementById("alert-h").innerHTML = "No Alert Yet!";
		document.getElementById("alert-p").innerHTML = "This means nothing bad has happened yet or no errors have been triggered! This is a good sign.";
	}
	if (alertCode == 1) {
		document.getElementById("alert-h").innerHTML = "Not Enough Seeds!";
		document.getElementById("alert-p").innerHTML = "You do not have enough " + selectedSeed[1] + " seeds in your inventory! If you want more, buy them in the store.";
		document.getElementById("alert").style.display = "block";
	} 
	if (alertCode == 2) {
		document.getElementById("alert-h").innerHTML = "Not Enough Money!";
		document.getElementById("alert-p").innerHTML = "You dont have enough money! If you want more, try planting seeds in the garden.";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 3) {
		document.getElementById("alert-h").innerHTML = "Wrong type of bed!";
		document.getElementById("alert-p").innerHTML = "This is the wrong type of bed, try plating in a diffrent bed, or if you dont own any of the right kinds of beds then you may have to restart....";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 4) {
		document.getElementById("alert-h").innerHTML = "Sold Out!";
		document.getElementById("alert-p").innerHTML = "This pack is sold out! You cannot buy anymore from this pack, try buying some other seeds instead.";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 4) {}
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


