import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature',
  standalone: true,
  imports: [CommonModule],
  template: `<p>feature works!</p>`,
  styles: [],
})
export class FeatureComponent {}
