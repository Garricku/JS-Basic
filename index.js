// This is better better naming
const firstName = 'Ricki';
const lastName = 'Potts';
// Use camelCase
// Const varibles cannot be changed

console.log(firstName, lastName);

let userAge = 29;
console.log(userAge);

function howOldAreYou() {
    // This is condtional which lets us execute different outcomes
    if (userAge >= 21) {
        // Usually we use single quotes for stings
        console.log('I can drink all I want!');
        // Overwriting the age to get a diifernt output next time
        console.log(userAge);
        userAge = 12;
    }
    else if (userAge == undefined) {
        console.log('You should not be asking my age!')
        userAge = 29;
    }
    else {
        // Here we use the double quotes, so there are no issues with the apostrophe in the word can't
        console.log("I can't drink yet!");
        // Opps I did it again! I changed the variable...
        userAge = undefined;
        console.log(userAge);
    }
}

// Each time we call this the out changes
howOldAreYou();
howOldAreYou();
howOldAreYou();
// I didn't use semicolong this time gasp
howOldAreYou()

// Lets try with a class doing the same thing
userDetails = {
    userId: 'xy777',
    firstName: 'Garrick',
    lastName: 'Potts',
    age: 29,
    gender: 'non of your bee\'s wax.' // OMG did I just escape that apostrophe!?
}
// Is that a JSON string I see!!! Is it !!??? Cause I am not surreee, LOL.

// First lets see what userDetails logs
console.log(userDetails);
console.log('My name is ' + userDetails.firstName + ' ' + userDetails.lastName + ' and I am ' + userDetails.age + '.');

// I think is safe to say I am not useless at JavaScript, but I still have much to learn
// Passing parameters are so useful
function whatIsYourGender(userId) {
    if (userId == userDetails.userId) {
        console.log('My gender is ' + userDetails.gender);
    }
}

// Now we can know what my gender is, HEHEHEHE...
whatIsYourGender('xy777');

// So much more to learn! I'll see you around I guess?