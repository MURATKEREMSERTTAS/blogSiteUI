import { Component, OnInit } from '@angular/core';
import { NewCategories } from 'src/app/models/Category/NewCategories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  constructor(private CategoriesService: CategoriesService) { }
  
  Categories: NewCategories= {
    id:"",
    name:"",
    metaTitle:"",
    metaDescription:"",
    isActive:"",
    isDeleted:"",
    slug:"",
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.CategoriesService.postCategoiesInf(this.Categories)
    .subscribe(
      response=>{alert("Success");}
    );
  }
}
