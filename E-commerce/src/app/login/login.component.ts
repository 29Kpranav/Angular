import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup !: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private applicationService:ApplicationService){
    
  }




  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    const username = this.formGroup.get('username')?.value;
    const password = this.formGroup.get('password')?.value;

    if (username === 'admin' && password === 'admin') {
     this.applicationService.isLoggedIn=true;
      this.router.navigate(['/header']);
      Swal.fire('Logged In', 'Welcome sir !', 'success');
      return;
    } else {
        Swal.fire('Login Failed!', 'wrong credentials !', 'error');
        return;
    }
  }
}
