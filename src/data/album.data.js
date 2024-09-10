const albumData = [
  {
    Nombre: 'Moon Music',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Coldplay_-_Moon_Music_%28Official_Album_Artwork%29.png/220px-Coldplay_-_Moon_Music_%28Official_Album_Artwork%29.png',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Made in the AM',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png/220px-One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png',
    Lanzamiento: 2015
  },
  {
    Nombre: 'Loom',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Imagine_Dragons_-_Loom.png/220px-Imagine_Dragons_-_Loom.png',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Un susurro en la tormenta',
    Imagen:
      'https://upload.wikimedia.org/wikipedia/en/d/df/La_Oreja_de_Van_Gogh_-_Un_susurro_en_la_tormenta.png',
    Lanzamiento: 2020
  },
  {
    Nombre: 'Si ayer fuera hoy',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lamusica.com.co%2Fcdn%2Fshop%2Fproducts%2Fab67616d0000b273191ce33e09ff4dd11b17d421.jpg%3Fv%3D1670354487&f=1&nofb=1&ipt=bf9e0657faa7f8ec74432d14428f7c67ddfe2ff6056d2a2111b18da044f31d1b&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'The tortured Poets Department',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstoreau.taylorswift.com%2Fcdn%2Fshop%2Ffiles%2FTheTorturedPoetsDepartmentVinyl2_d669e36a-b139-4108-b821-0d735fb3ec69_grande.png%3Fv%3D1707434463&f=1&nofb=1&ipt=4dde63387fbafd7aeefa64417fbce0e18ac5c8d01c6af183edf2becced8f2ba8&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Chromatica',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2FxzpxH6DnfkFzJGR0FmjvzEo0lInYFhrh9pYSL_ts6IU%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A588%2Fw%3A595%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTE1Mzg2%2FMzY3LTE1OTQwMTc3%2FMzktNTMyNS5wbmc.jpeg&f=1&nofb=1&ipt=086f44884f877d4c361a80211f48a3fea4282d9aa6f687e495e6f0b51efac55f&ipo=images',
    Lanzamiento: 2020
  },
  {
    Nombre: 'Motomami',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.lsu.co.uk%2Fwp-content%2Fuploads%2F2022%2F11%2FRosaila-Album-Review-Banner.png&f=1&nofb=1&ipt=87c38daa0368729631a4b82a1ad7e91d00da148e05a7b778929262b94147b7a1&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: '20 años sin noticias',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2734f6726623ac5818a1a1f945a&f=1&nofb=1&ipt=b53f1fc7547372e2be8b3a45d4eb7529343944e312df177d1ecfb53a7fe036a2&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Alpha',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic126%2Fv4%2F28%2F00%2F75%2F280075fd-0528-24dc-40d3-f473b73187fc%2F23UMGIM68488.rgb.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=6cade87ba54272916aa395aca951312b498aa1f5649d26dc5ef37a29a004a62f&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Be',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F930274%2FBTS_WORLD_Album_Cover.jpg%3Fp%3Dpublish&f=1&nofb=1&ipt=139c87a003b86d9a42199b60a96b80fb964b42156831a96b3bfffef6c6264b03&ipo=images',
    Lanzamiento: 2020
  },
  {
    Nombre: 'The World EP.Paradigm',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.hmv.co.jp%2Fimage%2Fjacket%2F400%2F0000134%2F5%2F0%2F067.jpg&f=1&nofb=1&ipt=98904946a15c9db66bd18e208d9d512770674e36a960b31e3c569907aef6eabb&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: '5-Star',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.cdnws.com%2F_i%2F209718%2F9347%2F419%2F50%2Fstray-kids-5-star-limited-edition-cover-2.jpeg&f=1&nofb=1&ipt=83eedf1b9bb7d05a4c400dc97bc369f613e82538edbd25a2636ecae1ca6d2322&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Get Up',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.arielworld.fr%2Fwp-content%2Fuploads%2F2023%2F06%2FNewJeans-Get-Up-Official-Image-2023-Ariel-World-1024x683.png&f=1&nofb=1&ipt=00aa8f90125b3f9860a2f38b70347fe83950e99c2ce97f7e053145dde71e83c1&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Born Pink',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fbcc96d39-785d-4796-bb89-fede2ff7fe12%2Fdfdhx5i-e7b2eab1-849c-49bc-816a-1d1929bf45a9.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGZkaHg1aS1lN2IyZWFiMS04NDljLTQ5YmMtODE2YS0xZDE5MjliZjQ1YTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9FcnlTOx6QE9GworaoJuxYAShfX-d5iZmBhANyFgV2Q&f=1&nofb=1&ipt=0e2802cf90fce74bf15b9668b19ce4d207bc1c4b1a8f1a02703134acd71d49e4&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'The Winning',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic112%2Fv4%2F3e%2F43%2Fd2%2F3e43d2dc-acd4-5db6-9ae7-99299a044584%2Fcover_KM0019422_1.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=b8cd5a1588d780814faa2da074b1c0c2686ec559a6023e1be8dffaebcdfa9e24&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'GUILTY',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.insales-cdn.com%2Fr%2FPTcsSXjnpkM%2Frs%3Afit%3A1000%3A1000%3A1%2Fplain%2Fimages%2Fproducts%2F1%2F6556%2F764836252%2F009001024525.jpg&f=1&nofb=1&ipt=9b489ccb6700c736db3cc45728aa698cd122b46132fb67d824cb27e64a6b9483&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Nuna',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F7bf8709e-c066-4e76-939f-bc66715cbc7f%2Fde73i2r-09a50cd4-c071-4e23-a11c-8a114a5a36f2.jpg%2Fv1%2Ffill%2Fw_894%2Ch_894%2Cq_70%2Cstrp%2Fjessi___nuna__3rd_mini_album__by_platinumcovers_de73i2r-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzdiZjg3MDllLWMwNjYtNGU3Ni05MzlmLWJjNjY3MTVjYmM3ZlwvZGU3M2kyci0wOWE1MGNkNC1jMDcxLTRlMjMtYTExYy04YTExNGE1YTM2ZjIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.r6IrZvdRQlE0xPmdI8ErjBMaYB_dB3ZCRd5sir7zqks&f=1&nofb=1&ipt=785d4e1c28932825df37da79fc8d7608c4ad981dac1499458b9584b59d00ec3e&ipo=images',
    Lanzamiento: 2020
  },
  {
    Nombre: 'Lowlife Princess - Noir',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic112%2Fv4%2Fa5%2F3a%2F07%2Fa53a0707-7a8d-db99-b707-7c6453f8d83c%2F5054197381287.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=92e46385cad6c781b331d8cf15172ae1aa36e82243a841587b378410ec863821&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'Psy 9th',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinoyparazzi.net%2Fwp-content%2Fuploads%2F2022%2F05%2FPSY-9th-1068x697.jpg&f=1&nofb=1&ipt=feeae216d6c74db9734d71b647fab4c51b3457074bac2de99ce8809d6b5fa23d&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'Equal',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkpopmerchandiseguide.com%2Fimage%2Fwoodz-equal-mini-album-cover.jpg&f=1&nofb=1&ipt=59f7d10bb1044162f6826568f58b634d7844fe9a606cbf1ec41e7c51d206e3df&ipo=images',
    Lanzamiento: 2020
  },
  {
    Nombre: 'Niche Sinfónico',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273a410e605518d589a7c536dd0&f=1&nofb=1&ipt=0ab02e18f4d4595458b917a2cea99313ff7e39bd384aedc25bf5bc5f178c0912&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'En Cuarentena',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F8dfec0_46737ea9b0c640d18ecf29f8d9ed70b8~mv2.jpg%2Fv1%2Ffit%2Fw_1000%252Ch_1000%252Cal_c%252Cq_80%2Ffile.jpg&f=1&nofb=1&ipt=3b1cfe629ac80baeb3bae967aef484cbaeee790ec03140cf71cef7e1695cf0ea&ipo=images',
    Lanzamiento: 2021
  },
  {
    Nombre: 'Tesoros de Colección',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FsN3lys37bzC-LVKHe373Wuym44g%3D%2Ffit-in%2F600x594%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-8789667-1469736842-7285.jpeg.jpg&f=1&nofb=1&ipt=b14b609d1424a73ba8f75cc82a26a2ac9b171ec520d58c41ee3ac87e00ccdf3d&ipo=images',
    Lanzamiento: 2020
  },
  {
    Nombre: 'Muevense',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic211%2Fv4%2Fab%2F88%2F47%2Fab8847b6-28f2-710c-8d20-3b55544f6633%2F196871093873.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=c688d5176cbc592785d4f7f7b4004a0bc7bfdce3fdc97aa51eef6ac8cb92c37b&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Dios disfrute a la reina ',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft2.genius.com%2Funsafe%2F600x600%2Fhttps%3A%2F%2Fimages.genius.com%2Fe845bfd835e730f97e9c67c1c0f571f9.640x640x1.jpg&f=1&nofb=1&ipt=adf67d124da86972bbef5b1f23dda8ba4a6335971343dc5b9399ad1aa13c412c&ipo=images',
    Lanzamiento: 2004
  },
  {
    Nombre: 'Debut y Segunda Tanda',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famariemagazine.com%2Fwp-content%2Fuploads%2F2022%2F09%2FCover_Debut-y-Segunda-Tanda-1536x1536.jpeg&f=1&nofb=1&ipt=64bc2cfac18ba3a3af0f66a091e252f7ee128b22c6ea6420fd8eacd0f3a315e4&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'Salsero original',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-s3.allmusic.com%2Frelease-covers%2F500%2F0004%2F585%2F0004585287.jpg&f=1&nofb=1&ipt=0022d4aee3f4d7bca33ba2fb1fafc57b34407731c86f87c27c1dedb39ccde087&ipo=images',
    Lanzamiento: 2016
  },
  {
    Nombre: 'Retromántico',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic221%2Fv4%2Fe0%2F82%2Fad%2Fe082add4-1a6b-71a4-700e-bc68bf71ff51%2F196871869447.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=abc21dad6b9ec3e4352fd159b4f0ac9d49608fd7360b7bb6e45694bfa2b8b32d&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'La Mejor Pareja',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FzrTFJIIdzG7du6lgn6gZo-7bMF0%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-12824144-1542652216-1332.jpeg.jpg&f=1&nofb=1&ipt=09c81888736f05b695558b316beb2b93fb29c838b0f0584471aff361f8885665&ipo=images',
    Lanzamiento: 2016
  },
  {
    Nombre: 'Paradise Again',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvinyla.com%2Ffiles%2Fproducts%2Fswedish-house-mafia-paradise-again.1280x1280.jpg%3F0315deead5de1210a052cc0f3d675d7e&f=1&nofb=1&ipt=b63b6b9442b511b98ffdd76edcddac512f390dc628a12efbfeb1102055cd9524&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'Olympia',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic114%2Fv4%2F52%2Fd1%2Fc8%2F52d1c866-d909-f8aa-2ae4-6643153d0260%2F21UMGIM04738.rgb.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=d58f3de9789edc1376e3ce53a8899ac599611863e20b0813186c745e8cb8bc78&ipo=images',
    Lanzamiento: 2021
  },
  {
    Nombre: 'Alchemy',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuproxx.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fdisclosure-alchemy.jpg&f=1&nofb=1&ipt=c070f1dd1d7b11caa79fd9447bd83c4b33e369f9b84a50ddad5ce8dbf2da0609&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Dilapidation Celebration',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa0328501046_10.jpg&f=1&nofb=1&ipt=e8853744c5335d429122e20dfe6ee16bcfb00dfc3205a9cb6f4012060c7805fb&ipo=images',
    Lanzamiento: 2017
  },
  {
    Nombre: 'IDEM',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic126%2Fv4%2F7d%2F38%2Fbf%2F7d38bfaf-838d-6113-44e1-588e88c40869%2F1cb9365e-e320-498a-952b-f4f1e85aa618.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=d603ecb531f955b1a7308b9077d0f7ee7ad262061e5bd29a4d9d3e66f40232dd&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: '96 Month',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-D2a6b8YioIc%2FXfqt5PdwuTI%2FAAAAAAAAX5M%2FGWcExItp8ZQ1QhvP93_CpLtdR2V9njJLgCLcBGAsYHQ%2Fs1600%2Fcover.jpg&f=1&nofb=1&ipt=4feacbe6bd5c2cad001073b08db01bd0e8d61a45c075019704e734415ab9723f&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Heaven',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67706c0000bebbc0b4d1e80d63b6b3df61a66e&f=1&nofb=1&ipt=99de0f144a456185f0ffd42eef5d1df2e5a7dc29471f3983ae6fb54641deaef4&ipo=images',
    Lanzamiento: 2019
  },
  {
    Nombre: '7',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic115%2Fv4%2F01%2F86%2F3e%2F01863e64-4f48-85d4-9777-9439397fc33b%2F190295570378.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=3590031225dbdf5fb88a36ab2eef01d95b2bcbafe50b5aef46b43db08a100444&ipo=images',
    Lanzamiento: 2018
  },
  {
    Nombre: 'Drive',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edmtunes.com%2Fwp-content%2Fuploads%2F2023%2F04%2FTiesto-DRIVE-artwork-1024x1024.jpg&f=1&nofb=1&ipt=0181a4c784c6b94e86474a56093582d81019363f3e1b7e8f57bc9430a166d006&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'La Última Misión',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.pollstar.com%2Fwp-content%2Fuploads%2F2022%2F03%2F14c1db6c-c045-44fd-b9c5-697f82630c6d-wisinyandel-768x1024.jpg&f=1&nofb=1&ipt=6f046ce145d630bcf84896a33807d9c29fce48f0a001dfb8fd9f0afa97a92352&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'Multi Viral',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lahiguera.net%2Fmusicalia%2Fartistas%2Fcalle_13%2Fdisco%2F5836%2Fcalle_13_multiviral-portada.jpg&f=1&nofb=1&ipt=6a151e6a58e474608f6df6bc348586eb896110707c1f20dcf7eb3b70c83ded85&ipo=images',
    Lanzamiento: 2014
  },
  {
    Nombre: 'El sistema',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_Z9LI4mpRqE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=663debfc18927ae2278d90143802ef92482dbbd2b58e5537cb4d7cc03c1ec5fa&ipo=images',
    Lanzamiento: 2021
  },
  {
    Nombre: 'Los Muchachos',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic126%2Fv4%2F7f%2F7e%2F05%2F7f7e0552-045a-51fb-d71d-0aca79681d28%2F5054197889738.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=14297b3ea420221ef439c10ce96df11b0e8eb58309d7665ec697fbdece916f20&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Mañana será Bonito',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sQuCmE8MQAfcd-L4fbkGzAHaD4%26pid%3DApi&f=1&ipt=a55287fc002ffdf91a773ada6ee9fef7ea0e866268338170dd25b55307c7f7c5&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'Legendaddy',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic112%2Fv4%2F4f%2F9e%2Ff1%2F4f9ef1f0-364b-e836-7a45-6923f9d98150%2F22UMGIM30752.rgb.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=ba054797d8877f822354e610ef9e776d4333bb9202bb65d3b071e2771d962a2b&ipo=images',
    Lanzamiento: 2022
  },
  {
    Nombre: 'INSOMNIO',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic221%2Fv4%2Ffd%2F92%2Fef%2Ffd92efa4-128e-d55e-c7b3-a57979222327%2F196872310269.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=951eb09b4956b67e98091adca672ddff5fb08f1f3a69ad14a385254c281db6be&ipo=images',
    Lanzamiento: 2024
  },
  {
    Nombre: 'Forever King',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iX65M2rzKQ0U3hDy7evjMwHaHa%26pid%3DApi&f=1&ipt=77df06330af8e75fc924d8b4f152fd2e13133c635f83fff187337fedff15f987&ipo=images',
    Lanzamiento: 2023
  },
  {
    Nombre: 'La nena de argentina',
    Imagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KlqNaRK7zIJJ65UzxjbggwHaEK%26pid%3DApi&f=1&ipt=cd967228ea6773a9848ce1a85175007d611d3b068b4349dd6b7e65bfb43515cd&ipo=images',
    Lanzamiento: 2022
  }
]
module.exports = albumData
