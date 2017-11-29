import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponentComponent } from './my-component.component';

@NgModule({
    declarations: [
        MyComponentComponent
    ],
    exports: [
        MyComponentComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class MyComponentModule {}
