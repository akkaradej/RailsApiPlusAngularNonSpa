import { NgModule } from '@angular/core';

import { PostsShowComponent } from './posts-show.component';
import { PostModule } from '../post.module';

@NgModule({
  bootstrap: [PostsShowComponent],
  declarations: [PostsShowComponent],
  imports: [
    PostModule
  ],
  providers: [],
  entryComponents: [PostsShowComponent]
})
export class PostsShowModule {}