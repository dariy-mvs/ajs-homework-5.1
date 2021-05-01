// TODO: write your code here

export default function orderByProps(obj, sortArray = []) {
  const sortObjClone = JSON.parse(JSON.stringify(obj));
  const alphabetArray = [];
  const arraySpecialProps = [];
  if (sortArray.length !== 0) {
    sortArray.forEach((e) => {
      const nameKey = e;
      const elementObject = {
        key: nameKey,
        value: sortObjClone[e],
      };
      arraySpecialProps.push(elementObject);
      delete sortObjClone[e];
    });
  }

  for (const key in sortObjClone) {
    if (Object.prototype.hasOwnProperty.call(sortObjClone, key)) {
      const loopElementObject = {
        key,
        value: sortObjClone[key],
      };
      alphabetArray.push(loopElementObject);
    }
  }
  alphabetArray.sort((a, b) => {
    const keyA = a.key.toLowerCase();
    const keyB = b.key.toLowerCase();
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0; //из-за этой строчки тесты не проходят на 100%. Но в массиве в принципе не может быть 2х одинаковых ключей, а следовательно до этой строчки код никогда не доходит. Если её убрать, то покрытие 100%, но тогда ругается линтер. Как правильно написать в этой ситуации?))
  });
  const returnArray = [...arraySpecialProps, ...alphabetArray];
  return returnArray;
}
