import { Text, View, useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { STEPS } from '../data/content';

// Three numbered steps with arrows between them on desktop, stacked on smaller screens.
export function HowItWorksSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <View className="w-full bg-ivory">
      <View className="w-full max-w-[1200px] gap-10 self-center px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <View className="flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={STEPS.eyebrow} title={STEPS.title} />
          <View className="flex-row">
            <Button label={STEPS.cta} variant="outline" withArrow />
          </View>
        </View>

        <View className="flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-4">
          {STEPS.items.map((step, index) => (
            <View key={step.id} className="flex-row items-stretch gap-4 lg:flex-1">
              <View className="flex-1 gap-3 rounded-2xl bg-white p-6 shadow-sm">
                <View className="flex-row items-center gap-3">
                  <View className="h-10 w-10 items-center justify-center rounded-full bg-sage">
                    <Text className="font-heading text-lg text-forest">{index + 1}</Text>
                  </View>
                  <Ionicons name={step.icon} size={22} color="#6B7452" />
                </View>
                <Text className="font-heading text-base text-forest">{step.title}</Text>
                <Text className="text-xs leading-relaxed text-muted">{step.description}</Text>
              </View>
              {isDesktop && index < STEPS.items.length - 1 && (
                <View className="items-center justify-center">
                  <Text className="text-xl text-olive">→</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
