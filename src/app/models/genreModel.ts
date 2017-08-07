export class GenreModel {

  id: number;
  name: string;

  constructor(id: number) {
    this.id = id
  }

  empty() {
    const genre = {
      id: 0,
      name: 'err genre'
    };

    return genre;
  }

  newGenre(obj: Object) {
    const isObject = obj.hasOwnProperty('id');

    isObject === true ? Object.assign(this, obj) : Object.assign(this, this.empty());
    return this;
  }
}
