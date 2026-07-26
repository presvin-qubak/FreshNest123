export const getImageUrl = (image) => {
  if (!image) return "";

  if (typeof image === "string") {
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("data:")) {
      return image;
    }

    const normalizedImage = image.replace(/^\/+/, "");
    return `${import.meta.env.BASE_URL}${normalizedImage}`;
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
