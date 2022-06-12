var TransactionTypes = [
    {
        'Value': 'A',
        'Text': 'Card Read',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Good Read of Card Next State",
            "Octate3": "Misread Screen To Displayed",
            "Octate4": "Read Condition 1",
            "Octate5": "Read Condition 2",
            "Octate6": "Read Condition 3",
            "Octate7": "Return Card",
            "Octate8": "No match on FIT Next State"
        }]
    },
    {
        'Value': 'B',
        'Text': 'PIN Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "Good Local PIN Check Next State",
            "Octate5": "Maximum Bad PINs Next State Number",
            "Octate6": "Local PIN Check Error Screen",
            "Octate7": "Remote PIN Check Next State",
            "Octate8": "Maximum Local PIN Attempts"
        }]
    },
    {
        'Value': 'C',
        'Text': 'Envelope Dispenser',
        'Octates': [{
            "Octate1": "Next State Number",
            "Octate2": "Reserved. Must be 000",
            "Octate3": "Reserved. Must be 000",
            "Octate4": "Reserved. Must be 000",
            "Octate5": "Reserved. Must be 000",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'D',
        'Text': 'Preset Operation Code Buffer',
        'Octates': [{
            "Octate1": "Next State Number",
            "Octate2": "Clear Mask",
            "Octate3": "'A' Preset Mask",
            "Octate4": "'B' Preset Mask",
            "Octate5": "'C' Preset Mask",
            "Octate6": "'D' Preset Mask",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'E',
        'Text': 'Four FDK Selection Function',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK 'A' Next State",
            "Octate5": "FDK 'B' Next State",
            "Octate6": "FDK 'C' Next State",
            "Octate7": "FDK 'D' Next State",
            "Octate8": "Buffer Location"
        }]
    },
    {
        'Value': 'F',
        'Text': 'Amount Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK 'A' Next State",
            "Octate5": "FDK 'B' Next State",
            "Octate6": "FDK 'C' Next State",
            "Octate7": "FDK 'D' Next State",
            "Octate8": "Amount Display Screen"
        }]
    },
    {
        'Value': 'G',
        'Text': 'Amount Check',
        'Octates': [{
            "Octate1": "",
            "Octate2": "",
            "Octate3": "",
            "Octate4": "",
            "Octate5": "",
            "Octate6": "",
            "Octate7": "",
            "Octate8": ""
        }]
    },
    {
        'Value': 'H',
        'Text': 'Information Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK 'A' Next State",
            "Octate5": "FDK 'B' Next State",
            "Octate6": "FDK 'C' Next State",
            "Octate7": "FDK 'D' Next State",
            "Octate8": "Buffer And Display Parameters"
        }]
    },
    {
        'Value': 'I',
        'Text': 'Transaction Request',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Host Timeout Next State",
            "Octate3": "Send Track 2",
            "Octate4": "Send Track 1/3 CIM",
            "Octate5": "Send Operation Code Data",
            "Octate6": "Send Amount Data",
            "Octate7": "Send PIN Buffer",
            "Octate8": "Send Buffer B And C"
        }]
    },
    {
        'Value': 'J',
        'Text': 'Close',
        'Octates': [{
            "Octate1": "Receipt Delivered Screen Number",
            "Octate2": "Next State",
            "Octate3": "No Receipt Screen Number",
            "Octate4": "Card Retained Screen Number",
            "Octate5": "Statement Delivered Screen Number",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "BNA Notes Returned Screen",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'K',
        'Text': 'FIT Switch',
        'Octates': [{
            "Octate1": "",
            "Octate2": "",
            "Octate3": "",
            "Octate4": "",
            "Octate5": "",
            "Octate6": "",
            "Octate7": "",
            "Octate8": ""
        }]
    },
    {
        'Value': 'L',
        'Text': 'Card Write',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Good Write Next State",
            "Octate3": "Bad Write Next State",
            "Octate4": "No Write Attempted Next State",
            "Octate5": "Reserved. Must be 000",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'M',
        'Text': 'Enhanced PIN Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "Good Local PIN Check Next State",
            "Octate5": "Maximum Bad PINs Next State Number",
            "Octate6": "Local PIN Check Error Screen",
            "Octate7": "Remote PIN Check Next State",
            "Octate8": "Maximum Local PIN Attempts"
        }]
    },
    {
        'Value': 'N',
        'Text': 'Camera Control',
        'Octates': [{
            "Octate1": "Picture Type",
            "Octate2": "Next State",
            "Octate3": "Reserved. Must be 000",
            "Octate4": "Reserved. Must be 000",
            "Octate5": "Reserved. Must be 000",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'O',
        'Text': 'Cardholder Verification',
        'Octates': [{
            "Octate1": "",
            "Octate2": "",
            "Octate3": "",
            "Octate4": "",
            "Octate5": "",
            "Octate6": "",
            "Octate7": "",
            "Octate8": ""
        }]
    },
    {
        'Value': 'R',
        'Text': 'Enhanced Amount Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK 'A' Next State",
            "Octate5": "FDK 'B' Next State",
            "Octate6": "FDK 'C' Next State",
            "Octate7": "FDK 'D' Next State",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'S',
        'Text': 'Language Code Switch',
        'Octates': [{
            "Octate1": "No Language Code Next State",
            "Octate2": "Language 0 Next State",
            "Octate3": "Language 1 Next State",
            "Octate4": "Language 2 Next State",
            "Octate5": "Language 3 Next State",
            "Octate6": "Language 4 Next State",
            "Octate7": "Language 5 Next State",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'T',
        'Text': 'Card Read - PIN Entry Initiation',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Good Read of Card Next State",
            "Octate3": "Misread Screen To Displayed",
            "Octate4": "Read Condition 1",
            "Octate5": "Read Condition 2",
            "Octate6": "Read Condition 3",
            "Octate7": "Return Card",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'U',
        'Text': 'Device Fitness Flow Select',
        'Octates': [{
            "Octate1": "Device Number",
            "Octate2": "Device Available Next State",
            "Octate3": "Device Identifier Graphic",
            "Octate4": "Device Unavailable Next State",
            "Octate5": "Device Sub-Component Identifier",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'V',
        'Text': 'Language Select From Card',
        'Octates': [{
            "Octate1": "Next State Number",
            "Octate2": "Screen Group 1 Code",
            "Octate3": "Screen Group 2 Code",
            "Octate4": "Screen Group 3 Code",
            "Octate5": "Screen Group 4 Code",
            "Octate6": "Screen Group 5 Code",
            "Octate7": "Screen Group 6 Code",
            "Octate8": "Language Group Size"
        }]
    },
    {
        'Value': 'W',
        'Text': 'FDK Switch',
        'Octates': [{
            "Octate1": "FDK 'A' Next State",
            "Octate2": "FDK 'B' Next State",
            "Octate3": "FDK 'C' Next State",
            "Octate4": "FDK 'D' Next State",
            "Octate5": "FDK 'F' Next State",
            "Octate6": "FDK 'G' Next State",
            "Octate7": "FDK 'H' Next State",
            "Octate8": "FDK 'I' Next State"
        }]
    },
    {
        'Value': 'X',
        'Text': 'FDK Information Entry',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK Pressed Next State",
            "Octate5": "Extension State",
            "Octate6": "Buffer ID",
            "Octate7": "Active Key Mask",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'Y',
        'Text': 'Eight FDK Selection Function',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "FDK Pressed Next State",
            "Octate5": "Extension State",
            "Octate6": "Buffer Position",
            "Octate7": "Active Key Mask",
            "Octate8": "Multiple Language Extension State",
        }]
    },
    {
        'Value': 'Z',
        'Text': 'Extension State',
        'Octates': [{
            "Octate1": "Buffer ID1",
            "Octate2": "Buffer ID2",
            "Octate3": "Buffer ID1 > Buffer ID2 Next State Num",
            "Octate4": "Buffer ID1 < Buffer ID2 Next State Num",
            "Octate5": "Reserved. Must be 000",
            "Octate6": "Reserved. Must be 000",
            "Octate7": "Reserved. Must be 000",
            "Octate8": "Reserved. Must be 000"
        }]
    },
    {
        'Value': 'b',
        'Text': 'Customer Selectable PIN State',
        'Octates': [{
            "Octate1": "First Entry Screen",
            "Octate2": "Timeout Screen State",
            "Octate3": "Cancel Next State",
            "Octate4": "Good PIN Next State",
            "Octate5": "CSP Fail Next State",
            "Octate6": "Second Entry Screen",
            "Octate7": "Miss Match First Entry Screen",
            "Octate8": "Extension State"
        }]
    },
    {
        'Value': 'k',
        'Text': 'Smart FIT Check State',
        'Octates': [{
            "Octate1": "Reserved. Must be 000",
            "Octate2": "Good Read of Card Next State",
            "Octate3": "Misread Screen To Displayed",
            "Octate4": "Read Condition 1",
            "Octate5": "Read Condition 2",
            "Octate6": "Read Condition 3",
            "Octate7": "Return Card",
            "Octate8": "No match on FIT Next State"
        }]
    },
    {
        'Value': 'm',
        'Text': 'PIN & Language Select State',
        'Octates': [{
            "Octate1": "Screen Number To Displayed",
            "Octate2": "Customer Timeout Next State",
            "Octate3": "Cancel Next State",
            "Octate4": "Extension Number 1",
            "Octate5": "Extension Number 2",
            "Octate6": "Buffer Position",
            "Octate7": "Active Key Mask",
            "Octate8": "Extension Number 3"
        }]
    },
]

var RowID = 0;

var reader = new TxtReader();

var NewAarray = [];
var newdata = [];

//let file; //this is a global variable and we'll use it inside multiple function

function AddRow(newdata, index) {

    var Timer;
    var Description;
    var Ticks;
    var Seconds;

    if (index == 0) {
        Timer = newdata[1].split("{")[0];
        Timer = $.trim(Timer);

        Description = newdata[1].split("{")[1];
        Description = $.trim(Description);

        Ticks = newdata[2].split("{")[0];
        Ticks = $.trim(Ticks);

        Seconds = Ticks * 0.8;
        Seconds = Seconds.toFixed(0);

    } else {

        Timer = newdata[2].split("{")[0];
        Timer = $.trim(Timer);

        Description = newdata[2].split("{")[1];
        Description = $.trim(Description);

        Ticks = newdata[3].split("{")[0];
        Ticks = $.trim(Ticks);

        Seconds = Ticks * 0.8;
        Seconds = Seconds.toFixed(0);

    }

    RowID = RowID + 1;

    $("#FileUploadArea").hide();
    $("#FieldsAreaWrapper").fadeIn();

    $('.fields-mapper').append(`

    <div class="row transaction-flow-row animate__animated animate__fadeInDown animate__faster" id="${newdata[0]}">
    <div class="row-seperator"><div class="inner">&nbsp;</div></div>
    <div class="col-1 offset-1 timerTime">
        <label class="field-label">Timer</label>
        <input class="form-control timer-timer" value="${Timer}" autofocus type="text" maxlength="3" />
    </div>
    <div class="col-6 timerDescription">
        <label class="field-label">Description</label>
        <input class="form-control timer-description" value="${Description}" type="text" maxlength="3" />
    </div>
    <div class="col-1 timerTimeInterval">
        <label class="field-label">Ticks</label>
        <input class="form-control timer-ticks" onchange="OnChangeTicks(event)" value="${Ticks}" type="text" maxlength="3" />
    </div>
    <div class="col-1 timerTicks">
        <label class="field-label">Seconds</label>
        <input class="form-control timer-seconds" value="${Seconds}" type="text" maxlength="3" />
    </div>
    <div class="col-1 actions-col">
        <label class="field-label" style="visibility: hidden; display: block;">Remove</label>
        <span class="material-symbols-outlined" data-row-id="${newdata[0]}" onclick="onClickRemoveRow(event)">
            delete
        </span>
    </div>
    </div>
    `);

    //setTimeout(function () {
    //    TrimLabels(Args[1]);
    //}, 225)

    PopulateTransactionTypeDDL();

}

function TrimLabels(ID) {

    var ParentID;

    if (typeof ID == "undefined" == true) {
        ParentID = RowID;
    } else {
        ParentID = ID;
    }

    $("#" + ParentID + ' .octate .field-label').each(function () {

        if ($(this).text().length > 8) {
            $(this).attr("title", $(this).text());
            $(this).text($(this).text().substr(0, 8) + "...");
        } else {
            $(this).text($(this).text());
        }

    })

}

function PopulateTransactionTypeDDL() {

    for (var x = 0; x < TransactionTypes.length; x++) {
        $("#" + RowID + " .transaction-type-dll").append("<option value='" + TransactionTypes[x].Value + "'>" + TransactionTypes[x].Value + " - " + TransactionTypes[x].Text + "</option>")
    }

}

function onChangeTransactionType(e) {

    //console.log($(e.target).parent().parent().attr('id'));
    //console.log(RowID);

    for (var x = 0; x < TransactionTypes.length; x++) {
        if (TransactionTypes[x].Value == $(e.target).val()) {

            for (var y = 0; y < TransactionTypes[x].Octates.length; y++) {
                //console.log(TransactionTypes[x].Octates[y]);
                $("#" + $(e.target).parent().parent().attr('id') + " .timerTime .field-label").text(TransactionTypes[x].Octates[y].Octate1);
                $("#" + $(e.target).parent().parent().attr('id') + " .timerDescription .field-label").text(TransactionTypes[x].Octates[y].Octate2);
                $("#" + $(e.target).parent().parent().attr('id') + " .timerTimeInterval .field-label").text(TransactionTypes[x].Octates[y].Octate3);
                $("#" + $(e.target).parent().parent().attr('id') + " .timerTicks .field-label").text(TransactionTypes[x].Octates[y].Octate4);
            }

        }
    }

    TrimLabels($(e.target).parent().parent().attr('id'));

    // $(".transaction-flow-row").each(function(){

    //     if($(this).attr('id') == RowID) {
    //         //$(e.target).parent().parent().css("border", "1px solid red");

    //         for(var x = 0; x < TransactionTypes.length; x++) {
    //             if(TransactionTypes[x].Value == $(e.target).val()) {
    //                 //console.log(TransactionTypes[x]);

    //                 for(var y = 0; y < TransactionTypes[x].Octates.length; y++) {
    //                     //console.log(TransactionTypes[x].Octates[y]);
    //                     //console.log(RowID);
    //                     //$("#" + $(e.target).parent().parent().attr('id')).css("border", "1px solid green;")
    //                     //$("#" + $(e.target).parent().parent().attr('id') + " .octate" + y+1);
    //                 }

    //             }
    //         }
    //     }

    // })

}

function RenderOctatesLabels(TransactionType) {
    var ToReturnHTML = "";

    for (var y = 0; y < TransactionTypes.length; y++) {
        if (TransactionTypes[y].Value == TransactionType) {
            for (var z = 0; z < TransactionTypes[y].Octates.length; z++) {
                for (var key in TransactionTypes[y].Octates[z]) {
                    ToReturnHTML += "<p><span>" + key + " = </span>" + TransactionTypes[y].Octates[z][key] + "</p>";
                }
            }


        }
    }

    return ToReturnHTML;
}

function PopulateLabelsDictionary() {

    $(".labels-dictionary-mapper").html("");

    for (var x = 0; x < TransactionTypes.length; x++) {
        $(".labels-dictionary-mapper").append(`
        <div class="row labels-dictionary-row">
        <div class="col-12 transaction-type">
        ${TransactionTypes[x].Value} - ${TransactionTypes[x].Text}
        </div>
        <div class="col-12 inner">
        ${RenderOctatesLabels(TransactionTypes[x].Value)}
        </div>
        </div>
        `)
    }

}

function onClickShowLabelsDictionary() {
    $('.labels-dictionary-wrapper').show();
}

function onClickExpandOctates() {
    $('.octate').addClass('expand-octates');
}

function onClickJumpToState() {
    $('.jump-state-wrapper').show();
    $('.jump-state-wrapper input').focus();
}

function onClickKeyboardShortcuts() {
    $('#KeyboardShortcutsModal').modal('show');
}

function onClickCloseDictionary() {
    $('.labels-dictionary-wrapper').hide();
}

function onClickCreateFile() {

    $("#Intro").hide();
    $("#CreateFile").fadeIn();


}

function onClickRemoveRow(e) {

    if (RowID == 0) {
        return;
    }

    $('.transaction-flow-row').each(function () {
        if ($(this).attr('id') == $(e.target).data('row-id')) {
            $(this).remove();
            RowID = RowID - 1;
        }
    })

}

function onClickCloseModal(ModalID) {

    $("#" + ModalID).modal("hide");

}

function JumpToJumpStateNumber() {
    $('.state-field').each(function () {
        if ($(this).val() == $("#JumpStateField").val()) {
            $(this).focus();
        }
    })
}

function onClickCloseJumpState() {
    $('.jump-state-wrapper').hide();
}

function exectueAfterLoadFileComplete(linesCount) {

    reader.getLines(1, linesCount)
        .progress(function (progress) {

            //console.log('Getting lines progress: ' + progress + '%');
            $(".progress .progress-text").text("Reading Data: " + progress + '%');
            $(".progress .progress-bar").css("width", progress + "%");

        })
        .then(function (response) {

            //console.log(response.result);

            setTimeout(function () {
                $(".progress .progress-text").html("<span class='material-symbols-outlined'>settings</span>Generating Fields");

                setTimeout(function () {
                    GenerateFields(response.result, linesCount);
                }, 500)

            }, 500)

        })
        .catch(function (reason) {
            console.log('Getting lines failed with error: ' + reason);
        });
}

function GenerateFields(data, lc) {

    // Sanitizing Data
    var values = ["TIMERS"]; // Values to remove from Obj

    var SanitizedObj = data.filter(item => !values.includes(item));

    var arrToPush = [];

    for (var x = 0; x < SanitizedObj.length; x++) {

        //console.log(arrToPush);

        if (x % 2 == 0) {
            NewAarray.push(arrToPush);
            arrToPush = [];
        }

        var splitArrays = SanitizedObj[x].split("{");
        const removeSpaces = splitArrays
            .map(val => val.trim())
            .filter(val => val !== '');
        arrToPush.push(SanitizedObj[x]);

    }

    for (var i = 0; i < NewAarray.length; i += 1) { // i+=3 can solve your problem
        // var three = NewAarray[i] + "," +NewAarray[i+1];
        var three = NewAarray[i] + "," + NewAarray[i + 1];
        newdata.push(three);


    }

    //   console.log(newdata);

    for (var i = 0; i < newdata.length; i++) {
        const arr = newdata[i].split(',');
        AddRow(arr, i);
    }



    onClickCreateFile();

}

reader.utf8decoder.decode(new Uint8Array(['a'.charCodeAt(0)])) === 'a' // true

function OnChangeTicks(e) {
    $(e.target).parent().next().find('input').val(e.target.value * 0.8);
}

function GenerateNDCObject(e) {

    $(e.target).html("<span class='material-symbols-outlined'>settings</span>Generating");

    setTimeout(function () {

        var StateObj = [];

        $('.transaction-flow-row').each(function () {
            StateObj.push(
                {
                    "Timer": $(this).find('.timer-timer').val(),
                    "Description": $(this).find('.timer-description').val(),
                    "Ticks": $(this).find('.timer-ticks').val(),
                    "Seconds": $(this).find('.timer-seconds').val(),
                }
            )
        })

        $("#GeneratedDataModal .modal-body .inner").html("");

        for (var x = 0; x < StateObj.length; x++) {

            $("#GeneratedDataModal .modal-body .inner").append(`
                <p class="generated-data-row">
                    <span class="indv-data">${StateObj[x].Timer}</span>
                    <span class="indv-data">{${StateObj[x].Description}</span>
                </p>
                <p class="generated-data-row">
                    <span class="indv-data">${StateObj[x].Ticks}</span>
                    <span class="indv-data">{${StateObj[x].Seconds} SECONDS</span>
                </p>
            `)
        }

        $("#GeneratedDataModal").modal("show");

        $(e.target).html("Generate");

    }, 500)

}

$(document).ready(function () {

    TrimLabels();

    PopulateTransactionTypeDDL();

    PopulateLabelsDictionary();

    $("#formFile").on("change", function () {
        var file = document.getElementById('formFile').files[0];
        $(".progress").removeClass("invisible");

        reader.loadFile(file)
            .progress(function (progress) {

                $(".progress .progress-text").text("Loading Data: " + progress + "%");
                $(".progress .progress-bar").css("width", progress + "%");
                //console.log('Loading file progress: ' + progress + '%');

            })
            .then(function (response) {
                //console.log('Loading file completed in ' + response.timeTaken + 'ms, total lines: ' + response.result.lineCount);
                exectueAfterLoadFileComplete(response.result.lineCount);
            })
            .catch(function (reason) {
                console.log('Loading file failed with error: ' + reason);
            });

    })

    $('.file-upload-btn').on("click", function () {
        $("#formFile").trigger("click");
    })

    // Key Binds
    var altPressed = false; //Variable to check if the the first button is pressed at this exact moment
    $(document).keydown(function (e) {
        if (e.altKey) { //If it's ctrl key
            altPressed = true; //Set variable to true
        }
    }).keyup(function (e) { //If user releases ctrl button
        if (e.altKey) {
            altPressed = false; //Set it to false
        }
    }); //This way you know if ctrl key is pressed. You can change e.altKey to any other key code you want

    $(document).keydown(function (e) { //For any other keypress event

        if (e.which == 74) { // J key
            if (altPressed == true) {

                onClickJumpToState();
                altPressed = false;

            }
        }

        if (e.which == 75) { // K key
            if (altPressed == true) {

                onClickKeyboardShortcuts();
                altPressed = false;

            }
        }

        if (e.which == 76) { // L key
            if (altPressed == true) {

                onClickShowLabelsDictionary();
                altPressed = false;

            }
        }

    })

    // Detect Enter Key on Jump State Field
    $('#JumpStateField').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            JumpToJumpStateNumber();
        }
    });

    setTimeout(function () {
        $('.splash-wrapper').fadeOut(350);
    }, 1000)

})