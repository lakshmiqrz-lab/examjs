// Question 3
//Find the sum of first N natural numbers using recursion

function sum(n){
    let total=0;
    for (let i=1; i<=n; i++){
        total=total+i;
    }
    console.log(total);
}
sum(5);
