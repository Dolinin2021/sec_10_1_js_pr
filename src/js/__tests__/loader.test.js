import GameSavingLoader from '../loader';

test('works with promises', async () => {
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(data).toEqual(expected);
});
