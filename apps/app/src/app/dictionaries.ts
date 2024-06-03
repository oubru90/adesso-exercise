import { getUserLanguage } from '@adesso-exercise/commons';

type locales = 'en' | 'it';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  it: () => import('../dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async () => {
  const locale = await getUserLanguage() as locales;
  return dictionaries[locale]()
}
