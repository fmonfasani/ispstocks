/* eslint-disable prettier/prettier */
// src/products/products.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Controller('vendors/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() productData: Partial<Product>) {
    return this.productsService.createProduct(productData);
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }
}
