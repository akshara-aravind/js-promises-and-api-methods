//RECURSION: solve a problem by breaking it into smaller parts.
function fact(n){
    if(n === 1) return 1
    return n * fact(n-1)
}
console.log(fact(5));

//print no n to 1
function count(n){
    if(n === 0) return
    console.log(n)
    count(n-1)
}
count(5)

//print no 1 to n
function increase(n){
    if(n === 0)return ;
    increase(n-1)
    console.log(n)
}
increase(5)

//sum of n numbers
function sum(n){
    if(n===0)return n
    return n + sum(n-1)
}
console.log(sum(5))

//sum of element in an array
function arrSum(arr,i=0){
    if(i === arr.length) return 0
    return arr[i] + arrSum(arr,i+1)
}
console.log(arrSum([1,2,3]))

//reverse a string
function reverse(str){
    if(str === '') return ''
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse('hello'))

//fibunacci no
function fibunacci(n){
    if(n <= 1) return n;
    return  fibunacci(n-1)+fibunacci(n-2)
}
console.log(fibunacci(5))

//myMap
function myMap(arr,callback){
    let result = []
    for(let i=0; i<arr.length;i++){
        result.push(callback(arr[i]))
    }
    return result
}
console.log(myMap([1,2,3],x => x*2))

//myFilter
function myFilter(arr,callback){
    let result =[]
    for(let i=0; i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(myFilter([1,2,3,4,5,6,7,8],x => x%2 !== 0))

//myReduce
function myReduce(arr,callback,intitialValue){
    let acc = intitialValue
    for(let i=0; i<arr.length;i++){ 
    if(acc === undefined){
        acc = arr[0]
    }else{
           acc = callback(acc,arr[i])
        }
    }
    return acc
}
console.log(myReduce([1,2,3],(acc,curr) => acc + curr))