var user = prompt("Do you like dogs?").toLowerCase();

function checkEntry (checkYN) {
    if (checkYN === 'yes' || checkYN === 'no'){
        return true;
    }
    else {
        alert ("Error, answer yes or no please");
        return false;
    }
}

switch (user){
    case 'yes':
        console.log("Great! Glad to hear it.");
        var cuddlyDog = 
            prompt("Do you like them to be cuddly?").toLowerCase();
        if (checkEntry(cuddlyDog)===false){break;}
        
        var activeDog = 
            prompt("Do you like them to be active?").toLowerCase();
        if (checkEntry(activeDog)===false){break;}                  
        
        
        if (cuddlyDog === 'yes' && activeDog === 'yes'){
            console.log("You should get a lab!");
            }
        else if (cuddlyDog === 'yes' && activeDog === 'no'){
            console.log("You should get a pug!");        
        
            }
        else if (cuddlyDog === 'no' && activeDog === 'yes'){
            console.log("You should get a shiba!");        
            
            }
        else {
            console.log("You probably shouldn't get a dog...");         
            }
        break;
    case 'no':
        console.log("Uh...What's wrong with you...");
        break;
    default:
        console.log("Error, you did something wrong here");
    
    }
