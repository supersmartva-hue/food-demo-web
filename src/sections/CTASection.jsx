import { Pressable, Text, View } from 'react-native';
import { CTA } from '../data/content';

// Full-width muted-green call to action. It sits between the FAQ and the forest footer,
// so the footer stays visually separate.
export function CTASection() {
  return (
    <View className="w-full bg-sage">
      <View className="w-full max-w-[1200px] flex-col gap-8 self-center px-5 py-14 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16">
        <View className="gap-3 lg:flex-1">
          <Text className="text-xs font-semibold uppercase tracking-[2px] text-forest">{CTA.eyebrow}</Text>
          <Text className="font-heading text-3xl leading-tight text-forest lg:text-4xl">{CTA.title}</Text>
          <Text className="text-sm text-forest">{CTA.description}</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={CTA.cta}
          className="flex-row items-center justify-center self-start rounded-full bg-forest px-7 py-3 active:opacity-80 lg:self-auto"
        >
          <Text className="text-sm font-semibold text-ivory">{CTA.cta} →</Text>
        </Pressable>
      </View>
    </View>
  );
}
