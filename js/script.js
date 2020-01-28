// // 1.0 //////////////////////////////////////////////////////

let lang = prompt('Выберите язык - "en" или "ru"');

let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 
'Пятница', 'Суббота', 'Воскресенье']; 

let en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 
'Friday', 'Saturday', 'Sunday'];

if(lang === 'ru') {
    for (let i = 0; i < ru.length; i++) { 
        console.log(ru[i]); 
        }
} else if(lang === 'en'){
    for (let i = 0; i < en.length; i++) { 
        console.log(en[i]); 
    }    
} else {
    console.log('Донт андерстенд! Трай эгейн!');
}


// // 1.2 //////////////////////////////////////////////////////


switch(true) {
    case (lang === 'ru'):
        for (let i = 0; i < ru.length; i++) { 
        console.log(ru[i]); 
        }
        break;

    case (lang === 'en'):
        for (let i = 0; i < en.length; i++) { 
            console.log(en[i]); 
        }
        break;
    
    default:
    console.log('Донт андерстенд! Трай эгейн!');
}

// // 1.3 //////////////////////////////////////////////////////



let arrWeek = {
	'ru': ru,
    'en': en,
};
console.log(arrWeek[lang]);




// // 2.0 //////////////////////////////////////////////////////


let namePerson = prompt('Введите имя');
(namePerson === 'Артем') ? console.log('Директор'):
(namePerson ==='Михаил') ? console.log('Преподаватель'):
console.log('Студент');