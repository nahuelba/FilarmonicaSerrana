import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form:FormGroup = this.fb.group({email: ['', Validators.email]})

  year:number = new Date().getFullYear();

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

    send(){
      console.log(this.form);
    }

}
