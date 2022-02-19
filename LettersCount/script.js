const inputTxt = document.querySelector("#input-text");
const btnOk = document.querySelector("#btnOk");
const outputDiv = document.querySelector(".output-container");

function countLetters(word) {
    let lettersArray = word.split("");
    const alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
    let counterArray = new Array(alphabetArray.length).fill(0);

    for (let i=0; i<lettersArray.length; i++){
        for (let j=0; j< alphabetArray.length; j++) {
            if (lettersArray[i].toLowerCase() === alphabetArray[j]){
                counterArray[j] = counterArray[j] + 1;
                break;
            }
        }
    }

    for (let i=0; i<alphabetArray.length; i++){

        if (counterArray[i] !== 0) {
            console.log(alphabetArray[i] + ": " + counterArray[i]);
            let p = document.createElement("p");
            p.innerHTML = alphabetArray[i] + ": " + counterArray[i];
            outputDiv.appendChild(p);  
        }
    }
}

function refreshDiv(){
    if (outputDiv.hasChildNodes()) {
        let elements = outputDiv.childElementCount;
        for (let i=0; i<elements; i++) {
            outputDiv.removeChild(outputDiv.lastChild);
        }
    }
}

btnOk.addEventListener("click", () => {
    refreshDiv();
    countLetters(inputTxt.value);
});








// function countLetters(str) {
//     let lettersCount = {};

//     for(let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if(lettersCount[char] === undefined) {
//             lettersCount[char] = 1;
//         } else {
//             lettersCount[char] += 1;
//         }
//     }

//     let sortedKey = [];

//     for (let key in lettersCount) {
//         sortedKey.push(key);
//     }

//     sortedKey.sort();

//     for(let i = 0; i < sortedKey.length; i++) {
//         let key = sortedKey[i];
//         console.log(key, ": ", lettersCount[key]);
//     }
// }

// countLetters("Helloh");