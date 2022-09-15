import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title! : string | ArrayBuffer | null | undefined;


ngOnInit(): void { 

}


  onChange(event: any) {
    this.title = '';

    // Get your files
    const files: FileList = event.target.files;

  this.title = files[0].name;

    
  }

  uploadBtn(){
    this.title  = "custom submit"  
  }

}
