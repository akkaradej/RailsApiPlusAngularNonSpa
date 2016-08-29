import { NgModule } from '@angular/core';

import { PostsIndexComponent } from './posts-index.component';
import { PostModule } from '../post.module';

@NgModule({
  bootstrap: [PostsIndexComponent],
  declarations: [PostsIndexComponent],
  imports: [
    PostModule
  ],
  providers: [],
  entryComponents: [PostsIndexComponent]
})
export class PostsIndexModule {}