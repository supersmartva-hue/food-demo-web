import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../components/Button';
import { ABOUT } from '../data/content';

// Photo on the left with a small inset and a badge overlapping it. Copy and highlights on the right.
// Image sizes are set with style objects, because size classes on <Image> were not reliably applied.
export function AboutSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const isTablet = width >= 768;

  const mainHeight = isDesktop ? 460 : isTablet ? 400 : 280;
  const insetWidth = isTablet ? 220 : 180;
  const insetHeight = isTablet ? 160 : 130;

  return (
    <View className="w-full overflow-hidden bg-white">
      <View className="w-full max-w-[1200px] flex-col gap-12 self-center px-5 py-14 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <View className="relative w-full min-w-0 lg:w-[52%]">
          <Image
            source={ABOUT.image}
            accessibilityLabel="Overhead bowl of tofu, corn, cucumber and salad"
            resizeMode="cover"
            style={[styles.mainPhoto, { height: mainHeight }]}
          />

          {/* Inset photo overlapping the bottom-left corner of the main photo. */}
          <Image
            source={ABOUT.insetImage}
            accessibilityLabel="Close-up of a quinoa and chickpea bowl with pistachios"
            resizeMode="cover"
            style={[styles.inset, { width: insetWidth, height: insetHeight }]}
          />

          <View className="absolute bottom-8 left-[42%] max-w-[190px] rounded-2xl bg-white px-5 py-4 shadow-sm">
            <Text className="font-heading text-base leading-snug text-forest">{ABOUT.badge}</Text>
          </View>
        </View>

        <View className="relative min-w-0 flex-1 gap-5">
          {/* Decorative leaf line art, behind the copy. */}
          <View accessibilityElementsHidden importantForAccessibility="no" style={styles.leaf} />

          <Text className="text-xs font-semibold uppercase tracking-[2px] text-olive">{ABOUT.eyebrow}</Text>
          <Text className="font-heading text-3xl leading-tight text-forest lg:text-[40px] lg:leading-[1.15]">
            {ABOUT.title}
          </Text>
          <Text className="text-sm leading-relaxed text-muted">{ABOUT.description}</Text>

          <View className="flex-row flex-wrap gap-x-6 gap-y-3">
            {ABOUT.highlights.map((item) => (
              <View key={item.id} className="flex-row items-center gap-2">
                <Ionicons name={item.icon} size={18} color="#6B7452" />
                <Text className="text-xs font-medium text-ink">{item.label}</Text>
              </View>
            ))}
          </View>

          <View className="flex-row">
            <Button label={ABOUT.cta} withArrow />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPhoto: {
    width: '100%',
    borderRadius: 24,
  },
  inset: {
    position: 'absolute',
    left: 16,
    bottom: -24,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  leaf: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 120,
    height: 200,
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 120,
    borderWidth: 1,
    borderColor: '#A8B29A',
    opacity: 0.35,
    transform: [{ rotate: '24deg' }],
  },
});
