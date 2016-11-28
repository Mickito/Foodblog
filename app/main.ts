import {bootstrap} from "angular2/platform/browser"
import {AppComponent} from "./app.component"
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

browserDynamicPlatform().bootstrapModule(AppModule);
bootstrap(AppComponent);