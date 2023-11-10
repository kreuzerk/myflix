import {Component, inject} from "@angular/core";
import {TvShowService} from "../tv-shows.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {TvShowListItemComponent} from "./tv-show-list-item.component";

@Component({
  standalone: true,
  selector: 'app-movies-list',
  template: `
      <div class="container">
          <div class="grid">
              @for(tvShow of tvShows(); track $index){
              <app-movies-list-item [tvShow]="tvShow"/>
              }
          </div>
      </div>

  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  `],
  imports: [TvShowListItemComponent]
})
export class TvShowsListComponent {
  private tvShowsService = inject(TvShowService);

  tvShows = toSignal(this.tvShowsService.getTvShows());

}
