const selectedLanguage = 'en';
fetch('http://localhost:3001/api/Languages' , {
method: 'POST',
headers: {
    'content-Type': 'application/json' ,
},
body: JSON.stringify({ language: selectedLanguage}),
})

.then((response) => response.json())
.then((data) => {
    console.log(data.message);
})
//error handling
.catch((error) => {
    console.log(error);
});
