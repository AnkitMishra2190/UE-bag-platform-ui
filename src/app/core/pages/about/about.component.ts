import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-about',
  standalone: true,

  imports: [
    MatIconModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('gallerySwiper', { static: true })
  gallerySwiper!: ElementRef;

  highlights = [
    {
      number: '7+',
      title: 'Years of Experience',
      icon: 'workspace_premium'
    },
    {
      number: '500+',
      title: 'Happy Customers Who Trusted Us',
      icon: 'groups'
    }
  ];

  strengths = [
    {
      title: 'Premium Quality',
      icon: 'workspace_premium'
    },
    {
      title: 'Trend-Driven Yet Timeless Designs',
      icon: 'auto_awesome'
    },
    {
      title: 'Attention to Detail & Superior Craftsmanship',
      icon: 'precision_manufacturing'
    },
    {
      title: 'Functional Designs for Modern Lifestyles',
      icon: 'shopping_bag'
    }
  ];

  values = [
    {
      title: 'Quality Excellence',
      description:
        'Commitment to premium materials and superior craftsmanship.',
      icon: 'verified'
    },
    {
      title: 'Innovation & Design',
      description:
        'Trend-driven yet timeless styles for every occasion.',
      icon: 'lightbulb'
    },
    {
      title: 'Customer Focus',
      description:
        'Delivering value, reliability, and satisfaction.',
      icon: 'favorite'
    },
    {
      title: 'Integrity & Trust',
      description:
        'Ethical practices and transparent relationships.',
      icon: 'handshake'
    },
    {
      title: 'Functionality with Fashion',
      description:
        'Practical designs crafted for modern lifestyles.',
      icon: 'style'
    }
  ];

galleryImages = [
  {
    image: 'assets/images/about/about_01.jpg',
    title: 'Our Craftsmanship',
    alt: 'Unick Enterprises handbag manufacturing'
  },
  {
    image: 'assets/images/about/about_02.jpg',
    title: 'Precision Stitching',
    alt: 'Precision stitching and handbag production'
  },
  {
    image: 'assets/images/about/about_03.jpg',
    title: 'Our Dedicated Team',
    alt: 'Unick Enterprises production team'
  },
  {
    image: 'assets/images/about/about_04.jpg',
    title: 'Production Excellence',
    alt: 'Handbag manufacturing workspace'
  },
  {
    image: 'assets/images/about/about_05.jpg',
    title: 'Attention to Detail',
    alt: 'Handbag production and finishing'
  },
  {
    image: 'assets/images/about/about_06.jpg',
    title: 'Quality Workmanship',
    alt: 'Handbag manufacturing process'
  },
  {
    image: 'assets/images/about/about_07.jpg',
    title: 'Material Preparation',
    alt: 'Handbag material preparation'
  },
  {
    image: 'assets/images/about/about_08.jpg',
    title: 'Production Process',
    alt: 'Handbag production process'
  },
  {
    image: 'assets/images/about/about_09.jpg',
    title: 'Made With Care',
    alt: 'Unick Enterprises manufacturing'
  }
];


gallerySwiperConfig = {

    slidesPerView: 1,

    spaceBetween: 16,

    loop: true,

    speed: 600,

    grabCursor: true,

    breakpoints: {

      // Tablet
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      // Desktop
      1024: {
        slidesPerView: 3,
        spaceBetween: 24
      }

    },

    pagination: {
      clickable: true
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  };


  ngAfterViewInit(): void {

    const swiperEl = this.gallerySwiper.nativeElement;

    Object.assign(
      swiperEl,
      this.gallerySwiperConfig
    );

    swiperEl.initialize();


    /*
     * External Previous / Next buttons
     */
    const previousButton =
      document.querySelector('.gallery-prev');

    const nextButton =
      document.querySelector('.gallery-next');


    previousButton?.addEventListener(
      'click',
      () => {
        swiperEl.swiper.slidePrev();
      }
    );


    nextButton?.addEventListener(
      'click',
      () => {
        swiperEl.swiper.slideNext();
      }
    );

  }
}