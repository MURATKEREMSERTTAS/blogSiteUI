import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminContentComponent } from './admin/admin-author/admin-content.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminDetailAuthorComponent } from './admin/admin-author-detail/admin-detail-author.component';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { CategoryComponent } from './views/category/category.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminCategoryDetailComponent } from './admin/admin-category-detail/admin-category-detail.component';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { AdminCommentDetailComponent } from './admin/admin-comment-detail/admin-comment-detail.component';
import { AdminMediasComponent } from './admin/admin-medias/admin-medias.component';
import { AdminMediaDetailComponent } from './admin/admin-media-detail/admin-media-detail.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { AdminTagsComponent } from './admin/admin-tags/admin-tags.component';
import { AdminTagDetailComponent } from './admin/admin-tag-detail/admin-tag-detail.component';
import { AdminContentAddComponent } from './admin/admin-author-add/admin-content-add.component';
import { AdminContent2Component } from './admin/admin-content/admin-content2.component';
import { AdminContent2AddComponent } from './admin/admin-content-add/admin-content2-add.component';
import { AdminContent2DetailComponent } from './admin/admin-content-detail/admin-content2-detail.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { ContentDetailComponent } from './views/content-detail/content-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminContentComponent,
    AdminDetailAuthorComponent,
    HomeComponent,
    UserComponent,
    CategoryComponent,
    AdminCategoriesComponent,
    AdminCategoryDetailComponent,
    AdminCommentsComponent,
    AdminCommentDetailComponent,
    AdminMediasComponent,
    AdminMediaDetailComponent,
    AdminSettingComponent,
    AdminTagsComponent,
    AdminTagDetailComponent,
    AdminContentAddComponent,
    AdminContent2Component,
    AdminContent2AddComponent,
    AdminContent2DetailComponent,
    AdminCategoryAddComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
