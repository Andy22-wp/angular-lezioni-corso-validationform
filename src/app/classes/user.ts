import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  fiscalcode: string;
  email: string;
  phone: string;
  prov: string;
  age: number;

  constructor() {
    this.id = 0;
    this.age = 18;
  }
}