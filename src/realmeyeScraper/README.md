On the Realmeye Webscraper there will be a button to reset the database

This app can only be run locally

Times when the database will need to be reset
- When the program first starts
- At the end of the season
    - Extra features that I would like to asdd:
        - Users can set a date when the season ends so that the database autoresets
        - 
- If the user would like to reset


The order of how the files need to be exeuted when this button is selected:
1. venv - activate the virtual environment
1. config_files.py - Creates the config file
2. connection.py - Uses the config file to create the table in the database
    - Deletes the table if it already exists and recreates it
    - Has additional functions to connect to the database used in other modules
3. webScraper.py - Uses functions from connection.py, links.py, and items.py to scrape the necessary rotmg info
    - Stores the data in the database to be pulled from the api
4. app.py - Is an API that will allow the main page to pull information from the database

