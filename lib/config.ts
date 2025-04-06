import { title } from "process";
import bathroomPic from "../../app/assets/services/bathroom.webp";
import { ArrowRight, Home, ChefHat, Droplets, Shirt, Briefcase, Baby, IndianRupee } from "lucide-react"
import { CloudRain, Shield, Wifi, DollarSign, Award, CheckCircle } from 'lucide-react';

export const HeroImages = [
  "https://s3-alpha-sig.figma.com/img/64e5/9971/a135495d2ea068875724acc5125a8eff?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zkoh6YFMjQZAWwlnxBSDGqecz~nbW4sTSlN8Kz104wa0w5nJuZEgJDLTl4RrB7C2vma2rKh1cGCFapil3YXIa~Vl0CISH~efIHXBfm3KBxch5~xi67yGKBITfC3aqU9Ge-6B69Pa0GrEYZnz5kaHOirPw67EbVSYZjrewrcHctoqEnUx-m7vYYsHtRep9gN~eWm~uk5bVVNFuiTzFDWHpbCyMXvIJJgjBE1qpTU~78qDjsDNL5a-~F4GHO7SLz1YFH7s-SVcK~lWoiOWtmZdDa-~ASUdRKHmO5aYXQHpcqf-5-PEC4liYZdU5PSByRxpOlW9NZX7xItgKMliA1jXhg__",
  // "https://homerenot.com/wp-content/uploads/2023/05/shutterstock_498571717.jpg",
  "https://megastarproducts.co.za/cdn/shop/collections/Camfly_JSW_Fluted_Slat_Wall_Cladding.jpg",
  "https://www.zmartbuild.com/wp-content/uploads/2021/09/shutterstock_95233129-scaled.jpg",
  "https://realplast.in/fmcg_upload/blog/17072302511144k.png",
];

export const MaterialsImages = [
  // "https://homerenot.com/wp-content/uploads/2023/05/shutterstock_498571717.jpg",
  "https://www.zmartbuild.com/wp-content/uploads/2021/09/shutterstock_1512689903-scaled.jpg",
  "https://plasticranger.com/wp-content/uploads/2021/05/PVCFilm-1536x1154.jpg",
  "https://blueskywindows.com.au/wp-content/uploads/2016/01/color.webp",
  // "https://realplast.in/fmcg_upload/blog/17072302511144k.png",
];

export const MaterialsCaptions = [
  {
    title: "SPC",
    desc: "Durable, waterproof, and scratch-resistant flooring with a rigid core for stability.",
  },
  {
    title: "PVC",
    desc: "Versatile material used for stylish wall panels, ceilings, and decorative interiors.",
  },
  {
    title: "UPVC",
    desc: "Weather-resistant material perfect for modern windows and doors.",
  },
];

export const GalleryImages = [...Array(93).keys()].map(
  (i) =>
    `https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/gallery/img_${
      i + 1
    }.jpg`
);

export const servicesData = [
  {
    image:"https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/Modern+Home+Interior.jpeg",
    title: "Living Hall",
    icon: Home,
    description: "Create a stunning living space that reflects your personal style and comfort.",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/Modern+Office+Interior.jpeg",
    title: "Office Interiors",
    icon: Briefcase,
    description: "Professional workspace designs that boost productivity and impress clients.",
  },
  {
    image: "https://realplast.in/fmcg_upload/blog/17072302511144k.png",
    title: "Modern Kitchen",
    icon: ChefHat,
    description: "Functional and elegant kitchen designs that combine beauty with practicality.",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/bathroom.webp",
    title: "Bathrooms",
    icon: Droplets,
    description: "Luxurious bathroom solutions that transform your daily routine into a spa-like experience.",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/wardrobes.webp",
    title: "Wardrobes",
    icon: Shirt,
    description: "Custom storage solutions that maximize space while maintaining aesthetic appeal.",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/kidsroom.webp",
    title: "Kids Rooms",
    icon: Baby,
    description: "Playful and practical spaces that grow with your child and spark imagination.",
  },
]
export const ServicesImage = [
  {
    image: "https://s3-alpha-sig.figma.com/img/64e5/9971/a135495d2ea068875724acc5125a8eff?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zkoh6YFMjQZAWwlnxBSDGqecz~nbW4sTSlN8Kz104wa0w5nJuZEgJDLTl4RrB7C2vma2rKh1cGCFapil3YXIa~Vl0CISH~efIHXBfm3KBxch5~xi67yGKBITfC3aqU9Ge-6B69Pa0GrEYZnz5kaHOirPw67EbVSYZjrewrcHctoqEnUx-m7vYYsHtRep9gN~eWm~uk5bVVNFuiTzFDWHpbCyMXvIJJgjBE1qpTU~78qDjsDNL5a-~F4GHO7SLz1YFH7s-SVcK~lWoiOWtmZdDa-~ASUdRKHmO5aYXQHpcqf-5-PEC4liYZdU5PSByRxpOlW9NZX7xItgKMliA1jXhg__",
    title: "Living Hall",
  }, 
  // "https://homerenot.com/wp-content/uploads/2023/05/shutterstock_498571717.jpg",
  // {
  //   image: "https://megastarproducts.co.za/cdn/shop/collections/Camfly_JSW_Fluted_Slat_Wall_Cladding.jpg",
  //   title: "Office Interiors",
  // },
  // {
  //   image: "https://www.zmartbuild.com/wp-content/uploads/2021/09/shutterstock_95233129-scaled.jpg",
  //   title: "Wardrobes",
  // },
  {
    image: "https://realplast.in/fmcg_upload/blog/17072302511144k.png",
    title: "Modern Kitchen",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/bathroom.webp",
    title: "Bathrooms",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/wardrobes.webp",
    title: "Wardrobes",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/office.webp",
    title: "Office Interiors",
  },
  {
    image: "https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/ServicesImages/kidsroom.webp",
    title: "Kids Rooms",
  },
  
]

const GoogleReviewLink = "https://www.google.com/maps/place/Ecoplast+interiors/@12.7910539,77.6246849,17z/data=!4m8!3m7!1s0x3bae6bfb02b2b54b:0x375054b623a33778!8m2!3d12.7910539!4d77.6246849!9m1!1b1!16s%2Fg%2F11lmnr06z1?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D";

export const Reviews = [
    {
        "id": 1,
        "name": "Arun Prasad",
        "image": "https://randomuser.me/api/portraits/men/32.jpg",
        "review": "We recently got our modular kitchen done, and I must say the quality and finish are excellent. The team was professional and delivered on time. Highly recommend their services!",
        "posted": "3 days ago",
        "link": GoogleReviewLink
    },
    {
        "id": 2,
        "name": "Deepa Nair",
        "image": "https://randomuser.me/api/portraits/women/45.jpg",
        "review": "Absolutely love our new bedroom interiors! The design is modern yet cozy, and they made sure every small detail was perfect. Great work by the team.",
        "posted": "1 week ago",
        "link": GoogleReviewLink
    },
    {
        "id": 3,
        "name": "Santosh Kumar",
        "image": "https://randomuser.me/api/portraits/men/56.jpg",
        "review": "We got office interiors done for our startup, and it has completely transformed the space. The ergonomic design and lighting have improved productivity. Very happy with the outcome!",
        "posted": "5 days ago",
        "link": GoogleReviewLink
    },
    {
        "id": 4,
        "name": "Meghana Reddy",
        "image": "https://randomuser.me/api/portraits/women/33.jpg",
        "review": "I wanted a fun and creative space for my kids, and they delivered exactly that! The vibrant colors and smart storage solutions are perfect. My kids love their new room!",
        "posted": "2 weeks ago",
        "link": GoogleReviewLink
    },
    {
        "id": 5,
        "name": "Venkatesh Iyer",
        "image": "https://randomuser.me/api/portraits/men/48.jpg",
        "review": "The wall panels and loft coverings added a premium touch to our home. The finish is flawless, and the installation was quick and hassle-free.",
        "posted": "4 days ago",
        "link": GoogleReviewLink
    },
    // {
    //     "id": 6,
    //     "name": "Sowmya Rajan",
    //     "image": "https://randomuser.me/api/portraits/women/29.jpg",
    //     "review": "Our bathroom revamp was done beautifully. The digital designs and high-quality materials have made our bathroom look luxurious. Great attention to detail!",
    //     "posted": "1 week ago",
    //     "link": GoogleReviewLink
    // }
]

// export const GalleryImages = [
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
// ];


export const features = [
  {
    title: "Waterproof",
    description:
      "Perfect for any weather condition, ensuring durability and reliability.",
    Icon: CloudRain, // Use the CloudRain icon for waterproofing
  },
  {
    title: "Rustproof",
    description:
      "Resistant to rust, making it ideal for long-term use without corrosion concerns.",
    Icon: Shield, // Use the Shield icon for rustproofing
  },
  {
    title: "Remote Access",
    description:
      "Easily accessible and controllable from anywhere via remote technology.",
    Icon: Wifi, // Use the Wifi icon for remote access
  },
  {
    title: "Cost-Effective",
    description:
      "High-quality at an affordable price, making it accessible to all budgets.",
    Icon: IndianRupee, // Use the DollarSign icon for cost-effectiveness
  },
  {
    title: "20-Year Warranty",
    description:
      "Backed by a 20-year warranty, ensuring peace of mind and confidence in longevity.",
    Icon: Award, // Use the Award icon for the warranty
  },
  {
    title: "5-Year Guarantee",
    description:
      "Comes with a 5-year guarantee, providing assurance of product reliability and support.",
    Icon: CheckCircle, // Use the CheckCircle icon for the guarantee
  },
];
