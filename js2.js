const arr = [12, 10, 13, 20, 56, 93, 82, 19, 11, 33];
let sum = 0;
let min = arr[0];
let max = arr[0];
let string = "";
for ( i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
    sum += arr[i];
    }
    else continue;
}

for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        if (arr[i] < min) {
            min = arr[i];
        }
        else continue;
    }
    else continue;
    
}

for ( i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        if (arr[i] > max) {
            max = arr[i];
        }
        else continue;
    }
    else continue;
}
console.log(min);
console.log(max);
console.log(sum);

for (i = 1; i <= 5; i++) {
    for ( j = 0; j < i; j++) {
        string += "#";
    }
    string += "\n";
}
console.log(string);