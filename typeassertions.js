var fetchDataNew = function (url, method) {
    console.log(method);
};
var reqOptions = {
    url: 'https://someurl.com',
    method: 'GETasas'
}; //as const
fetchDataNew('qqq', 'GET');
// fetchDataNew(reqOptions.url, reqOptions.method)
fetchDataNew(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
