import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from 'src/app/models/Author/Authors';
import { UpdateAuthor } from 'src/app/models/Author/UpdateAuthor';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-admin-detail-author',
  templateUrl: './admin-detail-author.component.html',
  styleUrls: ['./admin-detail-author.component.css']
})
export class AdminDetailAuthorComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postService: PostService) { }

  Author:Authors | undefined;
  ngOnInit(): void {
   this.route.paramMap.subscribe(
    params=>{
      const id = params.get('id');
      if(id){
        this.postService.getAuthor(id)
        .subscribe(
          response=>{
            this.Author=response
          }
        )
      }
    }
   )
  }

  update(): void {
    const updateAuthor: UpdateAuthor = { 
      id:this.Author?.id,
      fullName: this.Author?.fullName,
      mail: this.Author?.mail,
      userName: this.Author?.userName,
      password:this.Author?.password,
      isActive:this.Author?.isActive,
      isDeleted:this.Author?.isDeleted
      
    }
    this.postService.updateAuthor(this.Author?.id,updateAuthor)
    .subscribe(
      response=>{
        alert("success")
      }
    )
  }

  onDelete():void{
    this.postService.deleteAuthor(this.Author?.id)
    .subscribe(
      response=>{
        alert("Deleted Successufly")
      }
    )
  }

}
