import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable()
export class UserService {
  users: Array<User> = [
    {
      id: 1,
      name: "Andrea",
      lastname: "Di Studente",
      fiscalcode: "FJRKS84S22C673A",
      email: "andrea.ng@corso.it",
      phone: "387113804950",
      prov: "Roma",
      age: 40
    },
    {
      id: 2,
      name: "Andrea1",
      lastname: "Biripacchio",
      fiscalcode: "FJRKS84S22C673A",
      email: "andrea.ng@corso.it",
      phone: "387113804950",
      prov: "Roma",
      age: 40
    },
    {
      id: 3,
      name: "Andrea2",
      lastname: "Santoreggi",
      fiscalcode: "FJRKS84S22C673A",
      email: "andrea.ng@corso.it",
      phone: "387113804950",
      prov: "Roma",
      age: 40
    }
  ];

  constructor(){}

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  scriviDati() {
    return this.users;
  }

  deleteUser(par) {
    let index = this.users.indexOf(par);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  evidenzia(par) {
    alert("chiamato il metodo evidenzia su utente " + par);
  }

  updateUser(par: User) {
    const idx = this.users.findIndex(v => v.id === par.id);
    alert("l'id reale dell'array è "+idx);
    if (idx != -1) {
      this.users[idx] = par;
    }
  }

    createUser(par: User) {
      par.id = this.users.length + 1;
      this.users.splice(0,0, par);
    } 

    

}
