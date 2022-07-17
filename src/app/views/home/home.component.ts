import { Component, OnInit } from '@angular/core';
import { Contents } from 'src/app/models/Contents/Contents';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  contents: Contents[] = [];
  ngOnInit(): void {
    this.contentService.getContentList()
    .subscribe(response=>{this.contents = response})
  }


}
