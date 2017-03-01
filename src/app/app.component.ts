import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadingStart} from "./store/actions/loadingActions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private store:Store<any>) {
   // loadingStart(this.store);
    store.dispatch({type: 'LOADING_START'});

    this.store.select('loading').subscribe(res=> {
      debugger
    })

  }
}
