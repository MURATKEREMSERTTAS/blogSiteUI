import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Authors } from 'src/app/models/Author/Authors';
import { Categories } from 'src/app/models/Category/Categories';
import { NewContents } from 'src/app/models/Contents/NewContents';
import { Tags } from 'src/app/models/Tags/Tags';
import { CategoriesService } from 'src/app/services/categories.service';
import { ContentService } from 'src/app/services/content.service';
import { PostService } from 'src/app/services/post.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-admin-content2-add',
  templateUrl: './admin-content2-add.component.html',
  styleUrls: ['./admin-content2-add.component.css']
})
export class AdminContent2AddComponent implements OnInit {

  constructor(
    private contentService: ContentService,
    private postService:PostService,
    private categoryService: CategoriesService,
    private tagService: TagService
    ) { }

  
  date : String = new Date().toLocaleString();
  content: NewContents={
    id:"",
    mediaId:"",
    title:"",
    metaTitle:"",
    metaDescription:"",
    description:"",
    featuredMediaId:"",
    updateDate:this.date.toLocaleString(),
    createDate:this.date.toLocaleString(),
    publishDate:this.date.toLocaleString(),
    isActive:"",
    isDeleted:"",
    author:"",
    categoryId:"",
    tagId:"",
    slug:"",
  }
  authors:Authors[]=[];
  categories:Categories[]=[];
  tags:Tags[]=[];
  ngOnInit(): void {
    this.postService.getAuthorList()
    .subscribe(response => {this.authors = response});

    this.categoryService.getCategoiesList()
    .subscribe(response=>(this.categories = response));

    this.tagService.getTagsList()
    .subscribe(response=>(this.tags = response))
  }

  authorSelect($event:any){
    this.content.author=$event.target.value
  }
  categorySelect($event:any){
    this.content.categoryId=$event.target.value
  }
  tagSelect($event:any){
    this.content.tagId=$event.target.value
  }

  onSubmit(): void{
    this.contentService.postContentInf(this.content)
    .subscribe(
      response=>{
        alert("Success");
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
      this.content.mediaId=d;
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


