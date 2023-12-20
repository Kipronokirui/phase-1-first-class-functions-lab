// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
  
function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
const createFareMultiplier = function(multiplier) {
    return function (fare)
     {
      return fare * multiplier;
    };
}
  
const fareDoubler = function(fare) {
    return fare * 2;
}
  
const fareTripler = function(fare) {
    return fare * 3;
}
  
function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
}
  
