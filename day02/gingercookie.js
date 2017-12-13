var reader = new FileReader();
var max, min, sum = 0;

function handleFiles() {
    var f = document.getElementById("input").files[0];
    var txt = reader.readAsText(f);

    console.log(txt);
};

// Part 1 Solution
// reader.onload = function(e) {
//     var txt = e.target.result;
//     var rows = txt.split("\n");
//
//     for (var i in rows) {
//         max = -Infinity;
//         min = Infinity;
//
//         nums = rows[i].split("\t");
//         for (var j in nums) {
//             if (Number(nums[j]) > max) {
//                 console.log("Found new max")
//                 max = Number(nums[j]);
//             }
//             if (Number(nums[j]) < min) {
//                 console.log("Found new min")
//                 min = Number(nums[j]);
//             }
//         }
//         console.log("Local range is: " + (max-min));
//         sum += (max-min);
//         console.log("Current sum is: "+ sum);
//     }
//
//     console.log("Sum is: " + sum);
//     // sum is 51139
// }

// Part 2 Solution
reader.onload = function(e) {
    var txt = e.target.result;
    var rows = txt.split("\n");

    for (var i in rows) {
        nums = rows[i].split("\t");

        for (var j in nums) {
            n1 = Number(nums[j]);

            for (var k = Number(j)+1; k < nums.length; k++) {
                n2 = Number(nums[k]);

                if (n1==n2) {
                    continue;
                }
                if (n1 % n2 == 0) {
                    console.log("In row " + i + ", found " + n2 + " divides " +
                        n1);
                    sum += (n1/n2);
                    break;
                }
                if (n2 % n1 == 0) {
                    console.log("In row " + i + ", found " + n1 + " divides " +
                        n2);
                    sum += (n2/n1);
                }
            }
        }
    }
    console.log("Sum is: " + sum);
}
