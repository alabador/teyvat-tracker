#Uses beautiful soup module and requests to web scrape
import requests
from bs4 import BeautifulSoup
from pprint import pprint


url = "https://genshin-impact.fandom.com/wiki/Event"
data = requests.get(url)

my_data = []

html = BeautifulSoup(data.text, 'html.parser')
current = html.find(id="Current-collapsible-section")