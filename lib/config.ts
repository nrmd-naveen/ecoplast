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

export const Services = [...Array(4).keys()].map((i) => ({
  src: `https://ecoplastinteriors.s3.eu-north-1.amazonaws.com/gallery/img_${
    i + 1
  }.jpg`,
  alt: `image${i}`,
}));

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

export const features: FeatureProps[] = [
  {
    title: "Waterproof",
    description:
      "Perfect for any weather condition, ensuring durability and reliability.",
  },
  {
    title: "Rustproof",
    description:
      "Resistant to rust, making it ideal for long-term use without corrosion concerns.",
  },
  {
    title: "Remote Access",
    description:
      "Easily accessible and controllable from anywhere via remote technology.",
  },
  {
    title: "Cost-Effective",
    description:
      "High-quality at an affordable price, making it accessible to all budgets.",
  },
  {
    title: "20-Year Warranty",
    description:
      "Backed by a 20-year warranty, ensuring peace of mind and confidence in longevity.",
  },
  {
    title: "5-Year Guarantee",
    description:
      "Comes with a 5-year guarantee, providing assurance of product reliability and support.",
  },
];
