import LevelsService from "./levels.js";
import StatesService from "./main.js";

var states = new StatesService();
var levels = new LevelsService();
var RawExportedKeys = [];
var RawExportedData = [];
var TempArray = [];
var reader = new TxtReader();
var DataObj;

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
            "Octate1": "Amount Check Condition True",
            "Octate2": "Amount Check Condition False",
            "Octate3": "Buffer to Check",
            "Octate4": "Integer Multiple Value",
            "Octate5": "Decimal Places",
            "Octate6": "Currency Type",
            "Octate7": "Amount Check Condition",
            "Octate8": "Reserved"
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
            "Octate1": "Next State 1",
            "Octate2": "Next State 2",
            "Octate3": "Next State 3",
            "Octate4": "Next State 4",
            "Octate5": "Next State 5",
            "Octate6": "Next State 6",
            "Octate7": "Next State 7",
            "Octate8": "Next State 8"
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

if (JSON.parse(localStorage.getItem("FileParsedData")) == null) {
    var DataObj = [
        "000 k 000 017 000 000 000 000 001 002 FS",
        "680 017 K 050 002 002 002 002 035 002 002 FS",
        "680 087  Z  003  000  000  048  000  000  001  000 FS",
        "680 089  Z  000  000  000  000  000  000  001  000 FS",
        "680 125  W  100  183  150  100  100  100  100  100 FS",
        "680 213  W  100  183  150  100  100  100  100  100 FS",
        "680 571  E  350  112  111  255  255  441  573  005 FS",
        "680 573  H  145  112  111  255  255  575  573  003 FS",
        "680 575  H  057  112  111  255  255  551  573  001 FS",
        "680 553  I  090  119  001  001  001  001  001  001 FS",
        "680 555  I  090  119  001  001  001  001  001  003 FS",
        "680 511  W  100  086  086  150  100  086  086  100 FS",
        "680 651, 090 652 005 005 005 002 002 000 FS",
        "680 662 k 000 665 000 000 000 000 001 002 FS",
        "680 665 K 600 600 600 600 600 600 600 600 FS",
        "680 648  ; 649  640  000  000  000  000  000  000 FS",
        "680 649 / 090  182  183  656  000  000  000  000 FS",
        "680 656  Z  640  640  002  002  002  002  640  000 FS",
        "680 672  I  090  112  001  000  001  001  129  673 FS",
        "680 673  Z  000  000  000  000  000  000  001  000 FS",
        "680 270 I 090 119 001 001 001 001 129 271 FS",
        "680 271 Z 003 000 000 000 000 000 001 000 FS",
        "680 274 / 090 192 193 275 000 000 000 000 FS",
        "680 275 Z 276 090 002 002 002 002 002 000 FS",
        "680 276 ? 277 001 002 030 040 000 000 000 FS",
        "680 277 I 090 119 001 001 001 001 129 278 FS",
        "680 278 Z 003 000 000 000 000 000 001 000 FS",
        "680 171 X 032 112 111 211 172 032 255 000 FS",
        "680 172 Z 010 050 100 000 250 070 030 005 FS",
        "680 211 W 085 085 085 160 085 085 085 085 FS",
        "680 241; 242 090 000 000 000 000 000 000 FS ",
        "680 242 / 090 192 193 243 000 000 000 000 FS",
        "680 243 Z 244 090 002 002 002 002 002 000 FS",
        "680 244 ? 246 001 001 030 040 000 000 000 FS",
        "680 245 D 241 099 000 004 000 000 000 000 FS",
        "680 246 I 090 119 001 001 001 001 129 247 FS",
        "680 247 Z 003 000 000 000 000 000 001 000 FS",
        "680 410; 411 090 000 000 000 000 000 000 FS ",
        "680 411 / 090 192 193 412 000 000 000 000 FS",
        "680 412 Z 413 090 002 002 002 002 002 000 FS",
        "680 413 ? 414 001 012 030 040 000 000 000 FS",
        "680 414 I 090 119 001 001 001 001 129 415 FS",
        "680 415 Z 003 000 000 000 000 000 001 000 FS",
        "680 310; 311 202 000 000 000 000 000 000 FS ",
        "680 311 / 090 192 193 312 000 000 000 000 FS",
        "680 312 Z 313 202 002 002 002 002 002 000 FS",
        "680 313 ? 314 001 003 030 040 000 000 000 FS",
        "680 314 I 090 119 001 001 001 001 129 317 FS",
        "680 317 Z 003 000 000 048 000 000 001 000 FS",
        "680 444; 445 448 000 000 000 000 000 000 FS ",
        "680 445 / 090 182 183 446 000 000 000 000 FS",
        "680 446 Z 447 448 002 002 002 002 448 000 FS",
        "680 447 ? 448 001 008 030 030 000 000 000 FS",
        "680 448 I 090 112 001 001 001 001 129 449 FS",
        "680 449 Z 003 000 000 000 000 000 001 000 FS",
        "680 450; 451 454 000 000 000 000 000 000 FS ",
        "680 451 / 090 182 183 452 000 000 000 000 FS",
        "680 452 Z 453 454 002 002 002 002 454 000 FS",
        "680 453 ? 454 001 007 030 030 000 000 000 FS",
        "680 454 I 090 112 001 001 001 001 129 455 FS",
        "680 455 Z 003 000 000 000 000 000 001 000 FS",
        "680 330; 331 334 000 000 000 000 000 000 FS ",
        "680 331 / 090 182 183 332 000 000 000 000 FS",
        "680 332 Z 333 334 002 002 002 002 334 000 FS",
        "680 333 ? 334 001 008 030 030 000 000 000 FS",
        "680 334 I 090 112 001 001 001 001 129 335 FS",
        "680 335 Z 003 000 000 000 000 000 001 000 FS",
        "680 340; 341 344 000 000 000 000 000 000 FS ",
        "680 341 / 090 182 183 342 000 000 000 000 FS",
        "680 342 Z 343 344 002 002 002 002 344 000 FS",
        "680 343 ? 344 001 006 030 030 000 000 000 FS",
        "680 344 I 090 112 001 001 001 001 129 345 FS",
        "680 345 Z 003 000 000 000 000 000 001 000 FS",
        "680 360; 361 364 000 000 000 000 000 000 FS ",
        "680 361 / 090 182 183 362 000 000 000 000 FS",
        "680 362 Z 363 364 002 002 002 002 364 000 FS",
        "680 363 ? 364 001 011 030 030 000 000 000 FS",
        "680 364 I 090 112 001 001 001 001 129 365 FS",
        "680 365 Z 003 000 000 000 000 000 001 000 FS",
        "680 374; 375 060 000 000 000 000 000 000 FS ",
        "680 375 / 060 182 183 376 000 000 000 000 FS",
        "680 376 Z 060 060 002 002 002 002 060 000 FS",
        "680 139 D 360 223 032 000 000 000 000 000 FS",
        "680 146 D 444 223 032 000 000 000 000 000 FS",
        "680 149 D 330 223 032 000 000 000 000 000 FS",
        "680 366 X 403 112 111 367 368 032 255 000 FS",
        "680 367 W 369 369 675 674 369 369 369 369 FS",
        "680 368 Z 050 100 000 000 040 030 020 010 FS",
        "680 378  W  255  255  255  371  371  255  255  255 FS",
        "680 382  W  255  255  255  671  671  255  255  255 FS",
        "680 380  D  671  223  000  000  032  032  000  000 FS",
        "680 383  E  383  112  111  255  255  384  640  005 FS",
        "680 384  D  371  223  032  000  000  000  000  000 FS",
        "680 385  E  383  112  111  255  183  386  640  005 FS",
        "680 386  D  671  223  032  000  000  000  000  000 FS",
        "680 372 I 090 119 001 001 001 001 129 373 FS",
        "680 373 Z 003 000 000 000 000 000 001 000 FS",
        "680 356  Z  000  016  000  008  000  000  000  000 FS",
        "680 687  W  100  183  100  100  100  100  100  100 FS",
        "680 153; 157  640  000  000  000  000  000  000 FS",
        "680 157 / 090  182  183  158  000  000  000  000 FS",
        "680 158  Z  640  640  002  002  002  002  640  000 FS",
        "680 165  Z  000  004  016  008  000  000  000  000 FS",
        "680 682  Y  346  112  111  683  255  002  024  255 FS",
        "680 683  W  100  100  100  648  100  100  100  100 FS",
        "680 176   Y  050 112  111  187  255  002  012  255 FS",
        "680 187   W  100 100  675  100  100  100  100  100 FS",
        "680 181 Y 405 112 111 182 255 002 028 255 FS",
        "680 182 W 255 255 183 150 150 255 255 255 FS",
        "680 577 Y 411 112 111 578 255 007 012 255 FS",
        "680 578 W 255 255 572 100 255 255 255 255 FS",
        "680 601; 602 090 000 000 000 000 000 000 FS ",
        "680 602 / 090 192 193 603 000 000 000 000 FS",
        "680 603 Z 604 090 002 002 002 002 002 000 FS",
        "680 604 ? 192 001 012 030 040 000 000 000 FS",
        "680 630 Z 003 000 000 000 000 000 001 000 FS",
        "680 611; 612 090 000 000 000 000 000 000 FS ",
        "680 612 / 090 192 193 613 000 000 000 000 FS",
        "680 613 Z 614 090 002 002 002 002 002 000 FS",
        "680 614 ? 631 001 012 030 040 000 000 000 FS",
        "680 632 Z 003 000 000 000 000 000 001 000 FS",
    ]
} else {
    var DataObj = JSON.parse(localStorage.getItem("FileParsedData"));
}

var SanitizedObj = [];
for (var x = 0; x < DataObj.length; x++) {
    var TempHolder = DataObj[x].replace(/\ /g, '');
    SanitizedObj.push(TempHolder.replace("FS", ""));
}

//console.log(SanitizedObj.length);

for (var y = 0; y < SanitizedObj.length; y++) {
    states.addStateString(SanitizedObj[y]);
}

const options = {
    edges: {
        smooth: {
            type: 'continuous',
            forceDirection: 'horizontal',
            roundness: 0.5,
        }
    },
    layout: {
        improvedLayout: false,
        clusterThreshold: 50,
        hierarchical: {
            enabled: true,
            levelSeparation: 200,
            nodeSpacing: 200,
            treeSpacing: 200,
            blockShifting: false,
            edgeMinimization: true,
            parentCentralization: true,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'hubsize',  // hubsize, directed
            shakeTowards: 'roots'  // roots, leaves
        }
    },
    physics: {
        barnesHut: {
            springConstant: 0,
            avoidOverlap: 0.2
        }
    } ,
    groups: {
        useDefaultGroups: true,
    },
    interaction: {
        dragNodes: false,
        dragView: true,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: false,
        hideNodesOnDrag: false,
        hover: true,
        hoverConnectedEdges: true,
        keyboard: {
            enabled: false,
            speed: { x: 10, y: 10, zoom: 0.02 },
            bindToWindow: true,
            autoFocus: true,
        },
        multiselect: false,
        navigationButtons: true,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 300,
        zoomSpeed: 3,
        zoomView: true
    },

};

let nodes = new vis.DataSet(states.getNodes());

nodes.forEach(node => {
    node['size'] = 160;

    switch (node.label[4]) {
        case 'J':
            node['color'] = '#EF9A9A';
            break;

        case 'I':
            node['color'] = '#A5D6A7';
            break;

        default:
            node['color'] = '#EEEEEE';
    }

    node['shape'] = 'box';
    node['font'] = { 'size': '40', 'face': 'monospace', 'align': 'center' };
    node['heightConstraint'] = { minimum: 130 };
    node['widthConstraint'] = { minimum: 130 };
    node['choosen'] = "true";
});

let edges = new vis.DataSet(states.getEdges());
edges.forEach(edge => {
    edge['arrows'] = 'to';
    edge['physics'] = false;
    edge['smooth'] = { 'type': 'cubicBezier' };
});

let container = document.getElementById('mynetwork');
let data = { 'nodes': nodes, 'edges': edges };
let graph = new vis.Network(container, data, options);

function BuildNewConnectionIDs() {

    var NodesList = nodes.get();

    $("#edge-id").html("");
    $("#edge-id").append(`<option value="-1" disabled selected>Select an option</option>`)

    for (var x = 0; x < NodesList.length; x++) {
        $("#edge-id").append(`<option value="${NodesList[x].id}">${NodesList[x].label}</option>`)
    }
}

// Add a new node
function addNode() {
    try {
        nodes.add({
            id: document.getElementById("node-id").value,
            label: document.getElementById("node-label").value,
        });

        //document.getElementById("node-id").value = nodes.get().length + 1;
        BuildNewConnectionIDs();
    } catch (err) {
        alert(err);
    }
}

// Update a node
function updateNode() {
    try {
        nodes.update({
            id: document.getElementById("node-id").value,
            label: document.getElementById("node-label").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Remove a node
function removeNode() {
    try {
        //nodes.remove({ id: Number(document.getElementById("node-id").value) });
        nodes.remove(document.getElementById("node-id").value);
    } catch (err) {
        alert(err);
    }
}

// Add an edge
function addEdge() {
    try {
        edges.add({
            id: document.getElementById("edge-id").value,
            from: document.getElementById("edge-from").value,
            to: document.getElementById("edge-to").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Update an edge
function updateEdge() {
    try {
        edges.update({
            id: document.getElementById("edge-id").value,
            from: document.getElementById("edge-from").value,
            to: document.getElementById("edge-to").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Remove an edge
function removeEdge() {
    try {
        edges.remove({ id: document.getElementById("edge-id").value });
    } catch (err) {
        alert(err);
    }
}

function OnPageLoadTriggerBaseNode(nodeid) {

    $("#selectedNodeDetails p .selectedStateDetailsInput").addClass("disabled").removeClass("editable").prop("disabled", true);
    $("#selectedNode #saveEditBtn").hide();

    var node = graph.body.nodes[nodeid];

    $(".edit-node-icon").parent().attr("data-node-id", nodeid);
    $(".delete-node-icon").parent().attr("data-node-id", nodeid);

    if (states.getNodes().length > 150) {
        graph.focus(nodeid, { animation: false, scale: 0.4 });
    } else {
        graph.focus(nodeid, { animation: true, scale: 0.4 });
    }

    //graph.focus(nodeid, { animation: true, scale: 0.4 });
    
    graph.selectNodes([nodeid]);

    $("#selectedNodeDetails").html("");

    for (const [key, value] of states.states[nodeid].entries()) {

        if (key == "screen_number") {
            $("#selectedNodeDetails").append(`
                <p id="${value}">View Screen > <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /> <span data-id="${value}" title="View Full Screen Image" class="view-screen material-symbols-outlined"> search </span></p>
            `)
        } else if (key == "states_to") {
            for (const [key, values] of value.entries()) {

                //$("#selectedNodeDetails").append(`
                //    <p id="${value}">Next State: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${values}" /><span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span></p>
                    
                //`)
                $("#selectedNodeDetails #" + values).append(`<span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span>`)
            }
        } else {

            $("#selectedNodeDetails").append(`
                <p id="${value}">${key.replace(/_/g, ' ')}: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /></p>
            `)
        }

    }

    $("#selectedNode").fadeIn(50);

    node.setOptions({
        font: {
            background: "#1E88E5",
            color: "#fff",
        },
    });

    $(".jump-to-state").off("click");
    $(".jump-to-state").on("click", function () {
        OnPageLoadTriggerBaseNode($(this).attr('data-id'));
    })

    $(".view-screen").on("click", function () {

        var ImageID = $(this).data('id');

        $.ajax({
            url: window.location.href + 'img/screens/pic' + $(this).data('id') + ".jpg",
            processData: false,
            success: function () {
                $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/pic' + ImageID + ".jpg");
            },
            error: function (r, x) {
                $("#IMAGE_ID").attr("src", window.location.href + "img/screens/no-image.png");
            }
        });


        $('#EnlargeImageView').modal('show');
    })

}

$(document).ready(function () {

    graph.on("selectNode", function (params) {

        $("#selectedNodeDetails p .selectedStateDetailsInput").addClass("disabled").removeClass("editable").prop("disabled", true);
        $("#selectedNode #saveEditBtn").hide();

        var selectedNodeId = params.nodes[0];
        var node = graph.body.nodes[selectedNodeId];

        $(".edit-node-icon").parent().attr("data-node-id", selectedNodeId);
        $(".delete-node-icon").parent().attr("data-node-id", selectedNodeId);

        $("#selectedNodeDetails").html("");

        for (const [key, value] of states.states[selectedNodeId].entries()) {

            if (key == "screen_number") {
                $("#selectedNodeDetails").append(`
                <p id="${value}">View Screen > <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /> <span data-id="${value}" title="View Full Screen Image" class="view-screen material-symbols-outlined"> search </span></p>
            `)
            } else if (key == "states_to") {
                for (const [key, values] of value.entries()) {

                    //$("#selectedNodeDetails").append(`
                    //    <p>Next State: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${values}" /><span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span></p>
                    
                    //`)

                    $("#selectedNodeDetails #" + values).append(`<span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span>`)
                }
            } else {
                $("#selectedNodeDetails").append(`
                <p id="${value}">${key.replace(/_/g, ' ')}: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /></p>
            `)
            }

        }

        var AllInputs = $("#selectedNodeDetails input");

        $('.enlarged-image-wrapper div').text("");

        for (var x = 1; x < AllInputs.length - 1; x++) {
            if ($(AllInputs[x]).parent().text().includes("FDK A")) {
                $('.enlarged-image-wrapper .btnA').text("A: " + $(AllInputs[x]).parent().attr("id"));
            }
            if ($(AllInputs[x]).parent().text().includes("FDK B")) {
                $('.enlarged-image-wrapper .btnB').text("B: " + $(AllInputs[x]).parent().attr("id"));
            }
            if ($(AllInputs[x]).parent().text().includes("FDK C")) {
                $('.enlarged-image-wrapper .btnC').text("C: " + $(AllInputs[x]).parent().attr("id"));
            }
            if ($(AllInputs[x]).parent().text().includes("FDK D")) {
                $('.enlarged-image-wrapper .btnD').text("D: " + $(AllInputs[x]).parent().attr("id"));
            }
        }

        $("#selectedNode").fadeIn(50);

        node.setOptions({
            font: {
                background: "#1E88E5",
                color: "#fff",
            },
        });

        $(".jump-to-state").off("click");
        $(".jump-to-state").on("click", function () {
            OnPageLoadTriggerBaseNode($(this).attr('data-id'));
        })

        $(".view-screen").on("click", function () {

            var ImageID = $(this).data('id');

            $.ajax({
                url: window.location.href + 'img/screens/pic' + $(this).data('id') + ".jpg",
                processData: false,
                success: function () {
                    $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/pic' + ImageID + ".jpg");

                },
                error: function (error) {
                    $("#IMAGE_ID").attr("src", window.location.href + "img/screens/no-image.png");
                }
            });


            $('#EnlargeImageView').modal('show');
        })

    });

    graph.on("deselectNode", function (params) {

        $("#selectedNodeDetails p .selectedStateDetailsInput").addClass("disabled").removeClass("editable").prop("disabled", true);
        $("#selectedNode #saveEditBtn").hide();

        $(".custom-menu").hide();

        var deselectedNodeId = params.previousSelection.nodes[0];
        var node = graph.body.nodes[deselectedNodeId];

        deselectedNodeId.setOptions({
            font: {
                background: nodes.background,
                color: nodes.color
            }
        });

        $(".jump-to-state").off("click");
        $(".jump-to-state").on("click", function () {
            OnPageLoadTriggerBaseNode($(this).text());
        })

    });

    graph.on("oncontext", function (params) {

        params.event.preventDefault();
        $(".custom-menu").toggle();
        $(".custom-menu").css({
            top: params.event.pageY + "px",
            left: params.event.pageX + "px"
        });

    });

    $("#node-add").on("click", function () {
        addNode();
    })

    $(".close-node-details").on("click", function () {
        $("#selectedNode").fadeOut(50);
    })

    $(".add-new-state-wrapper").on("click", function () {

        $("#AddStateTypeDDL").html("");
        $("#AddStateTypeDDL").append(`<option value="-1">Please select state type</option>`);

        for (var x = 0; x < TransactionTypes.length; x++) {
            $("#AddStateTypeDDL").append(`<option value="${TransactionTypes[x].Value}">${TransactionTypes[x].Value} - ${TransactionTypes[x].Text}</option>`);
        }

        $("#AddStateTypeDDL").on("change", function () {

            $(".OctatesHolder").html("");

            for (var x = 0; x < TransactionTypes.length; x++) {
                if (TransactionTypes[x].Value == $(this).val()) {
                    for (var key in TransactionTypes[x].Octates[0]) {
                        $(".OctatesHolder").append(`<div class="col-6 mt-3">
                                <label class="field-label">${TransactionTypes[x].Octates[0][key]}</label>
                                <input class="form-control" value="" placeholder="000" type="text" maxlength="3" />
                            </div>`)
                    }
                }
            }

        })

        $(".final-add-state").on("click", function () {

            var TempVar = "";
            var StateNumber = $("#AddNewStateModal .form-control").first().val();
            var StateType = $("#AddNewStateModal select option:selected").val();

            $("#AddNewStateModal .form-control").each(function () {
                $("#AddNewStateModal .form-control").each(function () {
                    TempVar += $(this).val();
                })
            })

            states.addStateString(TempVar);

            nodes.add({
                id: StateNumber,
                label: StateNumber + " " + StateType,
                level: 4,
                shape: 'box',
                font: { 'size': '40', 'face': 'monospace', 'align': 'center' },
                heightConstraint: { minimum: 130 },
                widthConstraint: { minimum: 130 },
                choosen: "true"
            });

            var Edges = states.get(StateNumber);

            //console.log(Edges);

            for (const [key, value] of Edges.entries()) {
                if (key == "states_to") {
                    for (const [key2] of value.entries()) {

                        edges.add({
                            id: key2,
                            from: StateNumber,
                            to: key2,
                            arrows: 'to',
                            physics: false,
                            smooth: { 'type': 'cubicBezier' }
                        });
                    }
                }
            }

            $("#selectedNode").fadeOut(50);

            OnPageLoadTriggerBaseNode(StateNumber);

            $('#AddNewStateModal').modal('hide');

        })

        $('#AddNewStateModal').modal('show');
    })

    $("#exportBtn").on("click", function () {

        //console.log(states.states);

        $("#exportBtn .material-symbols-outlined").addClass('active');

        RawExportedKeys = [];

        for (var key in states.states) {
            if (states.states[key] == undefined || states.states[key] == "undefined") {

            } else {
                RawExportedKeys.push(key);
            }
        }

        RawExportedData = [];

        for (var x = 0; x < RawExportedKeys.sort().length; x++) {
            RawExportedData.push(states.states[RawExportedKeys.sort()[x]]);
        }

        $(".exported-file-data-wrapper").html("");

        for (var z = 0; z < RawExportedData.length; z++) {

            for (let value of RawExportedData[z]) {

                if (value[0] == "level") {
                    $(".exported-file-data-wrapper").append("FS<div class='spacer'></div>");
                } else if (value[0] == "states_to" || value[0] == "description") {

                } else {
                    $(".exported-file-data-wrapper").append(`<span>${value[1]} </span>`);
                }

            }

        }

        setTimeout(function () {
            $("#exportBtn .material-symbols-outlined").removeClass('active');
            $('#ExportedFileDataPreview').modal('show');
        }, 1000)

    })   

    $("#saveEditBtn").on("click", function () {

        var TempVar = "";

        var AllInputs = $("#selectedNodeDetails input");

        for (var x = 1; x < AllInputs.length - 1; x++) {
            TempVar += AllInputs[x].value
        }

        if (AllInputs[1].value == "000") {
            alert("Cannot edit base node");
            return;
        } else {

            if (confirm('Are you sure you want to edit this node?')) {

                states.delete(AllInputs[1].value)
                graph.body.data.nodes.remove(AllInputs[1].value);

                states.addStateString(TempVar);

                nodes.add({
                    id: AllInputs[1].value,
                    label: AllInputs[1].value + " " + AllInputs[2].value,
                    level: 4,
                    shape: 'box',
                    font: { 'size': '40', 'face': 'monospace', 'align': 'center' },
                    heightConstraint: { minimum: 130 },
                    widthConstraint: { minimum: 130 },
                    choosen: "true"
                });

                var Edges = states.get(AllInputs[1].value);

                for (const [key, value] of Edges.entries()) {
                    if (key == "states_to") {
                        for (const [key2] of value.entries()) {

                            edges.add({
                                id: key2,
                                from: AllInputs[1].value,
                                to: key2,
                                arrows: 'to',
                                physics: false,
                                smooth: { 'type': 'cubicBezier' }
                            });
                        }
                    }
                }

                $("#selectedNodeDetails p .selectedStateDetailsInput").addClass("disabled").removeClass("editable").prop("disabled", true);
                $("#selectedNode #saveEditBtn").hide();
                $("#selectedNode").fadeOut(50);

                OnPageLoadTriggerBaseNode(AllInputs[1].value);

            } else {
                return false;
            }

        }

    })

    $('.file-upload-btn').on("click", function () {
        $("#formFile").trigger("click");
    })

    $("#formFile").on("change", function () {
        var file = document.getElementById('formFile').files[0];
        $(".progress").removeClass("invisible");

        reader.loadFile(file)
            .progress(function (progress) {

                $(".progress .progress-text").text("Loading Data: " + progress + "%");
                $(".progress .progress-bar").css("width", progress + "%");
                //console.log('Loading file progress: ' + progress + '%');

            })
            .then(function (linesCount) {
                //console.log('Loading file completed in ' + response.timeTaken + 'ms, total lines: ' + response.result.lineCount);

                reader.getLines(1, linesCount)
                    .progress(function (progress) {

                        //console.log('Getting lines progress: ' + progress + '%');
                        $(".progress .progress-text").text("Reading Data: " + progress + '%');
                        $(".progress .progress-bar").css("width", progress + "%");

                    })
                    .then(function (response) {

                        data = response.result;
                        var TempFileParsedArray = [];

                        setTimeout(function () {
                            $(".progress .progress-text").html("<span class='material-symbols-outlined'>settings</span>Rendering Nodes");

                            for (var x = 0; x < data.length; x++) {
                                if (!data[x].includes("STATES") && !data[x].includes("{") && data[x] != "" && data[x] != " ") {
                                    console.log($.trim(data[x]));
                                    TempFileParsedArray.push($.trim(data[x]));
                                }
                            }

                            setTimeout(function () {
                                //console.log(response.result);
                                //$("#FileUploadArea").hide();
                                //$("#NetWorkAreaWrapper").fadeIn();

                                localStorage.setItem("FileParsedData", JSON.stringify(TempFileParsedArray));
                                location.reload();

                                OnPageLoadTriggerBaseNode("000");
                            }, 500)

                        }, 500)

                    })
                    .catch(function (reason) {
                        console.log('Getting lines failed with error: ' + reason);
                    });

            })
            .catch(function (reason) {
                console.log('Loading file failed with error: ' + reason);
            });

    })

    setTimeout(function () {

        if (JSON.parse(localStorage.getItem("FileParsedData")) == null) {
        } else {
            $("#FileUploadArea").hide();
            $("#NetWorkAreaWrapper").fadeIn();
            $('.splash-wrapper').fadeOut(350);
            localStorage.clear();
        }

        $('.splash-wrapper').fadeOut(350);

        OnPageLoadTriggerBaseNode("000");

        $("#EditNode").on("click", function () {
            $("#selectedNodeDetails p .selectedStateDetailsInput").removeClass("disabled").addClass("editable").prop("disabled", false);
            $("#selectedNode #saveEditBtn").show();
            //console.log($(this).attr('data-node-id'));
        })

        $("#DeleteNode").on("click", function () {

            var NodeID = $(this).attr('data-node-id');

            if (confirm('Are you sure you want to delete this node?')) {
                states.delete(NodeID)
                graph.body.data.nodes.remove(NodeID);
                $("#selectedNode").fadeOut(50);

            } else {
                return false;
            }

        })

        // Detect Enter Key on Jump State Field
        $('#search-node').keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                OnPageLoadTriggerBaseNode($(event.target).val());
            }
        });

    }, 1000)

})