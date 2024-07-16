import { Component, Input } from '@angular/core';
import { Articles, HeadlineModel } from '../../shared/store/news/News.model';
import { SnackbarService } from '../../services/snackbar.service';
import { NewzServiceService } from '../../services/newz-service.service';
import { Store } from '@ngrx/store';
import { loadSavedArticles } from '../../shared/store/news/News.action';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {

  @Input() article !: HeadlineModel
  @Input() save !: boolean 

  constructor(
    private snackbarService: SnackbarService,
    private articleService: NewzServiceService,
    private store: Store<Articles>
  ){}

  saveArticle() {
    this.articleService.saveArtcile(this.article).subscribe(
      () => {
        this.snackbarService.showSnackbarBottom('Article saved successfully', 5000);
        this.store.dispatch(loadSavedArticles())
      },
      error => {
        this.snackbarService.showSnackbarBottom('Failed to save article', 5000);
        console.error('Error saving article:', error);
      }
    );
  }


  deleteArticle(){
    this.articleService.deleteSavedArticle(this.article.id).subscribe(
      () => {
        this.snackbarService.showSnackbarBottom('Article  successfully', 5000);
        this.store.dispatch(loadSavedArticles())
      },
      error => {
        this.snackbarService.showSnackbarBottom('Failed to save article', 5000);
        console.error('Error saving article:', error);
      }
    )
  }
}
