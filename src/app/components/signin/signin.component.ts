import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
  }

  login(email: string, password: string){
    console.log("Entro");
    this.af.auth.signInWithEmailAndPassword(email, password).then( c => {
      this.router.navigate(['/home']);
    }      
    ).catch(error => {
      console.log('Error', error);
    });
  }
}
