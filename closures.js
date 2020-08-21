// CLOSURE

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = () => {
        saveCoins += countCoins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

// LEXICAL

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

// PRIVATE VARIABLES

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

newPerson = person ();
console.log(newPerson.getName());
newPerson.setName("Xavier");
console.log(newPerson.getName());

// LOOPS

const loopFunctions = () => {
    for (let i = 0; i <10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}