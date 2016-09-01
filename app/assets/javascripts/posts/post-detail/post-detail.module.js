import { NgModule } from '@angular/core';

import { PostDetailComponent } from './post-detail.component';
import { PostModule } from '../post.module';

@NgModule({
  bootstrap: [PostDetailComponent],
  declarations: [PostDetailComponent],
  imports: [
    PostModule
  ],
  providers: [],
  entryComponents: [PostDetailComponent]
})
export class PostDetailModule {}