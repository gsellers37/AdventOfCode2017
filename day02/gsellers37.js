
console.log("gsellers37: starting");

var reader= new FileReader();

reader.onload = function (e) {
              txt= e.target.result;
              partOne(txt);
              partTwo(txt);

          }

function processInput(){
  inputFile = document.getElementById("input").files[0];
  reader.readAsText(inputFile);
}

function partOne(txt){
  checksum = 0;


  rows = txt.split("\n");
  for (var row in rows){
    min = Infinity;
    max = -Infinity;
    diff = 0;

    nums = rows[row].split("\t")
    for (var num in nums){

      val = Number(nums[num]);
      if (val < min)
        min = val;
      if (val>max)
        max = val;
    }
    console.log("row "+row+" max "+max+" min "+min);
    diff = max-min;
    checksum+=diff;
  }
  console.log(checksum);
}

function partTwo(txt){
  rows = txt.split("\n");
  sum = 0;

  for (var row in rows){
    nums = rows[row].split("\t");

    for (var num1i in nums){
      num1 = Number(nums[num1i]);

      for(var num2i in nums){

        if (num1i == num2i) continue;

        num2 = Number(nums[num2i]);

        if( num1%num2 == 0){
          sum += num1/num2;
          break;
        }
      }
    }
  }
  console.log("Sum is: " + sum);
}
