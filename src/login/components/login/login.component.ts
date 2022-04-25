import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
declare var grecaptcha: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  aFormGroup= {} as FormGroup;
  userForm= {} as FormGroup;
  formSubmitted=false;
  user={} as User;

  @Output()
  public userExporter:EventEmitter<User>=new EventEmitter<User>();

  constructor(private messageService: MessageService,private formBuilder: FormBuilder,private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
    });
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

  }

  siteKey:string="6LeKAy4cAAAAANv4Q0NyiKy5hWuUmzTa4BjBmtpE";

  errormsg: string="";

  onSubmit() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
      this.errormsg = 'Recaptcha not verified. Please try again!';
      this.messageService.add({severity: 'error', summary: 'Error', detail: this.errormsg, life: 3000});
      return;
    }
    this.login();
  }

  login() {
    this.formSubmitted=true;
    this.loginService.login(this.userForm.controls['username'].value, this.userForm.controls['password'].value).subscribe((user)=>{
      this.user=user;
      this.user.password= this.userForm.controls['password'].value;
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('password', user.password);
      sessionStorage.setItem('token', user.token);

      this.router.navigate(['home']);
    });
  }
  /*forwardUser(user: User){
    this.userExporter.emit(user);
  }*/
}
