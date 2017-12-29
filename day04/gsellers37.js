function getAnswer1(){
  var str = document.getElementById('inputbox').value;
  var dict;
  var valid_passcodes = 0;
  var valid;
  str = str.split(/\r?\n/)

  str.forEach(function(passcode){
    dict = {}
    passcode = passcode.split(/\s+/);
    valid = true;
    passcode.forEach(function(word){
      if (word in dict){
        valid = false;
        return;
      }
      else{
        dict[word]=1;
      }

    })

    if (valid){
        valid_passcodes++;
    }
  })

  document.getElementById('answer').innerHTML = valid_passcodes;
}
function getAnswer2(){
  var str = document.getElementById('inputbox').value;
  var dict;
  var valid_passcodes = 0;
  var valid;
  str = str.split(/\r?\n/)

  str.forEach(function(passcode){
    dict = {}
    passcode = passcode.split(/\s+/);
    valid = true;
    passcode.forEach(function(word){
      word = word.split('');
      word = word.sort().join('');
      
      if (word in dict){
        valid = false;
        return;
      }
      else{
        dict[word]=1;
      }

    })

    if (valid){
        valid_passcodes++;
    }
  })

  document.getElementById('answer').innerHTML = valid_passcodes;
}
