import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {} ;

  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'https://picsum.photos/600/600?image=1027',
          isActive: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'https://picsum.photos/600/600?image=1024',
          isActive: false
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'https://picsum.photos/600/600?image=1011',
          isActive: true
        }
      ];

      this.loaded = true;

      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson'
      // });
      this.setCurrentClasses();
      this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success':this.enableAdd,
      'big-text': this.showExtended
    }
  }
  
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '100px',
      'font-size': this.showExtended ? '' : '50px'
    }
  }

}
