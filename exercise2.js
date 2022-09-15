let todoTitles = [];
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json // Complete this code <=Completed :)
        completed.forEach( (todo, index) => {
            todoTitles[index]=`${todo.title}`
        })
    })
    .catch(function(err) { 
    console.log(err);
});
console.log(todoTitles)