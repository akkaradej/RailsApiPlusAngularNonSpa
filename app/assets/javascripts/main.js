import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PostListModule } from './posts/post-list/post-list.module';
import { PostDetailModule } from './posts/post-detail/post-detail.module';

const modules = {
  'post-list': PostListModule,
  'post-detail': PostDetailModule
}

for (let moduleName of $moduleNames) {
  platformBrowserDynamic().bootstrapModule(modules[moduleName]);    
}
