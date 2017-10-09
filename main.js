// var div = document.querySelector('div');

// =======> Добавляем class к элементу <=======
// div.classList.add('five', 'six'); // в fireFox ниже 25-й версии перечесление классов не работает

// =======> Удаляем class у элемента <=======
// div.classList.remove('one');

// =======> Переключаем class у элемента <=======
// div.classList.toggle('main');
// div.classList.toggle('main');

// =======> Проеверяем, есть ли class у элемента <=======
// if (div.classList.contains('main')) {
//     console.log('Содержит!');
// }

// console.log(div.classList);


// CLASS WORK 05/10/2017
// Задача 1. Добавьте всем изображениям на странице класс bordered в оформлении которого содержится граница и тень.

var isb = document.querySelectorAll('.img');

for (var i = 0; i < isb.length; i++) {
    isb[i].classList.add('imgSB');
}

// Задача 2.Добавьте изображениям, по которым кликнул пользователь, класс bordered в оформлении которого содержится граница и тень.

var imG = document.querySelectorAll('.img');

for (var i = 0; i < imG.length; i++) {
    imG[i].onclick = function() {
        this.classList.toggle('imgSB');
    };
}

// Задача 3.Создайте с помощью JS несколько блоков.Четным блокам добавьте класс bordered. Добавьте на все блоки событие клика. При клике удаляйте класс bordered. Обратите внимание, что происходит если клик осуществляется по элементу без данного класса.

var div = document.querySelector('.ten');

function three() {
    for (var i = 0; i <= 21; i++) {
        var blocks = document.createElement('div');
        blocks.innerHTML = i;
        div.appendChild(blocks);

        if (i % 2 == 0) {
            blocks.classList.add('bordered');
        }
        blocks.onclick = function() {
            this.classList.toggle('bordered');
            calcBordered();
        };
    }
}

three();

// Задача 4. Выведите в консоль количество элементов, которые имеют класс bordered.

function calcBordered() {
    var brdrd = document.querySelectorAll('.bordered');
    console.log(brdrd.length);
}

// Задача 5. Создайте два класса: red и blue. Каждый класс заливает элемент соответствующим цветом. Напишите скрипт, который при клике меняет класс red на blue и наоборот.

// Закомментил, потому что мешает !!!

// document.onclick = function(e) {
//     console.log(e);
//     if (e.target.classList.contains('red')) {
//         e.target.classList.remove('red');
//         e.target.classList.toggle('blue');
//     } else {
//         e.target.classList.remove('blue');
//         e.target.classList.toggle('red');
//     }
// }

// Задача 6. Напишите аккордеон. Используя верстку представленную ниже задайте класс min высоту элемента так, чтобы было видно только заголовок h1. Создайте скрипт, который при клике удаляет класс min (если он есть у элемента) или добавляет его если его нет. При этом текст находящийся в параграфе будет скрываться или становится видимым.

var h1 = document.querySelectorAll('h1');
var p = document.querySelectorAll('.accBlock p');

for (var i = 0; i < p.length; i++) {
    p[i].classList.add('min', 'opas');
}

for (var i = 0; i < h1.length; i++) {
    h1[i].onclick = function() {
        accV2();
        this.nextElementSibling.classList.toggle('min');
        this.nextElementSibling.classList.toggle('opas');
    };
}

// Задача 7. Используя код предыдущей задачи доработайте ее так, чтобы в один момент времени был виден только один элемент. Если кликают на другой элемент, то скрываются все открытые, а данный становится видимым.
// Модернизировал :)

function accV2() {
    for (var i = 0; i < p.length; i++) {
        if (!p[i].classList.contains('min', 'opas')) {
            p[i].classList.add('min', 'opas');
        }
    }
}

// Задача 8. Создайте блок и поместите в него изображения. С помощью CSS позиционируйте изображения так, чтобы они располагались друг на друге. Добавьте всем кроме одного класс hide, который скрывает изображения. При клике на блоке скрывайте текущее изображение и показывайте следующее.

// Получаем все картинки 8-й задачи по CSS-селектору '.imgBlock8 img'
var img = document.querySelectorAll('.imgBlock8 img');

for (var i = 1; i < img.length; i++) {
    img[i].classList.add('hide');
}

// Проходим циклом по всем картинкам 8-й задачи
for (var i = 0; i < img.length; i++) {
    // При клике на картинку/элемент запускаем анонимную функцию
    img[i].onclick = function() {
        // Проверяем, есть ли у данного элемента class='hide' и есть ли у данного элемента следующий соседний элемент
        if (!this.classList.contains('hide') && this.nextElementSibling) {
            //Если true, то:
            //1. Добавляем к элементу class='hide'
            this.classList.add('hide');
            //2. Переключаем class следующего соседнего элемента с 'hide' на не-'hide' ;)
            this.nextElementSibling.classList.toggle('hide');
        } else {
            // если false, добавляем к данному элементу class='hide' и ...
            this.classList.add('hide');
            //... удаляем class='hide' у первого элемента массива
            img[0].classList.remove('hide');
        }
    };
}