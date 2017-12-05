import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyComponentModule, MyComponentComponent } from '@my/component';
import { MyExampleComponent } from './my-example.component';
import { MyOtherExampleComponent } from './my-other-example.component';
import { MyThirdExampleComponent } from './my-third-example.component';

@NgModule({
    declarations: [
        MyExampleComponent,
        MyOtherExampleComponent,
        MyThirdExampleComponent,
    ],
    exports: [
        MyExampleComponent,
    ],
    imports: [
        MyComponentModule,
        CommonModule,
        RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: MyComponentComponent,
        }, {
            path: 'other',
            component: MyOtherExampleComponent,
        }, {
            path: 'third',
            component: MyThirdExampleComponent,
        }])
    ],
})
export class MyExampleModule {}
