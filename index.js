customerName = "bob";

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  let leastFavoriteCustomer = 'something';
  return console.error('Assignment to constant variable.');
}

console.log(changeLeastFavoriteCustomer())
