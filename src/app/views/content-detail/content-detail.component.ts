import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Comments } from 'src/app/models/Comments/Comments';
import { NewComments } from 'src/app/models/Comments/NewComments';
import { Contents } from 'src/app/models/Contents/Contents';
import { UpdateContents } from 'src/app/models/Contents/UpdateContents';
import { CommentsService } from 'src/app/services/comments.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private contentService:ContentService,
    private commentService: CommentsService
    ) { }
  content: Contents | undefined;
  comments: Comments[]=[];
  allcomments:Comments[]=[];
  commentt:NewComments={
    id: undefined,
    contentId: undefined,
    fullName: undefined,
    mail: undefined,
    text: undefined,
    isAproved: undefined
  }
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
            this.commentService.getContentList()
            .subscribe(res=>{
                          this.allcomments=res;
                          for(var i in res){
                            if(res[i].contentId == response.id){
                              this.comments.push(res[i]);
                            }
                          }
                          console.log(this.comments);
            });
          }
        );
      }
    }
  );
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

  onSubmit(): void{
    this.commentt.contentId=this.content?.id;
    if(this.commentt.fullName!=null && this.commentt.fullName!="string" && this.commentt.text!=null &&this.commentt.text!="string"){
    this.commentService.postContentInf(this.commentt)
    .subscribe(
      response=>{alert("Success");}
    );}else alert("Anonymous or empty comments comments are not allowed!")
  }
}

