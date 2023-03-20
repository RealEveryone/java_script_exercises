function manageParkingLot(commands) {
    let parkingLot = {}
    let actions = {
        'IN': function (carPlate) {
            if (!parkingLot.hasOwnProperty(carPlate)) {
                parkingLot[carPlate] = Number(carPlate.match(/\d+/g)[0])
            }
        },
        'OUT': function (carPlate) {
            if (parkingLot.hasOwnProperty(carPlate)) {
                delete parkingLot[carPlate]
            }
        },
    }
    manager()
    sortAndPrint()

    function manager() {
        for (const command of commands) {

            let [action, carPlate] = command.split(', ')
            if (['IN', 'OUT'].includes(action)) {
                actions[action](carPlate)
            }
        }
    }

    function sortAndPrint() {
        let sorted = []
        if (Object.keys(parkingLot).length > 0) {
            for (const car in parkingLot) {
                sorted.push([car, parkingLot[car]])
            }
            sorted.sort((a, b) => {
                return a[1] - b[1]
            })
            for (const sortedElement of sorted) {
                console.log(sortedElement[0])
            }
        } else {
            console.log('Parking Lot is Empty')
        }
    }
}


manageParkingLot(['d, CA244AA', 'IN, CA2822UU'])