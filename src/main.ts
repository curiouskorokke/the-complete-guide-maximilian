import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

/*---- 
Entry point of angular application:
Angular basically finds the <app-root> selector on 
index.html and replace it with the App component;
----*/
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

platformBrowser().bootstrapModule(AppModule);
