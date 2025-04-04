import { Component, input } from '@angular/core';

@Component({
  selector: 'app-type-section',
  imports: [],
  template: `
    <div class="type-section w-full flex justify-center items-center gap-2">
      <div class="line w-8 bg-white h-1"></div>
      <p class="text-sm text-white font-bold">Acerca de</p>
      <div class="line w-8 bg-white h-1"></div>
    </div>
  `,
})
export class TypeSectionComponent {
  type = input.required<string>();
}
