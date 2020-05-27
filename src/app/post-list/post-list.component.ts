import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
    // isAuth = false;

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postEvaluation: string;
    @Input() indexOfPost: number;

    postLastUpdate = new Date();

    constructor(private appareilService: AppareilService) {
        // setTimeout(() => {
        //     this.isAuth = true;
        // }, 4000);
    }

    ngOnInit(): void {}

    getPostContent() {
        return this.postContent;
    }

    getPostEvaluations() {
        return this.postEvaluation;
    }

    getColor() {
        if (this.postEvaluation === 'Love it') {
            return 'green';
        } else if (this.postEvaluation === 'Hate it') {
            return 'red';
        }
    }

    onLoveOn() {
        this.appareilService.giveLoveToOne(this.indexOfPost);
    }

    onHateOn() {
        this.appareilService.giveHateToOne(this.indexOfPost);
    }
}
