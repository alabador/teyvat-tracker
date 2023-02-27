#Uses beautiful soup module and requests to web scrape
import requests
from bs4 import BeautifulSoup
from pprint import pprint
import json

# https://genshin.hoyoverse.com/en/news   
# try using this instead, for better quality images
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
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    image_td = row.find('img')
    if image_td != None:
        if image_td.has_attr('data-src'):
            image_src = image_td['data-src']
        else: 
            image_src = image_td['src']
        my_data.append([ele for ele in cols if ele] + [image_src])

# print(my_data)

formatted_data = []

def create_dict(data):
    for item in data:
        data_object = {}
        data_object['title'] = item[0]
        data_object['dates'] = item[1]
        data_object['category'] = item[2]
        data_object['image'] = item[3]
        formatted_data.append(data_object)

create_dict(my_data)

json_data = json.dumps(formatted_data, indent=4)

with open("./src/data/events.json", "w") as outfile:
    outfile.write(json_data)

# print(json_data)
        

