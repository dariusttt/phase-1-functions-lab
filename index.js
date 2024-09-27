// Code your solution in this file!
const index=index.js
function distanceFromHqInBlocks(block){

   return Math.abs(42-block);
}

function  distanceFromHqInFeet(block){
    
return Math.abs(distanceFromHqInBlocks(block))*264;
}

function distanceTravelledInFeet(start , destination){

return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start , destination){
const feet=distanceTravelledInFeet(start , destination);

    if(
        feet < 400){
        return 0
    }
    else if(
        feet > 400 && feet <= 2000 ){
            return 2.56
    }
    else if(
        feet > 2000 && feet < 2500){
            return 25
        }
    else{
        feet > 2500
        return 'cannot travel that far';
    }
}