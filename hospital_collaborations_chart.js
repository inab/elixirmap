function loadHospitalCollaborationsChart() {

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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                1,
                4,
                2,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "Roderic Guigo",
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                4,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
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
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                5,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                23,
                0,
                0,
                0,
                1,
                0,
                0,
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                7,
                0,
                1,
                0,
                0,
                0
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "José María Carazo",
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
                0,
                0,
                0,
                0,
                0,
                10,
                0,
                1,
                4,
                0,
                2,
                0,
                0,
                0,
                0,
                1,
                1,
                1
            ],
            "text": "Joaquín Dopazo",
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                6,
                0,
                1,
                23,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "IMIM",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                1,
                2,
                10,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. Virgen del Rocío",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "VHRI",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. La Paz",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                4,
                1,
                4,
                5,
                1,
                1,
                0,
                0,
                4,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. Clinic",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. RyC",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. La Fe",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. Madrid",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                0,
                1,
                0,
                0,
                0,
                0,
                7,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. VdH",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }, {
            values: [
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. MdV",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. GTiP",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. JD",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "BCNatal",
            "style": {
                "label": {
                    "color": "#2353ce"
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
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "text": "H. SJD",
            "style": {
                "label": {
                    "color": "#2353ce"
                }
            }
        }]
    };

    zingchart.render({
        id: 'myChartColHosp',
        data: myConfig,
        height: 800,
        width: "100%"
    });
}