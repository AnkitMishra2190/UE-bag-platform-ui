// =====================================================
// PRODUCT TYPES
// =====================================================

export interface ProductColor {
  name: string;
  slug: string;
  image: string;
}

export interface ProductDimension {
  label: string;
  value: string;
}

export interface CategoryProduct {
  name: string;
  slug: string;
  image: string;
  description: string;

  brand?: string;

  colors?: ProductColor[];

  dimensions?: ProductDimension[];

  introductionTitle?: string;

  introduction?: string;

  features?: string[];

  materialTitle?: string;

  materialDescription?: string;

  gallery?: string[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  products: CategoryProduct[];
}


// =====================================================
// CATEGORY DATA
// =====================================================

export const CATEGORIES: ProductCategory[] = [

  // =====================================================
  // REGULAR HANDBAGS
  // =====================================================

  {
    name: 'Regular Handbags',

    slug: 'regular-handbags',

    description:
      'Explore our collection of premium regular handbags designed with elegance, functionality and everyday practicality.',

    products: [

      {
        name: 'Croco Pocket Grey',

        slug: 'croco-pocket-grey',

        image:
          'assets/images/products/regular-handbags/croco-pocket-grey.jpg',

        description:
          'The Croco Pocket Grey by Zaxcer, presented by Unick Enterprises, is a perfect expression of modern minimalism and smart functionality.',

        brand: 'Zaxcer',

        colors: [

          {
            name: 'Croco Pocket Cream',
            slug: 'croco-pocket-cream',
            image:
              'assets/images/products/regular-handbags/croco-pocket-grey.jpg'
          },

          {
            name: 'Croco Pocket Grey',
            slug: 'croco-pocket-grey',
            image:
              'assets/images/products/regular-handbags/croco-pocket-cream.jpg'
          },

          {
            name: 'Croco Pocket Pink',
            slug: 'croco-pocket-pink',
            image:
              'assets/images/products/regular-handbags/croco-pocket-pink.jpg'
          },

          {
            name: 'Croco Pocket Red',
            slug: 'croco-pocket-red',
            image:
              'assets/images/products/regular-handbags/croco-pocket-red.jpg'
          },

          {
            name: 'Croco Pocket Tan',
            slug: 'croco-pocket-tan',
            image:
              'assets/images/products/regular-handbags/croco-pocket-tan.jpg'
          },

          {
            name: 'Croco Pocket Yellow',
            slug: 'croco-pocket-yellow',
            image:
              'assets/images/products/regular-handbags/croco-pocket-yellow.jpg'
          }

        ],

        dimensions: [

          {
            label: 'Length',
            value: '35 cm'
          },

          {
            label: 'Breadth',
            value: '13 cm'
          },

          {
            label: 'Height',
            value: '27 cm'
          },

          {
            label: 'Belt Length',
            value: '103 cm'
          }

        ],

        introductionTitle:
          'Modern Minimalism with Croco Pocket Grey',

        introduction:
          'The Croco Pocket Grey by Zaxcer, presented by Unick Enterprises, is a perfect expression of modern minimalism and smart functionality. Featuring a sophisticated grey tone combined with a premium crocodile-embossed texture, this handbag offers a versatile and contemporary look that pairs effortlessly with both formal and casual outfits.',

        features: [

          'Multiple pockets for enhanced organization',

          'Suitable for mobile phones, wallets, cosmetics and documents',

          'Structured yet lightweight design',

          'Comfortable for everyday carrying',

          'Suitable for both formal and casual outfits'

        ],

        materialTitle:
          'Material and Build Quality',

        materialDescription:
          'Crafted from premium-quality synthetic leather, the Zaxcer Croco Pocket Grey handbag offers durability, easy maintenance, and a cruelty-free alternative to natural leather. The crocodile-embossed surface adds a refined texture, while reinforced stitching, smooth zippers, and sturdy hardware ensure long-lasting performance and everyday reliability.',

        gallery: [

          'assets/images/products/regular-handbags/croco-pocket-grey.jpg',

          'assets/images/products/regular-handbags/croco-pocket-grey-1.jpg',

          'assets/images/products/regular-handbags/croco-pocket-grey-2.jpg',

          'assets/images/products/regular-handbags/croco-pocket-grey-3.jpg',

          'assets/images/products/regular-handbags/croco-pocket-grey-4.jpg',

          'assets/images/products/regular-handbags/croco-pocket-grey-5.jpg'

        ]

      }

    ]

  },


  // =====================================================
  // PARTYWEAR HANDBAGS
  // =====================================================

  {
    name: 'Partywear Handbags',

    slug: 'partywear-handbags',

    description:
      'Discover elegant partywear handbags designed for celebrations, special occasions and stylish evenings.',

    products: [

      {
        name: 'FE',
        slug: 'fe',
        image:
          'assets/images/products/partywear-handbags/fe.jpg',
        description:
          'FE Partywear Handbag'
      },

      {
        name: 'OD',
        slug: 'od',
        image:
          'assets/images/products/partywear-handbags/od.jpg',
        description:
          'OD Partywear Handbag'
      },

      {
        name: 'LF',
        slug: 'lf',
        image:
          'assets/images/products/partywear-handbags/lf.jpg',
        description:
          'LF Partywear Handbag'
      },

      {
        name: 'MH',
        slug: 'mh',
        image:
          'assets/images/products/partywear-handbags/mh.jpg',
        description:
          'MH Partywear Handbag'
      },

      {
        name: '8K',
        slug: '8k',
        image:
          'assets/images/products/partywear-handbags/8k.jpg',
        description:
          '8K Partywear Handbag'
      }

    ]

  },


  // =====================================================
  // SLING BAGS
  // =====================================================

  {
    name: 'Sling Bags',

    slug: 'sling-bags',

    description:
      'Explore fashionable sling bags designed for convenient everyday carrying with modern style.',

    products: [

      {
        name: 'Croco Sling',
        slug: 'croco-sling',
        image:
          'assets/images/products/sling-bags/croco-sling.jpg',
        description:
          'Croco Sling Bag'
      },

      {
        name: 'TCS',
        slug: 'tcs',
        image:
          'assets/images/products/sling-bags/tcs.jpg',
        description:
          'TCS Sling Bag'
      },

      {
        name: 'DVD',
        slug: 'dvd',
        image:
          'assets/images/products/sling-bags/dvd.jpg',
        description:
          'DVD Sling Bag'
      },

      {
        name: 'G-Embosse',
        slug: 'g-embosse',
        image:
          'assets/images/products/sling-bags/g-embosse.jpg',
        description:
          'G-Embosse Sling Bag'
      },

      {
        name: 'VL',
        slug: 'vl',
        image:
          'assets/images/products/sling-bags/vl.jpg',
        description:
          'VL Sling Bag'
      },

      {
        name: 'ZE',
        slug: 'ze',
        image:
          'assets/images/products/sling-bags/ze.jpg',
        description:
          'ZE Sling Bag'
      }

    ]

  },


  // =====================================================
  // SCHOOL BAGS
  // =====================================================

  {
    name: 'School Bags',

    slug: 'school-bags',

    description:
      'Explore practical and durable school bags designed for everyday student use.',

    products: [

      {
        name: 'Bamboo',
        slug: 'bamboo',
        image:
          'assets/images/products/school-bags/bamboo.jpg',
        description:
          'Bamboo School Bag'
      },

      {
        name: 'Barfi',
        slug: 'barfi',
        image:
          'assets/images/products/school-bags/barfi.jpg',
        description:
          'Barfi School Bag'
      },

      {
        name: 'Mazic',
        slug: 'mazic',
        image:
          'assets/images/products/school-bags/mazic.jpg',
        description:
          'Mazic School Bag'
      },

      {
        name: 'RP Cord',
        slug: 'rp-cord',
        image:
          'assets/images/products/school-bags/rp-cord.jpg',
        description:
          'RP Cord School Bag'
      },

      {
        name: 'PB',
        slug: 'pb',
        image:
          'assets/images/products/school-bags/pb.jpg',
        description:
          'PB School Bag'
      },

      {
        name: 'CB',
        slug: 'cb',
        image:
          'assets/images/products/school-bags/cb.jpg',
        description:
          'CB School Bag'
      }

    ]

  }

];