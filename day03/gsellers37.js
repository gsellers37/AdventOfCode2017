
function partOne(input){
  output = 0;
  if (input<1){
    return;
  }

  n=0;
  highest_in_square = 1;
  //Step one: How outward, in squares, is the number?
  while(input > highest_in_square){
    n++;
    highest_in_square = Math.pow(2*n+1,2);
  }

  output += n;

  //Step two: How far along the side of the square, is the number?
  side_len = 2*n+1;
  half_side_len = Math.floor(side_len/2);

  //Find a the bottom right corner to count from
  next_highest = Math.pow(side_len,2);
  if (input == highest_in_square)
    next_highest = input;

  //find the numerical difference between the two
  difference = next_highest-input;

  //count from the bottom right corner to the one above it, clockwise, while folding over values
  m = Math.abs(half_side_len - (difference % (side_len-1)));

  output +=m
  
  console.log('Manhattan distance for ' +input +' = ' +output);
}


partOne(361527)
