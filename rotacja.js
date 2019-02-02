var tekst = document.getElementById("tekst");

function red() {
    tekst.style.color = "red";
    x = 1
}

function green() {
    tekst.style.color = "lime";
    x = 2
}

function blue() {
    tekst.style.color = "blue";
    x = 3
}

x = 3

function loop() {
    switch (x) {
        case 3:
            red();
            break;
        case 2:
            blue();
            break;
        case 1:
            green();
            break;
    }
    setTimeout( loop, 75 );
}

loop();
