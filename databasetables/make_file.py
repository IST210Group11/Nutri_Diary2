import os
import json

with open("finaltable.json", 'r') as f:
    data = json.loads(f.read())
    for i, row in enumerate(data):
        file = open(f"./finaltable/row{i+1}.json", "w")
        file.write(json.dumps(row))
        file.close()

