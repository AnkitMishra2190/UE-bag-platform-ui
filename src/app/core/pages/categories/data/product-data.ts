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
    description: 'Explore our collection of premium regular handbags designed with elegance, functionality and everyday practicality.',
    products: [
      {
        name: 'Croco Pocket Grey',
        slug: 'croco-pocket-grey',
        image: 'https://placehold.co/600x600?text=Croco+Pocket+Grey',
        description: 'The Croco Pocket Grey by Zaxcer is a stylish everyday handbag combining modern design, practical storage and a sophisticated crocodile-inspired finish.',
        brand: 'Zaxcer',
        colors: [
          { name: 'Croco Pocket Grey', slug: 'croco-pocket-grey', image: 'https://placehold.co/600x600?text=Croco+Pocket+Grey' },
          { name: 'Croco Pocket Cream', slug: 'croco-pocket-cream', image: 'https://placehold.co/600x600?text=Croco+Pocket+Cream' },
          { name: 'Croco Pocket Pink', slug: 'croco-pocket-pink', image: 'https://placehold.co/600x600?text=Croco+Pocket+Pink' },
          { name: 'Croco Pocket Red', slug: 'croco-pocket-red', image: 'https://placehold.co/600x600?text=Croco+Pocket+Red' },
          { name: 'Croco Pocket Tan', slug: 'croco-pocket-tan', image: 'https://placehold.co/600x600?text=Croco+Pocket+Tan' },
          { name: 'Croco Pocket Yellow', slug: 'croco-pocket-yellow', image: 'https://placehold.co/600x600?text=Croco+Pocket+Yellow' }
        ],
        dimensions: [
          { label: 'Length', value: '35 cm' },
          { label: 'Breadth', value: '13 cm' },
          { label: 'Height', value: '27 cm' },
          { label: 'Belt Length', value: '103 cm' }
        ],
        introductionTitle: 'Modern Minimalism with Croco Pocket Grey',
        introduction: 'The Croco Pocket Grey is designed for women who appreciate modern styling with practical everyday functionality. Its sophisticated grey finish and crocodile-inspired texture create an elegant appearance suitable for both casual and formal occasions.',
        features: [
          'Multiple pockets for better organization',
          'Suitable for mobile phones, wallets and cosmetics',
          'Structured yet lightweight construction',
          'Comfortable everyday carrying',
          'Suitable for formal and casual outfits'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made using premium-quality synthetic leather, this handbag is designed for durability and easy maintenance. Reinforced stitching, smooth zippers and sturdy hardware provide dependable everyday performance.',
        gallery: [
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+1',
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+2',
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+3',
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+4',
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+5',
          'https://placehold.co/600x600?text=Croco+Pocket+Grey+6'
        ]
      },
      {
        name: 'Croco',
        slug: 'croco',
        image: 'https://placehold.co/600x600?text=Croco+Handbag',
        description: 'Ankit premium regular handbag featuring an elegant crocodile-inspired texture and a sophisticated everyday design.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Croco Black', slug: 'croco-black', image: 'https://placehold.co/600x600?text=Croco+Black' },
          { name: 'Croco Brown', slug: 'croco-brown', image: 'https://placehold.co/600x600?text=Croco+Brown' }
        ],
        dimensions: [
          { label: 'Length', value: '34 cm' },
          { label: 'Breadth', value: '12 cm' },
          { label: 'Height', value: '26 cm' },
          { label: 'Handle Length', value: '45 cm' }
        ],
        introductionTitle: 'Elegant Croco Design',
        introduction: 'Croco combines a refined crocodile-inspired texture with a practical handbag silhouette. Its versatile design makes it suitable for office use, shopping and everyday occasions.',
        features: [
          'Premium textured exterior',
          'Spacious main compartment',
          'Easy-access storage',
          'Comfortable handles',
          'Suitable for everyday use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed using durable synthetic material with reinforced stitching and quality hardware for dependable everyday use.',
        gallery: [
          'https://placehold.co/600x600?text=Croco+Front',
          'https://placehold.co/600x600?text=Croco+Side'
        ]
      },
      {
        name: 'New Satan',
        slug: 'new-satan',
        image: 'https://placehold.co/600x600?text=New+Satan+Handbag',
        description: 'A contemporary handbag designed for modern everyday styling and convenient carrying.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'New Satan Black', slug: 'new-satan-black', image: 'https://placehold.co/600x600?text=New+Satan+Black' },
          { name: 'New Satan Beige', slug: 'new-satan-beige', image: 'https://placehold.co/600x600?text=New+Satan+Beige' }
        ],
        dimensions: [
          { label: 'Length', value: '33 cm' },
          { label: 'Breadth', value: '12 cm' },
          { label: 'Height', value: '25 cm' }
        ],
        introductionTitle: 'Contemporary Everyday Style',
        introduction: 'New Satan offers a clean contemporary appearance combined with practical storage for everyday essentials.',
        features: [
          'Modern silhouette',
          'Spacious interior',
          'Lightweight construction',
          'Comfortable carrying design',
          'Everyday fashion accessory'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using durable synthetic material with quality finishing and reinforced stitching.',
        gallery: [
          'https://placehold.co/600x600?text=New+Satan+Front',
          'https://placehold.co/600x600?text=New+Satan+Back'
        ]
      },
      {
        name: 'Satan',
        slug: 'satan',
        image: 'https://placehold.co/600x600?text=Satan+Handbag',
        description: 'A versatile handbag combining fashionable appearance with practical everyday functionality.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Satan Classic Black', slug: 'satan-classic-black', image: 'https://placehold.co/600x600?text=Satan+Classic+Black' },
          { name: 'Satan Navy', slug: 'satan-navy', image: 'https://placehold.co/600x600?text=Satan+Navy' }
        ],
        dimensions: [
          { label: 'Length', value: '32 cm' },
          { label: 'Breadth', value: '11 cm' },
          { label: 'Height', value: '25 cm' }
        ],
        introductionTitle: 'Classic Everyday Handbag',
        introduction: 'Satan is designed for customers looking for a practical handbag with a fashionable appearance and comfortable everyday usability.',
        features: [
          'Classic handbag design',
          'Practical storage',
          'Easy to carry',
          'Suitable for daily use',
          'Versatile styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made with durable synthetic material and finished with reliable stitching and hardware.',
        gallery: [
          'https://placehold.co/600x600?text=Satan+Front',
          'https://placehold.co/600x600?text=Satan+Interior'
        ]
      },
      {
        name: 'V-Satan Hobo',
        slug: 'v-satan-hobo',
        image: 'https://placehold.co/600x600?text=V-Satan+Hobo',
        description: 'A stylish hobo-inspired handbag offering a comfortable and fashionable carrying experience.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Hobo Tan', slug: 'hobo-tan', image: 'https://placehold.co/600x600?text=Hobo+Tan' },
          { name: 'Hobo Olive', slug: 'hobo-olive', image: 'https://placehold.co/600x600?text=Hobo+Olive' }
        ],
        dimensions: [
          { label: 'Length', value: '36 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '28 cm' }
        ],
        introductionTitle: 'Relaxed Hobo Styling',
        introduction: 'The V-Satan Hobo combines relaxed styling with useful everyday storage, making it a practical choice for modern lifestyles.',
        features: [
          'Hobo-inspired silhouette',
          'Comfortable shoulder carrying',
          'Spacious interior',
          'Modern styling',
          'Suitable for everyday occasions'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Built using durable synthetic material with reinforced seams and practical hardware.',
        gallery: [
          'https://placehold.co/600x600?text=Hobo+Front',
          'https://placehold.co/600x600?text=Hobo+Side'
        ]
      },
      {
        name: 'Check Print',
        slug: 'check-print',
        image: 'https://placehold.co/600x600?text=Check+Print+Handbag',
        description: 'A distinctive check-print handbag designed to add character to everyday outfits.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Check Print Classic', slug: 'check-print-classic', image: 'https://placehold.co/600x600?text=Check+Print+Classic' },
          { name: 'Check Print Monochrome', slug: 'check-print-monochrome', image: 'https://placehold.co/600x600?text=Check+Print+Monochrome' }
        ],
        dimensions: [
          { label: 'Length', value: '34 cm' },
          { label: 'Breadth', value: '12 cm' },
          { label: 'Height', value: '26 cm' }
        ],
        introductionTitle: 'Distinctive Check Pattern',
        introduction: 'Check Print brings a fashionable patterned finish to a practical everyday handbag design.',
        features: [
          'Distinctive check pattern',
          'Practical interior',
          'Comfortable carrying',
          'Fashion-forward design',
          'Suitable for daily styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed using durable synthetic material with carefully finished stitching and hardware.',
        gallery: [
          'https://placehold.co/600x600?text=Check+Print+Front',
          'https://placehold.co/600x600?text=Check+Print+Detail'
        ]
      },
      {
        name: 'Croco Potli',
        slug: 'croco-potli',
        image: 'https://placehold.co/600x600?text=Croco+Potli',
        description: 'An elegant potli-inspired design with a premium crocodile-style finish.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Potli Gold', slug: 'potli-gold', image: 'https://placehold.co/600x600?text=Potli+Gold' },
          { name: 'Potli Silver', slug: 'potli-silver', image: 'https://placehold.co/600x600?text=Potli+Silver' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '10 cm' },
          { label: 'Height', value: '24 cm' }
        ],
        introductionTitle: 'Elegant Potli Styling',
        introduction: 'Croco Potli combines traditional potli-inspired styling with a contemporary crocodile-style finish.',
        features: [
          'Elegant potli-inspired design',
          'Compact and lightweight',
          'Stylish textured finish',
          'Suitable for special occasions',
          'Easy to carry'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Crafted from durable synthetic material with a refined textured finish.',
        gallery: [
          'https://placehold.co/600x600?text=Croco+Potli+Front',
          'https://placehold.co/600x600?text=Croco+Potli+Back'
        ]
      },
      {
        name: 'Leather Tote',
        slug: 'leather-tote',
        image: 'https://placehold.co/600x600?text=Leather+Tote',
        description: 'A spacious tote-style handbag designed for practical everyday use.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Tote Black', slug: 'tote-black', image: 'https://placehold.co/600x600?text=Tote+Black' },
          { name: 'Tote Camel', slug: 'tote-camel', image: 'https://placehold.co/600x600?text=Tote+Camel' }
        ],
        dimensions: [
          { label: 'Length', value: '40 cm' },
          { label: 'Breadth', value: '15 cm' },
          { label: 'Height', value: '30 cm' }
        ],
        introductionTitle: 'Spacious Everyday Tote',
        introduction: 'Leather Tote provides generous storage while maintaining a clean and sophisticated appearance.',
        features: [
          'Large storage capacity',
          'Spacious main compartment',
          'Comfortable handles',
          'Suitable for work and shopping',
          'Practical everyday design'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made using durable synthetic leather with reinforced handles and stitching.',
        gallery: [
          'https://placehold.co/600x600?text=Leather+Tote+Front',
          'https://placehold.co/600x600?text=Leather+Tote+Interior'
        ]
      },
      {
        name: 'Butterfly Tote',
        slug: 'butterfly-tote',
        image: 'https://placehold.co/600x600?text=Butterfly+Tote',
        description: 'A stylish tote featuring a distinctive butterfly-inspired design.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Butterfly Pink', slug: 'butterfly-pink', image: 'https://placehold.co/600x600?text=Butterfly+Pink' },
          { name: 'Butterfly White', slug: 'butterfly-white', image: 'https://placehold.co/600x600?text=Butterfly+White' }
        ],
        dimensions: [
          { label: 'Length', value: '39 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '29 cm' }
        ],
        introductionTitle: 'Stylish Butterfly-Inspired Design',
        introduction: 'Butterfly Tote combines a decorative butterfly-inspired appearance with the convenience of a spacious tote.',
        features: [
          'Distinctive decorative design',
          'Spacious storage',
          'Comfortable handles',
          'Lightweight construction',
          'Suitable for everyday styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using durable synthetic material with quality finishing.',
        gallery: [
          'https://placehold.co/600x600?text=Butterfly+Tote+Front',
          'https://placehold.co/600x600?text=Butterfly+Tote+Detail'
        ]
      },
      {
        name: 'Twin Tote',
        slug: 'twin-tote',
        image: 'https://placehold.co/600x600?text=Twin+Tote',
        description: 'A practical twin-compartment tote design combining functionality and style.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Twin Tote Charcoal', slug: 'twin-tote-charcoal', image: 'https://placehold.co/600x600?text=Twin+Tote+Charcoal' },
          { name: 'Twin Tote Burgundy', slug: 'twin-tote-burgundy', image: 'https://placehold.co/600x600?text=Twin+Tote+Burgundy' }
        ],
        dimensions: [
          { label: 'Length', value: '41 cm' },
          { label: 'Breadth', value: '15 cm' },
          { label: 'Height', value: '30 cm' }
        ],
        introductionTitle: 'Twin Compartment Convenience',
        introduction: 'Twin Tote provides multiple compartments for improved organization while maintaining an elegant everyday appearance.',
        features: [
          'Twin-compartment design',
          'Improved organization',
          'Large storage capacity',
          'Comfortable handles',
          'Suitable for work and everyday use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Built using durable synthetic material with reinforced handles and stitching.',
        gallery: [
          'https://placehold.co/600x600?text=Twin+Tote+Front',
          'https://placehold.co/600x600?text=Twin+Tote+Open'
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
    description: 'Discover elegant partywear handbags designed for celebrations, special occasions and stylish evenings.',
    products: [
      {
        name: 'FE',
        slug: 'fe',
        image: 'https://placehold.co/600x600?text=FE+Partywear+Handbag',
        description: 'FE Partywear Handbag',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'FE Black', slug: 'fe-black', image: 'https://placehold.co/600x600?text=FE+Black' },
          { name: 'FE Silver', slug: 'fe-silver', image: 'https://placehold.co/600x600?text=FE+Silver' }
        ],
        dimensions: [
          { label: 'Length', value: '25 cm' },
          { label: 'Breadth', value: '9 cm' },
          { label: 'Height', value: '18 cm' }
        ],
        introductionTitle: 'FE Partywear Handbag',
        introduction: 'FE Partywear Handbag',
        features: [
          'Elegant partywear design',
          'Compact construction',
          'Suitable for evening occasions',
          'Fashionable finish',
          'Easy to carry'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed using quality synthetic materials with carefully finished details.',
        gallery: [
          'https://placehold.co/600x600?text=FE+Partywear+Handbag',
          'https://placehold.co/600x600?text=FE+Side+View'
        ]
      },
      {
        name: 'OD',
        slug: 'od',
        image: 'https://placehold.co/600x600?text=OD+Partywear+Handbag',
        description: 'OD Partywear Handbag',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'OD Gold', slug: 'od-gold', image: 'https://placehold.co/600x600?text=OD+Gold' }
        ],
        dimensions: [
          { label: 'Length', value: '26 cm' },
          { label: 'Breadth', value: '9 cm' },
          { label: 'Height', value: '18 cm' }
        ],
        introductionTitle: 'OD Partywear Handbag',
        introduction: 'OD Partywear Handbag',
        features: [
          'Compact partywear design',
          'Elegant appearance',
          'Easy to carry',
          'Suitable for celebrations',
          'Fashion-forward styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made using durable synthetic material with quality finishing and carefully constructed details.',
        gallery: [
          'https://placehold.co/600x600?text=OD+Partywear+Handbag',
          'https://placehold.co/600x600?text=OD+Interior'
        ]
      },
      {
        name: 'LF',
        slug: 'lf',
        image: 'https://placehold.co/600x600?text=LF+Partywear+Handbag',
        description: 'LF Partywear Handbag',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'LF Rose Gold', slug: 'lf-rose-gold', image: 'https://placehold.co/600x600?text=LF+Rose+Gold' },
          { name: 'LF Midnight Blue', slug: 'lf-midnight-blue', image: 'https://placehold.co/600x600?text=LF+Midnight+Blue' }
        ],
        dimensions: [
          { label: 'Length', value: '25 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '17 cm' }
        ],
        introductionTitle: 'LF Partywear Handbag',
        introduction: 'LF Partywear Handbag',
        features: [
          'Modern evening styling',
          'Compact storage',
          'Lightweight design',
          'Secure clasp closure',
          'Suitable for special occasions'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using quality synthetic materials and durable hardware.',
        gallery: [
          'https://placehold.co/600x600?text=LF+Partywear+Handbag',
          'https://placehold.co/600x600?text=LF+Back+View'
        ]
      },
      {
        name: 'MH',
        slug: 'mh',
        image: 'https://placehold.co/600x600?text=MH+Partywear+Handbag',
        description: 'MH Partywear Handbag',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'MH Bronze', slug: 'mh-bronze', image: 'https://placehold.co/600x600?text=MH+Bronze' }
        ],
        dimensions: [
          { label: 'Length', value: '25 cm' },
          { label: 'Breadth', value: '9 cm' },
          { label: 'Height', value: '18 cm' }
        ],
        introductionTitle: 'MH Partywear Handbag',
        introduction: 'MH Partywear Handbag',
        features: [
          'Elegant design',
          'Compact storage',
          'Suitable for parties',
          'Easy to carry',
          'Sophisticated appearance'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made from quality synthetic materials with durable finishing.',
        gallery: [
          'https://placehold.co/600x600?text=MH+Partywear+Handbag',
          'https://placehold.co/600x600?text=MH+Detail'
        ]
      },
      {
        name: '8K',
        slug: '8k',
        image: 'https://placehold.co/600x600?text=8K+Partywear+Handbag',
        description: '8K Partywear Handbag',
        brand: 'Unick Enterprises',
        colors: [
          { name: '8K Champagne', slug: '8k-champagne', image: 'https://placehold.co/600x600?text=8K+Champagne' },
          { name: '8K Pearl White', slug: '8k-pearl-white', image: 'https://placehold.co/600x600?text=8K+Pearl+White' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '17 cm' }
        ],
        introductionTitle: '8K Partywear Handbag',
        introduction: '8K Partywear Handbag',
        features: [
          'Compact design',
          'Stylish appearance',
          'Detachable chain strap',
          'Suitable for evening events',
          'Fashionable finish'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed with durable synthetic materials and quality finishing.',
        gallery: [
          'https://placehold.co/600x600?text=8K+Partywear+Handbag',
          'https://placehold.co/600x600?text=8K+Strap'
        ]
      }
    ]
  },

  // =====================================================
  // SLING BAGS
  // =====================================================
  {
    name: 'Sling Bags',
    slug: 'sling-bags',
    description: 'Explore fashionable sling bags designed for convenient everyday carrying with modern style.',
    products: [
      {
        name: 'Croco Sling',
        slug: 'croco-sling',
        image: 'https://placehold.co/600x600?text=Croco+Sling',
        description: 'A fashionable crocodile-inspired sling bag designed for convenient everyday carrying.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Croco Sling Black', slug: 'croco-sling-black', image: 'https://placehold.co/600x600?text=Croco+Sling+Black' },
          { name: 'Croco Sling Brown', slug: 'croco-sling-brown', image: 'https://placehold.co/600x600?text=Croco+Sling+Brown' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '18 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Compact Croco Sling',
        introduction: 'Croco Sling combines fashionable crocodile-inspired texture with a convenient shoulder-carrying design.',
        features: [
          'Adjustable shoulder strap',
          'Compact everyday storage',
          'Stylish textured finish',
          'Lightweight construction',
          'Convenient hands-free carrying'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made from durable synthetic material with quality stitching and reliable hardware.',
        gallery: [
          'https://placehold.co/600x600?text=Croco+Sling+Front',
          'https://placehold.co/600x600?text=Croco+Sling+Back'
        ]
      },
      {
        name: 'TCS',
        slug: 'tcs',
        image: 'https://placehold.co/600x600?text=TCS+Sling',
        description: 'A practical TCS sling bag designed for convenient everyday carrying and modern styling.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'TCS Navy', slug: 'tcs-navy', image: 'https://placehold.co/600x600?text=TCS+Navy' },
          { name: 'TCS Grey', slug: 'tcs-grey', image: 'https://placehold.co/600x600?text=TCS+Grey' }
        ],
        dimensions: [
          { label: 'Length', value: '23 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '17 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Everyday Sling Convenience',
        introduction: 'TCS is designed for customers looking for a compact and convenient bag for everyday essentials.',
        features: [
          'Adjustable strap',
          'Compact design',
          'Easy access storage',
          'Lightweight',
          'Hands-free carrying'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using durable synthetic material with reliable stitching and hardware.',
        gallery: [
          'https://placehold.co/600x600?text=TCS+Front',
          'https://placehold.co/600x600?text=TCS+Side'
        ]
      },
      {
        name: 'DVD',
        slug: 'dvd',
        image: 'https://placehold.co/600x600?text=DVD+Sling',
        description: 'DVD is a stylish sling bag designed for convenient everyday use and modern fashion.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'DVD Red', slug: 'dvd-red', image: 'https://placehold.co/600x600?text=DVD+Red' },
          { name: 'DVD Black', slug: 'dvd-black', image: 'https://placehold.co/600x600?text=DVD+Black' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '18 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Modern Everyday Sling',
        introduction: 'DVD provides a compact carrying solution for essential belongings while maintaining a fashionable appearance.',
        features: [
          'Compact storage',
          'Adjustable shoulder strap',
          'Modern styling',
          'Lightweight design',
          'Convenient everyday use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed using durable synthetic materials with quality finishing.',
        gallery: [
          'https://placehold.co/600x600?text=DVD+Front',
          'https://placehold.co/600x600?text=DVD+Open'
        ]
      },
      {
        name: 'G-Embosse',
        slug: 'g-embosse',
        image: 'https://placehold.co/600x600?text=G-Embosse',
        description: 'G-Embosse is a fashionable embossed sling bag designed for modern everyday lifestyles.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Embosse Tan', slug: 'embosse-tan', image: 'https://placehold.co/600x600?text=Embosse+Tan' },
          { name: 'Embosse Olive', slug: 'embosse-olive', image: 'https://placehold.co/600x600?text=Embosse+Olive' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '18 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Embossed Modern Design',
        introduction: 'G-Embosse features a distinctive embossed appearance combined with a practical compact sling design.',
        features: [
          'Embossed exterior',
          'Adjustable strap',
          'Compact storage',
          'Lightweight design',
          'Modern everyday styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Built using durable synthetic material with a detailed embossed finish.',
        gallery: [
          'https://placehold.co/600x600?text=G-Embosse+Front',
          'https://placehold.co/600x600?text=G-Embosse+Detail'
        ]
      },
      {
        name: 'VL',
        slug: 'vl',
        image: 'https://placehold.co/600x600?text=VL+Sling',
        description: 'VL is a versatile sling bag designed for convenient daily carrying and contemporary styling.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'VL Classic', slug: 'vl-classic', image: 'https://placehold.co/600x600?text=VL+Classic' },
          { name: 'VL Modern', slug: 'vl-modern', image: 'https://placehold.co/600x600?text=VL+Modern' }
        ],
        dimensions: [
          { label: 'Length', value: '23 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '17 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Versatile Everyday Sling',
        introduction: 'VL combines practical storage with a modern compact silhouette suitable for everyday use.',
        features: [
          'Compact design',
          'Adjustable carrying strap',
          'Easy organization',
          'Lightweight construction',
          'Suitable for daily use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made using durable synthetic material and reliable hardware.',
        gallery: [
          'https://placehold.co/600x600?text=VL+Front',
          'https://placehold.co/600x600?text=VL+Strap'
        ]
      },
      {
        name: 'ZE',
        slug: 'ze',
        image: 'https://placehold.co/600x600?text=ZE+Sling',
        description: 'ZE is a stylish compact sling bag designed for convenient hands-free carrying.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'ZE Blue', slug: 'ze-blue', image: 'https://placehold.co/600x600?text=ZE+Blue' },
          { name: 'ZE Pink', slug: 'ze-pink', image: 'https://placehold.co/600x600?text=ZE+Pink' }
        ],
        dimensions: [
          { label: 'Length', value: '24 cm' },
          { label: 'Breadth', value: '8 cm' },
          { label: 'Height', value: '18 cm' },
          { label: 'Belt Length', value: '115 cm' }
        ],
        introductionTitle: 'Compact Hands-Free Design',
        introduction: 'ZE offers a practical compact design for carrying everyday essentials while keeping both hands free.',
        features: [
          'Hands-free carrying',
          'Adjustable strap',
          'Compact storage',
          'Lightweight',
          'Modern styling'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using durable synthetic material with carefully finished details.',
        gallery: [
          'https://placehold.co/600x600?text=ZE+Front',
          'https://placehold.co/600x600?text=ZE+Inside'
        ]
      }
    ]
  },

  // =====================================================
  // SCHOOL BAGS
  // =====================================================
  {
    name: 'School Bags',
    slug: 'school-bags',
    description: 'Explore practical and durable school bags designed for everyday student use.',
    products: [
      {
        name: 'Bamboo',
        slug: 'bamboo',
        image: 'https://placehold.co/600x600?text=Bamboo+Backpack',
        description: 'Bamboo is a practical school bag designed for comfortable everyday student use.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Bamboo Green', slug: 'bamboo-green', image: 'https://placehold.co/600x600?text=Bamboo+Green' },
          { name: 'Bamboo Brown', slug: 'bamboo-brown', image: 'https://placehold.co/600x600?text=Bamboo+Brown' }
        ],
        dimensions: [
          { label: 'Length', value: '32 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '43 cm' }
        ],
        introductionTitle: 'Practical School Backpack',
        introduction: 'Bamboo is designed to provide students with practical storage and comfortable carrying for everyday school requirements.',
        features: [
          'Spacious main compartment',
          'Comfortable shoulder straps',
          'Useful front storage',
          'Durable construction',
          'Suitable for everyday school use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed using durable school-bag material with reinforced stitching and comfortable straps.',
        gallery: [
          'https://placehold.co/600x600?text=Bamboo+Front',
          'https://placehold.co/600x600?text=Bamboo+Side'
        ]
      },
      {
        name: 'Barfi',
        slug: 'barfi',
        image: 'https://placehold.co/600x600?text=Barfi+School+Bag',
        description: 'Barfi is a practical and durable school bag designed for everyday student requirements.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Barfi Blue', slug: 'barfi-blue', image: 'https://placehold.co/600x600?text=Barfi+Blue' },
          { name: 'Barfi Grey', slug: 'barfi-grey', image: 'https://placehold.co/600x600?text=Barfi+Grey' }
        ],
        dimensions: [
          { label: 'Length', value: '32 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '43 cm' }
        ],
        introductionTitle: 'Durable Everyday School Bag',
        introduction: 'Barfi offers useful storage and a comfortable carrying experience for students.',
        features: [
          'Spacious storage',
          'Comfortable straps',
          'Front pocket',
          'Durable construction',
          'Student-friendly design'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made with durable materials and reinforced stitching for regular school use.',
        gallery: [
          'https://placehold.co/600x600?text=Barfi+Front',
          'https://placehold.co/600x600?text=Barfi+Open'
        ]
      },
      {
        name: 'Mazic',
        slug: 'mazic',
        image: 'https://placehold.co/600x600?text=Mazic+Backpack',
        description: 'Mazic is a functional school backpack designed for students who need convenient everyday storage.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'Mazic Red', slug: 'mazic-red', image: 'https://placehold.co/600x600?text=Mazic+Red' },
          { name: 'Mazic Black', slug: 'mazic-black', image: 'https://placehold.co/600x600?text=Mazic+Black' }
        ],
        dimensions: [
          { label: 'Length', value: '33 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '44 cm' }
        ],
        introductionTitle: 'Functional Student Backpack',
        introduction: 'Mazic combines practical organization with a durable construction suitable for everyday school use.',
        features: [
          'Large main compartment',
          'Front storage pocket',
          'Comfortable shoulder straps',
          'Durable material',
          'Suitable for students'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Built using durable backpack material with reinforced seams and comfortable straps.',
        gallery: [
          'https://placehold.co/600x600?text=Mazic+Front',
          'https://placehold.co/600x600?text=Mazic+Back'
        ]
      },
      {
        name: 'RP Cord',
        slug: 'rp-cord',
        image: 'https://placehold.co/600x600?text=RP+Cord+Bag',
        description: 'RP Cord is a durable school bag designed for convenient storage and everyday student use.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'RP Cord Navy', slug: 'rp-cord-navy', image: 'https://placehold.co/600x600?text=RP+Cord+Navy' },
          { name: 'RP Cord Charcoal', slug: 'rp-cord-charcoal', image: 'https://placehold.co/600x600?text=RP+Cord+Charcoal' }
        ],
        dimensions: [
          { label: 'Length', value: '32 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '43 cm' }
        ],
        introductionTitle: 'Reliable School Companion',
        introduction: 'RP Cord is designed to provide students with dependable storage and comfortable everyday carrying.',
        features: [
          'Durable construction',
          'Spacious storage',
          'Comfortable straps',
          'Practical compartments',
          'Everyday school design'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Made using durable school-bag materials with reinforced stitching.',
        gallery: [
          'https://placehold.co/600x600?text=RP+Cord+Front',
          'https://placehold.co/600x600?text=RP+Cord+Detail'
        ]
      },
      {
        name: 'PB',
        slug: 'pb',
        image: 'https://placehold.co/600x600?text=PB+School+Bag',
        description: 'PB is a practical school backpack designed for students and everyday academic requirements.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'PB Blue', slug: 'pb-blue', image: 'https://placehold.co/600x600?text=PB+Blue' },
          { name: 'PB Yellow', slug: 'pb-yellow', image: 'https://placehold.co/600x600?text=PB+Yellow' }
        ],
        dimensions: [
          { label: 'Length', value: '32 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '43 cm' }
        ],
        introductionTitle: 'Everyday Student Storage',
        introduction: 'PB provides practical space for books, notebooks and everyday school essentials.',
        features: [
          'Spacious interior',
          'Front storage',
          'Comfortable straps',
          'Durable design',
          'Suitable for daily school use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Designed with durable materials and reinforced stitching for regular use.',
        gallery: [
          'https://placehold.co/600x600?text=PB+Front',
          'https://placehold.co/600x600?text=PB+Inside'
        ]
      },
      {
        name: 'CB',
        slug: 'cb',
        image: 'https://placehold.co/600x600?text=CB+Backpack',
        description: 'CB is a durable and practical school bag designed for comfortable everyday student use.',
        brand: 'Unick Enterprises',
        colors: [
          { name: 'CB Teal', slug: 'cb-teal', image: 'https://placehold.co/600x600?text=CB+Teal' },
          { name: 'CB Magenta', slug: 'cb-magenta', image: 'https://placehold.co/600x600?text=CB+Magenta' }
        ],
        dimensions: [
          { label: 'Length', value: '33 cm' },
          { label: 'Breadth', value: '14 cm' },
          { label: 'Height', value: '44 cm' }
        ],
        introductionTitle: 'Comfortable School Backpack',
        introduction: 'CB is designed with practical storage and comfortable carrying features for everyday student needs.',
        features: [
          'Spacious compartments',
          'Comfortable shoulder straps',
          'Durable construction',
          'Practical front pocket',
          'Suitable for school use'
        ],
        materialTitle: 'Material and Build Quality',
        materialDescription: 'Constructed using durable backpack material with reinforced stitching and comfortable straps.',
        gallery: [
          'https://placehold.co/600x600?text=CB+Front',
          'https://placehold.co/600x600?text=CB+Strap'
        ]
      }
    ]
  }
];