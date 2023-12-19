import ListItem from "./ListItem";

interface ListInterface {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

interface LocalItemInterface {
  _id: string;
  _item: string;
  _checked: boolean;
}

export default class FullList implements ListInterface {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list() {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parseStoredList: LocalItemInterface[] = JSON.parse(storedList);

    parseStoredList.forEach((item) => {
      const newListItem = new ListItem(item._id, item._item);
      return FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(item: ListItem): void {
    this._list.push(item);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
