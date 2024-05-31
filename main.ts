let sentence:string = "believe you can and you're halfway there";
let words:string[]=sentence.split(" ");
let titleCaseName:string = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
    };
    console.log(titleCaseName);
     

    let quote:string = "our greatness weakness lies in giving up";
    let breaking:string[]= quote.split(" ");
    let titleCaseName2:string = "";
    for (let i = 0; i < breaking.length; i++) {
        titleCaseName2 += breaking[i].charAt(0).toUpperCase() + breaking[i].slice(1).toLowerCase() + " "
        }
        console.log(titleCaseName2);
