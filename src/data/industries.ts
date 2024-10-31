import { 
  faMoneyBillWave as Banknote,  // Correct icon for banknote
  faGraduationCap as GraduationCap,
  faCloud,
  faBox as Package,              // Using 'faBox' as an alternative for 'Package'
  faPlane,
  faUtensils,
  faBuilding as Building2,
  faLeaf,
  faGamepad as Gamepad2,
  faCar,
  faRocket,
  faFlask as FlaskConical,
  faChartBar as BarChart,
  faTruck,
  faDesktop as Cpu,
} from '@fortawesome/free-solid-svg-icons';

const industries = [
  {
      icon: Banknote,
      title: 'Health Tech',
      description: 'Advancing healthcare through groundbreaking medical devices and telehealth solutions.'
  },
  {
      icon: Banknote,
      title: 'Fintech',
      description: 'Redefining financial services with innovative payment solutions and platforms.'
  },
  {
      icon: GraduationCap,
      title: 'Edtech',
      description: 'Leading the future of education with dynamic online learning tools.'
  },
  {
      icon: faCloud,
      title: 'SaaS',
      description: 'Delivering high-value subscription-based software services with superior performance.'
  },
  {
      icon: Package, // Changed to faBox for package
      title: 'Consumer Goods',
      description: 'Offering high-quality products designed to enhance everyday life.'
  },
  {
      icon: faPlane,
      title: 'Travel & Hospitality',
      description: 'Transforming travel with premium services and innovative booking platforms.'
  },
  {
      icon: faUtensils,
      title: 'Food & Beverage',
      description: 'Leading the industry with top-tier restaurants and gourmet products.'
  },
  {
      icon: Building2,
      title: 'Real Estate Tech',
      description: 'Innovating property management with advanced technology.'
  },
  {
      icon: faLeaf,
      title: 'Clean Tech',
      description: 'Pioneering renewable energy solutions for a sustainable future.'
  },
  {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Crafting immersive gaming experiences with unrivaled creativity.'
  },
  {
      icon: faCar,
      title: 'Automotive',
      description: 'Innovating vehicle design with advanced technologies.'
  },
  {
      icon: faRocket,
      title: 'Aerospace',
      description: 'Pushing the boundaries of aviation and space exploration.'
  },
  {
      icon: FlaskConical,
      title: 'Biotech',
      description: 'Advancing life sciences through innovative research and development.'
  },
  {
      icon: BarChart,
      title: 'Martech',
      description: 'Enhancing marketing strategies with advanced analytics.'
  },
  {
      icon: faTruck,
      title: 'Supply Chain',
      description: 'Streamlining logistics and distribution with cutting-edge solutions.'
  },
  {
      icon: Cpu,
      title: 'Robotics',
      description: 'Innovating automation technology for diverse applications.'
  }
];

export default industries; // Don't forget to export your array if needed elsewhere
