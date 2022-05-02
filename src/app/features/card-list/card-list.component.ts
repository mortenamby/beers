import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent<T> implements OnInit {
  @Input() public cardTemplate: TemplateRef<any> | null = null;
  @Input() public data: T[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

}
