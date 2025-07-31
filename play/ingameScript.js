////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////




////////////////////////////////
///        VARIABLES         ///
////////////////////////////////

//Seeds array counts plants AND seeds in inventory
//["<Seed ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <plants owned: int>, <base value: dub>, <total planted: int>, <unlocked: bool>],
// ids * <number of item class> . <number of subclass> . <item number>

var Seeds = [
  ["Starter Seeds", [
    ["1.1.1", "Seed Name", "Seed Description", 5, 0, 1.00, 0, true],
    ["1.1.2", "Seed Name", "Seed Description", 5, 0, 1.50, 0, true],
    ["1.1.2", "Seed Name", "Seed Description", 5, 0, 2.00, 0, true]
  ]], 
  ["Common Seeds", [
    ["1.2.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.2.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.2.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
  ]],
  ["Uncommon Seeds", [
    ["1.3.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.3.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.3.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
  ]],
  ["Rare Seeds", [
    ["1.4.1", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.4.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false],
    ["1.4.2", "Seed Name", "Seed Description", 0, 0, 0.00, 0, false]
  ]],
];

var Soils = [
  ["2.1.1", "Soil Name", "Soil Description", 1, true],
  ["2.1.1", "Soil Name", "Soil Description", 1.5, false],
  ["2.1.1", "Soil Name", "Soil Description", 2, false],
];


