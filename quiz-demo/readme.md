# Quiz App

if you want to add questions (single or multiple), send a request to this endpoint as follows

```http
  POST http://localhost:5000/api/quiz/questions

```

    [
        {

        "questionText": "Atatürk Kaç yılında doğmuştur?",

        "options": [

            { "text": "1881", "isCorrect": true },
            { "text": "1867", "isCorrect": false },
            { "text": "1938", "isCorrect": false },
            { "text": "1923", "isCorrect": false }
        ],
        "category": "History"
        },
        
        {
            ...
        }
    ]
