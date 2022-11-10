import { Expenses } from "./expenses";


export class User {
    userName: String = '';
    email: String = '';
    password: String = '';
    occupation: String = '';
    expenses: Expenses[] = [];
    constructor() { }
}