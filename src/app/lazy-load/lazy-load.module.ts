import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';

import { LazyLoadComponent } from './lazy-load.component';
import { TestService } from './test.service';
import { Service2 } from '../services/service2';



// injection bug replicate
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule,

    // injection bug replicate
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [
            HttpClient,
          ],
      },
    }),

  ],
  providers: [
    // Service2,
    TestService
  ],
  declarations: [
    LazyLoadComponent
  ]
})
export class LazyLoadModule { }
