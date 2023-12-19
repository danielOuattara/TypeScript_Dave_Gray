import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

interface LocalItemType {
  _id: string;
  _item: string;
  _checked: boolean;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list() {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parseList: LocalItemType[] = JSON.parse(storedList);

    parseList.forEach((item) => {
      const newListItem = new ListItem(item._id, item._item, item._checked);
      return FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    return localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    return this.save();
  }

  addItem(item: ListItem): void {
    this._list.push(item);
    return this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    return this.save();
  }
}
