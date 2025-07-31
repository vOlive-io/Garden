////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////




////////////////////////////////
///        VARIABLES         ///
////////////////////////////////

//Seeds array counts plants AND seeds in inventory
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <plants owned: int>, <base value: dub>, <total planted: int>, <unlocked: bool>],
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>

var Seeds = [
	["Starter Seeds", [
		["1.1.1.1", "Seed Name", "Seed Description", 5, 0, 1.00, 0, true],
		["1.1.1.2", "Seed Name", "Seed Description", 5, 0, 1.50, 0, true],
		["1.1.1.2", "Seed Name", "Seed Description", 5, 0, 2.00, 0, true]
	]], 
	["Common Seeds", [
		["1.1.2.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.2.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.2.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
	]],
	["Uncommon Seeds", [
		["1.1.3.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.3.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.3.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
	]],
	["Rare Seeds", [
		["1.1.4.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.4.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
		["1.1.4.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
	]],
];

var Soils = [
	["1.2.1.1", "Soil Name", "Soil Description", 1, true],
	["1.2.1.2", "Soil Name", "Soil Description", 1.5, false],
	["1.2.1.3", "Soil Name", "Soil Description", 2, false]
];

//ACHEVMENTS
var achievements = [
	["2.1.1.1", "Achievement Name", "Achievement Description", false],
	["2.1.1.2", "Achievement Name", "Achievement Description", false]
];

////////////////////////////////
///       GAME FRONT         ///
////////////////////////////////

function unlockSeed() {
	if (seed[1][0][7] == true) {
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















