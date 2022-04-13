const SHOP_DATA = {
  laptops: {
    id: 1,
    title: 'Laptops',
    routeName: 'laptops',
    items: [
      {
        id: 2,
        name: 'Galaxy Book2',
        imageUrl: 'https://image-us.samsung.com/SamsungUS/home/computing/galaxy-book2/gb2-360/np950qed/gallery/Gallery_Images_Mars2_15_WIFI_US_Burgundy_001.jpg',
        price: 1099.99,
      },
      {
        id: 4,
        name: 'MacBook Air 13 (2017)"',
        imageUrl: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/28846_6fd4fea4-b7e2-4cd8-9d9d-e6dd0dee55d1.jpg',
        price: 310.20,
      },
      {
        id: 6,
        name: 'MacBook Pro 13" (2017)',
        imageUrl: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/277735_ab3303eb-1c40-4372-a59f-a76412cac435.jpg',
        price: 380.00,
      },
      {
        id: 7,
        name: 'HP Elite Dragonfly Max',
        imageUrl: 'https://c1.neweggimages.com/ProductImage/A24GD210724CETN8.jpg',
        price: 2260,
      },
    ],
  },
  desktops: {
    id: 2,
    title: 'Desktops',
    routeName: 'desktops',
    items: [
      {
        id: 11,
        name: 'OptiPlex 3280 All-in-One',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/optiplex_3280/media_gallery/aio_optiplex_3280_gallery_2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3373&hei=2754&qlt=100,0&resMode=sharp2&size=3373,2754',
        price: 679.00,
      },
      {
        id: 12,
        name: 'HP Slim S01-aF0026b',
        imageUrl: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/4459552/4459552_o01/4459552_o01',
        price: 539.99,
      },
      {
        id: 13,
        name: 'HP ProOne 600 G5 AiO',
        imageUrl: 'https://clicktek.co.za/wp-content/uploads/2019/09/HP-ProOne-600-G5-AiO-Click-Tek.jpg',
        price: 649.99,
      },
      {
        id: 14,
        name: 'LENOVO Noir 21.5″',
        imageUrl: 'https://tunewtec.com/wp-content/uploads/2020/10/pc-de-bureau-v530-15icr-i5-9e-gen-4-go-lenovo-noir-215.jpg',
        price: 829.99,
      },
    ],
  },
  keyboards: {
    id: 3,
    title: 'Keyboards',
    routeName: 'keyboards',
    items: [
      {
        id: 18,
        name: 'HyperX Alloy Origins',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_alloy_origins_us_1_top_down_900x.jpg?v=1645202457',
        price: 69.99,
      },
      {
        id: 19,
        name: 'Microsoft Bluetooth Keyboard',
        imageUrl: 'https://webobjects2.cdw.com/is/image/CDW/5808205?wid=1200&hei=860&resMode=bilin&fit=fit,1',
        price: 44.99,
      },
      {
        id: 20,
        name: 'Logitech Pop Keys Wireless',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsuLIkxqRsTmHVs0VhlLuHvNGUBKJ83As3tgkbrsEt3Y6_YsMdKwG1ZT3imgCUyhQCVykeZF7GF448_MZHE-sQLcF7i8mfGg&usqp=CAY',
        price: 99.99,
      },
      {
        id: 22,
        name: 'Keychron Q2 QMK',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-Q2-custom-mechanical-keyboard-fully-assembled-version-knob-blue-red_684637e3-8967-42de-9f1a-ef3ac724634f_1800x1800.jpg?v=1642150251',
        price: 179.00,
      }
    ]
  },
  audio: {
    id: 4,
    title: 'Audio',
    routeName: 'audio',
    items: [
      {
        id: 23,
        name: 'GET TOGETHER DUO BLUETOOTH',
        imageUrl: 'https://cdn11.bigcommerce.com/s-uod0rcncsw/images/stencil/700x700/products/767/2671/Marley_Duo_thumbnail_02__08919.1647994688.jpg?c=1',
        price: 119.99,
      },
      {
        id: 24,
        name: 'Bose Bass Module 500',
        imageUrl: 'https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950/products/2018/35/018/g018BM500B-o_other0-1.jpg',
        price: 449.00,
      },
      {
        id: 25,
        name: 'Bose Surround Speakers 700',
        imageUrl: 'https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950/products/2019/24/018/g018SS700BK-o_other0.jpg',
        price: 599.00,
      },
      {
        id: 26,
        name: 'R1280T',
        imageUrl: 'https://cdn.ventmere.com/edifier-dev/uploads/2019-03/edifier-r1280t_r1tMM9KDN.jpg',
        price: 109.99,
      },
      {
        id: 27,
        name: 'LG - Xboom 550W',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyJzi1XJXfdQqrB0T2OXMe01kdldE5YGHmd0qnKrWTIz2sY-kr0_l8Ywz-aSadoH4y0TUxxm8cqYi0IaAdB5Xt4aYllrVSFw&usqp=CAY',
        price: 147.00,
      },
      {
        id: 28,
        name: 'Amazon Echo Dot 3rd Generation',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXIvBybTUBISq0OFgdGepFxcgE8B07UDv3ZCHEicuKTtobVFHSgkrAmh30WATfoInn8cNC0n77KSog_rZs0CTX7d7-NNfE-A&usqp=CAY',
        price: 28.99,
      }
    ]
  },
  videogames: {
    id: 5,
    title: 'Videogames',
    routeName: 'videogames',
    items: [
      {
        id: 30,
        name: 'Sony PlayStation 5',
        imageUrl: 'https://www.nme.com/wp-content/uploads/2020/06/ps5-credit-sie@2000x1270.jpg',
        price: 499.00,
      },
      {
        id: 31,
        name: 'Xbox Series X',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/73sXr4f93ux2KTVhFjWJFV.jpg',
        price: 609.69,
      },
      {
        id: 32,
        name: 'Nintendo Switch',
        imageUrl: 'https://i5.walmartimages.com/asr/38428521-12b5-4bd2-b993-cb50ebb338ec_1.fcc96547515a105f3396676b14605916.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: 429.99,
      },
      {
        id: 35,
        name: 'GPD XD Plus',
        imageUrl: 'https://nwzimg.wezhan.hk/contents/sitefiles3601/18006016/images/488179.jpg',
        price: 296.58,
      }
    ]
  }
};

export default SHOP_DATA;
