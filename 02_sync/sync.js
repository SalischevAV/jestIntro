class Lodash {
    compact(arr) {
        return arr.filter(item => !!item);
    }

    groupBy(arr, prop) {
        return arr.reduce((acc, item) => {
            const key = typeof prop === 'function' ? prop(item) : item[prop] ;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});
    }


}//close class

module.exports = new Lodash(); 