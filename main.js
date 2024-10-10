var vg_map = "map.json";
var vg_bar = "stackedbar.json"
var vg_donut = "donut.json"
var vg_radial = "radial.json"

vegaEmbed("#map", vg_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#stackedbar", vg_bar, {mode: "vega-lite"}).then(console.log).catch(console.warn);

vegaEmbed("#donut", vg_donut, {mode: "vega-lite"}).then(console.log).catch(console.warn);

vegaEmbed("#radial", vg_radial, {mode: "vega-lite"}).then(console.log).catch(console.warn);