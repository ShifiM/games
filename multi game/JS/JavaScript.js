//בטבלת תוצאות להוסיף דיב של אחוז נצחונות 
//לסדר את האנמציה של הגיים אובר
//לסדר אנימציה של נצחון שלא יציג תרגיל  חדש עם הזיקוקים
//טבלת היסטוריה

var num1;
var x;
var y;
var c;
var num2;
var num_successes = 0;
var sum = 0;
var lose = 0;
var errors = 0;
var flag = true;
var flag2 = true;
var index = 0;
if (!localStorage.lifes) 
    localStorage.lifes="3";

//var o1=new arr(null, false, null);
//var o2 =new arr(null, false, null);
//var o3 =new arr(null, false, null);
//var o4 =new arr(null, false, null);
//var o5 =new arr(null, false, null);
//function arr(name, flag2, date) {
//    this.username = name;
//    this.victory = flag2;
//    this.date = Date.now();
//}
//function f1() {
//    //if(index==0)
//    //    var o1 = new arr(localStorage.username,flag2, null);
//    //else
//    //    if (index == 1)
//    //        var o2 = new arr(localStorage.username, flag2, null);
//    r = 1;

//        document.getElementById("td1_1").style.color = "red";
///*        document.getElementById("td' + r + '_' + t + '").innerHTML = j;*/
    
//}

function how_many_lifes() {
    localStorage3();
    exit();

    window.open('instractions.html', '_self')
}
function how_many_lifes1(){
    localStorage3();
    exit();
    window.open('HomelPage.html', '_self');
}
function new_game() {
    if (localStorage.lifes)
        cnt_life = Number(localStorage.lifes);
    if (cnt_life != 0) {
        rand_numbers();
        answers();
    }
}
function localStorage1() {
    var usename = document.getElementById('name').value;
    localStorage.setItem('username', usename);
}
function localStorage2() {
    localStorage.setItem('victory', flag2);
}
function localStorage3() {
    localStorage.setItem('lifes', cnt_life);
}
function ret_from_history() {
    localStorage3();
    window.open('History.html', '_self');
}
function localStorage4() {
    localStorage.setItem('minutes', po);
    localStorage.setItem('seconds', po1);
}
var flag3 = true;
function levels() {
    var fg = document.getElementById("buttons");
    var fh = document.getElementById("game_start");
    var fd = fh.cloneNode(false);
    var fb = fh.cloneNode(false);
    var fa = fh.cloneNode(false);
    fg.removeChild(fh);
    fh = document.getElementById("instraction");
    fg.removeChild(fh);
    fg.appendChild(fd);
    fg.appendChild(fb);
    fg.appendChild(fa);
    fa.id = 'level1';
    fb.id = 'level2';
    fd.id = 'level3';
    document.getElementById("level3").innerHTML = "רמה 3";
    document.getElementById("level2").innerHTML = "רמה 2";
    document.getElementById("level1").innerHTML = "רמה 1";
    document.getElementById("level1").addEventListener("click", function () { to_play('1'); });
    document.getElementById("level2").addEventListener("click", function () { to_play('2'); });
    document.getElementById("level3").addEventListener("click", function () { to_play('3'); });
    //document.getElementById("level2").onclick(window.open('game.html'));
    //document.getElementById("level3").onclick = "to_play(3)";
}
function to_play(l) {
    if (flag3) {
        !flag3;
        come();
        localStorage4();
        localStorage.setItem('level', l);
        if (!localStorage.lifes) {
            playing(Number(l));
            window.location.href="game.html";
        }
        else {
            if (Number(localStorage.lifes) == 0) {
                document.getElementById("buttons").innerHTML = "עליך להמתין שתי דקות לחיים נוספים";
                time();
                localStorage.lifes = 1;
                setTimeout('window.location.href = "game.html"', 120000);
            }
            else
                window.open('game.html', '_self');
        }
    }
}
  function time(){

        //localStorage4();
        setTimeout("time1()", 1000);
   
}
function time1() {
    if (po1 == 0)
        if (po == 0) {
            localStorage.lifes = Number(localStorage.lifes) + '1';
            cnt_life = Number(localStorage.lifes);
            po = 1;
            po1 = 60;
        }
        else {
            po = 0;
            po1 = 59;
        }
    else
        po1--;
   
    if (po1 < 10)
        document.getElementById("buttons").innerHTML = "0" + po + ":" + "0" + po1;
    else
        document.getElementById("buttons").innerHTML = "0" + po + ":" + po1;
    time();
}


function finish() {
    clear();
    exit();
    new_game();
}
function clear() {
    sum = 0;
    document.getElementById("all_ans").style.backgroundImage = null;
    document.getElementById("mark5").style.opacity = 0;
    document.getElementById("mark4").style.opacity = 0;
    document.getElementById("mark3").style.opacity = 0;
    document.getElementById("mark2").style.opacity = 0;
    document.getElementById("mark1").style.opacity = 0;
}
var l=1;
var max=8;
function playing(l) {
    if (l == 1) {
        Number(max) = 4;
    }
    else {
        if (l == 2) {
            max = 7;
        }
        else
            max = 9;
    }
}
function rand_numbers() {
    if (cnt_life != 0) {
    num1 = Math.round(Math.random() * (max-1)) + 1;
    num2 = Math.round(Math.random() * (max-1)) + 1;
        document.getElementById("show_the_targil").innerHTML = num1 + " * " + num2;
    }
}
function answers() {
    if (cnt_life != 0) {
    x = Math.round(Math.random() * 5) + 1;
        y = String(x);
        max = Number(localStorage.level);
        if (max == 1)
            max = max + 2;
        if (max == 2)
            max = max + 5;
        if (max == 3)
            max = max + 5;
       
    document.getElementById(y).innerHTML = num1 * num2;
    if (x != 1) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("1").innerHTML = c;
    }
    if (x != 2) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("2").innerHTML = c;
    }
    if (x != 3) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max )) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("3").innerHTML = c;
    }
    if (x != 4) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("4").innerHTML = c;
    }
    if (x != 5) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("5").innerHTML = c;
    }
    if (x != 6) {
        c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);
        while (c == num1 * num2)
            c = (Math.round(Math.random() * (max)) + 1) * (Math.round(Math.random() * (max)) + 1);

        document.getElementById("6").innerHTML = c;
        }
    }
}
function check_the_ans1() {
    if (x == 1) {
        count_of_successes();
    }
    else
        error();
}
function check_the_ans2() {
    if (x == 2) {
        count_of_successes();
    }
    else
        error();
} function check_the_ans3() {
    if (x == 3) {
        count_of_successes();
    }
    else
        error();
}
function check_the_ans4() {
    if (x == 4) {
        count_of_successes();
    }
    else
        error();
}
function check_the_ans5() {
    if (x == 5) {
        count_of_successes();
    }
    else
        error();
}
function check_the_ans6() {
    if (x == 6) {
        count_of_successes();
    }
    else
        error();
}

function error() {
    
    if (cnt_life > 0) {
        localStorage.lifes = Number(localStorage.lifes) - 1;
        cnt_life = Number(localStorage.lifes);
        if (cnt_life == 0) {
            game_over();
            
        }
        
        errors++;
        /*count_of_error();*/
    }
    else
        game_over();
        
}
function num_of_error() {
    if (errors == 3) {
        errors = 0;
        flag = false;
        
        update_history();
    }
    else {
        //לחשב כמה חיים נשארו למשתמש
    }
}
function game_over() {
    localStorage.is_update = "true";
    flag2 = false;
    localStorage2();
     copy = document.getElementById("all_ans");
    copy.className = "game_over";
    copy.innerHTML = "game over";
    copy.style.backgroundImage = "url('Items/Running heart.gif')";
    //copy.className = "wait";
    setTimeout("wait()", 3000);
    //setTimeout("copy.innerHTML = 'המתן עד שיתווספו לך עוד חיים'", 3000);
    setTimeout("copy.className = 'all_ans'", 1200);
    setTimeout("new_game()", 1600);
}
function wait() {
    copy.className = "wait";
    copy.innerHTML = " המתן עד שיתווספו לך עוד חיים";
}
var copy
function new_game2() {
    copy.className = "all_ans";
    new_game();
    
}

function count_of_successes() {
    add_true();
    num_successes++;
    if (num_successes == 5) {
        document.getElementById("all_ans").style.backgroundImage = "url('Items/4A5 (1).gif')";
        num_successes = 0;
       
        update_history();

    }
    if (num_successes < 5) {
        document.getElementById("b").style.backgroundColor = "black";
        new_game();

    }
}
function add_true() {
    if (sum == 0) {
        document.getElementById("mark5").style.opacity = 100;
        sum += 20;
    }
    else
        if (sum == 20) {
            document.getElementById("mark4").style.opacity = 100;
            sum += 20;
        }
        else
            if (sum == 40) {
                document.getElementById("mark3").style.opacity = 100;
                sum += 20;
            }
            else
                if (sum == 60) {
                    document.getElementById("mark2").style.opacity = 100;
                    sum += 20;
                }
                else
                    if (sum == 80) {
                        document.getElementById("mark1").style.opacity = 100;
                        sum += 20;
                        flag2 = true;
                        localStorage.is_update = "true";
                        localStorage2();
                        setTimeout("finish()", 5000);
                        //setTimeout("clear_background()",10);

                    }
    

}
function clear_background() {
    document.getElementById("all_ans").style.backgroundColor = 'black';
}
function instractions() {
    var param = document.createElement('p');
    param.appendChild(document.createTextNode("instraction"));
    var p = 
   document.getElementById("but1").insertBefore(param, p.nex)
}
function win() {
    num_ducks = 0;
    for (i = 0; i < duck_arr.length; i++) {
        duck_arr[i].className = "ducks";
    }
    document.getElementById("win_less").className = "winner";
    document.getElementById("win_less").innerHTML = "wow!!!";
}
function history() {
    var i, j;
    document.getElementById("history").innerHTML = "<th>level</th><th>Victory?</th><th>Username</th>";

    for (i = 1; i <= 5; i++) {//row
        document.getElementById("history").innerHTML += "<tr id='tr" + i + "'>";
        for (j = 1; j <= 3; j++) {//column
            document.getElementById("tr" + i).innerHTML += "<td id='td" + i + "_" + j + "'></td>";
        }
    }
    
    document.getElementById("history").innerHTML += "</tr>";
    
    //for (i = 1; i <= 5; i++) {
    //    for (j = 1; j <= 3; j++) {
    //        document.getElementById("i + 'tr' + j").innerHTML = "i + j";
    //    }
    //}
    localStorage.index = (Number(localStorage.index) + 1);
}
var cnt = 1;
function update_history() {
    if (cnt == 5) {
        var i, j;
        for (i = 1; i <= 5; i++) {
            document.getElementById("history").innerHTML += "<tr id='tr" + i + "'>";
            for (j = 1; j <= 3; j++) {
                document.getElementById("tr" + i).innerHTML += "<td id='tr" + i + "td" + j + "'></td>";
            }
        }
        document.getElementById("histoty").innerHTML += "</tr>";
        cnt = 1;
    }
}
//add life
function timmer() {
    //localStorage4();
    setTimeout("timmer1()", 1000);
}
var po1;
var po;
po = 1;
po1 = 60;
var cnt_life = 3;

function timmer1() {
    if (po1 == 0)
        if (po == 0) {
            localStorage.lifes = Number(localStorage.lifes) + 1;
            cnt_life = Number(localStorage.lifes);
            po = 1;
            po1 = 60;
            new_game1();

        }
        else {
            po = 0;
            po1 = 59;
        }
    else
        po1--;
    document.getElementById("life").innerHTML = cnt_life+jk;
    if (po1 < 10)
        document.getElementById("timmer").innerHTML = "0" + po + ":" + "0" + po1;
    else
        document.getElementById("timmer").innerHTML = "0" + po + ":" + po1;
    timmer();
}
var jk = "❤";
function new_game1() {
    come();
    if (localStorage.lifes)
        cnt_life = Number(localStorage.lifes);
    if (cnt_life != 0) {
        timmer();
        new_game();
    }
}

var minute;
var second;
function exit() {
    minutes = po;
    second = po1;
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('second', second);
}
function come() {
    if (localStorage.minute) {
        po = 1;
        po1 = 60;
    }
}
