var DeretFibonacci;

DeretFibonacci = () => {
    var i = 2;
    var n = 21
    var fib = []; // Initialize array!
    fib[0] = 0;
    fib[1] = 1;
    var result = []
    while(i> 1 && i<= n) {
        fib[i] = fib[i - 2] + fib[i - 1];
                    //0     + 1 = 1; => i = 2
                    //1     + 1 = 2;   i= 3
                    // 1    + 2 = 3    i=4
                    //2     + 3 = 5 
        // console.log(fib[i]);
        if(fib[i] <= n) {
            result.push(fib[i])
        }
        i++
    }
    console.log(result.toString());
}
var cetak
cetak = DeretFibonacci();