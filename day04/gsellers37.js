input = loadInput();
passphrases = input.split(' ');

validPhraseCounts = {};

passphrases.foreach(function parse(phrase){
  if (phrase in validPhraseCounts)
    validPhraseCounts[phrase]+=1;
  else
    validPhraseCounts[phrase]=1;
});
console.log(validPhraseCounts);
