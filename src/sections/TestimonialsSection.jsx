import { Pressable, Text, View } from 'react-native';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../data/content';

// Three customer quotes: a row on desktop, two per row on tablet, one per row on mobile.
export function TestimonialsSection() {
  return (
    <View className="w-full bg-white">
      <View className="w-full max-w-[1200px] gap-10 self-center px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <View className="flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={TESTIMONIALS.eyebrow} title={TESTIMONIALS.title} />
          <Pressable accessibilityRole="link" accessibilityLabel={TESTIMONIALS.viewMore} className="active:opacity-70">
            <Text className="text-sm font-semibold text-forest">{TESTIMONIALS.viewMore} →</Text>
          </Pressable>
        </View>

        <View className="flex-row flex-wrap gap-6">
          {TESTIMONIALS.items.map((item) => (
            <View key={item.id} className="w-full md:w-[48%] lg:w-[31%]">
              <TestimonialCard testimonial={item} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
