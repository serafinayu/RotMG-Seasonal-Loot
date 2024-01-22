# from bs4 import BeautifulSoup
# import requests

# url = "https://www.realmeye.com/"
# page = requests.get(url)
# # print(requests.get(url)) -> 403
# # print(page.text)
# soup = BeautifulSoup(page.text, "html.parser")
# print(soup)

#!/bin/python
from flask import Flask

app = Flask(__name__)
