var slaying = true;
var totalDamage = 0;

function makeHit() {
    return  Math.floor(Math.random()*2);
    }

//sets to random # that is 0 or 1
var youHit = makeHit();

//Random 1 <= # <=5
var damageThisRound = Math.floor(Math.random()*5 + 1);

while(slaying){
    if (youHit){
        console.log("Congrats! You hit the dragon " + damageThisRound + " times");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You've slayed the dragon!!");
            slaying = false;
        }
        else {
            youHit = makeHit();   
        }
    }
    else {
        console.log("Too bad, you burned up");
        slaying = false;
        }
    
    }
