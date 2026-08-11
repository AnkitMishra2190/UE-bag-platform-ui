import { Injectable, signal } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  // =====================================================
  // CATEGORY / PRODUCT DATA
  // =====================================================

    private readonly categoriesSignal = signal<ProductCategory[]>([

    // =====================================================
    // REGULAR HANDBAGS
    // =====================================================

    {
        name: 'Regular Handbags',
        slug: 'regular-handbags',
        description:
        'Explore our collection of premium regular handbags designed with elegance, functionality and everyday practicality.',

        products: [

        // -------------------------------------------------
        // CROCO POCKET GREY
        // -------------------------------------------------

        {
            name: 'Croco Pocket Grey',
            slug: 'croco-pocket-grey',

            image:
            'assets/images/products/regular-handbags/croco-pocket-grey.jpg',

            description:
            'The Croco Pocket Grey by Zaxcer is a stylish everyday handbag combining modern design, practical storage and a sophisticated crocodile-inspired finish.',

            brand: 'Zaxcer',

            colors: [
            {
                name: 'Croco Pocket Grey',
                slug: 'croco-pocket-grey',
                image:
                'assets/images/products/regular-handbags/croco-pocket-grey.jpg'
            },
            {
                name: 'Croco Pocket Cream',
                slug: 'croco-pocket-cream',
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
            'The Croco Pocket Grey is designed for women who appreciate modern styling with practical everyday functionality. Its sophisticated grey finish and crocodile-inspired texture create an elegant appearance suitable for both casual and formal occasions.',

            features: [
            'Multiple pockets for better organization',
            'Suitable for mobile phones, wallets and cosmetics',
            'Structured yet lightweight construction',
            'Comfortable everyday carrying',
            'Suitable for formal and casual outfits'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made using premium-quality synthetic leather, this handbag is designed for durability and easy maintenance. Reinforced stitching, smooth zippers and sturdy hardware provide dependable everyday performance.',

            gallery: [
            'assets/images/products/regular-handbags/croco-pocket-grey.jpg',
            'assets/images/products/regular-handbags/croco-pocket-grey-1.jpg',
            'assets/images/products/regular-handbags/croco-pocket-grey-2.jpg',
            'assets/images/products/regular-handbags/croco-pocket-grey-3.jpg',
            'assets/images/products/regular-handbags/croco-pocket-grey-4.jpg',
            'assets/images/products/regular-handbags/croco-pocket-grey-5.jpg'
            ]
        },


        // -------------------------------------------------
        // CROCO
        // -------------------------------------------------

        {
            name: 'Croco',
            slug: 'croco',

            image:
            'assets/images/products/regular-handbags/croco-pocket.jpg',

            description:
            'Ankit premium regular handbag featuring an elegant crocodile-inspired texture and a sophisticated everyday design.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '34 cm'
            },
            {
                label: 'Breadth',
                value: '12 cm'
            },
            {
                label: 'Height',
                value: '26 cm'
            },
            {
                label: 'Handle Length',
                value: '45 cm'
            }
            ],

            introductionTitle:
            'Elegant Croco Design',

            introduction:
            'Croco combines a refined crocodile-inspired texture with a practical handbag silhouette. Its versatile design makes it suitable for office use, shopping and everyday occasions.',

            features: [
            'Premium textured exterior',
            'Spacious main compartment',
            'Easy-access storage',
            'Comfortable handles',
            'Suitable for everyday use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed using durable synthetic material with reinforced stitching and quality hardware for dependable everyday use.',

            gallery: [
            'assets/images/products/regular-handbags/croco.jpg'
            ]
        },


        // -------------------------------------------------
        // NEW SATAN
        // -------------------------------------------------

        {
            name: 'New Satan',
            slug: 'new-satan',

            image:
            'assets/images/products/regular-handbags/new-satan.jpg',

            description:
            'A contemporary handbag designed for modern everyday styling and convenient carrying.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '33 cm'
            },
            {
                label: 'Breadth',
                value: '12 cm'
            },
            {
                label: 'Height',
                value: '25 cm'
            }
            ],

            introductionTitle:
            'Contemporary Everyday Style',

            introduction:
            'New Satan offers a clean contemporary appearance combined with practical storage for everyday essentials.',

            features: [
            'Modern silhouette',
            'Spacious interior',
            'Lightweight construction',
            'Comfortable carrying design',
            'Everyday fashion accessory'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using durable synthetic material with quality finishing and reinforced stitching.',

            gallery: [
            'assets/images/products/regular-handbags/new-satan.jpg'
            ]
        },


        // -------------------------------------------------
        // SATAN
        // -------------------------------------------------

        {
            name: 'Satan',
            slug: 'satan',

            image:
            'assets/images/products/regular-handbags/satan.jpg',

            description:
            'A versatile handbag combining fashionable appearance with practical everyday functionality.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '32 cm'
            },
            {
                label: 'Breadth',
                value: '11 cm'
            },
            {
                label: 'Height',
                value: '25 cm'
            }
            ],

            introductionTitle:
            'Classic Everyday Handbag',

            introduction:
            'Satan is designed for customers looking for a practical handbag with a fashionable appearance and comfortable everyday usability.',

            features: [
            'Classic handbag design',
            'Practical storage',
            'Easy to carry',
            'Suitable for daily use',
            'Versatile styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made with durable synthetic material and finished with reliable stitching and hardware.',

            gallery: [
            'assets/images/products/regular-handbags/satan.jpg'
            ]
        },


        // -------------------------------------------------
        // V-SATAN HOBO
        // -------------------------------------------------

        {
            name: 'V-Satan Hobo',
            slug: 'v-satan-hobo',

            image:
            'assets/images/products/regular-handbags/v-satan-hobo.jpg',

            description:
            'A stylish hobo-inspired handbag offering a comfortable and fashionable carrying experience.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '36 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '28 cm'
            }
            ],

            introductionTitle:
            'Relaxed Hobo Styling',

            introduction:
            'The V-Satan Hobo combines relaxed styling with useful everyday storage, making it a practical choice for modern lifestyles.',

            features: [
            'Hobo-inspired silhouette',
            'Comfortable shoulder carrying',
            'Spacious interior',
            'Modern styling',
            'Suitable for everyday occasions'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Built using durable synthetic material with reinforced seams and practical hardware.',

            gallery: [
            'assets/images/products/regular-handbags/v-satan-hobo.jpg'
            ]
        },


        // -------------------------------------------------
        // CHECK PRINT
        // -------------------------------------------------

        {
            name: 'Check Print',
            slug: 'check-print',

            image:
            'assets/images/products/regular-handbags/check-print.jpg',

            description:
            'A distinctive check-print handbag designed to add character to everyday outfits.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '34 cm'
            },
            {
                label: 'Breadth',
                value: '12 cm'
            },
            {
                label: 'Height',
                value: '26 cm'
            }
            ],

            introductionTitle:
            'Distinctive Check Pattern',

            introduction:
            'Check Print brings a fashionable patterned finish to a practical everyday handbag design.',

            features: [
            'Distinctive check pattern',
            'Practical interior',
            'Comfortable carrying',
            'Fashion-forward design',
            'Suitable for daily styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed using durable synthetic material with carefully finished stitching and hardware.',

            gallery: [
            'assets/images/products/regular-handbags/check-print.jpg'
            ]
        },


        // -------------------------------------------------
        // CROCO POTLI
        // -------------------------------------------------

        {
            name: 'Croco Potli',
            slug: 'croco-potli',

            image:
            'assets/images/products/regular-handbags/croco-potli.jpg',

            description:
            'An elegant potli-inspired design with a premium crocodile-style finish.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '10 cm'
            },
            {
                label: 'Height',
                value: '24 cm'
            }
            ],

            introductionTitle:
            'Elegant Potli Styling',

            introduction:
            'Croco Potli combines traditional potli-inspired styling with a contemporary crocodile-style finish.',

            features: [
            'Elegant potli-inspired design',
            'Compact and lightweight',
            'Stylish textured finish',
            'Suitable for special occasions',
            'Easy to carry'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Crafted from durable synthetic material with a refined textured finish.',

            gallery: [
            'assets/images/products/regular-handbags/croco-potli.jpg'
            ]
        },


        // -------------------------------------------------
        // LEATHER TOTE
        // -------------------------------------------------

        {
            name: 'Leather Tote',
            slug: 'leather-tote',

            image:
            'assets/images/products/regular-handbags/leather-tote.jpg',

            description:
            'A spacious tote-style handbag designed for practical everyday use.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '40 cm'
            },
            {
                label: 'Breadth',
                value: '15 cm'
            },
            {
                label: 'Height',
                value: '30 cm'
            }
            ],

            introductionTitle:
            'Spacious Everyday Tote',

            introduction:
            'Leather Tote provides generous storage while maintaining a clean and sophisticated appearance.',

            features: [
            'Large storage capacity',
            'Spacious main compartment',
            'Comfortable handles',
            'Suitable for work and shopping',
            'Practical everyday design'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made using durable synthetic leather with reinforced handles and stitching.',

            gallery: [
            'assets/images/products/regular-handbags/leather-tote.jpg'
            ]
        },


        // -------------------------------------------------
        // BUTTERFLY TOTE
        // -------------------------------------------------

        {
            name: 'Butterfly Tote',
            slug: 'butterfly-tote',

            image:
            'assets/images/products/regular-handbags/butterfly-tote.jpg',

            description:
            'A stylish tote featuring a distinctive butterfly-inspired design.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '39 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '29 cm'
            }
            ],

            introductionTitle:
            'Stylish Butterfly-Inspired Design',

            introduction:
            'Butterfly Tote combines a decorative butterfly-inspired appearance with the convenience of a spacious tote.',

            features: [
            'Distinctive decorative design',
            'Spacious storage',
            'Comfortable handles',
            'Lightweight construction',
            'Suitable for everyday styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using durable synthetic material with quality finishing.',

            gallery: [
            'assets/images/products/regular-handbags/butterfly-tote.jpg'
            ]
        },


        // -------------------------------------------------
        // TWIN TOTE
        // -------------------------------------------------

        {
            name: 'Twin Tote',
            slug: 'twin-tote',

            image:
            'assets/images/products/regular-handbags/twin-tote.jpg',

            description:
            'A practical twin-compartment tote design combining functionality and style.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '41 cm'
            },
            {
                label: 'Breadth',
                value: '15 cm'
            },
            {
                label: 'Height',
                value: '30 cm'
            }
            ],

            introductionTitle:
            'Twin Compartment Convenience',

            introduction:
            'Twin Tote provides multiple compartments for improved organization while maintaining an elegant everyday appearance.',

            features: [
            'Twin-compartment design',
            'Improved organization',
            'Large storage capacity',
            'Comfortable handles',
            'Suitable for work and everyday use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Built using durable synthetic material with reinforced handles and stitching.',

            gallery: [
            'assets/images/products/regular-handbags/twin-tote.jpg'
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
            'An elegant FE partywear handbag designed for celebrations, evening occasions and fashionable styling.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '25 cm'
            },
            {
                label: 'Breadth',
                value: '9 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            }
            ],

            introductionTitle:
            'Elegant Partywear Style',

            introduction:
            'FE is designed to complement special occasions with an elegant silhouette and fashionable appearance.',

            features: [
            'Elegant partywear design',
            'Compact construction',
            'Suitable for evening occasions',
            'Fashionable finish',
            'Easy to carry'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed using quality synthetic materials with carefully finished details.',

            gallery: [
            'assets/images/products/partywear-handbags/fe.jpg'
            ]
        },


        {
            name: 'OD',
            slug: 'od',

            image:
            'assets/images/products/partywear-handbags/od.jpg',

            description:
            'OD is a stylish partywear handbag designed for special occasions and elegant evening looks.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '26 cm'
            },
            {
                label: 'Breadth',
                value: '9 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            }
            ],

            introductionTitle:
            'Sophisticated Evening Accessory',

            introduction:
            'OD combines compact functionality with an elegant appearance suitable for parties, celebrations and evening events.',

            features: [
            'Compact partywear design',
            'Elegant appearance',
            'Easy to carry',
            'Suitable for celebrations',
            'Fashion-forward styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made using durable synthetic material with quality finishing and carefully constructed details.',

            gallery: [
            'assets/images/products/partywear-handbags/od.jpg'
            ]
        },


        {
            name: 'LF',
            slug: 'lf',

            image:
            'assets/images/products/partywear-handbags/lf.jpg',

            description:
            'LF is a fashionable partywear handbag designed to complement modern evening outfits.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '25 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '17 cm'
            }
            ],

            introductionTitle:
            'Modern Partywear Fashion',

            introduction:
            'LF provides a stylish finishing touch to party and evening outfits while remaining practical to carry.',

            features: [
            'Modern evening styling',
            'Compact storage',
            'Lightweight design',
            'Easy carrying',
            'Suitable for special occasions'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using quality synthetic materials and durable hardware.',

            gallery: [
            'assets/images/products/partywear-handbags/lf.jpg'
            ]
        },


        {
            name: 'MH',
            slug: 'mh',

            image:
            'assets/images/products/partywear-handbags/mh.jpg',

            description:
            'MH is an elegant partywear handbag designed for celebrations and fashionable evening occasions.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '25 cm'
            },
            {
                label: 'Breadth',
                value: '9 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            }
            ],

            introductionTitle:
            'Elegant Celebration Companion',

            introduction:
            'MH is designed to add sophistication to special occasions while providing convenient space for everyday essentials.',

            features: [
            'Elegant design',
            'Compact storage',
            'Suitable for parties',
            'Easy to carry',
            'Sophisticated appearance'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made from quality synthetic materials with durable finishing.',

            gallery: [
            'assets/images/products/partywear-handbags/mh.jpg'
            ]
        },


        {
            name: '8K',
            slug: '8k',

            image:
            'assets/images/products/partywear-handbags/8k.jpg',

            description:
            '8K is a stylish partywear handbag designed for fashionable celebrations and evening occasions.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '17 cm'
            }
            ],

            introductionTitle:
            'Stylish Evening Design',

            introduction:
            '8K combines a compact profile with an elegant appearance for parties, celebrations and evening events.',

            features: [
            'Compact design',
            'Stylish appearance',
            'Easy to carry',
            'Suitable for evening events',
            'Fashionable finish'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed with durable synthetic materials and quality finishing.',

            gallery: [
            'assets/images/products/partywear-handbags/8k.jpg'
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

        description:
        'Explore fashionable sling bags designed for convenient everyday carrying with modern style.',

        products: [

        {
            name: 'Croco Sling',
            slug: 'croco-sling',

            image:
            'assets/images/products/sling-bags/croco-sling.jpg',

            description:
            'A fashionable crocodile-inspired sling bag designed for convenient everyday carrying.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Compact Croco Sling',

            introduction:
            'Croco Sling combines fashionable crocodile-inspired texture with a convenient shoulder-carrying design.',

            features: [
            'Adjustable shoulder strap',
            'Compact everyday storage',
            'Stylish textured finish',
            'Lightweight construction',
            'Convenient hands-free carrying'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made from durable synthetic material with quality stitching and reliable hardware.',

            gallery: [
            'assets/images/products/sling-bags/croco-sling.jpg'
            ]
        },


        {
            name: 'TCS',
            slug: 'tcs',

            image:
            'assets/images/products/sling-bags/tcs.jpg',

            description:
            'A practical TCS sling bag designed for convenient everyday carrying and modern styling.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '23 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '17 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Everyday Sling Convenience',

            introduction:
            'TCS is designed for customers looking for a compact and convenient bag for everyday essentials.',

            features: [
            'Adjustable strap',
            'Compact design',
            'Easy access storage',
            'Lightweight',
            'Hands-free carrying'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using durable synthetic material with reliable stitching and hardware.',

            gallery: [
            'assets/images/products/sling-bags/tcs.jpg'
            ]
        },


        {
            name: 'DVD',
            slug: 'dvd',

            image:
            'assets/images/products/sling-bags/dvd.jpg',

            description:
            'DVD is a stylish sling bag designed for convenient everyday use and modern fashion.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Modern Everyday Sling',

            introduction:
            'DVD provides a compact carrying solution for essential belongings while maintaining a fashionable appearance.',

            features: [
            'Compact storage',
            'Adjustable shoulder strap',
            'Modern styling',
            'Lightweight design',
            'Convenient everyday use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed using durable synthetic materials with quality finishing.',

            gallery: [
            'assets/images/products/sling-bags/dvd.jpg'
            ]
        },


        {
            name: 'G-Embosse',
            slug: 'g-embosse',

            image:
            'assets/images/products/sling-bags/g-embosse.jpg',

            description:
            'G-Embosse is a fashionable embossed sling bag designed for modern everyday lifestyles.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Embossed Modern Design',

            introduction:
            'G-Embosse features a distinctive embossed appearance combined with a practical compact sling design.',

            features: [
            'Embossed exterior',
            'Adjustable strap',
            'Compact storage',
            'Lightweight design',
            'Modern everyday styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Built using durable synthetic material with a detailed embossed finish.',

            gallery: [
            'assets/images/products/sling-bags/g-embosse.jpg'
            ]
        },


        {
            name: 'VL',
            slug: 'vl',

            image:
            'assets/images/products/sling-bags/vl.jpg',

            description:
            'VL is a versatile sling bag designed for convenient daily carrying and contemporary styling.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '23 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '17 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Versatile Everyday Sling',

            introduction:
            'VL combines practical storage with a modern compact silhouette suitable for everyday use.',

            features: [
            'Compact design',
            'Adjustable carrying strap',
            'Easy organization',
            'Lightweight construction',
            'Suitable for daily use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made using durable synthetic material and reliable hardware.',

            gallery: [
            'assets/images/products/sling-bags/vl.jpg'
            ]
        },


        {
            name: 'ZE',
            slug: 'ze',

            image:
            'assets/images/products/sling-bags/ze.jpg',

            description:
            'ZE is a stylish compact sling bag designed for convenient hands-free carrying.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '24 cm'
            },
            {
                label: 'Breadth',
                value: '8 cm'
            },
            {
                label: 'Height',
                value: '18 cm'
            },
            {
                label: 'Belt Length',
                value: '115 cm'
            }
            ],

            introductionTitle:
            'Compact Hands-Free Design',

            introduction:
            'ZE offers a practical compact design for carrying everyday essentials while keeping both hands free.',

            features: [
            'Hands-free carrying',
            'Adjustable strap',
            'Compact storage',
            'Lightweight',
            'Modern styling'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using durable synthetic material with carefully finished details.',

            gallery: [
            'assets/images/products/sling-bags/ze.jpg'
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

        description:
        'Explore practical and durable school bags designed for everyday student use.',

        products: [

        {
            name: 'Bamboo',
            slug: 'bamboo',

            image:
            'assets/images/products/school-bags/bamboo.jpg',

            description:
            'Bamboo is a practical school bag designed for comfortable everyday student use.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '32 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '43 cm'
            }
            ],

            introductionTitle:
            'Practical School Backpack',

            introduction:
            'Bamboo is designed to provide students with practical storage and comfortable carrying for everyday school requirements.',

            features: [
            'Spacious main compartment',
            'Comfortable shoulder straps',
            'Useful front storage',
            'Durable construction',
            'Suitable for everyday school use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed using durable school-bag material with reinforced stitching and comfortable straps.',

            gallery: [
            'assets/images/products/school-bags/bamboo.jpg'
            ]
        },


        {
            name: 'Barfi',
            slug: 'barfi',

            image:
            'assets/images/products/school-bags/barfi.jpg',

            description:
            'Barfi is a practical and durable school bag designed for everyday student requirements.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '32 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '43 cm'
            }
            ],

            introductionTitle:
            'Durable Everyday School Bag',

            introduction:
            'Barfi offers useful storage and a comfortable carrying experience for students.',

            features: [
            'Spacious storage',
            'Comfortable straps',
            'Front pocket',
            'Durable construction',
            'Student-friendly design'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made with durable materials and reinforced stitching for regular school use.',

            gallery: [
            'assets/images/products/school-bags/barfi.jpg'
            ]
        },


        {
            name: 'Mazic',
            slug: 'mazic',

            image:
            'assets/images/products/school-bags/mazic.jpg',

            description:
            'Mazic is a functional school backpack designed for students who need convenient everyday storage.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '33 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '44 cm'
            }
            ],

            introductionTitle:
            'Functional Student Backpack',

            introduction:
            'Mazic combines practical organization with a durable construction suitable for everyday school use.',

            features: [
            'Large main compartment',
            'Front storage pocket',
            'Comfortable shoulder straps',
            'Durable material',
            'Suitable for students'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Built using durable backpack material with reinforced seams and comfortable straps.',

            gallery: [
            'assets/images/products/school-bags/mazic.jpg'
            ]
        },


        {
            name: 'RP Cord',
            slug: 'rp-cord',

            image:
            'assets/images/products/school-bags/rp-cord.jpg',

            description:
            'RP Cord is a durable school bag designed for convenient storage and everyday student use.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '32 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '43 cm'
            }
            ],

            introductionTitle:
            'Reliable School Companion',

            introduction:
            'RP Cord is designed to provide students with dependable storage and comfortable everyday carrying.',

            features: [
            'Durable construction',
            'Spacious storage',
            'Comfortable straps',
            'Practical compartments',
            'Everyday school design'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Made using durable school-bag materials with reinforced stitching.',

            gallery: [
            'assets/images/products/school-bags/rp-cord.jpg'
            ]
        },


        {
            name: 'PB',
            slug: 'pb',

            image:
            'assets/images/products/school-bags/pb.jpg',

            description:
            'PB is a practical school backpack designed for students and everyday academic requirements.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '32 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '43 cm'
            }
            ],

            introductionTitle:
            'Everyday Student Storage',

            introduction:
            'PB provides practical space for books, notebooks and everyday school essentials.',

            features: [
            'Spacious interior',
            'Front storage',
            'Comfortable straps',
            'Durable design',
            'Suitable for daily school use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Designed with durable materials and reinforced stitching for regular use.',

            gallery: [
            'assets/images/products/school-bags/pb.jpg'
            ]
        },


        {
            name: 'CB',
            slug: 'cb',

            image:
            'assets/images/products/school-bags/cb.jpg',

            description:
            'CB is a durable and practical school bag designed for comfortable everyday student use.',

            brand: 'Unick Enterprises',

            dimensions: [
            {
                label: 'Length',
                value: '33 cm'
            },
            {
                label: 'Breadth',
                value: '14 cm'
            },
            {
                label: 'Height',
                value: '44 cm'
            }
            ],

            introductionTitle:
            'Comfortable School Backpack',

            introduction:
            'CB is designed with practical storage and comfortable carrying features for everyday student needs.',

            features: [
            'Spacious compartments',
            'Comfortable shoulder straps',
            'Durable construction',
            'Practical front pocket',
            'Suitable for school use'
            ],

            materialTitle:
            'Material and Build Quality',

            materialDescription:
            'Constructed using durable backpack material with reinforced stitching and comfortable straps.',

            gallery: [
            'assets/images/products/school-bags/cb.jpg'
            ]
        }

        ]
    }

    ]);


  // =====================================================
  // PUBLIC READ-ONLY SIGNAL
  // =====================================================

  readonly categories = this.categoriesSignal.asReadonly();


  // =====================================================
  // GET CATEGORY
  // =====================================================

  getCategory(categorySlug: string): ProductCategory | null {

    return this.categoriesSignal().find(
      category => category.slug === categorySlug
    ) ?? null;

  }


  // =====================================================
  // GET PRODUCT
  // =====================================================

  getProduct(
    categorySlug: string,
    productSlug: string
  ): CategoryProduct | null {

    const category = this.getCategory(categorySlug);

    if (!category) {
      return null;
    }

    return category.products.find(
      product => product.slug === productSlug
    ) ?? null;

  }


  // =====================================================
  // GET CATEGORY + PRODUCT TOGETHER
  // =====================================================

  getCategoryAndProduct(
    categorySlug: string,
    productSlug: string
  ): {
    category: ProductCategory | null;
    product: CategoryProduct | null;
  } {

    const category = this.getCategory(categorySlug);

    if (!category) {

      return {
        category: null,
        product: null
      };

    }

    const product =
      category.products.find(
        item => item.slug === productSlug
      ) ?? null;

    return {
      category,
      product
    };

  }

}