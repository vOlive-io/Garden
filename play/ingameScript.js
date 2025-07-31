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




/* 
THANKS TO W3S FOR THIS CODE


// Create an "li" node:
const node = document.createElement("li");
const node2 = document.createElement("h1");
// Create a text node:
const textnode = document.createTextNode("Sweet");
const textnode2 = document.createTextNode("yum");
// Append the text node to the "li" node:
node.appendChild(textnode);
node2.appendChild(textnode2);
node.appendChild(node2);
// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);

*\














