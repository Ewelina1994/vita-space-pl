export const SITE_URL = "https://vita-space.pl";

export function buildCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") return SITE_URL;
  return `${SITE_URL}${normalizedPath}`;
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: buildCanonicalUrl(path) };
}

export function absoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${SITE_URL}${normalizedPath}`;
}
