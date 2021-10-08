// Code your solution in this file!

// const drivers = ["Tom", "Joe", "Sue", "Maca"]

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
    return function(fare) {
        return num * fare;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
};