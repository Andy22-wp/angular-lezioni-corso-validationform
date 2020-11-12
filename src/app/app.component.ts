import { Component, VERSION } from "@angular/core";
import { User } from "./classes/user";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  selectedUser: User = new User();
  showForm: boolean = false;

  selectUserApp(user: User) {
    this.showForm = true;
    this.selectedUser = user;
  }

  createNewUser() {
    this.selectedUser = new User();
    this.showForm = true;
  }
}
