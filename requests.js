var jsonTest = '{"name": "Test", "data" : 4}';
var objFromJson = JSON.parse(jsonTest);
var toDoList = [];
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ('id' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(toDoList);
});
