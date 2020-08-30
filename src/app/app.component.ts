import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'insta-clone';

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyAalu0GV2PXiegQqDZZ9QuB5hpTydYSu3A",
      authDomain: "jta-insta-clone-a6b4f.firebaseapp.com",
      databaseURL: "https://jta-insta-clone-a6b4f.firebaseio.com",
      projectId: "jta-insta-clone-a6b4f",
      storageBucket: "jta-insta-clone-a6b4f.appspot.com",
      messagingSenderId: "42416960917",
      appId: "1:42416960917:web:df9581ca31a5649e94f29c"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
