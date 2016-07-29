/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='js/letters/a2/images/';

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
                symbolName: 'body-a',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '450px'],
                ["style", "width", '475px']
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
                    id: 'body-a23',
                    type: 'image',
                    rect: ['1px', '0px', '475px', '450px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', im + 'body-a2.png', '0px', '0px']
                },
                {
                    rect: ['233px', '84px', '180px', '252px', 'auto', 'auto'],
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
            "${_body-a23}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "left", '1px'],
                ["style", "top", '-5px']
            ],
            "${_Text}": [
                ["style", "width", '180px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '149px'],
                ["style", "font-size", '246px'],
                ["style", "top", '95px'],
                ["style", "font-style", 'normal'],
                ["style", "text-align", 'center'],
                ["transform", "scaleX", '0'],
                ["style", "height", '269px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["transform", "scaleY", '0'],
                ["style", "opacity", '0']
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
                { id: "eid68", tween: [ "style", "${_Text}", "height", '269px', { fromValue: '269px'}], position: 2750, duration: 0 },
                { id: "eid64", tween: [ "style", "${_body-a23}", "top", '-5px', { fromValue: '-5px'}], position: 1750, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text}", "top", '86px', { fromValue: '95px'}], position: 1750, duration: 1000 },
                { id: "eid65", tween: [ "style", "${_Text}", "left", '149px', { fromValue: '149px'}], position: 1750, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text}", "left", '149px', { fromValue: '149px'}], position: 2750, duration: 0 },
                { id: "eid52", tween: [ "transform", "${_body-a23}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "transform", "${_body-a23}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 1250, duration: 120 },
                { id: "eid56", tween: [ "transform", "${_body-a23}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 1370, duration: 263 },
                { id: "eid57", tween: [ "transform", "${_body-a23}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 1633, duration: 117 },
                { id: "eid17", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                { id: "eid63", tween: [ "style", "${_body-a23}", "left", '1px', { fromValue: '1px'}], position: 1750, duration: 0 },
                { id: "eid53", tween: [ "transform", "${_body-a23}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                { id: "eid16", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                { id: "eid54", tween: [ "transform", "${_body-a23}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "Alfabetiere-A2");
