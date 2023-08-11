$(document).ready(function () {
    var table = document.getElementById('myTable');
    var html = '';
    let flag = 30;

    for (var i = 1; i <= 65; i++) {
        let iter = parseInt(i);
        if (iter > 30) {
            if (iter > 60) {
                iter = iter - 60
            }
            else {
                iter = iter - flag
            }
        }

        html += `
    <tr>
      <td>
        <input class="common date-${i}" type="text" placeholder="Date ${iter}" value="" >
        <input class="common value-${i}" type="text" placeholder="Value ${iter}" value="" >
      </td>
    </tr>
  `;
    }

    table.innerHTML += html;


    $(".value-1").val(28)
    $(".value-2").val(66)
    $(".value-3").val(71)
    $(".value-4").val(84)
    $(".value-5").val(29)
    $(".value-6").val("01")
    $(".value-7").val(91)
    $(".value-8").val(95)
    $(".value-9").val(35)
    $(".value-10").val(17)
    $(".value-11").val(18)
    $(".value-12").val(32)
    $(".value-13").val(32)
    $(".value-14").val(59)
    $(".value-15").val(57)
    $(".value-16").val(50)
    $(".value-17").val(15)
    $(".value-18").val(57)
    $(".value-19").val(95)
    $(".value-20").val(34)
    $(".value-21").val(91)
    $(".value-22").val(35)
    $(".value-23").val(75)
    $(".value-24").val(32)
    $(".value-25").val(80)
    $(".value-26").val(60)
    $(".value-27").val(31)
    $(".value-28").val(83)
    $(".value-29").val(25)
    $(".value-30").val("01")
    $(".value-31").val(35)
    $(".value-32").val(28)
    $(".value-33").val(29)
    $(".value-34").val(94)
    $(".value-35").val(83)
    $(".value-36").val(57)
    $(".value-37").val(20)
    $(".value-38").val(18)
    $(".value-39").val(86)
    $(".value-40").val("02")
    $(".value-41").val(16)
    $(".value-42").val(95)
    $(".value-43").val(29)
    $(".value-44").val("02")
    $(".value-45").val(60)
    $(".value-46").val(54)
    $(".value-47").val(31)
    $(".value-48").val(45)
    $(".value-49").val("06")
    $(".value-50").val(53)
    $(".value-51").val(31)
    $(".value-52").val(59)
    $(".value-53").val(79)
    $(".value-54").val(70)
    $(".value-55").val(79)
    $(".value-56").val(29)
    $(".value-57").val(76)
    $(".value-58").val(76)
    $(".value-59").val(87)
    $(".value-60").val(94)
    $(".value-61").val("08")
    $(".value-62").val(11)
    $(".value-63").val(70)
    $(".value-64").val(61)
    $(".value-65").val(86)

    $(".date-1").val(1)
    $(".date-2").val(2)
    $(".date-3").val(3)
    $(".date-4").val(4)
    $(".date-5").val(5)
    $(".date-6").val(6)
    $(".date-7").val(7)
    $(".date-8").val(8)
    $(".date-9").val(9)
    $(".date-10").val(10)
    $(".date-11").val(11)
    $(".date-12").val(12)
    $(".date-13").val(13)
    $(".date-14").val(14)
    $(".date-15").val(15)
    $(".date-16").val(16)
    $(".date-17").val(17)
    $(".date-18").val(18)
    $(".date-19").val(19)
    $(".date-20").val(20)
    $(".date-21").val(21)
    $(".date-22").val(22)
    $(".date-23").val(23)
    $(".date-24").val(24)
    $(".date-25").val(25)
    $(".date-26").val(26)
    $(".date-27").val(27)
    $(".date-28").val(28)
    $(".date-29").val(29)
    $(".date-30").val(30)
    $(".date-31").val(1)
    $(".date-32").val(2)
    $(".date-33").val(3)
    $(".date-34").val(4)
    $(".date-35").val(5)
    $(".date-36").val(6)
    $(".date-37").val(7)
    $(".date-38").val(8)
    $(".date-39").val(9)
    $(".date-40").val(10)
    $(".date-41").val(11)
    $(".date-42").val(12)
    $(".date-43").val(13)
    $(".date-44").val(14)
    $(".date-45").val(15)
    $(".date-46").val(16)
    $(".date-47").val(17)
    $(".date-48").val(18)
    $(".date-49").val(19)
    $(".date-50").val(20)
    $(".date-51").val(21)
    $(".date-52").val(22)
    $(".date-53").val(23)
    $(".date-54").val(24)
    $(".date-55").val(25)
    $(".date-56").val(26)
    $(".date-57").val(27)
    $(".date-58").val(28)
    $(".date-59").val(29)
    $(".date-60").val(30)
    $(".date-61").val(1)
    $(".date-62").val(2)
    $(".date-63").val(3)
    $(".date-64").val(4)
    $(".date-65").val(5)

});
function saveInputsToLocalStorage() {
    var inputs = document.querySelectorAll('.common');
    var inputValues = {};

    inputs.forEach(function (input) {
        var className = input.getAttribute('class');
        var value = input.value;
        var key = className.split(' ')[1]; // Extract the class name from the input element

        // Extract the date number from the class name, assuming the format is 'date-{number}'
        var dateNumber = parseInt(key.split('-')[1]);
        var dateKey = `Date_${dateNumber}`;

        inputValues[dateKey] = inputValues[dateKey] || {}; // Initialize the object if it doesn't exist
        inputValues[dateKey].value = value; // Store the value in the object
    });

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
}
function getInputsFromLocalStorage() {
    var inputValues = localStorage.getItem('inputValues');
    if (inputValues) {
        return JSON.parse(inputValues);
    } else {
        return {};
    }
}

document.getElementById('backCompile').addEventListener('click', function () {
    $(".searchTable").css("display", "none");
    $("#generateData").css("display", "none");
    $("#backCompile").css("display", "none");
    $("#myTable").css('display', 'inline-block');
    $("#appendTables").css('display', 'inline-block');
});

document.getElementById('backSearchSet').addEventListener('click', function () {
    $("#generateData").css("display", "inline-block");
    $("#backCompile").css("display", "inline-block");
    $(".searchTable").css("display", "inline-block");
    $(".no-data").html("");

    $("#uploadExcel").css("display", "none");
    $("#backSearchSet").css("display", "none");
    $("#yourDiv").html("");

    $("#fileUpload").css("display", "none");
});

// Example of how to access the stored input values using dates
document.getElementById('generateData').addEventListener('click', function () {
    let selectedValue = $('#monthSelect').val();;

    let date = $(".searchDate").val();
    // if(selectedValue === 'second' || selectedValue ==='third'){
    //     date = parseInt(date) + 30
    // }

    let storageData = localStorage.getItem(`${date}_${selectedValue}`);
    storageData = JSON.parse(storageData)
    if (storageData) {
        $(".searchTable").css('display', 'none');
        $("#reset").css('display', 'none');
        console.log("🚀 ~ file: sort65Days.js:66 ~ storageData:", storageData, selectedValue)
        var html = `
    <b class="set-name">First Set</b>
    <table class="table-{tableClass}">
      <tr>
        <td>
          <input onchange="validateInputs(this)" readonly class="common date-1" type="text" placeholder="Date One" value="" >
          <input onchange="validateInputs(this)" readonly class="common value-1" type="text" placeholder="Value One" value="" >
        </td>
      </tr>
      <tr>
        <td>
          <input onchange="validateInputs(this)" readonly class="common date-2" type="text" placeholder="Date Two" value="">
          <input onchange="validateInputs(this)" readonly class="common value-2" type="text" placeholder="Value Two" value="">
        </td>
      </tr>
      <tr>
        <td>
          <input onchange="validateInputs(this)" readonly class="common date-3" type="text" placeholder="Date Three" value="">
          <input onchange="validateInputs(this)" readonly class="common value-3" type="text" placeholder="Value Three" value="">
        </td>
      </tr>
      <tr>
        <td>
          <input onchange="validateInputs(this)" readonly class="common date-4" type="text" placeholder="Date Four" value="">
          <input onchange="validateInputs(this)" readonly class="common value-4" type="text" placeholder="Value Four" value="">
        </td>
      </tr>
    </table>
    <div style="margin-top: 20px;">
    <b class="no-data"></b>
    <b><span class="year"></span></b>
    <b><ul style="margin-right: 30px;" class="outputList"></ul></b>
    </div>

    `;
        var $div = $('#yourDiv'); // Replace 'yourDiv' with the ID or class of your target div element

        for (var i = 1; i <= 32; i++) {
            let tableClass = i;
            var $html = $(html.replace('{tableClass}', tableClass));
            $($html[4]).addClass('result-' + i)
            $($html[0]).text('Set ' + parseInt(i));
            $div.append($html);
        }

        storageData.forEach((storage, index) => {
            let flag = 0;
            for (const key in storage) {
                for (const j in storage[key]) {

                    flag = flag + 1;
                    let value = storage[key][j];

                    $(`.table-${index + 1} .value-${flag}`).val(value)

                    $(`.table-${index + 1} .date-${flag}`).val(j)
                }
            }
        });
        $("#generateData").css("display", "none");
        $("#backCompile").css("display", "none");

        $("#uploadExcel").css("display", "inline-block");
        $("#backSearchSet").css("display", "inline-block");

        $("#fileUpload").css("display", "inline-block");
    }
    else {
        alert("Please enter valid date for the selected month: " + selectedValue);
    }
});

document.getElementById('appendTables').addEventListener('click', function () {
    // saveInputsToLocalStorage();
    // $(".searchTable").css('display', 'inline-block');
    // $("#myTable").css('display', 'none');
    // $("#appendTables").css('display', 'none');
    // $("#reset").css('display', 'inline-block');
    generateFieldData();

    // alert('Input values saved to local storage!');
});

const generateFieldData = () => {
    localStorage.clear();
    let valueArray = [];
    let dates = [];
    for (var i = 1; i <= 65; i++) {
        let className = `value-${i}`;

        let value = $(`.${className}`).val();
        let date = $(`.date-${i}`).val();
        if (value) {
            valueArray[i] = value
        }
        if (date) {
            dates[i] = date;
        }
    }
    valueArray.shift();
    dates.shift();

    if (dates.length < 61 || valueArray.length < 61) {
        alert('Please enter required dates and values')
    } else {
        let month = 'first';
        let monthFlag = 0;
        for (let j = 1; j < dates.length; j++) {
            if (parseInt(j) > 29) {
                month = 'second';
                if (parseInt(j) > 59) {
                    month = 'third';
                }
            }
            if (monthFlag === 0 && dates[j] === '1') {
                monthFlag = 1;
                month = 'second';
            } else if (monthFlag === 1 && dates[j] === '1') {
                monthFlag = 2;
                month = 'third';
            }
            appendTables(dates[j], valueArray[j], dates[j - 1], valueArray[j - 1], month, dates[j + 1], dates[j + 2], monthFlag)
        }
        $(".searchTable").css('display', 'inline-block');
        $("#myTable").css('display', 'none');
        $("#appendTables").css('display', 'none');
        $("#reset").css('display', 'inline-block');
    }
}

function replaceLastDigitWithChar(number, char) {
    // Convert the number to a string
    let numberStr = String(number);

    // Replace the last character with the specified character
    let modifiedNumberStr = numberStr.slice(0, -1) + char;

    // Convert the modified string back to a number and return it
    return parseInt(modifiedNumberStr);
}

const appendTables = (currentDate, currentValue, previousDate, previousValue, month, thirdDate, fourthDate, monthFlag) => {
    const firstDate = previousDate;
    const secondDate = currentDate;
    if (thirdDate === undefined) {
        thirdDate = parseInt(currentDate) + 1;
    }
    if (fourthDate === undefined) {
        fourthDate = thirdDate + 1
    }
    let outputSet = [];
    previousValue = String(previousValue)
    let previousValueSecondary = previousValue.slice(1);
    previousValueSecondary = "?" + previousValueSecondary;
    previousValue = previousValue.slice(0, -1) + "?";
    let previousValueReverse = previousValue.split('').reverse().join('');
    let previousValueSecondaryReverse = previousValueSecondary.split('').reverse().join('');
    let currentValueReverse = currentValue.split('').reverse().join('');

    let ffSum = parseInt(currentValue.toString()[0]);
    if (ffSum > 5) {
        ffSum = ffSum - 5;
    }
    else if (ffSum === 5) {
        ffSum = 0;
    }
    else if (ffSum < 5) {
        ffSum = ffSum + 5;
    }

    let fourFive = "?" + ffSum;
    let fourFiveReverse = fourFive.split('').reverse().join('');
    let tfSum = parseInt(currentValue.toString()[1]);
    if (tfSum > 5) {
        tfSum = tfSum - 5;
    }
    else if (tfSum === 5) {
        tfSum = 0;
    }
    else if (tfSum < 5) {
        tfSum = tfSum + 5;
    }

    let twoFive = "?" + tfSum;
    let twoFiveReverse = twoFive.split('').reverse().join('');
    for (let i = 1; i <= 32; i++) {
        switch (i) {
            case 1:
                outputSet.push(
                    [
                        { [firstDate]: previousValue },
                        { [secondDate]: currentValue },
                        { [thirdDate]: previousValue },
                        { [fourthDate]: fourFive }
                    ]
                )
                break;
            case 2:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: previousValue },
                    { [fourthDate]: fourFive }
                ])
                break;
            case 3:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValue },
                    { [thirdDate]: fourFive },
                    { [fourthDate]: previousValue }
                ])
                break;
            case 4:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: fourFive },
                    { [fourthDate]: previousValue }
                ])
                break;
            case 5:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: previousValueReverse },
                    { [fourthDate]: fourFiveReverse }
                ])
                break;
            case 6:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: previousValueReverse },
                    { [fourthDate]: fourFiveReverse }
                ])
                break;
            case 7:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: fourFiveReverse },
                    { [fourthDate]: previousValueReverse }
                ])
                break;
            case 8:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: fourFiveReverse },
                    { [fourthDate]: previousValueReverse }
                ])
                break;
            case 9:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValue },
                    { [thirdDate]: previousValue },
                    { [fourthDate]: fourFive }
                ])
                break;
            case 10:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: previousValue },
                    { [fourthDate]: fourFive }
                ])
                break;
            case 11:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValue },
                    { [thirdDate]: fourFive },
                    { [fourthDate]: previousValue }
                ])
                break;
            case 12:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: fourFive },
                    { [fourthDate]: previousValue }
                ])
                break;
            case 13:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: previousValueReverse },
                    { [fourthDate]: fourFiveReverse }
                ])
                break;
            case 14:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: previousValueReverse },
                    { [fourthDate]: fourFiveReverse }
                ])
                break;
            case 15:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: fourFiveReverse },
                    { [fourthDate]: previousValueReverse }
                ])
                break;
            case 16:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: fourFiveReverse },
                    { [fourthDate]: previousValueReverse }
                ])
                break;
            case 17:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 18:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 19:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 20:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 21:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 22:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 23:
                outputSet.push([
                    { [firstDate]: previousValueReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 24:
                outputSet.push([
                    { [firstDate]: previousValue },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 25:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 26:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 27:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 28:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValue },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 29:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 30:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFiveReverse },
                    { [fourthDate]: twoFive }
                ])
                break;
            case 31:
                outputSet.push([
                    { [firstDate]: previousValueSecondary },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            case 32:
                outputSet.push([
                    { [firstDate]: previousValueSecondaryReverse },
                    { [secondDate]: currentValueReverse },
                    { [thirdDate]: twoFive },
                    { [fourthDate]: twoFiveReverse }
                ])
                break;
            default:
                break;
        }
    }
    console.log("🚀 ~ file: sort65Days.js:672 ~ appendTables ~ outputSet:", monthFlag)

    localStorage.setItem(`${currentDate}_${month}`, JSON.stringify(outputSet));
    $("#generateData").css("display", "inline-block");
    $("#backCompile").css("display", "inline-block");

}

$("#reset").on("click", function () {
    $('#yourDiv').empty();
    $("#appendTables").css('display', 'inline-block');
    $(".year").html("");
    $(".outputList").html("");
    $("#uploadExcel").css('display', 'none');
    $("#reset").css('display', 'none');
});

var selectedFile;
function validateInputs(input) {
    if (input.value && input.value.length > 2) {
        alert("Only Two Characters are allowed per Input")
    }
}

// window.onerror = function (message, source, line, column, error) {
//     // Display an alert with the error details
//     // alert("An error occurred: " + message + "\n\n" +
//     //       "Source: " + source + "\n" +
//     //       "Line: " + line + "\n" +
//     //       "Column: " + column + "\n" +
//     //       "Error object: " + error);
//     alert("No Data Found Please try again")
//     // Optional: You can also log the error to the console
//     console.error(error);
// };
document
    .getElementById("fileUpload")
    .addEventListener("change", function (event) {
        selectedFile = event.target.files[0];
    });
document
    .getElementById("uploadExcel")
    .addEventListener("click", function () {
        if (selectedFile) {
            $("#uploadExcel").css('display', 'none');
            $("#reset").css('display', 'none');
            $("#backSearchSet").css('display', 'none');


            document.getElementById('loader').style.display = 'inline-block';
            $(".year").html("");
            $(".outputList").html("");
            for (let loop = 1; loop <= 32; loop++) {
                console.log("chec", loop)
                $("#outputList").empty();
                const table = "table-" + loop;
                const index = [$(".date-1").val(), $(".date-2").val(), $(".date-3").val(), $(".date-4").val()];
                const inputValues = [$(`.${table} .value-1`).val(), $(`.${table} .value-2`).val(), $(`.${table} .value-3`).val(), $(`.${table} .value-4`).val()];

                let dataSetNew = {
                    month: '',
                    indexStart: '',
                    outerObject: ''
                };
                let monthFeb = '';
                let febIndex;
                let febIndexPlus;
                let leapMonth = false;
                let leapMonthName = '';
                let leapMonthStart = '';
                function findNextMonthIndex(dateArray) {
                    for (let i = 0; i < dateArray.length; i++) {
                        const currentDate = parseInt(dateArray[i]);
                        const nextIndex = (i + 1) % dateArray.length;
                        const nextDate = parseInt(dateArray[nextIndex]);

                        if (nextDate < currentDate) {
                            return nextIndex;
                        }
                    }

                    return -1; // If no change to next month is found
                }

                // Example usage
                const nextMonthIndex = findNextMonthIndex(index);
                if (nextMonthIndex !== -1) {
                    console.log("Next month starts at index:", nextMonthIndex);
                    dataSetNew.indexStart = nextMonthIndex;
                } else {
                    console.log("No change to next month found in the array.");
                }
                const values = inputValues.map(function (str) {
                    return /^\d+$/.test(str) ? parseInt(str, 10) : str;
                });
                const strongValues = [];
                let leap = ['1', '2', '3']
                const findSingle = [];
                let strongValuesOld = [];
                let nextYear = false;
                for (let i in values) {
                    if (index[parseInt(i) + 1] === '1' && index[i] === '29') {
                        leapMonth = true;
                        leapMonthStart = parseInt(i);
                    }
                    else if (index[parseInt(i) + 1] - index[i] < 0 && (30 - index[i] > 1 && 30 - index[i] <= 3)) {
                        monthFeb = 'Feb'
                        febIndexPlus = 30 - index[i] + 1;
                        febIndex = parseInt(i);
                    }
                    else if (index[parseInt(i) + 1] - index[i] < 0 && index[parseInt(i) + 1] - index[i] && index[parseInt(i) + 1] - index[i]) {
                        if (index[parseInt(i) + 1] - index[i] === -29) {
                            nextYear = true;
                            leapMonth = true;
                        }
                    }

                    if (typeof values[i] !== "string" || values[i] === 'xx' || values[i] === 'Xx' || values[i] === 'XX') {
                        let valMinus = 1;
                        if (parseInt(i) < 1) {
                            valMinus = -1;
                        }
                        // if (leap.includes(index[i])) {
                        //     leapMonth = true;
                        // }
                        strongValues.push({
                            value: values[i],
                            date: index[i],
                            index: parseInt(i),
                            sub: 4 - (parseInt(i) + 1),
                            valMinus: valMinus,
                            leapMonth: leapMonth
                        })

                        strongValuesOld.push({
                            value: values[i],
                            date: index[i],
                            index: parseInt(i),
                            sub: 4 - (parseInt(i) + 1),
                            valMinus: valMinus,
                        })
                    }
                }
                for (let i in values) {
                    if (typeof values[i] === "string") {
                        let valMinus = 1;
                        let leapMonth = false;
                        if (parseInt(i) < 1) {
                            valMinus = -1;
                        }
                        if (leap.includes(index[i])) {
                            leapMonth = true;
                        }
                        findSingle.push({
                            value: values[i],
                            date: index[i],
                            // index: parseInt(i) === 3 ? 2 : parseInt(i) - parseInt(i - 1),
                            index: parseInt(i),
                            sub: 4 - (parseInt(i) + 1),
                            indexCheck: parseInt(i),
                            leapMonth: leapMonth
                        })
                    }
                }

                console.log("🚀 ~ file: index.html:116 ~ strongValues:", strongValues, findSingle, values, index, leapMonth, leapMonthStart, nextYear);

                var fileReader = new FileReader();
                fileReader.onload = function (event) {
                    var data = event.target.result;

                    var workbook = XLSX.read(data, {
                        type: "binary"
                    });
                    workbook.SheetNames.forEach((sheet) => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[sheet]
                        );
                        let jsonObject = JSON.stringify(rowObject);
                        let data = [];
                        jsonObject = JSON.parse(jsonObject);

                        const monthsArray = [
                            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                        ];

                        const updatedData = jsonObject.map(obj => {
                            const newObj = {};
                            Object.entries(obj).forEach(([key, value], keyIndex) => {
                                if (key.includes("EMPTY")) {
                                    newObj[monthsArray[keyIndex - 1]] = value;
                                } else {
                                    newObj[key] = value;
                                }
                            });

                            return newObj;
                        });
                        jsonObject = updatedData;
                        jsonObject.forEach((obj) => {
                            const firstObjectKey = Object.keys(obj)[0];
                            const firstObjectValue = obj[firstObjectKey];
                            delete obj[firstObjectKey];
                            const newObj = { [firstObjectValue.toString()]: obj };

                            data.push(newObj);
                        });

                        let outputData = [];
                        let dataSet = {
                            month: '',
                            index: '',
                            outerObject: ''
                        }
                        let year;
                        let months = [];
                        let firstDataYears = []
                        let newData = [];
                        let newDataIterations = [];
                        function firstValue(data) {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i][strongValues[0].date]) {
                                    let key = Object.keys(data[i][strongValues[0].date]).find(key => data[i][strongValues[0].date][key] === strongValues[0].value);
                                    if (key) {
                                        newDataIterations.push({ start: parseInt(i) - parseInt(strongValues[0].date), end: parseInt(i) + 30 });
                                        months.push(key);
                                    }
                                }
                            }
                        }

                        function compareStrings(string1, string2) {
                            if (string1 !== undefined && string2 !== undefined) {
                                string1 = string1.toString();
                                string2 = string2.toString();
                                if (string2.length === 1) {
                                    string2 = '0' + string2
                                }
                                if (string1.length !== string2.length) {
                                    return false; // If the strings have different lengths, they can't match
                                }

                                for (let i = 0; i < string1.length; i++) {
                                    if (string1[i] !== "?" && string1[i] !== string2[i]) {
                                        return false; // If a non-question mark character doesn't match, return false
                                    }
                                }

                                return true; // All characters match, or are question marks
                            } else {
                                return false;
                            }
                        }
                        const rest = [];
                        let minusValues = {
                            "1": 28,// 28 if index one has value
                            "2": 28,
                            "3": 27
                        }
                        let minusValuesForTwo = {
                            "1": 29,// 28 if index one has value
                            "2": 28,
                            "3": 28
                        }
                        let minusValuesForFour = {
                            "1": 27,// 28 if index one has value
                            "2": 28,
                            "3": 27
                        }
                        let dataNew = [{}, {}, {}, {}];
                        let outputIndexes = [];
                        let arr1 = [];
                        let arr2 = [];
                        let arr3 = [];
                        let arr4 = [];
                        let afterLeap = ['1', '2', '3'];
                        function extraWork(newData) {
                            for (let i = 0; i < months.length; i++) {
                                for (let j = 0; j < newData.length; j++) {
                                    let monthOne = months[i];
                                    let monthTwo = months[i];
                                    let monthThree = months[i];
                                    let monthFour = months[i];
                                    let rangeAfter = ['1', '2', '3']
                                    let arr = [];
                                    if (newData[j] !== undefined) {
                                        if (newData[j][strongValues[0].date]) {
                                            if (leapMonth) {
                                                if (strongValues[0].indexCheck > leapMonthStart) {
                                                    monthsArray.map((mo, index) => {
                                                        if (mo === months[i]) {
                                                            monthFour = monthsArray[index + 1];
                                                        }
                                                    });
                                                }
                                            }
                                            let isMatch = newData[j][strongValues[0].date][monthFour];
                                            if (isMatch === values[strongValues[0].index]) {
                                                let startindex = parseInt(j) - parseInt(strongValues[0].date);
                                                startindex = startindex === undefined ? parseInt(j) - parseInt(strongValues[0].date) + 1 : startindex;
                                                let endIndex = parseInt(j) + (30 - parseInt(strongValues[0].date));
                                                if (leapMonth) {
                                                    startindex = startindex - 2;
                                                    endIndex = endIndex + 2
                                                }
                                                for (let z = startindex; z < endIndex; z++) {
                                                    if (newData[z] !== undefined) {
                                                        if (newData[z][findSingle[0].date]) {
                                                            if (leapMonth || monthFeb === 'Feb') {
                                                                if (findSingle[0].leapMonth && !afterLeap.includes(strongValues[0].date)) {
                                                                    monthsArray.map((mo, index) => {
                                                                        if (mo === months[i]) {
                                                                            monthOne = monthsArray[index + 1];
                                                                            if (monthOne === undefined) {
                                                                                monthOne = 'Jan';
                                                                            }
                                                                        }
                                                                    });
                                                                }
                                                                else if (!findSingle[0].leapMonth && afterLeap.includes(strongValues[0].date)) {
                                                                    monthsArray.map((mo, index) => {
                                                                        if (mo === months[i]) {
                                                                            monthOne = monthsArray[index - 1];
                                                                            if (monthOne === undefined) {
                                                                                monthOne = 'Dec';
                                                                            }
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                            let isMatchOne = compareStrings(findSingle[0].value, newData[z][findSingle[0].date][monthOne]);
                                                            if (isMatchOne) {
                                                                for (let k = startindex; k < endIndex; k++) {
                                                                    if (newData[k] !== undefined) {
                                                                        if (newData[k][findSingle[1].date]) {
                                                                            if (leapMonth || monthFeb === 'Feb') {
                                                                                if (findSingle[1].leapMonth && !afterLeap.includes(strongValues[0].date)) {
                                                                                    monthsArray.map((mo, index) => {
                                                                                        if (mo === months[i]) {
                                                                                            monthTwo = monthsArray[index + 1];
                                                                                            if (monthTwo === undefined) {
                                                                                                monthTwo = 'Jan';
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                }
                                                                                else if (!findSingle[1].leapMonth && afterLeap.includes(strongValues[0].date)) {
                                                                                    monthsArray.map((mo, index) => {
                                                                                        if (mo === months[i]) {
                                                                                            monthTwo = monthsArray[index - 1];
                                                                                            if (monthTwo === undefined) {
                                                                                                monthTwo = 'Dec';
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                }
                                                                            }
                                                                            let isMatchTwo = compareStrings(findSingle[1].value, newData[k][findSingle[1].date][monthTwo]);
                                                                            if (isMatchTwo) {
                                                                                for (let m = startindex; m < endIndex; m++) {
                                                                                    if (newData[m] !== undefined && outputData.length !== 4) {
                                                                                        if (newData[m][findSingle[2].date]) {
                                                                                            if (leapMonth || monthFeb === 'Feb') {
                                                                                                if (findSingle[2].leapMonth && !afterLeap.includes(strongValues[0].date)) {
                                                                                                    monthsArray.map((mo, index) => {
                                                                                                        if (mo === months[i]) {
                                                                                                            monthThree = monthsArray[index + 1];
                                                                                                            if (monthThree === undefined) {
                                                                                                                monthThree = 'Jan';
                                                                                                            }
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                                else if (!findSingle[2].leapMonth && afterLeap.includes(strongValues[0].date)) {
                                                                                                    monthsArray.map((mo, index) => {
                                                                                                        if (mo === months[i]) {
                                                                                                            monthThree = monthsArray[index - 1];
                                                                                                            if (monthThree === undefined) {
                                                                                                                monthThree = 'Dec';
                                                                                                            }
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            }

                                                                                            let isMatchThree = compareStrings(findSingle[2].value, newData[m][findSingle[2].date][monthThree]);
                                                                                            if (isMatchThree) {
                                                                                                strongValues.push({
                                                                                                    value: newData[z][findSingle[0].date][monthOne],
                                                                                                    date: parseInt(index[findSingle[0].index]),
                                                                                                    index: parseInt(findSingle[0].index),
                                                                                                    sub: 3 - findSingle[0].index,
                                                                                                    month: monthOne,
                                                                                                });
                                                                                                outputData[findSingle[0].indexCheck] = {
                                                                                                    value: newData[z][findSingle[0].date][monthOne],
                                                                                                    date: parseInt(index[findSingle[0].index]),
                                                                                                    index: z,
                                                                                                    month: monthOne
                                                                                                };
                                                                                                outputData[strongValues[0].index] = {
                                                                                                    value: isMatch,
                                                                                                    date: parseInt(index[strongValues[0].index]),
                                                                                                    index: j,
                                                                                                    month: monthFour
                                                                                                };
                                                                                                outputData[findSingle[1].indexCheck] = {
                                                                                                    value: isMatch,
                                                                                                    date: parseInt(index[strongValues[0].index]),
                                                                                                    index: k,
                                                                                                    month: monthTwo
                                                                                                };
                                                                                                outputData[findSingle[2].indexCheck] = {
                                                                                                    value: isMatch,
                                                                                                    date: parseInt(index[strongValues[0].index]),
                                                                                                    index: m,
                                                                                                    month: monthThree
                                                                                                };

                                                                                                let yearIndex = 30 - strongValues[1].date + parseInt(z);
                                                                                                if (Object.keys(newData[yearIndex + 1])[0] === "31") {
                                                                                                    year = Object.keys(newData[yearIndex - 30])[0];
                                                                                                }
                                                                                                else {
                                                                                                    year = Object.keys(newData[yearIndex + 1])[0] - 1;
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }
                            }
                        }
                        function restValues(data) {
                            for (let i = 0; i < months.length; i++) {
                                for (let j = 0; j < data.length; j++) {
                                    // let index;
                                    let value;
                                    if (strongValues.length < 2) {

                                        if (data[j][findSingle[0].date]) {
                                            let index2;
                                            let index3;
                                            if (findSingle[0].index === 1) {
                                                findSingle[1].index = 1;
                                                findSingle[2].index = 2;
                                                strongValues[0].valMinus = -1;
                                            }
                                            else {
                                                strongValues[0].valMinus = strongValues[0].index;
                                            }
                                            let monthOne = months[i];

                                            let matchOneIndex = parseInt(j);
                                            let isMatch = compareStrings(findSingle[0].value, data[j][findSingle[0].date][monthOne])
                                            if (isMatch) {
                                                value = data[j][findSingle[0].date][months[i]];
                                                j = parseInt(j);
                                                rest.push(parseInt(j));
                                                let monthTwo = months[i];
                                                let monthTwoDate = findSingle[1].date - findSingle[0].date;
                                                let nextMonthIndex;

                                                let matchTwoIndex = parseInt(j) + findSingle[1].index;
                                                let isMatchtwo = compareStrings(findSingle[1].value, data[j + findSingle[1].index][findSingle[1].date][monthTwo]);
                                                if (isMatchtwo) {
                                                    let monthThree = months[i];
                                                    let matchThreeIndex = parseInt(j) + findSingle[2].index;
                                                    let isMatchthree = compareStrings(findSingle[2].value, data[j + findSingle[2].index][findSingle[2].date][monthThree])
                                                    if (isMatchthree) {
                                                        // wirte logic for inxe here 
                                                        let monthFour = months[i]
                                                        let dateArray = ['1', '2', '3']

                                                        let matchFourIndex = parseInt(j) + strongValues[0].valMinus;
                                                        let isMatchFour = data[j + strongValues[0].valMinus][strongValues[0].date][monthFour]
                                                        if (isMatchFour === values[strongValues[0].index]) {
                                                            values[findSingle[0].index] = value
                                                            strongValues[0].month = monthThree;
                                                            let months = [monthOne, monthFour, monthTwo, monthThree];
                                                            if (monthFeb === 'Feb') {
                                                                for (let i = 0; i < months.length; i++) {
                                                                    let foundMar = false;
                                                                    if (months[i] === 'Apr') {
                                                                        foundMar = true;
                                                                    }

                                                                    if (foundMar) {
                                                                        months[i] = 'Feb';
                                                                    }
                                                                }
                                                            }
                                                            strongValues.push({
                                                                value: data[j][findSingle[0].date][monthOne],
                                                                date: parseInt(index[findSingle[0].index]),
                                                                index: parseInt(findSingle[0].index),
                                                                sub: 3 - findSingle[0].index,
                                                                month: monthOne,
                                                            });
                                                            outputData[findSingle[0].indexCheck] = {
                                                                value: data[j][findSingle[0].date][monthOne],
                                                                date: parseInt(index[findSingle[0].index]),
                                                                index: matchOneIndex,
                                                                month: months[0]
                                                            };
                                                            outputData[strongValues[0].index] = {
                                                                value: isMatchFour,
                                                                date: parseInt(index[strongValues[0].index]),
                                                                index: matchFourIndex,
                                                                month: months[1]
                                                            };
                                                            outputData[findSingle[1].indexCheck] = {
                                                                value: isMatchFour,
                                                                date: parseInt(index[strongValues[0].index]),
                                                                index: matchTwoIndex,
                                                                month: months[2]
                                                            };
                                                            outputData[findSingle[2].indexCheck] = {
                                                                value: isMatchFour,
                                                                date: parseInt(index[strongValues[0].index]),
                                                                index: matchThreeIndex,
                                                                month: months[3]
                                                            };

                                                            let yearIndex = 30 - strongValues[1].date + parseInt(j);
                                                            if (Object.keys(data[yearIndex + 1])[0] === "31") {
                                                                year = Object.keys(data[yearIndex - 30])[0];
                                                            }
                                                            else {
                                                                year = Object.keys(data[yearIndex + 1])[0] - 1;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        function removeDuplicates(arr) {
                            return arr.filter((item,
                                index) => arr.indexOf(item) === index);
                        }
                        firstValue(data);
                        months = removeDuplicates(months)
                        if (monthFeb === 'Feb' || leapMonth || nextYear) {
                            extraWork(data)
                            // data = newData
                        }
                        else {
                            restValues(data);
                        }
                        if (outputData.length !== 0) {
                            outputData.forEach((d, i) => {
                                let value = Object.values(data[d.index]);
                                values[i] = value[0][d.month];
                            })
                            console.log("values", values)
                            for (let i in values) {
                                values[i] = values[i].toString();
                                if (values[i].length === 1) {
                                    values[i] = '0' + values[i]
                                }
                            }
                            console.log(values);
                            const output = `result-${loop}`
                            // Get the <ul> element by its ID
                            $(`.${output} .year`).html(`Year: ${year}`)
                            const $ulElement = $(`.${output} .outputList`)

                            // Iterate through the data and create <li> elements
                            for (var i = 0; i < values.length; i++) {
                                const $liElement = $("<li>").text(values[i]);
                                $ulElement.append($liElement);
                            }
                        }
                        else {
                            const output = `result-${loop}`
                            $(`.${output} .no-data`).html("No Data Found");
                        }
                        setTimeout(function () {
                            // Your last line of code
                            // ...

                            // Hide the loader when the operation is completed
                            document.getElementById('loader').style.display = 'none';
                            $("#uploadExcel").css('display', 'inline-block');
                            $("#reset").css('display', 'inline-block');
                            $("#backSearchSet").css('display', 'inline-block');

                        }, 3000);

                    });
                };
                fileReader.readAsBinaryString(selectedFile);
            }
        }
        else {
            alert("Please Upload File to run")
        }
    });
