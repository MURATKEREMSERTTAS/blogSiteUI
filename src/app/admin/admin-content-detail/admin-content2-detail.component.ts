import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Contents } from 'src/app/models/Contents/Contents';
import { UpdateContents } from 'src/app/models/Contents/UpdateContents';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-admin-content2-detail',
  templateUrl: './admin-content2-detail.component.html',
  styleUrls: ['./admin-content2-detail.component.css']
})
export class AdminContent2DetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private contentService:ContentService) { }
  content: Contents | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        const id = params.get('id');
        if(id){
          this.contentService.getContent(id)
          .subscribe(
            response=>{
              this.content=response;
              this.choosen=response.mediaId;
            }
          )
        }
      }
    )
  }

  update(): void {
    const updateContent: UpdateContents = {
      id: this.content?.id,
      mediaId: this.content?.mediaId,
      title: this.content?.title,
      metaTitle: this.content?.metaTitle,
      metaDescription: this.content?.metaDescription,
      description: this.content?.description,
      featuredMediaId: this.content?.featuredMediaId,
      updateDate: this.content?.updateDate,
      createDate: this.content?.createDate,
      publishDate: this.content?.publishDate,
      isActive: this.content?.isActive,
      isDeleted: this.content?.isDeleted,
      author: this.content?.author,
      categoryId: this.content?.categoryId,
      tagId: this.content?.tagId,
      slug: this.content?.slug
    }
    this.contentService.updateContent(this.content?.id,updateContent)
    .subscribe(
      response=>{
        alert("success")
      }
    )
  }

  onDelete():void{
    this.contentService.deleteContent(this.content?.id)
    .subscribe(
      response=>{
        alert("Deleted Successufly")
      }
    )
  }

  choosen =""
  onChange($event:Event) {
    
    const file = ($event.target as HTMLInputElement).files;
    if(file!=null)this.convertToBase64(file)
  }

  convertToBase64(file:FileList){
    const observeable = new Observable((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber);
    });
    observeable.subscribe((d)=>{
      this.content!.mediaId=d;
      this.choosen=d;
    })
  }

  readFile(file:FileList,subscriber:Subscriber<any>){
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file[0]);
    fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
  }
}
