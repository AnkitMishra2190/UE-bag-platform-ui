import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BackButtonComponent } from '../../../../shared/components/back-button/back-button.component';

export interface CategoryProduct {
  name: string;
  slug: string;
  image: string;
  description: string;
}

interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  products: CategoryProduct[];
}

@Component({
  selector: 'app-category-product-details',
  standalone: true,
  imports: [
    MatIconModule,
    BackButtonComponent,
    RouterLink
  ],
  templateUrl: './category-product-details.component.html',
  styleUrl: './category-product-details.component.scss'
})
export class CategoryProductDetailsComponent implements OnInit {

  // =====================================================
  // ALL CATEGORIES
  // =====================================================

  categories: ProductCategory[] = [

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
          name: 'Croco Pocket',
          slug: 'croco-pocket',
          image: 'assets/images/products/regular-handbags/croco-pocket.jpg',
          description:
            'A stylish handbag designed with a sophisticated crocodile-inspired finish and practical pocket detailing.'
        },

        {
          name: 'Croco',
          slug: 'croco',
          image: 'assets/images/products/regular-handbags/croco-pocket.jpg',
          description:
            'A premium regular handbag featuring an elegant crocodile-inspired design.'
        },

        {
          name: 'New Satan',
          slug: 'new-satan',
          image: 'assets/images/products/regular-handbags/new-satan.jpg',
          description:
            'A contemporary handbag designed for modern everyday styling.'
        },

        {
          name: 'Satan',
          slug: 'satan',
          image: 'assets/images/products/regular-handbags/satan.jpg',
          description:
            'A versatile handbag combining a fashionable appearance with everyday functionality.'
        },

        {
          name: 'V-Satan Hobo',
          slug: 'v-satan-hobo',
          image: 'assets/images/products/regular-handbags/v-satan-hobo.jpg',
          description:
            'A stylish hobo-inspired design offering a comfortable and fashionable carrying experience.'
        },

        {
          name: 'Check Print',
          slug: 'check-print',
          image: 'assets/images/products/regular-handbags/check-print.jpg',
          description:
            'A distinctive check-print handbag designed to add character to everyday outfits.'
        },

        {
          name: 'Croco Potli',
          slug: 'croco-potli',
          image: 'assets/images/products/regular-handbags/croco-potli.jpg',
          description:
            'An elegant potli-inspired design with a premium crocodile-style finish.'
        },

        {
          name: 'Leather Tote',
          slug: 'leather-tote',
          image: 'assets/images/products/regular-handbags/leather-tote.jpg',
          description:
            'A spacious tote-style handbag designed for practical everyday use.'
        },

        {
          name: 'Butterfly Tote',
          slug: 'butterfly-tote',
          image: 'assets/images/products/regular-handbags/butterfly-tote.jpg',
          description:
            'A stylish tote featuring a distinctive butterfly-inspired design.'
        },

        {
          name: 'Twin Tote',
          slug: 'twin-tote',
          image: 'assets/images/products/regular-handbags/twin-tote.jpg',
          description:
            'A practical twin-compartment tote design combining functionality and style.'
        }

      ]
    },


    // =====================================================
    // PARTYWEAR
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
          image: 'assets/images/products/partywear-handbags/fe.jpg',
          description: 'FE Partywear Handbag'
        },

        {
          name: 'OD',
          slug: 'od',
          image: 'assets/images/products/partywear-handbags/od.jpg',
          description: 'OD Partywear Handbag'
        },

        {
          name: 'LF',
          slug: 'lf',
          image: 'assets/images/products/partywear-handbags/lf.jpg',
          description: 'LF Partywear Handbag'
        },

        {
          name: 'MH',
          slug: 'mh',
          image: 'assets/images/products/partywear-handbags/mh.jpg',
          description: 'MH Partywear Handbag'
        },

        {
          name: '8K',
          slug: '8k',
          image: 'assets/images/products/partywear-handbags/8k.jpg',
          description: '8K Partywear Handbag'
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
          image: 'assets/images/products/sling-bags/croco-sling.jpg',
          description: 'Croco Sling Bag'
        },

        {
          name: 'TCS',
          slug: 'tcs',
          image: 'assets/images/products/sling-bags/tcs.jpg',
          description: 'TCS Sling Bag'
        },

        {
          name: 'DVD',
          slug: 'dvd',
          image: 'assets/images/products/sling-bags/dvd.jpg',
          description: 'DVD Sling Bag'
        },

        {
          name: 'G-Embosse',
          slug: 'g-embosse',
          image: 'assets/images/products/sling-bags/g-embosse.jpg',
          description: 'G-Embosse Sling Bag'
        },

        {
          name: 'VL',
          slug: 'vl',
          image: 'assets/images/products/sling-bags/vl.jpg',
          description: 'VL Sling Bag'
        },

        {
          name: 'ZE',
          slug: 'ze',
          image: 'assets/images/products/sling-bags/ze.jpg',
          description: 'ZE Sling Bag'
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
          image: 'assets/images/products/school-bags/bamboo.jpg',
          description: 'Bamboo School Bag'
        },

        {
          name: 'Barfi',
          slug: 'barfi',
          image: 'assets/images/products/school-bags/barfi.jpg',
          description: 'Barfi School Bag'
        },

        {
          name: 'Mazic',
          slug: 'mazic',
          image: 'assets/images/products/school-bags/mazic.jpg',
          description: 'Mazic School Bag'
        },

        {
          name: 'RP Cord',
          slug: 'rp-cord',
          image: 'assets/images/products/school-bags/rp-cord.jpg',
          description: 'RP Cord School Bag'
        },

        {
          name: 'PB',
          slug: 'pb',
          image: 'assets/images/products/school-bags/pb.jpg',
          description: 'PB School Bag'
        },

        {
          name: 'CB',
          slug: 'cb',
          image: 'assets/images/products/school-bags/cb.jpg',
          description: 'CB School Bag'
        }

      ]
    }

  ];


  // =====================================================
  // SELECTED CATEGORY
  // =====================================================

  selectedCategory: ProductCategory = this.categories[0];


  constructor(
    private route: ActivatedRoute
  ) {}


  // =====================================================
  // INITIAL LOAD
  // =====================================================

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('category');

      if (slug) {
        this.changeCategory(slug);
      }

    });

    console.log("selectedCategory.slug => ",this.selectedCategory.slug)

  }


  // =====================================================
  // CHANGE CATEGORY
  // =====================================================

  changeCategory(slug: string): void {

    const category = this.categories.find(
      item => item.slug === slug
    );

    if (category) {

      this.selectedCategory = category;

    }

  }

}