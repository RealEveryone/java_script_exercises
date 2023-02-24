function compareAndSum(number) {
    let num_as_str = number.toString()
    let magic_var = true
    let total_sum = 0
    if (num_as_str.length > 1) {
        for (let i = 0; i < num_as_str.length - 1; i++) {
            if (num_as_str[i] !== num_as_str[i + 1]) {
                magic_var = false
                break
            }
        }
    }
    console.log(magic_var)
    for (let i = 0; i < num_as_str.length; i++) {
        total_sum += parseInt(num_as_str[i])
    }
    console.log(total_sum)

}

compareAndSum(211111111)