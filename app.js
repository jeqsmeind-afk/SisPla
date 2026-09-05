const CLAVE_ADMIN_PERMANENTE = "J0s3hp";
let targetVaciar = '', callbackAccionPendiente = null;
let idxConductorEdit = null, idxUnidadEdit = null, idxZonaEdit = null;

// LA BASE COMPLETA DE ZONAS
const ZONAS_FABRICA = [
    {"zona":"1","rec_a1_ofic":"OVALO CCORITOS (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"OVALO CCORITOS (CONF. DESVIO SUPERVISOR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)","rec_b1_desv1":"","rec_b2_ofic":"OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)","rec_b2_desv1":"","rec_b2p_ofic":"OVALO CCORITOS (CONF. DESVIO SUPERVISOR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"1A","rec_a1_ofic":"COLEGIO HORACIO ZEBALLOS (RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a1_desv1":"","rec_a2_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a2_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"COLEGIO HORACIO ZEB (RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b1_desv1":"","rec_b2_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2p_ofic":"COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2p_desv1":"COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1B","rec_a1_ofic":"PLAZA DE CHARACATO (RUTA REGULAR) (RECOJE AV. PAISAJISTA SI LEVENTAN LA MANO)","rec_a1_desv1":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_a2_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PLAZA DE CHARACATO (RECOJE AV. PAISAJISTA SI LEVENTAN LA MANO)","rec_b1_desv1":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2_desv1":"","rec_b2p_ofic":"PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)","rec_b2p_desv1":"","a1":"04:45:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1B SB","rec_a1_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a1_desv1":"","rec_a2_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b1_desv1":"","rec_b2_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2_desv1":"","rec_b2p_ofic":"GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:47:30","a2_sd":"05:48:00","a2p_lv":"05:47:30","a2p_sd":"05:48:00","b1":"16:55:00","b2":"17:38:00","b2p":"17:38:00"},
    {"zona":"1C","rec_a1_ofic":"COLISEO DE GALLOS","rec_a1_desv1":"","rec_a2_ofic":"COLISEO DE GALLOS  (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"COLISEO DE GALLOS (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"COLISEO DE GALLOS (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"COLISEO DE GALLOS  (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1D","rec_a1_ofic":"LA CAMPIÑA (DESVIA AV UNION - CALLE HUACHO - CALLE OROLLA - AV SOCABAYA)","rec_a1_desv1":"LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a2_ofic":"LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"LA CAMPIÑA (DESVIA AV UNION - CALLE HUACHO - CALLE OROLLA - AV SOCABAYA)","rec_b1_desv1":"LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2_ofic":"LA CAMPIÑA (DESVIA UNION, CALLE HUACHO, OROYA,  PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2_desv1":"","rec_b2p_ofic":"LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"1D CJ","rec_a1_ofic":"CALLE JULY / AV. CARACAS (S. M. SOCABAYA, CONVENCIONES)","rec_a1_desv1":"","rec_a2_ofic":"CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)","rec_b1_desv1":"","rec_b2_ofic":"CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)","rec_b2_desv1":"","rec_b2p_ofic":"CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:54:30","a2_sd":"05:55:00","a2p_lv":"05:54:30","a2p_sd":"05:55:00","b1":"NO HAY","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"2A","rec_a1_ofic":"POSTA SAN JUAN (INGRESA CASA LAGO)","rec_a1_desv1":"","rec_a2_ofic":"POSTA SAN JUAN ( O. TERMINAL - M. FORGA - PT. SAN ISIDRO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"POSTA SAN JUAN (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"POSTA SAN JUAN (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"POSTA SAN JUAN ( O. TERMINAL - M. FORGA - PT. SAN ISIDRO)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"2B","rec_a1_ofic":"MCDO. INMACULADA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)","rec_a2_desv1":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS) (INGRESA A CASA LAGO)","rec_a2p_ofic":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)(INGRESA CASA LAGO)","rec_a2p_desv1":"","rec_b1_ofic":"MCDO. INMACULADA (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)","rec_b2_desv1":"","rec_b2p_ofic":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)","rec_b2p_desv1":"MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS) (INGRESA A CASA LAGO)","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:35:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"2B (MANITOS)","rec_a1_ofic":"AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO","rec_a1_desv1":"","rec_a2_ofic":"AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO","rec_b1_desv1":"","rec_b2_ofic":"AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO","rec_b2_desv1":"","rec_b2p_ofic":"AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"16:55:00","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"3","rec_a1_ofic":"AV LIMA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"AV LIMA (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"AV LIMA (RECOJE TODA AV. VENEZUELA)","rec_b1_desv1":"","rec_b2_ofic":"AV LIMA (RECOJE TODA AV. VENEZUELA)","rec_b2_desv1":"","rec_b2p_ofic":"AV LIMA (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"05:44:30","a2p_sd":"05:45:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"3A","rec_a1_ofic":"PARQUE 1ERO DE MAYO(COMANDANTE CANGA - PARIS-AV LOS INCAS)","rec_a1_desv1":"","rec_a2_ofic":"PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS-AV LOS INCAS)","rec_a2_desv1":"","rec_a2p_ofic":"PARQUE 1ERO DE MAYO(COMANDANTE CANGA - PARIS-AV LOS INCAS)","rec_a2p_desv1":"","rec_b1_ofic":"PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS - AV LOS INCAS - DOLORES - VENEZUELA) (DEVIA FERNANDINI)","rec_b1_desv1":"","rec_b2_ofic":"PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS - AV LOS INCAS - DOLORES - VENEZUELA) (DEVIA FERNANDINI)","rec_b2_desv1":"","rec_b2p_ofic":"PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS-AV LOS INCAS)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:40:00","b2":"17:30:00","b2p":"17:30:00"},
    {"zona":"3B","rec_a1_ofic":"ALAMEDA DOLORES ( LAMBRAMANI - INCAS)","rec_a1_desv1":"","rec_a2_ofic":"ALAMEDA DOLORES ( LAMBRAMANI - INCAS)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"ALAMEDA DOLORES (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"ALAMEDA DOLORES (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"ALAMEDA DOLORES ( LAMBRAMANI - INCAS)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"4","rec_a1_ofic":"PLAZA EL PORVENIR (RUTA REGULAR)","rec_a1_desv1":"PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)","rec_a2_ofic":"PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PLAZA EL PORVENIR (RUTA REGULAR)","rec_b1_desv1":"PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)","rec_b2_ofic":"PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)","rec_b2_desv1":"","rec_b2p_ofic":"PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"4 TE","rec_a1_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (CONTINUA RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (RUTA REGULAR)","rec_a2p_desv1":"","rec_b1_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)","rec_b1_desv1":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)","rec_b2_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"NO HAY","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5","rec_a1_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"MDO. APURIMAC (RUTA REGULAR) (RECOJO DETRÁS DE CDS)","rec_a2p_desv1":"","rec_b1_ofic":"MDO. APURIMAC  (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"MDO. APURIMAC  (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"MDO. APURIMAC (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5A","rec_a1_ofic":"CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )","rec_a1_desv1":"","rec_a2_ofic":"CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"5B","rec_a1_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"PARQUE FRANCISCO MOSTAJO (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"6/7 Y","rec_a1_ofic":"CLINICA AREQUIPA (EMMEL - J. S. CHOCANO - PEUNTE BOLIVAR - FERNANDINI)","rec_a1_desv1":"","rec_a2_ofic":"CLINICA AREQUIPA (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"CLINICA AREQUIPA (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)","rec_b1_desv1":"","rec_b2_ofic":"CLINICA AREQUIPA (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)","rec_b2_desv1":"","rec_b2p_ofic":"CLINICA AREQUIPA (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"6/7 E","rec_a1_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_a1_desv1":"","rec_a2_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_a2_desv1":"","rec_a2p_ofic":"AV. AMAZONAS CON AV. RAMON CASTILLA (ALTURA DE ESTADIO BOLOGNESI) (RECOJO DETRÁS DE CDS) (CONTINUA RECOJO HASTA MAX UHLE","rec_a2p_desv1":"","rec_b1_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b1_desv1":"","rec_b2_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b2_desv1":"","rec_b2p_ofic":"SECTOR 13 (COLEGIO CIRCA)","rec_b2p_desv1":"","a1":"04:50:00","a2_lv":"05:44:30","a2_sd":"05:45:00","a2p_lv":"5:52 REF","a2p_sd":"05:45:00","b1":"16:40:00","b2":"17:35:00","b2p":"17:35:00"},
    {"zona":"6/7 BA","rec_a1_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"EL AZUFRAL (RUTA REGULAR)","rec_b2p_desv1":"","a1":"04:45:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:35:00","b2":"17:30:00","b2p":"17:30:00"},
    {"zona":"8","rec_a1_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"VIA 54 / SOR ANA - RECOJO HASTA AVIACION - (DESVIA AV AEROPUERTO) (DESVIA TABOADA - PERALES)","rec_a2_desv1":"INKAFARMA - (INGRESA UCAYALI)  (RECOJO HASTA AVIACION) (DESVIA TABOADA - PERALES)","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_b1_desv1":"VIA 54 / SOR ANA - RECOJO HASTA AVIACION -  (DESVIA TABOADA - PERALES)","rec_b2_ofic":"VIA 54 / SOR ANA (RUTA REGULAR)","rec_b2_desv1":"VIA 54 / SOR ANA - RECOJO HASTA AVIACION -  (DESVIA TABOADA - PERALES)","rec_b2p_ofic":"VIA 54 / SOR ANA - RECOJO HASTA AVIACION - (DESVIA AV AEROPUERTO) (DESVIA TABOADA - PERALES)","rec_b2p_desv1":"INKAFARMA - (INGRESA UCAYALI)  (RECOJO HASTA AVIACION) (DESVIA TABOADA - PERALES)","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:25:00","b2":"17:20:00","b2p":"17:20:00"},
    {"zona":"8 CE","rec_a1_ofic":"GRIFO CERREÑO (CONTINUA RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"GRIFO CERREÑO (COMPLETA RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"GRIFO CERREÑO (COMPLETA RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"GRIFO CERREÑO (COMPLETA RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"GRIFO CERREÑO (COMPLETA RUTA REGULAR)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:52:30","a2_sd":"05:53:00","a2p_lv":"05:52:30","a2p_sd":"05:53:00","b1":"NO HAY","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"8A 17","rec_a1_ofic":"KM 17 (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"KM 17 (RUTA REGULAR)","rec_b1_desv1":"KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)","rec_b2_ofic":"KM 17 (RECOJO REGULAR HASTA CRUCE EVITAMIENTO (DESVIA TUMBES - JOSE OLAYA - RECORR. 8B)","rec_b2_desv1":"KM 17 (ENTR. APIPA - PARALELA VIA YURA - PTE AÑASHUAYCO 2 - TUMBES - JOSE OLAYA - RECORR. 8B)","rec_b2p_ofic":"KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)","rec_b2p_desv1":"","a1":"04:40:00","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"16:20:00","b2":"17:15:00","b2p":"17:15:00"},
    {"zona":"8A 17 (CORITOS)","rec_a1_ofic":"PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)","rec_a1_desv1":"","rec_a2_ofic":"PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)","rec_b1_desv1":"","rec_b2_ofic":"PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)","rec_b2_desv1":"","rec_b2p_ofic":"PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"NO HAY","b2":"17:25:00","b2p":"17:25:00"},
    {"zona":"8A EV","rec_a1_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_a2p_desv1":"AVIACION / EVITAMIENTO (RECOGE TRIANGULO - CONF. GPS)","rec_b1_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:39:30","a2_sd":"05:40:00","a2p_lv":"05:39:30","a2p_sd":"05:40:00","b1":"NO HAY","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"8B","rec_a1_ofic":"27 DE NOVIEMBRE (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"27 DE NOVIEMBRE (RUTA REGULAR) (RECOJO HASTA AV AREQUIPA / TIABAYA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"27 DE NOVIEMBRE (RUTA REGULAR - 27 DE NOVIEMBRE CON ALFONSO UGARTE)","rec_b1_desv1":"","rec_b2_ofic":"27 DE NOVIEMBRE (RUTA REGULAR - 27 DE NOVIEMBRE CON ALFONSO UGARTE)","rec_b2_desv1":"","rec_b2p_ofic":"27 DE NOVIEMBRE (RUTA REGULAR) (RECOJO HASTA AV AREQUIPA / TIABAYA)","rec_b2p_desv1":"","a1":"04:55:00","a2_lv":"05:49:30","a2_sd":"05:50:00","a2p_lv":"05:49:30","a2p_sd":"05:50:00","b1":"16:45:00","b2":"17:40:00","b2p":"17:40:00"},
    {"zona":"8B VB","rec_a1_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_a2p_desv1":"","rec_b1_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"VALLE BLANCO (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:05:00","a2_lv":"05:54:30","a2_sd":"05:55:00","a2p_lv":"05:54:30","a2p_sd":"05:55:00","b1":"16:50:00","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"8C","rec_a1_ofic":"CASA CAMPO (INGRESA A ALTO CERRO VERDE)","rec_a1_desv1":"","rec_a2_ofic":"CASA CAMPO (RECOJE ARANCOTA)","rec_a2_desv1":"","rec_a2p_ofic":"CASA CAMPO (RECOJE ARANCOTA) (SOLO TRIANGULO) APOYO A CDS (COMO ULTIMA UNIDAD)","rec_a2p_desv1":"","rec_b1_ofic":"CASA CAMPO (RECOJE ARANCOTA)","rec_b1_desv1":"","rec_b2_ofic":"CASA CAMPO (RECOJE ARANCOTA)","rec_b2_desv1":"","rec_b2p_ofic":"CASA CAMPO (RECOJE ARANCOTA)","rec_b2p_desv1":"","a1":"05:05:00","a2_lv":"06:00:00","a2_sd":"06:00:00","a2p_lv":"06:00:00","a2p_sd":"06:00:00","b1":"17:05:00","b2":"18:00:00","b2p":"18:00:00"},
    {"zona":"8P","rec_a1_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_a1_desv1":"","rec_a2_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_a2p_desv1":"","rec_b1_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"ANGELES DE CAYMA (RUTA REGULAR)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:54:30","a2_sd":"05:55:00","a2p_lv":"05:54:30","a2p_sd":"05:55:00","b1":"NO HAY","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"11/12 H","rec_a1_ofic":"OVALO HUNTER (NO INGRESA A TIABAYA)","rec_a1_desv1":"","rec_a2_ofic":"OVALO HUNTER (NO INGRESA A TIABAYA)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"OVALO HUNTER (NO INGRESA A TIABAYA)","rec_b1_desv1":"","rec_b2_ofic":"OVALO HUNTER (NO INGRESA A TIABAYA)","rec_b2_desv1":"","rec_b2p_ofic":"OVALO HUNTER (NO INGRESA A TIABAYA)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"05:59:30","a2_sd":"06:00:00","a2p_lv":"05:59:30","a2p_sd":"06:00:00","b1":"NO HAY","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"11/12 HT","rec_a1_ofic":"OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)","rec_a1_desv1":"OVALO HUNTER (RUTA REGULAR) (INGRESA A ALTO CERRO VERDE)","rec_a2_ofic":"OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)","rec_b1_desv1":"","rec_b2_ofic":"OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)","rec_b2_desv1":"","rec_b2p_ofic":"OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:00:00","a2_lv":"05:59:30","a2_sd":"06:00:00","a2p_lv":"05:59:30","a2p_sd":"06:00:00","b1":"16:50:00","b2":"17:45:00","b2p":"17:45:00"},
    {"zona":"11/12 T","rec_a1_ofic":"COCA COLA / TIABAYA","rec_a1_desv1":"","rec_a2_ofic":"COCA COLA - TIABAYA (SUR - TRIANGULO) (DETENERSE EN TRIANGULO Y PREGUNTAR SI BAJAN O NO)","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"COCA COLA / TIABAYA","rec_b1_desv1":"","rec_b2_ofic":"COCA COLA / TIABAYA","rec_b2_desv1":"","rec_b2p_ofic":"COCA COLA - TIABAYA (SUR - TRIANGULO) (DETENERSE EN TRIANGULO Y PREGUNTAR SI BAJAN O NO)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"06:20:00","a2_sd":"06:20:00","a2p_lv":"06:20:00","a2p_sd":"06:20:00","b1":"NO HAY","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"11/12 C","rec_a1_ofic":"ESTADIO CONGATA","rec_a1_desv1":"","rec_a2_ofic":"ESTADIO CONGATA (RUTA REGULAR)","rec_a2_desv1":"","rec_a2p_ofic":"ESTADIO CONGATA (SUR Y TRIANGULO) - INGRESA A ALTO CERRO VERDE / APOYA A CDS","rec_a2p_desv1":"","rec_b1_ofic":"ESTADIO CONGATA","rec_b1_desv1":"","rec_b2_ofic":"ESTADIO CONGATA","rec_b2_desv1":"","rec_b2p_ofic":"ESTADIO CONGATA (RUTA REGULAR)","rec_b2p_desv1":"","a1":"05:20:00","a2_lv":"06:20:00","a2_sd":"06:20:00","a2p_lv":"06:20:00","a2p_sd":"06:20:00","b1":"17:20:00","b2":"18:20:00","b2p":"18:20:00"},
    {"zona":"VAN AUXILIAR SUR","rec_a1_ofic":"GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_a1_desv1":"","rec_a2_ofic":"GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b1_desv1":"","rec_b2_ofic":"GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b2_desv1":"","rec_b2p_ofic":"GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b2p_desv1":"","a1":"SUP.","a2_lv":"SUP.","a2_sd":"SUP.","a2p_lv":"SUP.","a2p_sd":"SUP.","b1":"SUP.","b2":"SUP.","b2p":"SUP."},
    {"zona":"VAN AUXILIAR NORTE","rec_a1_ofic":"GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_a1_desv1":"","rec_a2_ofic":"GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b1_desv1":"","rec_b2_ofic":"GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b2_desv1":"","rec_b2p_ofic":"GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo '0' Esperar en Grifo Alata","rec_b2p_desv1":"","a1":"SUP.","a2_lv":"SUP.","a2_sd":"SUP.","a2p_lv":"SUP.","a2p_sd":"SUP.","b1":"SUP.","b2":"SUP.","b2p":"SUP."},
    {"zona":"RRBB COMPLEJO","rec_a1_ofic":"Complejo / Relaves Bajos / Apoyo 11/12 Cong. (A2)","rec_a1_desv1":"","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"Complejo (Recoge usuarios Bombas y transborda en puente Tiabaya con van de DOM, solo lleva usuarios Relaves Bajos y Proyectos Drenes)","rec_a2p_desv1":"","rec_b1_ofic":"Complejo / Relaves Bajos","rec_b1_desv1":"Ap. Administrativo (Almancen 1 / Triangulo / Zona  /  Rel. Bajos","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"5:25 (REF)","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"GPS","a2p_sd":"NO HAY","b1":"17:20:00","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"RRBB TIABAYA","rec_a1_ofic":"Posta Tiabaya / Relaves Bajos / Apoyo 11/12 Cong. (A2)","rec_a1_desv1":"Posta Tiabaya / Relaves Bajos / Apoyo 11/12 Cong. (A2P)","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"Posta Tiabaya / Relaves Bajos","rec_b1_desv1":"Tiabaya (Coca Cola) / Relaves Bajos","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"5:35 (REF)","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"17:30 (PT) / 17:40 (CC)","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"RRBB TAHUAYCANI","rec_a1_ofic":"Tahuaycani / Relaves Bajos","rec_a1_desv1":"Apoyo Zona 8 (LETRERO LUMINOS OBLIGATORIO) / Tahuaycani / Relaves Bajos","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"Tahuaycani (Recoge usuarios Bombas y transborda en puente Tiabaya con van de DOM, solo lleva usuarios Relaves Bajos y Proyectos Drenes)","rec_a2p_desv1":"","rec_b1_ofic":"Tahuaycani / Relaves Bajos","rec_b1_desv1":"","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"5:25 (REF)","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"GPS","a2p_sd":"NO HAY","b1":"17:20:00","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"RRBB TINGO","rec_a1_ofic":"Alameda Tingo / Tiabaya / Alto Cerro Verde / Relaves Bajos","rec_a1_desv1":"Apoyo Zona 1D (LETRERO LUMINOSO OBLIGATORIO) / Alam. Tingo / Tiabaya / Alto Cerro Verde / Relaves Bajos","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"Alameda Tingo / Relaves Bajos","rec_b1_desv1":"","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"5:30 (REF)","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"17:25:00","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"RRBB CONGATA","rec_a1_ofic":"Estadio Congata / Relaves Bajos","rec_a1_desv1":"","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"Estadio Congata / Relaves Bajos","rec_b1_desv1":"","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"05:45:00","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"17:45:00","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"TAJO","rec_a1_ofic":"Operaciones Mina (confirmar si sube con adicional)","rec_a1_desv1":"","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"","rec_a2p_desv1":"","rec_b1_ofic":"Operaciones Mina (confirmar si sube con adicional)","rec_b1_desv1":"","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"","rec_b2p_desv1":"","a1":"SUP.","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"NO HAY","a2p_sd":"NO HAY","b1":"SUP.","b2":"NO HAY","b2p":"NO HAY"},
    {"zona":"Triangulo - Mina","rec_a1_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_a1_desv1":"Apoyo Domicilios - Base 2 (confirmar Coordinador Domicilios)","rec_a2_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_a2_desv1":"","rec_a2p_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_a2p_desv1":"","rec_b1_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_b1_desv1":"","rec_b2_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_b2_desv1":"","rec_b2p_ofic":"Triangulo (confirmar recorrido con coordinador Adicionales)","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"05:30:00","a2p_sd":"05:30:00","b1":"NO HAY","b2":"NO HAY","b2p":"16:30:00"},
    {"zona":"BOMBAS","rec_a1_ofic":"","rec_a1_desv1":"","rec_a2_ofic":"","rec_a2_desv1":"","rec_a2p_ofic":"Puente Tiabaya a Bombas / Salida de Bombas 07:40 a Salaverry","rec_a2p_desv1":"","rec_b1_ofic":"","rec_b1_desv1":"","rec_b2_ofic":"","rec_b2_desv1":"","rec_b2p_ofic":"Puente Tiabaya a Bombas / Salida de Bombas 19:40 a Salaverry","rec_b2p_desv1":"","a1":"NO HAY","a2_lv":"NO HAY","a2_sd":"NO HAY","a2p_lv":"GPS","a2p_sd":"GPS","b1":"NO HAY","b2":"NO HAY","b2p":"GPS"}
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

// CARGA DE DATOS SEGUROS
function cargarDatosSeguros(k, fb) { 
    try { 
        let d = localStorage.getItem(k); 
        return d ? JSON.parse(d) : fb; 
    } catch(e) { 
        return fb; 
    } 
}

let conductores = cargarDatosSeguros('bd_conductores_smcv', []);
let unidades = cargarDatosSeguros('bd_unidades_smcv', []);
let zonasBD = cargarDatosSeguros('bd_zonas_oficial_smcv', ZONAS_FABRICA);
let plantillasBD = cargarDatosSeguros('bd_plantillas_smcv', { LV: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, SD: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, FER: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]} });
let programacionDiaria = cargarDatosSeguros('bd_prog_diaria_smcv', {});
let datosCapacitacion = cargarDatosSeguros('bd_capacitaciones_smcv', { titulo: "", lista: [] });

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

function cambiarVista(v) {
    document.querySelectorAll('.view-section, .nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById('vista' + v.charAt(0).toUpperCase() + v.slice(1)).classList.add('active');
    
    let navBtn = document.getElementById('btnNav' + v.charAt(0).toUpperCase() + v.slice(1)); 
    if(navBtn) navBtn.classList.add('active');
    
    if(v === 'dashboard') actualizarDashboard();
    else if(v === 'conductores') renderizarConductores();
    else if(v === 'unidades') renderizarUnidades();
    else if(v === 'zonas') renderizarZonas();
    else if(v === 'plantillas') { cargarOpcionesZonasSelect(); renderizarGestorPlantillas(); }
    else if(v === 'programacion') procesarCambioFechaProg();
    else if(v === 'roster') renderizarRosterOficial();
}

// DASHBOARD
function actualizarDashboard() {
    let hoy = new Date(); 
    document.getElementById('dashFechaActual').innerText = hoy.toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    let act = conductores.filter(c => c.estado === 'ACTIVO').length; 
    document.getElementById('kpiConductoresActivos').innerText = act;
    
    let op = unidades.filter(u => u.estado === 'OPERATIVO').length; 
    document.getElementById('kpiUnidadesOperativas').innerText = op;
    
    document.getElementById('kpiPorcentajeFlota').innerText = `${unidades.length > 0 ? Math.round((op / unidades.length) * 100) : 0}%`;
    
    let vans = 0, buses = 0; 
    unidades.forEach(u => { 
        let t = (u.tipoVehiculo || '').toUpperCase(); 
        if(t.includes('VAN')) vans++; 
        else if(t.includes('BUS')) buses++; 
    });
    
    document.getElementById('cntVans').innerText = vans; 
    document.getElementById('cntBuses').innerText = buses;
    
    let seg = document.querySelectorAll('#barComposicionFlota .progress-bar-segment');
    let totalUni = unidades.length || 1;
    if(seg.length >= 2){ 
        seg[0].style.width = `${(vans/totalUni)*100}%`; 
        seg[1].style.width = `${(buses/totalUni)*100}%`; 
    }
    
    let acV = 0, acM = 0, acB = 0;
    conductores.filter(c => c.estado === 'ACTIVO').forEach(c => { 
        let t = determinarTipoConductor(c.contrato); 
        if(t === 'VAN') acV++; 
        else if(t === 'MINIBUS') acM++; 
        else if(t === 'BUS') acB++; 
    });
    
    document.getElementById('cntAcredVan').innerText = acV; 
    document.getElementById('cntAcredMinibus').innerText = acM; 
    document.getElementById('cntAcredBus').innerText = acB;
}

// FORMATOS Y MAESTROS
function formatearFechaExcelOS(val) { 
    if (!val) return ''; 
    if (typeof val === 'number') { 
        let d = new Date(Math.round((val - (25567 + 2)) * 86400 * 1000)); 
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`; 
    } 
    let s = String(val).trim(); 
    if (!isNaN(s) && Number(s) > 30000) { 
        let d = new Date(Math.round((Number(s) - (25567 + 2)) * 86400 * 1000)); 
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`; 
    } 
    let p = s.split('-'); 
    if (p.length === 3 && p[0].length === 4) return `${p[2]}/${p[1]}/${p[0]}`; 
    return s.replace(/-/g, '/'); 
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
    let t = (contrato || '').toUpperCase().trim(); 
    if (t.endsWith(' M') || t.includes('MINI') || t.includes('MINIBUS')) return 'MINIBUS'; 
    if (t.includes('PROFESIONAL') || t.includes('BUS')) return 'BUS'; 
    return 'VAN'; 
}

// GUARDADOS
function guardarConductores() { localStorage.setItem('bd_conductores_smcv', JSON.stringify(conductores)); actualizarDashboard(); }
function guardarUnidades() { localStorage.setItem('bd_unidades_smcv', JSON.stringify(unidades)); actualizarDashboard(); }
function guardarZonas() { localStorage.setItem('bd_zonas_oficial_smcv', JSON.stringify(zonasBD)); renderizarZonas(); }

// CONDUCTORES (Sincronización con Google Sheets)
const URL_API_CONDUCTORES = "https://script.google.com/macros/s/AKfycbwYiiV2_-zSTcLUft_xcPTXl03LxcyTNcZ2l2u8RfTtPsrvyrzOcPR9NVJCd4AxhLfR/exec"; // <-- PEGA TU ENLACE AQUÍ

async function sincronizarConductores() {
    let btn = document.getElementById('btnSyncConductores');
    if(btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sincronizando...';
    
    try {
        let response = await fetch(URL_API_CONDUCTORES);
        let data = await response.json();
        
        conductores = data; 
        guardarConductores();
        actualizarFiltrosDinamicos(); // <-- Actualiza el menú desplegable automáticamente
        renderizarConductores();
        alert("✓ Base de conductores sincronizada desde Google Sheets.");
    } catch(e) {
        alert("Error de conexión: " + e.message);
    } finally {
        if(btn) btn.innerHTML = '<i class="fa-solid fa-rotate"></i> Sincronizar Sheets';
    }
}

function renderizarConductores() { 
    let tbody = document.getElementById('tbodyConductores'); 
    if(!tbody) return;
    tbody.innerHTML = ''; 
    
    // Capturamos los valores
    let txt = document.getElementById('searchConductores').value.toUpperCase().trim(); 
    let selectCargo = document.getElementById('filtroCargoCond');
    let fCargo = selectCargo ? selectCargo.value : 'TODOS';
    let selectServicio = document.getElementById('filtroServicioCond');
    let fServicio = selectServicio ? selectServicio.value : 'TODOS';
    
    conductores.forEach((c) => { 
        // 1. Filtro Buscador
        if (txt && !c.dni.includes(txt) && !c.nombre.toUpperCase().includes(txt)) return; 
        
        // 2. Filtro Cargo
        let cat = determinarTipoConductor(c.contrato);
        if (fCargo !== 'TODOS' && cat !== fCargo) return;
        
        // 3. Filtro Servicio (Exacto)
        let serv = (c.servicio || '').toUpperCase();
        if (fServicio !== 'TODOS' && serv !== fServicio) return;
        
        let edad = obtenerEdadProcesada(c.nac); 
        let badgeClass = cat === 'BUS' ? 'badge-bus' : (cat === 'MINIBUS' ? 'badge-minibus' : 'badge-van');
        
        let est = (c.estadoAbrev || '').toUpperCase();
        let colorText = '#1e293b', colorBg = '#e2e8f0'; 
        
        // Colores de Estados extendidos según tu Excel
        if (est === 'A' || est === 'B') { colorText = '#065f46'; colorBg = '#d1fae5'; } 
        else if (est === 'ADI' || est === 'PA' || est === 'MO' || est === 'MT') { colorText = '#b45309'; colorBg = '#fef3c7'; } 
        else if (est === 'AL') { colorText = '#1d4ed8'; colorBg = '#dbeafe'; } 
        else if (est === 'V' || est === 'DT' || est === 'I' || est === 'D' || est === 'NC') { colorText = '#991b1b'; colorBg = '#fee2e2'; } 

        tbody.insertAdjacentHTML('beforeend', `<tr>
            <td>${c.dni}</td>
            <td>${c.nombre}</td>
            <td>${edad.texto}</td>
            <td>${obtenerTiempoLaborandoExacto(c.ing)}</td>
            <td><span class="badge-unit ${badgeClass}">${c.contrato || c.tipo}</span></td>
            <td style="font-weight: 700; font-size: 0.75rem; color: #0284c7;">${serv || '-'}</td>
            <td><span style="background:${colorBg}; color:${colorText}; padding:4px 8px; border-radius:4px; font-weight:700; font-size:0.75rem; cursor:help;" title="${c.estadoDesc}">${est}</span></td>
            <td><i class="fa-solid fa-lock" style="color:var(--text-muted); opacity:0.4;" title="Controlado desde Google Sheets"></i></td>
        </tr>`); 
    }); 
}

// UNIDADES
function procesarArchivoUnidades(e) { 
    let file = e.target.files[0]; 
    if(!file) return; 
    let r = new FileReader(); 
    r.onload = function(evt) { 
        try { 
            let wb = XLSX.read(new Uint8Array(evt.target.result), {type: 'array'}); 
            let json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval: ""}); 
            let nuevos = []; 
            json.forEach(row => { 
                let kCod = Object.keys(row).find(k => k.toUpperCase().includes("COD")); 
                let kPlaca = Object.keys(row).find(k => k.toUpperCase().includes("PLACA")); 
                let kTipo = Object.keys(row).find(k => k.toUpperCase().includes("TIPO")); 
                let kMarca = Object.keys(row).find(k => k.toUpperCase().includes("MARCA")); 
                let kCap = Object.keys(row).find(k => k.toUpperCase().includes("CAPACIDAD")); 
                
                if(kCod && String(row[kCod]).trim()) {
                    nuevos.push({ 
                        cod: String(row[kCod]).trim(), 
                        placa: kPlaca ? String(row[kPlaca]).trim().toUpperCase() : '', 
                        tipoVehiculo: kTipo ? String(row[kTipo]).trim().toUpperCase() : 'VAN', 
                        marca: kMarca ? String(row[kMarca]).trim().toUpperCase() : '', 
                        capacidad: kCap ? String(row[kCap]).trim() : '15', 
                        servicio: 'REGULAR', 
                        estado: 'OPERATIVO' 
                    }); 
                }
            }); 
            if(nuevos.length && confirm(`¿Importar ${nuevos.length} unidades?`)) { 
                unidades = nuevos; 
                guardarUnidades(); 
                renderizarUnidades(); 
            } 
        } catch(err) { alert("Error: " + err.message); } 
        e.target.value = ''; 
    }; 
    r.readAsArrayBuffer(file); 
}

function renderizarUnidades() { 
    let tbody = document.getElementById('tbodyUnidades'); 
    tbody.innerHTML = ''; 
    let fE = document.getElementById('filtroEstadoUnidades').value;
    let fT = document.getElementById('filtroTipoUnidades').value;
    let txt = document.getElementById('searchUnidades').value.toUpperCase().trim(); 
    
    unidades.forEach((u, idx) => { 
        if (fE !== 'TODOS' && u.estado !== fE) return; 
        if (fT !== 'TODOS' && !(u.tipoVehiculo || '').toUpperCase().includes(fT)) return; 
        if (txt && !u.cod.includes(txt) && !u.placa.includes(txt)) return; 
        
        let statusClass = u.estado === 'OPERATIVO' ? 'status-operativo' : 'status-taller';
        
        tbody.insertAdjacentHTML('beforeend', `<tr>
            <td>${u.cod}</td>
            <td><b>${u.placa}</b></td>
            <td>${u.tipoVehiculo}</td>
            <td>${u.capacidad}</td>
            <td>${u.servicio}</td>
            <td><span class="badge-status ${statusClass}">${u.estado}</span></td>
            <td><button class="btn btn-outline" onclick="abrirModalEditUnidad(${idx})"><i class="fa-solid fa-pen"></i></button></td>
        </tr>`); 
    }); 
}

function abrirModalNuevaUnidad() { 
    ['nuevoCodUnidad','nuevaPlaca','nuevaMarca','nuevaCapacidad'].forEach(id => document.getElementById(id).value = ''); 
    abrirModal('modalNuevaUnidad'); 
}

function guardarNuevaUnidad() { 
    unidades.push({ 
        cod: document.getElementById('nuevoCodUnidad').value.trim(), 
        placa: document.getElementById('nuevaPlaca').value.trim().toUpperCase(), 
        tipoVehiculo: document.getElementById('nuevoTipoVehiculo').value, 
        marca: document.getElementById('nuevaMarca').value.trim().toUpperCase(), 
        capacidad: document.getElementById('nuevaCapacidad').value, 
        servicio: document.getElementById('nuevoServicio').value, 
        estado: 'OPERATIVO' 
    }); 
    guardarUnidades(); 
    renderizarUnidades(); 
    cerrarModal('modalNuevaUnidad'); 
}

function abrirModalEditUnidad(idx) { 
    idxUnidadEdit = idx; 
    document.getElementById('editCodUnidad').value = unidades[idx].cod; 
    document.getElementById('editPlacaUnidad').value = unidades[idx].placa; 
    document.getElementById('editServicioUnidad').value = unidades[idx].servicio || 'LIBRE'; 
    document.getElementById('editEstadoUnidad').value = unidades[idx].estado; 
    abrirModal('modalEditUnidad'); 
}

function guardarCambiosUnidad() { 
    unidades[idxUnidadEdit].servicio = document.getElementById('editServicioUnidad').value; 
    unidades[idxUnidadEdit].estado = document.getElementById('editEstadoUnidad').value; 
    guardarUnidades(); 
    renderizarUnidades(); 
    cerrarModal('modalEditUnidad'); 
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

function actualizarFiltrosDinamicos() {
    let selectServicio = document.getElementById('filtroServicioCond');
    if (!selectServicio) return;
    
    let valorActual = selectServicio.value;
    
    // Extrae los servicios únicos de la data sincronizada de Sheets
    let serviciosUnicos = [...new Set(conductores.map(c => (c.servicio || '').toUpperCase().trim()))].filter(s => s !== '');
    serviciosUnicos.sort();
    
    let html = '<option value="TODOS">Servicio: Todos</option>';
    serviciosUnicos.forEach(serv => {
        let selected = (serv === valorActual) ? 'selected' : '';
        html += `<option value="${serv}" ${selected}>${serv}</option>`;
    });
    
    selectServicio.innerHTML = html;
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

function procesarArchivoPlantillaMaestra(e) {
    let file = e.target.files[0]; 
    if(!file) return; 
    let r = new FileReader(); 
    r.onload = function(evt) {
        try { 
            let wb = XLSX.read(new Uint8Array(evt.target.result), {type: 'array'}); 
            let json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval: ""}); 
            let agregados = 0; 
            plantillasBD[uiPl][uiTu] = []; 
            
            json.forEach(row => {
                let kZona = Object.keys(row).find(k => k.toUpperCase() === "ZONA"); 
                let kBus48 = Object.keys(row).find(k => k.toUpperCase().includes("BUS_48")); 
                let kVan15 = Object.keys(row).find(k => k.toUpperCase().includes("VAN_15")); 
                let kVan13 = Object.keys(row).find(k => k.toUpperCase().includes("VAN_13")); 
                let kVan09 = Object.keys(row).find(k => k.toUpperCase().includes("VAN_09"));
                
                if(kZona && String(row[kZona]).trim()) {
                    let z = String(row[kZona]).trim(); 
                    let cB48 = parseInt(row[kBus48])||0, cV15 = parseInt(row[kVan15])||0, cV13 = parseInt(row[kVan13])||0, cV09 = parseInt(row[kVan09])||0;
                    
                    if(cB48 > 0) { plantillasBD[uiPl][uiTu].push({zona: z, cant: cB48, tipo: 'BUS_48'}); agregados++; }
                    if(cV15 > 0) { plantillasBD[uiPl][uiTu].push({zona: z, cant: cV15, tipo: 'VAN_15'}); agregados++; }
                    if(cV13 > 0) { plantillasBD[uiPl][uiTu].push({zona: z, cant: cV13, tipo: 'VAN_13'}); agregados++; }
                    if(cV09 > 0) { plantillasBD[uiPl][uiTu].push({zona: z, cant: cV09, tipo: 'VAN_09'}); agregados++; }
                }
            }); 
            guardarPlantillas(); 
            renderizarGestorPlantillas(); 
            alert(`✓ Importados ${agregados} requerimientos.`);
        } catch(err) { alert("Error: " + err.message); } 
        e.target.value = '';
    }; 
    r.readAsArrayBuffer(file);
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
    let condOptsBase = conductores.filter(c => c.estado === 'ACTIVO');
    let unidadesBase = unidades.filter(u => u.estado === 'OPERATIVO');
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

        let tdUnidad = (uniObj.tipoVehiculo.includes('BUS')) 
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
        if(t === 'conductores') { conductores = []; guardarConductores(); renderizarConductores(); } 
        else { unidades = []; guardarUnidades(); renderizarUnidades(); } 
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

// INICIO AUTOMÁTICO
window.onload = function() { 
    aplicarTema(localStorage.getItem('planner_theme') || 'cerro-verde'); 
    actualizarFiltrosDinamicos(); // <-- Carga los servicios guardados localmente al iniciar
    cambiarVista('dashboard'); 
};
