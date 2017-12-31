

function testGolf(testNo,golf,tests){
  var failed = false;
  for (line in tests){
    if (!tests[line].match(golf)){
      failed = true;
      console.log(tests[line] + ' has failed test suite #' + testNo);
    }
  }

  if (!failed)
    console.log('Test suite #' + testNo + ' has passed.');
}

function testFailGolf(testNo,golf,tests){
  var failed = false;
  for (line in tests){
    if (tests[line].match(golf)){
      failed = true;
      console.log(tests[line] + ' has failed test suite #' + testNo);
    }
  }

  if (!failed)
    console.log('Test suite #' + testNo + ' has passed.');
}


var test1 = ['carcassonne','racecar','concatenate','cattle',' cat', ' car','#car'];
var golf1 = /ca(r|t)/;

testGolf(1,golf1,test1);

var test2 = ['a prop','proposal','popcorn','apoptosis',' pop', ' prop'];
var golf2 = /pr?op/

testGolf(2,golf2,test2);

var test3= ['aferraricame','ferret','ferry'];
var test3f = ['feret','ferrry'];
var golf3 = /ferr(et|y|ari)/

testGolf(3,golf3,test3);
testFailGolf('3f',golf3,test3f);

var test4 = ['pious','cautious','bodacious','delicious']
var golf4 = /\wious/

testGolf(4,golf4,test4);

var test5 = [' .',' ,', ' :', ' ;'];
var test5f = ['.',',',';',':',' a',' 1',' -'];
var golf5 = /\s[.,:;]/

testGolf(5,golf5,test5);
testFailGolf('5f',golf5,test5f);

var test6 = ['philanthropic kittens','kittens',' fantastic','.canteen'];
var test6f = ['kitten','phil~anthr~py','fan tas tic'];
golf6 = /\b\w{7,}\b/

testGolf(6,golf6,test6);
testFailGolf('6f', golf6, test6f);

var test7 = ['philanthropy','dog','cat','cat and dog','fantastic','pious','1pious','c4t'];
var test7f = ['kitten','doggie','priest','canteen','cant3en']
golf7 = /\b[^e]+\b/

testGolf(7,golf7,test7);
testFailGolf('7f', golf7, test7f);


/*
Imagine you have written a story and used single quotation marks throughout
to mark pieces of dialogue. Now you want to replace all the dialogue
quotes with double quotes, while keeping the single quotes used in contractions
like aren’t.
Think of a pattern that distinguishes these two kinds of quote usage
and craft a call to the replace method that does the proper replacement.
*/
tests  = [["'Hello', she said.",'"Hello", she said.'],
          ["He said 'No, I do not want one'.",'He said "No, I do not want one".'],
          ["'Blank One' 'Blank two'",'"Blank One" "Blank two"'],
          ["'blankone''blanktwo'",'"blankone""blanktwo"'],
          ["I ain't gonna","I ain't gonna"],
          ["No he didn't","No he didn't"],
          ["She told me, 'No he didn't'",'She told me, "No he didn\'t"']];

          // \b\'\b\w    \w\b\'\b,
          // \s\b\'\b\w    \w\b\'\b.
          // \w\b\'\b\w

var singleToDoubleQuotes = /(\b\'|\'\b)/g
var doubleToSingleQuotes = /(\w)"(\w)/
var quotespassed = true;

tests.forEach(function(test){
  var output;
  var original = test[0];
  var solution = test[1];

  output = original.replace(singleToDoubleQuotes,'"');
  output = output.replace(doubleToSingleQuotes,'$1\'$2');
  if (output != solution){
    quotespassed = false;
    console.log('Test failed: ');
    console.log('Original: ' +original);
    console.log('Replaced: ' +output);
    console.log('Expected: ' +solution);
  }

})

if (quotespassed){
  console.log('Test suite for quotes have passed.');
}
// var singleToDoubleQuotes = /(\w)\'(\W)|(\W)\'(\w)/g
// tests.forEach(function(test){
//   var output;
//   var original = test[0];
//   var solution = test[1];
//
//   var passed = true;
//   output = original.replace(singleToDoubleQuotes,'$1"$4');
//   if (output != solution){
//     passed = false;
//     console.log('Test failed: ');
//     console.log('Original: ' +original);
//     console.log('Replaced: ' +output);
//     console.log('Expected: ' +solution);
//   }
//
//   if (passed){
//     console.log('Tests for quotes have passed: ' + solution);
//   }
// })

/*
A series of digits can be matched by the simple regular expression /\d+/.
Write an expression that matches only JavaScript-style numbers. It
must support an optional minus or plus sign in front of the number,
the decimal dot, and exponent notation—5e-3 or 1E10— again with an
optional sign in front of the exponent. Also note that it is not necessary
for there to be digits in front of or after the dot, but the number cannot
be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a
lone dot isn’t.
*/
testNumbers = [['5e-3',true],
               ['1e10',true],
               ['+5e-3',true],
               ['-5e-3',true],
               ['-5e+3',true],
               ['.5', true],
               ['5.', true],
               ['.5.',false],
               ['.', false],
               ['5.5.', false],
               ['5.e5.',true],
               ['5.5.e5.5.',false]];

regexJSNo = /^(\+|\-)?(.[0-9]+|[0-9]+.|[0-9]+)(e(\+|\-)?(.[0-9]+|[0-9]+.|[0-9]+))?$/
var testNumbersPassed = true;
testNumbers.forEach(function(test){
  var str = test[0];
  var expected = test[1];
  if (!regexJSNo.test(str)==expected){
    console.log('Test has failed: ' + str + ' did not return ' +expected);
    testNumbersPassed = false;
  }
})
if (testNumbersPassed){
  console.log('Test suite for numbers has passed');
}
