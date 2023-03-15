import read from './reader';
import json from './parser';
import GameSaving from './saving';

export default class GameSavingLoader {
  static load() {
    const data = read();
    return data.then((data) => json(data))
      .then((value) => {
        const res = JSON.parse(value);
        const instance = new GameSaving(res.id, res.created, res.userInfo);
        return instance;
      });
  }
}
