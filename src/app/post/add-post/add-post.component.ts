import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/modals/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addpost } from '../postlist/state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }



  postSubmited(){
    if(!this.postForm.valid){
      return;
    }
    const  post:Post = {
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }
    this.store.dispatch(addpost({post}));
  }
  discription(){
    const discriptionEror = this.postForm.get('description');
    if(discriptionEror?.touched && !discriptionEror.valid){
      if(discriptionEror.errors?.['required']){
        return "this is the require Field"
      }
        if(discriptionEror.errors?.['minlength']){
          return "Minimum length will be 10" ;
        }
      
        
    }
    return;
  }

 

}
