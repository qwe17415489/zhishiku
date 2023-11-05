export function getImgUrl(url: any) {
  return new URL(`../assets/${url}`, import.meta.url).href
}
