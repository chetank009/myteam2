import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xpandStatus=true;
  title = 'team2';
}
export class InputFormExample {}

export class CheckboxOverviewExample {}

export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
export class DialogContentExampleDialog {}



// onclick()
// {
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>

// <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       ...
//     </div>
//   </div>
// </div>
// }
