import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  create = false;
  edit = false;

  ngOnInit() {
    this.hidden();
  }
  onCreate() {
    this.create = true;
  }
  onEdit = function(edit) {
    this.edit = edit;
    this.hidden();
  };

  closeCreate = function(create) {
    this.create = create;
  };

  closeEdit = function(edit) {
    this.edit = edit;
    console.log(this.edit);
    this.hidden();
  };

  hidden() {
    if (this.edit) {
      return 'block';
    } else {
      return 'none';
    }
  }

  onClose() {
    this.create = false;
  }
}
