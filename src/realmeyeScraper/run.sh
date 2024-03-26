# Running this starts the realmeye webscraper
#!/bin/sh

# Create the virtual environment
python3 -m venv venv
# Activate the virtual environment
source venv/bin/activate
# Install the required packages to the venv
pip3 install -r requirements.txt

# Scrape realmeye and store the data in the database
python3 ./webScraper.py
# Start the api on port 5000
python3 ./app.py