import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb-browser';

@Injectable({
  providedIn: 'root',
})
export class PouchDbService {
private db = new PouchDB('users');

  async saveUser(username: string, password: string) {
    try {
      await this.db.put({
        _id: username,
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async validateUser(username: string, password: string) {
    try {
      const user: any = await this.db.get(username);

      return user.username === username && user.password === password;
    } catch {
      return false;
    }
  }
}
