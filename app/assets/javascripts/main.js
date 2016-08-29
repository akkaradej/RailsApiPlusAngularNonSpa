import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PostsIndexModule } from './posts/posts-index/posts-index.module';
import { PostsShowModule } from './posts/posts-show/posts-show.module';

const modules = {
  'posts': {
    'index': PostsIndexModule,
    'show': PostsShowModule,  
  }
}

platformBrowserDynamic().bootstrapModule(modules[$controllerName][$actionName]);
