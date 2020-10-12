// ввід чисел на екран при натисканні на них
function insert(...numsIndexs) {
    this.form.textview.value = this.form.textview.value + numsIndexs
}

// чистка екрану
function clean() {
    this.form.textview.value = ""
}


// видалення останнього значення на екрані
function back() {
    let exp = this.form.textview.value
    this.form.textview.value = exp.substring(0, exp.length - 1)
}


// вирахування результату та його виведення на екран
function equal() {
    let calc = this.form.textview.value
    if (calc) {
        this.form.textview.value = eval(calc)
    }
}