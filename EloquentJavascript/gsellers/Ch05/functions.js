
/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the input
arrays.
*/
a = [[1,2,3],[4,5,6],[7,8,9]];
b = [[[1,2],[3,4]],[[5,6],[7,8]]]

function flatten(array){
  function combine(cur,ele){
    if (ele instanceof Array)
      return cur.concat(ele.reduce(combine,[]));
    else
      return cur.concat(ele);
  }
  return array.reduce(combine,[]);
}

/*
Using the example data set from this chapter, compute the average age
difference between mothers and children (the age of the mother when
the child is born). You can use the average function defined earlier in
this chapter.
Note that not all the mothers mentioned in the data are themselves
present in the array. The byName object, which makes it easy to find a
person’s object from their name, might be useful here.*/


var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var hasMother = ancestry.filter(function(person){if (person.mother in byName)return person.mother});

averageMotherChildAgeDifference = average(hasMother.map(function getAgeDifference(person){
    return person.born- byName[person.mother].born
  }));

// -> 31.2

/*When we looked up all the people in our data set that lived more than
90 years, only the latest generation in the data came out. Let’s take a
closer look at that phenomenon.
Compute and output the average age of the people in the ancestry data
set per century. A person is assigned to a century by taking their year
of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
died / 100).
103
For bonus points, write a function groupBy that abstracts the grouping
operation. It should accept as arguments an array and a function that
computes the group for an element in the array and returns an object
that maps group names to arrays of group members.*/

function groupBy(array,groupFunc){
  groups = array.map(groupFunc);

  byGroup={};
  for (i=0;i<array.length;i++){
    group = groups[i];
    if (group in byGroup)
      byGroup[groups[i]] = [array[i]].concat(byGroup[groups[i]]);
    else
      byGroup[groups[i]] = [array[i]]
  }
  return byGroup;
}

function byCentury(person){
  return Math.ceil(person.died/100);
}

groupings = groupBy(ancestry,byCentury);
for (group in groupings){
  ages = groupings[group].map(function getAge(person){return person.died-person.born});
  groupings[group].averageAge = average(ages);
  console.log('Average age in century #',group,' is ',groupings[group].averageAge)
}

/*
Arrays also come with the standard methods every and some. Both take a
predicate function that, when called with an array element as argument,
returns true or false. Just like && returns a true value only when the
expressions on both sides are true, every returns true only when the
predicate returns true for all elements of the array. Similarly, some returns
true as soon as the predicate returns true for any of the elements. They
do not process more elements than necessary—for example, if some finds
that the predicate holds for the first element of the array, it will not look
at the values after that.
Write two functions, every and some, that behave like these methods,
except that they take the array as their first argument rather than being
a method.
*/
a = [[true,true], [true, false], [false,true],[false, false]];
function every(array){
  return array.reduce(function(cur,ele){
    return cur && ele;
  },true);
}
a.map(every); // [true,false,false,false]

b = [false,false,false,false,false,true]
c = [true,false,false,false,false,false]
d = [false,false,false,false,false,false]

function some(array){
  for (ele in array){
    if (array[ele] == true)
      return true
  }
  return false
}
