import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/models/Category/Categories';
import { UpdateCategories } from 'src/app/models/Category/UpdateCategories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-category-detail',
  templateUrl: './admin-category-detail.component.html',
  styleUrls: ['./admin-category-detail.component.css']
})
export class AdminCategoryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private CategoriesService: CategoriesService) { }

  Categories:Categories | undefined;
  ngOnInit(): void {
   this.route.paramMap.subscribe(
    params=>{
      const id = params.get('id');
      if(id){
        this.CategoriesService.getCategoies(id)
        .subscribe(
          response=>{
            this.Categories=response
          }
        )
      }
    }
   )
  }

  update(): void {
    const updateCategories: UpdateCategories = { 
      id:this.Categories?.id,
      name: this.Categories?.name,
      metaTitle: this.Categories?.metaTitle,
      metaDescription: this.Categories?.metaDescription,
      isActive:this.Categories?.isActive,
      isDeleted:this.Categories?.isDeleted,
      slug:this.Categories?.slug,
      
    }
    this.CategoriesService.updateCategoies(this.Categories?.id,updateCategories)
    .subscribe(
      response=>{
        alert("success")
      }
    )
  }

  onDelete():void{
    this.CategoriesService.deleteCategoies(this.Categories?.id)
    .subscribe(
      response=>{
        alert("Deleted Successufly")
      }
    )
  }

}
