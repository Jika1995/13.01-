//.....ДОМАШНЕЕ ЗАДАНИЕ СО СТРОКИ №208.....///

// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS

// let btnDark = document.querySelector('#dark')
// let btnLight = document.querySelector('#light')

// btnDark.addEventListener('click', e => {
//     console.log('hello');
//     document.body.classList.add('dark');
// })

// btnLight.addEventListener('click', e => {
//     document.body.classList.add('light');
// })

//Решение 2
// let con = confirm('Choose background')

// if(con) {
//     document.body.classList.add('dark')
// } else {
//     document.body.classList.add('light')
// }

// 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена)

// let btn = document.querySelector('#add-product');
// let ul = document.querySelector('ul')

// btn.addEventListener('click', e => {
//     let title = prompt('Enter title');
//     let price = prompt('Enter price');

//     let li = document.createElement('li');
//     li.innerText = `Name:${title}; Price: ${price}`
//     ul.append(li)

// })

//Решение Замира
// let btn = document.querySelector('button');
// let list = document.querySelector('ul');

// btn.addEventListener('click', () => {
//        let order = prompt('Add prod and price').split(' ')
//        list.innerHTML += `<li>Name:${order[0]}, price: ${order[1]}$</li>`
// })

//Решение Акыла

// let item = document.querySelector('ul');

// while(true) {
//     let productName = prompt('Имя продукта');
//     let productPrice = prompt('Цена продукта');
//     let list = <li>${productName}: ${productPrice}</li>
//     item.innerHTML += list;
//     let add = confirm('вы еще хотите добавить');
//     if(!add) {
//         break;
//     };
// };

// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие)

// let addImg = document.querySelector('#add-image');
// let addBlock = document.querySelector('#add-block');

// addImg.addEventListener('click', e => {
//     let ask = prompt('Enter link, width and height with space between them');
//     ask = ask.split(' ')

//     let img = document.createElement('img')
//     document.body.append(img);

//     img.src = ask[0]
//     // img.style.width = ask[1] + "px"
//     // img.style.height = ask[2] + "px"

//     // img.width = ask[1]
//     // img.height = ask[2]
// })

// addBlock.addEventListener('click', e => {
//     let ask = prompt('Enter color, width and height with space between them');
//     ask = ask.split(' ')

//     let div = document.createElement('div')
//     document.body.append(div);

//     div.style.backgroundColor = ask[0]
//     div.style.width = ask[1] + "px"
//     div.style.height = ask[2] + "px"
// })


// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ)

// let db = [
//         {
//             title: 'Samsung S10',
//             category: 'electronics',
//             price: 700,
//             desc: 'Super phone for your life!',
//             img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png'
//         },
//         {
//             title: 'iPhone 13 Pro',
//             category: 'electronics',
//             price: 1100,
//             desc: 'One of the most powerful cameras!',
//             img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg'
//         },
//         {
//             title: 'Apple',
//             category: 'fruits',
//             price: 2,
//             desc: 'Healthy fruit that is used in many dishes and desserts.',
//             img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg'
//         },
//         {
//             title: 'Orange',
//             category: 'fruits',
//             price: 7,
//             desc: 'Fruit for one of the most popular types of juice.',
//             img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg'
//         },
//         {
//             title: 'Audi R8',
//             category: 'cars',
//             price: 98000,
//             desc: 'A sports car that can reach tremendous speed.',
//             img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg'
//         }
// ]

// let list = document.querySelector('ul')
// let btn = document.querySelector('#filter')
// let render = document.querySelector('#render')

// function show () {
//     list.innerHTML = ''
//     db.forEach(item => {
//         let li = document.createElement('li');
//         list.append(li);
//         li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}`;
//         let img = document.createElement('img');
//         li.append(img);
//         img.src = item.img;
//         img.width = 100;
//         img.height = 100
//     })
// }

//Решение в классе

// function show (category = "all") { //дефолтное значение 
//     let newArr = JSON.parse(JSON.stringify(db)); //создание абсолютного клона

//     if (category !== 'all') {
//         newArr = newArr.filter(item => {
//             return item.category == category
//         })
//     };

//     list.innerHTML = '';

//     newArr.forEach(item => {
//         list.innerHTML += `<li>Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price} <img src="${item.img}" width = "100" height = "100"></img> </li>`
//     })
// }

// show()

// btn.addEventListener('click', e => {
//     let ask = prompt('Какая категория вам нужна?');
//     show(ask)
// })

// render.addEventListener('click', e => {
//     show()
// })

//решение в классе закончено

//btn.addEventListener('click', e => {
//     let ask = prompt('Какая категория вам нужна?');
//     list.innerHTML = ''
//     db.forEach(item => {
//         if(item.category == ask) {
//             let li = document.createElement('li');
//             list.append(li)
//             li.innerText = Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}
//             let img = document.createElement('img');
//             li.append(img)
//             img.src = item.img
//             img.width = 100;
//             img.height = 100
//         }
//     })
// })

// render.addEventListener('click', e => {
//     show()
// })

//// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым

//цена и название = текстовая информация

// let ul = document.querySelector('ul');
// let btn = document.querySelector('#add');

// let db = [];

// btn.addEventListener('click', e =>{
//     ul.innerHTML = ''

//     let title = prompt('Enter title');
//     let price = prompt('Enter price');
//     let imgLink = prompt('Enter image link');

//     let product = {
//         title: title,
//         price: price, 
//         img: imgLink
//     }

//     db.push(product)

//     db.forEach(item => {
//         let li = document.createElement('li');
//         ul.append(li);
//         li.innerHTML = `Title: ${item.title}, Price: ${item.price} <img src="${item.img}" width = 100 height = 100></img>`;

//         if(item.price < 100) {
//             li.style.color = 'red'
//         } else {
//             li.style.color = 'green'
//         }
//     })
    
// })

// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)
//1 карточка = 1 объект
//посмотреть и погуглить как работает инпут чекбокс, тру или фолс как вытащить

//HTML - form register
//3 inputa
//button register

//есть users list - в любом удобном формате, username, mailing = input checkbox
//кнопка alert Hello username

//тащит в js и упаковывается в объект, name, password, age, id, mailing: false
//input работает - mailing:true
//button  - > alert //циклом перебираем 

let nameInp = document.querySelector('#name');
let ageInp = document.querySelector('#age');
let passInp = document.querySelector('#password');

let btnReg = document.querySelector('#clickReg');

let usersList = [];

let ul = document.querySelector('ul');

//функция для сохранения/регистрации данных пользователей
function save () {

    if (!nameInp.value.trim() || !ageInp.value.trim() || !passInp.value.trim()) {
        alert('Some inputs are empty!');
        return
    };

    let userObj = {
        name: nameInp.value,
        password: passInp.value,
        age: ageInp.value,
        id: Date.now(),
        mailing: false
    }
    
    usersList.push(userObj);
    console.log(usersList)

    nameInp.value = '';
    ageInp.value = '';
    passInp.value = '';
       
}
//функция для чтения данных, то есть вывода списка пользователей
function render () {

    ul.innerHTML = ''

    //первый вариант через li id

    usersList.forEach(item => {
        let li = document.createElement('li');
        ul.append(li);
        li.setAttribute('id', item.id)
        li.innerHTML = `Username: ${item.name}; mailing: <input type = "checkbox">`
    })

    //второй вариант через присовение id input

    // usersList.forEach(item => {
    //     ul.innerHTML += `<li>Username: ${item.name}; mailing: <input id = "${item.id}" type = "checkbox"></li>`
    // })

    //////////////

}

//событие по клику к кнопке для регистрации/сохранения пользовтеля
btnReg.addEventListener('click', e => {

    e.preventDefault();
    save()
    render()

})

let btnSend = document.querySelector('#send');

//подключение по клику к кнопке для рассылки
btnSend.addEventListener('click', send)

function send () {

    //первый вариант через li массив и подключение к дочерним элементам
    // let liList = document.querySelectorAll('li');
    // // console.log(liList)
    // // console.log(liList[0].childNodes);
    // // console.log(liList[0].childNodes[1]);

    // liList.forEach(item => {

    //         if(item.childNodes[1].checked == true){
    //             usersList.forEach(elem => {
    //                 if(elem.id == item.id){
    //                     elem.mailing = true;
    //                     alert(`Hello ${elem.name}`)
    //                 }
    //             })
    //         }
    //         console.log(usersList)
    //         // console.log(elem.id)
    //     // console.log(item.id)
    // })
    // console.log(liList)

    //второй вариант через input массив

    // let inpList = document.querySelectorAll('input');
    // inpList.forEach(item => {
    //     if (item.checked) {
    //         usersList.forEach(elem => {
    //             if(elem.id == item.id){
    //                 elem.mailing = true;
    //                 alert(`Hello ${elem.name}`)
    //             }
    //         })
    //     } 
    // })
    // console.log(inpList)

    ////////
}
