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
        let numMap = {};
        for(let x = 0; x < arr.length; x++){
            let tempVal = arr[x];
            if(tempVal in numMap){
                numMap[tempVal]++;
            } else {
                numMap[tempVal] = 1;
            }
        }
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
    

}