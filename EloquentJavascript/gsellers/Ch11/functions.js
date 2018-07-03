
/*
Write a simple module similar to the weekDay module that can convert
month numbers (zero-based, as in the Date type) to names and can convert
names back to numbers. Give it its own namespace since it will need
an internal array of month names, and use plain JavaScript, without any
module loader system.
*/
var mn = function(){

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var exports = {}

  exports.number = function(name){
    return months.findIndex(function(ele){
      return ele== name;
    });
  }

  exports.name = function(number){
    return months[number];
  }

  return exports

}();

tests = [mn.name(1)=='Feb',
         mn.name(11)=='Dec',
         mn.number('Jan')==0,
         mn.number('May')==4,
       ];

console.log('Month Name test suite has tested ' + tests.every(function(ele){return ele}));
