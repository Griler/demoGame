function giaithua(a) {
    if (a === 1) return 1;
    return a * giaithua(a - 1)
}

const num = giaithua(5)

function cKn(k, n) {
    let tuso = giaithua(n)
    let mauso = giaithua(n - k) * giaithua(k)
    return tuso / mauso
}

console.log(cKn(5, 9))