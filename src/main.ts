import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

/*---- 
Entry point of angular application:
Angular basically finds the <app-root> selector on 
index.html and replace it with the App component;
----*/
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
