import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
