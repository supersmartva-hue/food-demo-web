// All landing page copy, image sources and repeated content live here, so sections stay presentational.

export const NAV_LINKS = [
  'Home',
  'About Us',
  'Our Services',
  'Advantages',
  'Growth Plans',
  'Blogs',
  'Contact Us',
];


export const HERO = {
  image: require('../../assets/images/hero.jpg'),
  note: 'Good Food\nBrightens You',
  badge: { title: 'Nutritious Meals', subtitle: 'A Healthier Tomorrow' },
};

export const HERO_FEATURES = [
  { id: 'fresh', label: 'Fresh Ingredients', icon: 'leaf' },
  { id: 'nutritionist', label: 'Nutritionist Approved', icon: 'medkit' },
  { id: 'delivery', label: 'Delivered to Your Door', icon: 'car' },
];

export const STATS = [
  { id: 'meals', value: '1M+', label: 'Meals Delivered', icon: 'leaf' },
  { id: 'customers', value: '30K+', label: 'Happy Customers', icon: 'people' },
  { id: 'satisfaction', value: '4.8/5', label: 'Customer Satisfaction', icon: 'star' },
  { id: 'clients', value: '550+', label: 'Corporate Clients', icon: 'business' },
];

export const ABOUT = {
  eyebrow: 'About Healthify',
  title: 'Your Trusted Healthy Food Partner',
  description:
    'At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.',
  image: require('../../assets/images/about.jpg'),
  insetImage: require('../../assets/images/about-inset.jpg'),
  highlights: [
    { id: 'prepared', label: 'Freshly Prepared Daily', icon: 'leaf' },
    { id: 'balanced', label: 'Balanced Nutrition', icon: 'nutrition' },
    { id: 'taste', label: 'Great Taste', icon: 'restaurant' },
  ],
  badge: 'Nourishing Lives Daily',
  cta: 'More About Us',
};

export const SERVICES = {
  eyebrow: 'Our Services',
  title: 'Healthy Meal Plans for Every Lifestyle',
  viewAll: 'View All Services',
  items: [
    {
      id: 'ready-to-eat',
      title: 'Healthy Ready-To-Eat Meals',
      description: 'Fresh, balanced meals prepared daily and ready to enjoy.',
      image: require('../../assets/images/service-ready.jpg'),
    },
    {
      id: 'customized',
      title: 'Customized Meal Plans',
      description: 'Personalized nutrition plans designed for your goals.',
      image: require('../../assets/images/service-customized.jpg'),
    },
    {
      id: 'weight-management',
      title: 'Weight Management Plans',
      description: 'Delicious meals to support your weight loss or maintenance journey.',
      image: require('../../assets/images/service-weight.jpg'),
    },
    {
      id: 'high-protein',
      title: 'High-Protein Meal Plans',
      description: 'Nutrient-rich meals for active lifestyles and fitness goals.',
      image: require('../../assets/images/service-protein.jpg'),
    },
  ],
};

export const ADVANTAGES = {
  eyebrow: 'Our Advantages',
  title: 'Why Choose Healthify',
  description: 'More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.',
  cta: 'Discover All Advantages',
  items: [
    { id: 'quality', icon: 'diamond-outline', title: 'Premium Quality', description: 'High-quality, fresh ingredients' },
    { id: 'health', icon: 'heart-outline', title: 'Health Focused', description: 'Nutritionist-designed meals' },
    { id: 'delivery', icon: 'car', title: 'Convenient Delivery', description: 'To your home or office' },
    { id: 'flexible', icon: 'leaf', title: 'Flexible Plans', description: 'Options for every dietary need' },
  ],
};

export const PLANS = {
  eyebrow: 'Growth Plans',
  title: 'Find the Perfect Plan for You',
  viewAll: 'View All Plans',
  banner: {
    title: 'Invest in a Healthier You',
    image: require('../../assets/images/service-protein.jpg'),
  },
  items: [
    {
      id: 'essential',
      icon: 'leaf',
      name: 'Essential Plan',
      description: 'Great for individuals starting their healthy journey.',
      price: 'AED 299',
      features: ['Fresh daily meals', 'Balanced nutrition', 'Flexible delivery'],
      popular: false,
    },
    {
      id: 'balanced',
      icon: 'ribbon-outline',
      name: 'Balanced Plan',
      description: 'Our best value plan for a healthier lifestyle.',
      price: 'AED 499',
      features: ['Customized meal options', 'Wide variety of meals', 'Nutritionist support', 'Flexible delivery'],
      popular: true,
    },
    {
      id: 'performance',
      icon: 'barbell-outline',
      name: 'Performance Plan',
      description: 'For fitness enthusiasts and active lifestyles.',
      price: 'AED 699',
      features: ['High-protein meals', 'Performance-focused nutrition', 'Personalized plans', 'Priority support'],
      popular: false,
    },
  ],
};

export const STEPS = {
  eyebrow: 'How It Works',
  title: 'Healthy Eating in 3 Simple Steps',
  cta: "It's Easy to Get Started",
  items: [
    { id: 'choose', icon: 'list', title: 'Choose Your Plan', description: 'Select the meal plan that fits your goals.' },
    { id: 'prepare', icon: 'restaurant', title: 'We Prepare Fresh Meals', description: 'Our chefs prepare nutritious meals with care.' },
    { id: 'deliver', icon: 'car', title: 'Enjoy Convenient Delivery', description: 'Receive your meals and enjoy a healthier lifestyle.' },
  ],
};

export const TESTIMONIALS = {
  eyebrow: 'Customer Stories',
  title: 'What Our Customers Say',
  viewMore: 'View More Reviews',
  items: [
    {
      id: 'sara',
      quote: 'Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!',
      name: 'Sara M.',
      location: 'Dubai, UAE',
      initials: 'SM',
    },
    {
      id: 'ahmed',
      quote: 'Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.',
      name: 'Ahmed R.',
      location: 'Dubai, UAE',
      initials: 'AR',
    },
    {
      id: 'fatima',
      quote: 'Great quality, variety, and service. I feel healthier and more energized every day.',
      name: 'Fatima A.',
      location: 'Dubai, UAE',
      initials: 'FA',
    },
  ],
};

export const FAQS = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Have Questions? We’ve Got Answers.',
  description: 'Find quick answers to common questions about our meal plans, delivery, and more.',
  cta: 'View All FAQs',
  items: [
    {
      id: 'plans',
      question: 'What are your meal plans?',
      answer:
        'We offer Essential, Balanced, and Performance plans. Every plan includes chef-prepared meals designed around balanced nutrition.',
    },
    {
      id: 'delivery',
      question: 'How does delivery work?',
      answer:
        'Meals are prepared fresh and delivered to your home or office on the schedule you choose.',
    },
    {
      id: 'customize',
      question: 'Can I customize my meals?',
      answer:
        'Yes. The Balanced and Performance plans include customized meal options to match your goals.',
    },
    {
      id: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'Payment options are shown at checkout before you confirm your plan.',
    },
    {
      id: 'app',
      question: 'Do you have a mobile app?',
      answer: 'Not yet. You can order and manage your plan from the website on any device.',
    },
  ],
};

export const CTA = {
  eyebrow: 'Ready to Start?',
  title: 'Transform Your Health, One Meal At A Time',
  description: 'Fresh. Nutritious. Convenient. Join thousands of happy customers today.',
  cta: 'Get Started Today',
};

export const FOOTER = {
  description:
    'At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals.',
  contact: [
    { id: 'address', icon: 'location-outline', label: 'Dubai, UAE' },
    { id: 'phone', icon: 'call-outline', label: '+971 50 262 6144' },
    { id: 'email', icon: 'mail-outline', label: 'info@healthify.ae' },
  ],
  social: [
    { id: 'facebook', icon: 'logo-facebook', label: 'Facebook' },
    { id: 'twitter', icon: 'logo-twitter', label: 'Twitter' },
    { id: 'instagram', icon: 'logo-instagram', label: 'Instagram' },
    { id: 'youtube', icon: 'logo-youtube', label: 'YouTube' },
  ],
  legal: ['Privacy Policy', 'Terms of Service'],
  copyright: '© 2026 Healthify. All Rights Reserved.',
};

// Header link label -> key of the section it scrolls to. Null means there is no matching section yet.
export const NAV_TARGETS = {
  Home: 'top',
  'About Us': 'about',
  'Our Services': 'services',
  Advantages: 'advantages',
  'Growth Plans': 'plans',
  Blogs: null,
  'Contact Us': 'contact',
};
