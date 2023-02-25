function operation_with_numbers(number, ...commands) {
    var num = number
    let operations = {
        'chop': function () {
            return num / 2
        }, 'dice': function () {
            return Math.sqrt(num)
        }, 'spice': function () {
            return num + 1
        }, 'bake': function () {
            return num * 3
        }, 'fillet': function () {
            return num * 0.8
        },

    }
    for (const command of commands) {
        let current = operations[command]
        num = current()
        console.log(num)
    }
}

operation_with_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')