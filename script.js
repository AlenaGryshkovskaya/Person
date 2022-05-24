/*let names = [
    'Маша',
    'Паша',
    'Женя',
    'Даня',
    'Саша',
    'Катя'
]
let l_names = [
    'Иванов',
    'Васильева',
    'Ващенко',
    'Михалец',
    'Данилов',
    'Фадеев'
]

let randIndexNames = Math.floor(Math.random() * (names.length - 1));
let randIndexL_Names = Math.floor(Math.random() * (names.length - 1));
console.log(l_names[randIndexL_Names], names[randIndexNames]);*/

//console.log(randIndex);
//console.log(names.length);
//console.log(names[names.length - 1]);
//console.log(names[names.length - 1]);
//console.log(names[randIndex]);

let generation = document.querySelector('.generation');


let womenW = {
    l_name: [
        'Ерохина',
        'Иванова',
        'Шишкина',
        'Кондакова',
        'Романова'
    ],
    name: [
        'Маша',
        'Катя',
        'Настя',
        'Варя',
        'Оля'
    ],
    otchestvo: [
        'Афанасиевна',
        'Богдановна',
        'Даниловна',
        'Нестеровна',
        'Дмитриевна'
    ],
    uniqueAbilies: [
        'Быстро читает',
        'Быстро бегает',
        'Танцует',
        'Поет',
        'Сочиняет стихи'
    ]
}
let manW = {
    l_name: [
        'Боталов',
        'Михалец',
        'Трунев',
        'Шевченко',
        'Волков'
    ],
    name: [
        'Ваня',
        'Даня',
        'Саша',
        'Миша',
        'Рома'
    ],
    otchestvo: [
        'Харитонович',
        'Серафимович',
        'Михеевич',
        'Владиславович',
        'Андреевич',
    ],
    uniqueAbilies: [
        'Очень сильный',
        'Читает рэп',
        'Водит машину',
        'Быстро собирается',
        'Играет в кс'
    ]
}

let gender = [
    'women',
    'man'
]



generation.addEventListener('click', function (){
    let randomAge = Math.floor(Math.random() * 60) + 10;
    let randomWeigth = Math.floor(Math.random() * 60) + 40;
    let genders = gender[Math.floor(Math.random() * (gender.length))];
    if (genders === "women") {
        let randomL_name = Math.floor(Math.random() * (womenW.l_name.length - 1));
        let randomName = Math.floor(Math.random() * (womenW.name.length - 1));
        let randomOtchestvo = Math.floor(Math.random() * (womenW.otchestvo.length - 1));
        let randomUniqueAbilies = Math.floor(Math.random() * (womenW.uniqueAbilies.length - 1));
        document.getElementById("info").innerHTML = 'ФИО: ' + womenW.l_name[randomL_name]+ ' ' + womenW.name[randomName] + ' ' +
            womenW.otchestvo[randomOtchestvo] + '<br>' + 'Пол: ' + 'Женщина' + '<br>' + 'Возраст: ' + randomAge +
            '<br>' + 'Вес: ' + randomWeigth + '<br>' + 'Уникальная способность: ' + womenW.uniqueAbilies[randomUniqueAbilies];
    } else if (genders === "man") {
        let randomL_name = Math.floor(Math.random() * (manW.l_name.length - 1));
        let randomName = Math.floor(Math.random() * (manW.name.length - 1));
        let randomOtchestvo = Math.floor(Math.random() * (manW.otchestvo.length - 1));
        let randomUniqueAbilies = Math.floor(Math.random() * (manW.uniqueAbilies.length - 1));
        document.getElementById("info").innerHTML = 'ФИО: ' + manW.l_name[randomL_name]+ ' ' + manW.name[randomName] + ' ' +
            manW.otchestvo[randomOtchestvo] + '<br>' + 'Пол: ' + 'Мужчина' + '<br>' + 'Возраст: ' + randomAge +
            '<br>' + 'Вес: ' + randomWeigth + '<br>' + 'Уникальная способность: ' + manW.uniqueAbilies[randomUniqueAbilies];
    }
})
//document.getElementById("info").innerHTML=generation;