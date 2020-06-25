// Global Variables
var player1;
var luck = 0;

// Graphics

// box
var line = document.getElementById("Cancan");
var line2d = line.getContext("2d");

// Gradient
var linegrd = line2d.createLinearGradient(0, 0, 500, 300);
linegrd.addColorStop(0, "red");
linegrd.addColorStop(.75,"black");



line2d.moveTo(0,0);
line2d.lineTo(500,300);
line2d.lineWidth = 10;
line2d.strokeStyle= linegrd;
line2d.stroke();




// starting the Character select screen
function CharSelect() {
    document.getElementById("mainContainer").innerHTML= '<div class="flexbox">'+ 
                                                            '<div class="ImgWrap" onmouseover="Stats(1)" onclick="charSelected(1)">'+
                                                                '<img src="./Images/Warrior.jpg" alt="Warrior">'+
                                                            '</div>'+
                                                            '<div class="ImgWrap" onmouseover="Stats(2)" onclick="charSelected(2)">'+
                                                                '<img src="./Images/Wizard.jpg" alt="Wizard">'+
                                                            '</div>'+
                                                            '<div class="ImgWrap" onmouseover="Stats(3)" onclick="charSelected(3)">'+
                                                                '<img src="./Images/Cleric.jpg" alt="Cleric">'+
                                                            '</div>'+
                                                            '<div class="ImgWrap" onmouseover="Stats(4)" onclick="charSelected(4)">'+
                                                                '<img src="./Images/Rogue.jpg" alt="Rogue">'+
                                                            '</div>'+
                                                        '</div>'+
                                                        '<div id="CharInfo" class="flexbox"></div>'+
                                                        '</div>';
}

// Switch statement for displaying Classes stats

function Stats(Class) {
    switch(Class) {
        case 1:
            document.getElementById("CharInfo").innerHTML = '<div class="statsbox">'+
                                                                'Strength: 12-18<br>'+
                                                                'Dexterity: 12-18<br>'+
                                                                'Consitution: 10-18 <br>'+
                                                                'Intelligence: 2-18<br>'+
                                                                'Wisdom: 2-18<br>'+
                                                                'Luck: Random'+
                                                            '</div>'
        break;
        case 2:
            document.getElementById("CharInfo").innerHTML = '<div class="statsbox">'+
                                                                'Strength:  2-18<br>'+
                                                                'Dexterity: 2-18<br>'+
                                                                'Consitution: 1-14<br>'+
                                                                'Intelligence: 14-20<br>'+
                                                                'Wisdom: 10-18<br>'+
                                                                'Luck: Random'+
                                                            '</div>'
        break;
        case 3:
            document.getElementById("CharInfo").innerHTML = '<div class="statsbox">'+
                                                                'Strength: 14-18 <br>'+
                                                                'Dexterity: 8-18<br>'+
                                                                'Consitution: 12-18<br>'+
                                                                'Intelligence: 8-18<br>'+
                                                                'Wisdom: 10-18<br>'+
                                                                'Luck: Divine'+
                                                            '</div>'
        break;
        case 4:
            document.getElementById("CharInfo").innerHTML = '<div class="statsbox">'+
                                                                'Strength:  6-18<br>'+
                                                                'Dexterity: 14-20<br>'+
                                                                'Consitution: 4-18<br>'+
                                                                'Intelligence: 6-18<br>'+
                                                                'Wisdom: 8-18<br>'+
                                                                'Luck: Random'+
                                                            '</div>'
        break;
    }

}
// Ability Score function
function sModifier(n) {
    var AbilityScore = (n - 10) / 2;
    return AbilityScore;
}
// Creating the player object
function Player(fullName, str, dex, con, int, wis, luc) {
    this.Name = fullName
    this.Str = str;
    this.Dex = dex;
    this.Con = con;
    this.Int = int;
    this.Wis = wis;
    this.Luc = luc;
    var lvl = 1;
    this.lvl = lvl;
    this.Health = Math.floor((sModifier(con) + (lvl * 8)));
}

// charater selected Stats Screen

function charSelected(Class) {
    
    switch(Class){
        case 1:
            player1 = new Player("", RandStat(12, 18), RandStat(12,18),RandStat(10,18), RandStat(2,18), RandStat(2,18), RandStat(1, 1000));
            break;
        case 2:
            player1 = new Player("", RandStat(2, 18), RandStat(2,18),RandStat(1,14), RandStat(14,20), RandStat(10,18), RandStat(1, 1000));
            break;
        case 3:
            player1 = new Player("", RandStat(14, 18), RandStat(8,18),RandStat(12,18), RandStat(8,18), RandStat(10,18), 0);
            break;
        case 4:
            player1 = new Player("", RandStat(6, 18), RandStat(14,20),RandStat(4,18), RandStat(6,18), RandStat(8,18), RandStat(250, 1000));
            break;
    }
    if(player1.Luc < 100) {
        luck = "Cursed"
    }
    if(player1.Luc < 200 && player1.Luc >= 100) {
        luck = "very-Unlcuky"
    }
    if(player1.Luc < 300 && player1.Luc >= 200) {
        luck = "unlucky"
    }
    if(player1.Luc < 400 && player1.Luc >= 300) {
        luck = "sub-par"
    }
    if(player1.Luc < 500 && player1.Luc >= 400) {
        luck = "Acceptable"
    }
    if(player1.Luc < 600 && player1.Luc >= 500) {
        luck = "Above-Average"
    }
    if(player1.Luc < 700 && player1.Luc >= 600) {
        luck = "High"
    }
    if(player1.Luc < 800 && player1.Luc >= 700) {
        luck = "Fortunate"
    }
    if(player1.Luc < 900 && player1.Luc >= 800) {
        luck = "Silver-Spoon"
    }
    if(player1.Luc < 1000 && player1.Luc >= 900) {
        luck = "God"
    }

    document.getElementById("mainContainer").innerHTML =    '<div class="Character">'+
                                                            '<input type="text" id="Name" value="Please enter a name" maxlength="15">'+
                                                            '<p class="inputs">Strength: <input class="Stats" type="number" value="' + player1.Str + '" min="1" max="20"></p>'+
                                                            '<p class="inputs">Dexterity: <input class="Stats" type="number" value="' + player1.Dex + '" min="1" max="20"></p>'+
                                                            '<p class="inputs">Consitution: <input class="Stats" type="number" value="' + player1.Con + '" min="1" max="20"></p>'+
                                                            '<p class="inputs">Intellignece: <input class="Stats" type="number" value="' + player1.Int + '" min="1" max="20"></p>'+
                                                            '<p class="inputs">Wisdom: <input class="Stats" type="number" value="' + player1.Wis + '" min="1" max="20"></p>'+
                                                            '<p class="inputs">Luck: <input class="Stats" type="text" value="" placeholder="'+ luck + '" readonly></p>'+
                                                            '<div class="btnWrap Char">'+
                                                                '<button class="btn" onclick="CharAccept()">Accept this Charcter</button>'+
                                                            '</div>'

    
    function RandStat(lower, upper){
        let RandNum = Math.round(Math.random() * (upper - lower)) + lower;
        return RandNum
    }
}
var FinalStats
function CharAccept(){
    FinalStats = document.getElementsByClassName("Stats");  // putting the changed values into a variable
    player1.Name = document.getElementById("Name").value;
    player1.Str = parseInt(FinalStats[0].value);        // making sure all values come back as a number
    player1.Dex = parseInt(FinalStats[1].value);
    player1.Con = parseInt(FinalStats[2].value);
    player1.Int = parseInt(FinalStats[3].value);
    player1.Wis = parseInt(FinalStats[4].value);

    document.getElementById("mainContainer").innerHTML =    '<h1>Your Character: </h1>'+
                                                            '<p>'+
                                                                '<strong>Name: </strong>'+
                                                                 player1.Name +
                                                            '</p>'+
                                                            '<p>'+
                                                                '<strong>Strength: </strong>' +
                                                                player1.Str +
                                                            '</p>'+
                                                            '<p>'+
                                                                '<strong>Dexterity: </strong>' + 
                                                                player1.Dex +
                                                            '</p>'+
                                                            '<p>'+
                                                            '   <strong>Constitution: </strong>' +
                                                            player1.Con +
                                                            '</p>'+
                                                            '<p>'+
                                                                '<strong>Intelligence: </strong>' +
                                                                player1.Int +
                                                            '</p>'+
                                                            '<p>'+
                                                                '<strong>Wisdom: </strong>' +
                                                                player1.Wis +
                                                            '</p>'+
                                                            '<p>'+
                                                                '<strong>Luck: </strong>' +
                                                                luck +
                                                            '</p>';
}