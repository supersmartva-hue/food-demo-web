import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { PricingCard } from '../components/PricingCard';
import { SectionHeading } from '../components/SectionHeading';
import { PLANS } from '../data/content';

// Three plan cards and a photo banner. One row on desktop, two per row on tablet, one per row on mobile.
export function PricingSection() {
  return (
    <View className="w-full bg-white">
      <View className="w-full max-w-[1200px] gap-10 self-center px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <View className="flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={PLANS.eyebrow} title={PLANS.title} />
          <Pressable accessibilityRole="link" accessibilityLabel={PLANS.viewAll} className="active:opacity-70">
            <Text className="text-sm font-semibold text-forest">{PLANS.viewAll} →</Text>
          </Pressable>
        </View>

        <View className="flex-row flex-wrap gap-6">
          {PLANS.items.map((plan) => (
            <View key={plan.id} className="w-full md:w-[48%] lg:w-[23%]">
              <PricingCard plan={plan} />
            </View>
          ))}

          <View className="relative min-h-[360px] w-full overflow-hidden rounded-2xl md:w-[48%] lg:w-[23%]">
            <Image
              source={PLANS.banner.image}
              accessibilityLabel="Plated meal with steak, asparagus and rice"
              resizeMode="cover"
              style={styles.bannerPhoto}
            />
            <View className="absolute inset-0 justify-end bg-forest/60 p-6">
              <Text className="font-heading text-2xl leading-tight text-white">{PLANS.banner.title}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
