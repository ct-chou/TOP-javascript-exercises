const findTheOldest = function(people) {
    // const sortAge = people.sort((a,b) =>
    //     ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1: -1);
    const sortAge = people.sort((a,b) => {
        const thisYear = new Date().getFullYear();
        if(a.yearOfDeath == undefined) {
            ageA = thisYear - a.yearOfBirth;
        }
        else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        if(b.yearOfDeath == undefined) {
            ageB = thisYear - b.yearOfBirth;
        }
        else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }
        if(ageA < ageB) {
            return 1;
        }
        else {
            return -1;
        }
    });
    return sortAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
