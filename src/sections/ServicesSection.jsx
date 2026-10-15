import { Pressable, Text, View } from 'react-native';
import { MealCard } from '../components/MealCard';
import { SectionHeading } from '../components/SectionHeading';
import { SERVICES } from '../data/content';

export function ServicesSection() {
  return (
    <View className="w-full bg-ivory">
      <View className="w-full max-w-[1200px] gap-10 self-center px-5 py-12 md:px-8 lg:px-12 lg:py-20">
        <View className="flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={SERVICES.eyebrow} title={SERVICES.title} />
          <Pressable accessibilityRole="link" accessibilityLabel={SERVICES.viewAll} className="active:opacity-70">
            <Text className="text-sm font-semibold text-forest">{SERVICES.viewAll} →</Text>
          </Pressable>
        </View>

        <View className="flex-row flex-wrap gap-6">
          {SERVICES.items.map((service) => (
            <MealCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              className="w-full md:w-[48%] lg:w-[23%]"
            />
          ))}
        </View>
      </View>
    </View>
  );
}
