'use strict';

// #class 02

let userName = prompt("what is your name?")
alert("welcome 🌹 " + userName +" to My class 02 site please answer this Q: (Replys only with y/n or yes or no!):D");

//####################| Q 1 |####################
let counter = 0;
let yourScore = 0;
function fromWhere (){
    let fromWhere = prompt('Do you think i am korean?').toLowerCase();
    switch(fromWhere) {

        case fromWhere = 'yes':
            console.log('yes');
            alert("you are wrong, I'm not! I'm from jordan :)..");
            break;

        case fromWhere = 'no':
            console.log('no');
            alert("you are right, I'm Jordanian!")
            yourScore++;
            break;
        
        case fromWhere = 'y':
            console.log('y');
            alert("you are wrong, I'm not! I'm from jordan :)..");
            break;

        case fromWhere = 'n':
            console.log('n');
            alert("you are right, I'm Jordanian!")
            yourScore++;
            break;
    }
}

//####################| Q 2 |####################
function myTall(){
    let myTall = prompt("do you think I'm above 180cm ?").toLowerCase();
    switch(myTall) {

        case myTall = 'yes':
            console.log('yes');
            alert("you are right, My hight is 185cm thanks God!");
            yourScore++;
            break;

        case myTall = 'no':
            console.log('no');
            alert("you are wrong, My hight is 185cm thanks God!")
            break;
        
        case myTall = 'y':
            console.log('y');
            alert("you are right, My hight is 185cm thanks God!");
            yourScore++;
            break;

        case myTall = 'n':
            console.log('n');
            alert("you are wrong, My hight is 185cm thanks God!");
            break;
    }
}


//####################| Q 2 |####################
function myFavFood(){

    let myFavFood = prompt("do you think that I do like Mansaf?").toLowerCase();
    switch(myFavFood) {
    
        case myFavFood = 'yes':
            console.log('yes');
            alert("absolutely, you are right, its my fav dish!");
            yourScore++;
            break;
    
        case myFavFood = 'no':
            console.log('no');
            alert("who dosn't like it, you are wrong, its my fav dish!");
            break;
        
        case myFavFood = 'y':
            console.log('y');
            alert("absolutely, you are right, its my fav dish!");
            yourScore++;
            break;
    
        case myFavFood = 'n':
            console.log('n');
            alert("who dosn't like it, you are wrong, its my fav dish!");
            break;
    }    
}

//####################| Q 3 |####################
function myHoppie (){
    let myHoppie = prompt("do you think Football one of my fav hoppies?").toLowerCase();
switch(myHoppie) {

    case myHoppie = 'yes':
        console.log('yes');
        alert("you are wrong, I dont like Football that mutch!");
        break;

    case myHoppie = 'no':
        console.log('no');
        alert("you are right, one of My most fav is Swimming!");
        yourScore++;
        break;
    
    case myHoppie = 'y':
        console.log('y');
        alert("you are wrong, I dont like Football that mutch!");
        break;

    case myHoppie = 'n':
        console.log('n');
        alert("you are right, one of My most fav is Swimming!");
        yourScore++;
        break;
}

}
//####################| Q 4 |####################
function gamer(){

    let gamer = prompt("do you think, I'm a Gamer?").toLowerCase();

    switch(gamer) {

        case gamer = 'yes':
            console.log('yes');
            alert("you are right, I used to play League of legends!");
            yourScore++;
            break;
    
        case gamer = 'no':
            console.log('no');
            alert("you are wrong, I used to be Hardcore Gamer!");
            break;
        
        case gamer = 'y':
            console.log('y');
            alert("you are right, I used to play League of legends!");
            break;
    
        case gamer = 'n':
            console.log('n');
            alert("you are wrong, I used to be Hardcore Gamer!");
            yourScore++;
            break;
    }
}
//####################| Q 5 |####################
function meLoveYou (){

    let meLoveYou = prompt("do I love you?").toLowerCase();

    switch(meLoveYou) {
    
        case meLoveYou = 'yes':
            console.log('yes');
            alert("Ofcourse you are my Vistor Welcome to my Website 💖!");
            yourScore++;
            break;
    
        case meLoveYou = 'no':
            console.log('no');
            alert("how that come ... you are my Vistor bro 😥");
            break;
        
        case meLoveYou = 'y':
            console.log('y');
            alert("Ofcourse you are my Vistor Welcome to my Website 💖!");
            yourScore++;
            break;
    
        case meLoveYou = 'n':
            console.log('n');
            alert("how that come ... you are my Vistor bro 😥");
            break;
    }
}

//####################| Q 6 |####################

function guessMyYear(){
for (let z = 0 ; z < 4 ; z++ ){
    let guessMyYear = Number(prompt("Guess what year did I born at(hint: 90s)?"));
    let myAge = 1992;
        if(guessMyYear > myAge){
            alert("NO, too high");
        }else if (guessMyYear < myAge){
            alert("No , too low");
        }else{
            alert("congrats you guessed it right! its 1992 :).");
            yourScore++;
             break;
        }
}
alert("I born in 1992!")
}

//####################| Q 7 |####################

function guessPlayer (){
let x = false ;
let ie =["diego Maradona","lionel messi" ,"pele", "cristiano ronaldo","zinedine zidane","johan cruyff"];
for (let s=0;s<6;s++){
let seven = prompt("Try to Guess one of the top Football players of all time :)")
// for  to check if user did guess it
for(let i=0;i<ie.length;i++){
    console.log(seven +' ' +ie[i])
   
    if (seven === ie[i]){
        alert ("Well done you guessed");
        counter++;
        x = true;
        yourScore++;
        break;
    }
    }

if(x) {
    break;
}
}
}
myTall        ()
fromWhere     ()
myHoppie      ()
gamer         ()
meLoveYou     ()
guessMyYear   ()
guessPlayer   ()
alert("your score is: " + yourScore + "/7.")
alert("Enjoy reading this brief about me! and top Football players all time orderd list."); 