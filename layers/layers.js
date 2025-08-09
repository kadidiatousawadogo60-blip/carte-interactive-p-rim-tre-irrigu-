var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Regionsadministrativeburkinafaso_1 = new ol.format.GeoJSON();
var features_Regionsadministrativeburkinafaso_1 = format_Regionsadministrativeburkinafaso_1.readFeatures(json_Regionsadministrativeburkinafaso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionsadministrativeburkinafaso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionsadministrativeburkinafaso_1.addFeatures(features_Regionsadministrativeburkinafaso_1);
var lyr_Regionsadministrativeburkinafaso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionsadministrativeburkinafaso_1, 
                style: style_Regionsadministrativeburkinafaso_1,
                popuplayertitle: 'Regions administrative -burkina faso',
                interactive: false,
                title: '<img src="styles/legend/Regionsadministrativeburkinafaso_1.png" /> Regions administrative -burkina faso'
            });
var format_Foragegrosdbit_2 = new ol.format.GeoJSON();
var features_Foragegrosdbit_2 = format_Foragegrosdbit_2.readFeatures(json_Foragegrosdbit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foragegrosdbit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foragegrosdbit_2.addFeatures(features_Foragegrosdbit_2);
var lyr_Foragegrosdbit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foragegrosdbit_2, 
                style: style_Foragegrosdbit_2,
                popuplayertitle: 'Forage à gros débit',
                interactive: true,
                title: '<img src="styles/legend/Foragegrosdbit_2.png" /> Forage à gros débit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Regionsadministrativeburkinafaso_1.setVisible(true);lyr_Foragegrosdbit_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Regionsadministrativeburkinafaso_1,lyr_Foragegrosdbit_2];
lyr_Regionsadministrativeburkinafaso_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Foragegrosdbit_2.set('fieldAliases', {'N°': 'N°', 'Région': 'Région', 'Province': 'Province', 'Commune': 'Commune', 'Village': 'Village', 'X': 'X', 'Y': 'Y', 'Entreprise': 'Entreprise', 'Contact': 'Contact', 'Année-Ré': 'Année-Ré', 'Taux d\'ex�': 'Taux d\'ex�', });
lyr_Regionsadministrativeburkinafaso_1.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Foragegrosdbit_2.set('fieldImages', {'N°': '', 'Région': '', 'Province': '', 'Commune': '', 'Village': '', 'X': '', 'Y': '', 'Entreprise': '', 'Contact': '', 'Année-Ré': '', 'Taux d\'ex�': '', });
lyr_Regionsadministrativeburkinafaso_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Foragegrosdbit_2.set('fieldLabels', {'N°': 'no label', 'Région': 'inline label - always visible', 'Province': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Village': 'no label', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Entreprise': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Année-Ré': 'inline label - always visible', 'Taux d\'ex�': 'inline label - always visible', });
lyr_Foragegrosdbit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});