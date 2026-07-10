import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const lang = locale || "fr";
  try {
    return {
      locale: lang,
      messages: (await import(`./messages/${lang}/common.json`)).default,
    };
  } catch {
    return {
      locale: "fr",
      messages: (await import(`./messages/fr/common.json`)).default,
    };
  }
});
