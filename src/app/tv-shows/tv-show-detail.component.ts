import {
  Component,
  inject,
  Injector,
  Input,
  numberAttribute,
  OnInit,
  runInInjectionContext,
  Signal
} from "@angular/core";
import {TvShow, TvShowService} from "../tv-shows.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {JsonPipe} from "@angular/common";

@Component({
  standalone: true,
  selector: 'tv-show-detail',
  template: `
    <div class="container">
      <img [src]="'assets/' + tvShow()?.imageSrc"/>
      <h2>{{ tvShow()?.title }}</h2>
      <p>{{ tvShow()?.description }}</p>
    </div>
  `,
  imports: [JsonPipe],
  styles: [`
    img {
      border-radius: 20px;
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  `]
})
export class TvShowDetailComponent implements OnInit {
  private tvShowService = inject(TvShowService);
  private injector = inject(Injector);

  @Input({transform: numberAttribute}) id!: number;

  tvShow!: Signal<TvShow | undefined>;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.tvShow = toSignal(this.tvShowService.getTvShowById(this.id))
    })
  }
}
