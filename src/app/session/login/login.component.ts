import { SessionService } from '../state/session.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  emailControl$: AbstractControl;
  subs: Subscription[] = [];
  constructor(private authService: SessionService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      subGroup: new FormGroup({
        name: new FormControl(''),
        kisses: new FormControl('')
      })
    });
    this.emailControl$ = this.loginForm.get('email');

    this.subs.push(
      this.emailControl$.valueChanges.pipe(
        distinctUntilChanged(),
        map((value: string) => {
        console.log({value});

        const transformedvalue = value.toUpperCase();
        this.emailControl$.setValue(transformedvalue);
      }),
        debounceTime(500),
      ).subscribe()
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe() );
  }

  submit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigateByUrl('');
      })
    }
  }
}
