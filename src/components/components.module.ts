import { NgModule } from '@angular/core';
import { MycouponComponent } from './mycoupon/mycoupon';
import { MycountComponent } from './mycount/mycount';
@NgModule({
	declarations: [MycouponComponent,
    MycountComponent],
	imports: [],
	exports: [MycouponComponent,
    MycountComponent]
})
export class ComponentsModule {}
