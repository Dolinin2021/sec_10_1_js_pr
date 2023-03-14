import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const data = read();
    return data.then((data) => json(data)).then((value) => value);
  }
}
