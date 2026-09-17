const CLAVE_ADMIN_PERMANENTE = "J0s3hp";
let targetVaciar = '', callbackAccionPendiente = null;
let idxConductorEdit = null, idxUnidadEdit = null, idxZonaEdit = null;

// --- VARIABLES GLOBALES PARA FILTROS CRUZADOS DE UNIDADES ---
let fActivoUnidadTipo = 'TODOS';
let fActivoUnidadServicio = 'TODOS';

// LA BASE COMPLETA DE ZONAS
const ZONAS_FABRICA = [
    {"zona": "1", "rec_a1_ofic": "OVALO CCORITOS (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "OVALO CCORITOS (CONF. DESVIO SUPERVISOR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)", "rec_b1_desv1": "", "rec_b2_ofic": "OVALO CCORITOS (CONFIRMA DESVIO SUPERVISOR)", "rec_b2_desv1": "", "rec_b2p_ofic": "OVALO CCORITOS (CONF. DESVIO SUPERVISOR)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:45:00", "b2": "17:40:00", "b2p": "17:40:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1A", "rec_a1_ofic": "COLEGIO HORACIO ZEBALLOS (RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a1_desv1": "", "rec_a2_ofic": "COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a2_desv1": "COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "COLEGIO HORACIO ZEB (RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b1_desv1": "", "rec_b2_ofic": "COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2_desv1": "COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2p_ofic": "COLEGIO HORACIO ZEB (SI INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2p_desv1": "COLEGIO HORACIO ZEB (NO INGRESA A 04 DE OCTUBRE)(RETOMA GODOFREDO MANRIQUE)(RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "a1": "04:40:00", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "16:35:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1B", "rec_a1_ofic": "PLAZA DE CHARACATO (RUTA REGULAR) (RECOJE AV. PAISAJISTA SI LEVENTAN LA MANO)", "rec_a1_desv1": "PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)", "rec_a2_ofic": "PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "PLAZA DE CHARACATO (RECOJE AV. PAISAJISTA SI LEVENTAN LA MANO)", "rec_b1_desv1": "PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)", "rec_b2_ofic": "PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)", "rec_b2_desv1": "", "rec_b2p_ofic": "PLAZA DE CHARACATO (RECOJO HASTA GRIFO SABANDIA)", "rec_b2p_desv1": "", "a1": "04:45:00", "a2_lv": "05:44:30", "a2_sd": "05:45:00", "a2p_lv": "05:44:30", "a2p_sd": "05:45:00", "b1": "16:35:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1B SB", "rec_a1_ofic": "GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a1_desv1": "", "rec_a2_ofic": "GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b1_desv1": "", "rec_b2_ofic": "GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2_desv1": "", "rec_b2p_ofic": "GRIFO SABANDIA (CONTINUA RECOJO DE ZONA) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:47:30", "a2_sd": "05:48:00", "a2p_lv": "05:47:30", "a2p_sd": "05:48:00", "b1": "16:55:00", "b2": "17:38:00", "b2p": "17:38:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1C", "rec_a1_ofic": "COLISEO DE GALLOS", "rec_a1_desv1": "", "rec_a2_ofic": "COLISEO DE GALLOS  (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "COLISEO DE GALLOS (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "COLISEO DE GALLOS (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "COLISEO DE GALLOS  (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "05:00:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:45:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1D", "rec_a1_ofic": "LA CAMPIÑA (DESVIA AV UNION - CALLE HUACHO - CALLE OROLLA - AV SOCABAYA)", "rec_a1_desv1": "LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a2_ofic": "LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "LA CAMPIÑA (DESVIA AV UNION - CALLE HUACHO - CALLE OROLLA - AV SOCABAYA)", "rec_b1_desv1": "LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2_ofic": "LA CAMPIÑA (DESVIA UNION, CALLE HUACHO, OROYA,  PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2_desv1": "", "rec_b2p_ofic": "LA CAMPIÑA (DESVIA UNION, HUACHO, OROYA, PAISAJISTA, PTE. NUEVO) (RECOJE AV. PAISAJISTA SI LEVANTAN LA MANO)", "rec_b2p_desv1": "", "a1": "04:50:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "1D CJ", "rec_a1_ofic": "CALLE JULY / AV. CARACAS (S. M. SOCABAYA, CONVENCIONES)", "rec_a1_desv1": "", "rec_a2_ofic": "CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)", "rec_b1_desv1": "", "rec_b2_ofic": "CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)", "rec_b2_desv1": "", "rec_b2p_ofic": "CALLE JULY / AV. CARACAS (AV. FRANCISCO MOSTAJO  - AV. BELLAVISTA - AV. AREQUIPA - AV. BRASILIA)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:54:30", "a2_sd": "05:55:00", "a2p_lv": "05:54:30", "a2p_sd": "05:55:00", "b1": "NO HAY", "b2": "17:45:00", "b2p": "17:45:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "2A", "rec_a1_ofic": "POSTA SAN JUAN (INGRESA CASA LAGO)", "rec_a1_desv1": "", "rec_a2_ofic": "POSTA SAN JUAN ( O. TERMINAL - M. FORGA - PT. SAN ISIDRO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "POSTA SAN JUAN (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "POSTA SAN JUAN (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "POSTA SAN JUAN ( O. TERMINAL - M. FORGA - PT. SAN ISIDRO)", "rec_b2p_desv1": "", "a1": "04:50:00", "a2_lv": "05:44:30", "a2_sd": "05:45:00", "a2p_lv": "05:44:30", "a2p_sd": "05:45:00", "b1": "16:35:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "2B", "rec_a1_ofic": "MCDO. INMACULADA (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)", "rec_a2_desv1": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS) (INGRESA A CASA LAGO)", "rec_a2p_ofic": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)(INGRESA CASA LAGO)", "rec_a2p_desv1": "", "rec_b1_ofic": "MCDO. INMACULADA (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)", "rec_b2_desv1": "", "rec_b2p_ofic": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS)", "rec_b2p_desv1": "MCDO. INMACULADA (RUTA REGULAR  X ENCIMA TODOS BYPASS) (INGRESA A CASA LAGO)", "a1": "04:50:00", "a2_lv": "05:44:30", "a2_sd": "05:45:00", "a2p_lv": "05:44:30", "a2p_sd": "05:45:00", "b1": "16:35:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "2B (MANITOS)", "rec_a1_ofic": "AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO", "rec_a1_desv1": "", "rec_a2_ofic": "AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO", "rec_b1_desv1": "", "rec_b2_ofic": "AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO", "rec_b2_desv1": "", "rec_b2p_ofic": "AV. DOLORES / AV. LOS INCAS (MANITOS) INGRESA CASA LAGO", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "16:55:00", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "3", "rec_a1_ofic": "AV LIMA (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "AV LIMA (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "AV LIMA (RECOJE TODA AV. VENEZUELA)", "rec_b1_desv1": "", "rec_b2_ofic": "AV LIMA (RECOJE TODA AV. VENEZUELA)", "rec_b2_desv1": "", "rec_b2p_ofic": "AV LIMA (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "04:50:00", "a2_lv": "05:44:30", "a2_sd": "05:45:00", "a2p_lv": "05:44:30", "a2p_sd": "05:45:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "3A", "rec_a1_ofic": "PARQUE 1ERO DE MAYO(COMANDANTE CANGA - PARIS-AV LOS INCAS)", "rec_a1_desv1": "", "rec_a2_ofic": "PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS-AV LOS INCAS)", "rec_a2_desv1": "", "rec_a2p_ofic": "PARQUE 1ERO DE MAYO(COMANDANTE CANGA - PARIS-AV LOS INCAS)", "rec_a2p_desv1": "", "rec_b1_ofic": "PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS - AV LOS INCAS - DOLORES - VENEZUELA) (DEVIA FERNANDINI)", "rec_b1_desv1": "", "rec_b2_ofic": "PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS - AV LOS INCAS - DOLORES - VENEZUELA) (DEVIA FERNANDINI)", "rec_b2_desv1": "", "rec_b2p_ofic": "PARQUE 1ERO DE MAYO (COMANDANTE CANGA - PARIS-AV LOS INCAS)", "rec_b2p_desv1": "", "a1": "04:50:00", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "16:40:00", "b2": "17:30:00", "b2p": "17:30:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "3B", "rec_a1_ofic": "ALAMEDA DOLORES ( LAMBRAMANI - INCAS)", "rec_a1_desv1": "", "rec_a2_ofic": "ALAMEDA DOLORES ( LAMBRAMANI - INCAS)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "ALAMEDA DOLORES (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "ALAMEDA DOLORES (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "ALAMEDA DOLORES ( LAMBRAMANI - INCAS)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "4", "rec_a1_ofic": "PLAZA EL PORVENIR (RUTA REGULAR)", "rec_a1_desv1": "PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)", "rec_a2_ofic": "PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "PLAZA EL PORVENIR (RUTA REGULAR)", "rec_b1_desv1": "PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)", "rec_b2_ofic": "PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)", "rec_b2_desv1": "", "rec_b2p_ofic": "PLAZA EL PORVENIR (DESVIA POR TENIENTE RODRIGUEZ / PROGRESO/ VENEZUELA)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "4 TE", "rec_a1_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (CONTINUA RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (RUTA REGULAR)", "rec_a2p_desv1": "", "rec_b1_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)", "rec_b1_desv1": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)", "rec_b2_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "TENIENTE RODRIGUEZ CON RAMON CASTILLA (COMPLETA RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "NO HAY", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "5", "rec_a1_ofic": "MDO. APURIMAC (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "MDO. APURIMAC (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "MDO. APURIMAC (RUTA REGULAR) (RECOJO DETRÁS DE CDS)", "rec_a2p_desv1": "", "rec_b1_ofic": "MDO. APURIMAC  (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "MDO. APURIMAC  (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "MDO. APURIMAC (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "5A", "rec_a1_ofic": "CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )", "rec_a1_desv1": "", "rec_a2_ofic": "CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "CALLE UGARTE / JR. LEONCIO PRADO (RUTA REGULAR )", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:45:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "5B", "rec_a1_ofic": "PARQUE FRANCISCO MOSTAJO  (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "PARQUE FRANCISCO MOSTAJO  (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "PARQUE FRANCISCO MOSTAJO  (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "PARQUE FRANCISCO MOSTAJO  (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "PARQUE FRANCISCO MOSTAJO  (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "6/7 Y", "rec_a1_ofic": "CLINICA AREQUIPA  (EMMEL - J. S. CHOCANO - PEUNTE BOLIVAR - FERNANDINI)", "rec_a1_desv1": "", "rec_a2_ofic": "CLINICA AREQUIPA  (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "CLINICA AREQUIPA  (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)", "rec_b1_desv1": "", "rec_b2_ofic": "CLINICA AREQUIPA  (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)", "rec_b2_desv1": "", "rec_b2p_ofic": "CLINICA AREQUIPA  (EMMEL - J. S. CHOCANO - PUENTE BOLIVAR - FERNANDINI)", "rec_b2p_desv1": "", "a1": "05:00:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:45:00", "b2": "17:40:00", "b2p": "17:40:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "6/7 E", "rec_a1_ofic": "SECTOR 13 (COLEGIO CIRCA)", "rec_a1_desv1": "", "rec_a2_ofic": "SECTOR 13 (COLEGIO CIRCA)", "rec_a2_desv1": "", "rec_a2p_ofic": "AV. AMAZONAS CON AV. RAMON CASTILLA (ALTURA DE ESTADIO BOLOGNESI)  (RECOJO DETRÁS DE CDS) (CONTINUA RECOJO HASTA MAX UHLE", "rec_a2p_desv1": "", "rec_b1_ofic": "SECTOR 13 (COLEGIO CIRCA)", "rec_b1_desv1": "", "rec_b2_ofic": "SECTOR 13 (COLEGIO CIRCA)", "rec_b2_desv1": "", "rec_b2p_ofic": "SECTOR 13 (COLEGIO CIRCA)", "rec_b2p_desv1": "", "a1": "04:50:00", "a2_lv": "05:44:30", "a2_sd": "05:45:00", "a2p_lv": "5:52 REF", "a2p_sd": "05:45:00", "b1": "16:40:00", "b2": "17:35:00", "b2p": "17:35:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "6/7 BA", "rec_a1_ofic": "EL AZUFRAL (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "EL AZUFRAL (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "EL AZUFRAL (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "EL AZUFRAL (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "EL AZUFRAL (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "04:45:00", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "16:35:00", "b2": "17:30:00", "b2p": "17:30:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8", "rec_a1_ofic": "VIA 54 / SOR ANA (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "VIA 54 / SOR ANA - RECOJO HASTA AVIACION - (DESVIA AV AEROPUERTO) (DESVIA TABOADA - PERALES)", "rec_a2_desv1": "INKAFARMA - (INGRESA UCAYALI)  (RECOJO HASTA AVIACION) (DESVIA TABOADA - PERALES)", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "VIA 54 / SOR ANA (RUTA REGULAR)", "rec_b1_desv1": "VIA 54 / SOR ANA - RECOJO HASTA AVIACION -  (DESVIA TABOADA - PERALES)", "rec_b2_ofic": "VIA 54 / SOR ANA (RUTA REGULAR)", "rec_b2_desv1": "VIA 54 / SOR ANA - RECOJO HASTA AVIACION -  (DESVIA TABOADA - PERALES)", "rec_b2p_ofic": "VIA 54 / SOR ANA - RECOJO HASTA AVIACION - (DESVIA AV AEROPUERTO) (DESVIA TABOADA - PERALES)", "rec_b2p_desv1": "INKAFARMA - (INGRESA UCAYALI)  (RECOJO HASTA AVIACION) (DESVIA TABOADA - PERALES)", "a1": "04:40:00", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "16:25:00", "b2": "17:20:00", "b2p": "17:20:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8 CE", "rec_a1_ofic": "GRIFO CERREÑO (CONTINUA RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "GRIFO CERREÑO (COMPLETA RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "GRIFO CERREÑO (COMPLETA RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "GRIFO CERREÑO (COMPLETA RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "GRIFO CERREÑO (COMPLETA RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:52:30", "a2_sd": "05:53:00", "a2p_lv": "05:52:30", "a2p_sd": "05:53:00", "b1": "NO HAY", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8A 17", "rec_a1_ofic": "KM 17 (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "KM 17 (RUTA REGULAR)", "rec_b1_desv1": "KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)", "rec_b2_ofic": "KM 17 (RECOJO REGULAR HASTA CRUCE EVITAMIENTO (DESVIA TUMBES - JOSE OLAYA - RECORR. 8B)", "rec_b2_desv1": "KM 17 (ENTR. APIPA - PARALELA VIA YURA - PTE AÑASHUAYCO 2 - TUMBES - JOSE OLAYA - RECORR. 8B)", "rec_b2p_ofic": "KM 17 ( DESVIA EVITAMIENTO, SOL OESTE, AV PUNO , INCAS, ROMANCERO, KOLA REAL, HUARANGUILLO)", "rec_b2p_desv1": "", "a1": "04:40:00", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "16:20:00", "b2": "17:15:00", "b2p": "17:15:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8A 17 (CORITOS)", "rec_a1_ofic": "PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)", "rec_a1_desv1": "", "rec_a2_ofic": "PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)", "rec_b1_desv1": "", "rec_b2_ofic": "PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)", "rec_b2_desv1": "", "rec_b2p_ofic": "PARQUE CCORITOS II (AV.TUMBES-JOSE OLAYA-RECORR 8B) (RECOJO SOLO C.EVITAMIENTO)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "NO HAY", "b2": "17:25:00", "b2p": "17:25:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8A EV", "rec_a1_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_a2p_desv1": "AVIACION / EVITAMIENTO (RECOGE TRIANGULO - CONF. GPS)", "rec_b1_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "AVIACION / EVITAMIENTO (COMPLETA RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:39:30", "a2_sd": "05:40:00", "a2p_lv": "05:39:30", "a2p_sd": "05:40:00", "b1": "NO HAY", "b2": "17:40:00", "b2p": "17:40:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8B", "rec_a1_ofic": "27 DE NOVIEMBRE (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "27 DE NOVIEMBRE (RUTA REGULAR) (RECOJO HASTA AV AREQUIPA / TIABAYA)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "27 DE NOVIEMBRE (RUTA REGULAR - 27 DE NOVIEMBRE CON ALFONSO UGARTE)", "rec_b1_desv1": "", "rec_b2_ofic": "27 DE NOVIEMBRE (RUTA REGULAR - 27 DE NOVIEMBRE CON ALFONSO UGARTE)", "rec_b2_desv1": "", "rec_b2p_ofic": "27 DE NOVIEMBRE (RUTA REGULAR) (RECOJO HASTA AV AREQUIPA / TIABAYA)", "rec_b2p_desv1": "", "a1": "04:55:00", "a2_lv": "05:49:30", "a2_sd": "05:50:00", "a2p_lv": "05:49:30", "a2p_sd": "05:50:00", "b1": "16:45:00", "b2": "17:40:00", "b2p": "17:40:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8B VB", "rec_a1_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_a2p_desv1": "", "rec_b1_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "VALLE BLANCO (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "05:05:00", "a2_lv": "05:54:30", "a2_sd": "05:55:00", "a2p_lv": "05:54:30", "a2p_sd": "05:55:00", "b1": "16:50:00", "b2": "17:45:00", "b2p": "17:45:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8C", "rec_a1_ofic": "CASA CAMPO (INGRESA A ALTO CERRO VERDE)", "rec_a1_desv1": "", "rec_a2_ofic": "CASA CAMPO (RECOJE ARANCOTA)", "rec_a2_desv1": "", "rec_a2p_ofic": "CASA CAMPO (RECOJE ARANCOTA) (SOLO TRIANGULO) APOYO A CDS (COMO ULTIMA UNIDAD)", "rec_a2p_desv1": "", "rec_b1_ofic": "CASA CAMPO (RECOJE ARANCOTA)", "rec_b1_desv1": "", "rec_b2_ofic": "CASA CAMPO (RECOJE ARANCOTA)", "rec_b2_desv1": "", "rec_b2p_ofic": "CASA CAMPO (RECOJE ARANCOTA)", "rec_b2p_desv1": "", "a1": "05:05:00", "a2_lv": "06:00:00", "a2_sd": "06:00:00", "a2p_lv": "06:00:00", "a2p_sd": "06:00:00", "b1": "17:05:00", "b2": "18:00:00", "b2p": "18:00:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "8P", "rec_a1_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_a1_desv1": "", "rec_a2_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_a2p_desv1": "", "rec_b1_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "ANGELES DE CAYMA (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:54:30", "a2_sd": "05:55:00", "a2p_lv": "05:54:30", "a2p_sd": "05:55:00", "b1": "NO HAY", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "11/12 H", "rec_a1_ofic": "OVALO HUNTER (NO INGRESA A TIABAYA)", "rec_a1_desv1": "", "rec_a2_ofic": "OVALO HUNTER (NO INGRESA A TIABAYA)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "OVALO HUNTER (NO INGRESA A TIABAYA)", "rec_b1_desv1": "", "rec_b2_ofic": "OVALO HUNTER (NO INGRESA A TIABAYA)", "rec_b2_desv1": "", "rec_b2p_ofic": "OVALO HUNTER (NO INGRESA A TIABAYA)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "05:59:30", "a2_sd": "06:00:00", "a2p_lv": "05:59:30", "a2p_sd": "06:00:00", "b1": "NO HAY", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "11/12 HT", "rec_a1_ofic": "OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)", "rec_a1_desv1": "OVALO HUNTER (RUTA REGULAR) (INGRESA A ALTO CERRO VERDE)", "rec_a2_ofic": "OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)", "rec_b1_desv1": "", "rec_b2_ofic": "OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)", "rec_b2_desv1": "", "rec_b2p_ofic": "OVALO HUNTER (INGRESA A TIABAYA) (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "05:00:00", "a2_lv": "05:59:30", "a2_sd": "06:00:00", "a2p_lv": "05:59:30", "a2p_sd": "06:00:00", "b1": "16:50:00", "b2": "17:45:00", "b2p": "17:45:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "11/12 T", "rec_a1_ofic": "COCA COLA / TIABAYA", "rec_a1_desv1": "", "rec_a2_ofic": "COCA COLA - TIABAYA (SUR - TRIANGULO) (DETENERSE EN TRIANGULO Y PREGUNTAR SI BAJAN O NO)", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "COCA COLA / TIABAYA", "rec_b1_desv1": "", "rec_b2_ofic": "COCA COLA / TIABAYA", "rec_b2_desv1": "", "rec_b2p_ofic": "COCA COLA - TIABAYA (SUR - TRIANGULO) (DETENERSE EN TRIANGULO Y PREGUNTAR SI BAJAN O NO)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "06:20:00", "a2_sd": "06:20:00", "a2p_lv": "06:20:00", "a2p_sd": "06:20:00", "b1": "NO HAY", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "11/12 C", "rec_a1_ofic": "ESTADIO CONGATA", "rec_a1_desv1": "", "rec_a2_ofic": "ESTADIO CONGATA (RUTA REGULAR)", "rec_a2_desv1": "", "rec_a2p_ofic": "ESTADIO CONGATA (SUR Y TRIANGULO) - INGRESA A ALTO CERRO VERDE / APOYA A CDS", "rec_a2p_desv1": "", "rec_b1_ofic": "ESTADIO CONGATA", "rec_b1_desv1": "", "rec_b2_ofic": "ESTADIO CONGATA", "rec_b2_desv1": "", "rec_b2p_ofic": "ESTADIO CONGATA (RUTA REGULAR)", "rec_b2p_desv1": "", "a1": "05:20:00", "a2_lv": "06:20:00", "a2_sd": "06:20:00", "a2p_lv": "06:20:00", "a2p_sd": "06:20:00", "b1": "17:20:00", "b2": "18:20:00", "b2p": "18:20:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "VAN AUXILIAR SUR", "rec_a1_ofic": "GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_a1_desv1": "", "rec_a2_ofic": "GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b1_desv1": "", "rec_b2_ofic": "GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b2_desv1": "", "rec_b2p_ofic": "GRIFO MONTERREY (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b2p_desv1": "", "a1": "SUP.", "a2_lv": "SUP.", "a2_sd": "SUP.", "a2p_lv": "SUP.", "a2p_sd": "SUP.", "b1": "SUP.", "b2": "SUP.", "b2p": "SUP.", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "VAN AUXILIAR NORTE", "rec_a1_ofic": "GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_a1_desv1": "", "rec_a2_ofic": "GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b1_desv1": "", "rec_b2_ofic": "GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b2_desv1": "", "rec_b2p_ofic": "GRIFO CERREÑO (CONFIRMAR SUPERVISOR) / Termino de recojo \"0\" Esperar en Grifo Alata con partida GPS", "rec_b2p_desv1": "", "a1": "SUP.", "a2_lv": "SUP.", "a2_sd": "SUP.", "a2p_lv": "SUP.", "a2p_sd": "SUP.", "b1": "SUP.", "b2": "SUP.", "b2p": "SUP.", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "RRBB COMPLEJO", "rec_a1_ofic": "Complejo / Relaves Bajos / Apoyo 11/12 Cong. (A2)", "rec_a1_desv1": "", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "Complejo (Recoge usuarios Bombas y transborda en puente Tiabaya con van de DOM, solo lleva usuarios Relaves Bajos y Proyectos Drenes)", "rec_a2p_desv1": "", "rec_b1_ofic": "Complejo / Relaves Bajos", "rec_b1_desv1": "Ap. Administrativo (Almancen 1 / Triangulo / Zona  /  Rel. Bajos", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "5:25 (REF)", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "GPS", "a2p_sd": "NO HAY", "b1": "17:20:00", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "RRBB TIABAYA", "rec_a1_ofic": "Posta Tiabaya / Relaves Bajos / Apoyo 11/12 Cong. (A2)", "rec_a1_desv1": "Posta Tiabaya / Relaves Bajos / Apoyo 11/12 Cong. (A2P)", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "Posta Tiabaya / Relaves Bajos", "rec_b1_desv1": "Tiabaya (Coca Cola) / Relaves Bajos", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "5:35 (REF)", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "17:30 (PT) / 17:40 (CC)", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "RRBB TAHUAYCANI", "rec_a1_ofic": "Tahuaycani / Relaves Bajos", "rec_a1_desv1": "Apoyo Zona 8 (LETRERO LUMINOS OBLIGATORIO) / Tahuaycani / Relaves Bajos", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "Tahuaycani (Recoge usuarios Bombas y transborda en puente Tiabaya con van de DOM, solo lleva usuarios Relaves Bajos y Proyectos Drenes)", "rec_a2p_desv1": "", "rec_b1_ofic": "Tahuaycani / Relaves Bajos", "rec_b1_desv1": "", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "5:25 (REF)", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "GPS", "a2p_sd": "NO HAY", "b1": "17:20:00", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "RRBB TINGO", "rec_a1_ofic": "Alameda Tingo / Tiabaya / Alto Cerro Verde / Relaves Bajos", "rec_a1_desv1": "Apoyo Zona 1D (LETRERO LUMINOSO OBLIGATORIO) / Alam. Tingo / Tiabaya / Alto Cerro Verde / Relaves Bajos", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "Alameda Tingo / Relaves Bajos", "rec_b1_desv1": "", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "5:30 (REF)", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "17:25:00", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "RRBB CONGATA", "rec_a1_ofic": "Estadio Congata / Relaves Bajos", "rec_a1_desv1": "", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "Estadio Congata / Relaves Bajos", "rec_b1_desv1": "", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "05:45:00", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "17:45:00", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "TAJO", "rec_a1_ofic": "Operaciones Mina (confirmar si sube con adicional)", "rec_a1_desv1": "", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "", "rec_a2p_desv1": "", "rec_b1_ofic": "Operaciones Mina (confirmar si sube con adicional)", "rec_b1_desv1": "", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "", "rec_b2p_desv1": "", "a1": "SUP.", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "NO HAY", "a2p_sd": "NO HAY", "b1": "SUP.", "b2": "NO HAY", "b2p": "NO HAY", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "Triangulo - Mina", "rec_a1_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_a1_desv1": "Apoyo Domicilios - Base 2 (confirmar Coordinador Domicilios)", "rec_a2_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_a2_desv1": "", "rec_a2p_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_a2p_desv1": "", "rec_b1_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_b1_desv1": "", "rec_b2_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_b2_desv1": "", "rec_b2p_ofic": "Triangulo (confirmar recorrido con coordinador Adicionales)", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "05:30:00", "a2p_sd": "05:30:00", "b1": "NO HAY", "b2": "NO HAY", "b2p": "16:30:00", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""},
    {"zona": "BOMBAS", "rec_a1_ofic": "", "rec_a1_desv1": "", "rec_a2_ofic": "", "rec_a2_desv1": "", "rec_a2p_ofic": "Puente Tiabaya a Bombas / Salida de Bombas 07:40 a Salaverry", "rec_a2p_desv1": "", "rec_b1_ofic": "", "rec_b1_desv1": "", "rec_b2_ofic": "", "rec_b2_desv1": "", "rec_b2p_ofic": "Puente Tiabaya a Bombas / Salida de Bombas 19:40 a Salaverry", "rec_b2p_desv1": "", "a1": "NO HAY", "a2_lv": "NO HAY", "a2_sd": "NO HAY", "a2p_lv": "GPS", "a2p_sd": "GPS", "b1": "NO HAY", "b2": "NO HAY", "b2p": "GPS", "rec_a1_desv2": "", "rec_a2_desv2": "", "rec_a2p_desv2": "", "rec_b1_desv2": "", "rec_b2_desv2": "", "rec_b2p_desv2": ""}
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
const URL_API_CONDUCTORES = "https://script.google.com/macros/s/AKfycbwYiiV2_-zSTcLUft_xcPTXl03LxcyTNcZ2l2u8RfTtPsrvyrzOcPR9NVJCd4AxhLfR/exec";
const URL_API_UNIDADES = "https://script.google.com/macros/s/AKfycbz95bAXTt3TdLqWrHswVEtSWEjA1Qb5RCdb9QfUnRqsGOgilnNzrpcR8V6l4mkhZCBlZA/exec";

// CARGA DE DATOS SEGUROS
function cargarDatosSeguros(k, fb) { try { let d = localStorage.getItem(k); return d ? JSON.parse(d) : fb; } catch(e) { return fb; } }
let conductores = cargarDatosSeguros('bd_conductores_smcv', []);
let unidades = cargarDatosSeguros('bd_unidades_smcv', []);
let zonasBD = cargarDatosSeguros('bd_zonas_oficial_smcv', ZONAS_FABRICA);
let plantillasBD = cargarDatosSeguros('bd_plantillas_smcv', { LV: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, SD: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]}, FER: {A1:[],A2:[],A2P:[],B1:[],B2:[],B2P:[]} });
let programacionDiaria = cargarDatosSeguros('bd_prog_diaria_smcv', {});
let datosCapacitacion = cargarDatosSeguros('bd_capacitaciones_smcv', { titulo: "", lista: [] });

function guardarConductores(refrescar = true) { localStorage.setItem('bd_conductores_smcv', JSON.stringify(conductores)); if(refrescar) actualizarDashboard(); }
function guardarUnidades(refrescar = true) { localStorage.setItem('bd_unidades_smcv', JSON.stringify(unidades)); if(refrescar) actualizarDashboard(); }
function guardarZonas() { localStorage.setItem('bd_zonas_oficial_smcv', JSON.stringify(zonasBD)); renderizarZonas(); }
function normalizarTexto(txt) { if(!txt) return ""; return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g," ").trim().toUpperCase(); }
function abrirModal(id) { document.getElementById(id).style.display = 'flex'; }
function cerrarModal(id) { document.getElementById(id).style.display = 'none'; }
function aplicarTema(t) { document.body.setAttribute('data-theme', t); localStorage.setItem('planner_theme', t); }

// =========================================================
// BUSCADOR INTELIGENTE V3 (A PRUEBA DE BALAS)
// Elimina absolutamente todo lo que no sea letra para comparar
// =========================================================
function getProp(obj, keyword) {
    let cleanKeyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");
    for (let key in obj) {
        if (key.toUpperCase().replace(/[^A-Z]/g, "").includes(cleanKeyword)) {
            return obj[key];
        }
    }
    return null;
}

// =========================================================
// MAGIA DOM: COMPACIDAD MÁXIMA PARA TÍTULOS Y ETIQUETAS
// =========================================================
function estilizarTitulosYContenedores() {
    document.querySelectorAll('.view-section').forEach(vista => {
        let header = vista.querySelector('h1, h2, h3');
        if (header && !header.parentElement.classList.contains('header-flex-wrapper')) {
            let wrapper = document.createElement('div');
            wrapper.className = 'header-flex-wrapper';
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center'; 
            wrapper.style.justifyContent = 'space-between';
            wrapper.style.flexWrap = 'wrap';
            wrapper.style.gap = '10px';
            wrapper.style.marginBottom = '2px'; 
            wrapper.style.borderBottom = '2px solid #e5e7eb';
            wrapper.style.paddingBottom = '4px';
            wrapper.style.width = '100%';

            header.style.margin = '0';
            header.style.fontSize = '1.5rem';
            header.style.fontWeight = '900';
            header.style.color = '#1f2937';
            header.style.borderLeft = '6px solid #cc0000';
            header.style.paddingLeft = '12px';
            header.style.textTransform = 'uppercase';
            header.style.lineHeight = '1';

            header.parentNode.insertBefore(wrapper, header);
            wrapper.appendChild(header);
            
            let card = vista.querySelector('.card');
            if(card) { card.style.marginTop = '0px'; }
        }
    });

    if(!document.getElementById('css-limpiador')) {
        let style = document.createElement('style');
        style.id = 'css-limpiador';
        style.innerHTML = `
            #vistaUnidades > div[style*="fixed"], 
            #vistaUnidades > div[style*="absolute"],
            #vistaUnidades .floating-kpis,
            #vistaUnidades .side-tabs,
            #vistaUnidades .right-tabs { display: none !important; }
        `;
        document.head.appendChild(style);
    }
}

function cambiarVista(vista) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-btn, .dropdown-content a').forEach(btn => btn.classList.remove('active'));
    let vistaId = ""; let btnId = ""; let parentBtnId = "";
    if (vista === 'dashboard') { vistaId = 'vistaDashboard'; btnId = 'btnNavDashboard'; }
    if (vista === 'conductores') { vistaId = 'vistaConductores'; btnId = 'btnNavConductores'; parentBtnId = 'btnNavMaestros'; }
    if (vista === 'unidades') { vistaId = 'vistaUnidades'; btnId = 'btnNavUnidades'; parentBtnId = 'btnNavMaestros'; }
    if (vista === 'zonas') { vistaId = 'vistaZonas'; btnId = 'btnNavZonas'; }
    if (vista === 'plantillas') { vistaId = 'vistaPlantillas'; btnId = 'btnNavPlantillas'; }
    if (vista === 'programacion') { vistaId = 'vistaProgramacion'; btnId = 'btnNavProgramacion'; }
    if (vista === 'respaldo') { vistaId = 'vistaRespaldo'; btnId = 'btnNavRespaldo'; }
    if (vista === 'roster') { vistaId = 'vistaRoster'; btnId = 'btnNavRoster'; }

    if(document.getElementById(vistaId)) document.getElementById(vistaId).classList.add('active');
    if(document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');
    if(parentBtnId && document.getElementById(parentBtnId)) document.getElementById(parentBtnId).classList.add('active');
    
    if (vista === 'conductores') { actualizarFiltrosDinamicosConductores(); renderizarConductores(); }
    if (vista === 'unidades') { actualizarFiltrosDinamicosUnidades(); renderizarUnidades(); }
}

function parsearFechaGenerica(f) {
    if (!f) return null; 
    if (f instanceof Date) return f; 
    if (typeof f === 'number') return new Date((f - 25569) * 86400 * 1000); 
    
    let s = String(f).trim(); 
    if (/^\d{5}$/.test(s)) return new Date((parseInt(s) - 25569) * 86400 * 1000); // Por si lee seriales de Excel como texto

    let datePart = s;
    if (s.includes('T')) datePart = s.split('T')[0];
    else if (s.includes(' ')) datePart = s.split(' ')[0];
    
    if (/^\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2}/.test(datePart)) { 
        let d = new Date(datePart); 
        return isNaN(d.getTime()) ? null : d; 
    }
    
    let p = datePart.split(/[\/\-\.]/); 
    if (p.length === 3) { 
        if (p[0].length === 4) return new Date(parseInt(p[0]), parseInt(p[1]) - 1, parseInt(p[2])); 
        else return new Date(parseInt(p[2]), parseInt(p[1]) - 1, parseInt(p[0])); 
    }
    
    let d2 = new Date(s); 
    return isNaN(d2.getTime()) ? null : d2;
}

function obtenerEdadProcesada(f) { 
    if (!f || f === '-') return { texto: '-', esCumple: false };
    let nac = parsearFechaGenerica(f); 
    if (!nac || isNaN(nac.getTime())) return { texto: '-', esCumple: false }; 
    let hoy = new Date(); let edad = hoy.getFullYear() - nac.getFullYear(); let m = hoy.getMonth() - nac.getMonth(); let d = hoy.getDate() - nac.getDate(); 
    if (m < 0 || (m === 0 && d < 0)) edad--; let esCumple = (hoy.getMonth() === nac.getMonth() && hoy.getDate() === nac.getDate());
    return { texto: isNaN(edad) || edad < 0 ? '-' : `${edad} años`, esCumple: esCumple }; 
}

function obtenerTiempoLaborandoExacto(f) { 
    if (!f || f === '-') return '-'; 
    let ing = parsearFechaGenerica(f); 
    if (!ing || isNaN(ing.getTime())) return '-'; 
    let hoy = new Date(); 
    let a = hoy.getFullYear() - ing.getFullYear(); 
    let m = hoy.getMonth() - ing.getMonth(); 
    let d = hoy.getDate() - ing.getDate(); 
    if (d < 0) { m--; d += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate(); } 
    if (m < 0) { a--; m += 12; } 
    return a < 0 ? '0 a / 0 m' : `${a} a / ${m} m`; 
}

function determinarTipoConductor(contrato) { if(!contrato) return 'VAN'; let txt = contrato.toUpperCase(); if (txt.includes('ESPECIALIZADO M')) return 'MINIBUS'; if (txt.includes('ESPECIALIZADO')) return 'BUS'; return 'VAN'; }
function obtenerEstiloEstado(estado) {
    let e = String(estado).toUpperCase().trim();
    if(e === 'A') return 'background-color: #d1fae5; color: #065f46; border: 1px solid #34d399; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'B') return 'background-color: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'D' || e === 'V') return 'background-color: #fef3c7; color: #b45309; border: 1px solid #fbd38d; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'DM') return 'background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'MO') return 'background-color: #f3e8ff; color: #6b21a8; border: 1px solid #d8b4fe; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'AL' || e === 'ADI') return 'background-color: #ffedd5; color: #c2410c; border: 1px solid #fdba74; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    if(e === 'PA') return 'background-color: #f3f4f6; color: #4b5563; border: 1px solid #9ca3af; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
    return 'background-color: #f3f4f6; color: #374151; border: 1px solid #d1d5db; font-weight: bold; padding: 4px 8px; border-radius: 4px;';
}

let filtroActivoContratoCond = "TODOS"; let filtroActivoServicioCond = "TODOS";
function actualizarFiltrosDinamicosConductores() {
    let contenedor = document.getElementById('contenedorChipsFiltrosCond'); if (!contenedor || !conductores) return;
    
    let contratos = ["TODOS", ...new Set(conductores.map(c => getProp(c, "CONTRATO") || c.CONTRATO).filter(Boolean))]; 
    let servicios = ["TODOS", ...new Set(conductores.map(c => getProp(c, "SERVICIO") || c.SERVICIO).filter(Boolean))];
    
    let html = `
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
            <span style="font-size: 0.7rem; font-weight: 800; color: #6b7280; width: 65px; letter-spacing: 0.5px;">CONTRATO:</span>
            <div style="display: flex; gap: 0; flex-wrap: wrap;">
                ${contratos.map((c, i) => {
                    let isActive = (filtroActivoContratoCond === c); let bg = isActive ? '#0284c7' : '#ffffff'; let col = isActive ? '#ffffff' : '#4b5563';
                    let brL = i === 0 ? '4px' : '0'; let brR = i === contratos.length - 1 ? '4px' : '0'; let zIdx = isActive ? 2 : 1;
                    return `<button onclick="setFiltroContratoCond('${c}')" style="padding: 4px 12px; font-size: 0.7rem; font-weight: 700; background: ${bg}; color: ${col}; border: 1px solid #d1d5db; border-radius: ${brL} ${brR} ${brR} ${brL}; cursor: pointer; margin-left: -1px; transition: all 0.2s; position: relative; z-index: ${zIdx}; outline: none;">${c}</button>`;
                }).join('')}
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span style="font-size: 0.7rem; font-weight: 800; color: #6b7280; width: 65px; letter-spacing: 0.5px;">SERVICIO:</span>
            <div style="display: flex; gap: 0; flex-wrap: wrap;">
                ${servicios.map((s, i) => {
                    let isActive = (filtroActivoServicioCond === s); let bg = isActive ? '#0284c7' : '#ffffff'; let col = isActive ? '#ffffff' : '#4b5563';
                    let brL = i === 0 ? '4px' : '0'; let brR = i === servicios.length - 1 ? '4px' : '0'; let zIdx = isActive ? 2 : 1;
                    return `<button onclick="setFiltroServicioCond('${s}')" style="padding: 4px 12px; font-size: 0.7rem; font-weight: 700; background: ${bg}; color: ${col}; border: 1px solid #d1d5db; border-radius: ${brL} ${brR} ${brR} ${brL}; cursor: pointer; margin-left: -1px; transition: all 0.2s; position: relative; z-index: ${zIdx}; outline: none;">${s}</button>`;
                }).join('')}
            </div>
        </div>
    `;
    contenedor.innerHTML = html;
}
function setFiltroContratoCond(val) { filtroActivoContratoCond = val; actualizarFiltrosDinamicosConductores(); renderizarConductores(); }
function setFiltroServicioCond(val) { filtroActivoServicioCond = val; actualizarFiltrosDinamicosConductores(); renderizarConductores(); }
function mostrarToast(mensaje, tipo = 'info', duracion = 4000) { let container = document.getElementById('toast-container'); if (!container) return; let toast = document.createElement('div'); toast.className = `toast ${tipo}`; let icon = tipo === 'success' ? 'fa-circle-check' : (tipo === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info'); toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${mensaje}</span>`; container.appendChild(toast); setTimeout(() => { toast.style.animation = 'fadeOut 0.5s ease forwards'; setTimeout(() => toast.remove(), 500); }, duracion); }

async function sincronizarDatosSegundoPlano() {
    let btnGlobal = document.getElementById('btnSyncGlobal'); if(btnGlobal) { btnGlobal.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Conectando...'; btnGlobal.disabled = true; } mostrarToast("Iniciando sincronización con Google Sheets. Puedes seguir trabajando.", "info", 5000);
    try {
        let [resCond, resUni] = await Promise.all([ fetch(URL_API_CONDUCTORES + "?t=" + new Date().getTime()), fetch(URL_API_UNIDADES + "?t=" + new Date().getTime()) ]);
        let actualizados = 0; if (resCond.ok) { let dataCond = await resCond.json(); if (dataCond && dataCond.length > 0) { conductores = dataCond; guardarConductores(false); actualizados++; } }
        if (resUni.ok) { let dataUni = await resUni.json(); if (dataUni && dataUni.length > 0) { dataUni.forEach(uNueva => { let uLocal = unidades.find(ul => ul.codigo === uNueva.codigo); if(uLocal) { if(uLocal.estado) uNueva.estado = uLocal.estado; if(uLocal.mantenimiento) uNueva.mantenimiento = uLocal.mantenimiento; } }); unidades = dataUni; guardarUnidades(false); actualizados++; } }
        if (actualizados > 0) {
            actualizarFiltrosDinamicos(); actualizarFiltrosDinamicosUnidades(); actualizarFiltrosDinamicosConductores(); let vistaActiva = document.querySelector('.view-section.active').id; if(vistaActiva === 'vistaDashboard') actualizarDashboard(); if(vistaActiva === 'vistaConductores') renderizarConductores(); if(vistaActiva === 'vistaUnidades') renderizarUnidades(); if(vistaActiva === 'vistaProgramacion') renderizarProgramacion();
            let lblUni = document.getElementById('lblLastSyncUnidades'); if(lblUni) lblUni.innerText = "Última sincronización: Hoy, " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); mostrarToast("¡Bases de datos actualizadas con éxito!", "success");
        } else { mostrarToast("No se recibieron datos de Google Sheets.", "error"); }
    } catch(e) { mostrarToast("Error de conexión: " + e.message, "error"); } finally { if(btnGlobal) { btnGlobal.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Sincronizar'; btnGlobal.disabled = false; } }
}

function actualizarFiltrosDinamicosUnidades() {
    let tipos = [...new Set(unidades.map(u => (u.tipo || '').toUpperCase().trim()))].filter(t => t !== ''); let servicios = [...new Set(unidades.map(u => (u.servicio || '').toUpperCase().trim()))].filter(s => s !== ''); let allTipos = ['TODOS', ...tipos];
    let htmlTipos = `<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom: 8px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
        <span style="font-size:0.7rem; font-weight:800; color:#6b7280; width: 65px; letter-spacing:0.5px;">TIPO:</span><div style="display: flex; gap: 0; flex-wrap: wrap;">`;
    allTipos.forEach((t, i) => { let isActive = (fActivoUnidadTipo === t); let bg = isActive ? '#0284c7' : '#ffffff'; let col = isActive ? '#ffffff' : '#4b5563'; let brL = i === 0 ? '4px' : '0'; let brR = i === allTipos.length - 1 ? '4px' : '0'; let zIdx = isActive ? 2 : 1; htmlTipos += `<button onclick="toggleFiltroUnidades('tipo', '${t}')" style="padding: 4px 12px; font-size: 0.7rem; font-weight: 700; background: ${bg}; color: ${col}; border: 1px solid #d1d5db; border-radius: ${brL} ${brR} ${brR} ${brL}; cursor: pointer; margin-left: -1px; transition: all 0.2s; position: relative; z-index: ${zIdx}; outline: none;">${t}</button>`; }); htmlTipos += `</div></div>`;
    let allServs = ['TODOS', ...servicios];
    let htmlServs = `<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;"><span style="font-size:0.7rem; font-weight:800; color:#6b7280; width: 65px; letter-spacing:0.5px;">SERVICIO:</span><div style="display: flex; gap: 0; flex-wrap: wrap;">`;
    allServs.forEach((s, i) => { let isActive = (fActivoUnidadServicio === s); let bg = isActive ? '#0284c7' : '#ffffff'; let col = isActive ? '#ffffff' : '#4b5563'; let brL = i === 0 ? '4px' : '0'; let brR = i === allServs.length - 1 ? '4px' : '0'; let zIdx = isActive ? 2 : 1; htmlServs += `<button onclick="toggleFiltroUnidades('servicio', '${s}')" style="padding: 4px 12px; font-size: 0.7rem; font-weight: 700; background: ${bg}; color: ${col}; border: 1px solid #d1d5db; border-radius: ${brL} ${brR} ${brR} ${brL}; cursor: pointer; margin-left: -1px; transition: all 0.2s; position: relative; z-index: ${zIdx}; outline: none;">${s}</button>`; }); htmlServs += `</div></div>`;
    let panel = document.getElementById('contenedorChipsFiltros'); if(panel) panel.innerHTML = htmlTipos + htmlServs;
}
function toggleFiltroUnidades(categoria, valor) { if (categoria === 'tipo') fActivoUnidadTipo = valor; if (categoria === 'servicio') fActivoUnidadServicio = valor; actualizarFiltrosDinamicosUnidades(); renderizarUnidades(); }
function cambiarEstadoUnidad(idx, nuevoEstado) { unidades[idx].estado = nuevoEstado; guardarUnidades(); actualizarFiltrosDinamicosUnidades(); renderizarUnidades(); }

function actualizarDashboard() {
    if (conductores && conductores.length > 0) {
        let elTotal = document.getElementById('dashTotalConductores'); if (elTotal) elTotal.innerText = conductores.length;
        let induccionCount = conductores.filter(c => (getProp(c, "SERVICIO") || c.SERVICIO || '').toUpperCase().trim() === 'INDUCCION').length; let elInd = document.getElementById('dashInduccion'); if (elInd) elInd.innerText = induccionCount;
        let hoy = new Date(); let dia = String(hoy.getDate()).padStart(2, '0'); let mes = String(hoy.getMonth() + 1).padStart(2, '0'); let fechaHoy = dia + '/' + mes; 
        
        let cumpleaneros = conductores.filter(c => { 
            let nacVal = getProp(c, "NACIMIENTO") || c.nac || c.nacimiento; 
            if(!nacVal) return false; 
            let dObj = parsearFechaGenerica(nacVal);
            if(!dObj || isNaN(dObj.getTime())) return false;
            let dStr = String(dObj.getDate()).padStart(2, '0');
            let mStr = String(dObj.getMonth() + 1).padStart(2, '0');
            return `${dStr}/${mStr}` === fechaHoy; 
        });

        let elCumple = document.getElementById('dashCumpleanos');
        if (elCumple) { elCumple.innerText = cumpleaneros.length; let cardElement = elCumple.closest('.card'); if(cardElement) { if(cumpleaneros.length > 0) { let listaNombres = cumpleaneros.map(c => "🎂 " + (getProp(c, "CONDUCTOR") || getProp(c, "NOMBRE") || c.NOMBRE)).join('\n'); cardElement.title = "Cumpleañeros de hoy:\n" + listaNombres; cardElement.style.cursor = "help"; } else { cardElement.title = "No hay cumpleaños hoy"; cardElement.style.cursor = "default"; } } }
        let cVan = 0, cMinibus = 0, cBus = 0; conductores.forEach(c => { let cat = determinarTipoConductor(getProp(c, "CONTRATO") || c.CONTRATO); if(cat === 'VAN') cVan++; else if(cat === 'MINIBUS') cMinibus++; else if(cat === 'BUS') cBus++; });
        if(document.getElementById('dashAcredVan')) document.getElementById('dashAcredVan').innerText = cVan; if(document.getElementById('dashAcredMinibus')) document.getElementById('dashAcredMinibus').innerText = cMinibus; if(document.getElementById('dashAcredBus')) document.getElementById('dashAcredBus').innerText = cBus;
    }
    if (unidades && unidades.length > 0) {
        let fVan = 0, fMinibus = 0, fBus = 0, fCamioneta = 0; unidades.forEach(u => { let t = (u.tipo || '').toUpperCase().trim(); if(t === 'VAN') fVan++; else if(t === 'MINIBUS') fMinibus++; else if(t === 'BUS') fBus++; else if(t === 'CAMIONETA') fCamioneta++; });
        if(document.getElementById('dashFlotaVan')) document.getElementById('dashFlotaVan').innerText = fVan; if(document.getElementById('dashFlotaMinibus')) document.getElementById('dashFlotaMinibus').innerText = fMinibus; if(document.getElementById('dashFlotaBus')) document.getElementById('dashFlotaBus').innerText = fBus; if(document.getElementById('dashFlotaCamioneta')) document.getElementById('dashFlotaCamioneta').innerText = fCamioneta;
    }
}
function actualizarFiltrosDinamicos() { let selectServicio = document.getElementById('filtroServicioCond'); if (!selectServicio) return; let valorActual = selectServicio.value; let serviciosUnicos = [...new Set(conductores.map(c => (getProp(c, "SERVICIO") || c.SERVICIO || '').toUpperCase().trim()))].filter(s => s !== ''); serviciosUnicos.sort(); let html = '<option value="TODOS">Todos los Servicios</option>'; serviciosUnicos.forEach(serv => { let selected = (serv === valorActual) ? 'selected' : ''; html += `<option value="${serv}" ${selected}>${serv}</option>`; }); selectServicio.innerHTML = html; }

function renderizarConductores() {
    let tbody = document.getElementById('tbodyConductores'); if(!tbody) return; let search = (document.getElementById('searchConductores')?.value || '').toLowerCase();
    let filtrados = conductores.filter(c => { 
        let dniStr = String(getProp(c, "DNI") || c.dni || c.DNI || '').toLowerCase(); 
        let nomStr = String(getProp(c, "CONDUCTOR") || getProp(c, "NOMBRE") || c.nombre || '').toLowerCase(); 
        let matchSearch = dniStr.includes(search) || nomStr.includes(search); 
        let matchContrato = (filtroActivoContratoCond === 'TODOS' || (getProp(c, "CONTRATO") || c.contrato || '').toUpperCase() === filtroActivoContratoCond.toUpperCase()); 
        let matchServicio = (filtroActivoServicioCond === 'TODOS' || (getProp(c, "SERVICIO") || c.servicio || '').toUpperCase() === filtroActivoServicioCond.toUpperCase()); 
        return matchSearch && matchContrato && matchServicio; 
    });
    
    actualizarSideKpisConductores(filtrados, conductores); tbody.innerHTML = '';
    
    filtrados.forEach((c, index) => {
        let rawNac = getProp(c, "NACIMIENTO") || c.nacimiento || c.nac;
        
        // AQUÍ ESTABA EL DETALLE: Agregamos "c.ing" al final para que atrape el dato de tu API
        let rawIng = getProp(c, "INGRESO") || getProp(c, "LABORANDO") || c.ingreso || c.tiempoLaborando || c.ing;
        
        let contrato = getProp(c, "CONTRATO") || c.contrato || '-';
        let servicio = getProp(c, "SERVICIO") || c.servicio || '-';
        let estado = getProp(c, "ESTADO") || getProp(c, "ABREV") || c.estadoAbrev || '-';
        let nombre = getProp(c, "CONDUCTOR") || getProp(c, "NOMBRE") || c.nombre || '-';
        let dni = getProp(c, "DNI") || c.dni || '-';

        let edadObj = obtenerEdadProcesada(rawNac); 
        let tiempo = obtenerTiempoLaborandoExacto(rawIng); 
        
        if (tiempo === '-') {
            let llavesDetectadas = Object.keys(c).join(", ");
            tiempo = `<span title="El sistema recibe: '${rawIng}'. Columnas leídas: ${llavesDetectadas}" style="cursor:help; border-bottom: 2px dotted #cc0000; color: #cc0000; font-weight:bold; padding: 0 5px;">-</span>`;
        }

        let estiloEstado = obtenerEstiloEstado(estado); 
        let badgeCumple = edadObj.esCumple ? `<span class="badge-birthday" style="background:#fce7f3; color:#db2777; padding:2px 6px; border-radius:4px; font-size:0.7rem; margin-left:5px;"><i class="fa-solid fa-cake-candles"></i> Hoy</span>` : '';
        let tr = document.createElement('tr'); 
        tr.innerHTML = `<td>${index + 1}</td> <td>${dni}</td> <td><b>${nombre}</b> ${badgeCumple}</td> <td>${edadObj.texto}</td> <td>${tiempo}</td> <td><span class="badge-abrev badge-van">${contrato}</span></td> <td><span class="badge-abrev badge-minibus">${servicio}</span></td> <td><span style="${estiloEstado}">${estado}</span></td> <td style="color:#9ca3af; font-size: 0.8rem; text-align:center;" title="Solo lectura (Editar en Excel)"><i class="fa-solid fa-lock"></i></td>`; 
        tbody.appendChild(tr);
    });
}
function actualizarSideKpisConductores(filtrados, todosConductores) {
    let vista = document.getElementById('vistaConductores'); if (!vista) return; let header = vista.querySelector('h1, h2, h3'); if (!header) return; let wrapper = header.parentElement; if (!wrapper.classList.contains('header-flex-wrapper')) return; 

    let safeKpiBox = document.getElementById('safeKpiBox_Conductores');
    if (!safeKpiBox) { safeKpiBox = document.createElement('div'); safeKpiBox.id = 'safeKpiBox_Conductores'; safeKpiBox.style.display = 'flex'; safeKpiBox.style.gap = '8px'; safeKpiBox.style.flexWrap = 'wrap'; safeKpiBox.style.alignItems = 'center'; wrapper.appendChild(safeKpiBox); }

    let serviciosUnicos = [...new Set(todosConductores.map(c => (getProp(c, "SERVICIO") || c.SERVICIO || 'SIN SERVICIO').toUpperCase().trim()))]; serviciosUnicos.sort();
    let configServicios = { 'REGULAR': { icon: 'fa-route', color: '#059669' }, 'DOMICILIOS': { icon: 'fa-house-user', color: '#f59e0b' }, 'SIN SERVICIO': { icon: 'fa-ban', color: '#64748b' }, 'INDUCCION': { icon: 'fa-graduation-cap', color: '#8b5cf6' }, 'RETEN PARADA': { icon: 'fa-clock', color: '#0284c7' }, 'MOLLENDO': { icon: 'fa-map-pin', color: '#dc2626' }, 'AMBULANCIA': { icon: 'fa-truck-medical', color: '#10b981' } };

    let html = `<div style="background: var(--card-bg, #fff); padding: 4px 10px; border-radius: 6px; cursor:pointer; display:flex; align-items:center; gap:8px; border: 1px solid #d1d5db; transition: transform 0.1s;" onclick="setFiltroServicioCond('TODOS')" title="Ver Todos"><div style="color:var(--primary, #cc0000); font-size: 1rem;"><i class="fa-solid fa-users"></i></div><div style="display:flex; flex-direction:column; justify-content:center;"><span style="font-size: 0.6rem; color:#6b7280; font-weight:800; line-height: 1;">TODOS</span><h3 style="font-size: 1.1rem; margin:0; line-height: 1; color: #1f2937;">${todosConductores.length}</h3></div></div>`;

    serviciosUnicos.forEach(serv => {
        let count = todosConductores.filter(c => ((getProp(c, "SERVICIO") || c.SERVICIO || 'SIN SERVICIO').toUpperCase().trim()) === serv).length; let cfg = configServicios[serv] || { icon: 'fa-circle-dot', color: '#2563eb' }; let isActive = (filtroActivoServicioCond.toUpperCase() === serv); let bgStyle = isActive ? 'background: #f3f4f6;' : 'background: var(--card-bg, #fff);';
        html += `<div style="${bgStyle} padding: 4px 10px; border-radius: 6px; border-left: 4px solid ${cfg.color}; border-top: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db; border-right: 1px solid #d1d5db; cursor:pointer; display:flex; align-items:center; gap: 8px;" onclick="setFiltroServicioCond('${serv}')" title="Filtrar por ${serv}"><div style="color: ${cfg.color}; font-size: 1rem;"><i class="fa-solid ${cfg.icon}"></i></div><div style="display:flex; flex-direction:column; justify-content:center;"><span style="font-size: 0.6rem; color: #6b7280; font-weight:800; line-height: 1;">${serv}</span><h3 style="color: ${cfg.color}; margin:0; font-size: 1.1rem; line-height: 1;">${count}</h3></div></div>`;
    });
    safeKpiBox.innerHTML = html;
}

function actualizarSideKpisUnidades() {
    let vista = document.getElementById('vistaUnidades'); if (!vista) return;
    vista.querySelectorAll('.btn-importar, button[onclick*="importarExcel"]').forEach(b => {
        if(!b.classList.contains('btn-compact-seguro')) b.style.display = 'none';
    });

    let header = vista.querySelector('h1, h2, h3'); if (!header) return; 
    let wrapper = header.parentElement; if (!wrapper.classList.contains('header-flex-wrapper')) return;

    let safeKpiBox = document.getElementById('safeKpiBox_Unidades');
    if (!safeKpiBox) { 
        safeKpiBox = document.createElement('div'); safeKpiBox.id = 'safeKpiBox_Unidades'; safeKpiBox.style.display = 'flex'; safeKpiBox.style.gap = '8px'; safeKpiBox.style.flexWrap = 'wrap'; safeKpiBox.style.alignItems = 'center'; wrapper.appendChild(safeKpiBox); 
    }

    let total = unidades.length; let operativas = unidades.filter(u => u.estado !== 'TALLER').length; let taller = unidades.filter(u => u.estado === 'TALLER').length;

    let html = `
        <div style="background: var(--card-bg, #fff); padding: 4px 10px; border-radius: 6px; display:flex; align-items:center; gap:8px; border: 1px solid #d1d5db; border-left: 4px solid #3b82f6;">
            <div style="color:#3b82f6; font-size: 1rem;"><i class="fa-solid fa-bus"></i></div>
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <span style="font-size: 0.6rem; color:#6b7280; font-weight:800; line-height: 1;">TOTAL</span>
                <h3 style="font-size: 1.1rem; margin:0; line-height: 1; color: #1f2937;">${total}</h3>
            </div>
        </div>
        <div style="background: var(--card-bg, #fff); padding: 4px 10px; border-radius: 6px; display:flex; align-items:center; gap:8px; border: 1px solid #d1d5db; border-left: 4px solid #10b981;">
            <div style="color:#10b981; font-size: 1rem;"><i class="fa-solid fa-circle-check"></i></div>
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <span style="font-size: 0.6rem; color:#6b7280; font-weight:800; line-height: 1;">OPERATIVAS</span>
                <h3 style="font-size: 1.1rem; margin:0; line-height: 1; color: #10b981;">${operativas}</h3>
            </div>
        </div>
        <div style="background: var(--card-bg, #fff); padding: 4px 10px; border-radius: 6px; display:flex; align-items:center; gap:8px; border: 1px solid #d1d5db; border-left: 4px solid #ef4444;">
            <div style="color:#ef4444; font-size: 1rem;"><i class="fa-solid fa-wrench"></i></div>
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <span style="font-size: 0.6rem; color:#6b7280; font-weight:800; line-height: 1;">TALLER</span>
                <h3 style="font-size: 1.1rem; margin:0; line-height: 1; color: #ef4444;">${taller}</h3>
            </div>
        </div>
        
        <label for="excelMantenimiento_compact" title="Importar Reporte de Mantenimiento" class="btn-compact-seguro" style="margin-left: 5px; padding: 6px 12px; border-radius: 6px; background: #10b981; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: all 0.2s; font-size: 1.2rem;">
            <i class="fa-solid fa-file-excel"></i>
        </label>
        <input type="file" id="excelMantenimiento_compact" accept=".xlsx, .xls" style="display:none;" onchange="importarExcelMantenimiento(event)">
    `;
    safeKpiBox.innerHTML = html;
}

function renderizarUnidades() {
    let tbody = document.getElementById('tbodyUnidades'); if(!tbody) return; tbody.innerHTML = ''; let txt = document.getElementById('searchUnidades') ? document.getElementById('searchUnidades').value.toUpperCase().trim() : ''; let correlativo = 1;
    actualizarSideKpisUnidades();
    unidades.forEach((u, idx) => {
        let tStr = (u.tipo || '').toUpperCase().trim(); let sStr = (u.servicio || '').toUpperCase().trim(); let cStr = (u.codigo || '').toUpperCase(); let pStr = (u.placa || '').toUpperCase();
        if (fActivoUnidadTipo !== 'TODOS' && tStr !== fActivoUnidadTipo) return; if (fActivoUnidadServicio !== 'TODOS' && sStr !== fActivoUnidadServicio) return; if (txt && !cStr.includes(txt) && !pStr.includes(txt)) return;
        let badgeClass = tStr === 'BUS' ? 'badge-bus' : (tStr === 'MINIBUS' ? 'badge-minibus' : 'badge-van'); if(tStr === 'CAMIONETA') badgeClass = 'badge-van';
        let estadoActual = u.estado || 'OPERATIVO'; let bgEstado = estadoActual === 'OPERATIVO' ? '#d1fae5' : '#fee2e2'; let colorEstado = estadoActual === 'OPERATIVO' ? '#065f46' : '#991b1b';
        let selectEstado = `<select class="select-prog" style="background:${bgEstado}; color:${colorEstado}; font-weight:bold; padding:4px; border:none; border-radius:4px; font-size:0.75rem; cursor:pointer; outline:none;" onchange="cambiarEstadoUnidad(${idx}, this.value)"><option value="OPERATIVO" ${estadoActual==='OPERATIVO'?'selected':''}>OPERATIVO</option><option value="TALLER" ${estadoActual==='TALLER'?'selected':''}>TALLER</option></select>`;
        let novedadHtml = u.mantenimiento ? `<span style="background:#fef3c7; color:#b45309; padding:4px 8px; border-radius:4px; font-weight:800; font-size:0.7rem;">🛠️ ${u.mantenimiento}</span>` : `<span style="color:var(--text-muted); font-size:0.8rem;">-</span>`;
        tbody.insertAdjacentHTML('beforeend', `<tr><td style="color:var(--text-muted); font-weight:bold;">${correlativo++}</td><td>${u.codigo || '-'}</td><td style="font-weight:700; letter-spacing: 1px;">${u.placa || '-'}</td><td><span class="badge-unit ${badgeClass}">${u.tipo || '-'}</span></td><td>${u.marca || '-'}</td><td>${u.capacidad || '-'} pax</td><td style="color:#0284c7; font-weight:700; font-size:0.75rem;">${u.servicio || '-'}</td><td>${selectEstado}</td><td>${novedadHtml}</td></tr>`);
    });
}

function restablecerZonasFabrica() { zonasBD = JSON.parse(JSON.stringify(ZONAS_FABRICA)); guardarZonas(); alert("✓ Zonas restablecidas."); }
function renderizarZonas() { let tbody = document.getElementById('tbodyZonas'); if(!tbody) return; tbody.innerHTML = ''; let txt = document.getElementById('searchZonas').value.toUpperCase().trim(); zonasBD.forEach((z, idx) => { if (txt && !z.zona.toUpperCase().includes(txt)) return; let ofi = z.rec_a2_ofic || z.rec_a1_ofic || '-'; tbody.insertAdjacentHTML('beforeend', `<tr><td><b>${z.zona}</b></td><td>${z.a1||'-'}</td><td style="color:var(--accent); font-weight:600;">${z.a2_lv||'-'}</td><td>${z.a2p_lv||'-'}</td><td>${z.b1||'-'}</td><td>${z.b2||'-'}</td><td>${z.b2p||'-'}</td><td style="font-size:0.75rem; color:var(--text-muted);">${ofi}</td><td><button class="btn btn-outline" onclick="abrirModalEditZona(${idx})"><i class="fa-solid fa-pen"></i> 360°</button></td></tr>`); }); }
function abrirModalEditZona(idx) {
    idxZonaEdit = idx; let z = zonasBD[idx]; document.getElementById('badgeZonaEditName').innerText = `ZONA ${z.zona}`;
    document.getElementById('zHoraA1').value = z.a1 || ''; document.getElementById('zRutaA1Ofic').value = z.rec_a1_ofic || ''; document.getElementById('zRutaA1Desv1').value = z.rec_a1_desv1 || ''; document.getElementById('zRutaA1Desv2').value = z.rec_a1_desv2 || '';
    document.getElementById('zHoraA2LV').value = z.a2_lv || ''; document.getElementById('zHoraA2SDFER').value = z.a2_sd || ''; document.getElementById('zRutaA2Ofic').value = z.rec_a2_ofic || ''; document.getElementById('zRutaA2Desv1').value = z.rec_a2_desv1 || ''; document.getElementById('zRutaA2Desv2').value = z.rec_a2_desv2 || '';
    document.getElementById('zHoraA2PLV').value = z.a2p_lv || ''; document.getElementById('zHoraA2PSDFER').value = z.a2p_sd || ''; document.getElementById('zRutaA2POfic').value = z.rec_a2p_ofic || ''; document.getElementById('zRutaA2PDesv1').value = z.rec_a2p_desv1 || ''; document.getElementById('zRutaA2PDesv2').value = z.rec_a2p_desv2 || '';
    document.getElementById('zHoraB1').value = z.b1 || ''; document.getElementById('zRutaB1Ofic').value = z.rec_b1_ofic || ''; document.getElementById('zRutaB1Desv1').value = z.rec_b1_desv1 || ''; document.getElementById('zRutaB1Desv2').value = z.rec_b1_desv2 || '';
    document.getElementById('zHoraB2').value = z.b2 || ''; document.getElementById('zRutaB2Ofic').value = z.rec_b2_ofic || ''; document.getElementById('zRutaB2Desv1').value = z.rec_b2_desv1 || ''; document.getElementById('zRutaB2Desv2').value = z.rec_b2_desv2 || '';
    document.getElementById('zHoraB2P').value = z.b2p || ''; document.getElementById('zRutaB2POfic').value = z.rec_b2p_ofic || ''; document.getElementById('zRutaB2PDesv1').value = z.rec_b2p_desv1 || ''; document.getElementById('zRutaB2PDesv2').value = z.rec_b2p_desv2 || '';
    switchTabZona(null, 'tabA1'); abrirModal('modalEditZona');
}
function switchTabZona(evt, tabId) { document.querySelectorAll('#modalEditZona .tab-btn').forEach(b => b.classList.remove('active')); document.querySelectorAll('#modalEditZona .tab-content').forEach(c => c.classList.remove('active')); if (evt) evt.currentTarget.classList.add('active'); else document.querySelector(`button[onclick*="${tabId}"]`).classList.add('active'); document.getElementById(tabId).classList.add('active'); }
function guardarCambiosZonaConfirmado() {
    let z = zonasBD[idxZonaEdit];
    z.a1 = document.getElementById('zHoraA1').value; z.rec_a1_ofic = document.getElementById('zRutaA1Ofic').value; z.rec_a1_desv1 = document.getElementById('zRutaA1Desv1').value; z.rec_a1_desv2 = document.getElementById('zRutaA1Desv2').value;
    z.a2_lv = document.getElementById('zHoraA2LV').value; z.a2_sd = document.getElementById('zHoraA2SDFER').value; z.rec_a2_ofic = document.getElementById('zRutaA2Ofic').value; z.rec_a2_desv1 = document.getElementById('zRutaA2Desv1').value; z.rec_a2_desv2 = document.getElementById('zRutaA2Desv2').value;
    z.a2p_lv = document.getElementById('zHoraA2PLV').value; z.a2p_sd = document.getElementById('zHoraA2PSDFER').value; z.rec_a2p_ofic = document.getElementById('zRutaA2POfic').value; z.rec_a2p_desv1 = document.getElementById('zRutaA2PDesv1').value; z.rec_a2p_desv2 = document.getElementById('zRutaA2PDesv2').value;
    z.b1 = document.getElementById('zHoraB1').value; z.rec_b1_ofic = document.getElementById('zRutaB1Ofic').value; z.rec_b1_desv1 = document.getElementById('zRutaB1Desv1').value; z.rec_b1_desv2 = document.getElementById('zRutaB1Desv2').value;
    z.b2 = document.getElementById('zHoraB2').value; z.rec_b2_ofic = document.getElementById('zRutaB2Ofic').value; z.rec_b2_desv1 = document.getElementById('zRutaB2Desv1').value; z.rec_b2_desv2 = document.getElementById('zRutaB2Desv2').value;
    z.b2p = document.getElementById('zHoraB2P').value; z.rec_b2p_ofic = document.getElementById('zRutaB2POfic').value; z.rec_b2p_desv1 = document.getElementById('zRutaB2PDesv1').value; z.rec_b2p_desv2 = document.getElementById('zRutaB2PDesv2').value;
    guardarZonas(); cerrarModal('modalEditZona'); alert("✓ Cambios inyectados.");
}
function guardarNuevaZona() { let n = document.getElementById('nuevaZonaNombre').value.trim().toUpperCase(); if(!n) return alert("Nombre vacío."); zonasBD.push({ zona: n }); guardarZonas(); cerrarModal('modalNuevaZona'); }

let uiPl = 'LV', uiTu = 'A1';
function switchPlantilla(p) { uiPl = p; document.querySelectorAll('#vistaPlantillas .tab-btn').forEach(b => b.classList.remove('active')); document.getElementById('tabPl' + p).classList.add('active'); renderizarGestorPlantillas(); }
function switchTurnoPlantilla(tu) { uiTu = tu; document.querySelectorAll('#vistaPlantillas .sub-tab-btn').forEach(b => b.classList.remove('active')); document.getElementById('st' + tu).classList.add('active'); renderizarGestorPlantillas(); }
function cargarOpcionesZonasSelect() { let sel = document.getElementById('selAgregarZona'); if(!sel) return; sel.innerHTML = '<option value="">-- Seleccionar --</option>'; zonasBD.forEach(z => sel.innerHTML += `<option value="${z.zona}">ZONA ${z.zona}</option>`); }
function guardarPlantillas() { localStorage.setItem('bd_plantillas_smcv', JSON.stringify(plantillasBD)); alert("✓ Plantillas guardadas."); }
function renderizarGestorPlantillas() {
    let tbody = document.getElementById('tbodyPlantillaList'); if(!tbody) return; tbody.innerHTML = ''; let lista = plantillasBD[uiPl][uiTu] || [];
    lista.forEach((item, idx) => { let badgeColor = item.tipo.includes('BUS') ? 'var(--warning)' : 'var(--accent)'; let nombreDisplay = /^\d/.test(item.zona) ? `ZONA ${item.zona}` : item.zona; tbody.insertAdjacentHTML('beforeend', `<tr><td style="text-align:center;">${idx+1}</td><td><b>${nombreDisplay}</b> <span style="font-size:0.75rem; color:${badgeColor}; font-weight: bold; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${item.tipo}</span></td><td style="text-align:center;"><input type="number" class="input-cant" value="${item.cant}" onchange="plantillasBD['${uiPl}']['${uiTu}'][${idx}].cant=parseInt(this.value)||1"></td><td style="text-align:right;"><button class="btn-icon" style="color:var(--danger);" onclick="plantillasBD['${uiPl}']['${uiTu}'].splice(${idx},1); renderizarGestorPlantillas();"><i class="fa-solid fa-trash"></i></button></td></tr>`); }); if(!lista.length) tbody.innerHTML = `<tr><td colspan="4" class="empty-state">Sin turnos asignados.</td></tr>`;
}
function agregarZonaPlantilla() { let z = document.getElementById('selAgregarZona').value, c = parseInt(document.getElementById('cantAgregarZona').value) || 1; if(!z) return; plantillasBD[uiPl][uiTu].push({ zona: z, cant: c, tipo: document.getElementById('selTipoUnidadAgregar').value }); renderizarGestorPlantillas(); }
function descargarPlantillaMaestraZonas() { let ws = XLSX.utils.json_to_sheet(zonasBD.map(z => ({ "ZONA": z.zona, "REQ_BUS_48": "", "REQ_VAN_15": "", "REQ_VAN_13": "", "REQ_VAN_09": "" }))); let wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "Demanda_Zonas"); XLSX.writeFile(wb, "Plantilla_Maestra.xlsx"); }
function abrirModalCopiarPlantilla() { document.getElementById('lblDestinoCopia').innerText = `[${uiPl}] - [${uiTu}]`; abrirModal('modalCopiarPlantilla'); }
function confirmarCopiaPlantilla() { let sp = document.getElementById('selCopiaPlantilla').value, st = document.getElementById('selCopiaTurno').value; if(plantillasBD[sp][st]?.length) { plantillasBD[uiPl][uiTu] = JSON.parse(JSON.stringify(plantillasBD[sp][st])); renderizarGestorPlantillas(); cerrarModal('modalCopiarPlantilla'); } else alert("Origen vacío."); }

function limpiarCapacitacion() { document.getElementById('txtTituloCapacitacion').value = ''; document.getElementById('txtListaCapacitacion').value = ''; }
function guardarCapacitacion() { let titulo = document.getElementById('txtTituloCapacitacion').value.trim(); let listaLimpia = document.getElementById('txtListaCapacitacion').value.split('\n').map(n => normalizarTexto(n)).filter(n => n !== ""); datosCapacitacion = { titulo: titulo, lista: listaLimpia }; localStorage.setItem('bd_capacitaciones_smcv', JSON.stringify(datosCapacitacion)); cerrarModal('modalCapacitacion'); alert(`✓ Registrados ${listaLimpia.length} conductores.`); }

function procesarCambioFechaProg() { let input = document.getElementById('fechaProgInput'); if(!input.value) input.value = new Date().toISOString().split('T')[0]; let d = new Date(input.value + 'T00:00:00'); document.getElementById('tipoPlantillaProg').value = (d.getDay() === 0 || d.getDay() === 6) ? 'SD' : 'LV'; if(!programacionDiaria[input.value]) programacionDiaria[input.value] = []; renderizarProgramacion(); }
function guardarProgramacionDiaria() { localStorage.setItem('bd_prog_diaria_smcv', JSON.stringify(programacionDiaria)); alert("✓ Programación guardada correctamente."); }
function renderizarProgramacion() {
    let fechaSel = document.getElementById('fechaProgInput').value, tipoPlantilla = document.getElementById('tipoPlantillaProg').value, turnoSel = document.getElementById('filtroTurnoProg').value; let turnosLista = turnoSel !== 'TODOS' ? [turnoSel] : ['A1', 'A2', 'A2P', 'B1', 'B2', 'B2P'];
    let condOptsBase = conductores.filter(c => { let e = (getProp(c, "ESTADO") || c.estadoAbrev || '').toUpperCase(); return e==='A'||e==='B'||e==='AL'; }); let unidadesBase = unidades.filter(u => u.estado === 'OPERATIVO'); let regsFecha = programacionDiaria[fechaSel] || [];
    let totalFilas = 0, asignados = 0, htmlTabla = ''; let htmlOpcionesAdicionales = `<option value="">-- Normal --</option>`; Object.keys(DIC_ADICIONALES).forEach(k => htmlOpcionesAdicionales += `<option value="${k}">${k}</option>`); let htmlOpcionesCarril = ''; OPCIONES_CARRILES.forEach(c => htmlOpcionesCarril += `<option value="${c}">${c || '-- Carril --'}</option>`);
    turnosLista.forEach(t => {
        let listaZonasTurno = plantillasBD[tipoPlantilla][t] || [];
        listaZonasTurno.forEach(itemPlantilla => {
            let zData = zonasBD.find(z => z.zona === itemPlantilla.zona); if (!zData) return; let horaDinamica = '--:--';
            if (t === 'A1') horaDinamica = zData.a1; else if (t === 'A2') horaDinamica = (tipoPlantilla === 'LV') ? zData.a2_lv : zData.a2_sd; else if (t === 'A2P') horaDinamica = (tipoPlantilla === 'LV') ? zData.a2p_lv : zData.a2p_sd; else if (t === 'B1') horaDinamica = zData.b1; else if (t === 'B2') horaDinamica = zData.b2; else if (t === 'B2P') horaDinamica = zData.b2p;
            let cantidadRequerida = parseInt(itemPlantilla.cant) || 1;
            for (let i = 1; i <= cantidadRequerida; i++) {
                totalFilas++; let key = `${itemPlantilla.zona}_${t}_${i}`; let regEx = regsFecha.find(r => r.key === key) || {}; if (regEx.unidad && regEx.conductor) asignados++;
                let txtUnidadMult = cantidadRequerida > 1 ? `<br><small style="color:var(--text-muted)">Unidad ${i} de ${cantidadRequerida}</small>` : ''; let txtTipoReq = (itemPlantilla.tipo === 'CUALQUIERA' || !itemPlantilla.tipo) ? 'Cualquier Unidad' : itemPlantilla.tipo; let nombreDisplay = /^\d/.test(itemPlantilla.zona) ? `ZONA ${itemPlantilla.zona}` : itemPlantilla.zona;
                let uniOptsFiltradas = `<option value="">-- Vehículo --</option>`; unidadesBase.forEach(u => { let match = false, tVehiculo = (u.tipoVehiculo || '').toUpperCase(), cap = parseInt(u.capacidad) || 0; if (itemPlantilla.tipo === 'CUALQUIERA' || !itemPlantilla.tipo) match = true; else if ((itemPlantilla.tipo === 'BUS_48' || itemPlantilla.tipo === 'BUS') && tVehiculo.includes('BUS')) match = true; else if (itemPlantilla.tipo === 'VAN_15' && tVehiculo.includes('VAN') && cap >= 14) match = true; else if (itemPlantilla.tipo === 'VAN_13' && tVehiculo.includes('VAN') && cap >= 12) match = true; else if ((itemPlantilla.tipo === 'VAN_09' || itemPlantilla.tipo === 'VAN') && tVehiculo.includes('VAN')) match = true; if (match) uniOptsFiltradas += `<option value="${u.cod}" ${regEx.unidad === u.cod ? 'selected' : ''}>${u.cod}</option>`; });
                let condOptsFiltradas = `<option value="">-- Conductor --</option>`; condOptsBase.forEach(c => { let tipoC = determinarTipoConductor(getProp(c, "CONTRATO") || c.CONTRATO), matchCond = false, reqTipo = itemPlantilla.tipo || ''; if (reqTipo === 'CUALQUIERA' || !reqTipo) matchCond = true; else if (reqTipo.includes('VAN') && (tipoC === 'VAN' || tipoC === 'MINIBUS')) matchCond = true; else if (reqTipo.includes('BUS') && (tipoC === 'BUS' || tipoC === 'MINIBUS')) matchCond = true; let cDni = getProp(c, "DNI") || c.DNI; let cNom = getProp(c, "CONDUCTOR") || getProp(c, "NOMBRE") || c.NOMBRE; if (matchCond) condOptsFiltradas += `<option value="${cDni}" ${regEx.conductor === cDni ? 'selected' : ''}>${cNom}</option>`; });
                let repartoOpts = `<option value="">- N/A -</option>`; zonasBD.forEach(z => { repartoOpts += `<option value="${z.zona}" ${regEx.reparto === z.zona ? 'selected' : ''}>Rep. ${z.zona}</option>`; }); let carrilSelect = htmlOpcionesCarril.replace(`value="${regEx.carril || ''}"`, `value="${regEx.carril || ''}" selected`); let adicSelect = htmlOpcionesAdicionales.replace(`value="${regEx.adicional || ''}"`, `value="${regEx.adicional || ''}" selected`);
                htmlTabla += `<tr><td style="font-weight: bold;">${nombreDisplay} ${txtUnidadMult}</td><td><span class="badge-status status-activo">${t}</span> <br> <span style="font-weight:600; font-size:0.75rem;">${horaDinamica}</span></td><td><span style="font-size: 0.7rem; font-weight: 800; padding: 2px 4px; border-radius: 4px; background: rgba(0,0,0,0.05); color: var(--accent);">${txtTipoReq}</span></td><td><select id="uni_${key}" class="select-prog" onchange="updMem('${key}', 'unidad', this.value)">${uniOptsFiltradas}</select></td><td><select id="cond_${key}" class="select-prog" onchange="updMem('${key}', 'conductor', this.value)">${condOptsFiltradas}</select></td><td><select class="select-prog" onchange="updMem('${key}', 'reparto', this.value)">${repartoOpts}</select></td><td><select class="select-prog" onchange="updMem('${key}', 'carril', this.value)">${carrilSelect}</select></td><td><select class="select-prog" onchange="updMem('${key}', 'adicional', this.value)">${adicSelect}</select></td></tr>`;
            }
        });
    });
    let tbody = document.getElementById('tbodyProgramacion'); if(tbody) tbody.innerHTML = htmlTabla || `<tr><td colspan="8" class="empty-state">No hay rutas configuradas.</td></tr>`;
    if(document.getElementById('statAsignaciones')) document.getElementById('statAsignaciones').innerText = `${asignados} / ${totalFilas} Asignados`;
}
function updMem(key, campo, valor) { let fechaSel = document.getElementById('fechaProgInput').value; if (!programacionDiaria[fechaSel]) programacionDiaria[fechaSel] = []; let reg = programacionDiaria[fechaSel].find(r => r.key === key); if (!reg) { reg = { key: key }; programacionDiaria[fechaSel].push(reg); } reg[campo] = valor; }

function sumar20Min(hStr) { let r = String(hStr).trim(); let m = r.match(/(\d{1,2}):(\d{2})/); if(!m) return r; let h = parseInt(m[1]), min = parseInt(m[2]); min += 20; if(min >= 60) { h++; min -= 60; } return `${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}`; }
function renderizarRosterOficial() {
    let fechaSel = document.getElementById('fechaProgInput').value; let dObj = new Date(fechaSel + 'T00:00:00'); let fechaAyerObj = new Date(dObj); fechaAyerObj.setDate(fechaAyerObj.getDate() - 1); let ayerStr = fechaAyerObj.toISOString().split('T')[0];
    let progHoy = programacionDiaria[fechaSel] || []; let progAyer = programacionDiaria[ayerStr] || null; let hayCapacitacion = (datosCapacitacion.titulo !== "" && datosCapacitacion.lista.length > 0); let headCap = hayCapacitacion ? `<th style="width: 120px; background:#8e44ad;">CAPACITACIÓN</th>` : '';
    let tablaHTML = `<table class="roster-table" id="tablaFotografia"><thead><tr><th colspan="7" class="roster-header-top">PROGRAMACION RECOJO ZONAS - VEST. SUR / TRUCKSHOP - ZONAS</th><th colspan="${4 + (hayCapacitacion?1:0)}" class="roster-header-top" style="text-align:right;">${dObj.toLocaleDateString('es-PE', {day:'2-digit', month:'2-digit', year:'numeric'})}</th></tr><tr><th colspan="7" class="roster-header-sub">EN BASE DEBERAN ESTAR SEGÚN LA HORA ESTIPULADA</th><th colspan="${4 + (hayCapacitacion?1:0)}" class="roster-header-sub">A1 (Y DEMÁS TURNOS)</th></tr><tr style="background:#f0f0f0;"><th style="width:20px; background:#cc0000; color:white;">N°</th><th class="col-gris-oscuro">Hr. Ingreso</th><th class="col-gris-oscuro">Salida Base</th><th style="width:60px; background:#cc0000; color:white;">Zona</th><th style="background:#cc0000; color:white;">Hora Inicio Servicio</th><th class="col-gris-claro">Conductor A</th><th class="col-gris-oscuro">Tipo Unidad</th><th class="col-gris-claro">OBSERVACION ZONA</th><th style="background:#cc0000; color:white;">CARRIL INGRESO</th><th class="col-gris-claro">OBS. Conductor</th><th style="background:#3498db; color:white;">ZONA REPARTO</th>${headCap}</tr></thead><tbody>`;
    let contadorFilas = 1;
    progHoy.forEach(reg => {
        let zName = reg.key.split('_')[0], turno = reg.key.split('_')[1]; let zObj = zonasBD.find(z => z.zona === zName) || {}; let condObj = conductores.find(c => (getProp(c, "DNI") || c.DNI) === reg.conductor) || { nombre: '--', contrato: '' }; let uniObj = unidades.find(u => u.cod === reg.unidad) || { cod: '', tipoVehiculo: '' };
        let hrInicioServicio = '--:--'; if (turno === 'A1') hrInicioServicio = zObj.a1; else if (turno === 'A2') hrInicioServicio = zObj.a2_lv; else if (turno === 'A2P') hrInicioServicio = zObj.a2p_lv; else if (turno === 'B1') hrInicioServicio = zObj.b1; else if (turno === 'B2') hrInicioServicio = zObj.b2; else if (turno === 'B2P') hrInicioServicio = zObj.b2p;
        let hrIngresoFinal = hrInicioServicio; if(reg.adicional && DIC_ADICIONALES[reg.adicional] && DIC_ADICIONALES[reg.adicional].h) { hrIngresoFinal = DIC_ADICIONALES[reg.adicional].h; } let hrSalidaFinal = sumar20Min(hrIngresoFinal);
        let bgConductor = ""; if (reg.adicional === "DESCANSO") { bgConductor = "background: #f1c40f;"; } else if (progAyer !== null && reg.conductor) { let hizoAyer = progAyer.find(a => a.conductor === reg.conductor); let zonaAyer = hizoAyer ? hizoAyer.key.split('_')[0] : null; if(zonaAyer && zonaAyer !== zName) { bgConductor = "background: #2ecc71; color: #000; font-weight: bold;"; } }
        let tdUnidad = (uniObj.tipoVehiculo && uniObj.tipoVehiculo.includes('BUS')) ? `<td style="background:#95a5a6; color:#fff; font-weight:bold;">BUS / VOLV <br><small>${uniObj.cod}</small></td>` : `<td style="background:#f39c12; color:#fff; font-weight:bold;">VAN / MERC <br><small>${uniObj.cod}</small></td>`;
        let rutaOficial = ''; if (turno === 'A1') rutaOficial = zObj.rec_a1_ofic; else if (turno === 'A2') rutaOficial = zObj.rec_a2_ofic; else if (turno === 'A2P') rutaOficial = zObj.rec_a2p_ofic; else if (turno === 'B1') rutaOficial = zObj.rec_b1_ofic; else if (turno === 'B2') rutaOficial = zObj.rec_b2_ofic; else if (turno === 'B2P') rutaOficial = zObj.rec_b2p_ofic;
        let tdObsZona = `<td class="celda-texto-largo">${rutaOficial || '-'}</td>`; let tdCarril = `<td>${reg.carril || ''}</td>`;
        let tdAdic = `<td></td>`; if(reg.adicional && DIC_ADICIONALES[reg.adicional]) { let d = DIC_ADICIONALES[reg.adicional]; tdAdic = `<td style="background:${d.bg}; color:${d.col}; font-weight:bold; font-size:0.75rem;">${reg.adicional}</td>`; }
        let tdReparto = reg.reparto ? `<td style="background:#3498db; color:white; font-weight:bold;">REPARTO ${reg.reparto}</td>` : `<td></td>`;
        let tdCapacitacion = ''; let cNom = getProp(condObj, "CONDUCTOR") || getProp(condObj, "NOMBRE") || condObj.NOMBRE || '--';
        if (hayCapacitacion) { let nombreNorm = normalizarTexto(cNom); let leToca = datosCapacitacion.lista.some(n => nombreNorm.includes(n) || n.includes(nombreNorm)); tdCapacitacion = leToca ? `<td style="background:#8e44ad; color:white; font-weight:bold; font-size:0.75rem; border:2px solid #000;">${datosCapacitacion.titulo}</td>` : `<td></td>`; }
        tablaHTML += `<tr><td style="background:#cc0000; color:white; font-weight:bold;">${contadorFilas++}</td><td style="background:#c0392b; color:#fff; font-weight:bold;">${hrIngresoFinal || '-'}</td><td class="col-gris-oscuro">${hrSalidaFinal || '-'}</td><td class="col-amarillo">${zName}</td><td class="col-amarillo">${hrInicioServicio || '-'}</td><td style="${bgConductor}">${cNom}</td>${tdUnidad}${tdObsZona}${tdCarril}${tdAdic}${tdReparto}${tdCapacitacion}</tr>`;
    });
    tablaHTML += `</tbody></table>`; let containerRoster = document.getElementById('contenedorFotoRoster'); if(containerRoster) containerRoster.innerHTML = tablaHTML;
}

function descargarRosterImagen() { let node = document.getElementById('tablaFotografia'); if(!node) return alert("Primero debes cargar una programación."); html2canvas(node, { scale: 2 }).then(canvas => { let imgURL = canvas.toDataURL("image/jpeg", 1.0); let link = document.createElement("a"); let fechaInput = document.getElementById('fechaProgInput'); link.download = `Roster_WhatsApp_${fechaInput ? fechaInput.value : 'prog'}.jpg`; link.href = imgURL; link.click(); }); }

function solicitarClaveParaAccion(cb) { callbackAccionPendiente = cb; let inp = document.getElementById('claveAdminInput'); if(inp) inp.value = ''; abrirModal('modalVaciar'); setTimeout(() => { if(inp) inp.focus(); }, 100); }
function confirmarVaciarDatos() { let inp = document.getElementById('claveAdminInput'); if(inp && inp.value === CLAVE_ADMIN_PERMANENTE) { cerrarModal('modalVaciar'); callbackAccionPendiente?.(); } else alert("Clave incorrecta."); }
function abrirModalVaciarSeguro(t) { targetVaciar = t; solicitarClaveParaAccion(() => { if(t === 'conductores') { conductores = []; guardarConductores(true); renderizarConductores(); } else { unidades = []; guardarUnidades(true); renderizarUnidades(); } alert("✓ Eliminado."); }); }
function exportarRespaldoSistema() {
    try { 
        const data = { conductores: cargarDatosSeguros('bd_conductores_smcv', []), unidades: cargarDatosSeguros('bd_unidades_smcv', []), zonas: cargarDatosSeguros('bd_zonas_oficial_smcv', ZONAS_FABRICA), plantillas: cargarDatosSeguros('bd_plantillas_smcv', {}), programacion: cargarDatosSeguros('bd_prog_diaria_smcv', {}) };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Respaldo_SMCV_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(a.href);
    } catch(e) { alert("Error: " + e.message); }
}
function importarRespaldoSistema(e) {
    const file = e.target.files[0]; if (!file) return; const r = new FileReader();
    r.onload = function(evt) { 
        try { 
            const d = JSON.parse(evt.target.result);
            if(d.conductores) localStorage.setItem('bd_conductores_smcv', JSON.stringify(d.conductores)); if(d.unidades) localStorage.setItem('bd_unidades_smcv', JSON.stringify(d.unidades)); if(d.zonas) localStorage.setItem('bd_zonas_oficial_smcv', JSON.stringify(d.zonas)); if(d.plantillas) localStorage.setItem('bd_plantillas_smcv', JSON.stringify(d.plantillas)); if(d.programacion) localStorage.setItem('bd_prog_diaria_smcv', JSON.stringify(d.programacion));
            alert("✓ RESTAURADO. Refrescando..."); location.reload(); 
        } catch(err) { alert("Error: " + err.message); } e.target.value = ''; 
    }; r.readAsText(file);
}

// ARRANQUE DEL SISTEMA
window.onload = async function() { 
    aplicarTema(localStorage.getItem('planner_theme') || 'cerro-verde'); 
    estilizarTitulosYContenedores();

    try { let [resCond, resUni] = await Promise.all([ fetch(URL_API_CONDUCTORES + "?t=" + new Date().getTime()), fetch(URL_API_UNIDADES + "?t=" + new Date().getTime()) ]);
        if(resCond.ok) { let dC = await resCond.json(); if(dC && dC.length > 0) { conductores = dC; guardarConductores(false); } }
        if(resUni.ok) { let dU = await resUni.json(); if(dU && dU.length > 0) { unidades = dU; guardarUnidades(false); } }
    } catch(e) { console.log("Modo offline o error de red."); }
    
    actualizarFiltrosDinamicos(); 
    actualizarFiltrosDinamicosUnidades(); 
    actualizarFiltrosDinamicosConductores();
    
    renderizarConductores(); 
    renderizarUnidades(); 
    renderizarZonas(); // <--- ESTO EVITARÁ QUE LA PÁGINA SE VEA VACÍA
    actualizarDashboard(); 
    cambiarVista('dashboard'); 
};

function importarExcelMantenimiento(e) {
    let file = e.target.files[0]; if(!file) return; let r = new FileReader();
    r.onload = function(evt) {
        try {
            let dataArr = new Uint8Array(evt.target.result); let wb = XLSX.read(dataArr, {type: 'array'}); let sheet = wb.Sheets[wb.SheetNames[0]]; let rows = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: ""});
            let actualizadosCount = 0; let idxCod = -1, idxLugar = -1, idxObs = -1;
            unidades.forEach(u => { u.estado = 'OPERATIVO'; u.mantenimiento = ''; u.prioridadTurnoA = false; });
            rows.forEach(row => {
                let tempCod = row.findIndex(cell => String(cell).toUpperCase().trim() === 'CODIGO' || String(cell).toUpperCase().trim() === 'CÓDIGO'); let tempLugar = row.findIndex(cell => String(cell).toUpperCase().trim() === 'LUGAR'); let tempObs = row.findIndex(cell => String(cell).toUpperCase().trim() === 'OBSERVACIONES');
                if (tempCod !== -1) idxCod = tempCod; if (tempLugar !== -1) idxLugar = tempLugar; if (tempObs !== -1) idxObs = tempObs;
                if (idxCod !== -1) {
                    let codVal = String(row[idxCod]).toUpperCase().trim(); let lugarVal = idxLugar !== -1 ? String(row[idxLugar]).toUpperCase().trim() : '';
                    if (codVal && codVal !== 'CODIGO' && codVal !== 'CÓDIGO') {
                        let codLimpio = codVal.replace(/[^A-Z0-9]/g, '').replace(/^0+/, ''); 
                        let uEncontrada = unidades.find(u => { let cBase = String(u.codigo || u.cod || '').toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^0+/, ''); return cBase === codLimpio; });
                        if (uEncontrada) { uEncontrada.estado = 'TALLER'; uEncontrada.mantenimiento = lugarVal || 'MANTTO'; if (lugarVal.includes("AUTRISA") || lugarVal.includes("BASE 1") || lugarVal.includes("DIVE")) { uEncontrada.prioridadTurnoA = true; } actualizadosCount++; }
                    }
                }
            });
            guardarUnidades(); actualizarFiltrosDinamicosUnidades(); renderizarUnidades(); alert(`✓ Importación exitosa. Se pasaron a TALLER ${actualizadosCount} unidades según el reporte.`);
        } catch(err) { alert("Error al leer el Excel de mantenimiento: " + err.message); } e.target.value = '';
    }; r.readAsArrayBuffer(file);
}

// =========================================================
// GENERADOR DE PLANTILLA EXCEL PARA BASE DE DATOS DE ZONAS
// =========================================================
function descargarPlantillaZonasBD() {
    let exportData = ZONAS_FABRICA.map(z => ({
        "ZONA": z.zona || "",
        "HORA_A1": z.a1 || "",
        "RUTA_A1_OFIC": z.rec_a1_ofic || "",
        "RUTA_A1_DESV1": z.rec_a1_desv1 || "",
        "RUTA_A1_DESV2": z.rec_a1_desv2 || "",
        "HORA_A2_LV": z.a2_lv || "",
        "HORA_A2_SDFER": z.a2_sd || "",
        "RUTA_A2_OFIC": z.rec_a2_ofic || "",
        "RUTA_A2_DESV1": z.rec_a2_desv1 || "",
        "RUTA_A2_DESV2": z.rec_a2_desv2 || "",
        "HORA_A2P_LV": z.a2p_lv || "",
        "HORA_A2P_SDFER": z.a2p_sd || "",
        "RUTA_A2P_OFIC": z.rec_a2p_ofic || "",
        "RUTA_A2P_DESV1": z.rec_a2p_desv1 || "",
        "RUTA_A2P_DESV2": z.rec_a2p_desv2 || "",
        "HORA_B1": z.b1 || "",
        "RUTA_B1_OFIC": z.rec_b1_ofic || "",
        "RUTA_B1_DESV1": z.rec_b1_desv1 || "",
        "RUTA_B1_DESV2": z.rec_b1_desv2 || "",
        "HORA_B2": z.b2 || "",
        "RUTA_B2_OFIC": z.rec_b2_ofic || "",
        "RUTA_B2_DESV1": z.rec_b2_desv1 || "",
        "RUTA_B2_DESV2": z.rec_b2_desv2 || "",
        "HORA_B2P": z.b2p || "",
        "RUTA_B2P_OFIC": z.rec_b2p_ofic || "",
        "RUTA_B2P_DESV1": z.rec_b2p_desv1 || "",
        "RUTA_B2P_DESV2": z.rec_b2p_desv2 || ""
    }));

    let ws = XLSX.utils.json_to_sheet(exportData);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Zonas_SMCV");
    XLSX.writeFile(wb, "Plantilla_BD_Zonas_SMCV.xlsx");
}

