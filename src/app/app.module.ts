import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/post.service';

@NgModule({
    declarations: [AppComponent, PostListComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [AppareilService],
    bootstrap: [AppComponent],
})
export class AppModule {}
