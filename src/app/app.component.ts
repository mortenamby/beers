import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from './core/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'users';
}
