export function factorial(n){
    if (n <= 0){return}

    return (n===1)? 1:n * factorial (n-1)
}