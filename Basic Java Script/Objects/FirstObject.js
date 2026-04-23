// An Object Is A Collection Of Related Properties As Key-Value Pairs

// Way 1
let storeManager={}; // This Is The Object;
// These Are The Properties
storeManager.rangeTilesPerTurn=4;
storeManager.socialSkills=50;
storeManager.streetSmarts=50;
storeManager.health=30;
storeManager.specialAbility="Finding Business Opportunities";
storeManager.greeting="Let's Make Some Money";

console.log(storeManager.socialSkills);

// Way 2
// This The Best Way To Declare Object And Assign Properties
var assistantManager={ // This Is The Object
    // These Are The Properties
    movement:3,
    socialSkills:30,
    streetSmarts:30,
    health:40
}
console.log(assistantManager); // To Access assistantManager Object
console.log(assistantManager.streetSmarts);