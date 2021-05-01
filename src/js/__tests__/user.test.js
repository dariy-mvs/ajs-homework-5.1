import orderByProps from '../app';

test('orderByProps', () => {
  const objPers = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sortArray = orderByProps(objPers, ['name', 'level']);
  expect(sortArray).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('orderByProps', () => {
  const objPers = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sortArray = orderByProps(objPers);
  expect(sortArray).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
