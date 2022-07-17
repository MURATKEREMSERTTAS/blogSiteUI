import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/models/Author/Authors';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  constructor(private postService: PostService) { }

  authors: Authors[] = [];
  ngOnInit(): void {
    this.postService.getAuthorList()
    .subscribe(response => {this.authors = response})
  }
  

}
