var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_2019_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:admin",
                                "TILED": "true",
								"STYLES": "admin_2019",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2019 год (м/га)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2019_0, 0]);var lyr_2020_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:admin",
                                "TILED": "true",
								"STYLES": "admin_2020",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2020 год (м/га)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2020_1, 0]);var lyr_2021_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:admin",
                                "TILED": "true",
								"STYLES": "admin_2021",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2021 год (м/га)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2021_2, 0]);var lyr__3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:admin",
                                "TILED": "true",
								"STYLES": "admin_risk",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Риск",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__3, 0]);var lyr_2019_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:bass",
								"STYLES": "bass_2019",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2019 год (м/кв.км)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2019_4, 0]);var lyr_2020_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:bass",
                                "TILED": "true",
								"STYLES": "bass_2020",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2020 год (м/кв.км)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2020_5, 0]);var lyr_2021_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:bass",
								"STYLES": "bass_2021",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2021 год (м/кв.км)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2021_6, 0]);var lyr__7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://noaakwey.synology.me:49173/geoserver/ows?version%3D1.3.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "MV_ersoion:bass",
								"STYLES": "bass_risk",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Риск",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__7, 0]);
var group_admin = new ol.layer.Group({
                                layers: [lyr_2019_0,lyr_2020_1,lyr_2021_2,lyr__3,],
                                title: "Струйчатая эрозия в административных районах"});
var group_bass = new ol.layer.Group({
                                layers: [lyr_2019_4,lyr_2020_5,lyr_2021_6,lyr__7,],
                                title: "Струйчатая эрозия в речных бассейнах"});
lyr_2019_0.setVisible(false);lyr_2020_1.setVisible(false);lyr_2021_2.setVisible(false);lyr__3.setVisible(true);lyr_2019_4.setVisible(false);lyr_2020_5.setVisible(false);lyr_2021_6.setVisible(false);lyr__7.setVisible(false);
var layersList = [baseLayer,group_bass,group_admin];
