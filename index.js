const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}
function appendCat() {
    appendCat = [...cats, "Broom"];
    return appendCat;
}
function prependCat() {
    prependCat = ["Arnold", ...cats];
    return prependCat;
}
function removeLastCat() {
    removeLastCat = cats.slice(0, cats.length -1);
     return removeLastCat;
}
function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat
}