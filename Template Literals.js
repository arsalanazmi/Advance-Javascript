let firstName = "Arsalan";
let lastName = "Azmi";

var fullName = "My first name is " + firstName + " & last name is " + lastName;
console.log(fullName);

var name = `My first name is  ${firstName}  & my last name is  ${lastName}`;
console.log(name);




    let paragraph =
    `Paragraph:
1. Sind:
        1.1 Karachi:
        1.2 Hyderabad:
2. Punjab:
        2.1 Lahore:
        2.2 Islamabad:
3. KPK:
        3.1 Peshawer:
        3.2 SAWAT:
4. Balochistan:
        3.1 Quetta:
        3.2 Ziyarat:
Conclusion: This is Template literal example`;


console.log(paragraph);

document.getElementById('root').innerHTML = paragraph;

document.write(paragraph)