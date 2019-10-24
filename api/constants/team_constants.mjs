
export const pichichis = [
  {
    playerId: '11',
    goals: '19',
  },
  {
    playerId: '12',
    goals: 5,
  },
  {
    playerId: '13',
    goals: 0,
  },
  {
    playerId: '14',
    goals: '9 goles',
  },
  {
    playerId: '21',
    goals: 35,
  },
  {
    playerId: '22',
    goals: ' 5',
  },
  {
    playerId: '23',
    goals: 0,
  },
  {
    playerId: '24',
  },
  {
    playerId: '31',
    goals: 22,
  },
  {
    playerId: '32',
    goals: 5,
  },
  {
    playerId: '33',
    goals: null,
  },
  {
    playerId: '34',
    goals: 3,
  }
]

export const POSITIONS_ID = {
  forward: 9,
  midfielder: 6,
  back: 4,
  goalkeeper: 1
}

export const POSITIONS_STRING = {
  [POSITIONS_ID.forward]: 'DEL',
  [POSITIONS_ID.midfielder]: 'MED',
  [POSITIONS_ID.back]: 'DEF',
  [POSITIONS_ID.goalkeeper]: 'POR',
}

export const madrid = {
  id: '1',
  name: 'Real Madrid',
  shortName: 'Mad',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png',
  money: 1000,
  players: [
    {
      id: '11',
      name: 'Karim Benzema',
      position: POSITIONS_ID.forward,
      img: 'https://www.futboltotal.com.mx/wp-content/uploads/2018/01/karim-benzema-2018.jpg',
      price: 600,
    },
    {
      id: '12',
      name: 'Sergio Ramos',
      position: POSITIONS_ID.back,
      url: 'https://www.lainformacion.com/files/article_default_content/uploads/2018/11/23/5bf84292d23b5.jpeg',
      price: 10000000000,
    },
    {
      id: '13',
      name: 'Thibaut Courtois',
      position: POSITIONS_ID.goalkeeper,
      url: 'https://as01.epimg.net/futbol/imagenes/2019/02/12/primera/1549968203_746773_1549968422_noticia_normal.jpg',
      price: 300,
    },
    {
      id: '14',
      name: 'Modric',
      position: POSITIONS_ID.midfielder,
      url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/05/22/15585438479360.jpg',
      price: 400,
    },
  ]
}

export const barcelona = {
  id: '2',
  name: 'Barcelona',
  shortName: 'Barça',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png',
  money: 900,
  players: [
    {
      id: '21',
      name: 'Messi',
      position: POSITIONS_ID.forward,
      img: 'https://www.diariogol.com/uploads/s1/64/71/53/0/leo-messi_15_970x597.jpeg',
      price: 1000000000,
    },
    {
      id: '22',
      name: 'Pique',
      position: POSITIONS_ID.back,
      img: 'https://www.mundodeportivo.com/r/GODO/MD/p6/Barca/Imagenes/2019/06/20/Recortada/img_ppunti_20190313-231329_imagenes_md_propias_ppunti_190313fcbol1045_4_6_1019829284-0048-keaF-U463011134387hWC-980x554@MundoDeportivo-Web.jpg',
      price: 500,
    },
    {
      id: '23',
      name: 'Marc-André ter Stegen',
      position: POSITIONS_ID.goalkeeper,
      url: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fc-barcelona-v-fc-internazionale-uefa-champions-league-group-b-5bd2c9a723006a5f6d000006.jpg',
      price: 400,
    },
    {
      id: '24',
      name: 'Busquets',
      position: POSITIONS_ID.midfielder,
      img: 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/09/21/3c326e62-2c35-4d8d-9e41-972ab88ce11a/05-SERGIO-JOC.jpg',
      price: 500,
    },
  ]
}

export const atletico = {
  id: '3',
  name: 'Atlérico de Madrid',
  shortName: 'Atlético',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png',
  money: 700,
  players: [
    {
      id: '31',
      name: 'Griezman',
      position: POSITIONS_ID.forward,
      price: 700,
    },
    {
      id: '32',
      name: 'Godin',
      position: POSITIONS_ID.back,
      price: 450,
    },
    {
      id: '33',
      name: 'Oblak',
      position: POSITIONS_ID.goalkeeper,
      price: 500,
    },
    {
      id: '34',
      name: 'Koke',
      position: POSITIONS_ID.midfielder,
      price: 10000000000000,
    },
  ]
}

export const atleticoImages = {
  31: 'https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/07/81CE3BC8-905E-4904-92F7-B4D6A27B8963/58.jpg',
  32: 'https://as01.epimg.net/futbol/imagenes/2017/10/18/primera/1508362211_900651_1508362332_noticia_normal.jpg',
  33: 'https://cadenaser00.epimg.net/ser/imagenes/2018/11/12/deportes/1542055161_970998_1542057866_noticia_normal_recorte1.jpg',
  34: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/04/07/14915594564824.jpg',
}


export const teamsMap = {
  1: madrid,
  2: barcelona,
  3: atletico
}

