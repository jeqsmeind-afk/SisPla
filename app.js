const CLAVE_ADMIN_PERMANENTE = "J0s3hp";
let targetVaciar = '', callbackAccionPendiente = null;
let idxConductorEdit = null, idxUnidadEdit = null, idxZonaEdit = null;

// --- VARIABLES GLOBALES PARA FILTROS CRUZADOS DE UNIDADES ---
let fActivoUnidadTipo = 'TODOS';
let fActivoUnidadServicio = 'TODOS';

// LA BASE COMPLETA DE ZONAS
const ZONAS_FABRICA = [
    {"zona":"1","rec_a1_ofic":"OVALO CCORITOS (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"OVALO CCORITOS (CONF. DESVIO SUPERVISOR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)","rec_b1_desv1":"","rec_b2_ofic":"OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)","rec_b2_desv1":"","rec_b2p_ofic":"OVALO CCORITOS (CONF. DESVIO SUPERVISOR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"1A","rec_a1_ofic":"COLEGIO HORACIO ZEBALLOS (RETOMA GODOFREDO MANRIQUE)","rec_a1_desv1":"","rec_a2_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)","rec_a2_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"COLEGIO HORACIO ZEB (RETOMA GODOFREDO MANRIQUE)","rec_b1_desv1":"","rec_b2_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)","rec_b2_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)","rec_b2p_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)","rec_b2p_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1B","rec_a1_ofic":"PLAZA DE CHARACATO (RUTA REGULAR)","rec_a1_desv1":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_a2_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PLAZA DE CHARACATO","rec_b1_desv1":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2_desv1":"","rec_b2p_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2p_desv1":"","a1":"04:45:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1B SB","rec_a1_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA)","rec_a1_desv1":"","rec_a2_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"GRIFO SABANDIA","rec_b1_desv1":"","rec_b2_ofic":"GRIFO SABANDIA","rec_b2_desv1":"","rec_b2p_ofic":"GRIFO SABANDIA","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:47:30","a2_sd":"05:48:00","a2p_lv":"05:47:30","a2p_sd":"05:48:00","b1":"16:55:00","b2":"17:38:00","b2p":"17:38:00"},
    {"zona":"1C","rec_a1_ofic":"COLISEO DE GALLOS","rec_a1_desv1":"","rec_a2_ofic":"COLISEO DE GALLOS  (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"COLISEO DE GALLOS (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"COLISEO DE GALLOS (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"COLISEO DE GALLOS  (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1D","rec_a1_ofic":"LA CAMPIÑA","rec_a1_desv1":"LA CAMPIÑA (DESVIA)","rec_a2_ofic":"LA CAMPIÑA (DESVIA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"LA CAMPIÑA","rec_b1_desv1":"LA CAMPIÑA (DESVIA)","rec_b2_ofic":"LA CAMPIÑA (DESVIA)","rec_b2_desv1":"","rec_b2p_ofic":"LA CAMPIÑA (DESVIA)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1D CJ","rec_a1_ofic":"CALLE JULY / AV. CARACAS","rec_a1_desv1":"","rec_a2_ofic":"CALLE JULY / AV. CARACAS","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CALLE JULY / AV. CARACAS","rec_b1_desv1":"","rec_b2_ofic":"CALLE JULY / AV. CARACAS","rec_b2_desv1":"","rec_b2p_ofic":"CALLE JULY / AV. CARACAS","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:54:30","a2_sd":"05:55:00","a2p_lv":"05:54:30","a2p_sd":"05:55:00","b1":"NO HAY","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"2A","rec_a1_ofic":"POSTA SAN JUAN (INGRESA CASA LAGO)","rec_a1_desv1":"","rec_a2_ofic":"POSTA SAN JUAN","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"POSTA SAN JUAN","rec_b1_desv1":"","rec_b2_ofic":"POSTA SAN JUAN","rec_b2_desv1":"","rec_b2p_ofic":"POSTA SAN JUAN","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"2B","rec_a1_ofic":"MCDO. INMACULADA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"MCDO. INMACULADA","rec_a2_desv1":"","rec_a2p_ofic":"MCDO. INMACULADA","rec_a2p_desv1":"","rec_b1_ofic":"MCDO. INMACULADA","rec_b1_desv1":"","rec_b2_ofic":"MCDO. INMACULADA","rec_b2_desv1":"","rec_b2p_ofic":"MCDO. INMACULADA","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"3","rec_a1_ofic":"AV LIMA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"AV LIMA (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"AV LIMA","rec_b1_desv1":"","rec_b2_ofic":"AV LIMA","rec_b2_desv1":"","rec_b2p_ofic":"AV LIMA (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"3A","rec_a1_ofic":"PARQUE 1ERO DE MAYO","rec_a1_desv1":"","rec_a2_ofic":"PARQUE 1ERO DE MAYO","rec_a2_desv1":"","rec_a2p_ofic":"PARQUE 1ERO DE MAYO","rec_a2p_desv1":"","rec_b1_ofic":"PARQUE 1ERO DE MAYO","rec_b1_desv1":"","rec_b2_ofic":"PARQUE 1ERO DE MAYO","rec_b2_desv1":"","rec_b2p_ofic":"PARQUE 1ERO DE MAYO","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:40:00","b2":"17:30:00","b2p":"17:30:00"},
    {"zona":"3B","rec_a1_ofic":"ALAMEDA DOLORES","rec_a1_desv1":"","rec_a2_ofic":"ALAMEDA DOLORES","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"ALAMEDA DOLORES","rec_b1_desv1":"","rec_b2_ofic":"ALAMEDA DOLORES","rec_b2_desv1":"","rec_b2p_ofic":"ALAMEDA DOLORES","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"4","rec_a1_ofic":"PLAZA EL PORVENIR (RUTA REGULAR)","rec_a1_desv1":"PLAZA EL PORVENIR","rec_a2_ofic":"PLAZA EL PORVENIR","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PLAZA EL PORVENIR (RUTA REGULAR)","rec_b1_desv1":"PLAZA EL PORVENIR","rec_b2_ofic":"PLAZA EL PORVENIR","rec_b2_desv1":"","rec_b2p_ofic":"PLAZA EL PORVENIR","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5","rec_a1_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"MDO. APURIMAC","rec_a2p_desv1":"","rec_b1_ofic":"MDO. APURIMAC  (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"MDO. APURIMAC  (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5A","rec_a1_ofic":"CALLE UGARTE / JR. LEONCIO PRADO","rec_a1_desv1":"","rec_a2_ofic":"CALLE UGARTE / JR. LEONCIO PRADO","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CALLE UGARTE / JR. LEONCIO PRADO","rec_b1_desv1":"","rec_b2_ofic":"CALLE UGARTE / JR. LEONCIO PRADO","rec_b2_desv1":"","rec_b2p_ofic":"CALLE UGARTE / JR. LEONCIO PRADO","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5B","rec_a1_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"6/7 Y","rec_a1_ofic":"CLINICA AREQUIPA","rec_a1_desv1":"","rec_a2_ofic":"CLINICA AREQUIPA","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CLINICA AREQUIPA","rec_b1_desv1":"","rec_b2_ofic":"CLINICA AREQUIPA","rec_b2_desv1":"","rec_b2p_ofic":"CLINICA AREQUIPA","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"6/7 E","rec_a1_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_a1_desv1":"","rec_a2_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_a2_desv1":"","rec_a2p_ofic":"AV. AMAZONAS","rec_a2p_desv1":"","rec_b1_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b1_desv1":"","rec_b2_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b2_desv1":"","rec_b2p_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"5:52 REF","a2p_sd":"05:45:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"6/7 BA","rec_a1_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:45:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:35:00","b2":"17:30:00","b2p":"17:30:00"},
    {"zona":"8","rec_a1_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"VIA 54 / SOR ANA","rec_a2_desv1":"INKAFARMA","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_b1_desv1":"VIA 54 / SOR ANA","rec_b2_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_b2_desv1":"VIA 54 / SOR ANA","rec_b2p_ofic":"VIA 54 / SOR ANA","rec_b2p_desv1":"INKAFARMA","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:25:00","b2":"17:20:00","b2p":"17:20:00"},
    {"zona":"8A 17","rec_a1_ofic":"KM 17 (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"KM 17 ( DESVIA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"KM 17 (RUTA REGULAR)","rec_b1_desv1":"KM 17 ( DESVIA)","rec_b2_ofic":"KM 17 (RECOJO REGULAR)","rec_b2_desv1":"KM 17 (ENTR. APIPA)","rec_b2p_ofic":"KM 17 ( DESVIA)","rec_b2p_desv1":"","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:20:00","b2":"17:15:00","b2p":"17:15:00"},
    {"zona":"8A EV","rec_a1_ofic":"AVIACION / EVITAMIENTO","rec_a1_desv1":"","rec_a2_ofic":"AVIACION / EVITAMIENTO","rec_a2_desv1":"","rec_a2p_ofic":"AVIACION / EVITAMIENTO","rec_a2p_desv1":"AVIACION / EVITAMIENTO","rec_b1_ofic":"AVIACION / EVITAMIENTO","rec_b1_desv1":"","rec_b2_ofic":"AVIACION / EVITAMIENTO","rec_b2_desv1":"","rec_b2p_ofic":"AVIACION / EVITAMIENTO","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"NO HAY","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"8B","rec_a1_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"8B VB","rec_a1_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a2p_desv1":"","rec_b1_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:05:00","a2_lv":"05:54:30","a2_sd":"05:55:00","a2p_lv":"05:54:30","a2p_sd":"05:55:00","b1":"16:50:00","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"8C","rec_a1_ofic":"CASA CAMPO","rec_a1_desv1":"","rec_a2_ofic":"CASA CAMPO","rec_a2_desv1":"","rec_a2p_ofic":"CASA CAMPO","rec_a2p_desv1":"","rec_b1_ofic":"CASA CAMPO","rec_b1_desv1":"","rec_b2_ofic":"CASA CAMPO","rec_b2_desv1":"","rec_b2p_ofic":"CASA CAMPO","rec_b2p_desv1":"","a1":"05:05:00","a2_lv":"06:00:00","a2_sd":"06:00:00","a2p_lv":"06:00:00","a2p_sd":"06:00:00","b1":"17:05:00","b2":"18:00:00","b2p":"18:00:00"},
    {"zona":"11/12 HT","rec_a1_ofic":"OVALO HUNTER (RUTA REGULAR)","rec_a1_desv1":"OVALO HUNTER (RUTA REGULAR)","rec_a2_ofic":"OVALO HUNTER (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"OVALO HUNTER (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"OVALO HUNTER (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"OVALO HUNTER (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:59:30","a2_sd":"06:00:00","a2p_lv":"05:59:30","a2p_sd":"06:00:00","b1":"16:50:00","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"11/12 C","rec_a1_ofic":"ESTADIO CONGATA","rec_a1_desv1":"","rec_a2_ofic":"ESTADIO CONGATA (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"ESTADIO CONGATA","rec_a2p_desv1":"","rec_b1_ofic":"ESTADIO CONGATA","rec_b1_desv1":"","rec_b2_ofic":"ESTADIO CONGATA","rec_b2_desv1":"","rec_b2p_ofic":"ESTADIO CONGATA (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:20:00","a2_lv":"06:20:00","a2_sd":"06:20:00","a2p_lv":"06:20:00","a2p_sd":"06:20:00","b1":"17:20:00","b2":"18:20:00","b2p":"18:20:00"}
];

const DIC_ADICIONALES = { 
    "TOXICOLOGIA": { bg: "#d35400", col: "#ffffff", h: null }, 
    "PILOTO NUEVO": { bg: "#34495e", col: "#ffffff", h: "14:00" }, 
    "ADICIONAL": { bg: "#e67e22", col: "#ffffff", h: "12:00" }, 
    "ADICIONAL OBS. 11:30": { bg: "#c0392b", col: "#ffffff", h: "11:30" }, 
    "ADICIONAL OBS. 22:30": { bg: "#c0392b", col: "#ffffff", h: "22:30" }, 
    "MANTTO / DISPOSICION COORD": { bg: "#f1c40f", col: "#000000", h: "13:00" }, 
    "OVERLAP": { bg: "#9b59b6", col: "#ffffff", h: "13:30" }, 
    "SERVICIO ESPECIAL": { bg: "#ff9ff3", col: "#000000", h: "11:30" }, 
    "CURSO TECSUP": { bg: "#27ae60", col: "#ffffff", h: "15:30" }, 
    "CAPACITACION MONITOR": { bg: "#8e44ad", col: "#ffffff", h: "14:00" }, 
    "RETORNA A MINA": { bg: "#e67e22", col: "#ffffff", h: "15:30" }, 
    "DESCANSO": { bg: "#f1c40f", col: "#000000", h: null } 
};

const OPCIONES_CARRILES = ["", "MOV. TIERR / CARR. 3", "TRUCKSHOP / CARR. 1", "TRUCKSHOP / CARR. 2", "LUBRIC / CARR. AUX", "CARR. J/PLAT SUR"];

// Tus URLs de conexión
const URL_API_CONDUCTORES = "https://script.google.com/macros/s/AKfycbwYiiV2_-zSTcLUft_xcPTXl03LxcyTNcZ2l2u8RfTtPsrvyrzOcPR9NVJCd4AxhLfR/exec";
const URL_API_UNIDADES = "https://script.google.com/macros/s/AKfycbz95bAXTt3TdLqWrHswVEtSWEjA1Qb5RCdb9QfUnRqsGOgilnNzrpcR8V6l4mkhZCBlZA/exec";

// CARGA DE DATOS SEGUROS
function cargarDatosSeguros(k, fb) { 
    try { 
        let d = localStorage.getItem(k); 
        return d ? JSON.parse(d) : fb; 
    } catch(e) { return fb; } 
}

let conductores = cargarDatosSeguros('bd_conductores_smcv', []);
let unidades = cargarDatosSeguros('bd_unidades_smcv', []);
let zonasBD = cargarDatosSeguros('bd_zonas_oficial_smcv', ZONAS_FABRICA);
let plantillasBD = cargarDatosSeguros('bd_plantillas_smcv', { LV: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, SD: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, FER: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]} });
let programacionDiaria = cargarDatosSeguros('bd_prog_diaria_smcv', {});
let datosCapacitacion = cargarDatosSeguros('bd_capacitaciones_smcv', { titulo: "", lista: [] });

// GUARDADOS CENTRALIZADOS (Actualizan el Dashboard en automático)
function guardarConductores(refrescar = true) { 
    localStorage.setItem('bd_conductores_smcv', JSON.stringify(conductores)); 
    if(refrescar) actualizarDashboard(); 
}
function guardarUnidades(refrescar = true) { 
    localStorage.setItem('bd_unidades_smcv', JSON.stringify(unidades)); 
    if(refrescar) actualizarDashboard(); 
}
function guardarZonas() { 
    localStorage.setItem('bd_zonas_oficial_smcv', JSON.stringify(zonasBD)); 
    renderizarZonas(); 
}

// FUNCIONES UTILITARIAS
function normalizarTexto(txt) { 
    if(!txt) return ""; 
    return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g," ").trim().toUpperCase(); 
}
function abrirModal(id) { document.getElementById(id).style.display = 'flex'; }
function cerrarModal(id) { document.getElementById(id).style.display = 'none'; }
function aplicarTema(t) { document.body.setAttribute('data-theme', t); localStorage.setItem('planner_theme', t); }
function togglePinSidebar() { document.getElementById('sidebar').classList.toggle('pinned'); }
function toggleSubmenuMaestros() { 
    let sub = document.getElementById('submenuMaestros');
    let arrow = document.getElementById('arrowMaestros'); 
    sub.classList.toggle('open'); 
    arrow.style.transform = sub.classList.contains('open') ? 'rotate(0deg)' : 'rotate(-90deg)'; 
}

function cambiarVista(vista) {
    // 1. Ocultar todas las vistas
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    // 2. Apagar todos los botones de la barra superior
    document.querySelectorAll('.nav-btn, .dropdown-content a').forEach(btn => btn.classList.remove('active'));

    // 3. Variables para saber qué botones encender
    let vistaId = "";
    let btnId = "";
    let parentBtnId = ""; // Por si está dentro del menú Maestros

    if (vista === 'dashboard') { vistaId = 'vistaDashboard'; btnId = 'btnNavDashboard'; }
    if (vista === 'conductores') { vistaId = 'vistaConductores'; btnId = 'btnNavConductores'; parentBtnId = 'btnNavMaestros'; }
    if (vista === 'unidades') { vistaId = 'vistaUnidades'; btnId = 'btnNavUnidades'; parentBtnId = 'btnNavMaestros'; }
    if (vista === 'zonas') { vistaId = 'vistaZonas'; btnId = 'btnNavZonas'; }
    if (vista === 'plantillas') { vistaId = 'vistaPlantillas'; btnId = 'btnNavPlantillas'; }
    if (vista === 'programacion') { vistaId = 'vistaProgramacion'; btnId = 'btnNavProgramacion'; }
    if (vista === 'respaldo') { vistaId = 'vistaRespaldo'; btnId = 'btnNavRespaldo'; }
    if (vista === 'roster') { vistaId = 'vistaRoster'; btnId = 'btnNavRoster'; }

    // 4. Encender la vista y los botones correspondientes
    if(document.getElementById(vistaId)) document.getElementById(vistaId).classList.add('active');
    if(document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');
    if(parentBtnId && document.getElementById(parentBtnId)) document.getElementById(parentBtnId).classList.add('active');
    
    // 5. Refrescar renderizado
    if (vista === 'conductores') { actualizarFiltrosDinamicosConductores(); renderizarConductores(); }
    if (vista === 'unidades') { actualizarFiltrosDinamicosUnidades(); renderizarUnidades(); }
}

function obtenerEdadProcesada(f) { 
    if (!f) return { texto: '-', esCumple: false }; 
    let p = f.split('/'); 
    if (p.length !== 3) return { texto: '-', esCumple: false }; 
    let nac = new Date(p[2], p[1] - 1, p[0]), hoy = new Date(); 
    let edad = hoy.getFullYear() - nac.getFullYear(), m = hoy.getMonth() - nac.getMonth(), d = hoy.getDate() - nac.getDate(); 
    if (m < 0 || (m === 0 && d < 0)) edad--; 
    return { texto: isNaN(edad) ? '-' : `${edad} años`, esCumple: (hoy.getMonth() === nac.getMonth() && hoy.getDate() === nac.getDate()) }; 
}

function obtenerTiempoLaborandoExacto(f) { 
    if (!f) return '-'; 
    let p = f.split('/'); 
    if (p.length !== 3) return '-'; 
    let ing = new Date(p[2], p[1] - 1, p[0]), hoy = new Date(); 
    if (isNaN(ing.getTime())) return '-'; 
    let a = hoy.getFullYear() - ing.getFullYear(), m = hoy.getMonth() - ing.getMonth(), d = hoy.getDate() - ing.getDate(); 
    if (d < 0) { m--; d += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate(); } 
    if (m < 0) { a--; m += 12; } 
    return a < 0 ? '0 a / 0 m' : `${a} a / ${m} m`; 
}

function determinarTipoConductor(contrato) {
    if(!contrato) return 'VAN';
    let txt = contrato.toUpperCase();
    if (txt.includes('ESPECIALIZADO M')) return 'MINIBUS';
    if (txt.includes('ESPECIALIZADO')) return 'BUS';
    return 'VAN';
}

// Variables globales para filtros de conductores
let filtroActivoContratoCond = "TODOS";
let filtroActivoServicioCond = "TODOS";

function actualizarFiltrosDinamicosConductores() {
    let contenedor = document.getElementById('contenedorChipsFiltrosCond');
    if (!contenedor || !conductores) return;

    // Obtener listas únicas quitando vacíos
    let contratos = ["TODOS", ...new Set(conductores.map(c => c.contrato).filter(Boolean))];
    let servicios = ["TODOS", ...new Set(conductores.map(c => c.servicio).filter(Boolean))];

    let html = `
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-muted); width: 60px;">CONTRATO:</span>
            ${contratos.map(c => `<button class="chip-filtro ${filtroActivoContratoCond === c ? 'active' : ''}" onclick="setFiltroContratoCond('${c}')">${c}</button>`).join('')}
        </div>
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-muted); width: 60px;">SERVICIO:</span>
            ${servicios.map(s => `<button class="chip-filtro ${filtroActivoServicioCond === s ? 'active' : ''}" onclick="setFiltroServicioCond('${s}')">${s}</button>`).join('')}
        </div>
    `;
    contenedor.innerHTML = html;
}

function setFiltroContratoCond(val) { filtroActivoContratoCond = val; actualizarFiltrosDinamicosConductores(); renderizarConductores(); }
function setFiltroServicioCond(val) { filtroActivoServicioCond = val; actualizarFiltrosDinamicosConductores(); renderizarConductores(); }

// ==========================================
// SISTEMA DE NOTIFICACIONES FLOTANTES (TOAST)
// ==========================================
function mostrarToast(mensaje, tipo = 'info', duracion = 4000) {
    let container = document.getElementById('toast-container');
    if (!container) return;
    
    let toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    
    let icon = 'fa-circle-info';
    if (tipo === 'success') icon = 'fa-circle-check';
    if (tipo === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${mensaje}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, duracion);
}

// ==========================================
// SINCRONIZACIÓN EN SEGUNDO PLANO (NON-BLOCKING)
// ==========================================
async function sincronizarDatosSegundoPlano() {
    let btnGlobal = document.getElementById('btnSyncGlobal');
    
    // Cambiamos el estado del botón para mostrar actividad
    if(btnGlobal) {
        btnGlobal.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Conectando...';
        btnGlobal.disabled = true;
    }
    
    // Avisamos al usuario que puede seguir trabajando
    mostrarToast("Iniciando sincronización con Google Sheets. Puedes seguir trabajando.", "info", 5000);
    
    try {
        let urlCond = URL_API_CONDUCTORES + "?t=" + new Date().getTime();
        let urlUni = URL_API_UNIDADES + "?t=" + new Date().getTime();
        
        // Disparamos las peticiones a Google en paralelo sin bloquear la pantalla
        let [resCond, resUni] = await Promise.all([ fetch(urlCond), fetch(urlUni) ]);
        
        let actualizados = 0;

        if (resCond.ok) {
            let dataCond = await resCond.json();
            if (dataCond && dataCond.length > 0) { 
                conductores = dataCond; 
                guardarConductores(false); 
                actualizados++; 
            }
        }
        
        if (resUni.ok) {
            let dataUni = await resUni.json();
            if (dataUni && dataUni.length > 0) { 
                // Protegemos los estados locales (Taller, Destinos, Prioridades)
                dataUni.forEach(uNueva => {
                    let uLocal = unidades.find(ul => ul.codigo === uNueva.codigo);
                    if(uLocal) {
                        if(uLocal.estado) uNueva.estado = uLocal.estado;
                        if(uLocal.mantenimiento) uNueva.mantenimiento = uLocal.mantenimiento;
                    }
                });
                unidades = dataUni; 
                guardarUnidades(false); 
                actualizados++;
            }
        }
        
        if (actualizados > 0) {
            // Actualizamos la interfaz en silencio con los nuevos datos
            actualizarFiltrosDinamicos(); 
            actualizarFiltrosDinamicosUnidades(); 
            
            // Renderizamos solo la vista que el usuario esté viendo actualmente
            let vistaActiva = document.querySelector('.view-section.active').id;
            if(vistaActiva === 'vistaDashboard') actualizarDashboard();
            if(vistaActiva === 'vistaConductores') renderizarConductores();
            if(vistaActiva === 'vistaUnidades') renderizarUnidades();
            if(vistaActiva === 'vistaProgramacion') renderizarProgramacion();
            
            // Etiqueta de última sincronización
            let lblUni = document.getElementById('lblLastSyncUnidades');
            if(lblUni) lblUni.innerText = "Última sincronización: Hoy, " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            mostrarToast("¡Bases de datos actualizadas con éxito!", "success");
        } else {
            mostrarToast("No se recibieron datos de Google Sheets.", "error");
        }
        
    } catch(e) {
        mostrarToast("Error de conexión: " + e.message, "error");
    } finally {
        // Restauramos el botón
        if(btnGlobal) {
            btnGlobal.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Sincronizar';
            btnGlobal.disabled = false;
        }
    }
}

// ==========================================
// PÍLDORAS (CHIPS) DE FILTROS CRUZADOS - UNIDADES
// ==========================================
function actualizarFiltrosDinamicosUnidades() {
    let tipos = [...new Set(unidades.map(u => (u.tipo || '').toUpperCase().trim()))].filter(t => t !== '');
    let servicios = [...new Set(unidades.map(u => (u.servicio || '').toUpperCase().trim()))].filter(s => s !== '');
    
    // 1. Construir Fila de Tipos
    let htmlTipos = `<div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted); width: 65px;">TIPO:</span>
        <button class="chip-filtro ${fActivoUnidadTipo === 'TODOS' ? 'active' : ''}" onclick="toggleFiltroUnidades('tipo', 'TODOS')">Todos</button>`;
    tipos.forEach(t => {
        htmlTipos += `<button class="chip-filtro ${fActivoUnidadTipo === t ? 'active' : ''}" onclick="toggleFiltroUnidades('tipo', '${t}')">${t}</button>`;
    });
    htmlTipos += `</div>`;

    // 2. Construir Fila de Servicios
    let htmlServs = `<div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-top:5px;">
        <span style="font-size:0.75rem; font-weight:800; color:var(--text-muted); width: 65px;">SERVICIO:</span>
        <button class="chip-filtro ${fActivoUnidadServicio === 'TODOS' ? 'active' : ''}" onclick="toggleFiltroUnidades('servicio', 'TODOS')">Todos</button>`;
    servicios.forEach(s => {
        htmlServs += `<button class="chip-filtro ${fActivoUnidadServicio === s ? 'active' : ''}" onclick="toggleFiltroUnidades('servicio', '${s}')">${s}</button>`;
    });
    htmlServs += `</div>`;

    let panel = document.getElementById('contenedorChipsFiltros');
    if(panel) panel.innerHTML = htmlTipos + htmlServs;

    // 3. Actualizar KPIs Superiores
    if(document.getElementById('kpiTotalUnidades')) {
        document.getElementById('kpiTotalUnidades').innerText = unidades.length;
        document.getElementById('kpiOperativas').innerText = unidades.filter(u => u.estado !== 'TALLER').length;
        document.getElementById('kpiTaller').innerText = unidades.filter(u => u.estado === 'TALLER').length;
    }
}

// Al hacer clic en un Chip
function toggleFiltroUnidades(categoria, valor) {
    if (categoria === 'tipo') fActivoUnidadTipo = valor;
    if (categoria === 'servicio') fActivoUnidadServicio = valor;
    
    actualizarFiltrosDinamicosUnidades(); 
    renderizarUnidades(); 
}

function cambiarEstadoUnidad(idx, nuevoEstado) {
    unidades[idx].estado = nuevoEstado;
    guardarUnidades(); 
    actualizarFiltrosDinamicosUnidades(); // Actualiza el número de los KPIs
    renderizarUnidades(); 
}


// ==========================================
// EL CEREBRO DEL DASHBOARD
// ==========================================
function actualizarDashboard() {
    // 1. CONDUCTORES
    if (conductores && conductores.length > 0) {
        let elTotal = document.getElementById('dashTotalConductores');
        if (elTotal) elTotal.innerText = conductores.length;

        let induccionCount = conductores.filter(c => (c.servicio || '').toUpperCase().trim() === 'INDUCCION').length;
        let elInd = document.getElementById('dashInduccion');
        if (elInd) elInd.innerText = induccionCount;

        let hoy = new Date();
        let dia = String(hoy.getDate()).padStart(2, '0');
        let mes = String(hoy.getMonth() + 1).padStart(2, '0');
        let fechaHoy = dia + '/' + mes; 
        
        let cumpleaneros = conductores.filter(c => {
            if(!c.nac) return false;
            return String(c.nac).trim().substring(0, 5) === fechaHoy; 
        });
        
        let elCumple = document.getElementById('dashCumpleanos');
        if (elCumple) {
            elCumple.innerText = cumpleaneros.length;
            let cardElement = elCumple.closest('.card');
            if(cardElement) {
                if(cumpleaneros.length > 0) {
                    let listaNombres = cumpleaneros.map(c => "🎂 " + c.nombre).join('\n');
                    cardElement.title = "Cumpleañeros de hoy:\n" + listaNombres;
                    cardElement.style.cursor = "help";
                } else {
                    cardElement.title = "No hay cumpleaños el día de hoy";
                    cardElement.style.cursor = "default";
                }
            }
        }

        let cVan = 0, cMinibus = 0, cBus = 0;
        conductores.forEach(c => {
            let cat = determinarTipoConductor(c.contrato);
            if(cat === 'VAN') cVan++;
            else if(cat === 'MINIBUS') cMinibus++;
            else if(cat === 'BUS') cBus++;
        });

        if(document.getElementById('dashAcredVan')) document.getElementById('dashAcredVan').innerText = cVan;
        if(document.getElementById('dashAcredMinibus')) document.getElementById('dashAcredMinibus').innerText = cMinibus;
        if(document.getElementById('dashAcredBus')) document.getElementById('dashAcredBus').innerText = cBus;
    }

    // 2. UNIDADES
    if (unidades && unidades.length > 0) {
        let fVan = 0, fMinibus = 0, fBus = 0, fCamioneta = 0;
        unidades.forEach(u => {
            let t = (u.tipo || '').toUpperCase().trim();
            if(t === 'VAN') fVan++;
            else if(t === 'MINIBUS') fMinibus++;
            else if(t === 'BUS') fBus++;
            else if(t === 'CAMIONETA') fCamioneta++;
        });

        if(document.getElementById('dashFlotaVan')) document.getElementById('dashFlotaVan').innerText = fVan;
        if(document.getElementById('dashFlotaMinibus')) document.getElementById('dashFlotaMinibus').innerText = fMinibus;
        if(document.getElementById('dashFlotaBus')) document.getElementById('dashFlotaBus').innerText = fBus;
        if(document.getElementById('dashFlotaCamioneta')) document.getElementById('dashFlotaCamioneta').innerText = fCamioneta;
    }
}

// ==========================================
// VISTAS Y TABLAS
// ==========================================
function actualizarFiltrosDinamicos() {
    let selectServicio = document.getElementById('filtroServicioCond');
    if (!selectServicio) return;
    
    let valorActual = selectServicio.value;
    
    let serviciosUnicos = [...new Set(conductores.map(c => (c.servicio || '').toUpperCase().trim()))].filter(s => s !== '');
    serviciosUnicos.sort();
    
    let html = '<option value="TODOS">Todos los Servicios</option>';
    serviciosUnicos.forEach(serv => {
        let selected = (serv === valorActual) ? 'selected' : '';
        html += `<option value="${serv}" ${selected}>${serv}</option>`;
    });
    selectServicio.innerHTML = html;
}

function renderizarConductores() {
    let tbody = document.getElementById('tbodyConductores');
    if(!tbody) return;
    
    let search = (document.getElementById('searchConductores')?.value || '').toLowerCase();
    
    // Filtrado por los nuevos chips
    let filtrados = conductores.filter(c => {
        let matchSearch = c.dni.toLowerCase().includes(search) || c.nombre.toLowerCase().includes(search);
        let matchContrato = (filtroActivoContratoCond === 'TODOS' || c.contrato === filtroActivoContratoCond);
        let matchServicio = (filtroActivoServicioCond === 'TODOS' || c.servicio === filtroActivoServicioCond);
        return matchSearch && matchContrato && matchServicio;
    });

    // --- ACTUALIZAR KPIs FLOTANTES (Separadores) ---
    if(document.getElementById('kpiTotalCond')) document.getElementById('kpiTotalCond').innerText = filtrados.length;
    if(document.getElementById('kpiRegCond')) document.getElementById('kpiRegCond').innerText = filtrados.filter(c => c.servicio === 'REGULAR').length;
    if(document.getElementById('kpiDomCond')) document.getElementById('kpiDomCond').innerText = filtrados.filter(c => c.servicio === 'DOMICILIOS').length;
    // -----------------------------------------------

    tbody.innerHTML = '';
    filtrados.forEach((c, index) => {
        let tr = document.createElement('tr');
        // Asegúrate de incluir el index+1 en la primera celda <td>${index + 1}</td>
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${c.dni}</td>
            <td><b>${c.nombre}</b></td>
            <td>${c.edad || '-'}</td>
            <td>${c.tiempo || '-'}</td>
            <td><span class="badge-abrev badge-van">${c.contrato || '-'}</span></td>
            <td><span class="badge-abrev badge-minibus">${c.servicio || '-'}</span></td>
            <td><span class="badge-status status-${(c.estado || '').toLowerCase()}">${c.estado || '-'}</span></td>
            <td><button class="btn-icon" onclick="abrirModalEditConductor('${c.dni}')"><i class="fa-solid fa-pen"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}
function renderizarUnidades() {
    let tbody = document.getElementById('tbodyUnidades');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    let txt = document.getElementById('searchUnidades') ? document.getElementById('searchUnidades').value.toUpperCase().trim() : '';

    let correlativo = 1;
    
    unidades.forEach((u, idx) => {
        let tStr = (u.tipo || '').toUpperCase().trim();
        let sStr = (u.servicio || '').toUpperCase().trim();
        let cStr = (u.codigo || '').toUpperCase();
        let pStr = (u.placa || '').toUpperCase();

        // Aplicamos el Filtro Cruzado de las píldoras (La Magia)
        if (fActivoUnidadTipo !== 'TODOS' && tStr !== fActivoUnidadTipo) return;
        if (fActivoUnidadServicio !== 'TODOS' && sStr !== fActivoUnidadServicio) return;
        if (txt && !cStr.includes(txt) && !pStr.includes(txt)) return;

        let badgeClass = tStr === 'BUS' ? 'badge-bus' : (tStr === 'MINIBUS' ? 'badge-minibus' : 'badge-van');
        if(tStr === 'CAMIONETA') badgeClass = 'badge-van';
        
        let estadoActual = u.estado || 'OPERATIVO';
        let bgEstado = estadoActual === 'OPERATIVO' ? '#d1fae5' : '#fee2e2';
        let colorEstado = estadoActual === 'OPERATIVO' ? '#065f46' : '#991b1b';
        
        let selectEstado = `
            <select class="select-prog" style="background:${bgEstado}; color:${colorEstado}; font-weight:bold; padding:4px; border:none; border-radius:4px; font-size:0.75rem; cursor:pointer; outline:none;" onchange="cambiarEstadoUnidad(${idx}, this.value)">
                <option value="OPERATIVO" ${estadoActual==='OPERATIVO'?'selected':''}>OPERATIVO</option>
                <option value="TALLER" ${estadoActual==='TALLER'?'selected':''}>TALLER</option>
            </select>
        `;

        // NUEVO: Píldora de Mantenimiento / Destino
        let novedadHtml = u.mantenimiento ? `<span style="background:#fef3c7; color:#b45309; padding:4px 8px; border-radius:4px; font-weight:800; font-size:0.7rem;">🛠️ ${u.mantenimiento}</span>` : `<span style="color:var(--text-muted); font-size:0.8rem;">-</span>`;

        tbody.insertAdjacentHTML('beforeend', `<tr>
            <td style="color:var(--text-muted); font-weight:bold;">${correlativo++}</td>
            <td>${u.codigo || '-'}</td>
            <td style="font-weight:700; letter-spacing: 1px;">${u.placa || '-'}</td>
            <td><span class="badge-unit ${badgeClass}">${u.tipo || '-'}</span></td>
            <td>${u.marca || '-'}</td>
            <td>${u.capacidad || '-'} pax</td>
            <td style="color:#0284c7; font-weight:700; font-size:0.75rem;">${u.servicio || '-'}</td>
            <td>${selectEstado}</td>
            <td>${novedadHtml}</td>
        </tr>`);
    });
}

// ZONAS Y 360
function restablecerZonasFabrica() { 
    zonasBD = JSON.parse(JSON.stringify(ZONAS_FABRICA)); 
    guardarZonas(); 
    alert("✓ Zonas restablecidas con éxito al listado oficial de fábrica."); 
}

function renderizarZonas() { 
    let tbody = document.getElementById('tbodyZonas'); 
    tbody.innerHTML = ''; 
    let txt = document.getElementById('searchZonas').value.toUpperCase().trim(); 
    
    zonasBD.forEach((z, idx) => { 
        if (txt && !z.zona.toUpperCase().includes(txt)) return; 
        
        let ofi = z.rec_a2_ofic || z.rec_a1_ofic || '-';
        
        tbody.insertAdjacentHTML('beforeend', `<tr>
            <td><b>${z.zona}</b></td>
            <td>${z.a1||'-'}</td>
            <td style="color:var(--accent); font-weight:600;">${z.a2_lv||'-'}</td>
            <td>${z.a2p_lv||'-'}</td>
            <td>${z.b1||'-'}</td>
            <td>${z.b2||'-'}</td>
            <td>${z.b2p||'-'}</td>
            <td style="font-size:0.75rem; color:var(--text-muted);">${ofi}</td>
            <td><button class="btn btn-outline" onclick="abrirModalEditZona(${idx})"><i class="fa-solid fa-pen"></i> 360°</button></td>
        </tr>`); 
    }); 
}

function abrirModalEditZona(idx) {
    idxZonaEdit = idx; 
    let z = zonasBD[idx]; 
    document.getElementById('badgeZonaEditName').innerText = `ZONA ${z.zona}`;
    
    document.getElementById('zHoraA1').value = z.a1 || ''; 
    document.getElementById('zRutaA1Ofic').value = z.rec_a1_ofic || ''; 
    document.getElementById('zRutaA1Desv1').value = z.rec_a1_desv1 || ''; 
    document.getElementById('zRutaA1Desv2').value = z.rec_a1_desv2 || '';
    
    document.getElementById('zHoraA2LV').value = z.a2_lv || ''; 
    document.getElementById('zHoraA2SDFER').value = z.a2_sd || ''; 
    document.getElementById('zRutaA2Ofic').value = z.rec_a2_ofic || ''; 
    document.getElementById('zRutaA2Desv1').value = z.rec_a2_desv1 || ''; 
    document.getElementById('zRutaA2Desv2').value = z.rec_a2_desv2 || '';
    
    document.getElementById('zHoraA2PLV').value = z.a2p_lv || ''; 
    document.getElementById('zHoraA2PSDFER').value = z.a2p_sd || ''; 
    document.getElementById('zRutaA2POfic').value = z.rec_a2p_ofic || ''; 
    document.getElementById('zRutaA2PDesv1').value = z.rec_a2p_desv1 || ''; 
    document.getElementById('zRutaA2PDesv2').value = z.rec_a2p_desv2 || '';
    
    document.getElementById('zHoraB1').value = z.b1 || ''; 
    document.getElementById('zRutaB1Ofic').value = z.rec_b1_ofic || ''; 
    document.getElementById('zRutaB1Desv1').value = z.rec_b1_desv1 || ''; 
    document.getElementById('zRutaB1Desv2').value = z.rec_b1_desv2 || '';
    
    document.getElementById('zHoraB2').value = z.b2 || ''; 
    document.getElementById('zRutaB2Ofic').value = z.rec_b2_ofic || ''; 
    document.getElementById('zRutaB2Desv1').value = z.rec_b2_desv1 || ''; 
    document.getElementById('zRutaB2Desv2').value = z.rec_b2_desv2 || '';
    
    document.getElementById('zHoraB2P').value = z.b2p || ''; 
    document.getElementById('zRutaB2POfic').value = z.rec_b2p_ofic || ''; 
    document.getElementById('zRutaB2PDesv1').value = z.rec_b2p_desv1 || ''; 
    document.getElementById('zRutaB2PDesv2').value = z.rec_b2p_desv2 || '';
    
    switchTabZona(null, 'tabA1'); 
    abrirModal('modalEditZona');
}

function switchTabZona(evt, tabId) { 
    document.querySelectorAll('#modalEditZona .tab-btn').forEach(b => b.classList.remove('active')); 
    document.querySelectorAll('#modalEditZona .tab-content').forEach(c => c.classList.remove('active')); 
    
    if (evt) evt.currentTarget.classList.add('active'); 
    else document.querySelector(`button[onclick*="${tabId}"]`).classList.add('active'); 
    
    document.getElementById(tabId).classList.add('active'); 
}

function guardarCambiosZonaConfirmado() {
    let z = zonasBD[idxZonaEdit];
    z.a1 = document.getElementById('zHoraA1').value; 
    z.rec_a1_ofic = document.getElementById('zRutaA1Ofic').value; 
    z.rec_a1_desv1 = document.getElementById('zRutaA1Desv1').value; 
    z.rec_a1_desv2 = document.getElementById('zRutaA1Desv2').value;
    
    z.a2_lv = document.getElementById('zHoraA2LV').value; 
    z.a2_sd = document.getElementById('zHoraA2SDFER').value; 
    z.rec_a2_ofic = document.getElementById('zRutaA2Ofic').value; 
    z.rec_a2_desv1 = document.getElementById('zRutaA2Desv1').value; 
    z.rec_a2_desv2 = document.getElementById('zRutaA2Desv2').value;
    
    z.a2p_lv = document.getElementById('zHoraA2PLV').value; 
    z.a2p_sd = document.getElementById('zHoraA2PSDFER').value; 
    z.rec_a2p_ofic = document.getElementById('zRutaA2POfic').value; 
    z.rec_a2p_desv1 = document.getElementById('zRutaA2PDesv1').value; 
    z.rec_a2p_desv2 = document.getElementById('zRutaA2PDesv2').value;
    
    z.b1 = document.getElementById('zHoraB1').value; 
    z.rec_b1_ofic = document.getElementById('zRutaB1Ofic').value; 
    z.rec_b1_desv1 = document.getElementById('zRutaB1Desv1').value; 
    z.rec_b1_desv2 = document.getElementById('zRutaB1Desv2').value;
    
    z.b2 = document.getElementById('zHoraB2').value; 
    z.rec_b2_ofic = document.getElementById('zRutaB2Ofic').value; 
    z.rec_b2_desv1 = document.getElementById('zRutaB2Desv1').value; 
    z.rec_b2_desv2 = document.getElementById('zRutaB2Desv2').value;
    
    z.b2p = document.getElementById('zHoraB2P').value; 
    z.rec_b2p_ofic = document.getElementById('zRutaB2POfic').value; 
    z.rec_b2p_desv1 = document.getElementById('zRutaB2PDesv1').value; 
    z.rec_b2p_desv2 = document.getElementById('zRutaB2PDesv2').value;
    
    guardarZonas(); 
    cerrarModal('modalEditZona'); 
    alert("✓ Cambios inyectados.");
}

function guardarNuevaZona() { 
    let n = document.getElementById('nuevaZonaNombre').value.trim().toUpperCase(); 
    if(!n) return alert("Nombre vacío."); 
    zonasBD.push({ zona: n }); 
    guardarZonas(); 
    cerrarModal('modalNuevaZona'); 
}

// PLANTILLAS
let uiPl = 'LV', uiTu = 'A1';
function switchPlantilla(p) { 
    uiPl = p; 
    document.querySelectorAll('#vistaPlantillas .tab-btn').forEach(b => b.classList.remove('active')); 
    document.getElementById('tabPl' + p).classList.add('active'); 
    renderizarGestorPlantillas(); 
}

function switchTurnoPlantilla(tu) { 
    uiTu = tu; 
    document.querySelectorAll('#vistaPlantillas .sub-tab-btn').forEach(b => b.classList.remove('active')); 
    document.getElementById('st' + tu).classList.add('active'); 
    renderizarGestorPlantillas(); 
}

function cargarOpcionesZonasSelect() { 
    let sel = document.getElementById('selAgregarZona'); 
    sel.innerHTML = '<option value="">-- Seleccionar --</option>'; 
    zonasBD.forEach(z => sel.innerHTML += `<option value="${z.zona}">ZONA ${z.zona}</option>`); 
}

function guardarPlantillas() { 
    localStorage.setItem('bd_plantillas_smcv', JSON.stringify(plantillasBD)); 
    alert("✓ Plantillas guardadas."); 
}

function renderizarGestorPlantillas() {
    let tbody = document.getElementById('tbodyPlantillaList'); 
    tbody.innerHTML = '';
    let lista = plantillasBD[uiPl][uiTu] || [];
    
    lista.forEach((item, idx) => {
        let badgeColor = item.tipo.includes('BUS') ? 'var(--warning)' : 'var(--accent)';
        let nombreDisplay = /^\d/.test(item.zona) ? `ZONA ${item.zona}` : item.zona;
        
        tbody.insertAdjacentHTML('beforeend', `<tr>
            <td style="text-align:center;">${idx+1}</td>
            <td><b>${nombreDisplay}</b> <span style="font-size:0.75rem; color:${badgeColor}; font-weight: bold; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${item.tipo}</span></td>
            <td style="text-align:center;"><input type="number" class="input-cant" value="${item.cant}" onchange="plantillasBD['${uiPl}']['${uiTu}'][${idx}].cant=parseInt(this.value)||1"></td>
            <td style="text-align:right;"><button class="btn-icon" style="color:var(--danger);" onclick="plantillasBD['${uiPl}']['${uiTu}'].splice(${idx},1); renderizarGestorPlantillas();"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`);
    });
    if(!lista.length) tbody.innerHTML = `<tr><td colspan="4" class="empty-state">Sin turnos asignados.</td></tr>`;
}

function agregarZonaPlantilla() { 
    let z = document.getElementById('selAgregarZona').value;
    let c = parseInt(document.getElementById('cantAgregarZona').value) || 1; 
    if(!z) return; 
    plantillasBD[uiPl][uiTu].push({
        zona: z, 
        cant: c, 
        tipo: document.getElementById('selTipoUnidadAgregar').value
    }); 
    renderizarGestorPlantillas(); 
}

function descargarPlantillaMaestraZonas() { 
    let ws = XLSX.utils.json_to_sheet(zonasBD.map(z => ({ "ZONA": z.zona, "REQ_BUS_48": "", "REQ_VAN_15": "", "REQ_VAN_13": "", "REQ_VAN_09": "" }))); 
    let wb = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(wb, ws, "Demanda_Zonas"); 
    XLSX.writeFile(wb, "Plantilla_Maestra.xlsx"); 
}

function abrirModalCopiarPlantilla() { 
    document.getElementById('lblDestinoCopia').innerText = `[${uiPl}] - [${uiTu}]`; 
    abrirModal('modalCopiarPlantilla'); 
}

function confirmarCopiaPlantilla() { 
    let sp = document.getElementById('selCopiaPlantilla').value;
    let st = document.getElementById('selCopiaTurno').value; 
    
    if(plantillasBD[sp][st]?.length) { 
        plantillasBD[uiPl][uiTu] = JSON.parse(JSON.stringify(plantillasBD[sp][st])); 
        renderizarGestorPlantillas(); 
        cerrarModal('modalCopiarPlantilla'); 
    } else alert("Origen vacío."); 
}

// BUZÓN CAPACITACIÓN
function limpiarCapacitacion() { 
    document.getElementById('txtTituloCapacitacion').value = ''; 
    document.getElementById('txtListaCapacitacion').value = ''; 
}

function guardarCapacitacion() {
    let titulo = document.getElementById('txtTituloCapacitacion').value.trim();
    let listaBruta = document.getElementById('txtListaCapacitacion').value.split('\n');
    let listaLimpia = listaBruta.map(n => normalizarTexto(n)).filter(n => n !== "");
    
    datosCapacitacion = { titulo: titulo, lista: listaLimpia };
    localStorage.setItem('bd_capacitaciones_smcv', JSON.stringify(datosCapacitacion));
    cerrarModal('modalCapacitacion');
    alert(`✓ Registrados ${listaLimpia.length} conductores para: ${titulo || 'CAPACITACIÓN'}`);
}

// PROGRAMACIÓN DIARIA
function procesarCambioFechaProg() {
    let input = document.getElementById('fechaProgInput'); 
    if(!input.value) input.value = new Date().toISOString().split('T')[0];
    
    let d = new Date(input.value + 'T00:00:00'); 
    document.getElementById('tipoPlantillaProg').value = (d.getDay() === 0 || d.getDay() === 6) ? 'SD' : 'LV';
    
    if(!programacionDiaria[input.value]) programacionDiaria[input.value] = [];
    renderizarProgramacion();
}

function guardarProgramacionDiaria() {
    localStorage.setItem('bd_prog_diaria_smcv', JSON.stringify(programacionDiaria));
    alert("✓ Programación guardada correctamente.");
}

function renderizarProgramacion() {
    let fechaSel = document.getElementById('fechaProgInput').value;
    let tipoPlantilla = document.getElementById('tipoPlantillaProg').value;
    let turnoSel = document.getElementById('filtroTurnoProg').value;
    
    let turnosLista = turnoSel !== 'TODOS' ? [turnoSel] : ['A1', 'A2', 'A2P', 'B1', 'B2', 'B2P'];
    let condOptsBase = conductores.filter(c => c.estadoAbrev === 'A' || c.estadoAbrev === 'B' || c.estadoAbrev === 'AL');
    let unidadesBase = unidades.filter(u => u.estado === 'OPERATIVO'); // Las de taller ya no aparecerán aquí
    let regsFecha = programacionDiaria[fechaSel] || [];
    
    let totalFilas = 0, asignados = 0, htmlTabla = '';
    let htmlOpcionesAdicionales = `<option value="">-- Normal --</option>`;
    Object.keys(DIC_ADICIONALES).forEach(k => htmlOpcionesAdicionales += `<option value="${k}">${k}</option>`);
    let htmlOpcionesCarril = '';
    OPCIONES_CARRILES.forEach(c => htmlOpcionesCarril += `<option value="${c}">${c || '-- Carril --'}</option>`);

    turnosLista.forEach(t => {
        let listaZonasTurno = plantillasBD[tipoPlantilla][t] || [];
        listaZonasTurno.forEach(itemPlantilla => {
            let zData = zonasBD.find(z => z.zona === itemPlantilla.zona); 
            if (!zData) return;
            
            let horaDinamica = '--:--';
            if (t === 'A1') horaDinamica = zData.a1; 
            else if (t === 'A2') horaDinamica = (tipoPlantilla === 'LV') ? zData.a2_lv : zData.a2_sd; 
            else if (t === 'A2P') horaDinamica = (tipoPlantilla === 'LV') ? zData.a2p_lv : zData.a2p_sd; 
            else if (t === 'B1') horaDinamica = zData.b1; 
            else if (t === 'B2') horaDinamica = zData.b2; 
            else if (t === 'B2P') horaDinamica = zData.b2p;

            let cantidadRequerida = parseInt(itemPlantilla.cant) || 1;
            
            for (let i = 1; i <= cantidadRequerida; i++) {
                totalFilas++; 
                let key = `${itemPlantilla.zona}_${t}_${i}`; 
                let regEx = regsFecha.find(r => r.key === key) || {};
                
                if (regEx.unidad && regEx.conductor) asignados++;
                
                let txtUnidadMult = cantidadRequerida > 1 ? `<br><small style="color:var(--text-muted)">Unidad ${i} de ${cantidadRequerida}</small>` : '';
                let txtTipoReq = (itemPlantilla.tipo === 'CUALQUIERA' || !itemPlantilla.tipo) ? 'Cualquier Unidad' : itemPlantilla.tipo;
                let nombreDisplay = /^\d/.test(itemPlantilla.zona) ? `ZONA ${itemPlantilla.zona}` : itemPlantilla.zona;

                let uniOptsFiltradas = `<option value="">-- Vehículo --</option>`;
                unidadesBase.forEach(u => {
                    let match = false, tVehiculo = (u.tipoVehiculo || '').toUpperCase(), cap = parseInt(u.capacidad) || 0;
                    if (itemPlantilla.tipo === 'CUALQUIERA' || !itemPlantilla.tipo) match = true;
                    else if ((itemPlantilla.tipo === 'BUS_48' || itemPlantilla.tipo === 'BUS') && tVehiculo.includes('BUS')) match = true;
                    else if (itemPlantilla.tipo === 'VAN_15' && tVehiculo.includes('VAN') && cap >= 14) match = true;
                    else if (itemPlantilla.tipo === 'VAN_13' && tVehiculo.includes('VAN') && cap >= 12) match = true;
                    else if ((itemPlantilla.tipo === 'VAN_09' || itemPlantilla.tipo === 'VAN') && tVehiculo.includes('VAN')) match = true;
                    if (match) uniOptsFiltradas += `<option value="${u.cod}" ${regEx.unidad === u.cod ? 'selected' : ''}>${u.cod}</option>`;
                });

                let condOptsFiltradas = `<option value="">-- Conductor --</option>`;
                condOptsBase.forEach(c => {
                    let tipoC = determinarTipoConductor(c.contrato), matchCond = false, reqTipo = itemPlantilla.tipo || '';
                    if (reqTipo === 'CUALQUIERA' || !reqTipo) matchCond = true;
                    else if (reqTipo.includes('VAN') && (tipoC === 'VAN' || tipoC === 'MINIBUS')) matchCond = true;
                    else if (reqTipo.includes('BUS') && (tipoC === 'BUS' || tipoC === 'MINIBUS')) matchCond = true;
                    if (matchCond) condOptsFiltradas += `<option value="${c.dni}" ${regEx.conductor === c.dni ? 'selected' : ''}>${c.nombre}</option>`;
                });

                let repartoOpts = `<option value="">- N/A -</option>`;
                zonasBD.forEach(z => { repartoOpts += `<option value="${z.zona}" ${regEx.reparto === z.zona ? 'selected' : ''}>Rep. ${z.zona}</option>`; });
                
                let carrilSelect = htmlOpcionesCarril.replace(`value="${regEx.carril || ''}"`, `value="${regEx.carril || ''}" selected`);
                let adicSelect = htmlOpcionesAdicionales.replace(`value="${regEx.adicional || ''}"`, `value="${regEx.adicional || ''}" selected`);

                htmlTabla += `<tr>
                    <td style="font-weight: bold;">${nombreDisplay} ${txtUnidadMult}</td>
                    <td><span class="badge-status status-activo">${t}</span> <br> <span style="font-weight:600; font-size:0.75rem;">${horaDinamica}</span></td>
                    <td><span style="font-size: 0.7rem; font-weight: 800; padding: 2px 4px; border-radius: 4px; background: rgba(0,0,0,0.05); color: var(--accent);">${txtTipoReq}</span></td>
                    <td><select id="uni_${key}" class="select-prog" onchange="updMem('${key}', 'unidad', this.value)">${uniOptsFiltradas}</select></td>
                    <td><select id="cond_${key}" class="select-prog" onchange="updMem('${key}', 'conductor', this.value)">${condOptsFiltradas}</select></td>
                    <td><select class="select-prog" onchange="updMem('${key}', 'reparto', this.value)">${repartoOpts}</select></td>
                    <td><select class="select-prog" onchange="updMem('${key}', 'carril', this.value)">${carrilSelect}</select></td>
                    <td><select class="select-prog" onchange="updMem('${key}', 'adicional', this.value)">${adicSelect}</select></td>
                </tr>`;
            }
        });
    });

    let tbody = document.getElementById('tbodyProgramacion');
    tbody.innerHTML = htmlTabla || `<tr><td colspan="8" class="empty-state">No hay rutas configuradas.</td></tr>`;
    document.getElementById('statAsignaciones').innerText = `${asignados} / ${totalFilas} Asignados`;
}

function updMem(key, campo, valor) {
    let fechaSel = document.getElementById('fechaProgInput').value; 
    if (!programacionDiaria[fechaSel]) programacionDiaria[fechaSel] = [];
    let reg = programacionDiaria[fechaSel].find(r => r.key === key);
    if (!reg) { reg = { key: key }; programacionDiaria[fechaSel].push(reg); }
    reg[campo] = valor;
}

// ROSTER OFICIAL WHATSAPP
function sumar20Min(hStr) {
    let r = String(hStr).trim(); 
    let m = r.match(/(\d{1,2}):(\d{2})/);
    if(!m) return r; 
    let h = parseInt(m[1]), min = parseInt(m[2]); 
    min += 20;
    if(min >= 60) { h++; min -= 60; }
    return `${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}`;
}

function renderizarRosterOficial() {
    let fechaSel = document.getElementById('fechaProgInput').value;
    let dObj = new Date(fechaSel + 'T00:00:00');
    
    let fechaAyerObj = new Date(dObj); 
    fechaAyerObj.setDate(fechaAyerObj.getDate() - 1);
    let ayerStr = fechaAyerObj.toISOString().split('T')[0];
    let progHoy = programacionDiaria[fechaSel] || [];
    let progAyer = programacionDiaria[ayerStr] || null;
    
    let hayCapacitacion = (datosCapacitacion.titulo !== "" && datosCapacitacion.lista.length > 0);
    let headCap = hayCapacitacion ? `<th style="width: 120px; background:#8e44ad;">CAPACITACIÓN</th>` : '';
    
    let tablaHTML = `
        <table class="roster-table" id="tablaFotografia">
            <thead>
                <tr>
                    <th colspan="7" class="roster-header-top">PROGRAMACION RECOJO ZONAS - VEST. SUR / TRUCKSHOP - ZONAS</th>
                    <th colspan="${4 + (hayCapacitacion?1:0)}" class="roster-header-top" style="text-align:right;">${dObj.toLocaleDateString('es-PE', {day:'2-digit', month:'2-digit', year:'numeric'})}</th>
                </tr>
                <tr>
                    <th colspan="7" class="roster-header-sub">EN BASE DEBERAN ESTAR SEGÚN LA HORA ESTIPULADA</th>
                    <th colspan="${4 + (hayCapacitacion?1:0)}" class="roster-header-sub">A1 (Y DEMÁS TURNOS)</th>
                </tr>
                <tr style="background:#f0f0f0;">
                    <th style="width:20px; background:#cc0000; color:white;">N°</th>
                    <th class="col-gris-oscuro">Hr. Ingreso</th>
                    <th class="col-gris-oscuro">Salida Base</th>
                    <th style="width:60px; background:#cc0000; color:white;">Zona</th>
                    <th style="background:#cc0000; color:white;">Hora Inicio Servicio</th>
                    <th class="col-gris-claro">Conductor A</th>
                    <th class="col-gris-oscuro">Tipo Unidad</th>
                    <th class="col-gris-claro">OBSERVACION ZONA</th>
                    <th style="background:#cc0000; color:white;">CARRIL INGRESO</th>
                    <th class="col-gris-claro">OBS. Conductor</th>
                    <th style="background:#3498db; color:white;">ZONA REPARTO</th>
                    ${headCap}
                </tr>
            </thead>
            <tbody>
    `;

    let contadorFilas = 1;
    
    progHoy.forEach(reg => {
        let zName = reg.key.split('_')[0], turno = reg.key.split('_')[1];
        let zObj = zonasBD.find(z => z.zona === zName) || {};
        let condObj = conductores.find(c => c.dni === reg.conductor) || { nombre: '--', contrato: '' };
        let uniObj = unidades.find(u => u.cod === reg.unidad) || { cod: '', tipoVehiculo: '' };
        
        let hrInicioServicio = '--:--';
        if (turno === 'A1') hrInicioServicio = zObj.a1; 
        else if (turno === 'A2') hrInicioServicio = zObj.a2_lv; 
        else if (turno === 'A2P') hrInicioServicio = zObj.a2p_lv; 
        else if (turno === 'B1') hrInicioServicio = zObj.b1; 
        else if (turno === 'B2') hrInicioServicio = zObj.b2; 
        else if (turno === 'B2P') hrInicioServicio = zObj.b2p;

        let hrIngresoFinal = hrInicioServicio; 
        if(reg.adicional && DIC_ADICIONALES[reg.adicional] && DIC_ADICIONALES[reg.adicional].h) { 
            hrIngresoFinal = DIC_ADICIONALES[reg.adicional].h; 
        }
        let hrSalidaFinal = sumar20Min(hrIngresoFinal);

        let bgConductor = ""; 
        if (reg.adicional === "DESCANSO") {
            bgConductor = "background: #f1c40f;";
        } else if (progAyer !== null && reg.conductor) {
            let hizoAyer = progAyer.find(a => a.conductor === reg.conductor);
            let zonaAyer = hizoAyer ? hizoAyer.key.split('_')[0] : null;
            if(zonaAyer && zonaAyer !== zName) { bgConductor = "background: #2ecc71; color: #000; font-weight: bold;"; } 
        }

        let tdUnidad = (uniObj.tipoVehiculo && uniObj.tipoVehiculo.includes('BUS')) 
            ? `<td style="background:#95a5a6; color:#fff; font-weight:bold;">BUS / VOLV <br><small>${uniObj.cod}</small></td>` 
            : `<td style="background:#f39c12; color:#fff; font-weight:bold;">VAN / MERC <br><small>${uniObj.cod}</small></td>`;
        
        let rutaOficial = '';
        if (turno === 'A1') rutaOficial = zObj.rec_a1_ofic; 
        else if (turno === 'A2') rutaOficial = zObj.rec_a2_ofic; 
        else if (turno === 'A2P') rutaOficial = zObj.rec_a2p_ofic; 
        else if (turno === 'B1') rutaOficial = zObj.rec_b1_ofic; 
        else if (turno === 'B2') rutaOficial = zObj.rec_b2_ofic; 
        else if (turno === 'B2P') rutaOficial = zObj.rec_b2p_ofic;

        let tdObsZona = `<td class="celda-texto-largo">${rutaOficial || '-'}</td>`;
        let tdCarril = `<td>${reg.carril || ''}</td>`;
        
        let tdAdic = `<td></td>`;
        if(reg.adicional && DIC_ADICIONALES[reg.adicional]) {
            let d = DIC_ADICIONALES[reg.adicional];
            tdAdic = `<td style="background:${d.bg}; color:${d.col}; font-weight:bold; font-size:0.75rem;">${reg.adicional}</td>`;
        }

        let tdReparto = reg.reparto ? `<td style="background:#3498db; color:white; font-weight:bold;">REPARTO ${reg.reparto}</td>` : `<td></td>`;

        let tdCapacitacion = '';
        if (hayCapacitacion) {
            let nombreNorm = normalizarTexto(condObj.nombre);
            let leToca = datosCapacitacion.lista.some(n => nombreNorm.includes(n) || n.includes(nombreNorm));
            if (leToca) { 
                tdCapacitacion = `<td style="background:#8e44ad; color:white; font-weight:bold; font-size:0.75rem; border:2px solid #000;">${datosCapacitacion.titulo}</td>`; 
            } else { 
                tdCapacitacion = `<td></td>`; 
            }
        }

        tablaHTML += `<tr>
            <td style="background:#cc0000; color:white; font-weight:bold;">${contadorFilas++}</td>
            <td style="background:#c0392b; color:#fff; font-weight:bold;">${hrIngresoFinal || '-'}</td>
            <td class="col-gris-oscuro">${hrSalidaFinal || '-'}</td>
            <td class="col-amarillo">${zName}</td>
            <td class="col-amarillo">${hrInicioServicio || '-'}</td>
            <td style="${bgConductor}">${condObj.nombre}</td>
            ${tdUnidad}
            ${tdObsZona}
            ${tdCarril}
            ${tdAdic}
            ${tdReparto}
            ${tdCapacitacion}
        </tr>`;
    });

    tablaHTML += `</tbody></table>`;
    document.getElementById('contenedorFotoRoster').innerHTML = tablaHTML;
}

function descargarRosterImagen() {
    let node = document.getElementById('tablaFotografia');
    if(!node) return alert("Primero debes cargar una programación.");
    html2canvas(node, { scale: 2 }).then(canvas => {
        let imgURL = canvas.toDataURL("image/jpeg", 1.0);
        let link = document.createElement("a");
        link.download = `Roster_WhatsApp_${document.getElementById('fechaProgInput').value}.jpg`;
        link.href = imgURL; link.click();
    });
}

// BACKUP
function solicitarClaveParaAccion(cb) { 
    callbackAccionPendiente = cb; 
    document.getElementById('claveAdminInput').value = ''; 
    abrirModal('modalVaciar'); 
    setTimeout(() => document.getElementById('claveAdminInput').focus(), 100); 
}

function confirmarVaciarDatos() { 
    if(document.getElementById('claveAdminInput').value === CLAVE_ADMIN_PERMANENTE) { 
        cerrarModal('modalVaciar'); 
        callbackAccionPendiente?.(); 
    } else alert("Clave incorrecta."); 
}

function abrirModalVaciarSeguro(t) { 
    targetVaciar = t; 
    solicitarClaveParaAccion(() => { 
        if(t === 'conductores') { conductores = []; guardarConductores(true); renderizarConductores(); } 
        else { unidades = []; guardarUnidades(true); renderizarUnidades(); } 
        alert("✓ Eliminado."); 
    }); 
}

function exportarRespaldoSistema() {
    try { 
        const data = { 
            conductores: cargarDatosSeguros('bd_conductores_smcv', []), 
            unidades: cargarDatosSeguros('bd_unidades_smcv', []), 
            zonas: cargarDatosSeguros('bd_zonas_oficial_smcv', ZONAS_FABRICA), 
            plantillas: cargarDatosSeguros('bd_plantillas_smcv', {}), 
            programacion: cargarDatosSeguros('bd_prog_diaria_smcv', {}) 
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a"); 
        a.href = URL.createObjectURL(blob); 
        a.download = `Respaldo_SMCV_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a); 
        a.click(); 
        document.body.removeChild(a); 
        URL.revokeObjectURL(a.href);
    } catch(e) { alert("Error: " + e.message); }
}

function importarRespaldoSistema(e) {
    const file = e.target.files[0]; 
    if (!file) return; 
    const r = new FileReader();
    r.onload = function(evt) { 
        try { 
            const d = JSON.parse(evt.target.result);
            if(d.conductores) localStorage.setItem('bd_conductores_smcv', JSON.stringify(d.conductores));
            if(d.unidades) localStorage.setItem('bd_unidades_smcv', JSON.stringify(d.unidades));
            if(d.zonas) localStorage.setItem('bd_zonas_oficial_smcv', JSON.stringify(d.zonas));
            if(d.plantillas) localStorage.setItem('bd_plantillas_smcv', JSON.stringify(d.plantillas));
            if(d.programacion) localStorage.setItem('bd_prog_diaria_smcv', JSON.stringify(d.programacion));
            
            alert("✓ RESTAURADO. Refrescando..."); 
            location.reload(); 
        } catch(err) { alert("Error: " + err.message); } 
        e.target.value = ''; 
    }; 
    r.readAsText(file);
}

// ARRANQUE DEL SISTEMA
window.onload = async function() { 
    aplicarTema(localStorage.getItem('planner_theme') || 'cerro-verde'); 
    
    try {
        let [resCond, resUni] = await Promise.all([
            fetch(URL_API_CONDUCTORES + "?t=" + new Date().getTime()),
            fetch(URL_API_UNIDADES + "?t=" + new Date().getTime())
        ]);
        if(resCond.ok) { let dC = await resCond.json(); if(dC && dC.length > 0) { conductores = dC; guardarConductores(false); } }
        if(resUni.ok) { let dU = await resUni.json(); if(dU && dU.length > 0) { unidades = dU; guardarUnidades(false); } }
    } catch(e) {
        console.log("Modo offline o error de red. Cargando datos locales.");
    }

    actualizarFiltrosDinamicos();
    actualizarFiltrosDinamicosUnidades();
    renderizarConductores();
    renderizarUnidades();
    actualizarDashboard();
    cambiarVista('dashboard'); 
};

// ==========================================
// IMPORTAR EXCEL DEL PLANNER DE MANTENIMIENTO
// ==========================================
function importarExcelMantenimiento(e) {
    let file = e.target.files[0];
    if(!file) return;
    let r = new FileReader();
    r.onload = function(evt) {
        try {
            let dataArr = new Uint8Array(evt.target.result);
            let wb = XLSX.read(dataArr, {type: 'array'});
            let sheet = wb.Sheets[wb.SheetNames[0]];
            
            // Leemos el Excel como un "tablero de ajedrez" (Array 2D) para buscar los encabezados estén donde estén
            let rows = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: ""});
            
            let actualizadosCount = 0;
            let idxCod = -1, idxLugar = -1, idxObs = -1;

            // 1. Limpiamos el día: Ponemos TODAS a Operativo y borramos las novedades
            unidades.forEach(u => { 
                u.estado = 'OPERATIVO'; 
                u.mantenimiento = ''; 
                u.prioridadTurnoA = false; 
            });

            // 2. Escaneamos fila por fila buscando los datos
            rows.forEach(row => {
                // Buscamos si en esta fila están los títulos
                let tempCod = row.findIndex(cell => String(cell).toUpperCase().trim() === 'CODIGO' || String(cell).toUpperCase().trim() === 'CÓDIGO');
                let tempLugar = row.findIndex(cell => String(cell).toUpperCase().trim() === 'LUGAR');
                let tempObs = row.findIndex(cell => String(cell).toUpperCase().trim() === 'OBSERVACIONES');
                
                if (tempCod !== -1) idxCod = tempCod;
                if (tempLugar !== -1) idxLugar = tempLugar;
                if (tempObs !== -1) idxObs = tempObs;

                // Si ya encontramos dónde están los códigos y los lugares, empezamos a leer datos
                if (idxCod !== -1) {
                    let codVal = String(row[idxCod]).toUpperCase().trim();
                    let lugarVal = idxLugar !== -1 ? String(row[idxLugar]).toUpperCase().trim() : '';

                    // Evitamos procesar los encabezados de nuevo
                    if (codVal && codVal !== 'CODIGO' && codVal !== 'CÓDIGO') {
                        
                        // INTELIGENCIA DE LIMPIEZA: El planner manda "0-681" o "V-189". Lo limpiamos a "681" y "V189"
                        let codLimpio = codVal.replace(/[^A-Z0-9]/g, '').replace(/^0+/, ''); 
                        
                        // Buscamos la unidad haciendo el cruce con la misma limpieza
                        let uEncontrada = unidades.find(u => {
                            let cBase = String(u.codigo || u.cod || '').toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^0+/, '');
                            return cBase === codLimpio;
                        });

                        // Si la unidad existe en tu BD, la sentenciamos al Taller
                        if (uEncontrada) {
                            uEncontrada.estado = 'TALLER';
                            uEncontrada.mantenimiento = lugarVal || 'MANTTO';
                            
                            // Regla de Oro: Si va a Autrisa o Divemotor, forzamos prioridad en Turno A
                            if (lugarVal.includes("AUTRISA") || lugarVal.includes("BASE 1") || lugarVal.includes("DIVE")) {
                                uEncontrada.prioridadTurnoA = true;
                            }
                            actualizadosCount++;
                        }
                    }
                }
            });

            guardarUnidades();
            actualizarFiltrosDinamicosUnidades();
            renderizarUnidades();
            alert(`✓ Importación exitosa. Se pasaron a TALLER ${actualizadosCount} unidades según el reporte.`);
        } catch(err) {
            alert("Error al leer el Excel de mantenimiento: " + err.message);
        }
        e.target.value = '';
    };
    r.readAsArrayBuffer(file);
}
