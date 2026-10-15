import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { FAQItem } from '../components/FAQItem';
import { SectionHeading } from '../components/SectionHeading';
import { FAQS } from '../data/content';

// Heading and button on the left, accordion on the right. Only one answer is open at a time.
export function FAQSection() {
  const [openId, setOpenId] = useState(FAQS.items[0].id);

  return (
    <View className="w-full bg-ivory">
      <View className="w-full max-w-[1200px] flex-col gap-10 self-center px-5 py-14 md:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-12 lg:py-20">
        <View className="gap-5 lg:w-[40%]">
          <SectionHeading eyebrow={FAQS.eyebrow} title={FAQS.title} />
          <Text className="text-sm leading-relaxed text-muted">{FAQS.description}</Text>
          <View className="flex-row">
            <Button label={FAQS.cta} withArrow />
          </View>
        </View>

        <View className="w-full gap-3 lg:flex-1">
          {FAQS.items.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
