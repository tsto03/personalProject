document.querySelector('#start').addEventListener('click', bluePrint)

function bluePrint(){
    alert("Don't wait to become literate. Start NOW!")
    alert("First, you will answer some questions to help us lay out the blueprint.")
    alert("Please answer questions 4-8 with a simple 'yes' or 'no' response.")
    let name = prompt("1. What is your name?")
    let school = prompt("2. What school do you go to?")
    let grade = prompt("3. What grade are you in? Enter the number.")
    let college = prompt("4. Do you plan on attending college?")
    let car = prompt("5. Do you own a car?")
    let credit = prompt("6. Do you know how credit scores are calculated?")
    let saving = prompt("7. Have you thought about saving for a rainy day?")
    let debt = prompt("8. Have you learned about debt?")

    if (grade >= 11 && college === 'yes' && car === 'no' && credit === 'no' && saving === 'no'&& debt === 'no' ) {
        alert(`Hello, ${name}. Since you are in grade ${grade} and want to go to college, begin by reading about life after graduation and student loans. This should help you start thinking about how to plan the next couple of years and beyond. We've also gathered that you're of age to begin driving but don't have a car, and haven't been taught about credit, saving & debt. Read the basics on those topics before anything else. `);
    } else if (grade == 9 || grade == 10 && saving === 'no') {
        alert(`Hello, ${name}. Since you are in grade ${grade}, start by reading about life after graduation. These next few years will fly by so it's not too early to think ahead. We want you to start thinking about the real world; read our guide on saving and our debtors society article as well.`); 
    }
    else if (grade >= 6 && grade <= 8 ){
        alert(`${name}, you're still a pup! Come back your freshman year of high school for a more specialized blueprint. Until then, read our guide on saving for a rainy day. `)
    }
}          