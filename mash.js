function mash() {
    return ("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" +" , and you’ll drive a " + getCar() + ". You will also work as a " + getCareer());
}
console.log(mash());


function getHome() {
    let type = ['Mansion', 'Apartment', 'Shack', 'House'];
    let a = process.argv[2];
    if (a) {
        type.push(a);
    }
    let types = [Math.floor(Math.random() * type.length)];
    // console.log(type);
    return type[types];
}

getHome();

function getChildrenCount() {
    let b = process.argv[3];
    let child = [Math.floor(Math.random() * 101)];
    if (b && child >50){
        return b;
    }
    else {
        return child;
    }
}

function getCar() {
    let vehicle = [ "lambo","convertible", "box with wheels","Ratmobile"];
    let c = process.argv[4];
    if (c) {
        vehicle.push(c);
    }
    let vehicles = Math.floor(Math.random() * vehicle.length)
    return vehicle[vehicles];
}
getCar()

function getCareer() {
    let career = ["Doctor", "Code Admin", "Principal", "Construction Worker"];
    let d = process.argv[5];
    if (d) {
        career.push(d);
    }
    let careers = [Math.floor(Math.random() * career.length)]
    return career[careers];
}
getCareer()