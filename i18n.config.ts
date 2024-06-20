export const locales = ["en-gb", "es-es"] as const;
export type Locale = (typeof locales)[number];