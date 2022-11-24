export const capitalize = (string) => {
  if (string) {
    const words = string.split(' ');
    return words
      .map((word) => {
        // console.log(word);
        if (word.length > 0) return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
  }
};
