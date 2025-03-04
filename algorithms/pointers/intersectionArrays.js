var arraysIntersection = function(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        // If all three elements are equal, add to result
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } 
        // Move the pointer with the smallest value
        else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    
    return result;
};