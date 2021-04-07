class DescriptiveStatistics {
    static mean(arr) {
        let counter = 0;
        for(let x=0; x < arr.length; x++){
            counter += arr[x];
        }
        return counter / arr.length;
    }

    static median(arr) {
        let median;
        arr.sort();
        if(arr.length / 2 !== 0){
            median = (arr[arr/2-1] + arr[arr/2])/2;
        } else {
            median = arr[(arr-1)/2];
        }
        return median;
    }

    static mode(arr) {
        let modes = [];
        let count = [];
        let i;
        let number;
        let maxIndex = 0;
        for (i = 0; i < arr.length; i += 1) {
            number = arr[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        return modes;
    }

    static variance(arr) {
        let mean = DescriptiveStatistics.mean(arr);
        let counter = 0;
        for(let num of arr){
            counter += ((num-mean)**2);
        }
        return counter / arr.length;
    }

    static standardDeviation(arr) {
        return Math.sqrt(DescriptiveStatistics.variance(arr));
    }

    static quartiles(arr) {
        arr.sort(function(a, b) {
            return a - b;
        });
        let len = arr.length;
        let list1 = [], list2 = [];
        if (len / 2 !== 0) {
            list1 = arr.slice(0, len/2);
            list2 = arr.slice(len/2, len);
        } else {
            list1 = arr.slice(0, (len-1)/2);
            list2 = arr.slice((len-1)/2+1, len);
        }
        return [DescriptiveStatistics.median(list1), DescriptiveStatistics.median(list2)];
    }

    static skewness() {

    }

    static sampleCorrelation() {

    }

    static populationCorrelation() {

    }

    static zscore(arr) {
        let returnArr = [];
        for(let val in arr){
            returnArr.push((val-DescriptiveStatistics.mean(arr)/DescriptiveStatistics.standardDeviation(arr)));
        }
        return returnArr;
    }

    static meanDeviation(arr) {
        let mean = DescriptiveStatistics.mean(arr);
        let total = 0;
        for (let val in arr) {
            total += (Math.abs(val - mean));
        }
        return total / arr.length;
    }
}
module.exports = DescriptiveStatistics; 