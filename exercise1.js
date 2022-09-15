fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json // Complete this code <=Completed :)
        completed.forEach( (todo, index) => {
            if(todo.completed===true)console.log(`${todo.title} - ${todo.completed}`)
        })
    })
    .catch(function(err) { 
    console.log(err);
});