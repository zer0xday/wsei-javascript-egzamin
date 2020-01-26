document.addEventListener('DOMContentLoaded', () => {
    function bigestSumOfTwoElements(array) {
        if (array.length <= 0 ) {
            return false;
        }

        if (array.length <= 1) {
            return array[0];
        }
        
        array.sort();
        
        let firstEl = array.pop();
        let secondEl = array.pop();

        return firstEl + secondEl;
    }

    bigestSumOfTwoElements([1,2,3,4]) // => 7
    bigestSumOfTwoElements([]) // => false
    bigestSumOfTwoElements([76]) // => 76
    bigestSumOfTwoElements([23,45,17,12]) // => 68
});