import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { HERO, HERO_FEATURES } from '../data/content';

// Text sits on the left. The photo runs to the right edge on desktop and stacks below the text on mobile.
export function HeroSection() {
  return (
    <View className="w-full overflow-hidden bg-ivory">
      <View className="flex-col lg:flex-row lg:items-stretch">
        <View className="w-full gap-6 px-5 py-12 md:px-8 lg:w-[48%] lg:justify-center lg:py-20 lg:pl-12 lg:pr-10">
          <View>
            <Reveal>
              <Text className="font-heading text-5xl leading-[1.05] text-forest md:text-6xl">Healthy Meals</Text>
            </Reveal>
            <Reveal delay={180}>
              <Text className="font-heading text-5xl leading-[1.05] text-gold md:text-6xl">Happier Lives</Text>
            </Reveal>
          </View>

          <Text className="text-lg text-ink">Fresh. Nutritious. Convenient. Delivered to You.</Text>
          <Text className="max-w-[460px] text-sm leading-relaxed text-muted">
            At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a
            commitment to your wellness goals.
          </Text>

          <View className="flex-row flex-wrap gap-3">
            <Button label="Explore Meal Plans" withArrow />
            <Button label="Learn More" variant="outline" />
          </View>

          <View className="flex-row flex-wrap gap-x-6 gap-y-3">
            {HERO_FEATURES.map((feature) => (
              <View key={feature.id} className="flex-row items-center gap-2">
                <Ionicons name={feature.icon} size={16} color="#6B7452" />
                <Text className="text-xs text-muted">{feature.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Explicit heights per breakpoint: the photo is absolutely positioned, so its container needs a fixed height. */}
        <View className="relative h-[320px] w-full overflow-hidden bg-sage sm:h-[380px] md:h-[460px] lg:h-[560px] lg:w-[52%]">
          <Image
            source={HERO.image}
            accessibilityLabel="Overhead bowl of fresh vegetables, avocado and chickpeas"
            resizeMode="cover"
            style={styles.photo}
          />

          {/* Handwritten note with a hand-drawn arrow, as in the reference. */}
          <View className="absolute left-6 top-6 max-w-[200px] -rotate-6 rounded-xl bg-white/80 px-3 py-2 md:left-10 md:top-10">
            <Text className="font-script text-xl leading-6 text-olive">{HERO.note}</Text>
          </View>

          <View className="absolute bottom-6 right-6 max-w-[220px] rounded-2xl bg-white px-5 py-4 shadow-sm">
            <Text className="font-heading text-base text-forest">{HERO.badge.title}</Text>
            <Text className="text-xs text-muted">{HERO.badge.subtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
