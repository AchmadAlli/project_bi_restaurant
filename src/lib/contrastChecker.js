const tinycolor = require('tinycolor2');
// https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.js

const roundTo = (n, digits = 0) => {
  const multiplicator = 10 ** digits;
  const tempN = parseFloat((n * multiplicator).toFixed(11));
  const output = Math.round(tempN) / multiplicator;

  return output;
};

export const getRatio = (foreground, background) => {
  const ratio = roundTo(tinycolor.readability(foreground, background), 2);
  return ratio;
};

export const checkColorContrast = (foreground, background) => {
  const aaReadableLarge = tinycolor.isReadable(foreground, background, { level: 'AA', size: 'large' });
  const aaReadableSmall = tinycolor.isReadable(foreground, background, { level: 'AA', size: 'small' });

  return {
    large: aaReadableLarge,
    small: aaReadableSmall,
  };
};
