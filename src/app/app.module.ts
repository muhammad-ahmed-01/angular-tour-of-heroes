import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';
import {HeroCreateComponent} from './hero-create/hero-create.component';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HeroesListComponent},
    {path: 'heroes', component: HeroCreateComponent},
    {path: 'heroes/:id', component: HeroDetailsComponent},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        HeroesListComponent,
        HeroDetailsComponent,
        HeroCreateComponent,
        HeroItemComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/