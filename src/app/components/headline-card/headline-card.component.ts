import { Component, Input } from '@angular/core';
import { HeadlineModel, HeadLines } from '../../shared/store/news/News.model';
import { SnackbarService } from '../../services/snackbar.service';
import { HeadlinesService } from '../../services/headlines.service';
import { Store } from '@ngrx/store';
import { loadSavedHeadlines } from '../../shared/store/news/News.action';

@Component({
  selector: 'app-headline-card',
  templateUrl: './headline-card.component.html',
  styleUrl: './headline-card.component.scss'
})
export class HeadlineCardComponent {

  @Input() headlines !: HeadlineModel
  @Input() save !: boolean 


  constructor(
    private snackbarService: SnackbarService,
    private headLineService: HeadlinesService,
    private store: Store<HeadLines>
  ){}
  
  saveHeadline() {
    this.headLineService.saveHeadline(this.headlines).subscribe(
      () => {
        this.snackbarService.showSnackbarBottom('Article saved successfully', 5000);
        this.store.dispatch(loadSavedHeadlines())
      },
      error => {
        this.snackbarService.showSnackbarBottom('Failed to save article', 5000);
        console.error('Error saving article:', error);
      }
    );
  }

  deleteHeadline(){
    this.headLineService.deleteSavedHeadline(this.headlines.id).subscribe(
      () => {
        this.snackbarService.showSnackbarBottom('Headline deleted successfully', 5000);
        this.store.dispatch(loadSavedHeadlines())
      },
      error => {
        this.snackbarService.showSnackbarBottom('Failed to save article', 5000);
        console.error('Error saving article:', error);
      }
    )
  }
}
