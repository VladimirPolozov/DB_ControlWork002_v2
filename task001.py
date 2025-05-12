import json
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')

db = client['`FirstBase']
collection = db['restaurants']

with open('restaurants.json', 'r', encoding='utf-8') as f:
    for line in f:
        if line.strip():
            doc = json.loads(line)
            collection.insert_one(doc)