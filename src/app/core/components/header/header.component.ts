/* eslint-disable ngrx/no-store-subscription */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/auth/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userLogin: string;

  error: string;

  constructor(private router: Router, private store: Store, private route: ActivatedRoute, private auth: ApiService) { }

  ngOnInit(): void {
    this.userLogin = localStorage.getItem('login');
  }

  switchPage(page: string) {
    this.router.navigateByUrl(`/auth/${page}`);
    localStorage.setItem('currentPage', page);
  }

  checkPage(page: string) {
    return localStorage.getItem('currentPage') === page ? true : false;
  }

}
