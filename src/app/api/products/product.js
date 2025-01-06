const products = [
  {
    title: 'Cybertruck',
    description: 'The future of electric trucks is here.',
    imageUrl:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Second-Hero-Desktop.jpg',
    price: '$39,900',
    variants: ['Standard', 'Dual Motor', 'Tri Motor'],
    configurations: ['Long Range', 'Off-road', 'Plaid'],
    colorVariants: {
      black:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Second-Hero-Desktop.jpg',
      blue: 'https://tsportline.com/cdn/shop/articles/022-CT-Matte-Blue-021224_1280x.jpg?v=1708385404',
      red: 'https://www.teslarati.com/wp-content/uploads/2024/03/tesla-cybertruck-satin-crimson-red-wrap.jpg',
    },
  },
  {
    title: 'Model S',
    description: 'The most advanced electric car in the world.',
    imageUrl:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global',
    price: '$89,990',
    variants: ['Standard', 'Performance', 'Plaid'],
    configurations: ['Long Range', 'Autopilot', 'Full Self-Driving'],
    colorVariants: {
      black:
        'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      blue: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      red: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    },
  },
  {
    title: 'Model 3',
    description: 'Innovation in every detail, designed for everyday driving.',
    imageUrl:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Exterior-Hero-Desktop-LHD.jpg',
    price: '$39,990',
    variants: ['Standard Range Plus', 'Long Range', 'Performance'],
    configurations: ['Autopilot', 'Full Self-Driving'],
    colorVariants: {
      black:
        'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PN01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      blue: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PPSB,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      red: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT356,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    },
  },
  {
    title: 'Model Y',
    description:
      'Compact SUV with high-performance capabilities and ample space.',
    imageUrl:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Range-Desktop-LHD-v2.jpg',
    price: '$59,990',
    variants: ['Long Range', 'Performance'],
    configurations: ['All-Wheel Drive', 'Off-road', 'Full Self-Driving'],
    colorVariants: {
      black:
        'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY36,$PN01,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      blue: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY36,$PPSB,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
      red: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY36,$PR01,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&',
    },
  },
];

// Repeat the products array to create a larger dataset
const repeatedProducts = Array(20).fill(products).flat();

// Add id to each product using index + title in kebab-case
const productsWithIds = repeatedProducts.map((product, index) => {
  const id = `${index}`;
  return { ...product, id };
});

// console.log(productsWithIds);

export default productsWithIds;
