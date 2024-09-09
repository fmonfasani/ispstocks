/* eslint-disable prettier/prettier */
// src/vendors/vendors.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { Vendor } from './vendor.entity';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  async createVendor(@Body() vendorData: Partial<Vendor>) {
    return this.vendorsService.createVendor(vendorData);
  }

  @Get()
  async findAll() {
    return this.vendorsService.findAll();
  }
}
