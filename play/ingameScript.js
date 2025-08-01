////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
callSavedData_cookies();
setInterval(makeSavedData_cookies, 1000);

////////////////////////////////
///        VARIABLES         ///
////////////////////////////////

//Seeds array counts plants AND seeds in inventory
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <plants owned: int>, <base value: dub>, <total planted: int>, <unlocked: bool>],
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>

var seeds = [
	["Start of seeds"],
	["Starter Seeds", [
		["1.1.1.1", "Wheat", "Grows into unprocessed flower, a great start to a small garden!", 5, 0, 1.00, 0, true, false],
		["1.1.1.2", "Grass", "Hard to take care of but, once you get the hang of it, you be swiming in it!", 5, 0, 1.50, 0, true, false],
		["1.1.1.3", "Seed Name", "Seed Description", 5, 0, 2.00, 0, true, false]
	]], 
	["Common Seeds", [
		["1.1.2.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.2.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.2.3", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false]
	]],
	["Uncommon Seeds", [
		["1.1.3.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.3.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.3.3", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false]
	]],
	["Rare Seeds", [
		["1.1.4.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.4.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false],
		["1.1.4.3", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false, false]
	]],
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

////////////////////////////////
///       GAME FRONT         ///
////////////////////////////////


function unlockSeed() {
	for (let i = 1; i < seeds.length; i++) {
		for (let i2 = 1; i < seeds[i].length; i++) {
			for (let i3 = 0; i < seeds[i].length; i++) {
				if (seeds[i][i2][i3][7] == true && seeds[i][i2][i3][8] == false) {
					const seedContainer = document.createElement("div");

					const seed_h1 = document.createElement("h1");
					const seed_h1_text = document.createTextNode(seeds[i][i2][i3][1]);
					seed_h1.appendChild(seed_h1_text);

					const seed_p = document.createElement("p");
					const seed_p_text = document.createTextNode(seeds[i][i2][i3][2]);
					seed_p.appendChild(seed_p_text);

					seedContainer.appendChild(seed_h1);
					seedContainer.appendChild(seed_p);
					const placement = "seed-" + seeds[i][i2][i3][0];
					document.getElementById(placement).appendChild(seedContainer);
					seeds[i][i2][i3][8] = true;
				}
			}
		}
	}
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





