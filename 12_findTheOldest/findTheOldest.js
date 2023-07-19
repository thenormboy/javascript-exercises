const findTheOldest = function(people) {

    const oldestList = people.sort(function(a, b) {
        if (!a.yearOfDeath) {
            a.yearOfDeath = (new Date()).getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = (new Date()).getFullYear();
        }

        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;

        return lastPerson > nextPerson ? -1 : 1;
    })

    console.table(oldestList);

    return oldestList[0];

};

// Do not edit below this line
module.exports = findTheOldest;
