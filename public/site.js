$(document).ready(function () {
    $('#without-btn').click(function () {
        withoutFunctions();
    });
    $('#with-btn').click(function () {
        toggleButtons();
        clearResults(this);
        withFunctions();
    });
    $('div.btn-danger').click(function () {
        clearResults(this);
    });
    $('#with-all-btn').click(function () {
        toggleButtons();
        clearResults(this);
        withAllFunctions();
    });
});

function toggleButtons() {
    $.each($('.btn'), function (i, button) {
        var button = $(button);
        var isHidden = $(button).css('display') === 'none';
        if (isHidden) {
            button.show();
        } else {
            button.hide();
        }
    });
}

function clearResults(element) {
    var items = $(element).siblings('ul').first().children('li');
    $.each(items, function (i, value) {
        $(value).children('span').remove();
    });
}
function withoutFunctions(){
    let withoutValArray = $('.without li');

    // Function 1
    var val1 = mywithoutPromiseFunction(1000, "One Second");
    addValueToLisItem(withoutValArray[0], val1);
    // Function 2
    var val2 = mywithoutPromiseFunction(3000, "Three Seconds");
    addValueToLisItem(withoutValArray[1], val2);
    // Function 3
    var val3 = mywithoutPromiseFunction(5000, "Five Seconds");
    addValueToLisItem(withoutValArray[2], val3);
    // Function 4
    var val4 = mywithoutPromiseFunction(7000, "Seven Seconds");
    addValueToLisItem(withoutValArray[3], val4);
    // Function 5
    var val5 = mywithoutPromiseFunction(9000, "Nine Seconds");
    addValueToLisItem(withoutValArray[4], val5);
    
}

function withFunctions() {
    let withValArray = $('.with li');
    // Function 1
    myPromiseFunction(1000, 'One Second').then((result) => {
        addValueToLisItem(withValArray[0], result);
    });
    // Function 2
    myPromiseFunction(3000, 'Three Seconds').then((result) => {
        addValueToLisItem(withValArray[1], result);
    });
    // Function 3
    myPromiseFunction(5000, 'Five Seconds').then((result) => {
        addValueToLisItem(withValArray[2], result);
    });
    // Function 4
    myPromiseFunction(7000, 'Seven Seconds').then((result) => {
        addValueToLisItem(withValArray[3], result);
    });
    // Function 5
    myPromiseFunction(9000, 'Nine Seconds').then((result) => {
        addValueToLisItem(withValArray[4], result);
        toggleButtons();
    });
}

function withAllFunctions() {
    let withValArray = $('.with li');
    Promise.all([
        myPromiseFunction(1000, "First All"),
        myPromiseFunction(3000, "Second All"),
        myPromiseFunction(5000, "Third All"),
        myPromiseFunction(7000, "Fourth All"),
        myPromiseFunction(9000, "Fifth All")
    ]).then(values => {
        $.each(values, function (i, value) {
            addValueToLisItem(withValArray[i], value);
        });
        toggleButtons();
    });
}

function addValueToLisItem(listItem, value) {
    $(listItem).append('<span>' + value + '</span>');
}
function mywithoutPromiseFunction(timeout, retval){
    setTimeout(() => {
        return retval;        
    }, timeout);
}
function myPromiseFunction(timeout, retVal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(retVal);
        }, timeout);
    });
}