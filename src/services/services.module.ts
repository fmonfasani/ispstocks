/* eslint-disable prettier/prettier */
// src/services/services.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './services.entity';
import { ServiceLevel } from './service-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, ServiceLevel])],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [TypeOrmModule, ServicesService],
})
export class ServicesModule {}
