import { Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Logo } from './Logo';
import { FOOTER, NAV_LINKS, SERVICES } from '../data/content';

// Dark footer with forest, quick links, services, and contact columns.
// Columns stack on mobile, two per row on tablet, and four across on desktop.
export function Footer() {
  return (
    <View className="w-full bg-forest">
      <View className="w-full max-w-[1200px] gap-10 self-center px-5 pb-8 pt-14 md:px-8 lg:px-12">
        <View className="flex-col gap-10 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-12">
          <View className="gap-4 md:w-full lg:w-[30%]">
            <Logo tone="light" />
            <Text className="text-xs leading-relaxed text-sage">{FOOTER.description}</Text>
            <View className="flex-row gap-3">
              {FOOTER.social.map((item) => (
                <Pressable
                  key={item.id}
                  accessibilityRole="link"
                  accessibilityLabel={item.label}
                  className="h-9 w-9 items-center justify-center rounded-full border border-sage active:opacity-70"
                >
                  <Ionicons name={item.icon} size={16} color="#F5F0E6" />
                </Pressable>
              ))}
            </View>
          </View>

          <View className="w-[48%] gap-3 md:w-[22%] lg:flex-1">
            <Text className="text-sm font-semibold text-ivory">Quick Links</Text>
            {NAV_LINKS.map((link) => (
              <Pressable key={link} accessibilityRole="link" accessibilityLabel={link} className="active:opacity-70">
                <Text className="text-xs text-sage">{link}</Text>
              </Pressable>
            ))}
          </View>

          <View className="w-[48%] gap-3 md:w-[22%] lg:flex-1">
            <Text className="text-sm font-semibold text-ivory">Our Services</Text>
            {SERVICES.items.map((service) => (
              <Text key={service.id} className="text-xs text-sage">
                {service.title}
              </Text>
            ))}
          </View>

          <View className="w-full gap-3 md:w-[44%] lg:flex-1">
            <Text className="text-sm font-semibold text-ivory">Get In Touch</Text>
            {FOOTER.contact.map((item) => (
              <View key={item.id} className="flex-row items-center gap-2">
                <Ionicons name={item.icon} size={14} color="#E2DACB" />
                <Text className="text-xs text-sage">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="flex-col gap-3 border-t border-sage/30 pt-6 md:flex-row md:items-center md:justify-between">
          <Text className="text-xs text-sage">{FOOTER.copyright}</Text>
          <View className="flex-row gap-5">
            {FOOTER.legal.map((item) => (
              <Pressable key={item} accessibilityRole="link" accessibilityLabel={item} className="active:opacity-70">
                <Text className="text-xs text-sage">{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
