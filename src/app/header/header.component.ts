import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  navigateRecipes() {
    this.navigate.emit("recipes");
  }

  navigateShoppingList() {
    this.navigate.emit("shoppingList");
  }
}
