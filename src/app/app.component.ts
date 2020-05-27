import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isAuth = false;

    posts: any[];

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(() => {
            resolve(date);
        }, 2000);
    });

    constructor(private appareilService: AppareilService) {
        setTimeout(() => {
            this.isAuth = true;
        }, 4000);
    }

    ngOnInit() {
        this.posts = this.appareilService.posts;
    }

    iLoveIt() {
        this.appareilService.giveLikesOnAll();
    }

    iDontLoveIt() {
        if (confirm("Etes-vous sûr de vouloir vouloir de l'haine à tous ces merveilleux posts ?")) {
            this.appareilService.giveDontLikesOnAll();
        } else {
            return null;
        }
    }
}
