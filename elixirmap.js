	// Plot vars
	var articlesPerJournalChart;
	var articlesPerYearChart;
	var articlesPerTopicChart;

	let selectedTipoValue = "'%%'"

	let selectedAuthorValue = "'%%'"

	let selectedYearsArray = "2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018";
	let selectedJournalsArray = "Oxford Bioinformatics,BMC Bioinformatics,Nucleic Acids Research,BMC Genomics,PLoS Computational Biology";
	let selectedTopicsArray = "\'Computational Biology > Molecular genetics\', \'Software > Tools\', \'Computational Biology > Nucleic acids > DNA\', \'Computational Biology > Nucleic acids > RNA\', \'Computational Biology > Phylogeny\', \'Computational Biology > Sequence analysis\', \'Computational Biology > Molecular interactions, pathways and networks\', \'Computational Biology > Structure analysis\', \'Omics > Genomics > Functional genomics\', \'Omics > Genomics > Pharmacogenomics\', \'Proteomics\', \'Omics > Genomics > Transcriptomics\', \'Computational Biology > Sequence analysis > Mapping\'"
	//console.log(selectedTopicsArray);
	/* create an axios client to the SQL API */
	var API_KEY = '9d3d3e19781c35ce76c075e4cfe9d5caa1604ce9',
	    USER_NAME = 'carto-bsc',
	    SQL_CLIENT = axios.create({
	        method: 'get',
	        url: 'https://' + USER_NAME + '.carto.com/api/v2/sql?',
	        params: {
	            api_key: API_KEY
	        }
	    });


	function updatePerJournalPlot() {
	    // Articles per journal plot

	}

	function updatePerYearPlot() {
	    // Articles per year plot
	    var query = "SELECT year,COUNT(DISTINCT(title)) FROM articles_spa_elixir_v1 WHERE year IN (" + selectedYearsArray + ") AND authors LIKE (" + selectedAuthorValue + ") AND inb_grant LIKE (" + selectedTipoValue + ") GROUP BY year ORDER by year ASC";
	    SQL_CLIENT.request({
	            params: {
	                q: query
	            },
	        })
	        .then(function(response) {
	            if (response && response.data) {
	                dataArray = [];
	                labelsArray = [];
	                for (var i = 0; i < response.data.rows.length; i++) {
	                    dataArray.push(response.data.rows[i]['count']);
	                    labelsArray.push(response.data.rows[i]['year']);
	                }
	                options = {};
	                data = {
	                    datasets: [{
	                        data: dataArray,
	                        backgroundColor: '#feb236',
	                        hoverBackgroundColor: '#feb236'
	                    }],

	                    // These labels appear in the legend and in the tooltips when hovering different arcs
	                    labels: labelsArray
	                };
	                $("#map").css('z-index', 1);
	                $("#histogram").css('z-index', 2);
	                $("#articlesPerYearChart").css('z-index', 3);
	                if (articlesPerYearChart) {
	                    //console.log('update 2');
	                    $('#articlesPerYearChart').remove(); // this is my <canvas> element
	                    $('#histogram').append('<canvas id="articlesPerYearChart" width="30" height="20%"><canvas>');
	                    var ctx = $("#articlesPerYearChart");
	                    articlesPerYearChart = new Chart(ctx, {
	                        type: 'bar',
	                        data: data,
	                        options: {

	                            maintainAspectRatio: true,
	                            legend: {
	                                display: false
	                            },
	                        },
	                        borderWidth: 1
	                    });
	                } else {
	                    var ctx = $("#articlesPerYearChart");
	                    articlesPerYearChart = new Chart(ctx, {
	                        type: 'bar',
	                        data: data,
	                        options: {
	                            maintainAspectRatio: true,
	                            legend: {
	                                display: false
	                            }
	                        },
	                        borderWidth: 1
	                    });
	                }
	            }
	        })
	        .catch(function(error) {
	            //console.log(error);
	        });
	    hidePlots();
	}

	function updatePerTopicPlot() {

	}

	function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}

	function getJournalColor(journal) {
	    //console.log(journal);
	    switch (journal.trim()) {
	        case "BMC Genomics":
	            return '#006E51';
	        case "Oxford Bioinformatics":
	            return '#D8AE47';
	        case "Nucleic Acids Research":
	            return '#034F84';
	        case "BMC Bioinformatics":
	            return '#955251';
	        case "PLoS Computational Biology":
	            return '#009B77';
	        default:
	            return '#000000';
	    }
	}

	function getTopicColor(topic) {
	    switch (topic.trim()) {
	        case "DNA":
	            return '#FE2712';
	        case "RNA":
	            return '#FC600A';
	        case "Phylogeny":
	            return '#FB9902';
	        case "Sequence analysis":
	            return '#FCCC1A';
	        case "Mapping":
	            return '#FEFE33';
	        case "Structure analysis":
	            return '#B2D732';
	        case "Functional genomics":
	            return '#66B032';
	        case "Pharmacogenomics":
	            return '#8601AF';
	        case "Proteomics":
	            return '#C21460';
	        case "Mol. int., pathways and networks":
	            return '#6C4F3D';
	        case "Molecular genetics":
	            return '#672E3B';
	        case "Transcriptomics":
	            return '#9C9A40';
	        case "Tools":
	            return '#F6D155';
	        default:
	            return '#000000';
	    }
	}

	function getColorsArray(size) {
	    var rainbow = [
	        "#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
	        "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5",
	        "#39c0b3", '#b3cae5', '#dbdde4', '#e4e3e4', '#f7ddbb', '#efcab2',
	        '#bccacc', '#c7d8d6', '#d9ebe0', '#ebf9e3', '#f4f8d0',
	        '#5e7fb1', '#dce8f7', '#eff1f4', '#fce1a8', '#f7ec86',
	        '#8fb8ee', '#cbe2f4', '#dbe5eb', '#f9d3b8', '#e0b2a3',
	        '#a2e0f9', '#cef5fc', '#eafaeb', '#fefcd3', '#fdf4ba',
	        '#6bafd2', '#a4c8dc', '#d6cbca', '#eabc96', '#db8876',
	        '#b4ced8', '#d7e5d4', '#e2e8c9', '#f1e5b9', '#edd7ac',
	        '#29153e', '#657489', '#bfb6aa', '#ead79d', '#f2ebda',
	        '#20202f', '#273550', '#416081', '#adacb2', '#eac3a2',
	        '#555351', '#555351', '#8d7b6c', '#cc9d7a', '#fff9aa',
	        '#171c33', '#525f83', '#848896', '#bb9d78', '#f6e183',
	        '#ffe3c8', '#efad9e', '#c79797', '#a78a92', '#857d8d',
	        '#6f749e', '#9a8daf', '#d0a8b9', '#f8bbb1', '#fde6b1',
	        '#536a97', '#8087ad', '#bca391', '#bd968a', '#a38b8a',
	        '#325176', '#7b9ea7', '#9baf93', '#dbaf81', '#fbdf73',
	        '#727288', '#8e889b', '#d3c2bd', '#f9d89a', '#f8c785',
	        '#506e90', '#7695aa', '#a7bdb8', '#e2e2b8', '#fdf998',
	        '#634b5f', '#868080', '#b7b29b', '#dfd6a4', '#e9f3a2',
	        '#7e74b2', '#b3a2c2', '#e2cdbe', '#f6cf97', '#f4a77a',
	        '#34a4ca', '#59d7dd', '#a8f2f0', '#d0f8ef', '#d6f6e1',
	        '#7696cd', '#8fb2e4', '#b0cff0', '#d7e5ec', '#dee0e7',
	        '#8dd6c3', '#c5e5e2', '#eafaeb', '#f9f7ca', '#fceea1',
	        '#4e72c7', '#6d9ed7', '#a4c8d5', '#b4d9e1', '#c4d9d6',
	        '#47565f', '#5b625a', '#947461', '#f98056', '#f7ec86',
	        '#95b3bf', '#c6cdd3', '#e5d8d9', '#f1e1d9', '#f3e1cd',
	        '#4c86ab', '#95a5bc', '#bfcdc9', '#dcd6c9', '#edd9c7',
	        '#0f124a', '#1b2360', '#515b80', '#758391', '#e5e3b0',
	        '#889db6', '#a5b8ce', '#c1cfdd', '#dee1e4', '#d5d1cf',
	        '#74bddb', '#a8d1eb', '#cddbf5', '#e4e6fb', '#f6f4f8',
	        '#a7d3cb', '#bcc1c4', '#e5cab3', '#fee6c5', '#fdecd0',
	        '#325571', '#8e9fa4', '#decab2', '#f2d580', '#ffa642',
	        '#c5d4d7', '#d6b98d', '#c99262', '#8c5962', '#43577e'
	    ];

	    return rainbow.slice(0, size);
	}

	function hidePlots() {
	    $('#articlesPerJournalChartTitle').hide();
	    $('#articlesPerJournalChart').hide();
	    $('#articlesPerYearChartTitle').hide();
	    $('#articlesPerYearChart').hide();
	    $('#articlesPerTopicChartTitle').hide();
	    $('#articlesPerTopicChart').hide();
	    $('#histogram').hide();
	    map.closePopup();
	}

	function main() {



	    // get styles, query, legend & slider
	    const style = $("#style").text();
	    const query = _.template($('#query').html());
	    const slider_container = $('#slider-container');
	    const slider = $('#slider-cities');


	    // add map variable
	    map = L.map('map', {
	        zoomControl: false,
	        center: [38.41, -3.70],
	        zoom: 5,
	        minZoom: 5,
	        maxZoom: 24
	    });

	    // add Voyager Basemap
	    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
	        maxZoom: 18,
	        zIndex: 0
	    }).addTo(map);



	    // Adding Voyager Labels
	    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png', {
	        maxZoom: 18,
	        zIndex: 0
	    }).addTo(map);

	    L.control.zoom({
	        position: 'bottomleft'
	    }).addTo(map);

	    // add client
	    const client = new carto.Client({
	        apiKey: '9d3d3e19781c35ce76c075e4cfe9d5caa1604ce9',
	        username: 'carto-bsc'
	    });

	    // define layer configuration
	    let citiesSource = new carto.source.SQL(query({
	            year: selectedYearsArray,
	            typeVariable: selectedTipoValue,
	            authorsVariable: selectedAuthorValue
	        })),
	        citiesStyle = new carto.style.CartoCSS(style),
	        citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	            featureClickColumns: ['name', 'papers', 'type']
	        });




	    // add layer to Leaflet map
	    client.addLayer(citiesLayer);
	    client.getLeafletLayer().addTo(map)

	    $(document).ready(function() {

	            $("#moreInfoButton").click(function() {

	                $('#myModalMoreInfo').appendTo("body").modal('show');
              });
              
              // Boton colaboraciones PIs
	            $("#mostrarColaboracionesPIs").click(function() {
				  $('#myChartPIsCol').html('');
				  loadPIsCollaborationsChart();
                  $('#myModalPIsCol').appendTo("body").modal('show');
              });

	            // Boton colaboraciones hospitales
	            $("#mostrarColaboracionesHospitales").click(function() {
					$('#myChartColHosp').html('');
					loadHospitalCollaborationsChart();
	              $('#myModalColHosp').appendTo("body").modal('show');
	            });

	            // Boton lista articulos ins.
	            $("#listaArticulosInstitucion").click(function() {

	                var institutionsHash = {};

	                SQL_CLIENT.request({
	                        params: {
	                            q: "select distinct(nameaffiliation), count(distinct(title)) from articles_spa_elixir_v1 where year IN (" + selectedYearsArray + ") group by nameaffiliation order by count(distinct(title)) desc"
	                        },
	                    })
	                    .then(function(response) {
	                        for (var z = 0; z < response.data.rows.length; z++) {
	                            institutionsHash[response.data.rows[z].nameaffiliation] = {
	                                "Sí": 0,
	                                "No": 0
	                            }
	                        }
	                        SQL_CLIENT.request({
	                                params: {
	                                    q: "select nameaffiliation, inb_grant, count(distinct(title)) from articles_spa_elixir_v1 where year IN (" + selectedYearsArray + ") group by nameaffiliation, inb_grant order by nameaffiliation ASC"
	                                },
	                            })
	                            .then(function(response) {
	                                if (response && response.data) {}
	                                console.log(response.data);
	                                console.log("hash");
	                                console.log(institutionsHash);
	                                $('#cuerpoTablaListaArticulosInstitucion').html('');
	                                for (var z = 0; z < response.data.rows.length; z++) {
	                                    //console.log(z);
	                                    institutionsHash[response.data.rows[z].nameaffiliation][response.data.rows[z].inb_grant] = response.data.rows[z].count;

	                                }

	                                Object.keys(institutionsHash).forEach(function(key) {
	                                    var value = institutionsHash[key]
	                                    $('#cuerpoTablaListaArticulosInstitucion').append(
	                                        '<tr>' +
	                                        '<td>' + key + '</td>' +
	                                        '<td>' + value["Sí"] + '</td>' +
	                                        '<td>' + value["No"] + '</td>' +
	                                        '<td>');
	                                    // iteration code
	                                })
	                                $('#cuerpoTablaListaArticulosInstitucion').append(
	                                    '</tr>');
	                                $('#myModalListado').appendTo("body").modal('show');

	                                console.log("hash2");
	                                console.log(institutionsHash);

	                            })
	                            .catch(function(error) {
	                                //console.log(error);
	                            }).catch(function(error) {
	                                //console.log(error);
	                            });
	                    });
	            });

	            // Buscador investigador
	            var availableAuthorNames = [];

	            SQL_CLIENT.request({
	                    params: {
	                        q: "SELECT DISTINCT(author) FROM spa_people_names ORDER by author ASC"
	                    },
	                })
	                .then(function(response) {
	                    if (response && response.data) {
	                        dataArray = [];
	                        labelsArray = [];
	                        for (var i = 0; i < response.data.rows.length; i++) {

	                            availableAuthorNames.push({
	                                label: response.data.rows[i]['author'],
	                                value: response.data.rows[i]['author']
	                            });
	                            console.log(response.data.rows[i]['author']);
	                        }

	                        $("#buscarInvestigadorInput").autocomplete({
	                            minLength: 2,
	                            source: function(request, response) {
	                                var results = $.ui.autocomplete.filter(availableAuthorNames, request.term);
	                                response(results.slice(0, 15));
	                            },
	                            updater: function(item) {
	                                return item;
	                            },
	                            select: function(event, ui) {
	                                event.preventDefault();
	                                $("#buscarInvestigadorInput").val(ui.item.value);

	                                console.log("Investigador seleccionado: " + ui.item.value);

	                                selectedAuthorValue = "'%" + ui.item.value + "%'";

	                                citiesSource.setQuery(query({
	                                    year: selectedYearsArray,
	                                    typeVariable: selectedTipoValue,
	                                    authorsVariable: selectedAuthorValue
	                                }));
	                                citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                                    featureClickColumns: ['name', 'papers', 'type']
	                                });

	                                updatePerYearPlot();
	                                hidePlots();

	                            },
	                            focus: function(event, ui) {
	                                event.preventDefault();
	                                $("#buscarInvestigadorInput").val(ui.item.value);
	                            }
	                        });

	                        $("#investigadorClearButton").click(function() {
	                            if ($("#buscarInvestigadorInput").val().length > 1) {

	                                $("#buscarInvestigadorInput").val("");
	                                selectedAuthorValue = "'%%'";
	                                citiesSource.setQuery(query({
	                                    year: selectedYearsArray,
	                                    typeVariable: selectedTipoValue,
	                                    authorsVariable: selectedAuthorValue
	                                }));
	                                citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                                    featureClickColumns: ['name', 'papers', 'type']
	                                });
	                                updatePerYearPlot();
	                                hidePlots();

	                            } else {
	                                $('#alertBox').fadeIn();
	                                setTimeout(function() {
	                                    $('#alertBox').fadeOut();
	                                }, 5000);
	                            }
	                        });

	                        $("#investigadorVerButton").click(function() {
	                            if ($("#buscarInvestigadorInput").val().length > 1) {

	                                SQL_CLIENT.request({
	                                        params: {
	                                            q: "SELECT title,year,source,citations,doi,authors FROM articles_spa_elixir_v1 WHERE authors LIKE (" + selectedAuthorValue + ") AND year IN (" + selectedYearsArray + ") ORDER by year ASC"
	                                        },
	                                    })
	                                    .then(function(response) {
	                                        if (response && response.data) {}
	                                        console.log(response.data);
	                                        $('#cuerpoTablaArticulosInvestigador').html('');
	                                        for (var z = 0; z < response.data.rows.length; z++) {
	                                            console.log(z);

	                                            $('#cuerpoTablaArticulosInvestigador').append(
	                                                '<tr>' +
	                                                '<td>' + response.data.rows[z].title + '</td>' +
	                                                '<td>' + response.data.rows[z].year + '</td>' +
	                                                '<td>' + response.data.rows[z].source + '</td>' +
	                                                '<td>' + response.data.rows[z].citations + '</td>' +
	                                                '<td>' + response.data.rows[z].authors + '</td>' +
	                                                "<td><a href=\"http://dx.doi.org/" + response.data.rows[z].doi + "\" target=\"_blank\">" + response.data.rows[z].doi + '</a></td>' +
	                                                '<td>');
	                                        }
	                                        $('#cuerpoTablaArticulosInvestigador').append(
	                                            '</tr>');
	                                        $('#myModalInvestigador').appendTo("body").modal('show');

	                                    })
	                                    .catch(function(error) {
	                                        //console.log(error);
	                                    });




	                                //



	                            } else {
	                                $('#alertBox').fadeIn();
	                                setTimeout(function() {
	                                    $('#alertBox').fadeOut();
	                                }, 5000);
	                            }
	                        });

	                    }
	                })
	                .catch(function(error) {
	                    //console.log(error);
	                });


	            //

	            $('[data-toggle="tooltip"]').tooltip()
	            $("[data-toggle=tooltip]").tooltip({
	                placement: $(this).data("placement") || 'top'
	            });

	            selectedYearsArray = "1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018";
	            selectedJournalsArray = "Oxford Bioinformatics,BMC Bioinformatics,Nucleic Acids Research,BMC Genomics,PLoS Computational Biology";
	            selectedTopicsArray = "\'Computational Biology > Molecular genetics\', \'Software > Tools\', \'Computational Biology > Nucleic acids > DNA\', \'Computational Biology > Nucleic acids > RNA\', \'Computational Biology > Phylogeny\', \'Computational Biology > Sequence analysis\', \'Computational Biology > Molecular interactions, pathways and networks\', \'Computational Biology > Structure analysis\', \'Omics > Genomics > Functional genomics\', \'Omics > Genomics > Pharmacogenomics\', \'Proteomics\', \'Omics > Genomics > Transcriptomics\', \'Computational Biology > Sequence analysis > Mapping\'"

	            // Drag plots window
	            //Make the DIV element draggagle:
	            dragElement(document.getElementById(("histogram")));

	            function dragElement(elmnt) {
	                var pos1 = 0,
	                    pos2 = 0,
	                    pos3 = 0,
	                    pos4 = 0;
	                if (document.getElementById(elmnt.id + "header")) {
	                    /* if present, the header is where you move the DIV from:*/
	                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	                } else {
	                    /* otherwise, move the DIV from anywhere inside the DIV:*/
	                    elmnt.onmousedown = dragMouseDown;
	                }

	                function dragMouseDown(e) {
	                    e = e || window.event;
	                    // get the mouse cursor position at startup:
	                    pos3 = e.clientX;
	                    pos4 = e.clientY;
	                    document.onmouseup = closeDragElement;
	                    // call a function whenever the cursor moves:
	                    document.onmousemove = elementDrag;
	                }

	                function elementDrag(e) {
	                    e = e || window.event;
	                    // calculate the new cursor position:
	                    pos1 = pos3 - e.clientX;
	                    pos2 = pos4 - e.clientY;
	                    pos3 = e.clientX;
	                    pos4 = e.clientY;
	                    // set the element's new position:
	                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	                }

	                function closeDragElement() {
	                    /* stop moving when mouse button is released:*/
	                    document.onmouseup = null;
	                    document.onmousemove = null;
	                }
	            }

	            // Hide everything
	            //$('#sidebarButtonClosed').hide();
	            $('#leftSidebar').hide();

	            $('#histogram').hide();
	            $('#articlesPerJournalChartTitle').hide();
	            $('#articlesPerJournalChart').hide();
	            $('#articlesPerYearChartTitle').hide();
	            $('#articlesPerYearChart').hide();
	            $('#articlesPerTopicChartTitle').hide();
	            $('#articlesPerTopicChart').hide();


	            $("#histogramClose").click(function() {
	                hidePlots();
	            });

	            $("#sidebarButtonOpen").click(function() {
	                $('#sidebarButtonClosed').show();
	                $('#leftSidebar').fadeOut();
	            });
	            $("#sidebarButtonClosed").click(function() {
	                $('#sidebarButtonClosed').hide();
	                $('#leftSidebar').fadeIn();
	            });

	            $("#plotArticlesPerJournal").click(function() {
	                hidePlots();
	                $('#histogram').fadeIn();
	                $('#articlesPerJournalChartTitle').fadeIn();
	                $('#articlesPerJournalChart').fadeIn();

	            });

	            $("#plotArticlesPerYear").click(function() {

	                hidePlots();
	                $('#histogram').fadeIn();
	                $('#articlesPerYearChartTitle').fadeIn();
	                $('#articlesPerYearChart').fadeIn();
	            });

	            $("#plotArticlesPerTopic").click(function() {

	                hidePlots();
	                $('#histogram').fadeIn();
	                $('#articlesPerTopicChartTitle').fadeIn();
	                $('#articlesPerTopicChart').fadeIn();
	            });


	            // Articles per year plot
	            SQL_CLIENT.request({
	                    params: {
	                        q: "SELECT year,SUM(CAST(num_papers AS INT)) FROM results_elixir_v1 GROUP BY year ORDER by year ASC"
	                    },
	                })
	                .then(function(response) {
	                    if (response && response.data) {
	                        dataArray = [];
	                        labelsArray = [];
	                        for (var i = 0; i < response.data.rows.length; i++) {
	                            dataArray.push(response.data.rows[i]['sum']);
	                            labelsArray.push(response.data.rows[i]['year']);
	                        }
	                        options = {};
	                        data = {
	                            datasets: [{
	                                data: dataArray,
	                                backgroundColor: getColorsArray(0),
	                                hoverBackgroundColor: getColorsArray(0)
	                            }],

	                            // These labels appear in the legend and in the tooltips when hovering different arcs
	                            labels: labelsArray
	                        };
	                        $("#map").css('z-index', 1);
	                        $("#histogram").css('z-index', 2);
	                        $("#articlesPerYearChart").css('z-index', 3);
	                        var ctx = $("#articlesPerYearChart");
	                        var articlesPerJournalChart = new Chart(ctx, {
	                            type: 'bar',
	                            data: data,
	                            options: {
	                                maintainAspectRatio: false,
	                                legend: {
	                                    display: false
	                                }
	                            },
	                            borderWidth: 1
	                        });
	                    }
	                })
	                .catch(function(error) {
	                    //console.log(error);
	                });


	            $('#yearSelector').multiselect({
	                includeSelectAllOption: true,
	                allSelectedText: 'Todos los años',
	                buttonWidth: '200px',
	                onChange: function(option, checked) {

	                },
	                buttonText: function(options) {
	                    if (options.length > 0) {
	                        var selected = [];
	                        options.each(function() {
	                            selected.push([$(this).text(), $(this).data('order')]);
	                        });

	                        selected.sort(function(a, b) {
	                            return a[1] - b[1];
	                        });

	                        var text = '';
	                        for (var i = 0; i < selected.length; i++) {
	                            text += selected[i][0] + ', ';
	                        }
	                        selectedYearsArray = text.substr(0, text.length - 2);
	                        console.log("holaaa");
	                        console.log(selectedAuthorValue);
	                        citiesSource.setQuery(query({
	                            year: selectedYearsArray,
	                            typeVariable: selectedTipoValue,
	                            authorsVariable: selectedAuthorValue
	                        }));
	                        citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                            featureClickColumns: ['name', 'papers', 'type']
	                        });
	                        //console.log("(" + text.substr(0, text.length -2) + ")");

	                        console.log(selectedYearsArray);
	                        console.log(selectedTipoValue);
	                        console.log(selectedAuthorValue);
	                        updatePerYearPlot();
	                        //updatePerJournalPlot();
	                        //updatePerTopicPlot();

	                        hidePlots();
	                    }
	                    if (options.length === 0) {
	                        //console.log('0 years selected')
	                        citiesSource.setQuery(query({
	                            year: ['9999'],
	                            typeVariable: selectedTipoValue,
	                            authorsVariable: selectedAuthorValue
	                        }));
	                        citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                            featureClickColumns: ['name', 'papers', 'type']
	                        });
	                        selectedYearsArray = ['9999'];
	                        return '0 años seleccionados';
	                    } else {
	                        return options.length + ' años seleccionados';
	                    }
	                }
	            }, 'selectAll');

	            $('option', $('#yearSelector')).each(function(index, element) {
	                //if(index < 6) {
	                //$(this).removeAttr('selected').prop('selected', false);
	                //}
	                //if(index > 4) {
	                $(this).removeAttr('selected').prop('selected', true);
	                //}
	                //if(index > 9) {
	                //$(this).removeAttr('selected').prop('selected', false);
	                //}
	            });

	            $("#yearSelector").multiselect('refresh');

	            // Selector tipo
	            $('#tipoSelector').multiselect({
	                includeSelectAllOption: true,
	                selectAllText: 'Seleccionar todas',
	                buttonWidth: '200px',
	                allSelectedText: 'Todas',
	                onChange: function(option, checked) {

	                },
	                buttonText: function(options) {
	                    if (options.length > 0) {
	                        var selected = [];
	                        options.each(function() {
	                            selected.push([$(this).val(), $(this).data('order')]);
	                        });

	                        selected.sort(function(a, b) {
	                            return a[1] - b[1];
	                        });

	                        var text = '';
	                        for (var i = 0; i < selected.length; i++) {
	                            text += "'" + selected[i][0] + "'" + ', ';
	                        }

	                        var selectedExtOption = text.substr(0, text.length - 2).split("'")[1];

	                        if (selectedExtOption == "Otras") {
	                            selectedTipoValue = "'%No%'";
	                        }

	                        if (selectedExtOption == "Elixir") {
	                            selectedTipoValue = "'%Sí%'";
	                        }

	                        if (selectedExtOption == "Todas") {
	                            selectedTipoValue = "'%%'";
	                        }


	                        citiesSource.setQuery(query({
	                            year: selectedYearsArray,
	                            typeVariable: selectedTipoValue,
	                            authorsVariable: selectedAuthorValue
	                        }))
	                        citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                            featureClickColumns: ['name', 'papers', 'type']
	                        });

	                        updatePerYearPlot();

	                        hidePlots();
	                    }
	                    if (options.length === 0) {
	                        /*citiesSource.setQuery(query({
	                            comunidadesAutonomas: selectedComArray,
	                            actividadesPrincipales: "'SinActividadPrincipal'",
	                            extincionVariable: selectedExtinguidasValue
	                        }))

	                        citiesLayer = new carto.layer.Layer(citiesSource, citiesStyle, {
	                            featureOverColumns: ['nombre', 'provincia', 'localidad', 'domicilio', 'codigo_postal', 'fecha_inscripcion', 'ccaa', 'idfundacion']
	                        });*/

	                        return '0 cat. seleccionadas';
	                    } else {
	                        /*updateFoundationsPerCCAAPlot();
	                        updateFoundationsPerAmbPlot();
	                        //updateAltasBajasPlot();
	                        updateDensityPerCAPlot();
	                        updateFundacionesCantFundadoresPlot();
	                        updateFundadoresGeneroPlot();*/

	                        updatePerYearPlot();

	                        hidePlots();

	                        if (options[0].outerText == "Otras") {
	                            selectedTipoValue = "'%No%'";
	                        }

	                        if (options[0].outerText == "Elixir") {
	                            selectedTipoValue = "'%Sí%'";
	                        }

	                        if (options[0].outerText == "Todas") {
	                            selectedTipoValue = "'%%'";
	                        }


	                        return options[0].outerText;
	                    }
	                }
	            }, 'selectAll');

	            $('option', $('#tipoSelector')).each(function(index, element) {
	                $(this).removeAttr('selected').prop('selected', true);
	            });
	            $("#tipoSelector").multiselect('refresh');

	        }

	    );

	    const popup = L.popup({
	        closeButton: true
	    });

	    function openPopup(featureEvent) {
	        popup.setLatLng(featureEvent.latLng);
	        if (!popup.isOpen()) {
	            //alert(featureEvent.data.type);
	            let content = '';
	            content += `<div class="popup-container" id="institutionWindow">`;
	            if (featureEvent.data.name) {
	                var query = "SELECT COUNT(DISTINCT(title)) FROM articles_spa_elixir_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ")";
	                if (featureEvent.data.type == "Hospital") {
	                    query = "SELECT COUNT(DISTINCT(title)) FROM articles_spa_hospitales_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ")";
	                }
	                SQL_CLIENT.request({
	                        params: {
	                            q: query
	                        },
	                    })
	                    .then(function(response) {
	                        if (response && response.data) {
	                            var numberPapers = response.data.rows[0]['count'];
	                            content += `<h4>INSTITUCIÓN: ${featureEvent.data.name}</h4>`;
	                            content += `<br>`;
	                            content += `<p><b>ARTÍCULOS EN ESTE PERIODO:</b> ${numberPapers}</p>`;
	                            //content += `<p><b>T:</b> ${featureEvent.data.type}</p>`;
	                            content += `<center><button type="button" id ="mostrarArticulosInstitucion" data-toggle="tooltip" data-placement="right" title="Ver artículos" class="btn btn-primary" style="z-index: 10; width: 70%;">Ver artículos</button></center><br>`;
	                            content += `<canvas id="bar-chart" width="400" height="250"></canvas><br>`;
	                            content += `<canvas id="elixirPercentageChart" width="400" height="250"></canvas><br>`;
	                            content += `</div>`;

	                            // The modal to see the articles
	                            content += `<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Artículos de esta institución</h4>
      </div>
      <div class="modal-body">
        <table class="table">
    <thead>
      <tr>
        <th>Título</th>
        <th>Año</th>
		<th>Citas</th>
		<th>Autores</th>
		<th>DOI</th>
		<th>Financiación INB/ELIXIR-ES</th>
      </tr>
    </thead>
    <tbody id="cuerpoTablaArticulos">
      <tr>
        
      
    </tbody>
  </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>`;

	                            popup.setContent(content);
	                            popup.openOn(map);
	                            // Boton articulos
	                            var queryArticulos = "SELECT DISTINCT(title),year,citations,doi,authors,inb_grant FROM articles_spa_elixir_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") ORDER by year ASC";
	                            if (featureEvent.data.type == "Hospital") {
	                                queryArticulos = "SELECT DISTINCT(title),year,citations,doi,authors,inb_grant FROM articles_spa_hospitales_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") ORDER by year ASC";
	                            }
	                            $("#mostrarArticulosInstitucion").click(function() {
	                                SQL_CLIENT.request({
	                                        params: {
	                                            q: queryArticulos
	                                        },
	                                    })
	                                    .then(function(response) {
	                                        if (response && response.data) {}
	                                        console.log(response.data);
	                                        $('#cuerpoTablaArticulos').html('');
	                                        for (var z = 0; z < response.data.rows.length; z++) {
	                                            console.log(z);

	                                            $('#cuerpoTablaArticulos').append(
	                                                '<tr>' +
	                                                '<td>' + response.data.rows[z].title + '</td>' +
	                                                '<td>' + response.data.rows[z].year + '</td>' +
	                                                '<td>' + response.data.rows[z].citations + '</td>' +
	                                                '<td>' + response.data.rows[z].authors + '</td>' +
	                                                "<td><a href=\"http://dx.doi.org/" + response.data.rows[z].doi + "\" target=\"_blank\">" + response.data.rows[z].doi + '</a></td>' +
	                                                '<td>' + response.data.rows[z].inb_grant + '</td>' +
	                                                '<td>');
	                                        }
	                                        $('#cuerpoTablaArticulos').append(
	                                            '</tr>');
	                                        $('#myModal').appendTo("body").modal('show');

	                                    })
	                                    .catch(function(error) {
	                                        //console.log(error);
	                                    });

	                            });
	                            //
	                            // Bar chart
	                            // Return with commas in between
	                            var numberWithCommas = function(x) {
	                                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	                            };

	                            var dataPack1 = [40];
	                            var dataPack2 = [10];
	                            var dataPacks = [];
	                            var dates = [featureEvent.data.year];
	                            var query = "SELECT year,COUNT(DISTINCT(title)) FROM articles_spa_elixir_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") GROUP BY year ORDER by year ASC";
	                            if (featureEvent.data.type == "Hospital") {
	                                query = "SELECT year,COUNT(DISTINCT(title)) FROM articles_spa_hospitales_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") GROUP BY year ORDER by year ASC";
	                            }
	                            // Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';
	                            SQL_CLIENT.request({
	                                    params: {
	                                        q: query
	                                    },
	                                })
	                                .then(function(response) {
	                                    if (response && response.data) {
	                                        console.log(response.data);
	                                        dataArray = [];
	                                        labelsArray = [];
	                                        var journalsArray = []
	                                        var yearsArray = selectedYearsArray.split(",");
	                                        /*for(var i = 0; i < response.data.rows.length; i++) {
	                                        	if(!journalsArray.includes(response.data.rows[i]['dataset'])) {
	                                        		journalsArray.push(response.data.rows[i]['dataset']);
	                                        	}
	                                        }*/
	                                        /*journalsArray = selectedJournalsArray.split(",");
	                                        for(var x = 0; x < journalsArray.length; x++) {
	                                        	journalsArray[x] = journalsArray[x].replace(/'/g, '').trim();
	                                        }*/

	                                        for (var i = 0; i < selectedYearsArray.split(",").length; i++) {
	                                            if (!labelsArray.includes(parseInt(selectedYearsArray.split(",")[i].trim(), 10))) {
	                                                labelsArray.push(parseInt(selectedYearsArray.split(",")[i].trim(), 10));
	                                            }
	                                        }

	                                        labelsArray.sort(function(a, b) {
	                                            return a - b
	                                        });
	                                        //console.log(labelsArray);
	                                        var numberYears = labelsArray.length;
	                                        datapackColors = getColorsArray(1);


	                                        var tempDataArray = [];
	                                        var tempYearArray = [];
	                                        var datapackLabel;
	                                        for (var t = 0; t < selectedYearsArray.split(",").length; t++) {
	                                            tempDataArray.push({
	                                                year: parseInt(selectedYearsArray.split(",")[t].trim(), 10),
	                                                value: 0
	                                            });
	                                        }
	                                        console.log("c");
	                                        for (var l = 0; l < tempDataArray.length; l++) {
	                                            for (var j = 0; j < response.data.rows.length; j++) {
	                                                //if(response.data.rows[j]['dataset'] == journalsArray[i]) {

	                                                if (parseInt(response.data.rows[j]['year'], 10) == tempDataArray[l]['year']) {
	                                                    tempDataArray[l]['value'] = response.data.rows[j]['count'];
	                                                }


	                                                //tempDataArray.push(response.data.rows[j]['sum']);
	                                                if (!tempYearArray.includes(parseInt(response.data.rows[j]['year'], 10))) {
	                                                    tempYearArray.push(parseInt(response.data.rows[j]['year'], 10));
	                                                }
	                                                //}		

	                                            }
	                                        }


	                                        finalDataArray = [];
	                                        for (var l = 0; l < tempDataArray.length; l++) {
	                                            finalDataArray.push(tempDataArray[l]['value']);
	                                        }
	                                        // Fix missing values


	                                        var datapackObject = {
	                                            label: ["Número de artículos"],
	                                            data: finalDataArray,
	                                            backgroundColor: "#f9c91d",
	                                            hoverBackgroundColor: "#f9c91d",
	                                            hoverBorderWidth: 2,
	                                            hoverBorderColor: 'lightgrey'
	                                        };
	                                        dataPacks.push(datapackObject);

	                                        console.log(dataPacks);


	                                        var bar_ctx = document.getElementById('bar-chart');
	                                        var bar_chart = new Chart(bar_ctx, {
	                                            type: 'bar',
	                                            data: {
	                                                labels: labelsArray,
	                                                datasets: dataPacks
	                                            },
	                                            options: {
	                                                title: {
	                                                    display: true,
	                                                    text: 'Artículos por año'
	                                                },
	                                                animation: {
	                                                    duration: 10,
	                                                },
	                                                tooltips: {
	                                                    mode: 'label',
	                                                    position: 'nearest',
	                                                    intersection: false,
	                                                    callbacks: {
	                                                        label: function(tooltipItem, data) {
	                                                            return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
	                                                        }
	                                                    }
	                                                },
	                                                scales: {
	                                                    xAxes: [{
	                                                        stacked: true,
	                                                        gridLines: {
	                                                            display: false
	                                                        },
	                                                    }],
	                                                    yAxes: [{
	                                                        stacked: true,
	                                                        ticks: {
	                                                            beginAtZero: true,
	                                                            callback: function(value) {
	                                                                if (value % 1 === 0) {
	                                                                    return value;
	                                                                }
	                                                            }
	                                                        },
	                                                    }],
	                                                }, // scales
	                                                legend: {
	                                                    display: false
	                                                }
	                                            } // options
	                                        });

	                                        // Gráfico % Elixir
	                                        if (featureEvent.data.type == "Hospital") {
	                                            query = "SELECT COUNT(DISTINCT(title)),inb_grant FROM articles_spa_hospitales_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") GROUP BY inb_grant ORDER BY inb_grant";
	                                        } else {
	                                            query = "SELECT COUNT(DISTINCT(title)),inb_grant FROM articles_spa_elixir_v1 WHERE nameaffiliation = '" + featureEvent.data.name + "' AND year IN (" + selectedYearsArray + ") AND inb_grant LIKE (" + selectedTipoValue + ") GROUP BY inb_grant ORDER BY inb_grant";
	                                        }

	                                        SQL_CLIENT.request({
	                                                params: {
	                                                    q: query
	                                                },
	                                            })
	                                            .then(function(response) {
	                                                if (response && response.data) {
	                                                    dataPacks = [];
	                                                    labelsArray = [];
	                                                    var sumaPersonas = 0;
	                                                    for (var z = 0; z < response.data.rows.length; z++) {
	                                                        if (response.data.rows[z]['inb_grant'] == "No") {
	                                                            labelsArray.push("Otro tipo de financiación");
	                                                            dataPacks.push(response.data.rows[z]['count']);
	                                                        } else if (response.data.rows[z]['inb_grant'] == "Sí") {
	                                                            labelsArray.push("INB/ELIXIR-ES");
	                                                            dataPacks.push(response.data.rows[z]['count']);
	                                                            //break;
	                                                        }
	                                                    }



	                                                    datapackColors = getColorsArray(2);


	                                                    data = {
	                                                        datasets: [{
	                                                            data: dataPacks,
	                                                            backgroundColor: datapackColors
	                                                        }],

	                                                        // These labels appear in the legend and in the tooltips when hovering different arcs
	                                                        labels: labelsArray
	                                                    };

	                                                    var elixirPercentageCtx = document.getElementById('elixirPercentageChart');
	                                                    var elixirPercentageChart = new Chart(elixirPercentageCtx, {
	                                                        type: 'pie',
	                                                        data: data,
	                                                        options: {
	                                                            title: {
	                                                                display: true,
	                                                                text: 'Cantidad de artículos según finaciación'
	                                                            },
	                                                            legend: {
	                                                                display: false
	                                                            }
	                                                        },
	                                                        borderWidth: 1
	                                                    });
	                                                }
	                                            }).catch(function(error) {
	                                                //console.log(error);
	                                            });

	                                    }
	                                })
	                                .catch(function(error) {
	                                    //console.log(error);
	                                });

	                        }
	                    })
	                    .catch(function(error) {
	                        //console.log(error);
	                    });
	            }
	        }
	    }

	    function closePopup(featureEvent) {
	        popup.removeFrom(map);
	    }

	    // add popup
	    citiesLayer.on('featureClicked', openPopup);

	}

	window.onload = main;