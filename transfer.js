import LevelsService from "./levels.js";
import StatesService from "./main.js";

var states = new StatesService();
var levels = new LevelsService();
var RawExportedKeys = [];
var RawExportedData = [];
var TempArray = [];

var DataObj = [
    "000 A 073 000 065 255 255 118 255 000 FS",
    "001 S 002 002 002 002 002 002 002 000 FS",
    "002 E 002 005 005 002 006 006 006 000 FS",
    "003 B 003 014 015 000 005 004 008 003 FS",
    "004 E 000 000 000 000 000 000 000 000 FS",
    "005 J 000 000 008 000 000 000 000 000 FS",
    "006 K 070 078 078 078 255 255 255 255 FS",
    "007 K 009 009 009 009 009 009 009 009 FS",
    "008 Y 005 005 005 081 255 001 063 000 FS",
    "009 D 008 255 000 000 000 000 000 000 FS",
    "010 E 006 005 005 255 255 023 023 006 FS",
    "011 D 010 024 000 008 000 000 000 000 FS",
    "012 I 007 005 001 002 001 000 000 000 FS",
    "013 D 023 006 008 016 016 032 000 000 FS",
    "014 J 073 000 012 012 012 000 000 000 FS",
    "015 J 013 000 013 013 013 000 000 000 FS",
    "016 D 020 000 008 000 000 016 000 000 FS",
    "017 D 010 000 042 000 000 000 000 028 FS",
    "018 D 026 000 000 000 000 008 000 000 FS",
    "019 E 014 014 015 255 255 255 255 000 FS",
    "020 E 006 014 015 255 255 021 021 006 FS",
    "021 F 015 014 015 255 255 022 015 016 FS",
    "022 G 023 255 000 000 002 000 001 000 FS",
    "023 E 017 014 015 255 255 025 025 004 FS",
    "024 D 025 239 000 000 016 000 000 000 FS",
    "025 I 007 014 001 002 001 001 001 000 FS",
    "026 b 014 014 015 025 005 018 019 101 FS",
    "027 D 025 000 008 000 000 096 000 000 FS",
    "028 Z 000 000 000 000 000 000 000 000 FS",
    "029 E 023 014 015 255 255 021 021 005 FS",
    "030 D 031 000 000 000 008 016 000 000 FS",
    "031 > 008 002 000 000 032 033 034 035 FS",
    "032 Z 154 155 156 157 158 159 160 161 FS",
    "033 Z 038 015 061 062 061 000 000 000 FS",
    "034 Z FFF FFF 07F 000 000 000 000 000 FS",
    "035 Z 000 000 000 000 000 000 000 000 FS",
    "036 Z 155 001 090 524 000 000 000 000 FS",
    "037 > 255 255 255 255 000 000 000 000 FS",
    "038 I 007 014 001 000 001 000 000 001 FS",
    "050 H 150 051 015 255 255 053 050 003 FS",
    "052 I 007 051 000 000 001 000 000 001 FS",
    "053 D 052 000 001 002 064 128 000 000 FS",
    "054 E 069 014 015 255 255 224 015 000 FS",
    "055 > 000 000 000 000 000 000 000 000 FS",
    "061 J 157 000 081 081 081 000 000 064 FS",
    "062 J 071 000 071 000 000 000 000 000 FS",
    "063 Z 000 000 064 000 000 000 000 000 FS",
    "064 Z 000 000 000 000 000 000 000 000 FS",
    "065 J 071 000 071 000 000 000 000 000 FS",
    "066 H 066 014 065 255 255 116 230 003 FS",
    "067 J 072 072 072 072 072 072 072 072 FS",
    "068 H 067 014 065 255 255 221 065 001 FS",
    "069 H 068 014 065 255 255 223 065 003 FS",
    "070 B 003 014 015 000 005 004 071 003 FS",
    "071 E 050 014 015 072 073 077 255 007 FS",
    "072 E 051 014 015 075 075 075 075 000 FS",
    "073 E 051 014 015 077 077 077 077 007 FS",
    "075 Y 052 014 015 076 255 000 015 000 FS",
    "076 H 053 014 015 255 255 077 076 043 FS",
    "077 I 007 014 001 000 001 001 001 001 FS",
    "078 Y 060 005 005 095 255 007 007 091 FS",
    "080 B 003 014 015 000 005 004 085 003 FS",
    "081 W 092 097 010 026 093 090 255 255 FS",
    "083 B 003 014 015 000 000 004 086 003 FS",
    "084 B 003 014 015 000 005 004 085 003 FS",
    "085 E 061 005 005 016 011 030 255 000 FS",
    "086 E 062 005 005 016 102 011 017 000 FS",
    "090 X 063 005 005 023 103 032 255 000 FS",
    "091 Z 000 300 600 000 000 000 000 000 FS",
    "092 D 020 255 002 000 000 000 000 000 FS",
    "093 H 064 000 000 093 015 094 255 101 FS",
    "094 F 065 014 015 255 255 099 015 016 FS",
    "095 K 070 003 080 083 000 000 000 000 FS",
    "096 Z 003 002 004 000 000 000 000 000 FS",
    "097 D 010 255 000 002 000 000 000 000 FS",
    "098 D 025 239 000 000 000 016 000 000 FS",
    "099 E 006 014 015 255 255 100 100 006 FS",
    "100 E 023 014 015 255 255 023 023 005 FS",
    "101 Z 002 001 000 000 000 000 000 000 FS",
    "102 G 090 255 000 000 002 000 002 000 FS",
    "103 Z 001 002 005 010 100 050 020 015 FS",
    "113 J 030 255 020 021 022 000 255 028 FS",
    "114 E 069 014 065 255 255 116 065 007 FS",
    "115 > 008 004 002 008 032 033 034 035 FS",
    "116 I 007 014 001 000 001 001 001 001 FS",
    "118 E 074 014 065 255 066 225 065 001 FS",
    "119 E 075 014 065 999 116 065 999 000 FS",
    "120 E 073 000 065 255 255 118 255 000 FS",
    "220 D 068 001 000 000 008 016 000 000 FS",
    "221 I 007 014 001 000 001 001 001 003 FS",
    "222 D 069 000 000 000 008 006 000 000 FS",
    "223 I 007 014 001 000 001 001 001 001 FS",
    "224 D 115 009 000 000 009 009 000 000 FS",
    "225 H 066 014 065 255 255 226 230 003 FS",
    "226 I 007 014 001 000 001 001 001 001 FS",
    "227 D 228 001 000 000 010 018 000 000 FS",
    "228 H 067 014 065 255 255 229 065 001 FS",
    "229 I 007 014 001 000 001 001 001 003 FS",
    "230 J 230 000 230 230 230 000 000 000 FS",
    "231 D 232 002 000 000 011 019 000 000 FS",
    "232 H 077 014 065 255 255 233 065 003 FS",
    "233 I 007 014 001 000 001 001 001 001 FS",
    "234 E 085 014 015 255 255 237 015 000 FS",
    "235 D 234 009 000 000 012 020 000 000 FS",
    "236 > 008 004 002 008 032 033 034 035 FS",
    "237 D 236 009 000 000 013 021 000 000 FS",
    "238 H 079 014 065 255 255 116 230 003 FS",
    "239 H 080 014 065 255 255 116 230 003 FS",
    "240 J 081 000 081 081 081 000 000 000 FS",
    "241 J 082 000 082 081 081 000 000 000 FS",
    "242 J 084 000 084 081 081 000 000 000 FS",
    "243 J 083 242 084 081 081 000 000 000 FS",
    "244 E 086 014 065 255 255 115 065 001 FS",
    "245 H 088 014 065 255 255 221 065 001 FS",
    "246 H 088 014 065 255 229 065 255 001 FS",
    "247 E 086 014 065 255 255 236 065 001 FS",
    "248 E 089 014 065 255 255 115 065 001 FS",
    "249 E 089 014 065 255 255 236 065 001 FS",
    "300 + 303 006 000 001 000 000 094 000 FS",
    "301 . 000 000 000 000 000 000 000 000 FS",
    "302 / 007 000 000 000 000 000 000 000 FS",
    "303 , 007 301 006 000 000 000 000 000 FS",
    "304 ? 000 000 000 000 000 000 000 000 FS"

]

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
        dragNodes: true,
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
                <p>View Screen > <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /> <span data-id="${value}" title="View Full Screen Image" class="view-screen material-symbols-outlined"> search </span></p>
            `)
        } else if (key == "states_to") {
            for (const [key, values] of value.entries()) {
                $("#selectedNodeDetails").append(`
                        <p>Next State: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${values}" /><span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span></p>
                    
                    `)
            }
        } else {
            $("#selectedNodeDetails").append(`
                <p>${key.replace(/_/g, ' ')}: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /></p>
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
            url: window.location.href + 'img/screens/PIC' + $(this).data('id') + ".jpg",
            processData: false,
            success: function () {
                $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/PIC' + ImageID + ".jpg");
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
                <p>View Screen > <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /> <span data-id="${value}" title="View Full Screen Image" class="view-screen material-symbols-outlined"> search </span></p>
            `)
            } else if (key == "states_to") {
                for (const [key, values] of value.entries()) {
                    $("#selectedNodeDetails").append(`
                        <p>Next State: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${values}" /><span data-id="${values}" title="Jump to Next State" class="jump-to-state material-symbols-outlined"> call_missed_outgoing </span></p>
                    
                    `)
                }
            } else {
                $("#selectedNodeDetails").append(`
                <p>${key.replace(/_/g, ' ')}: <input disabled class="disabled selectedStateDetailsInput" type="text" value="${value}" /></p>
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
                url: window.location.href + 'img/screens/' + $(this).data('id') + ".jpg",
                processData: false,
                success: function () {
                    $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/' + ImageID + ".jpg");
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

    setTimeout(function () {

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

//console.log(states.addState("136W100100155100100100100100"));

//states.parseState('000A870500128002002002001127');

// console.log(states.add(states.states));
// console.log(states.states);

//console.log(states.states);
// console.log(states.getNodes());
// console.log(states.getEdges());
// console.log(states.prepareStatesToSave());
//console.log(states.levels);