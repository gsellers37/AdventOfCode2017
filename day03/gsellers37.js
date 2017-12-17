
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


function grid(n,m,value){
  if (~value)
    value = Number(0)
  xy = {}
  for(i=-n;i<=n;i++){
    xy[i] = {}
    for (j=-m;j<=m;j++){
        xy[i][j]=value
    }
  }
  return xy
}

function spiral(input,xy,x,y,dir){
  if (x==undefined)
    x=0;
  if (y==undefined)
    y=0;
  if (dir==undefined)
    dir = [1,0];

  //Check if the spiral should turn, and if so, do it
  dir = checkDirection(x,y,dir,xy);

  // Calculate the next positions value
  walkOutput = walk(x,y,dir,xy);
  x = walkOutput[0]
  y = walkOutput[1]
  value = walkOutput[2]
  xy = walkOutput[3]
  console.log(dir,xy,x,y)

  // Either end or loop until it ends
  if (value>input)
    return [x,y,value,input];
  else
    return spiral(input,xy,x,y,dir);
}

function checkDirection(x,y,dir,xy){
  newdir = changeDirection(dir);
  if (xy[x+newdir[0]][y+newdir[1]] == 0){
    return newdir;}
  else {
    return dir;
  }
}

function changeDirection(dir){

  if (dir[0] == 1 & dir[1] == 0)
    return [0,1]
  else if (dir[0] == 0 & dir[1] == 1)
    return [-1,0]
  else if (dir[0] == -1 & dir[1] == 0)
    return [0, -1]
  else if (dir[0] == 0 & dir[1] == -1)
    return [1,0]
  else {
    console.log('something broke in change direction')
  }
}

function walk(x,y,dir,xy){
  newx = x+dir[0]
  newy = y+dir[1]
  for (i=-1;i<=1;i++){
    for (j=-1;j<=1;j++){
      if (i==0 && j==0)
        continue
      xy[newx][newy]+=xy[newx+i][newy+j]
    }
  }
  return [newx,newy,xy[newx][newy],xy]
}

var xy = grid(10,10);
xy[0][0] = 1;

console.log('Part 2 = ',spiral(361527));
