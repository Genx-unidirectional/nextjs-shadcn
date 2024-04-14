const randomNum = (num?: number) => {
  if (num) {
    return Math.floor(Math.random() * num) + 1;
  } else {
    return Math.random().toFixed(1);
  }
};

export const randomRgbColor = () => {
  return `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
};

export const randomHexColor = () => {
  return `hsla(${randomNum(255)},${randomNum(100)}%,${randomNum(100)}%,${randomNum()})`;
};
