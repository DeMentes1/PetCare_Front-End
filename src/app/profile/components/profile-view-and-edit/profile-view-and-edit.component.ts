import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile-view-and-edit',
  templateUrl: './profile-view-and-edit.component.html',
  styleUrl: './profile-view-and-edit.component.css'
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIcon, ReactiveFormsModule, MatButton, MatDivider, NgIf],
})
export class ProfileViewAndEditComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
}
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
