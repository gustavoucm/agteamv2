import { Component, OnInit } from '@angular/core';
import { AgteamService } from 'src/app/services/agteam.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private af: AngularFireAuth, private service: AgteamService) {
    this.af.auth.onAuthStateChanged(_user => {
      if (_user) {
        this.service.getUser(_user.uid).subscribe((us: any) => {
          this.user = us;
          console.log("Usuario desde perfil",this.user);
        });
      }
    });
  }

  ngOnInit() {
  }

}
