import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Category/Categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  constructor(private CategoriesService: CategoriesService) { }

  Categories: Categories[] = [];
  ngOnInit(): void {
    this.CategoriesService.getCategoiesList()
    .subscribe(response => {this.Categories = response})
  }

}
