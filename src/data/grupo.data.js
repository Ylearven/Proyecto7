const grupoData = [
  {
    Nombre: 'Coldplay',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ColdplayBBC071221_%28cropped%29.jpg/250px-ColdplayBBC071221_%28cropped%29.jpg',
    Componentes:
      'Chris Martin, Jonny Bucklando, Guy Berryman, Will Champion, Phil Harvey',
    Debut: 1997,
    Album: []
  },
  {
    Nombre: 'One direction',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.curlydianne.com%2Fwp-content%2Fuploads%2F2014%2F05%2F1D-1024x767.jpg&f=1&nofb=1&ipt=3b4fd0f90028e192a6c8e8d34e773b1abfa21bf70287175e4d60f35b0ab541a1&ipo=images',
    Componentes:
      'Louis Tomlinson, Liam Payne, Zayn Malik, Niall Horan, Harry Styles',
    Debut: 2010,
    Album: []
  },
  {
    _id: '66d1ccd53203ea0b4e387a65',
    Nombre: 'Imagine Dragons',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Imagine_Dragons%2C_Roundhouse%2C_London_%2835390234536%29.jpg/250px-Imagine_Dragons%2C_Roundhouse%2C_London_%2835390234536%29.jpgs',
    Componentes: 'Dan Reynolds, Wayne Sermon, Ben McKee',
    Debut: 2010,
    Album: []
  },
  {
    Nombre: 'La oreja de Van Gogh',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/La_oreja_de_Van_Gogh_-_Rock_in_Rio_Madrid_2012_-_41.jpg/250px-La_oreja_de_Van_Gogh_-_Rock_in_Rio_Madrid_2012_-_41.jpg',
    Componentes:
      'Leire Martínez, Xabi San Martín, Pablo Benegas, Alvaro Fuentes, Haritz Garde',
    Debut: 1996,
    Album: []
  },
  {
    Nombre: 'Morat',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.swingmanagement.cl%2Fwp-content%2Fuploads%2F2022%2F05%2Fmorat.jpg&f=1&nofb=1&ipt=e0a72ebb23339510ffe7d883de20884797c4f22ab87002e4332ec320bbcddbd8&ipo=images',
    Componentes:
      'Juan Pablo Isaza,Juan Pablo Villamil, Simón Vargas, Martín Vargas',
    Debut: 2011,
    Album: []
  },
  {
    Nombre: 'BTS',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2021%2F12%2Fbts-festa-2020-group-concept-photo-hybe-big-hit-music.jpeg&f=1&nofb=1&ipt=e799a3ba602984cc6b7f1c68494b8989bfdc81914c9933f8d98467b33c68cbe0&ipo=images',
    Componentes: 'Jin, Suga, J-Hope, RM, Jimin, V, Jungkook',
    Debut: 2013,
    Album: []
  },
  {
    Nombre: 'Ateez',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parismatch.com%2Flmnr%2Fvar%2Fpm%2Fpublic%2Fmedia%2Fimage%2F2024%2F01%2F24%2F16%2Fgdov2qtaaaan0-j.jpg%3FVersionId%3DvcZQyfqwc.XMa5tObFJoZ4vUhM4BBntA&f=1&nofb=1&ipt=8626b7ce8d73f88650e3068a72710554404001ab78445424e0370c64168c2e7a&ipo=images',
    Componentes:
      'Hongjoong, Seonghwa, Yunho, Yeosang, San, Mingi, Wooyoung, Jongho',
    Debut: 2018,
    Album: []
  },
  {
    Nombre: 'Stray Kids',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stray_Kids_230109.jpg/300px-Stray_Kids_230109.jpg',
    Componentes:
      'Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N',
    Debut: 2017,
    Album: []
  },
  {
    Nombre: 'New Jeans',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/NewJeans_X_OLENS_1_%28cropped%29.jpg/320px-NewJeans_X_OLENS_1_%28cropped%29.jpg',
    Componentes: 'Minji,Hanni,Danielle,Haerin,Hyein',
    Debut: 2022,
    Album: []
  },
  {
    Nombre: 'BlackPink',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allkpop.com%2Fupload%2F2018%2F08%2Faf_org%2F09124445%2Fblack-pink.jpg&f=1&nofb=1&ipt=b088f06679a94f39b65da5e6c5f50857f51e4ee402766f8342bd999cc8955321&ipo=images',
    Componentes: 'Jisoo, Jennie, Rosé, Lisa',
    Debut: 2016,
    Album: []
  },
  {
    Nombre: 'Grupo Niche',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/GN_foto_plataformas.png/250px-GN_foto_plataformas.png',
    Componentes:
      'Adolfo Echeverría,Luis Araque,Alejandro Íñigo,Álex Torres,José Aguirre,Oswaldo Salazar,Carlos Zapata,Paul Gordillo,Edward Montoya,Edgardo Manuel,Diego Camacho,Juan Murillo,Fabio Celorio,Luis Sandoval,Víctor González ',
    Debut: 1979,
    Album: []
  },
  {
    Nombre: 'El Gran Combo de Puerto Rico',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/El_Gran_Combo_de_Puerto_Rico.jpg/250px-El_Gran_Combo_de_Puerto_Rico.jpgg',
    Componentes:
      'Rafael Ithier,Jerry Rivas, Joselito Hernández,Anthony García,Domingo Santos,Josué Urbina,Freddie Miranda,Freddy Rivera,Julito Alvarado,Carlos M. Vargas,Miguel Torres,Moisés Nogueras,Richie Bastar,José Prieto ',
    Debut: 1962,
    Album: []
  },
  {
    Nombre: 'Son By Four',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FYVsqmFH-0MFxL0cP1oR2YEgq6nY%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-11769990-1530729493-8219.jpeg.jpg&f=1&nofb=1&ipt=7dbb930b178c9f0538af746d7900a4e15a2a15e22c2f7f5c557df3d440aa6f80&ipo=images',
    Componentes: 'Sebastián Martínez, Carlos Javier Montes, Jorge Montes ',
    Debut: 1997,
    Album: []
  },
  {
    Nombre: 'Swedish House Mafia',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Swedish_house_mafia_2.jpg/290px-Swedish_house_mafia_2.jpg',
    Componentes: 'Axwell, Sebastian Ingrosso, Steve Angello ',
    Debut: 2009,
    Album: []
  },
  {
    Nombre: 'Gorgon City',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Gorgon_City_Glastonbury_Festival_2014_by_neal_whitehouse_piper.jpg/250px-Gorgon_City_Glastonbury_Festival_2014_by_neal_whitehouse_piper.jpg',
    Componentes: 'Kye Gibbon, Matt Robson-Scott ',
    Debut: 2012,
    Album: []
  },
  {
    Nombre: 'Disclosure',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Disclosurexoyolondon.jpg/250px-Disclosurexoyolondon.jpg',
    Componentes: 'Guy Lawrence, Howard Lawrence',
    Debut: 2010,
    Album: []
  },
  {
    Nombre: 'Slander',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2016_Open_Beatz_-_Slander_-_by_2eight_-DSC_2989.jpg/250px-2016_Open_Beatz_-_Slander_-_by_2eight_-DSC_2989.jpg',
    Componentes: 'Derek Andersen, Scott Land',
    Debut: 2014,
    Album: []
  },
  {
    Nombre: 'Wisin y Jandel',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wegow.com%2Fmedia%2Fartists%2Fwisin-y-yandel%2Fwisin-y-yandel-1519734470.27.2560x1440.jpg&f=1&nofb=1&ipt=2a97d49cd01d38512b73f74245551da50ae80f915031f448328b522f243a37ed&ipo=images',
    Componentes: 'Jose Luis Morera, Llandel Veguilla',
    Debut: 1998,
    Album: []
  },
  {
    Nombre: 'Piso 21',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Piso_21_music.jpeg/250px-Piso_21_music.jpeg',
    Componentes: 'Juan David Huertas, Pablo Mejía, David Escobar, David Lorduy',
    Debut: 2007,
    Album: []
  },
  {
    Nombre: 'Calle 13',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Calle_13_en_Venezuela.jpg/250px-Calle_13_en_Venezuela.jpgg',
    Componentes: 'René Pérez,Eduardo Cabra,Ileana Cabra',
    Debut: 2004,
    Album: []
  },
  {
    Nombre: 'Zion & Lenox',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Zion_%26_Lennox_con_J_%C3%81lvarez.jpg/360px-Zion_%26_Lennox_con_J_%C3%81lvarez.jpg',
    Componentes: 'Feliz Ortiz, Gabriel Pizarro',
    Debut: 2001,
    Album: []
  }
]

module.exports = grupoData
