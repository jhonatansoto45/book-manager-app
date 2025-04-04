import { Component, input } from '@angular/core';

@Component({
  selector: 'app-type-section',
  imports: [],
  template: `
    <div class="type-section w-full flex justify-center items-center gap-2">
      <div class="line w-8  h-1" [style.background-color]="color()"></div>
      <p class="text-sm text-{{ color() }} font-bold">Acerca de</p>
      <div class="line w-8  h-1" [style.background-color]="color()"></div>
    </div>
  `,
})
export class TypeSectionComponent {
  type = input.required<string>();
  color = input<string>('white');
}
