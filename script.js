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

let randomAge = Math.floor(Math.random() * 60) + 1;
let randomWeigth = Math.floor(Math.random() * 100) + 40;

let womenW = [
    l_name = [
        'Ерохина',
        'Иванова',
        'Шишкина',
        'Кондакова',
        'Романова'
    ],
    name = [
        'Маша',
        'Катя',
        'Настя',
        'Варя',
        'Оля'
    ],
    otchestvo = [
        'Афанасиевна',
        'Богдановна',
        'Даниловна',
        'Нестеровна',
        'Дмитриевна'
    ],
    uniqueAbilies = [
        'Быстро читает',
        'Быстро бегает',
        'Танцует',
        'Поет',
        'Сочиняет стихи'
    ]
]
let men = [
    l_name = [
        'Боталов',
        'Михалец',
        'Трунев',
        'Шевченко',
        'Волков'
    ],
    name = [
        'Ваня',
        'Даня',
        'Саша',
        'Миша',
        'Рома'
    ],
    otchestvo = [
        'Харитонович',
        'Серафимович',
        'Михеевич',
        'Владиславович',
        'Андреевич',
    ],
    uniqueAbilies = [
        'Очень сильный',
        'Читает рэп',
        'Водит машину',
        'Быстро собирается',
        'Играет в кс'
    ]
]

let gender = [
    'women',
    'men'
]

let genders = gender[Math.floor(Math.random() * (gender.length))];

if (genders === "women") {
    let randomL_name = Math.floor(Math.random() * (womenW.l_name.length - 1));
    let randomName = Math.floor(Math.random() * (womenW.name.length - 1));
    let randomOtchestvo = Math.floor(Math.random() * (womenW.Otchestvo.length - 1));
    let uniqueAbilies = Math.floor(Math.random() * (womenW.uniqueAbilies.length - 1));
}
пщоалдвоавопо