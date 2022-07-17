import { Component, OnInit } from '@angular/core';
import { Contents } from 'src/app/models/Contents/Contents';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-admin-content2',
  templateUrl: './admin-content2.component.html',
  styleUrls: ['./admin-content2.component.css']
})
export class AdminContent2Component implements OnInit {

  constructor(private contentService: ContentService) { }

  contents: Contents[] = [];
  ngOnInit(): void {
    this.contentService.getContentList()
    .subscribe(response=>{this.contents = response})
  }

}
