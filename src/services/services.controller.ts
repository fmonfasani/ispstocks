/* eslint-disable prettier/prettier */
// src/services/services.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './services.entity';
import { ServiceLevel } from './service-level.entity';

@Controller('vendors/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  async createService(@Body() serviceData: Partial<Service>) {
    return this.servicesService.createService(serviceData);
  }

  @Get()
  async findAll() {
    return this.servicesService.findAll();
  }

  @Post('/level')
  async createServiceLevel(@Body() levelData: Partial<ServiceLevel>) {
    return this.servicesService.createServiceLevel(levelData);
  }
}
