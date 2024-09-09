/* eslint-disable prettier/prettier */
// src/vendors/vendors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './vendor.entity';
import { ServiceLevel } from '../services/service-level.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
    @InjectRepository(ServiceLevel)
    private serviceLevelRepository: Repository<ServiceLevel>,
  ) {}

  // Crear un nuevo proveedor
  async createVendor(vendorData: Partial<Vendor>): Promise<Vendor> {
    const vendor = this.vendorsRepository.create(vendorData);
    return this.vendorsRepository.save(vendor);
  }

  // Obtener todos los proveedores
  async findAll(): Promise<Vendor[]> {
    return this.vendorsRepository.find({
      relations: ['services', 'products', 'serviceLevels'],
    });
  }

  // Filtrar proveedores por nivel de servicio
  async findVendorsByServiceLevel(levelName: string): Promise<Vendor[]> {
    return this.vendorsRepository
      .createQueryBuilder('vendor')
      .leftJoinAndSelect('vendor.serviceLevels', 'serviceLevel')
      .where('serviceLevel.name = :levelName', { levelName })
      .getMany();
  }

  // Crear un nivel de servicio
  async createServiceLevel(
    levelData: Partial<ServiceLevel>,
  ): Promise<ServiceLevel> {
    const serviceLevel = this.serviceLevelRepository.create(levelData);
    return this.serviceLevelRepository.save(serviceLevel);
  }
}
