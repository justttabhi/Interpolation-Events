import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*  
    template: `<div>
                  <h1>Inline templete</h1>
                 </div>`,
    styles: [`
      div{
         background-color: red
      }
    `]                                      */
})
export class AppComponent {
  //Dynamic value: TS variable
  title = 'Interpolation';
  data = 34;
  n = 'Sachin';

  //Events
  get() {
    alert('hello');
  }

  getdata(val: string) {
    console.log(val);
  }

  cal() {
    console.log("Sachin");
  }



  // Get input Box value and display
  displayVal = '';
  displayAttributeVal = '';
  getVal(valu: string) {
    return this.displayVal = valu;
  }
  getAttributeVal(valu: string) {
    return this.displayAttributeVal = valu;
  }

  

}
