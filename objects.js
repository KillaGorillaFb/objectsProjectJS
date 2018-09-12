const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength, and ${this.xp} XP points.`;
    }
};

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


/**********Modeling a dog************/

const dog = {
    name: "Fang",
    species: "boarhound",
    size: "75\"",
    bark(){
        return ("Grrr! Grrr!");
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


/*****Modeling a Bank Account******/
const account = {
    name: "Alex",
    balance: 0,
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`;
    },
    credit(account){
        this.balance += 250;
        this.balance -= 80;
        return this.balance;
    }    
}

console.log(account.describe());
(account.credit());
console.log(account.describe());

