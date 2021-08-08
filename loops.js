var obj=[
    {person:"Name1", age:"29", company:"Guvi"},
    {person:"Name2", age:"23", company:"Guvi Geek"},
    {person:"Name3", age:"20", company:"Guvi Geek Company"}
];

for(let i=0; i<obj.length; i++){
    console.log(obj[i].person)
}

for(let i in obj){
    console.log(obj[i].company)
}

for(let i of obj){
    console.log(i.age)
}

obj.forEach(function(i){
    console.log(i.person)
})
