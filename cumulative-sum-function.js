// Function for Cumulative Sum

function findCumulativeSum(upperLimit) {
  
  //Set counter loop variable
  var i = 0;
  
  //Set cumulative coounted variable
  var counted = 0;
  
  //Set loop to to the counting up to the end number
  for (i=1 ; i <= upperLimit; i++) {
    
    //add the next number to the current sum
    counted = counted + i;
  }
  
  //Return final sum
  return counted;
}

findCumulativeSum(100)
