Context: I wanted a better way to visually log all the special loot I got over the season since RotMG only provides so much seasonal vault space.

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


---

Features I'd Like to Implement:
- Create an item class
  - Create an item for each entry in the database

Codebase Improvements that can be made:
- Use gitignore? Hide stuff like venv probably
- Clean up file structure
- Make sure all modules and functions have a docstring explanation

---

Development notes:
- I was planning on using Firebase for the database but wanted more practice working with a locally run database and am now using Postgres
- Learned basics of config files and connecting to a database
- Built my first Flask API in realmeyeWebscraper
