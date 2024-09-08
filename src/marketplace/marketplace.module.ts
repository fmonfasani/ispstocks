import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [],
  controllers: [],
})
export class MarketplaceModule {}