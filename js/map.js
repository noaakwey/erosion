var map = L.map('map', {
            zoomControl:true, maxZoom:18, minZoom:8
        })
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        function pop__0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_en'] !== null ? autolinker.link(feature.properties['name_en'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ja'] !== null ? autolinker.link(feature.properties['name_ja'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ru'] !== null ? autolinker.link(feature.properties['name_ru'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['boundary'] !== null ? autolinker.link(feature.properties['boundary'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_bua'] !== null ? autolinker.link(feature.properties['name_bua'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['wikipedia'] !== null ? autolinker.link(feature.properties['wikipedia'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['addr_regio'] !== null ? autolinker.link(feature.properties['addr_regio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['admin_leve'] !== null ? autolinker.link(feature.properties['admin_leve'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['addr_count'] !== null ? autolinker.link(feature.properties['addr_count'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['official_s'] !== null ? autolinker.link(feature.properties['official_s'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['border_typ'] !== null ? autolinker.link(feature.properties['border_typ'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['population'] !== null ? autolinker.link(feature.properties['population'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['populati_1'] !== null ? autolinker.link(feature.properties['populati_1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['area'] !== null ? autolinker.link(feature.properties['area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['oktmo_user'] !== null ? autolinker.link(feature.properties['oktmo_user'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_udm'] !== null ? autolinker.link(feature.properties['name_udm'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_pl'] !== null ? autolinker.link(feature.properties['name_pl'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['official_n'] !== null ? autolinker.link(feature.properties['official_n'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['source'] !== null ? autolinker.link(feature.properties['source'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ce'] !== null ? autolinker.link(feature.properties['name_ce'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_hy'] !== null ? autolinker.link(feature.properties['name_hy'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_os'] !== null ? autolinker.link(feature.properties['name_os'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['alt_name'] !== null ? autolinker.link(feature.properties['alt_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['old_name'] !== null ? autolinker.link(feature.properties['old_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['contact_we'] !== null ? autolinker.link(feature.properties['contact_we'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note'] !== null ? autolinker.link(feature.properties['note'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['is_in'] !== null ? autolinker.link(feature.properties['is_in'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['is_in_regi'] !== null ? autolinker.link(feature.properties['is_in_regi'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['is_in_coun'] !== null ? autolinker.link(feature.properties['is_in_coun'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_de'] !== null ? autolinker.link(feature.properties['name_de'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_lt'] !== null ? autolinker.link(feature.properties['name_lt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_uk'] !== null ? autolinker.link(feature.properties['name_uk'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['addr_distr'] !== null ? autolinker.link(feature.properties['addr_distr'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cladr_code'] !== null ? autolinker.link(feature.properties['cladr_code'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['start_date'] !== null ? autolinker.link(feature.properties['start_date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['source_sta'] !== null ? autolinker.link(feature.properties['source_sta'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cadaster_c'] !== null ? autolinker.link(feature.properties['cadaster_c'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['int_name'] !== null ? autolinker.link(feature.properties['int_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['place'] !== null ? autolinker.link(feature.properties['place'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['addr_postc'] !== null ? autolinker.link(feature.properties['addr_postc'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['source_url'] !== null ? autolinker.link(feature.properties['source_url'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['timezone'] !== null ? autolinker.link(feature.properties['timezone'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_aba'] !== null ? autolinker.link(feature.properties['name_aba'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_kbd'] !== null ? autolinker.link(feature.properties['name_kbd'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_krc'] !== null ? autolinker.link(feature.properties['name_krc'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_hu'] !== null ? autolinker.link(feature.properties['name_hu'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_it'] !== null ? autolinker.link(feature.properties['name_it'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_av'] !== null ? autolinker.link(feature.properties['name_av'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_az'] !== null ? autolinker.link(feature.properties['name_az'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_lez'] !== null ? autolinker.link(feature.properties['name_lez'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_tt'] !== null ? autolinker.link(feature.properties['name_tt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['full_name'] !== null ? autolinker.link(feature.properties['full_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_be'] !== null ? autolinker.link(feature.properties['name_be'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['url'] !== null ? autolinker.link(feature.properties['url'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_tyv'] !== null ? autolinker.link(feature.properties['name_tyv'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['official_1'] !== null ? autolinker.link(feature.properties['official_1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['official_2'] !== null ? autolinker.link(feature.properties['official_2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['populati_2'] !== null ? autolinker.link(feature.properties['populati_2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ref'] !== null ? autolinker.link(feature.properties['ref'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ro'] !== null ? autolinker.link(feature.properties['name_ro'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ba'] !== null ? autolinker.link(feature.properties['name_ba'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['land_area'] !== null ? autolinker.link(feature.properties['land_area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_vi'] !== null ? autolinker.link(feature.properties['name_vi'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_cv'] !== null ? autolinker.link(feature.properties['name_cv'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fixme'] !== null ? autolinker.link(feature.properties['fixme'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['source_ref'] !== null ? autolinker.link(feature.properties['source_ref'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cladr_name'] !== null ? autolinker.link(feature.properties['cladr_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cladr_suff'] !== null ? autolinker.link(feature.properties['cladr_suff'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_clw'] !== null ? autolinker.link(feature.properties['name_clw'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_es'] !== null ? autolinker.link(feature.properties['name_es'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_fr'] !== null ? autolinker.link(feature.properties['name_fr'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ka'] !== null ? autolinker.link(feature.properties['name_ka'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_int'] !== null ? autolinker.link(feature.properties['name_int'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_sco'] !== null ? autolinker.link(feature.properties['name_sco'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_be-ta'] !== null ? autolinker.link(feature.properties['name_be-ta'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_law'] !== null ? autolinker.link(feature.properties['note_law'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_url'] !== null ? autolinker.link(feature.properties['note_url'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_law1'] !== null ? autolinker.link(feature.properties['note_law1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_law2'] !== null ? autolinker.link(feature.properties['note_law2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_url1'] !== null ? autolinker.link(feature.properties['note_url1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_url2'] !== null ? autolinker.link(feature.properties['note_url2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note_quote'] !== null ? autolinker.link(feature.properties['note_quote'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['wikipedia_'] !== null ? autolinker.link(feature.properties['wikipedia_'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['koatuu'] !== null ? autolinker.link(feature.properties['koatuu'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['wikidata'] !== null ? autolinker.link(feature.properties['wikidata'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['alt_name_r'] !== null ? autolinker.link(feature.properties['alt_name_r'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['alt_name_u'] !== null ? autolinker.link(feature.properties['alt_name_u'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_lv'] !== null ? autolinker.link(feature.properties['name_lv'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['access'] !== null ? autolinker.link(feature.properties['access'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['short_name'] !== null ? autolinker.link(feature.properties['short_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_abq'] !== null ? autolinker.link(feature.properties['name_abq'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['okato_user'] !== null ? autolinker.link(feature.properties['okato_user'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['wikipedi_1'] !== null ? autolinker.link(feature.properties['wikipedi_1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_mhr'] !== null ? autolinker.link(feature.properties['name_mhr'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_cs'] !== null ? autolinker.link(feature.properties['name_cs'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_eo'] !== null ? autolinker.link(feature.properties['name_eo'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['alt_name_e'] !== null ? autolinker.link(feature.properties['alt_name_e'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['todo'] !== null ? autolinker.link(feature.properties['todo'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_kk'] !== null ? autolinker.link(feature.properties['name_kk'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_ar'] !== null ? autolinker.link(feature.properties['name_ar'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_bg'] !== null ? autolinker.link(feature.properties['name_bg'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_et'] !== null ? autolinker.link(feature.properties['name_et'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_fi'] !== null ? autolinker.link(feature.properties['name_fi'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_mk'] !== null ? autolinker.link(feature.properties['name_mk'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_nl'] !== null ? autolinker.link(feature.properties['name_nl'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_sr'] !== null ? autolinker.link(feature.properties['name_sr'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_tr'] !== null ? autolinker.link(feature.properties['name_tr'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_mrj'] !== null ? autolinker.link(feature.properties['name_mrj'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['old_name_d'] !== null ? autolinker.link(feature.properties['old_name_d'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_alt'] !== null ? autolinker.link(feature.properties['name_alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_kjh'] !== null ? autolinker.link(feature.properties['name_kjh'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_atv'] !== null ? autolinker.link(feature.properties['name_atv'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name_int_1'] !== null ? autolinker.link(feature.properties['name_int_1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['amenity'] !== null ? autolinker.link(feature.properties['amenity'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['row_id'] !== null ? autolinker.link(feature.properties['row_id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NUMPOINTS'] !== null ? autolinker.link(feature.properties['NUMPOINTS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style__0_0(feature) {
            if (feature.properties['NUMPOINTS'] >= 0.000000 && feature.properties['NUMPOINTS'] <= 1.000000 ) {
                return {
                pane: 'pane__0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,25,28,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['NUMPOINTS'] >= 1.000000 && feature.properties['NUMPOINTS'] <= 4.000000 ) {
                return {
                pane: 'pane__0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,174,97,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['NUMPOINTS'] >= 4.000000 && feature.properties['NUMPOINTS'] <= 8.000000 ) {
                return {
                pane: 'pane__0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,192,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['NUMPOINTS'] >= 8.000000 && feature.properties['NUMPOINTS'] <= 12.000000 ) {
                return {
                pane: 'pane__0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,217,106,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['NUMPOINTS'] >= 12.000000 && feature.properties['NUMPOINTS'] <= 15.000000 ) {
                return {
                pane: 'pane__0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(26,150,65,1.0)',
                interactive: true,
            }
            }
        }
        map.createPane('pane__0');
        map.getPane('pane__0').style.zIndex = 400;
        map.getPane('pane__0').style['mix-blend-mode'] = 'normal';
        var layer__0 = new L.geoJson(json__0, {
            attribution: '',
            interactive: true,
            dataVar: 'json__0',
            layerName: 'layer__0',
            pane: 'pane__0',
            onEachFeature: pop__0,
            style: style__0_0,
        });
        bounds_group.addLayer(layer__0);
        map.addLayer(layer__0);
        function pop_settlement_1(feature, layer) {
        }

        function style_settlement_1_0() {
            return {
                pane: 'pane_settlement_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(190,207,80,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_settlement_1');
        map.getPane('pane_settlement_1').style.zIndex = 401;
        map.getPane('pane_settlement_1').style['mix-blend-mode'] = 'normal';
        var layer_settlement_1 = new L.geoJson(json_settlement_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_settlement_1',
            layerName: 'layer_settlement_1',
            pane: 'pane_settlement_1',
            onEachFeature: pop_settlement_1,
            style: style_settlement_1_0,
        });
        bounds_group.addLayer(layer_settlement_1);
        map.addLayer(layer_settlement_1);
        function pop__2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['timestamp'] !== null ? autolinker.link(feature.properties['timestamp'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['begin'] !== null ? autolinker.link(feature.properties['begin'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['end'] !== null ? autolinker.link(feature.properties['end'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['altitudeMo'] !== null ? autolinker.link(feature.properties['altitudeMo'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['tessellate'] !== null ? autolinker.link(feature.properties['tessellate'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['extrude'] !== null ? autolinker.link(feature.properties['extrude'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['visibility'] !== null ? autolinker.link(feature.properties['visibility'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['drawOrder'] !== null ? autolinker.link(feature.properties['drawOrder'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['icon'] !== null ? autolinker.link(feature.properties['icon'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style__2_0() {
            return {
                pane: 'pane__2',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(146,144,105,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane__2');
        map.getPane('pane__2').style.zIndex = 402;
        map.getPane('pane__2').style['mix-blend-mode'] = 'normal';
        var layer__2 = new L.geoJson(json__2, {
            attribution: '',
            interactive: true,
            dataVar: 'json__2',
            layerName: 'layer__2',
            pane: 'pane__2',
            onEachFeature: pop__2,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style__2_0(feature));
            },
        });
        bounds_group.addLayer(layer__2);
        map.addLayer(layer__2);
        map.on("zoomend", function(e) {
            if (map.getZoom() <= 12 && map.getZoom() >= 8) {
                map.addLayer(layer__0);
            } else if (map.getZoom() > 12 || map.getZoom() < 8) {
                map.removeLayer(layer__0);
            }
            if (map.getZoom() <= 12 && map.getZoom() >= 2) {
                map.addLayer(layer__2);
            } else if (map.getZoom() > 12 || map.getZoom() < 2) {
                map.removeLayer(layer__2);
            }
        });
            if (map.getZoom() <= 12 && map.getZoom() >= 8) {
                map.addLayer(layer__0);
            } else if (map.getZoom() > 12 || map.getZoom() < 8) {
                map.removeLayer(layer__0);
            }
            if (map.getZoom() <= 12 && map.getZoom() >= 2) {
                map.addLayer(layer__2);
            } else if (map.getZoom() > 12 || map.getZoom() < 2) {
                map.removeLayer(layer__2);
            }
            var title = new L.Control();
            title.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info');
                this.update();
                return this._div;
            };
            title.update = function () {
                this._div.innerHTML = '<h2>"Страна Городов"</h2>';
            };
            title.addTo(map);
            var abstract = new L.Control({'position':'bottomleft'});
            abstract.onAdd = function (map) {
                this._div = L.DomUtil.create('div',
                'leaflet-control abstract');
                this._div.id = 'abstract'

                    abstract.show();
                    return this._div;
                };
                abstract.show = function () {
                    this._div.classList.remove("abstract");
                    this._div.classList.add("abstractUncollapsed");
                    this._div.innerHTML = '<div class="logogis" style="background: none;"><a href="https://drevnosti.archeogeo.ru/"><img alt="search" src="https://drevnosti.archeogeo.ru/wp-content/uploads/2020/04/cropped-городов-e1587935732249-32x32.png"></a></div>';
            };
            abstract.addTo(map);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/_2.png" /> Городища': layer__2,'<img src="legend/settlement_1.png" /> settlement': layer_settlement_1,'Муниципальные районы<br /><table><tr><td style="text-align: center;"><img src="legend/_0_010.png" /></td><td>0 - 1</td></tr><tr><td style="text-align: center;"><img src="legend/_0_141.png" /></td><td>1 - 4</td></tr><tr><td style="text-align: center;"><img src="legend/_0_482.png" /></td><td>4 - 8</td></tr><tr><td style="text-align: center;"><img src="legend/_0_8123.png" /></td><td>8 - 12</td></tr><tr><td style="text-align: center;"><img src="legend/_0_12154.png" /></td><td>12 - 15</td></tr></table>': layer__0,}).addTo(map);
        map.on("zoomend", function(){

                if (map.hasLayer(layer__0)) {
                    if (map.getZoom() <= 19 && map.getZoom() >= 10) {
                        layer__0.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer__0.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer__2)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 12) {
                        layer__2.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer__2.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
        });
        setBounds();
        var i = 0;
        layer__2.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #000000; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css__2'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
                if (map.hasLayer(layer__0)) {
                    if (map.getZoom() <= 19 && map.getZoom() >= 10) {
                        layer__0.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer__0.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
                if (map.hasLayer(layer__2)) {
                    if (map.getZoom() <= 10 && map.getZoom() >= 12) {
                        layer__2.eachLayer(function (layer) {
                            layer.openTooltip();
                        });
                    } else {
                        layer__2.eachLayer(function (layer) {
                            layer.closeTooltip();
                        });
                    }
                }
        map.addControl(new L.Control.Search({
            layer: layer__2,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Name'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';
        resetLabels([layer__0,layer__2]);
        map.on("zoomend", function(){
            resetLabels([layer__0,layer__2]);
        });
        map.on("layeradd", function(){
            resetLabels([layer__0,layer__2]);
        });
        map.on("layerremove", function(){
            resetLabels([layer__0,layer__2]);
        });