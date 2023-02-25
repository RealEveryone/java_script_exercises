function sort_names(name_list) {
    let new_list = name_list.sort()
    for (let i = 0; i < new_list.length; i++) {
        console.log(`${i + 1}.${new_list[i]}`)
    }
}

sort_names(["John","Bob", "Christina", "Ema"])

//probably needs to be caseinsensitive 
