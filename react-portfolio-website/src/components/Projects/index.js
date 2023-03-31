import { useEffect, useState } from 'react'
import { Col, Row, Nav, Container, Tab } from 'react-bootstrap'
import { ProjectCard } from '../ProjectCard'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import 'react-multi-carousel/lib/styles.css'
import './index.scss'
// import eighty from '../../assets/images/eighty.png';
// import seventy from '../../assets/images/seventy.png';

// PROJECTS: setup in reverse order to show new items first
const Projects = () => {
  const designProjects = [
    {
      id: 4,
      slug: 'abstract',
      title: 'abstract',
      desc: 'Abstract Photoshop Art for portfolio book',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/abstract.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/abstract.jpg',
    },
    {
      id: 5,
      slug: 'album',
      title: 'album',
      desc: 'Design for Album self titled',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/graphics/album.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/album.jpg',
    },
    {
      id: 6,
      slug: 'dvd-promo-design',
      title: 'DVD DJ Promo Design',
      desc: "Design for DVD Promo entitled '2DJs'",
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl: 'https://joeybonneville.com/app/img/projects/graphics/3wem.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/3wem.jpg',
    },
    {
      id: 7,
      slug: 'album02',
      title: 'album02',
      desc: 'Design for Second Album self titled',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/graphics/album2.jpg',
      link: 'http://joeybonneville.com/wp-content/uploads/2015/01/album2.jpg',
    },
    {
      id: 8,
      slug: 'unlocked-banner',
      title: 'Unlocked Animated Banner',
      desc: 'Animated Banner Logo designed in Flash for Unlocked band',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/graphics/banner.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/unlocked-banner.gif',
    },
    {
      id: 9,
      slug: 'business-card-front',
      title: 'Business Card (front)',
      desc: 'Created my own My Business Card Design in Photoshop - front',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/bdesign_card_front.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/bdesign_card_front.jpg',
    },
    {
      id: 11,
      slug: 'blocks',
      title: 'blocks',
      desc: 'Abstract Photoshop Art created for portfolio book',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/graphics/blocks.jpg',
      link: 'http://joeybonneville.com/wp-content/uploads/2015/01/blocks.jpg',
    },
    {
      id: 12,
      slug: 'brochure',
      title: 'brochure',
      desc: 'Created Brochure to showcase design work',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/brochure.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/brochure.png',
    },
    {
      id: 13,
      slug: 'magazine-cover',
      title: 'Gondry Magazine Cover',
      desc: 'Magazine design created in Photoshop',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/gondrycover.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/gondrycover.png',
    },
    {
      id: 15,
      slug: 'album-design',
      title: 'Joey Bonneville Package Design',
      desc: 'Sleeve Package Design for first self titled album, folded and glued for CD to fit',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/bonneville_album.png',
      link: 'ttps://joeybonneville.com/app/img/projects/graphics/bonneville_album.png',
    },
    {
      id: 16,
      slug: 'typography',
      title: 'Typography Logo Design',
      desc: 'Typography Art for Logo - self promotion',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/joeyType.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/joeyType.jpg',
    },
    {
      id: 18,
      slug: 'mothersday-design',
      title: 'Mothers Day Print',
      desc: "Artwork created in Photoshop as a Mother's Day gift",
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/mom_print.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/mom_print.png',
    },
    {
      id: 19,
      slug: 'tree-design',
      title: 'Tree Design Logo',
      desc: 'Abstract Photoshop art taken from original tree photo',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/treeBlur.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/treeBlur.jpg',
    },
    {
      id: 20,
      slug: 'palatino',
      title: 'Palatino Logo Design',
      desc: 'Type art for school project focused on particular font choice',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/palatino.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/palatino.jpg',
    },
    {
      id: 22,
      slug: 'unlocked-flyer',
      title: 'Flyer Print - Unlocked Band',
      desc: 'Type art flyer design for local band',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/un_flyer.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/un_flyer.jpg',
    },
    {
      id: 23,
      slug: 'unlocked-flyer02',
      title: 'Flyer Print Unlocked Band',
      desc: 'Flyer design',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/un_heart.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/un_heart.jpg',
    },
    {
      id: 68,
      slug: 'mpam-flyer',
      title: 'Art Exhibition Flyer',
      desc: "Custom flyer for local art exhibition 'Gutter Flowers' presented by members of Manayunk Progressive Art Movement",
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/gutterflowers.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/gutterflowers.png',
    },
    {
      id: 69,
      slug: 'heartsandclouds',
      title: 'Hearts & Clouds',
      desc: "First of a personalized graphic art series entitled 'The Clouded Heart' expressing custom design",
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/heartclouds.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/heartclouds.png',
    },
    {
      id: 70,
      slug: 'halloweenflyer',
      title: 'Dark Castle Experience Flyer',
      desc: 'Custom flyer for local halloween event',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/halloween2019.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/halloween2019.jpg',
    },
    {
      id: 72,
      slug: 'new-logo',
      title: 'Rebranded Logo',
      desc: 'Created a new logo for web/graphics services devised from the original.',
      skills: ['Graphics'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/badd.png',
      link: 'https://joeybonneville.com/app/img/projects/graphics/badd_black.png',
    },
  ]

  const webProjects = [
    {
      id: 1,
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/oldpage.png',
      link: 'https://joeybonneville.com/app/img/projects/web/oldpage.png',
      skills: ['Web', 'Graphics'],
      slug: 'first-porfolio-website',
      title: "Flash Portfolio Site '99",
      desc: 'First website all animated in Flash',
    },
    {
      id: 2,
      slug: 'twinsounds-aboutus',
      title: 'Twin Sounds Demo - About Us',
      desc: 'Built a Wix site demo for local Music Studio - About Us Page',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/twin_sounds_about.png',
      link: 'https://joeybonneville.com/app/img/projects/web/twin_sounds_about.png',
    },
    {
      id: 3,
      slug: 'twinsounds-page',
      title: 'Twin Sounds Demo',
      desc: 'Built a Wix site demo for local Music Studio - Landing Page',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/twin_sounds.png',
      link: 'https://joeybonneville.com/app/img/projects/web/twin_sounds.png',
    },
    {
      id: 14,
      slug: 'header-logo',
      title: 'Portfolio Website Logo',
      desc: 'Legacy brand identity',
      skills: ['Graphics', 'Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/graphics/header_logo.jpg',
      link: 'https://joeybonneville.com/app/img/projects/graphics/header_logo.jpg',
    },
    {
      id: 31,
      slug: 'petals-menu-page',
      title: 'Web Design Project - Petals Menu Page',
      desc: 'Web Design Template - school project for web business',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/petals_menu.png',
      link: 'https://joeybonneville.com/app/img/projects/web/petals_menu.png',
    },
    {
      id: 32,
      slug: 'bootstrap-template',
      title: 'bootstrapHTML',
      desc: 'Example using Bootstrap 4 from valet site demo</a>',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/bootstrapHTML.png',
      link: 'https://joeybonneville.com/app/img/projects/code/bootstrapHTML.png',
    },
    {
      id: 33,
      slug: 'javascript-html',
      title: 'myBudget app',
      desc: 'Budget application built in Javascript',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/budgetHTML.png',
      link: 'https://joeybonneville.com/app/img/projects/code/budgetHTML.png',
    },
    {
      id: 34,
      slug: 'angular-directive',
      title: 'Angular Directive Code',
      desc: 'Angular Directive used in Mortgage Reviews app demo',
      skills: ['Code'],
      industry: 'Mortgage',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/directive.jpg',
      link: 'https://joeybonneville.com/app/img/projects/code/directive.jpg',
    },
    {
      id: 35,
      slug: 'gruntjs',
      title: 'gruntjs',
      desc: 'Built Gruntjs file using Less and Watch task dependencies',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/gruntjs.png',
      link: 'https://joeybonneville.com/app/img/projects/code/gruntjs.png',
    },
    {
      id: 36,
      slug: 'less',
      title: 'less',
      desc: 'Using LESS to compile CSS calls to browser. This example from first exposure in Petsmart project for eCommerce webstore',
      skills: ['Code'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/less.png',
      link: 'https://joeybonneville.com/app/img/projects/code/less.png',
    },
    {
      id: 37,
      slug: 'css',
      title: 'css',
      desc: 'CSS example from years counter PHP example',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/years_counterCSS.png',
      link: 'https://joeybonneville.com/app/img/projects/code/years_counterCSS.png',
    },
    {
      id: 38,
      slug: 'php',
      title: 'php',
      desc: 'PHP demo app built to randomize user selection based on age. Statements defined to trigger different grammar, picture, and maturity descriptions based on a random number using PHP rand() function</a>',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/years_counterPHP.png',
      link: 'http://joeybonneville.com/app/years-counter/',
    },
    {
      id: 39,
      slug: 'modal-design-edit',
      title: 'Petsmart Edit In Cart Modal design',
      desc: 'Updates to CSS styles for Petsmart Shopping Cart Modal component',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/editincart.png',
      link: 'https://joeybonneville.com/app/img/projects/web/editincart.png',
    },
    {
      id: 40,
      slug: 'gift-card-modal',
      title: 'Petsmart Gift Card Modal Design',
      desc: 'Updates to CSS styles for design for Petsmart Gift Card Modal component',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/gcmodal.png',
      link: 'https://joeybonneville.com/app/img/projects/web/gcmodal.png',
    },
    {
      id: 41,
      slug: 'ispu-directions',
      title: 'Petsmart In-Store Pickup Design',
      desc: 'Completed CSS redesign for Petsmart In Store Pickup Directions',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/ispu_directions.png',
      link: 'https://joeybonneville.com/app/img/projects/web/ispu_directions.png',
    },
    {
      id: 42,
      slug: 'order-details-page',
      title: 'Petsmart Order Page Design',
      desc: 'Worked on CMS styles for Petsmart Order Details page',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/order_details.png',
      link: 'https://joeybonneville.com/app/img/projects/web/order_details.png',
    },
    {
      id: 43,
      slug: 'pets-page-2013',
      title: 'Petsmart Landing Page in 2013',
      desc: 'Legacy (2013) Petsmart site before redesign participation. Worked on LESS/CSS styles and creating page components and variants to navigational items and taxonomy',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/pets_landing13.png',
      link: 'https://joeybonneville.com/app/img/projects/web/pets_landing13.png',
    },
    {
      id: 44,
      slug: 'pets-page-2015',
      title: 'Petsmart Redesign in 2015',
      desc: 'Petsmart (2015) look from Web Archive after participating in redesign. Worked on LESS/CSS styles and creating page components and variants to navigational items and taxonomy',
      skills: ['Web'],
      industry: 'eCommerce',
      agency: 'Ebay',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/pets_landing15.png',
      link: 'https://joeybonneville.com/app/img/projects/web/pets_landing15.png',
    },
    {
      id: 45,
      slug: 'business-template-bw',
      title: 'Business Template Design - Black & White',
      desc: 'Business template in black and white created for Curotech internship project',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/restructured.png',
      link: 'https://joeybonneville.com/app/img/projects/web/restructured.png',
    },
    {
      id: 46,
      slug: 'business-template-color',
      title: 'Business Template Design - Color',
      desc: 'Business template in color created for Curotech internship project',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/restructured_color.png',
      link: 'https://joeybonneville.com/app/img/projects/web/restructured_color.png',
    },
    {
      id: 47,
      slug: 'angularjs-reviews-code',
      title: 'Reviews Admin Dashboard code',
      desc: 'Raw code for reviews app built in Angularjs for organizing Mortgage reviews. Custom style tables for responsive view',
      skills: ['Web', 'Code'],
      industry: 'Mortgage',
      agency: 'Freedom Mortgage',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/angular_template.png',
      link: 'https://joeybonneville.com/app/img/projects/code/angular_template.png',
    },
    {
      id: 48,
      slug: 'reviews-admin',
      title: 'Reviews Administration Template - Angularjs',
      desc: "Reviews admin-style app built in Angularjs, filter by ratings and scope 'keyword' search and Bootstrap Pagination built in. Raw Excel Spreadsheet converted from CSV to JSON format to make the process of filling in HTML tags more dyanmic (not used in production)",
      skills: ['Web'],
      industry: 'Mortgage',
      agency: 'Freedom Mortgage',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/reviews.jpg',
      link: 'https://granam180.github.io/my-sites/reviews02/index.html',
    },
    // {
    //   id: 49,
    //   slug: 'reviews-admin-mobile',
    //   title: 'Reviews Administration Mobile View',
    //   desc: 'Mobile design for Mortgage Reviews admin app.  Used CSS Responsive Data Tables for tabular mobile view',
    //   skills: ['Web'],
    //   industry: 'Mortgage',
    //   agency: 'Freedom Mortgage',
    //   imgUrl:
    //     'https://joeybonneville.com/app/img/projects/web/reviews_mobile.jpg',
    //   link: 'https://granam180.github.io/my-sites/reviews02/index.html',
    // },
    {
      id: 50,
      slug: 'testimonials-modal',
      title: 'Testimonials Modal Design',
      desc: 'Testimonial modal design for Mortgage Loan Origination website',
      skills: ['Web'],
      industry: 'Mortgage',
      agency: 'Freedom Mortgage',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/testimonials_modal.png',
      link: 'https://joeybonneville.com/app/img/projects/web/testimonials_modal.png',
    },
    // {
    //   id: 51,
    //   slug: 'testimonials-page',
    //   title: 'Testimonials Page Design',
    //   desc: 'Testimonial design for Mortgage Loan Origination website',
    //   skills: ['Web'],
    //   industry: 'Mortgage',
    //   agency: 'Freedom Mortgage',
    //   imgUrl:
    //     'https://joeybonneville.com/app/img/projects/web/testimonials.png',
    //   link: 'https://joeybonneville.com/app/img/projects/watermark_testimonials.png',
    // },
    {
      id: 54,
      slug: 'valet-site',
      title: 'Valet Website Demo',
      desc: 'Website Demo for local Philadelphia Valet Service, focused on Google Map navigational support.',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/valet-2.jpg',
      link: 'https://granam180.github.io/my-sites/valet-site-b4',
    },
    {
      id: 55,
      slug: 'reviews-style-markup',
      title: 'Reviews Page - Dynamic Markup',
      desc: "Reviews app built in Angularjs, filter by ratings and scope 'keyword' search and built in. Raw Excel Spreadsheet converted from CSV to JSON format to dyanmically generate HTML markup (not used in production)",
      skills: ['Web'],
      industry: 'Mortgage',
      agency: 'Freedom Mortgage',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/reviews_markup.jpg',
      link: 'https://granam180.github.io/my-sites/review-styles/',
    },
    // {
    //   id: 56,
    //   slug: 'grads',
    //   title: 'Freedom Mortgage First Flyers static site demo',
    //   desc: 'Created a static website template designed from this PDF brochure',
    //   skills: ['Web'],
    //   industry: 'Mortgage',
    //   agency: 'Freedom Mortgage',
    //   imgUrl: 'https://joeybonneville.com/app/img/projects/web/grads.jpg',
    //   link: 'https://joeybonneville.com/app/img/projects/web/grads.jpg',
    // },
    {
      id: 58,
      slug: 'afterfly-old-site',
      title: 'Afterfly Website (old)',
      desc: 'Afterfly event (legacy) website landing page built with Wordpress template',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/afterfly_old.jpg',
      link: 'https://joeybonneville.com/app/img/projects/web/afterfly_old.jpg',
    },
    {
      id: 59,
      slug: 'afterfly-custom-site',
      title: 'Afterfly Website (custom)',
      desc: 'Afterfly website after redesign. Completely custom code &amp; design by Bonneville Design',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/web/afterfly_new.jpg',
      link: 'http://www.joeybonneville.com/demos/afterfly/site/index.html',
    },
    {
      id: 60,
      slug: 'afterfly-new-site',
      title: 'Afterfly website (current)',
      desc: 'Afterfly.me website on Squarespace platform with parallax theme. Custom countdown counter inlcluded on top right using jQuery',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/afterflyme.jpg',
      link: 'https://www.afterfly.me/',
    },
    {
      id: 61,
      slug: 'time-of-day',
      title: 'Custom Date Function',
      desc: 'Time of day function created on the landing page of my portfolio for a personal greeting depending on the hour the user is visiting the page',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/tod.jpg',
      link: 'https://joeybonneville.com/app/img/projects/code/tod.jpg',
    },
    {
      id: 62,
      slug: 'portfolio-site',
      title: 'Angular Portfolio Website',
      desc: 'New portfolio site built in Angularjs &amp; Sass. Functionality on Projects page to filter based on Industry/skill displaying Web Development and Design skill set. All changes to content made in JSON file, not in HTML files.',
      skills: ['Web'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/web/portfolio.jpg',
      link: 'http://joeybonneville.com/app/#/projects',
    },
    {
      id: 63,
      slug: 'lo-template',
      title: 'Loan Officer Template',
      desc: 'Bootstrap template used for Mortgage Loan Officer webpages.',
      skills: ['Code'],
      industry: 'Mortgage',
      agency: 'Freedom Mortgage',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/FreedomTemplate.png',
      link: 'https://joeybonneville.com/app/img/projects/code/FreedomTemplate.png',
    },
    {
      id: 64,
      slug: 'custom-slider',
      title: 'Custom Video Slider Plugin',
      desc: 'Created a custom video slider plugin for Wordpress similar to to cut down on load time and optimal performance. Built with current Foundation mobile framework using Orbit carousel &amp; Vimeo API',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'NextLevel',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/custom-slider.png',
      link: 'http://granam180.github.io/my-sites/custom-slider/',
    },
    {
      id: 65,
      slug: 'color-game',
      title: 'Color Game Application',
      desc: 'Game application built in vanilla Javascript. The user guesses which rgb color is displayed by selecting tiles based on level of difficulty.',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Udemy',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/color-game.png',
      link: 'https://www.joeybonneville.com/demos/color-game/',
    },
    {
      id: 66,
      slug: 'todo-list',
      title: 'ToDo List App',
      desc: 'Built a CRUD ToDo List using JQuery.',
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Udemy',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/todo.png',
      link: 'https://www.joeybonneville.com/demos/todo-list/',
    },
    {
      id: 67,
      slug: 'circles',
      title: 'Circles - Patatap Clone',
      desc: "DESKTOP ONLY VERSION! beat-making app build using 'PaperJs' Javascript library. Just hit ANY key on your keyboard to interact.",
      skills: ['Code'],
      industry: 'Freelance',
      agency: 'Udemy',
      imgUrl: 'https://joeybonneville.com/app/img/projects/code/circles.png',
      link: 'https://www.joeybonneville.com/demos/circles/circles.html',
    },
    {
      id: 72,
      slug: 'new-site',
      title: 'Bonneville Artist Development And Design (BADD)',
      desc: 'New rebrand identity for graphic and web services Bonneville Artist Development And Design',
      skills: ['Web', 'Graphics'],
      industry: 'Freelance',
      agency: 'Business',
      imgUrl:
        'https://joeybonneville.com/wp-content/uploads/2021/02/live-1-1024x1022.jpg',
      link: 'https://joeybonneville.com/',
    },
    {
      id: 73,
      slug: 'mapbox-gl',
      title: 'Hospitality Experience Map',
      desc: 'Using Mapbox-GL JS and geojson coordinates to deliver a full-throttle "digital experience" app.  Key features include quickly filtering through solution options for each particular partner group, abnd disabling each experience that does not affiliate with each client "Persona"',
      skills: ['Web', 'Code'],
      industry: 'MDG',
      agency: 'Hospitality',
      imgUrl:
        'https://joeybonneville.com/app/img/projects/code/wxg.png',
      link: 'https://joeybonneville.com/app/img/projects/code/wxg.png',
    },
  ]

  const photoProjects = [
    {
      id: 24,
      slug: 'alec',
      title: 'Alec Bacstian Portrait',
      desc: 'Portrait of fellow student with fall colours. Had to remove cars parked in the background',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/alec.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/alec.jpg',
    },
    {
      id: 25,
      slug: 'balcony',
      title: 'Balcony In Philly',
      desc: 'View from a Philadelphia balcony',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/balcony.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/balcony.jpg',
    },
    {
      id: 26,
      slug: 'darkroom',
      title: 'Darkroom Project',
      desc: 'First Darkroom Photograph process from school',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/darkroom.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/darkroom.jpg',
    },
    {
      id: 27,
      slug: 'edgehill',
      title: 'S Edgehill Ave',
      desc: 'Photo taken from old neighborhood',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/edgehill.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/edgehill.jpg',
    },
    {
      id: 28,
      slug: 'self-portrait',
      title: 'Self Portrait',
      desc: 'I turned the old Minolta around and, click',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/self.png',
      link: 'https://joeybonneville.com/app/img/projects/photo/self.png',
    },
    {
      id: 29,
      slug: 'tree',
      title: 'tree',
      desc: 'Abstract Graphic from a tree photo, use of halftones',
      skills: ['Photo', 'Graphics'],
      industry: 'Freelance',
      agency: 'School',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/tree.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/tree.jpg',
    },
    {
      id: 30,
      slug: 'unlocked',
      title: 'unlocked',
      desc: 'Unlocked band promotional photo shoot',
      skills: ['Photo'],
      industry: 'Freelance',
      agency: 'Bonneville Design',
      imgUrl: 'https://joeybonneville.com/app/img/projects/photo/unlocked.jpg',
      link: 'https://joeybonneville.com/app/img/projects/photo/unlocked.jpg',
    },
  ]

  // const projects = '../../data/portolfio.json'

  const [letterClass, setLetterClass] = useState('text-animate');


  const reversedW = [...webProjects].reverse();
  const reversedD = [...designProjects].reverse();
  const reversedP = [...photoProjects].reverse();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <section className="project" id="project">
        <div className="container portfolio-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Projects'.split('')}
                idx={7}
              />
            </h1>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <p>
                "The only way to make sense out of change is to plunge into it,
                move with it, and join the dance." ~ Alan Watts
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Graphics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    {/* <Nav.Link eventKey="third" disabled>coming soon...</Nav.Link> */}
                    <Nav.Link eventKey="third">Photography</Nav.Link>                    
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {reversedW.map((project, index) => {
                        return (
                          // <p>{project.title}</p>
                          <ProjectCard key={index} {...project} />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {reversedD.map((project, index) => {
                        return (
                          // <p>{project.title}</p>
                          <ProjectCard key={index} {...project} />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {reversedP.map((project, index) => {
                        return (
                          // <p>{project.title}</p>
                          <ProjectCard key={index} {...project} />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>

      <Loader type="pacman" />
    </>
  )
}

export default Projects
