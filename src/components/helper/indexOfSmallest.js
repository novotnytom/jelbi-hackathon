module.exports = {

    indexOfSmallest: function (a) {
        return a.indexOf(Math.min.apply(Math, a));
    }

}