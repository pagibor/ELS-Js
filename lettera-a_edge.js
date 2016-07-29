/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
    var im='js/letters/a/images/';

    var fonts = {};
    var opts = {};
    var resources = [
    ];
    var symbols = {
        "stage": {
            version: "3.0.0",
            minimumCompatibleVersion: "3.0.0",
            build: "3.0.0.322",
            baseState: "Base State",
            scaleToFit: "none",
            centerStage: "none",
            initialState: "Base State",
            gpuAccelerate: false,
            resizeInstances: false,
            content: {
                dom: [
                    {
                        id: 'body-a2',
                        type: 'rect',
                        rect: ['0', '0','auto','auto','auto', 'auto']
                    }],
                symbolInstances: [
                    {
                        id: 'body-a2',
                        symbolName: 'body-a'
                    }
                ]
            },
            states: {
                "Base State": {
                    "${_Stage}": [
                        ["color", "background-color", 'rgba(255,255,255,1)'],
                        ["style", "width", '475px'],
                        ["style", "height", '450px'],
                        ["style", "overflow", 'hidden']
                    ],
                    "${_body-a2}": [
                        ["style", "top", '0px'],
                        ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                        ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                        ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                        ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                        ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
                    ]
                }
            },
            timelines: {
                "Default Timeline": {
                    fromState: "Base State",
                    toState: "",
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "playHere": 3079
                    },
                    timeline: [
                        { id: "eid39", tween: [ "style", "${_body-a2}", "top", '12px', { fromValue: '0px'}], position: 3000, duration: 500 },
                        { id: "eid40", tween: [ "style", "${_body-a2}", "top", '0px', { fromValue: '12px'}], position: 3500, duration: 500 },
                        { id: "eid41", tween: [ "style", "${_body-a2}", "top", '-12px', { fromValue: '0px'}], position: 4000, duration: 500 },
                        { id: "eid42", tween: [ "style", "${_body-a2}", "top", '0px', { fromValue: '-12px'}], position: 4500, duration: 500 }            ]
                }
            }
        },
        "body-a": {
            version: "3.0.0",
            minimumCompatibleVersion: "3.0.0",
            build: "3.0.0.322",
            baseState: "Base State",
            scaleToFit: "none",
            centerStage: "none",
            initialState: "Base State",
            gpuAccelerate: false,
            resizeInstances: false,
            content: {
                dom: [
                    {
                        id: 'body-a',
                        type: 'image',
                        rect: ['1px', '-1px', '475px', '452px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', im + 'body-a.png', '0px', '0px']
                    },
                    {
                        rect: ['226px', '82px', '180px', '252px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 246, 'rgba(255,255,255,1.00)', '100', 'none', 'normal'],
                        id: 'Text',
                        text: 'A',
                        align: 'center',
                        type: 'text'
                    }
                ],
                symbolInstances: [
                ]
            },
            states: {
                "Base State": {
                    "${_body-a}": [
                        ["style", "top", '-1px'],
                        ["transform", "scaleY", '0'],
                        ["transform", "rotateZ", '0deg'],
                        ["style", "height", '452px'],
                        ["transform", "scaleX", '0'],
                        ["style", "left", '1px'],
                        ["style", "width", '475px']
                    ],
                    "${_Text}": [
                        ["transform", "rotateZ", '0deg'],
                        ["color", "color", 'rgba(255,255,255,1.00)'],
                        ["style", "font-weight", '100'],
                        ["style", "left", '233px'],
                        ["style", "font-size", '246px'],
                        ["style", "top", '82px'],
                        ["style", "opacity", '0'],
                        ["style", "text-align", 'center'],
                        ["transform", "scaleY", '0'],
                        ["style", "height", '252px'],
                        ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                        ["transform", "scaleX", '0'],
                        ["style", "font-style", 'normal']
                    ],
                    "${symbolSelector}": [
                        ["style", "height", '0px'],
                        ["style", "width", '0px']
                    ]
                }
            },
            timelines: {
                "Default Timeline": {
                    fromState: "Base State",
                    toState: "",
                    duration: 2750,
                    autoPlay: true,
                    timeline: [
                        { id: "eid17", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                        { id: "eid26", tween: [ "style", "${_Text}", "left", '233px', { fromValue: '233px'}], position: 2750, duration: 0 },
                        { id: "eid9", tween: [ "transform", "${_body-a}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                        { id: "eid25", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                        { id: "eid16", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                        { id: "eid12", tween: [ "transform", "${_body-a}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 1250, duration: 120 },
                        { id: "eid13", tween: [ "transform", "${_body-a}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 1370, duration: 263 },
                        { id: "eid15", tween: [ "transform", "${_body-a}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 1633, duration: 117 },
                        { id: "eid8", tween: [ "transform", "${_body-a}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000 }            ]
                }
            }
        }
    };


    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

    /**
     * Adobe Edge DOM Ready Event Handler
     */
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "Alfabetiere-A");
