import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // getting that hello world
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'World'; }
