import { NgModule } from '@angular/core';
import { NextClientComponent } from './next-client/next-client';
import { MenuComponent } from './menu/menu';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';

@NgModule({
	declarations: [
		NextClientComponent,
		MenuComponent
	],
	imports: [
		CommonModule,
		DialogModule,
		ScrollPanelModule,
		TableModule
	],
	exports: [
		NextClientComponent,
		MenuComponent]
})
export class ComponentsModule {

	constructor() {

	}
}
