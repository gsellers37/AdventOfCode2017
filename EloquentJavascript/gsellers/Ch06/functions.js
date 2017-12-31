/*Write a constructor Vector that represents a vector in two-dimensional
space. It takes x and y parameters (numbers), which it should save to
properties of the same name.
Give the Vector prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum
or difference of the two vectors’ (the one in this and the parameter) x
and y values.
Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0,
0).
*/

function Vector(x,y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other){
  if (!(other instanceof Vector)){
    console.log("Error in Vector.plus: Other argument must be of type Vector");
    return;
  }
  return new Vector(this.x+other.x,this.y+other.y);
}

Vector.prototype.minus = function(other){
  if (!(other instanceof Vector)){
    console.log("Error in Vector.plus: Other argument must be of type Vector");
    return
  }
  return new Vector(this.x-other.x,this.y-other.y);
}

Object.defineProperty(Vector.prototype,"length",{
  get: function(){return Math.pow(Math.pow(this.x,2)+Math.pow(this.y,2), 1/2)}
})

// Tests
Vector.prototype.toString = function(){
  return '(' +this.x+','+this.y+')'
}
a = new Vector(3,4);
b = new Vector(6,8);
console.log(a.plus(b)+' should be (9,12)');
console.log(a.minus(b)+' should be (-3, -4)');
console.log(a.length + ' should be 5');
console.log(b.length + ' should be 10');

/*
Implement a cell type named StretchCell(inner, width, height) that conforms
to the table cell interface described earlier in the chapter. It should
wrap another cell (like UnderlinedCell does) and ensure that the resulting
cell has at least the given width and height, even if the inner cell would
naturally be smaller.
*/
console.log("Ensuring module works: ");
console.log(drawTable(dataTable(
    [['dogs','cats','horses'],
     ['chip','jinx','bojack'],
     ['scout','milo','idk'],
   ])));
function StretchCell(inner,width,height){
  this.inner = inner;
  this.width  = width;
  this.height = height;
  console.log('new StretchCell');
}
StretchCell.prototype.minWidth = function(){
  return Math.max(this.inner.minWidth(), this.width);
}
StretchCell.prototype.minHeight = function(){
    return Math.max(this.inner.minHeight() + 1, this.height);
}
StretchCell.prototype.draw = function(width,height){
  return this.inner.draw(width,height-1)
    .concat([repeat("-",width)]);
}


function stretchDataTable(data){
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name){
    return new StretchCell(new TextCell(name),10,5);
  });

  var body = data.map(function(row){
    return keys.map(function(name){
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}


console.log("Stretch Data Table: ");
console.log(drawTable(stretchDataTable(
    [['dogs','cats','horses'],
     ['chip','jinx','bojack'],
     ['scout','milo','idk'],
   ])));

function iterate(iterfunc,n){
  this.startIter()
  if (n==undefined){
    n=this.length
  }
  iter(this,iterfunc,n)

  function iter(Seq,iterfunc,n){
    if (n>0){
        iterfunc(Seq.getNext())
        iter(Seq,iterfunc,n-1)
    }
  }
}

function logFive(sequence){
  sequence.iterate(console.log,5)
}

// Array Seq object
function ArraySeq(array){
  this.vals = array;
  this.i= 0;
}
ArraySeq.prototype.iterate = iterate;
ArraySeq.prototype.getNext = function(){
  return ( this.vals[this.i++]);
}
ArraySeq.prototype.startIter = function(){
  this.i=0;
}
Object.defineProperty(ArraySeq.prototype,'length',{
  get: function(){return this.vals.length}
})

console.log('testing array seq');
a = new ArraySeq([1,5,6,7,8,9])
logFive(a)
logFive(a)


function RangeSeq(from,to){
  this.from = from;
  this.to = to;
  this.i = 0;
}
RangeSeq.prototype.iterate = iterate;
RangeSeq.prototype.getNext = function(){
  if (this.from+this.i<=this.to){
    return (this.from+(this.i++))
  };
}
RangeSeq.prototype.startIter = function(){
  this.i=0;
}
Object.defineProperty(RangeSeq.prototype,'length',{
  get: function(){return this.to-this.from+1}
})

console.log('testing range seq');
a = new RangeSeq(5,115);
logFive(a);
logFive(a);
logFive(new RangeSeq(-5,5));
