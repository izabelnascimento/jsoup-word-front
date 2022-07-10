import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Substantive } from './substantive';
import { SubstantiveService } from './substantive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  substantives: Substantive[] = [];
  moreSearched: Substantive;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(
    private service: SubstantiveService
  ){}

  ngOnInit(): void {
  }
  
  search(){
    const substantive: Substantive = { ...this.form.value }
    this.service.search(substantive.name).subscribe(substantiveList => this.substantives = substantiveList);
    this.service.moreSearched().subscribe(moreSearched => this.moreSearched = moreSearched);
  }

}
