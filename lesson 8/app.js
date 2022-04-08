//concat
//#1
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// console.log(a.concat(b))
//reverse

//#2
// let a = [1, 2, 3]
// console.log(a.reverse())

//push, unshift
//#3, #4
// let a = [1, 2, 3]
// let b = [1, 2, 3]
// a.push(4, 5, 6)
// b.unshift(4, 5, 6)
// console.log(a)
// console.log(b)

//shift, pop
//#5, #6 
// let a = ['js', 'css', 'jq']
// let b = ['js', 'css', 'jq']
// console.log(a.shift())
// console.log(b.pop())

//slice 
//#7,8
// let a = [1, 2, 3, 4, 5]
// console.log(a.slice(0, 3))
// console.log(a.slice(3, 5))

//splice
//#9
// let a = [1, 2, 3, 4, 5]
// a.splice(1, 2)
// console.log(a)
//#10
// let a = [1, 2, 3, 4, 5]
// let removed = a.splice(1, 3)
// console.log(removed)
//#11
// let a = [1, 2, 3, 4, 5]
// let added = a.splice(2, 0, 'a', 'b', 'c')
// console.log(a)
//#12
// let a = [1, 2, 3, 4, 5]
// a.splice(1, 0, 'a', 'b')
// a.splice(6, 0, 'c')
// a.splice(8, 0, 'e')
// console.log(a)

//sort
//#13
// let a = [3, 4, 1, 2, 7]
// a.sort()
// console.log(a)

//object.keys
//#14
// let a = {js:'test', jq: 'hello', css: 'world'}
// console.log(Object.keys(a))