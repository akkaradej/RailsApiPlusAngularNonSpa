import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list.component';
import { PostModule } from '../post.module';

@NgModule({
  bootstrap: [PostListComponent],
  declarations: [PostListComponent],
  imports: [
    PostModule
  ],
  providers: [],
  entryComponents: [PostListComponent]
})
export class PostListModule {}