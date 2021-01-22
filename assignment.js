// https://github.com/taiseen/assignment.js

// Number 1 
function kilometerToMeter(km) {

    const meter = 1000;

    if (km < 0) {
        return "Distance cannot be negative."
    } else {
        return meter * km;
    }

}
//console.log( kilometerToMeter( -5 ) );



// Number 2 
function budgetCalculator(watch, phone, laptop) {

    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    if (watch > 0 && phone > 0 && laptop > 0) {
        let totalWatchPrice = watchPrice * watch;
        let totalPhonePrice = phonePrice * phone;
        let totalLaptopPrice = laptopPrice * laptop;
        let totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return totalPrice;
    } else {
        return "Please Insert Valid Number."
    }

}
//console.log( budgetCalculator( 1 , 1 , 0 ) );



// Number 3 
function hotelCost(days) {

    let totalCost = 0;
    let firstTenDays = 0;
    let secondTenDays = 0;
    let lastDays = 0;

    if (days <= 0) {
        return "Please Enter a Positive Integer Value."
    } else {

        // For 1st ---> 10 Day's
        for (var i = 1; i <= days; i++) {
            if (i <= 10) {
                firstTenDays = 100 * i;
            } else {
                break;
            }
        }

        // For 2nd ---> 10 Day's
        let secndSlot = days - 10;
        for (var j = 1; j <= secndSlot; j++) {
            if (j <= 10) {
                secondTenDays = 80 * j
            } else {
                break;
            }
        }

        // For Last ---> Remaining Day's
        let lastSlot = days - 20;
        for (var i = 1; i <= lastSlot; i++) {
            lastDays = 50 * i;
        }

        totalCost = firstTenDays + secondTenDays + lastDays;
        return totalCost;
    }
    
}
//console.log(hotelCost(11));



// Number 4 
function megaFriend(names) {

    if (names.length === 0 || names == 0 || names == null) {
        return "Empty Array Not Supported."
    } else {

        var index = 0;

        var maxName = names[0].length;

        for (var i = 0; i < names.length; i++) {

            var nm = names[i];

            if (nm.length > maxName) {
                index = i;
                maxName = nm.length;
            }
        }
        return names[index];
    }

}
//var data = [ "a" , "bb" , "ccc" , "dddd" , "eeeee" , "ffffff" , "Bangladesh"];
//console.log( megaFriend( data ) );