import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from "../../services/services.component";
import {Table} from "primeng/table";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {UserStatus} from "../../models/user-status";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  statuses: any[] = [];
  loading: boolean = true;
  subscription: Subscription = new Subscription();
  userDialog: boolean = false;
  submitted: boolean = false;
  user: User = {} as User;
  status: String = "";
  paramId: number=-1;
  editing: boolean = false;
  active: boolean = true;

  @Output()
  public usernameIdexporter: EventEmitter<string[]> = new EventEmitter();

  @ViewChild
  ('dt') dt: Table | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute,  private messageService: MessageService, private router: Router) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.generateUsers();
    this.statuses = [
      {label: 'ACTIVE', value: 'ACTIVE'},
      {label: 'INACTIVE', value: 'INACTIVE'},
    ]

  }

  findUserById(id: number):User{
    for(let i=0; i<this.users.length;++i){
      if(this.users[i].idUser==id){
        return this.users[i] as User;

      }
    }
    return {} as User;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openNew() {
    this.user = {} as User;
    this.submitted = false;
    this.userDialog = true;
  }

  redirectToEdit(user: User){
    this.router.navigate(['users/'+user.idUser])
  }

  editUser(user: User) {
    this.user = {...user};
    this.editing = true;
    this.userDialog = true;
    if (this.user.status == UserStatus.ACTIVE) {
      this.active = true;
    } else {
      this.active = false
    }
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
    this.editing = false;
    if(this.paramId>-1){
      this.router.navigate(['users']);
    }
  }


  generateUsers() {
    this.subscription.add(
      this.userService.getUsers().subscribe( (users) => {
        this.users = users;
        this.route.params.subscribe(params=>{
          this.paramId=params['id']
          if(this.paramId>0){
            this.editUser(this.findUserById(this.paramId))
          }
        })
      }));
  }


  saveUser(){
    this.submitted = true;

    if (this.user.firstName.trim() && this.user.lastName.trim()) {
      if (this.editing) {
        this.userService.updateUser(this.user).subscribe(res=>{
          this.generateUsers();
          this.userDialog = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
          if(this.paramId>-1){
            this.router.navigate(['users']);
          }
        })
      } else {
        this.userService.addUser(this.user).subscribe(res => {
          this.generateUsers();
          this.userDialog = false;
          this.user = {} as User;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
          if(this.paramId>-1){
            this.router.navigate(['users']);
          }
        })
      }
    }
    this.editing = false;
  }

  activateUser(user: User){
    this.userService.activateUser(user.idUser).subscribe(res=>{
      user.status=res.status;
    }, error =>
    {
      // //If the user has active bugs you can not deactivate him.
      // let userIndex = this.users.findIndex(u => u.idUser = user.idUser);
      // user.status = UserStatus.INACTIVE;
      // this.users[userIndex] = user;
    })
  }

  deactivateUser(user: User){
    this.userService.deactivateUser(user.idUser).subscribe(res=>{
      user.status = res.status;

    }, error =>
    {

      //If the user has active bugs you can not deactivate him.
      let userIndex = this.users.findIndex(u => u.idUser === user.idUser);

      //Use a new variable so that the model refreshes
      let newUser = {} as User;
      newUser = {...user};
      newUser.status = UserStatus.ACTIVE;
      this.users[userIndex] = newUser;



    })

  }


  chooseState(user: User) {
    if(user.status===UserStatus.ACTIVE)
      this.deactivateUser(user);
    else
      this.activateUser(user);
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  clear(table: Table) {
    table.clear();
  }


}
