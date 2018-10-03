var orderCount=0;

function takeOrder(topping, crustType) {
  orderCount = orderCount+1;
  console.log('Order: '+crustType+' pizza topped with ' + topping);
}

function getSubTotal(itemCount) {
  return itemCount*7.5;
}

function getTax() {
  return getSubTotal(orderCount)*0.06;
}

function getTotal() {
  return getSubTotal(orderCount)+getTax();
}

takeOrder('bacon','');
takeOrder('bacon','thin');
takeOrder('bacon','thick');
console.log(getSubTotal(orderCount));
console.log(getTotal());
