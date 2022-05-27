import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "src/login/models/User";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {RegisterService} from "../RegisterService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm= {} as FormGroup;
  formSubmitted=false;
  user={} as User;

  @Output()
  public userExporter:EventEmitter<User>=new EventEmitter<User>();

  constructor(private httpClient: HttpClient,private messageService: MessageService,private formBuilder: FormBuilder,private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required)

    });
  }

  siteKey:string="6LeKAy4cAAAAANv4Q0NyiKy5hWuUmzTa4BjBmtpE";

  errormsg: string="";

  register() {
    if (this.userForm.controls['lastName'].value && this.userForm.controls['firstName'].value && this.userForm.controls['username'].value && this.userForm.controls['password'].value && this.userForm.controls['email'].value) {
      this.formSubmitted=true;
      this.registerService.register(this.userForm.controls['firstName'].value,this.userForm.controls['lastName'].value,this.userForm.controls['username'].value, this.userForm.controls['password'].value, this.userForm.controls['email'].value).subscribe((user)=>{
        this.user=user;

        sessionStorage.setItem('firstName', user.firstName);
        sessionStorage.setItem('lastName', user.lastName);
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('password', user.password);
        sessionStorage.setItem('token', user.token);

        this.router.navigate(['home']);
      });
    }

  }

  onSubmit() {

    this.register();
  }

  handleClick() {
    this.router.navigate(['login']);
  }


}
