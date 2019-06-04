import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageSwitcher = "recipes";
  onNavigate(event: string) {
    this.pageSwitcher = event;
  }
}
