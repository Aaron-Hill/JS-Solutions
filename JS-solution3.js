function getPrimes(max) {
    var foo = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!foo[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                foo[j] = true;
            }
        }
    }
    return primes[primes.length - 1];
}

getPrimes(1000);