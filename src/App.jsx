import '../global.css';
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { AdvantagesSection } from './sections/AdvantagesSection';
import { PricingSection } from './sections/PricingSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';

// The header and hero are visible on load, so they are not wrapped in Reveal.
// Every section below the fold fades in as it scrolls into view.
// Each section's wrapper records its vertical position, so header links can scroll to it.
export default function App() {
  const scrollRef = useRef(null);
  const positions = useRef({});

  const recordPosition = (key) => (event) => {
    positions.current[key] = event.nativeEvent.layout.y;
  };

  const scrollTo = (key) => {
    const y = key === 'top' ? 0 : positions.current[key];
    if (y !== undefined) scrollRef.current?.scrollTo({ y, animated: true });
  };

  return (
    <View className="flex-1 bg-ivory">
      <StatusBar style="dark" />
      <ScrollView ref={scrollRef} className="flex-1" contentContainerClassName="w-full">
        <Header onNavigate={scrollTo} />
        <HeroSection />
        <View onLayout={recordPosition('stats')}>
          <Reveal><StatsSection /></Reveal>
        </View>
        <View onLayout={recordPosition('about')}>
          <Reveal><AboutSection /></Reveal>
        </View>
        <View onLayout={recordPosition('services')}>
          <Reveal><ServicesSection /></Reveal>
        </View>
        <View onLayout={recordPosition('advantages')}>
          <Reveal><AdvantagesSection /></Reveal>
        </View>
        <View onLayout={recordPosition('plans')}>
          <Reveal><PricingSection /></Reveal>
        </View>
        <View onLayout={recordPosition('steps')}>
          <Reveal><HowItWorksSection /></Reveal>
        </View>
        <View onLayout={recordPosition('testimonials')}>
          <Reveal><TestimonialsSection /></Reveal>
        </View>
        <View onLayout={recordPosition('faq')}>
          <Reveal><FAQSection /></Reveal>
        </View>
        <View onLayout={recordPosition('cta')}>
          <Reveal><CTASection /></Reveal>
        </View>
        <View onLayout={recordPosition('contact')}>
          <Reveal><Footer /></Reveal>
        </View>
      </ScrollView>
    </View>
  );
}
