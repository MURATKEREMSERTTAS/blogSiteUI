import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentAddComponent } from './admin/admin-author-add/admin-content-add.component';
import { AdminContentComponent } from './admin/admin-author/admin-content.component';
import { AdminDetailAuthorComponent } from './admin/admin-author-detail/admin-detail-author.component';
import { CategoryComponent } from './views/category/category.component';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { AdminContent2AddComponent } from './admin/admin-content-add/admin-content2-add.component';
import { AdminContent2Component } from './admin/admin-content/admin-content2.component';
import { AdminContent2DetailComponent } from './admin/admin-content-detail/admin-content2-detail.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminCategoryAddComponent } from './admin/admin-category-add/admin-category-add.component';
import { AdminCategoryDetailComponent } from './admin/admin-category-detail/admin-category-detail.component';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { AdminCommentDetailComponent } from './admin/admin-comment-detail/admin-comment-detail.component';
import { AdminMediasComponent } from './admin/admin-medias/admin-medias.component';
import { AdminMediaDetailComponent } from './admin/admin-media-detail/admin-media-detail.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { AdminTagsComponent } from './admin/admin-tags/admin-tags.component';
import { AdminTagDetailComponent } from './admin/admin-tag-detail/admin-tag-detail.component';
import { ContentDetailComponent } from './views/content-detail/content-detail.component';

const routes: Routes = 
[
  {
   path: 'admin/authors',
   component: AdminContentComponent
  },
  {
    path: 'admin/authors/add',
    component: AdminContentAddComponent
   },
  {
    path: 'admin/authors/:id',
    component: AdminDetailAuthorComponent
   },
   {
    path: 'admin/contents',
    component: AdminContent2Component
   },
   {
    path: 'admin/contents/add',
    component: AdminContent2AddComponent
   },
   {
    path: 'admin/contents/:id',
    component: AdminContent2DetailComponent
   },
   {
    path: 'admin/categories',
    component: AdminCategoriesComponent
   },
   {
    path: 'admin/categories/add',
    component: AdminCategoryAddComponent
   },
   {
    path: 'admin/categories/:id',
    component: AdminCategoryDetailComponent
   },
   {
    path: 'admin/comments',
    component: AdminCommentsComponent
   },
   {
    path: 'admin/comments/:id',
    component: AdminCommentDetailComponent
   },
   {
    path: 'admin/medias',
    component: AdminMediasComponent
   },
   {
    path: 'admin/medias/:id',
    component: AdminMediaDetailComponent
   },
   {
    path: 'admin/setting',
    component: AdminSettingComponent
   },
   {
    path: 'admin/tags',
    component: AdminTagsComponent
   },
   {
    path: 'admin/tags/:id',
    component: AdminTagDetailComponent
   },
   {
    path: 'user',
    component: UserComponent
   },
   {
    path: 'Categories',
    component: CategoryComponent
   },
   
   {
    path: '',
    component: HomeComponent
   },
   {
    path: 'contents/:id',
    component: ContentDetailComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
