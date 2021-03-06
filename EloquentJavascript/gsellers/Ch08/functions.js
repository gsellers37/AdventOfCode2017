/*
Say you have a function primitiveMultiply that, in 50 percent of cases,
multiplies two numbers, and in the other 50 percent, raises an exception
of type MultiplicatorUnitFailure. Write a function that wraps this clunky
function and just keeps trying until a call succeeds, after which it returns
the result.
Make sure you handle only the exceptions you are trying to handle.
*/
function MultiplicatorUnitFailure(message){
  this.message = message;
  this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a,b){
  if (Math.round(Math.random(1))){
    return a*b
  }
  else {
    throw new MultiplicatorUnitFailure('This function failed');
  }
}

function primitiveMultiplyWrapper(a,b){
  for (;;){
    try{
      return primitiveMultiply(a,b);
    }
    catch(e){
      if (e instanceof MultiplicatorUnitFailure)
        console.log('Trying to multiply again');
      else {
        throw e;
      }
    }
  }
}


/*
Take the box.
It is a box with a lock. Inside is an array, but you can get at it only
when the box is unlocked. Directly accessing the _content property is not
allowed.
Write a function called withBoxUnlocked that takes a function value as
argument, unlocks the box, runs the function, and then ensures that the
box is locked again before returning, regardless of whether the argument
function returned normally or threw an exception.
*/

var box = {
  locked:true,
  unlock: function(){this.locked = false;},
  lock: function(){this.locked = true;},
  _content: [],
  get content(){
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
}
function withBoxUnlocked(doThings){
  try{
    box.unlock();
     return doThings();
  }
  finally{
    box.lock();
  }
}

withBoxUnlocked(function(){
  box.content.push('gold');
  console.log(box.content);
  throw new Error('This dothings is broken');
});
