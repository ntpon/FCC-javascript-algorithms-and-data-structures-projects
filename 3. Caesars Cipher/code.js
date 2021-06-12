function rot13(str) {
  const englishs = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  return [...str]
    .map((char) => {
      const index = englishs.indexOf(char);
      if (index === -1) {
        return char;
      } else {
        let newIndex = index + 13;
        if (newIndex >= 26) {
          return englishs[newIndex - 26];
        } else {
          return englishs[newIndex];
        }
      }
    })
    .join('');
}

rot13('SERR');
