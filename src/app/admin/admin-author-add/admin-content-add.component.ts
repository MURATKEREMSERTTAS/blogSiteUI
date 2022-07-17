import { Component, OnInit } from '@angular/core';
import { NewAuthor } from 'src/app/models/Author/NewAuthor';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-content-add',
  templateUrl: './admin-content-add.component.html',
  styleUrls: ['./admin-content-add.component.css']
})
export class AdminContentAddComponent implements OnInit {

  constructor(private postService: PostService) { }
  
  author: NewAuthor= {
    id:"",
    fullName:"",
    mail:"",
    userName:"",
    password:"",
    isActive:"",
    isDeleted:""
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.postService.postAuthorInf(this.author)
    .subscribe(
      response=>{alert("Success");}
    );
  }

}
