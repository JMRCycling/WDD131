const character = {
    name: "Snortleblat",
    // age: 20,
    // gender: "Male",
    // race: "Human",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",
    // mana: 50,
    // strength: 15,
    // agility: 10,
    // intelligence: 5,
    // equipment: {
    //     weapon: "Sword",
    //     armor: "Leather Armor",
    //     accessory: "Ring of Strength"
    // },
    // skills: ["Slash", "Block", "Charge"],
    // inventory: ["Health Potion", "Mana Potion", "Gold Coin"]
    attacked: function (damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
            return `${this.name} has died!`;
        }
        document.querySelector(".health").textContent = "Health: "+this.health;
    },
    levelUp: function () {
        this.level++;
        // this.health += 20;
        document.querySelector("#level").textContent = "Level: "+this.level;
        // document.querySelector(".health").textContent = "Health: "+this.health;
    }
};

console.log(character.name);
console.log(character.class);
console.log(character.level);
console.log(character.health);


document.querySelector("img").setAttribute("src", character.image);
document.querySelector(".name").textContent = character.name;
document.querySelector("#characterClass").textContent = "Class: "+character.class;
document.querySelector("#level").textContent = "Level: "+character.level;
document.querySelector(".health").textContent = "Health: "+character.health;

document.querySelector("#attackButton").addEventListener("click", function () {
    const damage = 20;
    const result = character.attacked(damage);
    if (result) {
        alert(result);
    }
});
document.querySelector("#levelUp").addEventListener("click", function () {
    character.levelUp();
});
