import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public detailForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.email,Validators.required])],
    // phone: ['', Validators.required],
    service: ['Wedding Photography', Validators.required],
    date: ['', Validators.required],
    additionalInfo: ['', Validators.required]
  })
  public invalidFormSubmitted: boolean = false;
  public successfulSubmission: boolean = false;
  public submitted: boolean = false;
  public allFiles: Array<string>;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
   }


  onSubmit() { 
    this.submitted = true;
    this.invalidFormSubmitted = false;
    setTimeout(() => {
      if(this.validateForm()) {
        console.log('valid: ' + this.invalidFormSubmitted);
        this.invalidFormSubmitted = false;
        this.contactService.sendEmail(this.detailForm.value).subscribe(
          res => { 
            console.log('status: ' + res.status);
            if (res.status === 204) {
              this.successfulSubmission = true;
            }
          }
        )
      } else {
        this.submitted = false;
        this.invalidFormSubmitted = true;
        console.log('invalid: ' + this.invalidFormSubmitted);
      }
    }, 3500);
  }

  validateForm(): boolean {
    var status: boolean = true;
    Object.keys(this.detailForm.controls).forEach( key => {
      if (this.detailForm.get(key).status === "INVALID") {
        status = false;
      }
    });
    return status;
  }
}
