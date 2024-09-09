/* eslint-disable prettier/prettier */
// src/vendors/vendors.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { Vendor } from './vendor.entity';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor]), ServicesModule],
  providers: [VendorsService],
  controllers: [VendorsController],
  exports: [VendorsService], // Exportamos el servicio para usarlo en otros módulos si es necesario
})
export class VendorsModule {}
