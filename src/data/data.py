#Uses beautiful soup module and requests to web scrape
import requests
from bs4 import BeautifulSoup
from pprint import pprint


url = "https://genshin-impact.fandom.com/wiki/Event"
data = requests.get(url)

my_data = []

html = BeautifulSoup(data.text, 'html.parser')

# get all tables and classes
# print('Classes of each table:')
# for table in html.find_all('table'):
#     print(table.get('class'))

tables = html.find_all('table')
current_table = html.find('table', class_='wikitable sortable')
current_table_body = current_table.find('tbody')

rows = current_table_body.find_all('tr')

for row in rows: 
    image_td = row.find('img')
    if image_td != None:
        if image_td.has_attr('data-src'):
            image_src = image_td['data-src']
        else: 
            image_src = image_td['src']
        my_data.append(image_src)

print(my_data)

