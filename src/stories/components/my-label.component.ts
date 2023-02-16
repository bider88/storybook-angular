import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-label',
  template: ` <span
    class="label"
    [ngClass]="classes"
  >
    {{ label }}
  </span>`,
  styleUrls: ['./my-label.css'],
})
export default class MyLabelComponent {

  /**
   * Initial text into label
   */
  @Input()
  label = 'Hello world';

  /**
   * What color should the text be?
   */
  @Input()
  type: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * What size should the text be?
   */
  @Input()
  size: 'normal' | 'h1' | 'h2' | 'h3' = 'normal';

  public get classes(): string[] {
    return [this.size, `text-${this.type}`];
  }
}
