import { useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from './Button';
import { Logo } from './Logo';
import { NAV_LINKS, NAV_TARGETS } from '../data/content';

// Slim bar matching the reference. Desktop shows the links in a row; below 1024px they collapse into a menu.
// Each link calls onNavigate with its section key, and the page scrolls to that section.
export function Header({ onNavigate }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (link) => {
    setMenuOpen(false);
    const target = NAV_TARGETS[link];
    if (target) onNavigate(target);
  };

  return (
    <View className="w-full border-b border-line bg-white">
      <View className="w-full max-w-[1200px] flex-row items-center justify-between self-center px-5 py-3 md:px-8 lg:px-12">
        <Logo />

        {isDesktop && (
          <View className="flex-row items-center gap-7">
            {NAV_LINKS.map((link, index) => (
              <Pressable
                key={link}
                accessibilityRole="link"
                accessibilityLabel={link}
                onPress={() => navigate(link)}
                className="active:opacity-70"
              >
                <Text className={`text-[13px] ${index === 0 ? 'font-semibold text-olive' : 'text-ink'}`}>
                  {link}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        <View className="flex-row items-center gap-3">
          {isDesktop ? (
            <Button label="Get Started" withArrow onPress={() => onNavigate('plans')} />
          ) : (
            <Pressable
              onPress={() => setMenuOpen((open) => !open)}
              accessibilityRole="button"
              accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}
              accessibilityState={{ expanded: menuOpen }}
              className="h-10 w-10 items-center justify-center rounded-full border border-line active:opacity-70"
            >
              <Ionicons name={menuOpen ? 'close' : 'menu'} size={20} color="#1F3B2C" />
            </Pressable>
          )}
        </View>
      </View>

      {!isDesktop && menuOpen && (
        <View className="border-t border-line bg-white px-5 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Pressable
              key={link}
              accessibilityRole="link"
              accessibilityLabel={link}
              onPress={() => navigate(link)}
              className="border-b border-line py-3 active:opacity-70"
            >
              <Text className="text-base text-ink">{link}</Text>
            </Pressable>
          ))}
          <Button label="Get Started" withArrow className="mt-4 w-full" onPress={() => navigate('Growth Plans')} />
        </View>
      )}
    </View>
  );
}
