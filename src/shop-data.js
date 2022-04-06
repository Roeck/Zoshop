const SHOP_DATA = [
  {
    title: 'Laptops',
    items: [
      {
        id: 1,
        name: 'Inspiron 15 Laptop',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-5510/media-gallery/notebook-in5510nt-cnb-00055lf110-gy-backlit_fpr.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402',
        price: 499.99,
      },
      {
        id: 2,
        name: 'Galaxy Book2',
        imageUrl: 'https://image-us.samsung.com/SamsungUS/home/computing/galaxy-book2/gb2-360/np950qed/gallery/Gallery_Images_Mars2_15_WIFI_US_Burgundy_001.jpg',
        price: 1099.99,
      },
      {
        id: 3,
        name: 'Surface Pro 8',
        imageUrl: 'https://m.media-amazon.com/images/I/71lgiPnaGvL._AC_SL1500_.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'MacBook Air 13 (2017)"',
        imageUrl: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/28846_6fd4fea4-b7e2-4cd8-9d9d-e6dd0dee55d1.jpg',
        price: 310.20,
      },
      {
        id: 5,
        name: 'ThinkPad X1 Carbon Gen 9 Intel (14")',
        imageUrl: 'https://p4-ofp.static.pub/fes/cms/2022/03/17/yb2uto1upbz6vgf6go5hkiineppsbe780942.png',
        price: 1.475.40,
      },
      {
        id: 6,
        name: 'MacBook Pro 13" (2017)',
        imageUrl: 'https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://d28i4xct2kl5lp.cloudfront.net/product_images/277735_ab3303eb-1c40-4372-a59f-a76412cac435.jpg',
        price: 380.00,
      },
    ],
  },
  {
    title: 'Desktops',
    items: [
      {
        id: 10,
        name: 'HP - AMD Ryzen 5',
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477682_rd.jpg;maxHeight=640;maxWidth=550',
        price: 639.99,
      },
      {
        id: 11,
        name: 'OptiPlex 3280 All-in-One',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/optiplex_3280/media_gallery/aio_optiplex_3280_gallery_2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3373&hei=2754&qlt=100,0&resMode=sharp2&size=3373,2754',
        price: 679.00,
      },
      {
        id: 12,
        name: 'OptiPlex 3280 All-in-One',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 679.00,
      },
      {
        id: 13,
        name: 'Vostro 3681',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Desktops/Vostro/3681/dv3681sff_csy_00015lf_bk_rd_odd.psd?fmt=png-alpha&pscan=auto&scl=1&wid=2144&hei=3678&qlt=100,0&resMode=sharp2&size=2144,3678',
        price: 608.99,
      },
      {
        id: 14,
        name: 'ThinkCentre M70c',
        imageUrl: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTM4MDUzfGltYWdlL2pwZ3xoNDUvaDcwLzExMDQwMTcyMTc5NDg2LmpwZ3w0YzZmMGRiMjdkZmMwN2MwZGQ5MjhkOGU0YWIzZDk2MWIyYzFjMGUzZTIyNTA4ZjBlY2E1MGNhMzI0OWJlNTRh/lenovo-desktop-thinkcentre-m70c-gallery-1.jpg',
        price: 589.00,
      },
      {
        id: 15,
        name: 'HP - ENVY Desktop - Intel Core i7',
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477685_rd.jpg;maxHeight=640;maxWidth=550',
        price: 959.99,
      }
    ],
  },
  {
    title: 'Keyboards',
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
        price: 99,99,
      },
      {
        id: 21,
        name: 'REDRAGON - S101-5',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7JcIZXMGjEnT5oH9F0h2fMJ4wnQdVVBP6u5L_89gfk3HRpu6A6ciLQZ7oweKxBp3d0EleQtsOconezMp6gjnjY6UY5gqBUg&usqp=CAY',
        price: 39.99,
      },
      {
        id: 22,
        name: 'Keychron Q2 QMK',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-Q2-custom-mechanical-keyboard-fully-assembled-version-knob-blue-red_684637e3-8967-42de-9f1a-ef3ac724634f_1800x1800.jpg?v=1642150251',
        price: 179.00,
      },
      {
        id: 22,
        name: 'K360 WIRELESS',
        imageUrl: 'https://resource.logitech.com/w_1001,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k360/k360-intro.png?v=1',
        price: 24.99,
      }
    ],
  },
  {
    title: 'Audio',
    items: [
      {
        id: 23,
        name: 'Sonos - Move',
        imageUrl: 'https://media.sonos.com//images/znqtjj88/production/6c34ae71575f76e7eb846e3ae500c2d8702da0b9-1516x2656.png?w=640&q=75&fit=clip&auto=format',
        price: 399.00,
      },
      {
        id: 24,
        name: 'GET TOGETHER DUO BLUETOOTH',
        imageUrl: 'https://cdn11.bigcommerce.com/s-uod0rcncsw/images/stencil/700x700/products/767/2671/Marley_Duo_thumbnail_02__08919.1647994688.jpg?c=1',
        price: 119.99,
      },
      {
        id: 25,
        name: 'Bose Bass Module 500',
        imageUrl: 'https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950/products/2018/35/018/g018BM500B-o_other0-1.jpg',
        price: 449.00,
      },
      {
        id: 26,
        name: 'Bose Surround Speakers 700',
        imageUrl: 'https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950/products/2019/24/018/g018SS700BK-o_other0.jpg',
        price: 599.00,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'LG - Xboom 550W',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyJzi1XJXfdQqrB0T2OXMe01kdldE5YGHmd0qnKrWTIz2sY-kr0_l8Ywz-aSadoH4y0TUxxm8cqYi0IaAdB5Xt4aYllrVSFw&usqp=CAY',
        price: 147.00,
      },
      {
        id: 29,
        name: 'Amazon Echo Dot 3rd Generation',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXIvBybTUBISq0OFgdGepFxcgE8B07UDv3ZCHEicuKTtobVFHSgkrAmh30WATfoInn8cNC0n77KSog_rZs0CTX7d7-NNfE-A&usqp=CAY',
        price: 28.99,
      },
    ],
  },
  {
    title: 'Videogames',
    items: [
      {
        id: 30,
        name: 'Sony PlayStation 5',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcWHH6d4J-AdAzViBVGZQ48_2wIeWpKTiGz9oFDfXnGguF7bU0Pi-1qVDg6rnuk_zXJwn50eq-ZVtL0_3g1z77DpKrkvnDWg&usqp=CAY',
        price: 499.00,
      },
      {
        id: 31,
        name: 'Xbox Series X',
        imageUrl: 'https://i5.walmartimages.com/asr/706dc7bf-670e-423b-86be-7fde933e17af.f5c8095a116b53dc8682c0773a0205df.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: 609.69,
      },
      {
        id: 32,
        name: 'Nintendo Switch',
        imageUrl: 'https://i5.walmartimages.com/asr/38428521-12b5-4bd2-b993-cb50ebb338ec_1.fcc96547515a105f3396676b14605916.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: 429.99,
      },
      {
        id: 33,
        name: 'Nintendo Switch Lite',
        imageUrl: 'https://images.stockx.com/images/Nintendo-Switch-Lite-Grey-3.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&q=90&dpr=1&trim=color&updated_at=1605629314',
        price: 207.00,
      },
      {
        id: 34,
        name: 'PS5 DualSense Wireless Controller',
        imageUrl: 'https://s.pacn.ws/1500/136/dualsense-wireless-controller-galactic-purple-705031.1.jpg?v=r433os&width=1500',
        price: 94.49,
      },
      {
        id: 35,
        name: 'GPD XD Plus',
        imageUrl: 'https://canary.contestimg.wish.com/api/webimage/6075cb7d0680729380e88486-large.jpg?cache_buster=0700a33b72be5b9629205c0d5288d228',
        price: 296.58,
      },
    ],
  },
];

export default SHOP_DATA;
