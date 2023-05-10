import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { BoardComponent } from './kanban-board/board/board/board.component';
import { ListComponent } from './kanban-board/board/list/list.component';
import { ContextMenuComponent } from './kanban-board/common/contextmenu/context-menu.component';
import { ContentEditDirective } from './directives/common/content-edit.directive';
import { SummaryComponent } from './kanban-board/board/card/summary/summary.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    BoardComponent,
    ListComponent,
    ContextMenuComponent,
    ContentEditDirective,
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
