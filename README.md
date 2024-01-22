Context: I wanted a better way to visually log all the special loot I got over the season since RotMG only provides so much seasonal vault space. I plan to make this a web app using Firebase to store all item info.

Packages installed:
`npm i express` - Express.js framework for building RESTful API
`npm i -D nodemon` - Install nodemon as a devDependency. Allows the application to run in watch mode so that the application will reset whenever there are any saved changes to the code

Item Types:

- Weapons
  - Daggers/Dual Blades, Staves/Spellblades, Wands/Morning Stars, Swords/Flails, Katanas/Tachis, Bows/Longbows
- Abilities
  - Cloaks, Quivers, Spells, Tomes, Helms, Shields, Seals, Poisons, Skulls, Traps, Orbs, Prisms, Scepters, Stars, Wakizashis, Lutes, Maces, Sheathes
- Armor
  - Leather Armor, Robes, Heavy Armor
- ## Rings
- Etc

Tiered Types:

- Tiered: T0-T15
- UT: Untiered
- ST: Set Tier
