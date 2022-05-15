

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btn5 = document.getElementById('btn-5');
var btn6 = document.getElementById('btn-6');
var inp1 = document.getElementById('val1');
var inp2 = document.getElementById('val2');
var inp3 = document.getElementById('val3');
var inp4 = document.getElementById('val4');
var inp5 = document.getElementById('val5');
var inp6 = document.getElementById('val6');
var din = document.getElementById('tareek');

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = day + " " + "/" + " " + month + " " + "/" + " " + year;




localStorage.setItem("date", newdate);
din.value = localStorage.getItem("date");




inp1.value = localStorage.getItem("key1");
inp2.value = localStorage.getItem("key2");
inp3.value = localStorage.getItem("key3");
inp4.value = localStorage.getItem("key4");
inp5.value = localStorage.getItem("key5");
inp6.value = localStorage.getItem("key6");

function increment1() {

    if (btn1) {
        inp1.value++;
        localStorage.setItem("key1", inp1.value);
    }
}

function increment2() {

    if (btn2) {
        inp2.value++;
        localStorage.setItem("key2", inp2.value);
    }
}

function increment3() {

    if (btn3) {
        inp3.value++;
        localStorage.setItem("key3", inp3.value);
    }
}

function increment4() {

    if (btn4) {
        inp4.value++;
        localStorage.setItem("key4", inp4.value);
    }
}

function increment5() {

    if (btn5) {
        inp5.value++;
        localStorage.setItem("key5", inp5.value);
    }
}

function increment6() {

    if (btn6) {
        inp6.value++;
        localStorage.setItem("key6", inp6.value);
    }
}

function resetting() {


    let text = "Press a button!\n For reset!";
    if (confirm(text) == true) {
        inp1.value = 0;
        inp2.value = 0;
        inp3.value = 0;
        inp4.value = 0;
        inp5.value = 0;
        inp6.value = 0;

        localStorage.setItem("key1", '0');
        localStorage.setItem("key2", '0');
        localStorage.setItem("key3", '0');
        localStorage.setItem("key4", '0');
        localStorage.setItem("key5", '0');
        localStorage.setItem("key6", '0');
    } 
    else {
    }
}

document.getElementById('downloadexcel').addEventListener('click', function () {
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#table"));
})
