/*Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
   - count - сюда передается ответ на первый вопрос
   - movies - в это свойство поместить пустой объект
   - actors - тоже поместить пустой объект
   - genres - сюда поместить пустой массив
   - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
   - 'Один из последних просмотренных фильмов?'
   - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
   movies: {
       'logan': '8.1'
   }
Проверить, чтобы все работало без ошибок в консоли */
'use strict';
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/*let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


console.log( 5 === 5 && 3 > 1 || 5);*/

for (var i = 0; i < 3; i++) {
  console.log(i);

  for (var j = 0; j < 3; j++) {
    console.log(j);
  }
} //*
//**
//***
//****
//*****
//******


var result = '';
var lenth = 7;

for (var _i = 1; _i < lenth; _i++) {
  for (var _j = 0; _j < _i; _j++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);

function firstTask() {
  for (var _i2 = 5; _i2 < 11; _i2++) {
    console.log(_i2);
  }
}

firstTask();

function secondTask() {
  for (var _i3 = 20; _i3 >= 10; _i3--) {
    if (_i3 === 13) break;
    console.log(_i3);
  }
}

secondTask();