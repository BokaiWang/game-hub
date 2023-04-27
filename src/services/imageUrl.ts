const getCroppedImageUrl = (url: string) => {
  const target = "/games";
  const index = url.indexOf(target);
  return url.slice(0, index) + "/crop/600/400" + url.slice(index);
};

export default getCroppedImageUrl;
