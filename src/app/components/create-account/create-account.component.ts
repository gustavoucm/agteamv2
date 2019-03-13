import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private af: AngularFireAuth) {}

  ngOnInit() {
  }

  createAccount(email: string, password: string) {
    console.log(email, password);
    this.af.auth.createUserWithEmailAndPassword(email, password).catch( (e) => {
      console.log('Error', e);
    });
  }
}
