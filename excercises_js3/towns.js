function dataProcessing(data) {
    for (const current of data) {
        let [town, latitude, longitude] = current.split(' | ')
        console.log(createTown(town, Number(latitude).toFixed(2), Number(longitude).toFixed(2)))
    }
    function createTown(town, latitude, longitude) {
        return {town, latitude, longitude}
    }
}

dataProcessing(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])