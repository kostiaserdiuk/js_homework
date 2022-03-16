//#1
// for (i = 1; i <= 100; i++){
    // document.write(i + '<br>')
// }

//#2
// for (i = 11; i <= 33; i++){
    // document.write(i + '<br>')
// }

//#3
// for (i = 0; i <= 100; i += 2){
    // document.write(i + '<br>')
// }

//#4
// let sum = 0
// for (i = 1; i <= 100; i++){
    // sum += i
// }
// document.write(sum + ' это сумма чисел от 1 до 100')

//#5
// let a = [1,2,3,4,5]
// for (i = 0 ; i < a.length ; i++){
    // console.log(a[i])
// }

//#6
// let a = [1,2,3,4,5]
// let result = 0
// for (i = 0 ; i < a.length ; i++){
    // result += a[i]
// }
// console.log(result)

//#7
// let obj = {
    // green : 'зеленый',
    // red : 'красный',
    // blue : 'синий'
// }
// for (let key in obj){
    // alert(key +' - '+ obj[key] )
// }

//#8
// let obj = {
//     'Коля' : '200',
//     'Вася' : '300',
//     'Петя' : '400'
// }
// for(key in obj){
//     console.log(key + ' - зарплата ' + obj[key] + ' долларов')
// }

//#9
// let num = [2,5,9,15,0,4]
// for (i = 0 ; i < num.length ; i++){
//     if (num[i] > 3 && num[i] < 10){
//         console.log(num[i])
//     }
// }

//#10
// let num = [-2,1,-3,4,6,-10]
// let sum = 0
// for (i = 0 ; i < num.length ; i++){
//     if (num[i] > 0){
//         sum += num[i]
//     }
// }
// console.log(sum)

//#11
// let a = [1, 2, 5, 9, 4, 13, 4, 10]
// for (i = 0 ; i < a.length ; i++){
//     if ( a[i] == 4){
//         alert('Есть')
//         break
//     }
// }

//#12
// let a = [10, 20, 30, 50, 235, 3000]
// for (i = 0 ; i < a.length ; i++){
//     let num = String(a[i])
//     let char = num[0]
//     if (char == 1 || char == 2 || char == 5){
//         console.log(num)
//     }
// }

//#13
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]   // под вопросом 
// let string = '-'
// for (i = 0 ; i < a.length ; i++){
//     string += a[i] + '-'
// }
// document.write(string)

//#14
// let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// for (i = 0 ; i < days.length ; i++){                                                     //первый вариант
//     let day = String(days[i])
//     let char = day[0]
//     if (char != 'S'){
//         document.write(days[i] + '<br>')
//     } else {document.write('<b>'+ days[i] + '</b>' + '<br>')}
// }
// for (i in days){                                                                         //второй вариант
//     if (i == 5 || i == 6){
//         document.write('<b>'+ days[i] + '</b>' + '<br>')
//     }else {document.write(days[i] + '<br>')}
// }

//#15
// let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// let currentDay = 'Tuesday'
// for (i in days){
//     if(days[i] == currentDay){
//         document.write('<i>' + days[i] + '</i>' + '<br>')
//     }else {document.write(days[i] + '<br>')}
// }

//#16
// let n = 1000
// let num = 0 
// for (n ; n >= 50 ; n /= 2){         //первый способ
//     num ++
// }
// while(n >= 50){                        //второй способ
//     n /= 2
//     num++
// }
// console.log(n)
// console.log(num)


