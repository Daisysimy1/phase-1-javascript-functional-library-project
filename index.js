function makeArray(collection) {
    let workingData
    if(typeof(collection) === "object"){
        workingData = Object.values(collection)
    }else {
        workingData = collection
    }
    return workingData
}

function myEach(collection, callback) {
    const workingData = makeArray(collection)
    for(let i = 0; i < workingData.length; i++){
        callback(workingData[i])
    }
    return collection
}

function myMap(collection, callback) {
    const workingData = makeArray(collection)
    let outputArray = []
    for(let i = 0; i < workingData.length; i++){
        const newVal = callback(workingData[i])
        outputArray.push(newVal)
    }
    return outputArray
}

function myReduce(collection, callback, acc) {
    let workingData = makeArray(collection)
    if(!acc){
        acc = workingData[0]
        workingData = workingData.slice(1)
    }
    // let acc = workingData[0]
    for(let i=0; i<workingData.length; i++){
        acc = callback(acc, workingData[i], workingData)
    }
    return acc
}

function myFind(collection, predicate) {
    const workingData = makeArray(collection)
    for(let i = 0; i < workingData.length; i++){
        if (predicate(workingData[i])) {
            return workingData[i]
        }
    }
}

function myFilter(collection, predicate) {
    const workingData = makeArray(collection)
    let resultsArray = []
    for(let i = 0; i < workingData.length; i++){
        if(predicate(workingData[i])){
            resultsArray.push(workingData[i]);
        }
    }
    return resultsArray
}

function mySize(collection) { 
    const workingData = makeArray(collection)
    let count = 0;
    for(let i = 0; i < workingData.length; i++) {
        count++
    }
    return count
}

// Array functions
function myFirst(arr, num) {
    let results = []
    if (!num){
        return arr[0]
    }else {
        for(let i = 0; i < num; i++) {
            results.push(arr[i])
        }
        return results
    }
}
function myLast(arr, num) {
    if(!num) {
        return arr.slice(-1)[0]
    }else {
        return arr.slice(-(num))
    }
}

function myKeys(object) {
    let result = [];
    for(let key in object) {
        result.push(key);
    }
    return result;
}

function myValues(object) {
    let result = [];
    for(let key in object) {
        result.push(object[key]);
    }
    return result;
}