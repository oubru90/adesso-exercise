import { cookies } from 'next/headers'
import 'server-only'

type locales = 'en' | 'it';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  it: () => import('../dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async () => {
  const locale: locales = cookies().get("lang")?.value as locales || 'en';
  return dictionaries[locale]()
}
