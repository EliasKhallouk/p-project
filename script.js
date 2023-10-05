/** informations sur chaque département sous la forme (
 
{ 
  "numéro de département":{
  departement:"nom du département",
  region:"nom de la region",
  surperficie:"superficie du département", ->source wikipédia
  superficieArbres:"superficie forestière du département" -> source wikipédia
  habitants:"nombre d'habitants du département", -> source wikipédia
  arbre1:"nom premier arbre",
  arbre2:"nom deuxième arbre",
  arbre3:"nom troisième arbre",
  image1:"image du premier arbre", -> images du répertoire assets
  image2:"image du deuxième arbre", -> images du répertoire assets
  image3:"image du troisième arbre", -> images du répertoire assets
  classement:"positionnement parmi les département les plus peuplés de france" -> source wikipédia 
  article:"article du département",
  },
}
)*/

let donnees = {
    "01": {
        departement: "Ain",
        region: "Auvergne-Rhône-Alpes",
        superficie: "5762,4",
        superficieArbres: "1743",
        habitants: "652432",
        arbre1: "Chêne Rouvre",
        arbre2: "Hêtre",
        arbre3: "Châtaignier",
        image1: "./assets/trees/chene-rouvre.jpeg",
        image2: "./assets/trees/hetre.jpeg",
        image3: "./assets/trees/chataignier.png",
        classement: 39,
        article: "L'",
    },
    "02": {
        departement: "Aisne",
        region: "Hauts-de-France",
        superficie: "7361,7",
        superficieArbres: "1223",
        habitants: "531345",
        arbre1: "Chêne pédonculé",
        arbre2: "Chêne rouvre",
        arbre3: "Frêne",
        image1: "./assets/trees/chene-pedoncule.jpeg",
        image2: "./assets/trees/chene-rouvre.jpeg",
        image3: './assets/trees/frene.jpeg',
        classement: 51,
        article: "L'",
    },
    "03": {
        departement: "Allier",
        region: "Auvergne-Rhône-Alpes",
        superficie: "7340,1",
        superficieArbres: "1226",
        habitants: "335975",
        arbre1: "Chêne rouvre",
        arbre2: "Chêne pédonculé",
        arbre3: "Frêne",
        image1: "./assets/trees/chene-rouvre.jpeg",
        image2: "./assets/trees/chene-pedoncule.jpeg",
        image3: './assets/trees/frene.jpeg',
        classement: 69,
        article: "L'",
    },
    "04": {
        departement: "Alpes-de-Haute-Provence",
        region: "Provence-Alpes-Côte d'Azur",
        superficie: "6925",
        superficieArbres: "3400",
        habitants: "164308",
        arbre1: "Pin sylvestre",
        arbre2: "Chêne rouvre",
        arbre3: "Chêne pédonculé",
        image1: "./assets/trees/pin-sylvestre.jpeg",
        image2: "./assets/trees/chene-rouvre.jpeg",
        image3: "./assets/trees/chene-pedoncule.jpeg",
        classement: 95,
        article: "Les ",
    },
    "05": {
        departement: "Hautes-Alpes",
        region: "Provence-Alpes-Côte d'Azur",
        superficie: "5549",
        superficieArbres: "1887",
        habitants: "141784",
        arbre1: "Pin sylvestre",
        arbre2: "Chêne pédonculé",
        arbre3: "Hêtre",
        image1: "./assets/trees/pin-sylvestre.jpeg",
        image2: "./assets/trees/chene-pedoncule.jpeg",
        image3: "./assets/trees/hetre.jpeg",
        classement: 100,
        article: "Les ",
    },
    "06": {
        departement: "Alpes-Maritimes",
        region: "Provence-Alpes-Côte d'Azue",
        superficie: "4298,6",
        superficieArbres: "2248",
        habitants: "1094283",
        arbre1: "Pin sylvestre",
        arbre2: "Chêne pubescent",
        arbre3: "Sapin péctiné",
        image1: "./assets/trees/pin-sylvestre.jpeg",
        image2: "./assets/trees/chene-pubescent.jpeg",
        image3: "./assets/trees/sapin-pectine.jpeg",
        classement: 20,
        article: "Les ",
    },
    "07": {
        departement: "Ardèche",
        region: "Auvergne-Rhône-Alpes",
        superficie: "5228",
        superficieArbres: "2510",
        habitants: "328278",
        arbre1: "Pin sylvestre",
        arbre2: "Sapin péctiné",
        arbre3: "Douglas",
        image1: "./assets/trees/pin-sylvestre.jpeg",
        image2: "./assets/trees/sapin-pectine.jpeg",
        image3: "./assets/trees/douglas.jpeg",
        classement: 73,
        article: "L'",
    },
    "08": {
        departement: "Ardennes",
        region: 'Grand Est',
        superficie: '5229',
        superficieArbres: '1485',
        habitants: '270582',
        arbre1: 'Chêne rouvre',
        arbre2: 'Frêne',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/frene.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 80,
        article: "Les ",
    },
    "09": {
        departement: "Ariège",
        region: 'Occitanie',
        superficie: '4889,9',
        superficieArbres: '2000',
        habitants: '153287',
        arbre1: 'Sapin péctiné',
        arbre2: 'Hêtre',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/sapin-pectine.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 97,
        article: "L'",
    },
    "10": {
        departement: "Aube",
        region: 'Grand Est',
        superficie: '6004',
        superficieArbres: '1345',
        habitants: '310242',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 74,
        article: "L'",
    },
    "11": {
        departement: "Aude",
        region: 'Occitanie',
        superficie: '6139',
        superficieArbres: '1743',
        habitants: '374070',
        arbre1: "Pin sylvestre",
        arbre2: 'Chêne Vert',
        arbre3: 'Chêne pubescent',
        image1: "./assets/trees/pin-sylvestre.jpeg",
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 64,
        article: "L'",
    },
    "12": {
        departement: "Aveyron",
        region: 'Occitanie',
        superficie: '8735',
        superficieArbres: '2446',
        habitants: '279595',
        arbre1: "Chêne pubescent",
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 79,
        article: "L'",
    },
    "13": {
        departement: "Bouches-du-Rhône",
        region: "Provence-Alpes-Côte d'Azur",
        superficie: '5087',
        superficieArbres: '1084',
        habitants: '2043110',
        arbre1: "Pin d'Alep",
        arbre2: 'Chêne vert',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/pin-d-alep.jpeg',
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 3,
        article: "Les ",
    },
    "14": {
        departement: 'Calvados',
        region: "Normandie",
        superficie: '5534,5',
        superficieArbres: '455',
        habitants: '694905',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 34,
        article: "Le ",
    },
    "15": {
        departement: 'Cantal',
        region: "Auvergne-Rhône-Alpes",
        superficie: '5726',
        superficieArbres: '1512',
        habitants: '144692',
        arbre1: 'Hêtre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 98,
        article: "Le ",
    },
    "16": {
        departement: 'Charente',
        region: "Nouvelle-Aquitaine",
        superficie: '5956',
        superficieArbres: '1173',
        habitants: '352015',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne pubescent',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 68,
        article: "La ",
    },
    "17": {
        departement: 'Charente-Maritime',
        region: "Nouvelle-Aquitaine",
        superficie: '6863,8',
        superficieArbres: '1023',
        habitants: '651358',
        arbre1: 'Pin maritime',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/pin-maritime.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 40,
        article: "La ",
    },
    "18": {
        departement: 'Cher',
        region: "Centre-Val de Loire",
        superficie: '7235',
        superficieArbres: '1700',
        habitants: '302306',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pubescent.jpeg',
        classement: 76,
        article: "Le ",
    },
    "19": {
        departement: 'Corrèze',
        region: "Nouvelle-Aquitaine",
        superficie: '5856,8',
        superficieArbres: '2653',
        habitants: '240073',
        arbre1: 'Chêne rouvre',
        arbre2: 'Douglas',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/douglas.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 84,
        article: "La ",
    },
    "2A": {
        departement: 'Corse-du-Sud',
        region: "Corse",
        superficie: '4014,2',
        superficieArbres: '2689',
        habitants: '158507',
        arbre1: 'Chêne vert',
        arbre2: 'Chêne liège',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-vert.jpeg',
        image2: './assets/trees/chene-liege.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 96,
        article: "La ",
    },
    "2B": {
        departement: 'Haute-Corse',
        region: "Corse",
        superficie: '4665,6',
        superficieArbres: '2333',
        habitants: '181933',
        arbre1: 'Chêne vert',
        arbre2: 'Chêne liège',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-vert.jpeg',
        image2: './assets/trees/chene-liege.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 92,
        article: "La ",
    },
    "21": {
        departement: "Côte-d'Or",
        region: "Bourgone-Franche-Comté",
        superficie: '8763,2',
        superficieArbres: '3163',
        habitants: '534124',
        arbre1: 'Chêne rouvre',
        arbre2: 'Hêtre',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 50,
        article: "La ",
    },
    "22": {
        departement: "Côtes-d'Armor",
        region: "Bretagne",
        superficie: '6877,6',
        superficieArbres: '812',
        habitants: '600582',
        arbre1: 'Hêtre',
        arbre2: 'Châtaignier',
        arbre3: 'Pin sylvestre ',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chataignier.png',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 42,
        article: "Les ",
    },
    "23": {
        departement: "Creuse",
        region: "Nouvelle-Aquitaine",
        superficie: '5565,4',
        superficieArbres: '1658',
        habitants: '116617',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 101,
        article: "La ",
    },
    "24": {
        departement: "Dordogne",
        region: "Nouvelle-Aquitaine",
        superficie: '9060',
        superficieArbres: '3896',
        habitants: '413223',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne pubescent',
        arbre3: 'Pin maritime',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/pin-maritime.jpeg',
        classement: 60,
        article: "La ",
    },
    "25": {
        departement: "Doubs",
        region: "Bourgone-Franche-Comté",
        superficie: '5232,6',
        superficieArbres: '2135',
        habitants: '543974',
        arbre1: 'Chêne rouvre',
        arbre2: 'Charme',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/le-charme-commun-carpinus-betulus-visoflora-104525.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 49,
        article: "La ",
    },
    "26": {
        departement: "Drôme",
        region: "Auvergne-Rhône-Alpes",
        superficie: '6530',
        superficieArbres: '2834',
        habitants: '516762',
        arbre1: 'Pin sylvestre',
        arbre2: 'Chêne pubescent',
        arbre3: 'Hêtre',
        image1: './assets/trees/pin-sylvestre.jpeg',
        image2: './assets/trees/pubescent.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 52,
        article: "La ",
    },
    "27": {
        departement: "Eure",
        region: "Normandie",
        superficie: '6039,9',
        superficieArbres: '1268',
        habitants: '599507',
        arbre1: 'Chêne rouvre',
        arbre2: 'Hêtre',
        arbre3: 'Charme',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/le-charme-commun-carpinus-betulus-visoflora-104525.jpeg',
        classement: 43,
        article: "L'",
    },
    "28": {
        departement: "Eure-et-Loir",
        region: "Centre-Val de Loire",
        superficie: '5880',
        superficieArbres: '706',
        habitants: '431575',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Douglas',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/douglas.jpeg',
        classement: 58,
        article: "L'",
    },
    "29": {
        departement: "Finistère",
        region: "Bretagne",
        superficie: '6733',
        superficieArbres: '741',
        habitants: '915090',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Châtaignier',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chataignier.png',
        image3: './assets/trees/hetre.jpeg',
        classement: 24,
        article: "Le ",
    },
    "30": {
        departement: "Gard",
        region: "Occitanie",
        superficie: '5852,8',
        superficieArbres: '2166',
        habitants: '748437',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pubescent',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 32,
        article: "Le ",
    },
    "31": {
        departement: "Haute-Garonne",
        region: "Occitanie",
        superficie: '6309,3',
        superficieArbres: '1243',
        habitants: '1400039',
        arbre1: 'Chêne vert',
        arbre2: 'Hêtre',
        arbre3: 'Chataignier',
        image1: './assets/trees/chene-vert.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 13,
        article: "La ",
    },
    "32": {
        departement: "Gers",
        region: "Occitanie",
        superficie: '6256,8',
        superficieArbres: '845',
        habitants: '191377',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 90,
        article: "Le ",
    },
    "33": {
        departement: "Gironde",
        region: "Nouvelle-Aquitaine",
        superficie: '9975,6',
        superficieArbres: '4760',
        habitants: '1623749',
        arbre1: 'Pin maritime',
        arbre2: 'Chêne rouvre',
        arbre3: 'Chêne pédouculé',
        image1: './assets/trees/pin-maritime.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 6,
        article: "La ",
    },
    "34": {
        departement: "Hérault",
        region: "Occitanie",
        superficie: '6101',
        superficieArbres: '1983',
        habitants: '1175623',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne vert',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 18,
        article: "L'",
    },
    "35": {
        departement: "Ille-et-Vilaine",
        region: "Bretagne",
        superficie: '6774,7',
        superficieArbres: '562',
        habitants: '1079498',
        arbre1: 'Chêne vert',
        arbre2: 'Hêtre',
        arbre3: 'Chataignier',
        image1: './assets/trees/chene-vert.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 21,
        article: "L'",
    },
    "36": {
        departement: "Indre",
        region: "Centre-Val de Loire",
        superficie: '6790,6',
        superficieArbres: '1161',
        habitants: '219316',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Charme',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/le-charme-commun-carpinus-betulus-visoflora-104525.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 88,
        article: "L'",
    },
    "37": {
        departement: "Indre-et-Loire",
        region: "Centre-Val de Loire",
        superficie: '6127',
        superficieArbres: '1501',
        habitants: '610079',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 41,
        article: "L'",
    },
    "38": {
        departement: "Isère",
        region: "Auvergne-Rhône-Alpes",
        superficie: '7431,5',
        superficieArbres: '2393',
        habitants: '1271166',
        arbre1: 'Épicéa commun',
        arbre2: 'Sapin péctiné',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/epicea-commun.jpeg',
        image2: "./assets/trees/sapin-pectine.jpeg",
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 15,
        article: "L'",
    },
    "39": {
        departement: "Jura",
        region: "Bourgogne-Franche-Comté",
        superficie: '4999,2',
        superficieArbres: '2210',
        habitants: '259199',
        arbre1: 'Chêne rouvre',
        arbre2: 'Hêtre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 82,
        article: "Le ",
    },
    "40": {
        departement: "Landes",
        region: "Nouvelle-Aquitaine",
        superficie: '9242,6',
        superficieArbres: '5703',
        habitants: '413690',
        arbre1: 'Pin maritime',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/pin-maritime.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 59,
        article: "Les ",
    },
    "41": {
        departement: "Loir-et-Cher",
        region: "Centre-Val de Loire",
        superficie: '6343',
        superficieArbres: '2030',
        habitants: '329470',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 72,
        article: "Le ",
    },
    "42": {
        departement: "Loire",
        region: "Auvergne-Rhône-Alpes",
        superficie: '4781',
        superficieArbres: '1262',
        habitants: '765634',
        arbre1: 'Hêtre',
        arbre2: 'Épicéa commun',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/epicea-commun.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 30,
        article: "La ",
    },
    "43": {
        departement: "Haute-Loire",
        region: "Auvergne-Rhône-Alpes",
        superficie: '4977',
        superficieArbres: '1851',
        habitants: '227570',
        arbre1: 'Pin sylvestre',
        arbre2: 'Sapin péctiné',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/pin-sylvestre.jpeg',
        image2: './assets/trees/sapin-pectine.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 87,
        article: "La ",
    },
    "44": {
        departement: "Loire-Atlantique",
        region: "Pays de la Loire",
        superficie: '6815',
        superficieArbres: '552',
        habitants: '1429272',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Pin maritime',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pin-maritime.jpeg',
        classement: 9,
        article: "La ",
    },
    "45": {
        departement: "Loiret",
        region: "Centre-Val de Loire",
        superficie: '6775',
        superficieArbres: '1789',
        habitants: '680434',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Charme',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/le-charme-commun-carpinus-betulus-visoflora-104525.jpeg',
        classement: 37,
        article: "Le ",
    },
    "46": {
        departement: "Lot",
        region: "Occitanie",
        superficie: '5217',
        superficieArbres: '2139',
        habitants: '174094',
        arbre1: 'Chêne pubescent',
        arbre2: 'Chêne rouvre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 93,
        article: "Le ",
    },
    "47": {
        departement: "Lot-et-Garonne",
        region: "Nouvelle-Aquitaine",
        superficie: '5361',
        superficieArbres: '1281',
        habitants: '331271',
        arbre1: 'Chêne pubescent',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 71,
        article: "Le ",
    },
    "48": {
        departement: "Lozère",
        region: "Occitanie",
        superficie: '5167',
        superficieArbres: '2320',
        habitants: '76604',
        arbre1: 'Hêtre',
        arbre2: 'Châtaignier',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chataignier.png',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 102,
        article: "La ",
    },
    "49": {
        departement: "Maine-et-Loire",
        region: "Pays de la Loire",
        superficie: '7166',
        superficieArbres: '817',
        habitants: '818273',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 28,
        article: "Le ",
    },
    "50": {
        departement: "Manche",
        region: "Normandie",
        superficie: '5938',
        superficieArbres: '261',
        habitants: '495045',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 53,
        article: "La ",
    },
    "51": {
        departement: "Marne",
        region: "Grand-Est",
        superficie: '8162',
        superficieArbres: '1355',
        habitants: '566855',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 45,
        article: "La ",
    },
    "52": {
        departement: "Haute-Marne",
        region: "Grand-Est",
        superficie: '6211',
        superficieArbres: '2435',
        habitants: '172512',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne rouvre',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 94,
        article: "La ",
    },
    "53": {
        departement: "Mayenne",
        region: "Pays de la Loire",
        superficie: '5175',
        superficieArbres: '352',
        habitants: '307062',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 75,
        article: "La ",
    },
    "54": {
        departement: "Meurthe-et-Moselle",
        region: "Grand-Est",
        superficie: '5246',
        superficieArbres: '1600',
        habitants: '733760',
        arbre1: 'Hêtre',
        arbre2: 'Chêne rouvre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 33,
        article: "La ",
    },
    "55": {
        departement: "Meuse",
        region: "Grand-Est",
        superficie: '6211',
        superficieArbres: '2230',
        habitants: '184083',
        arbre1: 'Chêne rouvre',
        arbre2: 'Hêtre',
        arbre3: 'Charme',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/le-charme-commun-carpinus-betulus-visoflora-104525.jpeg',
        classement: 91,
        article: "La ",
    },
    "56": {
        departement: "Morbihan",
        region: "Bretagne",
        superficie: '6823',
        superficieArbres: '1119',
        habitants: '759684',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Pin maritime',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pin-maritime.jpeg',
        classement: 31,
        article: "Le ",
    },
    "57": {
        departement: "Moselle",
        region: "Grand-Est",
        superficie: '6216',
        superficieArbres: '1716',
        habitants: '1046543',
        arbre1: 'Hêtre',
        arbre2: 'Chêne rouvre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 23,
        article: "La ",
    },
    "58": {
        departement: "Nièvre",
        region: "Bourgogne-Franche-Comté",
        superficie: '6817',
        superficieArbres: '2243',
        habitants: '204452',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Douglas',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/douglas.jpeg',
        classement: 89,
        article: "La ",
    },
    "59": {
        departement: "Nord",
        region: "Hauts-de-France",
        superficie: '5743',
        superficieArbres: '442',
        habitants: '2608346',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne rouvre',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 1,
        article: "Le ",
    },
    "60": {
        departement: "Oise",
        region: "Hauts-de-France",
        superficie: '5860',
        superficieArbres: '1219',
        habitants: '829419',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 26,
        article: "L'",
    },
    "61": {
        departement: "Orne",
        region: "Normandie",
        superficie: '6103',
        superficieArbres: '952',
        habitants: '279942',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 78,
        article: "L'",
    },
    "62": {
        departement: "Pas-de-Calais",
        region: "Hauts-de-France",
        superficie: '6671',
        superficieArbres: '460',
        habitants: '1465278',
        arbre1: 'Frêne',
        arbre2: 'Hêtre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/frene.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 7,
        article: "Le ",
    },
    "63": {
        departement: "Puy-de-Dôme",
        region: "Auvergne-Rhône-Alpes",
        superficie: '7970',
        superficieArbres: '2550',
        habitants: '662152',
        arbre1: 'Chênes rouvre',
        arbre2: 'Épicéa commun',
        arbre3: 'Sapin péctiné',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/epicea-commun.jpeg',
        image3: './assets/trees/sapin-pectine.jpeg',
        classement: 38,
        article: "Le ",
    },
    "64": {
        departement: "Pyrénées-Atlantiques",
        region: "Auvergne-Rhône-Alpes",
        superficie: '7645',
        superficieArbres: '2102',
        habitants: '682621',
        arbre1: 'Hêtre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 36,
        article: "Les ",
    },
    "65": {
        departement: "Hautes-Pyrénées",
        region: "Occitanie",
        superficie: '4464',
        superficieArbres: '1299',
        habitants: '229567',
        arbre1: 'Hêtre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 86,
        article: "Les ",
    },
    "66": {
        departement: "Pyrénées-Orientales",
        region: "Occitanie",
        superficie: '4116',
        superficieArbres: '1404',
        habitants: '479979',
        arbre1: 'Chêne pubescent',
        arbre2: 'Chêne vert',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 54,
        article: "Les ",
    },
    "67": {
        departement: "Bas-Rhin",
        region: "Grand-Est",
        superficie: '4755',
        superficieArbres: '1721',
        habitants: '1140057',
        arbre1: 'Hêtre',
        arbre2: 'Chêne rouvre',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 19,
        article: "Le ",
    },
    "68": {
        departement: "Haut-Rhin",
        region: "Grand-Est",
        superficie: '3525',
        superficieArbres: '1424',
        habitants: '767086',
        arbre1: 'Hêtre',
        arbre2: 'Sapin péctiné',
        arbre3: 'Épicéa commun',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/sapin-pectine.jpeg',
        image3: './assets/trees/epicea-commun.jpeg',
        classement: 29,
        article: "Le ",
    },
    "69": {
        departement: "Rhône",
        region: "Auvergne-Rhône-Alpes",
        superficie: '3249',
        superficieArbres: '699',
        habitants: '464176',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pubescent',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 55,
        article: "Le ",
    },
    "70": {
        departement: "Haute-Saône",
        region: "Bourgogne-Franche-Comté",
        superficie: '5360',
        superficieArbres: '2230',
        habitants: '235313',
        arbre1: 'Chêne rouvre',
        arbre2: 'Hêtre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 85,
        article: "La ",
    },
    "71": {
        departement: "Saône-et-Loire",
        region: "Bourgogne-Franche-Comté",
        superficie: '8575',
        superficieArbres: '1861',
        habitants: '551493',
        arbre1: 'Chêne rouvre',
        arbre2: 'Douglas',
        arbre3: 'Sapin péctiné',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/douglas.jpeg',
        image3: './assets/trees/sapin-pectine.jpeg',
        classement: 48,
        article: "La ",
    },
    "72": {
        departement: "Sarthe",
        region: "Pays de la Loire",
        superficie: '6206',
        superficieArbres: '1067',
        habitants: '566412',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Pin maritime',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/pin-maritime.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 46,
        article: "La ",
    },
    "73": {
        departement: "Savoie",
        region: "Auvergne-Rhône-Alpes",
        superficie: '6028',
        superficieArbres: '1863',
        habitants: '436434',
        arbre1: 'Épicéa commun',
        arbre2: 'Hêtre',
        arbre3: 'Frêne',
        image1: './assets/trees/epicea-commun.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/frene.jpeg',
        classement: 57,
        article: "La ",
    },
    "74": {
        departement: "Haute-Savoie",
        region: "Auvergne-Rhône-Alpes",
        superficie: '4388',
        superficieArbres: '1703',
        habitants: '826094',
        arbre1: 'Épicéa commun',
        arbre2: 'Hêtre',
        arbre3: 'Sapin péctiné',
        image1: './assets/trees/epicea-commun.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/sapin-pectine.jpeg',
        classement: 27,
        article: "La ",
    },
    "75": {
        departement: "Paris",
        region: "Auvergne-Rhône-Alpes",
        superficie: '105,4',
        superficieArbres: '18',
        habitants: '2165423',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin sylvestre',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-sylvestre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 2,
        article: "",
    },
    "76": {
        departement: "Seine-Maritime",
        region: "Normandie",
        superficie: '6278',
        superficieArbres: '986',
        habitants: '1255633',
        arbre1: 'Hêtre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Frêne',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/frene.jpeg',
        classement: 10,
        article: "La ",
    },
    "77": {
        departement: "Seine-et-Marne",
        region: "Île-de-France",
        superficie: '5915',
        superficieArbres: '1366',
        habitants: '1421197',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin sylvestre',
        arbre3: 'Frêne',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-sylvestre.jpeg',
        image3: './assets/trees/frene.jpeg',
        classement: 16,
        article: "La ",
    },
    "78": {
        departement: "Yvelines",
        region: "Île-de-France",
        superficie: '5915',
        superficieArbres: '1366',
        habitants: '1421197',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Châtaignier',
        arbre3: 'Frêne',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chataignier.png',
        image3: './assets/trees/frene.jpeg',
        classement: 8,
        article: "Les ",
    },
    "79": {
        departement: "Deux-Sèvres",
        region: "Nouvelle-Aquitaine",
        superficie: '5999',
        superficieArbres: '486',
        habitants: '374878',
        arbre1: 'Hêtre',
        arbre2: 'Chêne pubescent',
        arbre3: 'Chêne rouvre',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/chene-rouvre.jpeg',
        classement: 63,
        article: "Les ",
    },
    "80": {
        departement: "Somme",
        region: "Hauts-de-France",
        superficie: '6170',
        superficieArbres: '555',
        habitants: '570559',
        arbre1: 'Frêne',
        arbre2: 'Hêtre',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/frene.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 44,
        article: "La ",
    },
    "81": {
        departement: "Tarn",
        region: "Occitanie",
        superficie: '5758',
        superficieArbres: '1635',
        habitants: '389844',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pubescent',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pubescent.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 61,
        article: "Le ",
    },
    "82": {
        departement: "Tarn-et-Garonne",
        region: "Occitanie",
        superficie: '3718',
        superficieArbres: '688',
        habitants: '260669',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Chêne pubescent',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/chene-pubescent.jpeg',
        classement: 81,
        article: "Le ",
    },
    "83": {
        departement: "Var",
        region: "Provence-Alpes-Côte d'Azur",
        superficie: '5973',
        superficieArbres: '3482',
        habitants: '1076711',
        arbre1: "Chêne pubescent",
        arbre2: 'Chêne vert',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 22,
        article: "Le ",
    },
    "84": {
        departement: "Vaucluse",
        region: "Provence-Alpes-Côte d'Azur",
        superficie: '3567',
        superficieArbres: '1316',
        habitants: '561469',
        arbre1: "Chêne pubescent",
        arbre2: 'Chêne vert',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-pubescent.jpeg',
        image2: './assets/trees/chene-vert.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 47,
        article: "Le ",
    },
    "85": {
        departement: "Vendée",
        region: "Pays de la Loire",
        superficie: '6720',
        superficieArbres: '349',
        habitants: '685442',
        arbre1: 'Pin maritime',
        arbre2: 'Chêne rouvre',
        arbre3: 'Douglas',
        image1: './assets/trees/pin-maritime.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/douglas.jpeg',
        article: "La ",
    },
    "86": {
        departement: "Vienne",
        region: "Nouvelle-Aquitaine",
        superficie: '6990',
        superficieArbres: '1118',
        habitants: '438435',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin maritime',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-maritime.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 56,
        article: "La ",
    },
    "87": {
        departement: "Haute-Vienne",
        region: "Nouvelle-Aquitaine",
        superficie: '5520',
        superficieArbres: '1490',
        habitants: '372359',
        arbre1: 'Chêne rouvre',
        arbre2: 'Châtaignier',
        arbre3: 'Douglas',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chataignier.png',
        image3: './assets/trees/douglas.jpeg',
        article: "La ",
    },
    "88": {
        departement: "Vosges",
        region: "Grand-Est",
        superficie: '5874',
        superficieArbres: '2802',
        habitants: '364499',
        arbre1: 'Sapin péctiné',
        arbre2: 'Hêtre',
        arbre3: 'Épicéa commun ',
        image1: './assets/trees/sapin-pectine.jpeg',
        image2: './assets/trees/hetre.jpeg',
        image3: './assets/trees/epicea-commun.jpeg',
        classement: 67,
        article: "Les ",
    },
    "89": {
        departement: "Yonne",
        region: "Bourgogne-Franche-Comté",
        superficie: '7427',
        superficieArbres: '2250',
        habitants: '335707',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne rouvre',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 70,
        article: "L'",
    },
    "90": {
        departement: "Territoire de Belfort",
        region: "Bourgogne-Franche-Comté",
        superficie: '609',
        superficieArbres: '259',
        habitants: '141318',
        arbre1: 'Chêne pédonculé',
        arbre2: 'Chêne rouvre',
        arbre3: 'Hêtre',
        image1: './assets/trees/chene-pedoncule.jpeg',
        image2: './assets/trees/chene-rouvre.jpeg',
        image3: './assets/trees/hetre.jpeg',
        classement: 99,
        article: "Le ",
    },
    "91": {
        departement: "Essonne",
        region: "Bourgogne-Franche-Comté",
        superficie: '1804',
        superficieArbres: '420',
        habitants: '1301659',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin sylvestre',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-sylvestre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 14,
        article: "L'",
    },
    "92": {
        departement: "Hauts-de-Seine",
        region: "Bourgogne-Franche-Comté",
        superficie: '176',
        superficieArbres: '11',
        habitants: '1624357',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin sylvestre',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-sylvestre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 5,
        article: "Les ",
    },
    "93": {
        departement: "Seine-Saint-Denis",
        region: "Bourgogne-Franche-Comté",
        superficie: '236',
        superficieArbres: '20',
        habitants: '1644903',
        arbre1: 'Chêne rouvre',
        arbre2: 'Chêne pédonculé',
        arbre3: 'Pin sylvestre',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/chene-pedoncule.jpeg',
        image3: './assets/trees/pin-sylvestre.jpeg',
        classement: 4,
        article: "La ",
    },
    "94": {
        departement: "Val-de-Marne",
        region: "Bourgogne-Franche-Comté",
        superficie: '245',
        superficieArbres: '20,56',
        habitants: '1407124',
        arbre1: 'Hêtre',
        arbre2: 'Épicéa commun',
        arbre3: 'Chêne pédonculé',
        image1: './assets/trees/hetre.jpeg',
        image2: './assets/trees/epicea-commun.jpeg',
        image3: './assets/trees/chene-pedoncule.jpeg',
        classement: 12,
        article: "Le ",
    },
    "95": {
        departement: "Val-d'Oise",
        region: "Bourgogne-Franche-Comté",
        superficie: '1246',
        superficieArbres: '234',
        habitants: '1249674',
        arbre1: 'Chêne rouvre',
        arbre2: 'Pin sylvestre',
        arbre3: 'Châtaignier',
        image1: './assets/trees/chene-rouvre.jpeg',
        image2: './assets/trees/pin-sylvestre.jpeg',
        image3: './assets/trees/chataignier.png',
        classement: 17,
        article: "Le ",
    },
    "971": {
        departement: "Guadeloupe",
        region: "La Guadeloupe",
        superficie: '1628',
        superficieArbres: '640',
        habitants: '384239',
        arbre1: 'Acajou blanc',
        arbre2: 'gommier blanc',
        arbre3: 'acomat boucan',
        image1: './assets/trees/acajou-blanc.jpeg',
        image2: './assets/trees/gommier-blanc.jpeg',
        image3: './assets/trees/acomat-boucan.jpg',
        classement: 62,
        article: "La ",
    },
    "972": {
        departement: "Martinique",
        region: "La Martinique",
        superficie: '1128',
        superficieArbres: '490',
        habitants: '364508',
        arbre1: 'Arbre du voyageur',
        arbre2: 'Bakoua',
        arbre3: 'Flamboyant',
        image1: './assets/trees/arbre-du-voyageur.jpeg',
        image2: './assets/trees/bakoua.jpeg',
        image3: './assets/trees/flamboyant.jpg',
        classement: 66,
        article: "La ",
    },
    "973": {
        departement: "Guyane",
        region: "La Guyane",
        superficie: '83846',
        superficieArbres: '83000',
        habitants: '281678',
        arbre1: 'Pin des Caraïbes',
        arbre2: 'Angélique',
        arbre3: 'Wapa',
        image1: './assets/trees/pin-des-caraibes.jpeg',
        image2: './assets/trees/angelique.jpeg',
        image3: './assets/trees/wapa.jpeg',
        classement: 77,
        article: "La ",
    },
    "974": {
        departement: "Réunion",
        region: "Réunion",
        superficie: '2512',
        superficieArbres: '1370',
        habitants: '861210',
        arbre1: 'Tamarin des hauts',
        arbre2: 'Palmiste rouge',
        arbre3: 'Bananier',
        image1: './assets/trees/tamarin-des-hauts.jpeg',
        image2: './assets/trees/palmiste-rouge.jpeg',
        image3: './assets/trees/bananier.jpg',
        classement: 25,
        article: "La ",
    },
    "976": {
        departement: "Mayotte",
        region: "Mayotte",
        superficie: '376',
        superficieArbres: '140',
        habitants: '256518',
        arbre1: 'Fromager',
        arbre2: 'Baobab',
        arbre3: 'Bananier',
        image1: './assets/trees/fromager.jpeg',
        image2: './assets/trees/baobab.jpeg',
        image3: './assets/trees/bananier.jpg',
        classement: 83,
        article: "",
    },

}

// partition de bois sec(50% du poids de l'arbre)*partition de carbone dans le bois sec(47,5%)*la masse molaire du CO2
let carbone = 0.5 * 0.475 * 3.67

// taux d'absorption de chaque essence (volume(pi*r**2)*taille*masse volumique*carbone)/longévité
/* sous la forme :
{
  "nom arbre":{
    poidsSec : poidsSec par m^3,
    longevite : espérence moyenne de cette essence en années,
    tailleAdulte : taille moyenne de l'essence d'arbre adulte,
    rayonTronc : rayon moyen de l'essence,
    masseVolumique : poids d'un m^3 de bois de cette essence,

  },
}*/

carbone = 0.475 * 1.2

let essences = {
    "chêne rouvre": {
        poidsSec: 0.73,
        longevite: 600,
        tailleAdulte: 30,
        rayonTronc: 0.25,
        masseVolumique: 710,
        article: "le ",

    },
    "chêne pédonculé": {
        poidsSec: 0.69,
        longevite: 700,
        tailleAdulte: 45,
        rayonTronc: 0.25,
        masseVolumique: 715,
        article: "le ",

    },
    "chêne pubescent": {
        poidsSec: 0.75,
        longevite: 500,
        tailleAdulte: 20,
        rayonTronc: 0.25,
        masseVolumique: 800,
        article: "le ",

    },
    "chêne vert": {
        poidsSec: 0.72,
        longevite: 1000,
        tailleAdulte: 20,
        rayonTronc: 0.35,
        masseVolumique: 910,
        article: "le ",

    },
    "hêtre": {
        poidsSec: 0.71,
        longevite: 500,
        tailleAdulte: 30,
        rayonTronc: 0.375,
        masseVolumique: 680,
        article: "l'",

    },
    "frêne": {
        poidsSec: 0.77,
        longevite: 200,
        tailleAdulte: 45,
        rayonTronc: 0.25,
        masseVolumique: 670,
        article: "le ",

    },
    "châtaignier": {
        poidsSec: 0.63,
        longevite: 400,
        tailleAdulte: 20,
        rayonTronc: 0.35,
        masseVolumique: 550,
        article: "le ",

    },
    "pin sylvestre": {
        poidsSec: 0.59,
        longevite: 300,
        tailleAdulte: 25,
        rayonTronc: 0.25,
        masseVolumique: 540,
        article: "le ",

    },
    "pin maritime": {
        poidsSec: 0.63,
        longevite: 500,
        tailleAdulte: 25,
        rayonTronc: 0.25,
        masseVolumique: 530,
        article: "le ",

    },
    "charme": {
        poidsSec: 0.82,
        longevite: 200,
        tailleAdulte: 15,
        rayonTronc: 0.3,
        masseVolumique: 700,
        article: "le ",

    },
    "épicéa commun": {
        poidsSec: 0.56,
        longevite: 400,
        tailleAdulte: 45,
        rayonTronc: 0.375,
        masseVolumique: 460,
        article: "l'",

    },
    "chêne liège": {
        poidsSec: 0.68,
        longevite: 200,
        tailleAdulte: 15,
        rayonTronc: 0.35,
        masseVolumique: 690,
        article: "le ",

    },
    "douglas": {
        poidsSec: 0.7,
        longevite: 600,
        tailleAdulte: 60,
        rayonTronc: 0.4,
        masseVolumique: 530,
        article: "le ",

    },
    "baobab": {
        poidsSec: 0.6,
        longevite: 1500,
        tailleAdulte: 30,
        rayonTronc: 1.4,
        masseVolumique: 255,
        article: "le ",
    },
    "fromager": {
        poidsSec: 0.67,
        longevite: 600,
        tailleAdulte: 40,
        rayonTronc: 0.65,
        masseVolumique: 310,
        article: "le ",

    },
    "sapin péctiné": {
        poidsSec: 0.48,
        longevite: 500,
        tailleAdulte: 40,
        rayonTronc: 0.25,
        masseVolumique: 500,
        article: "le ",

    },
    "bananier": {
        poidsSec: 0.45,
        longevite: 25,
        tailleAdulte: 5,
        rayonTronc: 0.1,
        masseVolumique: 290,
        article: "le ",

    },
    "acajou blanc": {
        poidsSec: 0.35,
        longevite: 150,
        tailleAdulte: 35,
        rayonTronc: 0.5,
        masseVolumique: 410,
        article: "l'",

    },
    "acoumat boucan": {
        poidsSec: 0.3,
        longevite: 250,
        tailleAdulte: 25,
        rayonTronc: 0.65,
        masseVolumique: 520,
        article: "le ",

    },
    "arbre du voyageur": {
        poidsSec: 0.35,
        longevite: 50,
        tailleAdulte: 20,
        rayonTronc: 0.25,
        masseVolumique: 400,
        article: "l'",

    },
    "bakoua": {
        poidsSec: 0.5,
        longevite: 30,
        tailleAdulte: 7.5,
        rayonTronc: 0.2,
        masseVolumique: 320,
        article: "le ",

    },
    "wapa": {
        poidsSec: 0.6,
        longevite: 150,
        tailleAdulte: 22,
        rayonTronc: 0.175,
        masseVolumique: 860,
        article: "le ",

    },
    "flamboyant": {
        poidsSec: 0.58,
        longevite: 120,
        tailleAdulte: 12,
        rayonTronc: 0.25,
        masseVolumique: 700,
        article: "le ",

    },
    "gommier blanc": {
        poidsSec: 0.48,
        longevite: 400,
        tailleAdulte: 35,
        rayonTronc: 0.5,
        masseVolumique: 610,
        article: "le ",

    },
    "palmiste rouge": {
        poidsSec: 0.45,
        longevite: 25,
        tailleAdulte: 10,
        rayonTronc: 0.1,
        masseVolumique: 280,
        article: "le ",

    },
    "pin d'alep": {
        poidsSec: 0.61,
        longevite: 150,
        tailleAdulte: 20,
        rayonTronc: 0.35,
        masseVolumique: 440,
        article: "le ",

    },
    "angélique": {
        poidsSec: 0.75,
        longevite: 600,
        tailleAdulte: 40,
        rayonTronc: 0.45,
        masseVolumique: 760,
        article: "l'",
    },
    "acomat boucan": {
        poidsSec: 0.3,
        longevite: 250,
        tailleAdulte: 25,
        rayonTronc: 0.65,
        masseVolumique: 520,
        article: "l'",

    },
    "tamarin des hauts": {
        poidsSec: 0.7,
        longevite: 200,
        tailleAdulte: 22.5,
        rayonTronc: 0.35,
        masseVolumique: 650,
        article: "le ",

    },
    "maho noir": {
        poidsSec: 0.75,
        longevite: 600,
        tailleAdulte: 40,
        rayonTronc: 0.45,
        masseVolumique: 760,
        article: "le ",

    },
    "pin des caraïbes": {
        poidsSec: 0.58,
        longevite: 125,
        tailleAdulte: 25,
        rayonTronc: 0.25,
        masseVolumique: 580,
        article: "le ",

    },
}

// longévité essences -> sources variées
/** sous la forme :
 * {
 *  "nom arbre":longevite,(en années)
 * }
 */
let longevite = {
    "chêne rouvre": 600,
    "chêne pédonculé": 700,
    "chêne pubescent": 500,
    "chêne vert": 1000,
    "hêtre": 500,
    "frêne": 200,
    "pin sylvestre": 300,
    "pin maritime": 500,
    "charme": 200,
    "orme": 400,
    "épicéa commun": 400,
    "chêne liège": 200,
    "douglas": 600,
    "acajou blanc": 150,
    "baobab": 1500,
    "châtaignier": 400,
    "fromager": 600,
    "gommier blanc": 400,
    "palmiste rouge": 10,
    "sapin péctiné": 500,
    "saule": 120,
    "tamarin des hauts": 200,
    "wapa": 150,
    "bananier": 25,
    "acomat boucan": 250,
    "arbre du voyageur": 50,
    "pin d'alep": 150,
    "angélique": 600,
    "pin des caraïbes": 125,

}

const text = document.querySelector(".describ");
const sect1 = document.getElementById("carte");
const sect2 = document.getElementById("Guadeloupe");
const b1 = document.getElementById("1b");
const b2 = document.getElementById("2b");
let buttD = document.querySelector(".scrollD");
const butSD = document.getElementById("butSD");
let butkM = document.querySelector(".kM");
let goMore1 = document.getElementById("more1");
let goMore2 = document.getElementById("more2");
const ent = document.getElementById("top");
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
const forest = document.querySelector(".forest");
const logo = document.querySelector(".logoTop");
const eltsec1 = document.getElementById("elt1");
const s1 = document.getElementById("s1");
const bar = document.querySelector(".load-bar");
const load = document.querySelector(".load");
const region = document.querySelectorAll(".region");
const main = document.querySelector('.main')

const container = document.querySelector(".container");
const footer = document.querySelector(".footer");
const consignes = document.querySelector(".consignes");


// ajoute un évenement chargement de la page 
document.addEventListener("DOMContentLoaded", function() {
    const contBar = document.querySelector(".load");
    window.addEventListener("scroll", function() {
        let h = document.documentElement; // hauteur du document
        let st = h.scrollTop || document.body.scrollTop; // la valeur du haut de la page
        let sh = h.scrollHeight || document.body.scrollHeight; // la valeur en px du scroll
        let pourcent = (st / (sh - h.clientHeight)) * 100; // la valeur en pourcentage de la progression
        if (window.scrollY > sect1.getBoundingClientRect().y) { // apparition de la barre de progression dès la section describ passée
            bar.style.opacity = 1; // set l'atribut opacity à 1
            bar.style.display = "block"; // set le display de façon à voir la barre
            load.style.height = pourcent + "%"; // fixe la taille de la barre en fonction du pourcentage
            bar.style.zIndex = 100; // met au premier plan la barre de façon à ce qu'elle ne passe pas derrière d'autres éléments
        } else {
            bar.style.opacity = 0; // n'affiche pas la barre si la condition n'est pas respectée
        }
    });
});

// ajoute l'effet de chargement lors du chargement de la page(évenement onload)
window.onload = () => {
    setTimeout(popIt, 1000);
    setTimeout(disabled, 1300);
};

function popIt() { // fait disparaître le layout de chargement
    document.querySelector(".charg").style.opacity = 0;
}

function disabled() { // set le display de la page de façon à enlever le layout
    document.querySelector(".charg").style.display = "none";
}

const depart = document.querySelectorAll(".departement");
for (let i = 0; i < region.length; i++) { // pour chaque région de la carte
    region[i].addEventListener("mouseenter", () => { // ajout l'évenement de survole pour chaque region
        var nameR = region[i].dataset.nom;
        document.querySelector(".rendu").innerHTML = nameR; // modifie le code html de façon à faire apparaite le nom de la région survolée
        document.querySelector(".rendu").style.textDecoration = "underline"; // surligne le nom de la région
        for (let j = 0; j < depart.length; j++) { // pour chaque département de la région survolée
            depart[j].addEventListener("mouseenter", () => { // ajoute un évenement de survolée
                var nameD = depart[j].dataset.nom;
                document.querySelector(".nD").innerHTML = nameD; // modifie le code html de façon à faire apparaître le nom du département survolé
            });
        }
    });
}

window.addEventListener("scroll", () => { // ajoute un évenement sur le scroll (défillement de la page)
    const scrolled = window.scrollY; // pixels déjà "scroll"(défilés)
    forest.style.opacity = `${0.2 + scrolled * 0.002}`; // change l'opacité de la foret 
    forest.style.filter = `blur(${5 - scrolled * 0.01}px) invert(1)`; // reduit le flou en fonction des pixels déjà scroll
    logo.style.opacity = `${1 - scrolled * 0.002}`; // change l'opacité du logo
});

let closed = document.querySelector(".close");
let info = document.querySelector(".info");

let departs = document.getElementsByClassName("departement");
for (let i = 0; i < 101; i++) { // pour chaque département de la carte
    var vert = (parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres) / parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie)).toFixed(3)
        // vert est le ratio entre surface forestère et surface totale
    departs[i].style.fill = `hsla(120,70%,${100-vert*80}%,1)`;
    // affecte au svg département une couleur (fill) qui tend vers le rouge (hlsa(20,90%,65%)) plus le ratio est faible (proche de 0)
    // affecte au svg département une couleur (fill) qui tend vers le vert (hlsa(140,90%,65%)) plus le ratio est élevé (proche de 1)
    // hsl signifie (hue,saturation,lightness) en français teinte saturation et luminosité

    // ajoute un évenement click sur le département
    departs[i].onclick = () => {
            // set le display de la section de façon à faire apparaître le contenu
            ra.style.display = 'flex';
            ra.scrollIntoView(); // scroll vert l'élément d'id = ra
            document.querySelector(".charg").style.opacity = 1; // change l'opacité de chargement de façon à le faire apparaître
            document.querySelector(".charg").style.display = "flex"; // set le display de façon à faire apparaître le layout chargement
            setTimeout(popIt, 1000); // delay (1s = 1000ms) de la fonction pour faire disparaître le layout chargement
            setTimeout(disabled, 1300); // delay (1,3s = 1300ms) de la fonction pour enlever le layout chargement
            document.getElementById("namedep").innerHTML =
                donnees[`${depart[i].dataset.numerodepartement}`].departement; // change le code html de façon à affecter le nom du département à l'attribut d'id namedep
            document.getElementById("namedep").style.top = "11%"; // positionne le nom du département à 11% du haut du parent
            document.getElementById("namesec").innerHTML =
                document.querySelector('.rendu').innerHTML; // change le code html de façon à affecter le nom de la région à l'attribut d'id namesec
            for (let j = 1; j <= 3; j++) { // pour chaque arbre
                document.querySelector(`.abr${j}`).style.background =
                    "url(" +
                    donnees[`${depart[i].dataset.numerodepartement}`][`image${j}`] + // affecte l'arrière plan de l'objet donnee de propriété image[j]
                    ")";
                document.querySelector(`.abr${j}`).style.backgroundSize = "cover"; // fait en sorte que l'image couvre la totalité de la card
                document.querySelector(`.abr${j}`).style.backgroundPosition = "center"; // place l'arrière plan au centre de la card
                document.getElementById(`n${j}`).innerHTML =
                    donnees[`${depart[i].dataset.numerodepartement}`][`arbre${j}`]; // affecte le nom de l'arbre[j] de l'objet donnees de propriété arbre[j] 
                document.querySelector('.descriptionAbr').innerHTML =
                    `Voici un panel des trois essences forestières principalement présentes dans le département : ${(donnees[`${depart[i].dataset.numerodepartement}`].article)}${depart[i].dataset.nom}`;
      
      document.querySelector(`.abr${j}`).onclick = () => { // ajout d'un évenement click sur les card des arbre1, arbre2, arbre3
        document.querySelector('.main-content').style.transform = 'scale(1)'; // effet de fermeture/ouverture qui grossit la taille du layout
        document.querySelector(".cas1").innerHTML = // modifie le code html de l'élément de classe cas1 sous la forme 'nom région/nom département'
        document.getElementById('namesec').innerHTML + ' | ' 
            + document.getElementById('namedep').innerHTML;
        document.querySelector('.cas2').innerHTML = // modifie le code html de l'élément de class cas2 pour lui donner le nom de l'arbre[j]
          donnees[`${depart[i].dataset.numerodepartement}`][`arbre${j}`];
        document.getElementById('c1').innerHTML = // affecte à l'élément d'id c1 le nombre d'habitants du département de l'objet données de propriété habitant
          `${donnees[`${depart[i].dataset.numerodepartement}`].habitants} habitants`;
        if (donnees[`${depart[i].dataset.numerodepartement}`].classement>2){ // condition si le classement du département de l'object donnees est supérieur à 2
          document.getElementById('bc1').innerHTML =
            `${(donnees[`${depart[i].dataset.numerodepartement}`].article).charAt(0).toUpperCase()}${(donnees[`${depart[i].dataset.numerodepartement}`].article).slice(1)}${donnees[`${depart[i].dataset.numerodepartement}`].departement} est le ${donnees[`${depart[i].dataset.numerodepartement}`].classement}ème département le plus peuplé de France avec une densité de ${(parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants)/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie)).toFixed(1)} habitants/km².`
          // remplace le code html du dos de la card de façon à afficher le département + le classement + ème(car classement>2) + la densité = habitants/superficie
        } else if(donnees[`${depart[i].dataset.numerodepartement}`].classement==2){
          document.getElementById('bc1').innerHTML =
            `${(donnees[`${depart[i].dataset.numerodepartement}`].article).charAt(0).toUpperCase()}${(donnees[`${depart[i].dataset.numerodepartement}`].article).slice(1)}${donnees[`${depart[i].dataset.numerodepartement}`].departement} est le ${donnees[`${depart[i].dataset.numerodepartement}`].classement}nd département le plus peuplé de France avec une densité de ${(parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants)/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie)).toFixed(1)} habitants/km².`
          // remplace le code html du dos de la card de façon à afficher le département + le classement + nd(car classement==2) + la densité = habitants/superficie
        } else{
          document.getElementById('bc1').innerHTML = 
            `${(donnees[`${depart[i].dataset.numerodepartement}`].article).charAt(0).toUpperCase()}${(donnees[`${depart[i].dataset.numerodepartement}`].article).slice(1)}${donnees[`${depart[i].dataset.numerodepartement}`].departement} est le ${donnees[`${depart[i].dataset.numerodepartement}`].classement}er département le plus peuplé de France avec une densité de ${(parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants)/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie)).toFixed(1)} habitants/km².`
          // remplace le code html du dos de la card de façon à afficher le département + le classement + er(car classement==1) + la densité = habitants/superficie
        }
        // modifie le code html de l'élément d'id bc2 de façon à afficher le nom du département + la superficie + la superficie forestière + le ratio superficie forestière superficie totale
        document.getElementById('bc2').innerHTML = 
          `${(donnees[`${depart[i].dataset.numerodepartement}`].article).charAt(0).toUpperCase()}${(donnees[`${depart[i].dataset.numerodepartement}`].article).slice(1)}${donnees[`${depart[i].dataset.numerodepartement}`].departement} a pour superficie ${donnees[`${depart[i].dataset.numerodepartement}`].superficie}km² et pour superficie forestière ${donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres}km². Celle-ci couvre ${((parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres)/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie))*100).toFixed(2)}% de la superficie totale.`
        // modifie le code html de l'élément d'id de façon à afficher la superficie forestière + le ration superficie forestière superficie du département
        document.getElementById('c2').innerHTML =
          `${donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres} km² (${Math.ceil((parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres)/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficie))*100)}%)`;
        document.getElementById('c3').innerHTML =
          `${Math.ceil(8.2*parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants))} tCO2/an`;
        document.getElementById('bc3').innerHTML = `Selon les chiffres de l'INSEE l'empreinte carbone d'un français moyen s'élève 8,2 tonnes de CO2 par habitant et par année.`
        
        // condition qui regarde si le nom de l'arbre[j] est dans l'objet essences 
        if(donnees[`${depart[i].dataset.numerodepartement}`][`arbre${j}`].toLowerCase() in essences){
          let nomArbre = donnees[`${depart[i].dataset.numerodepartement}`][`arbre${j}`].toLowerCase();
          let longeviteArbre = essences[nomArbre].longevite;
          var absorption = (Math.PI*essences[nomArbre].rayonTronc**2*essences[nomArbre].tailleAdulte*essences[nomArbre].masseVolumique*1.2*essences[nomArbre].poidsSec*0.45*3.67)/essences[nomArbre].longevite
          // modifie le code html de l'élément c4 de façon à afficher le taux d'absorption correspondant à l'arbre[j] = nomArbre
          document.getElementById('c4').innerHTML =
            absorption.toFixed(1)+' kgCO2/an';
          // modifie le code html de l'élément c5 de façon à afficher le nombre d'arbres nécéssaire pour contrecarrer la totalité de l'émission de CO2 de la population du département dépendement du taux d'absorption de l'objet essences de l'arbre correspondant
          document.getElementById('c5').innerHTML = 
            `${Math.round((8.2*1000*parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants))/absorption.toFixed(1))} arbres`;
          // modifie le code html de l'élément c6 de façon à afficher la longévité de l'arbre de l'arbre[j] de l'objet longevite
          document.getElementById('c6').innerHTML = 
            `${longeviteArbre} ans`;
          // modifie le code html de l'élément bc5 de façon à afficher le nombre d'héctars réprésentatif du nombre d'arbres nécéssaires sachant qu'un hectar équivaut à 30000 arbres et compare cette superficie avec le département de Paris
          document.getElementById('bc5').innerHTML =
          `Le quantité d'arbre à planter couvrirait ${(((Math.round((8.2*1000*parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants))/absorption))/2000)/100).toFixed(1)} km². Soit une augmentation de ${((((((8.2*1000*donnees[`${depart[i].dataset.numerodepartement}`].habitants)/absorption)/2000)*10**-2).toFixed(1))/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres)*100).toFixed(2)}% de la surface forestière.`;          
          // explique de nouveau le card 5 d'id c5
          document.getElementById('bc6').innerHTML = `${(essences[nomArbre].article).charAt(0).toUpperCase()}${(essences[nomArbre].article).slice(1)}${nomArbre} a une espérence de vie de ${longeviteArbre} ans`;
        } else{
          // cas où l'arbre n'est pas dans l'objet essences
          document.getElementById('c4').innerHTML = '25 kgCO2/an'; // -> moyenne du taux d'absorption d'un arbre comprit entre 25 et 40
          // même calcul mais avec un taux d'absorption égale à 25kgCO2/an
          document.getElementById('c5').innerHTML = 
            `${Math.round((8.2*1000*parseInt(donnees[`${depart[i].dataset.numerodepartement}`].habitants))/25)} arbres`;
          // longévité non déterminée
          document.getElementById('c6').innerHTML = 
            'non déterminée';
          document.getElementById('bc5').innerHTML = 
            `Le nombre d'arbres nécéssaires représente ${((((8.2*1000*donnees[`${depart[i].dataset.numerodepartement}`].habitants)/25)/2000)*10**-2).toFixed(1)} km² soit ${((((((8.2*1000*donnees[`${depart[i].dataset.numerodepartement}`].habitants)/25)/2000)*10**-2).toFixed(1))/parseInt(donnees[`${depart[i].dataset.numerodepartement}`].superficieArbres)*100).toFixed(2)}% de plus.`;          
          document.getElementById('bc6').innerHTML = 
            `L'âge moyen de ${donnees[`${depart[i].dataset.numerodepartement}`][`arbre${j}`]} n'est pas formellement établit.`
          };
        // modifie l'élément d'id bc4 de façon à afficher l'explication sur le taux d'absorption
        document.getElementById('bc4').innerHTML = `Le taux d'aborption d'un arbre est la quantité de CO2 pouvant être stockée dépendamment de la proportion de bois sec qui représente 50% du poids d'un arbre.`;
      };
    }
  };
}

// ajoute l'évenement click sur l'élément closed
closed.onclick = () => {
  setTimeout(() => {
    consignes.style.display = "none"; // delay la disparition de l'élément consignes
  }, 1000);
  consignes.style.opacity = 0; // change l'opacité à 0
  consignes.style.width = 50 + "%"; // réduit l'épaisseur de la modale
};

// ajoute l'évenement click sur l'élément info
info.onclick = () => {
  consignes.style.display = "block"; // modifie le display pour faire en sorte de mettre le display de l'élement consignes à block
  consignes.style.opacity = 1; // modifie l'opacité de l'élement consignes
  consignes.style.width = 80 + "%"; // modifie son épaisseur à 80%
};

// ajoute l'évènement click sur l'élément butkM
butkM.onclick = function () {
  text.scrollIntoView(); // scroll vert l'élément text
};
// ajoute l'évènement click sur l'élément m1
m1.onclick = function () {
  if ((document.getElementById('descr').style.height =='85vh')&&(document.querySelector('.content-videocarte').style.display == 'flex')){
    document.querySelector('.content-choix1').classList.add('.bgWhite');
    document.querySelector('.content-choix2').classList.add('.bgWhite')
    document.querySelector('.content-videocarte').style.display = 'none';
    document.querySelector('.choice').style.height = '0vh';
    document.getElementById('descr').style.height ='100vh';
    setTimeout(()=>{
      document.querySelector('.choice').style.display = 'none';
    },300);
  } else if((document.getElementById('descr').style.height =='85vh')&&(document.querySelector('.content-videoquest').style.display == 'flex')){
    document.querySelector('.content-videoquest').style.display = 'none';
    document.querySelector('.choice').style.height = '0vh';
    document.getElementById('descr').style.height ='100vh';
    setTimeout(()=>{
      document.querySelector('.choice').style.display = 'none';
    },300);
  } else if(document.getElementById('descr').style.height =='85vh'){
    document.querySelector('.choice').style.height = '0vh';
    document.getElementById('descr').style.height ='100vh';
    document.querySelector('.choice').style.display = 'none';
  }else{
    document.getElementById('descr').style.height ='85vh';
    document.querySelector('.choice').style.display = 'flex';
    document.querySelector('.choice').style.height = '15vh';
  }
};
let text1 = document.querySelector(".text1");

// utilisation de la librairie typeWhriter pour animer le texte de class 'text1'
var animText = new Typewriter(text1, {
  deleteSpeed: 30, //initialise la vitesse entre chaque lettre de 25ms
});
animText
  .changeDelay(30)
  .typeString(
    "Dans une démarche ludique et éducative, notre projet a pour but de vous sensibiliser aux enjeux futurs en matière d'émissions de gaz à effet de serre.\n"
  ) // texte tapé
  .typeString("A cet effet, nous vous proposons une page interactive modélisant des solutions concrètes autour de la sylviculture.");

// ajoute un évènement sur le scroll de telle sorte que lorsque le haut de la page est égale à la position en y de l'élément text alors l'animation peut commencer
window.addEventListener("scroll", () => {
  if (window.scrollY >= text.getBoundingClientRect().y) {
    animText.start();
  };
});

let closeM = document.getElementById("m-close");

// ajout de l'évènement click sur l'élément closeM
closeM.addEventListener("click", () => {
  document.querySelector(".main-content").style.transform = 'scale(0)'; // transforme la taille du layout main-content à 0
  
});

// array de questions pour le questionnaire
const questions = [
  ["Combien de kilomètres parcourez vous en moyenne en voiture chaque jour ?"],
  ["Combien de temps passez vous sur internet en moyenne par jour (en heures)?"],
  ["A quelle fréquence consommez vous de la viande rouge par semaine ?"],
  ["Combien buvez vous en moyenne de verres de café par jour ?"],
  ["Combien consommez vous de tablettes de chocolat en moyenne par semaine ?"]
]

const voiture = 0.259*365 /** 1k en voiture = 0.259kgCO2 fois le nombre de jours d'une année */
const viande = 5*52 /** 1kg viande = 25kgCO2 -> 200g=5kgCO2 fois le nombre de semaines d'une année */
const internet = 0.002*60*365 /** <=> 1min = 0.002 1h = 0.002*60 fois le nombre de jours d'une année */
const chocolat = 1*52 /** 1 tablette par semaine / 133g  */
const cafe = 0.035*365 /** 1 cafe = 0.035 kgCO2 fois le nombre de jours d'une année*/
const moyenne = 36*voiture + 2.5*viande + 2.5*internet + chocolat + cafe*2.3
// 36km voiture, 2.5 fois par semaine, 2h30 d'internet en moyenne, 1tablette de chocolat en moyenne, 2.3 cafe en moyenne

// array iterratif pour acceder aux éléments
var quot = [voiture,internet,viande,cafe,chocolat]

const input = document.querySelector('.rentree')
// affectation de la première question de l'array questions
document.querySelector('.question').innerHTML = questions[0][0];

// infos est le array qui contiendra les réponses aux questions
let infos = Array()

// iter est l'indice permettant de passer de question
let iter = 0

// initialisation du compteur
document.querySelector('.compteur').innerHTML = `1 | ${questions.length}`;

// désactive l'action de click enter
input.addEventListener('keypress',(e)=>{
  if (e.keyCode === 13){ // == à la touche enter
    e.preventDefault();
  }
})

// ajout de l'évènement click sur le bouton valider
document.querySelector('.valider').addEventListener('click',()=>{
  infos.push(parseInt(input.value)); // ajoute à infos l'entrée du input
  input.focus(); // focus l'input en changeant de question
  myChart.data.datasets[0].data.push(infos[iter]*quot[iter]); // ajoute au graphique les données
  myChart.update(); // met à jour le graphique
  input.value = ''; // réinitialise le input
  iter++; // incrémentation de la variable iter
  document.querySelector('.compteur').innerHTML = `${iter+1} | ${questions.length}`; // incrémente le compteur
  document.querySelector('.question').innerHTML = questions[iter]; // change de question
  if (iter>=questions.length){ // condition si iter dépasse le nombre de questions
    var sum = 0; // initialisation de la variable de somme
    for(let i = 0;i<infos.length;i++){ // boucle pour tous les éléments de infos
      sum += infos[i]*quot[i]; // somme les éléments de infos
    }
    document.querySelector('.quest-main').style.display = 'none'; // fait disparaître le layout du questionnaire
    document.querySelector('.question').innerHTML = questions[0]; // réinitialise la première question
    document.querySelector('.compteur').innerHTML = '1'+` | ${questions.length}`; // réinialise le compteur
    document.querySelector('.quest-second').style.display = 'flex'; // affiche le layout de chargement
    myChart.update(); // met à jour le graphique
    setTimeout(()=>{ // delay du layout de chargement
      document.querySelector('.quest-second').style.display = 'none'; // fait disparait le layout de chargement
      document.querySelector('.quest-resultat').style.display = 'flex'; // fait apparaitre le layout de resultat
      if ((sum/moyenne).toFixed(1)<1){ // condition si la somme de info est inférieure à la moyenne
        var mul = 1/(sum/moyenne);
        document.querySelector('.resultat').innerHTML = `Vous consommez ${(mul).toFixed(1)} fois moins que la moyenne`;
      }
      else if ((sum/moyenne).toFixed(1)==1){ // si la somme de info est proche de la moyenne
        document.querySelector('.resultat').innerHTML = `Vous consommez autant qu'une personne moyenne`;
      }else{ // si la somme de info est plus élévé
        var mul = sum/moyenne;
        document.querySelector('.resultat').innerHTML = `Vous consommez ${(mul).toFixed(1)} fois plus que la moyenne.`;
      }
      document.querySelector('.resultat').innerHTML += `</br>Il faut planter l'équivalent de ${Math.round(sum/25)} arbres ayant pour taux d'absorption 25 kgCO2/an pour annuler votre empreinte carbone annuelle.`;
      document.getElementById('arbres').innerHTML = `X${Math.round(sum/25)}`;
    },2000);  
    input.value = '';// réinitialise la valeur de input
  }
})

//plugin du graphe
const plugin = {
  beforeDraw: (chart) => {
  const ctx = chart.canvas.getContext('2d');
  ctx.save();
  ctx.globalCompositeOperation = 'destination-over';
  ctx.fillStyle = '#0f2e40'; // change la couleur d'arrière plan du graphe
  ctx.fillRect(0, 0, chart.width, chart.height); // définit la taille du graphe
  ctx.restore();
  }
};

Chart.defaults.color = "#f1f1f1"; // définit la couleur par défaut des fonts du graphe
Chart.defaults.borderColor = "#f1f1f130"; // définit la couleur de la grille du graphe
const ctx = document.getElementById('grapheT').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // graphe de type bar
    data: {
        labels: ['Voiture', 'Internet', 'Viande Rouge', 'Café', 'Chocolat'], // données en absyce
        datasets: [{
            label: 'Vous (KgCO2/an)', // graphe variant selon les réponses
            data: [], // se remplit au et à mesure des questions
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // couleur de chaque barre du graphe
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // couleur des bordures du graphe
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1, // taille des bordure
            
        },
        {
          label: 'Moyenne (KgCO2/an)', // graphe des valeurs moyenne d'une personne
          data: [36*voiture,2.5*internet,2.5*viande,cafe*2.3,chocolat], // données moyenne d'une personne
          backgroundColor: [
            '#f1f1f130', //couleur des barres du graphe
            '#f1f1f130',
            '#f1f1f130',
            '#f1f1f130',
            '#f1f1f130',
          ],
          borderColor: [ // couleur bordure du graphe
            '#f1f1f1',
            '#f1f1f1',
            '#f1f1f1',
            '#f1f1f1',
            '#f1f1f1',
          ],
          borderWidth: 1, // épaisseur bordure du graphe
        }
      ],
    },
    plugins: [plugin], // plugin initialisés précedemment
    options: {
      legend: {
        labels: {
          defaultFontColor:'white' // ça marche pas ^^
        }
      },
      scales: {
          y: {
              beginAtZero: true // commence à l'origine
          }
      },
      responsive:true, // taille variable
      maintainAspectRatio: false, 
    },
});

let butGraphe = document.querySelector('.infoCons')
butGraphe.addEventListener('click',()=>{ // ajoute l'évènement click sur le bouton butGraphe
  myChart.update(); // met à jour le graphe
  document.querySelector('.graphe-content').style.display = 'flex'; // affiche le graphe
  document.querySelector('.graphe-content').scrollIntoView(); // scroll jusqu'à la section du graphe
})

var buttQuest = document.querySelector('.buttQuest')
buttQuest.addEventListener('click',()=>{ // ajout l'évènement click sur le bouton buttQuest (en dessous de la carte)
  document.querySelector('.video-carte').pause();
  document.querySelector('.questionnaire').scrollIntoView(); // scroll jusqu'au questionnaire
})

let reset = document.querySelector('.content-refresh');
reset.addEventListener('click',()=>{ // ajoute l'évènement click sur le bouton reset
  document.querySelector('.questionnaire').scrollIntoView();
  iter = 0; // réinitialise iter 
  infos = []; // rénitialise infos
  for(let i = 0;i<6;i++){ // pour chaque donnée du graphe 
    myChart.data.datasets[0].data.pop(); // supprime les données du graphe
  }
  document.querySelector('.quest-resultat').style.display = 'none'; // fait disparaitre le layout de résultat
  document.querySelector('.quest-second').style.display = 'flex'; // fait apparaître le layout de chargement
  setTimeout(()=>{ // delay la disparition du layout de chargement 
    document.querySelector('.quest-second').style.display = 'none'; // fait disparait le layout de chargement
    document.querySelector('.quest-main').style.display = 'flex'; // fait apparaitre le layout de questionnaire
  },750)  
})

let choix1 = document.querySelector('.content-choix1') // initialisation variable choix1
let choix2 = document.querySelector('.content-choix2') // initialisation variable choix2

choix1.addEventListener('click',()=>{ // ajout d'un évènement sur le click de l'élément choix1
  document.querySelector('.consigneVideo1').innerHTML = `Consigne d'utilisation de la carte`;// change le contenu de l'élément de classe consigneVideo1
  document.querySelector('.video-quest').pause();// met en pause la vidéo video questionnaire
  choix2.style.background = '#f1f1f1';// change la couleur de font de l'élément choix2
  choix2.style.color = '#1e1e1e'//change la couleur de police de l'élément choix2
  choix1.style.background = '#21634360';// change la couleur de fond de l'élément choix1
  choix1.style.color = '#f1f1f1';// change la couleur de police de l'élément choix1
  document.querySelector('.content-videocarte').style.display = 'flex';//affiche le container de la vidéo carte
  document.querySelector('.content-videoquest').style.display = 'none';//enlève le container de la vidéo questionnaire
  document.querySelector('.video-carte').style.display = 'block';//affiche la video carte
  document.querySelector('.choice').scrollIntoView();//scroll vers l'élément de class choice
})

choix2.addEventListener('click',()=>{ // ajout d'un évènement sur le click de l'élément choix2
  document.querySelector('.consigneVideo2').innerHTML = `Consigne d'utilisation du questionnaire`// change le code html
  choix1.style.background = '#f1f1f1';// change la valeur de couleur de l'élément choix
  document.querySelector('.video-carte').pause();// met en pause la vidéo carte
  choix1.style.color = '#1e1e1e'// change la valeur de couleur de la police de l'élément choix1
  choix2.style.background = 'rgb(156, 191, 255,.75)';// change la valeur de couleur du fond de l'élément choix2
  choix2.style.color = '#f1f1f1';// change la valeur de couleur de police de l'élément choix2
  document.querySelector('.content-videoquest').style.display = 'flex';// affiche le container de la vidéo questionnaire
  document.querySelector('.content-videocarte').style.display = 'none';//enlève le container de la vidéo carte
  document.querySelector('.video-quest').style.display = 'block';// affiche la vidéo
  document.querySelector('.choice').scrollIntoView();// scroll vers l'élément de classe choice
})

let buttAccSec1 = document.querySelector('.buttAccSec1');
let buttAccSec2 = document.querySelector('.buttAccSec2');


buttAccSec1.addEventListener('click',()=>{ // ajout l'évènement click sur le boutton buttAccSec1 
  document.querySelector('#carte').style.display = 'block'; // affecte la valeur block à la propriété display de l'élément d'id carte
  document.querySelector('#carte').scrollIntoView() // scroll jusqu'à l'élément d'id carte
});

buttAccSec2.addEventListener('click',()=>{
  document.querySelector('.questionnaire').style.display = 'flex';// affecte la valeur flex à la propriété display de l'élément de classe questionnaire
  document.querySelector('.questionnaire').scrollIntoView()//scroll jusqu'à l'élément de classe questionnaire
})

var buttQuest = document.querySelector('.buttQuest')
buttQuest.addEventListener('click',()=>{ // ajout l'évènement click sur le bouton buttQuest (en dessous de la carte)
  document.querySelector('.choice').scrollIntoView(); // scroll jusqu'au questionnaire
  choix1.style.background = 'white';// change la couleur de fond de l'élément choix1
  choix1.style.color = '#1e1e1e';// change la couleur de police de l'élément choix1
  choix2.style.background = 'rgb(156, 191, 255,.75)'; // change la couleur de fond de l'élément choix2
  choix2.style.color = 'white'; // change la couleur de police de l'élément choix2
  document.querySelector('.content-videoquest').style.display = 'flex';//affiche le container de la video question
  document.querySelector('.content-videocarte').style.display = 'none';//enlève le container de la video carte
  document.querySelector('.video-quest').style.display = 'block';//affiche la video question
  document.querySelector('.consigneVideo2').innerHTML = `Consigne d'utilisation du questionnaire`// change le code html 

})


//fonction permettant de calculer les essences forestières les plus présentes en france (uniquement à titre indicatif)
function occurence(){
  dico = {}
  for (property in donnees){
    for (let i = 1;i<=3;i++){
      arbre = donnees[property][`arbre${i}`]
      if (arbre in dico){
        dico[arbre] += 1
      } else{
        dico[arbre] = 1
      }
    }
  }
  return Object.entries(dico).sort((a,b) => b[1]-a[1])
}
