import images from "../../data/images";
import { generateImageMeta } from "../../utils/imageMetaGenerator";

// Generate image metadata for OpenGraph and Twitter
const imageMeta = generateImageMeta(
  images, 
  "Portfolio Fotograficzne", 
  "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/portfolio"
);

export const metadata = {
  title: "Portfolio Fotograficzne | Wybrane Realizacje",
  description: "Odkryj moje portfolio fotograficzne - sesje portretowe, zdjęcia modowe, fotografia ślubna i biznesowa. Każde zdjęcie opowiada wyjątkową historię.",
  keywords: ["portfolio fotograficzne", "zdjęcia portretowe", "fotografia modowa", "sesje zdjęciowe", "galeria fotografii"],
  openGraph: {
    title: "Portfolio Fotograficzne | Wybrane Realizacje",
    description: "Odkryj moje portfolio fotograficzne - sesje portretowe, zdjęcia modowe, fotografia ślubna i biznesowa. Każde zdjęcie opowiada wyjątkową historię.",
    url: "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/portfolio",
    ...imageMeta.openGraph
  },
  twitter: {
    title: "Portfolio Fotograficzne | Wybrane Realizacje",
    description: "Odkryj moje portfolio fotograficzne - sesje portretowe, zdjęcia modowe, fotografia ślubna i biznesowa. Każde zdjęcie opowiada wyjątkową historię.",
    ...imageMeta.twitter
  },
  ...imageMeta.alternates
};

export default metadata;
