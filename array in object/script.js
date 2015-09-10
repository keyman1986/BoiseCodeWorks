// var theBand = {
//     members: [{
//         name: "Matt",
//         insturment: "Drums"
//     },{
//         name: "James",
//         insturment: "Guitar"
//     },{
//         name: "Jake",
//         insturment: "Piano"
//     }],
//     isMember: function (nameToLookFor){
//       for(var i = 0; i < this.members.length; i++){
//         if(this.members[i].name === nameToLookFor){
//           return alert(nameToLookFor + " is in the band and plays the " + this.members[i].instrument)
//         }
//       }
//       alert(nameToLookFor + " is not in the band");
//     }
// }
// theBand.isMember("Kris")


// var myObj = {
//     prop1: "Hey"
// };
// myObj.newProp = "hey you";
// myObj["anotherProp"] = "Another Prop";

// var person1 = {
//     name: "Tom",
//     height: 65
// }

// function personMaker (name, height){
//     return {
//         name: name,
//         height: height
//     }
// }

// var tom = personMaker("Tom", 72);




function PersonConstructor(name, height){
    this.name = name;
    this.height = height;
}

var billy = new PersonConstructor("billy", 48)










var food = ["Pizza", "Burrito", "Fries", "Chips", "Salad"]

var i = 0;
while(i < food.length){
    if(food[i] === "Fries"){
        console.log("WE FOUND " + food[i] + " at index:" + i);
        break;
    }
    console.log("Checking...... " + i);
    i++;
}


for (var i = 0; i <= 100; i++) {
     console.log(i);   