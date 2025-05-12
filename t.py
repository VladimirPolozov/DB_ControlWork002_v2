from pymongo import MongoClient
from datetime import datetime

# Подключение к базе данных
client = MongoClient('mongodb://localhost:27017')
db = client['`FirstBase']
collection = db['restaurants']

# Обновление документов
for doc in collection.find():
    updated_grades = []

    for grade in doc.get("grades", []):
        date_value = grade.get("date", {}).get("$date")

        # Если значение — число (timestamp), преобразуем в дату
        if isinstance(date_value, int):
            new_date = datetime.utcfromtimestamp(date_value / 1000)  # из миллисекунд в секунды
            grade["date"] = new_date

        updated_grades.append(grade)

    # Обновляем массив grades в документе
    collection.update_one(
        {"_id": doc["_id"]},
        {"$set": {"grades": updated_grades}}
    )

print("✅ Все даты успешно обновлены!")