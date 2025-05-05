'use client';

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 if (!mounted) return null;

 const themes = [
  'theme-0',
  'theme-1',
  'theme-2',
  'theme-3',
  'theme-4',
  'theme-5',
  'theme-6',
  'theme-7',
 ];

 return (
  <Select
   value={theme}
   onValueChange={(value) => setTheme(value)}
  >
   <SelectTrigger className="w-48 bg-background text-foreground">
    <SelectValue placeholder="Selecione o tema" />
   </SelectTrigger>
   <SelectContent>
    {themes.map((t) => (
     <SelectItem key={t} value={t}>
      {t.replace("theme-", "Tema ")}
     </SelectItem>
    ))}
   </SelectContent>
  </Select>
 );
}
