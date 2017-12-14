var reader = new FileReader();
var sum = 0;

function handleFiles() {
    var f = document.getElementById("input").files[0];
    var txt = reader.readAsText(f);

    console.log(txt);
};

reader.onload = function(e) {
    var txt = e.target.result;
    console.log(partOne(txt) + " passphrases are valid");
    // console.log(partTwo(txt) + " passphrases are valid");
}

// Part 1 Solution
function partOne(txt) {
    var phrases = txt.split("\n");
    var valid_phrases = 0;
    var valid = false;

    for (var phrase in phrases) {
        words = phrases[phrase].split(" ");
        valid = true;

        for (var j in words) {
            w1 = words[j];

            for (var k = Number(j)+1; k < words.length; k++) {
                w2 = words[k];

                if (w1==w2) {
                    valid = false;
                    console.log("Found an invalid passphrase!");
                    break;
                }

                // special case to disregard newline 
                if (w1=="\n") {
                    valid = false;
                    break;
                }
            }
        }
        if (valid) {
            valid_phrases++;
            console.log("Found " + valid_phrases + " valid phrases!");
        }

    }

    return valid_phrases;
}
