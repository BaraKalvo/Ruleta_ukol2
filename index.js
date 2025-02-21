const number = Number(prompt('Zadej celé číslo od 0 do 36'));


if ( (number > 0 && number <= 10) || (number >=19 && number <= 28) ) {
    if (number % 2 === 0) {
        document.body.innerHTML += `Číslo ${number} je sudé a černé.`;
    } else {
        document.body.innerHTML += `Číslo ${number} je liché a červené.`;
    }
} else if ( (number > 10 && number < 19) || number > 28) {  
    if (number % 2 === 0) {
        document.body.innerHTML += `Číslo ${number} je sudé a červené.`;
    } else {
        document.body.innerHTML += `Číslo ${number} je liché a černé.`;
    };
} else {
    document.body.innerHTML += `Uvedené číslo je nula.`;
};


// u části else if mám ještě variatnu: else if ( !(number <= 10) && !(number >=19) || !(number <= 28) ) - nevím, který zápis je lepší? Ten, první ( (number > 10 && number < 19) || number > 28) ) mi přijde přehlednější, tento s použitím negací zase rychlejší na napsání, protože vlastně jen neguji to, co jsem napsala v první podmínce
