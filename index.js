// Write your solution in this file!

const driver = {
    mustang: "Vin Diesel", 
    hummer: "Dwayne Johnson", 
    porshe: "Paul Walker", 
    renault: "Tyrese Gibson"
}

function updateDriverWithKeyAndValue(driver, key, value){
    const object = Object.assign({}, driver, {[key]:value})
    return object
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   const newObj = Object.assign(driver,{[key]:value})
    return newObj
}

function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj

}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
