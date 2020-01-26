document.addEventListener('DOMContentLoaded', () => {
    function concatArray(array1, array2) {
        let newArray = [];
        return newArray.concat(array1, array2);
    }

    let array = concatArray([1,3], [3,5]) // zwróci [1,3,3,5]
});