import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header>
    </header>
  `,
  styles: [`
    header {
      height: 60px;
      margin-top: 0;
      background: #12121d;
    }
  `]
})
export class HeaderComponent {}
