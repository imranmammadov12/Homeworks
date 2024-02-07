////////////////////1)
const regexp = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
/////////////////////

////////////////2)

const azeNums = /^\(\+994\)\s(?:50|51|10|99|55|70|77|60)\s\d{3}\s\d{2}\s\d{2}$|^\(\+994\)-(?:50|51|55|70|77)-\d{3}-\d{2}-\d{2}$/;

const num1 = "(+994) 55 123 45 67";
const num2 = "(+994)-55-123-45-67";
const num3 = "(+994) 44 123 45 67"; 

console.log(regexp.test(num1)); 
console.log(regexp.test(num2)); 
console.log(regexp.test(num3)); 
//////////////////


////////////////3)

const password = document.querySelector('#password');

password.addEventListener('input', function() {
    const passwordInput = this.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,]).{8,16}$/;

    const isPasswordValid = passwordRegex.test(passwordInput);

    if (isPasswordValid) {
        console.log("true");
    } else {
        console.log("false");
    }
});

//////////////////


/////////////////4)

const string = "Hello 123 world 456";
const digitRegex = /\d/g;

const hasDigits = digitRegex.test(string);

if (hasDigits) {
    const resultString = string.replace(digitRegex, 'D');
    console.log(resultString);
} else {
    console.log("String doesnt has digits.");
}

