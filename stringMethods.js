let myName = "Ussaid";
let charAtString = myName.charAt(3);
console.log(charAtString); //      a
// ++++++++++++++  String Validation  ++++++++++++++++++
function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.charAt(0) === "+" && phoneNumber.charAt(1) === "9";
}
console.log(isValidPhoneNumber("+92304-9414071"));
export {};
