function range(min,max,step){

  if(!step)
    step=1;

  if (step*(max-min)<0){
    console.log('Step direction must move from min to max');
    return;
  }
  var output = [min];


  for (i=step;Math.abs(i)<=Math.abs(max-min);i+=step){
    output.push(min+i);
  }

  return output;
}

function sum(array){

  var output = 0;

  for (i=0;i<=array.length;i++){
    if (array[i])
      output+=array[i];
    console.log(output);
  }

  return output;
}

function reverseArray(array){
  var output = [];
  for (i=0;i<array.length;i++){
    output[i] = array[array.length-i-1];
  }
  return output
}

function reverseArrayInPlace(array){
    var tempval;
    for(i=0;i<Math.floor(array.length/2);i++){
      tempval=array[i];
      array[i]=array[array.length-i-1];
      array[array.length-i-1]=tempval;
    }
}

function arrayToList(array,i){

  if(!i)
    i=0;
  var list = {
    value: array[i],
    rest: undefined,
  }

  if(i<array.length-1)
    list.rest = arrayToList(array,i+1);

  return list;
}

function listToArray(list){

  var array = [list.value];

  while(list.rest != undefined){
    list = list.rest;
    array.push(list.value);
  }

  return array;
}

function prepend(list,element){
  return {value:element,
          rest: list};
}

function nth(list,n){
  if (n<0)
    return;

  while(--n >= 0)
    list = list.rest;

  return list.value;
}

function nthRecursive(list,n){
  if (n<0){
    console.log('N must be positive');
    return;
  }
  else if (n==0)
    return list.value
  else {
      var next = list.rest;
      if (next)
        return nthRecursive(next,n-1);
      else {
        console.log('N must be less than the array length');
        return;
      }
    }
}
