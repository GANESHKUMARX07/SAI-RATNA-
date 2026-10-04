import specialBiryaniImg from '../assets/images/ratna_special_biryani_1791064014554.jpg';
import kajuChickenImg from '../assets/images/ratna_kaju_chicken_1791064027115.jpg';
import tandooriKebabImg from '../assets/images/ratna_tandoori_kebab_1791064040161.jpg';
import apricotDelightImg from '../assets/images/ratna_apricot_delight_1791064050303.jpg';
import butterNaanImg from '../assets/images/ratna_butter_naan_1791064061226.jpg';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Biryani' | 'Specials' | 'Tandoor & Breads' | 'Rice & Noodles' | 'Soups' | 'Desserts' | 'Beverages';
  description: string;
  diet: 'veg' | 'non-veg' | 'egg';
  spiceLevel?: 'mild' | 'medium' | 'spicy';
  isSignature?: boolean;
  isBestseller?: boolean;
  chefNote?: string;
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- RATNA SIGNATURES & SPECIALS ---
  {
    id: 'biryani-ratna-special',
    name: 'Ratna Special Chicken Biryani',
    price: 420,
    category: 'Specials',
    description: 'Our crown jewel. Tender chicken cuts marinated in heirloom spice blend, layered with long-grain aged basmati rice and saffron dum, sealed and slow cooked.',
    diet: 'non-veg',
    spiceLevel: 'medium',
    isSignature: true,
    isBestseller: true,
    chefNote: 'Steamed in brass handi with saffron & desi ghee',
    image: specialBiryaniImg
  },
  {
    id: 'main-kaju-chicken',
    name: 'Kaju Chicken Curry',
    price: 450,
    category: 'Specials',
    description: 'Succulent chicken morsels simmered in a velvety roasted cashew nut gravy, slow-infused with whole spices, finished with fresh malai cream and coriander.',
    diet: 'non-veg',
    spiceLevel: 'mild',
    isSignature: true,
    isBestseller: true,
    chefNote: 'Creamy roasted cashew richness',
    image: kajuChickenImg
  },
  {
    id: 'starter-pepper-chicken',
    name: 'Pepper Chicken (Chef Special)',
    price: 380,
    category: 'Specials',
    description: 'Crisp hand-tossed chicken chunks crusted in freshly cracked Malabar black peppercorns, curry leaves, and green chillies in a sizzling wok.',
    diet: 'non-veg',
    spiceLevel: 'spicy',
    isSignature: true,
    chefNote: 'Cracked Tellicherry pepper & curry leaf roast',
    image: tandooriKebabImg
  },
  {
    id: 'dessert-apricot-delight',
    name: 'Ratna Apricot Delight',
    price: 180,
    category: 'Specials',
    description: 'Hyderabad’s celebrated royal delicacy. Slow-stewed dried golden apricots in a fragrant reduction, served chilled over rich handcrafted custard and pistachio slivers.',
    diet: 'veg',
    spiceLevel: 'mild',
    isSignature: true,
    isBestseller: true,
    chefNote: 'Heirloom Hyderabadi family recipe',
    image: apricotDelightImg
  },
  {
    id: 'bread-garlic-butter-naan',
    name: 'Garlic Butter Naan',
    price: 70,
    category: 'Specials',
    description: 'Leavened artisan bread baked on high flame against the clay tandoor walls, brushed generously with churned butter and studded with roasted garlic cloves.',
    diet: 'veg',
    spiceLevel: 'mild',
    isSignature: true,
    chefNote: 'Freshly pulled from clay tandoor',
    image: butterNaanImg
  },

  // --- BIRYANI & RICE ---
  {
    id: 'biryani-chicken-dum',
    name: 'Chicken Dum Biryani',
    price: 394,
    category: 'Biryani',
    description: 'Authentic Hyderabadi kacchi gosht style chicken cooked with fragrant basmati, mint, caramelized onions, and house-ground potli garam masala.',
    diet: 'non-veg',
    spiceLevel: 'medium',
    isBestseller: true,
    chefNote: 'Served with Mirchi ka Salan & Raita'
  },
  {
    id: 'biryani-chicken-fry-piece',
    name: 'Chicken Fry Piece Biryani',
    price: 410,
    category: 'Biryani',
    description: 'Fragrant saffron biryani rice topped with spicy, deep-fried coastal Andhra chicken drumettes and fried curry leaves.',
    diet: 'non-veg',
    spiceLevel: 'spicy',
    chefNote: 'Crisp spicy chicken topping'
  },
  {
    id: 'biryani-mutton-fry',
    name: 'Mutton Fry Biryani',
    price: 480,
    category: 'Biryani',
    description: 'Tender baby goat fry pan-roasted in black pepper and brown onions, paired over steaming hot Hyderabadi saffron biryani rice.',
    diet: 'non-veg',
    spiceLevel: 'spicy',
    isSignature: true,
    chefNote: 'Rich bone-in baby goat'
  },
  {
    id: 'biryani-mutton-dum',
    name: 'Mutton Dum Biryani',
    price: 490,
    category: 'Biryani',
    description: 'Prime cuts of tender mutton slow cooked in its own natural juices on charcoal embers with long grain basmati rice and kewra water.',
    diet: 'non-veg',
    spiceLevel: 'medium',
    chefNote: 'Slow charcoal dum for 4 hours'
  },
  {
    id: 'biryani-chicken-tangdi',
    name: 'Chicken Tangdi Biryani',
    price: 430,
    category: 'Biryani',
    description: 'Succulent tandoori chicken drumsticks roasted in yoghurt marinade, nestled on a bed of aromatic saffron infused dum rice.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'biryani-chicken-tandoori',
    name: 'Chicken Tandoori Biryani',
    price: 440,
    category: 'Biryani',
    description: 'Clay-oven smoked whole leg quarters seasoned with tandoori spices and charred to perfection, served atop layered biryani rice.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'biryani-prawns',
    name: 'Prawns Biryani',
    price: 460,
    category: 'Biryani',
    description: 'Fresh succulent ocean prawns tossed with crushed spices, mint leaves, and steamed basmati rice with a squeeze of lime.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'biryani-paneer',
    name: 'Paneer Biryani',
    price: 350,
    category: 'Biryani',
    description: 'Fresh farmhouse cottage cheese cubes steeped in aromatic marinade and layered with vegetables, mint, and whole spice basmati.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'biryani-kaju',
    name: 'Kaju Biryani',
    price: 380,
    category: 'Biryani',
    description: 'Ghee-roasted whole cashews cooked with aromatic spices, brown shallots, and fragrant aged basmati rice.',
    diet: 'veg',
    spiceLevel: 'mild',
    chefNote: 'Golden whole cashews & saffron'
  },
  {
    id: 'biryani-egg',
    name: 'Egg Biryani',
    price: 310,
    category: 'Biryani',
    description: 'Farm-fresh boiled eggs pan-seared with turmeric and chilli, embedded inside aromatic spiced saffron rice.',
    diet: 'egg',
    spiceLevel: 'medium'
  },
  {
    id: 'biryani-veg',
    name: 'Veg Biryani',
    price: 310,
    category: 'Biryani',
    description: 'Garden fresh vegetables, baby potatoes, green peas, and carrots slow cooked in traditional Hyderabadi dum vessel.',
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: 'rice-veg-pulao',
    name: 'Veg Pulao',
    price: 320,
    category: 'Biryani',
    description: 'Aromatic basmati rice cooked gently with whole spices, cumin seeds, bay leaf, cardamom, and fresh mixed vegetables.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'rice-curd',
    name: 'Curd Rice',
    price: 239,
    category: 'Biryani',
    description: 'Soothing tempered curd rice with mustard seeds, curry leaves, ginger, green chillies, and fresh pomegranate kernels.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'rice-lemon',
    name: 'Lemon Rice',
    price: 269,
    category: 'Biryani',
    description: 'Tangy lemon-infused rice tempered with roasted peanuts, split urad dal, dried red chillies, and aromatic curry leaves.',
    diet: 'veg',
    spiceLevel: 'mild'
  },

  // --- STARTERS ---
  {
    id: 'starter-garlic-chicken',
    name: 'Garlic Chicken',
    price: 380,
    category: 'Starters',
    description: 'Tender chicken cubes stir-fried with generous amounts of minced roasted garlic, spring onions, and light soy seasoning.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-chilli-chicken',
    name: 'Chilli Chicken',
    price: 380,
    category: 'Starters',
    description: 'Classic Indo-Chinese crisp chicken tossed with crunchy bell peppers, diced onions, and spicy red chilli sauce.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'starter-chicken-65',
    name: 'Chicken 65',
    price: 380,
    category: 'Starters',
    description: 'Traditional deep-fried chicken marinated in crushed ginger-garlic, fiery red chillies, curry leaves, and yoghurt.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'starter-tangdi-kebab',
    name: 'Tangdi Kebab (3 pcs)',
    price: 380,
    category: 'Starters',
    description: 'Plump chicken drumsticks steeped in spiced tandoori marinade and charcoal-grilled to tender, smoky perfection.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-chilli-mutton',
    name: 'Chilli Mutton',
    price: 460,
    category: 'Starters',
    description: 'Tender mutton slivers dry-roasted in a fiery spicy onion and pepper reduction with cracked peppercorns.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'starter-apollo-fish',
    name: 'Apollo Fish',
    price: 420,
    category: 'Starters',
    description: 'Hyderabad specialty boneless fish fillets spiced with mustard seeds, curry leaves, green chillies, and yoghurt gravy.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-prawns-65',
    name: 'Prawns 65',
    price: 440,
    category: 'Starters',
    description: 'Crispy batter-fried fresh prawns tossed in zesty red masala, garlic chips, and tempered curry leaves.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'starter-paneer-manchurian',
    name: 'Paneer Manchurian',
    price: 350,
    category: 'Starters',
    description: 'Golden fried fresh paneer cubes tossed in a tangy garlic-coriander Manchurian sauce with spring onion greens.',
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-chilli-paneer',
    name: 'Chilli Paneer',
    price: 350,
    category: 'Starters',
    description: 'Wok-tossed paneer cubes with green capsicum, sliced onions, and crushed red chillies in savoury soya reduction.',
    diet: 'veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'starter-paneer-65',
    name: 'Paneer 65',
    price: 340,
    category: 'Starters',
    description: 'Crispy seasoned cottage cheese cubes tempered with South Indian spices, mustard, and fragrant curry leaves.',
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-egg-manchurian',
    name: 'Egg Manchurian',
    price: 290,
    category: 'Starters',
    description: 'Batter-crisped boiled eggs sauteed with scallions, chopped ginger, and spicy oriental glaze.',
    diet: 'egg',
    spiceLevel: 'medium'
  },
  {
    id: 'starter-egg-65',
    name: 'Egg 65',
    price: 290,
    category: 'Starters',
    description: 'Golden crusted egg halves tossed in spicy red chilli paste, lemon juice, and roasted curry leaves.',
    diet: 'egg',
    spiceLevel: 'spicy'
  },

  // --- MAIN COURSE ---
  {
    id: 'main-butter-chicken',
    name: 'Butter Chicken',
    price: 390,
    category: 'Main Course',
    description: 'Tender tandoor-roasted chicken pieces cooked in a silky, sweet and savory tomato-butter gravy scented with dried fenugreek leaves (kasuri methi).',
    diet: 'non-veg',
    spiceLevel: 'mild',
    isBestseller: true
  },
  {
    id: 'main-chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    price: 410,
    category: 'Main Course',
    description: 'Smoky grilled chicken tikka folded into a rich, spiced onion-tomato gravy with diced bell peppers and fresh cream.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'main-afghani-chicken',
    name: 'Afghani Chicken',
    price: 420,
    category: 'Main Course',
    description: 'Mild and royal chicken preparation enriched with ground cashews, poppy seeds, fresh cream, and subtle cardamom aromatics.',
    diet: 'non-veg',
    spiceLevel: 'mild'
  },
  {
    id: 'main-punjabi-chicken',
    name: 'Punjabi Chicken',
    price: 390,
    category: 'Main Course',
    description: 'Homestyle North Indian chicken curry cooked with coarse onion masala, green chillies, and freshly roasted coriander seeds.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'main-kadai-chicken',
    name: 'Kadhai Chicken',
    price: 390,
    category: 'Main Course',
    description: 'Chicken simmered in cast iron kadhai with chunky bell peppers, crushed whole coriander, and dried red chilli masala.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'main-tomato-kaju',
    name: 'Tomato Kaju Curry',
    price: 340,
    category: 'Main Course',
    description: 'Whole roasted cashew nuts gently simmered in a luscious sweet-tangy vine-ripened tomato gravy with a hint of cream.',
    diet: 'veg',
    spiceLevel: 'mild',
    chefNote: 'Rich whole cashew nuts & vine tomatoes'
  },
  {
    id: 'main-paneer-butter-masala',
    name: 'Paneer Butter Masala',
    price: 350,
    category: 'Main Course',
    description: 'Soft cubes of paneer cooked in a rich, buttery tomato gravy scented with kasuri methi, butter, and warm spices.',
    diet: 'veg',
    spiceLevel: 'mild',
    isBestseller: true
  },
  {
    id: 'main-paneer-kaju-masala',
    name: 'Paneer Kaju Masala',
    price: 380,
    category: 'Main Course',
    description: 'Harmonious blend of fresh cottage cheese cubes and whole roasted cashews in a thick aromatic onion-cashew sauce.',
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: 'main-kadai-paneer',
    name: 'Kadai Paneer',
    price: 340,
    category: 'Main Course',
    description: 'Cottage cheese cubes stir-fried with crunchy capsicum, onion petals, and freshly pounded kadai spices in thick gravy.',
    diet: 'veg',
    spiceLevel: 'spicy'
  },

  // --- TANDOOR & BREADS ---
  {
    id: 'bread-plain-phulka',
    name: 'Plain Phulka (2 pcs)',
    price: 25,
    category: 'Tandoor & Breads',
    description: 'Thin, whole wheat puffed rotis cooked over open flame with zero oil.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-paneer-kulcha',
    name: 'Paneer Kulcha',
    price: 70,
    category: 'Tandoor & Breads',
    description: 'Clay-oven baked bread stuffed with spiced shredded cottage cheese and fresh herbs.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-gobhi-kulcha',
    name: 'Gobhi Kulcha',
    price: 65,
    category: 'Tandoor & Breads',
    description: 'Crispy leavened bread stuffed with grated cauliflower, carom seeds (ajwain), and coriander.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-methi-roti',
    name: 'Methi Roti',
    price: 35,
    category: 'Tandoor & Breads',
    description: 'Wholesome tandoori roti flavored with fresh aromatic fenugreek leaves.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-pudina-roti',
    name: 'Pudina Roti',
    price: 40,
    category: 'Tandoor & Breads',
    description: 'Layered whole wheat roti dusted with crushed dried mint and roasted cumin.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-butter-naan',
    name: 'Butter Naan',
    price: 60,
    category: 'Tandoor & Breads',
    description: 'Traditional teardrop clay oven flatbread basted with churned white butter.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-plain-naan',
    name: 'Plain Naan',
    price: 50,
    category: 'Tandoor & Breads',
    description: 'Soft leavened flatbread freshly slapped on inner clay tandoor walls.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bread-tandoori-roti',
    name: 'Tandoori Roti',
    price: 30,
    category: 'Tandoor & Breads',
    description: 'Whole wheat round bread baked in high heat clay tandoor.',
    diet: 'veg',
    spiceLevel: 'mild'
  },

  // --- RICE & NOODLES ---
  {
    id: 'noodle-chicken-fried-rice',
    name: 'Chicken Fried Rice',
    price: 290,
    category: 'Rice & Noodles',
    description: 'Wok-tossed steamed rice with tender chicken shreds, scrambled eggs, and diced vegetables.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'noodle-singapore-chicken',
    name: 'Singapoor Noodles Chicken',
    price: 310,
    category: 'Rice & Noodles',
    description: 'Thin yellow vermicelli noodles wok-charred with chicken, curry powder seasoning, and crunchy vegetables.',
    diet: 'non-veg',
    spiceLevel: 'medium'
  },
  {
    id: 'noodle-veg-fried-rice',
    name: 'Veg Fried Rice',
    price: 250,
    category: 'Rice & Noodles',
    description: 'Long grain rice tossed with finely shredded cabbage, french beans, carrots, and white pepper in a smokey wok.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'noodle-paneer-fried-rice',
    name: 'Paneer Fried Rice',
    price: 280,
    category: 'Rice & Noodles',
    description: 'Wok-tossed basmati rice studded with golden fried cottage cheese cubes and fresh vegetables.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'noodle-veg-soft-noodles',
    name: 'Veg Soft Noodles',
    price: 240,
    category: 'Rice & Noodles',
    description: 'Classic Hakka-style soft noodles tossed with crisp julienned vegetables and light soy sauce.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'noodle-chilli-chicken-noodles',
    name: 'Chilly Chicken Noodles',
    price: 310,
    category: 'Rice & Noodles',
    description: 'Spicy wok-tossed noodles with shredded chicken, fiery red chilli oil, and scallions.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },

  // --- SOUPS ---
  {
    id: 'soup-veg-corn',
    name: 'Veg Sweet Corn Soup',
    price: 160,
    category: 'Soups',
    description: 'Comforting creamy sweet corn soup simmered with finely diced seasonal vegetables and light pepper.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'soup-chicken-manchow',
    name: 'Chicken Manchow Soup',
    price: 190,
    category: 'Soups',
    description: 'Hot and spicy dark broth with chicken, chopped garlic, ginger, and green chillies, topped with crispy fried noodles.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: 'soup-chicken-hot-sour',
    name: 'Chicken Hot & Sour Soup',
    price: 190,
    category: 'Soups',
    description: 'Tangy and fiery pepper broth loaded with chicken strips, mushrooms, bamboo shoots, and whisked egg drop.',
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },

  // --- DESSERTS ---
  {
    id: 'dessert-double-ka-meetha',
    name: 'Double Ka Meetha',
    price: 160,
    category: 'Desserts',
    description: 'Traditional Hyderabadi dessert of crisp golden fried bread slices soaked in saffron-infused sweetened rabri with roasted dry fruits.',
    diet: 'veg',
    spiceLevel: 'mild',
    chefNote: 'Authentic Hyderabadi classic'
  },
  {
    id: 'dessert-gulab-jamun',
    name: 'Gulab Jamun (2 pcs)',
    price: 120,
    category: 'Desserts',
    description: 'Soft melt-in-mouth milk mawa dumplings soaked in warm rose and green cardamom flavored sugar syrup.',
    diet: 'veg',
    spiceLevel: 'mild'
  },

  // --- BEVERAGES ---
  {
    id: 'bev-sweet-lassi',
    name: 'Sweet Lassi',
    price: 90,
    category: 'Beverages',
    description: 'Thick, creamy churned sweet yoghurt flavored with rosewater and a hint of green cardamom.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bev-salt-lassi',
    name: 'Salt Lassi',
    price: 90,
    category: 'Beverages',
    description: 'Refreshing churned yoghurt drink lightly salted with roasted cumin seeds.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bev-masala-butter-milk',
    name: 'Masala Butter Milk',
    price: 70,
    category: 'Beverages',
    description: 'Cooling spiced chaas tempered with ginger, green chillies, fresh coriander, and roasted cumin.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bev-watermelon-juice',
    name: 'Watermelon Juice',
    price: 110,
    category: 'Beverages',
    description: 'Freshly pressed sweet watermelon juice served chilled over ice.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bev-pineapple-juice',
    name: 'Pineapple Juice',
    price: 110,
    category: 'Beverages',
    description: 'Cold-pressed tropical pineapple juice with a hint of black salt and mint.',
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: 'bev-pista-milkshake',
    name: 'Pista Milkshake',
    price: 140,
    category: 'Beverages',
    description: 'Rich chilled creamy milk blended with roasted Iranian pistachios and saffron essence.',
    diet: 'veg',
    spiceLevel: 'mild'
  }
];

export const CATEGORIES = [
  'All',
  'Starters',
  'Main Course',
  'Biryani',
  'Specials',
  'Tandoor & Breads',
  'Rice & Noodles',
  'Soups',
  'Desserts',
  'Beverages'
] as const;

export type CategoryType = typeof CATEGORIES[number];
