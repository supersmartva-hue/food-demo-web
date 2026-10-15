import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ADVANTAGES } from '../data/content';

// Heading and CTA on the left. Four benefit cards on the right: a 2x2 grid on smaller screens, a row on desktop.
export function AdvantagesSection() {
  return (
    <View className="w-full bg-forest">
      <View className="w-full max-w-[1200px] flex-col gap-10 self-center px-5 py-14 md:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-20">
        <View className="gap-5 lg:w-[30%]">
          <SectionHeading eyebrow={ADVANTAGES.eyebrow} title={ADVANTAGES.title} tone="light" />
          <Text className="text-sm leading-relaxed text-sage">{ADVANTAGES.description}</Text>
          <View className="flex-row">
            <Button label={ADVANTAGES.cta} variant="light" withArrow />
          </View>
        </View>

        <View className="w-full flex-row flex-wrap gap-3 md:gap-4 lg:flex-1">
          {ADVANTAGES.items.map((item) => (
            <View
              key={item.id}
              className="min-w-0 w-[48%] items-center gap-2 rounded-2xl bg-forest-soft p-4 shadow-sm md:gap-3 md:p-5 lg:w-[23%]"
            >
              <View className="h-10 w-10 items-center justify-center rounded-full bg-sage md:h-12 md:w-12">
                <Ionicons name={item.icon} size={20} color="#6B7452" />
              </View>
              <Text className="text-center font-heading text-sm text-ivory md:text-base">{item.title}</Text>
              <Text className="text-center text-xs leading-relaxed text-sage">{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
