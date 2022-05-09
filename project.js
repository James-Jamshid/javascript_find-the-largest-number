//find the largest number

function num1(a,b,c) {
   
    if (a>b && a>c) {
        return a
        
    }
    else if (b>a && b>c) {
        return b
        
    }
    else {
        return c
    }
}
console.log(num1(1,4,2));