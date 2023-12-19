import "./css/style.css";
import ListTemplate from "./template/listTemplate";
import FullList from "./model/FullLists";
import ListItem from "./model/ListItem";

function initApp() {
  const template = ListTemplate.instance;
  const fullList = FullList.instance;

  //-------
  const itemEntryform = document.getElementById(
    "itemEntryForm",
  )! as HTMLFormElement;

  itemEntryform.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const newItemInput = document.getElementById(
      "newItem",
    )! as HTMLInputElement;

    const newItem = new ListItem(
      new Date().getTime().toString(),
      newItemInput.value.trim(),
    );
    //
    fullList.addItem(newItem);
    newItemInput.value = "";
    template.render(fullList);
  });

  //-------
  const clearItemsButton = document.getElementById(
    "clearItemsButton",
  )! as HTMLButtonElement;
  clearItemsButton.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  //-------
  fullList.load();
  template.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp);
