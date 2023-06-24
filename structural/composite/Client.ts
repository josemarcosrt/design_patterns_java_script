import Composite from "./Composite";
import Object from "./Object";

const inputTextName = new Object("Name");
const buttonClose = new Object("Close");
const buttonSave = new Object("Save");

const dialog = new Composite("Dialog");

dialog.add(inputTextName);
dialog.add(buttonClose);
dialog.add(buttonSave);

const panel = new Composite("Panel");
panel.add(dialog);

panel.operation();

//tsc Client.ts
//node Client.js