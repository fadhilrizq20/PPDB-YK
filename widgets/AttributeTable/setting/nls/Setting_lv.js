// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AttributeTable/nls/strings":{_widgetLabel:"Atrib\u016btu tabula",_featureAction_ShowRelatedRecords:"R\u0101d\u012bt saist\u012btos ierakstus",_featureAction_ViewInTable:"Skat\u012bt atrib\u016btu tabul\u0101",ok:"Labi",cancel:"Atcelt",unsupportQueryWarning:"Sl\u0101nim ir j\u0101atbalsta vaic\u0101juma darb\u012bba, lai r\u0101d\u012btu atrib\u016btu tabulas logr\u012bk\u0101. P\u0101rliecinieties, lai pakalpojum\u0101 b\u016btu iesl\u0113gta vaic\u0101juma iesp\u0113ja.",exportMessage:"Vai eksport\u0113t datus uz CSV failu?",
exportFiles:"Eksport\u0113t uz CSV",exportSelected:"Eksport\u0113t atlas\u012bto CSV fail\u0101",exportAll:"Eksport\u0113t visu CSV fail\u0101",options:"Opcijas",zoomto:"Pietuvin\u0101t",highlight:"Grafiku izcel\u0161ana",selectAll:"Atlas\u012bt ierakstus vis\u0101s lap\u0101s",selectPage:"Atlas\u012bt ierakstus pa\u0161reiz\u0113j\u0101 lap\u0101",clearSelection:"Not\u012br\u012bt izv\u0113li",selectionHandleLabel:"Atlases r\u012bks",selectionHandleDescription:"Nospiediet tausti\u0146u ENTER vai SPACE, lai izceltu elementu(-us) kart\u0113",
filter:"Filtrs",setFilterTip:"L\u016bdzu, iestatiet filtrus pareizi.",noFilterTip:"Bez defin\u0113t\u0101m filtru izteiksm\u0113m \u0161aj\u0101 vaic\u0101juma uzdevum\u0101 b\u016bs nor\u0101d\u012bti visi elementi nor\u0101d\u012btaj\u0101 datu avot\u0101.",filterByExtent:"Filtr\u0113t p\u0113c kartes p\u0101rkl\u0101juma",showSelectedRecords:"R\u0101d\u012bt atlas\u012btos ierakstus",showAllRecords:"R\u0101d\u012bt visus ierakstus",showRelatedRecords:"R\u0101d\u012bt saist\u012btos ierakstus",
noRelatedRecords:"Nav atrasti saist\u012bti ieraksti",highlightAllRecords:"Izcelt visus ierakstus kart\u0113",attachmentColumn:"Fotoatt\u0113li un faili",refresh:"Atjaunot",features:"elementi",records:"ieraksti",selected:"izv\u0113l\u0113ts",transparent:"Caursp\u012bd\u012bgums",indicate:"Atrast atlasi",columns:"R\u0101d\u012bt/pasl\u0113pt kolonnas",selectionSymbol:"Izlases simbols",closeMessage:"Pasl\u0113pt tabulu (izv\u0113rst to v\u0113lreiz no apak\u0161da\u013cas)",dataNotAvailable:"Dati nav pieejami.\x3cbr\x3eNoklik\u0161\u0137iniet uz pogas [Atsvaidzin\u0101t], lai m\u0113\u0123in\u0101tu v\u0113lreiz.",
openTableTip:"Atv\u0113rt atrib\u016btu tabulu",closeTableTip:"Pasl\u0113pt atrib\u016btu tabulu",sortAsc:"K\u0101rtot augo\u0161\u0101 sec\u012bb\u0101",sortDes:"K\u0101rtot dilsto\u0161\u0101 sec\u012bb\u0101",statistics:"Statistika",attachments:"Pielikumi",files:"faili",keepRichTextLabel:"Saglab\u0101jiet bag\u0101tin\u0101ta teksta form\u0101tu",whatsThis:"Kas tas ir?",richTextMessage:{explanatoryText:{line1:"${layerName} satur sekojo\u0161u bag\u0101tin\u0101ta teksta lauku(us): ",line2:" tas var ietvert teksta format\u0113\u0161anas stilus, piem\u0113ram, fontus, kr\u0101sas vai teksta izm\u0113rus.",
line3:"Eksport\u0113jot uz CSV, format\u0113juma stili tiks saglab\u0101ti HTML tagu veid\u0101. Variet izv\u0113l\u0113ties nesaglab\u0101t bag\u0101tin\u0101t\u0101 teksta form\u0101tus, no\u0146emot atz\u012bmi lodzi\u0146\u0101 \u201cSaglab\u0101t bag\u0101tin\u0101ta teksta form\u0101tu\u201d."},example:{label:"Piem\u0113ram:",scenarios:{first:"p\u0113c noklus\u0113juma tiks eksport\u0113ts k\u0101 \u0161\u0101ds teksts:",second:"un \u0161\u0101ds teksts bez bag\u0101tin\u0101ta teksta form\u0101ta:"}}},
noTablesAvailable:"Neviena tabula nav pieejama r\u0101d\u012b\u0161anai.",checkConfigutationToSelectLayers:"L\u016bdzu, atveriet logr\u012bku iestat\u012bjumu lapu, lai atlas\u012btu sl\u0101\u0146us.",checkLayerListToSelectLayers:"Atrib\u016btu tabula ir sinhroniz\u0113ta ar redzamajiem sl\u0101\u0146iem kart\u0113; lai iesl\u0113gtu/izsl\u0113gtu sl\u0101\u0146us, varat izmantot t\u0101du logr\u012bku k\u0101 sl\u0101\u0146u sarakstu.",rowHeaderColumnTitle:"Rinda ${rowId} ir izcelta. Atlase; nospiediet Enter, lai atlas\u012btu izcelto rindu",
rowHeaderColumnTitleMultiple:"Rinda ${rowId}; ${rowCount} rindas ir izceltas. Atlase; nospiediet Enter, lai atlas\u012btu izcelt\u0101s rindas.",_localized:{}},"widgets/AttributeTable/setting/nls/strings":{instruction:"Izv\u0113lieties un konfigur\u0113jiet sl\u0101\u0146us, kas s\u0101kotn\u0113ji tiks r\u0101d\u012bti atrib\u016btu tabul\u0101.",label:"Sl\u0101nis",show:"Par\u0101d\u012bt",actions:"Konfigur\u0113t sl\u0101\u0146a laukus",field:"Lauks",alias:"Aizst\u0101jv\u0101rds",url:"URL",sortField:"K\u0101rtot lauku",
sortOrderTooltips:{toDescending:"Nomain\u012bt uz dilsto\u0161u sec\u012bbu",toAscending:"Nomain\u012bt uz pieaugo\u0161u sec\u012bbu"},visible:"Redzams",linkField:"Saist\u012bt lauku",noLayers:"Nav pieejams neviens elementu sl\u0101nis",back:"Atpaka\u013c",exportCSV:"At\u013caut eksport\u0113t uz CSV",expand:"S\u0101kotn\u0113ji izv\u0113rst logr\u012bku",filterByExtent:"Aktiviz\u0113t filtr\u0113\u0161anu atbilsto\u0161i\u00a0kartes p\u0101rkl\u0101jumam p\u0113c noklus\u0113juma",allowTextSelection:"At\u013caut izv\u0113l\u0113ties tekstu",
highlightColor:"Kr\u0101sa izcel\u0161anai",restore:"Atjaunot uz noklus\u0113juma v\u0113rt\u012bbu",ok:"Labi",cancel:"Atcelt",includePoint:"Iek\u013caut punktu koordin\u0101tas eksport\u0113taj\u0101 fail\u0101",configureLayerFields:"Konfigur\u0113t sl\u0101\u0146a laukus",result:"Saglab\u0101\u0161ana izdev\u0101s",warning:"L\u016bdzu, vispirms atlasiet opciju R\u0101d\u012bt.",fieldCheckWarning:"J\u0101b\u016bt atlas\u012btam vismaz vienam laukam.",unsupportQueryWarning:"Sl\u0101nim ir j\u0101atbalsta vaic\u0101juma darb\u012bba, lai r\u0101d\u012btu atrib\u016btu tabulas logr\u012bk\u0101. P\u0101rliecinieties, lai pakalpojum\u0101 b\u016btu iesl\u0113gta vaic\u0101juma iesp\u0113ja.",
unsupportQueryLayers:"T\u0101l\u0101k nor\u0101d\u012btajam sl\u0101nim ir j\u0101atbalsta vaic\u0101juma darb\u012bba, lai r\u0101d\u012btu atrib\u016btu tabulas logr\u012bk\u0101. P\u0101rliecinieties, lai servis\u0101 b\u016btu iesl\u0113gta vaic\u0101juma iesp\u0113ja.",fieldName:"Nosaukums",fieldAlias:"Aizst\u0101jv\u0101rds",fieldVisibility:"Redzam\u012bba",fieldActions:"Darb\u012bbas",showAttachments:"R\u0101d\u012bt pielikumus",syncWithLayers:"Sinhroniz\u0113t ar sl\u0101\u0146u redzam\u012bbu",
syncWithLayersHint:"Atrib\u016btu tabul\u0101 nor\u0101d\u012btie sl\u0101\u0146i tiek sinhroniz\u0113ti ar sl\u0101\u0146u redzam\u012bbu dinamiski.",_localized:{}}});