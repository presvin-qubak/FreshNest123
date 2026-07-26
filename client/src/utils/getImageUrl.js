export const getImageUrl = (image) => {
  if (!image) return "";

  if (typeof image === "string") {
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("data:")) {
      return image;
    }

    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    const normalizedImage = image.replace(/^\/+/, "");
    const basePrefix = basePath.replace(/^\/+/, "");

    if (normalizedImage.startsWith(basePrefix)) {
      return `/${normalizedImage}`;
    }

    return `${basePath}/${normalizedImage}`;
  }

  if (typeof image === "object") {
    if (typeof image.src === "string") {
      return getImageUrl(image.src);
    }

    if (typeof image.default === "string") {
      return getImageUrl(image.default);
    }
  }

  return "";
};
