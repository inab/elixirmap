function loadPIsCollaborationsChart() {

    zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';

    var myConfig = {
        type: 'chord',
        plotarea: {
            margin: "0px"
        },
        "options": {
            "angle-padding": 12,
            "color-type": "palette",
            "band-space": 10,
            "palette": [
                "#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
                "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5",
                "#39c0b3"
            ],
            "style": {
                "tooltip": {
                    "border-width": 2,
                    "border-color": "#900",
                    "background-color": "#fc0"
                },
                "chord": {
                    "tooltip": {
                        "text-chord": "Colaboraciones entre %text-source y %text-destination: %value-destination",
                        "text": "Artículos de %text: %value"
                    }
                }
            }
        },
        // Specify your chart type here. 
        series: [{
            values: [
                152,
                0,
                0,
                4,
                0,
                0,
                0,
                0,
                0,
                2
            ],
            "text": "Alfonso Valencia",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                69,
                0,
                2,
                3,
                0,
                0,
                0,
                0,
                1
            ],
            "text": "Arcadi Navarro",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                0,
                46,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "Ferran Sanz",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                4,
                2,
                0,
                48,
                0,
                0,
                0,
                1,
                0,
                2
            ],
            "text": "Ivo Gut",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                3,
                0,
                0,
                126,
                0,
                0,
                2,
                0,
                0
            ],
            "text": "Joaquin Dopazo",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                1,
                1,
                0
            ],
            "text": "Jose Maria Carazo",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                0,
                0,
                0,
                39,
                23,
                0,
                0
            ],
            "text": "Josep Ll. Gelpí",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                1,
                2,
                1,
                23,
                177,
                0,
                1
            ],
            "text": "Modesto Orozco",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                11,
                0
            ],
            "text": "Oswaldo Trelles",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }, {
            values: [
                2,
                1,
                0,
                2,
                0,
                0,
                0,
                1,
                0,
                79
            ],
            "text": "Roderic Guigo",
            "style": {
                "label": {
                    "color": "#ff0000"
                }
            }
        }]
    };

    zingchart.render({
        id: 'myChartPIsCol',
        data: myConfig,
        height: 800,
        width: "100%"
    });
};