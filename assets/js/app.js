var cl = console.log;

// js is Sync
// Non Blocking
// Single threaded


function print10(){
    cl(10)
}

function print20(){
    setTimeout(() => {
        // API call to get data
        cl(20);
        print30();
    },1000)
}

function print30(){
    cl(30)
}

// print10();
// print20();
// print30();


function fetchData(callBackFun){
    setTimeout(() => {
        cl(`data is fetched successfully!`);
        // templatingLi();
        callBackFun();
    },2000)
}

function templatingLi(){
    cl(`lists are created successfully!`)
}

function templatingCard(){
    cl(`cards are created successfully!`)
}

fetchData(templatingLi);
fetchData(templatingCard);
// templatingLi();