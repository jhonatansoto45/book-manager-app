import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import type { Icon } from '../../interfaces/books.interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  imports: [RouterLink, TitleCasePipe],
})
export class AsideComponent {
  sanitizer = inject(DomSanitizer);
  icons: Icon[] = [
    {
      name: 'dashboard',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l2-2m-2 2v9a1 1 0 001 1h3m-11-8l2 2m-2-2v5a1 1 0 001 1h3"
            />
          </svg>`),
      route: '/books/dashboard',
    },
    {
      name: 'libros',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>`),
      route: '/books/list-books',
    },
    {
      name: 'prestamos',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>`),
      route: '',
    },
    {
      name: 'usuarios',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 01-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>`),
      route: '',
    },
    {
      name: 'configuracion',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31-.826 4.368.196a1.724 1.724 0 001.066 2.573c-.87 1.135-.75 2.902.196 4.368a1.724 1.724 0 002.573 1.066c.94 1.543.826 3.31-.196 4.368a1.724 1.724 0 00-1.066 2.573c1.135.87 2.902.75 4.368-.196a1.724 1.724 0 00-2.573 1.066c-.94 1.543-.826 3.31.196 4.368a1.724 1.724 0 00-1.066 2.573c-1.135-.87-2.902-.75-4.368.196a1.724 1.724 0 00-2.573-1.066c.87-1.135.75-2.902-.196-4.368a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-4.368-.196a1.724 1.724 0 00-1.066-2.573c.87-1.135.75-2.902-.196-4.368a1.724 1.724 0 00-2.573-1.066c-1.135.87-2.902.75-4.368-.196a1.724 1.724 0 001.066-2.573c.94-1.543.826-3.31-.196-4.368a1.724 1.724 0 001.066-2.573c1.135.87 2.902.75 4.368.196a1.724 1.724 0 002.573 1.066z"
            />
          </svg>`),
      route: '',
    },
  ];
}
