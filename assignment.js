function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var input = Math.floor(feetToMile(50000));
console.log("Result is :", input);
//woodCalculator
function woodCalculator( chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    
    return totalWood;
}
var result = woodCalculator(10, 3, 4);
console.log("Total wood:", result);

//brickCalculator

function brickCalculator(floor){
    const brickCount = 1000;
    var totalBrick;
    if(floor <= 10){
        totalBrick = 15 * brickCount;
    }
    else if(floor <= 20){
        totalBrick = (15 * brickCount) + (12 * brickCount);
    }
    else{
        totalBrick = (15 * brickCount) + (12 * brickCount) + (10 * brickCount);
    }
    return totalBrick;
}

var brick = brickCalculator(40);
console.log("Total brick:", brick);
//tinyFriend

function tinyFriend(friends){
    var smallName = friends[0];
    for(var i = 0; i < friends.length; i++){
        var currentName = friends[i];
        if(currentName.length < smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}
var nameInput = tinyFriend(['mita', 'jonys', 'Roy']);
console.log(nameInput);