/* eslint-disable prettier/prettier */
// src/services/services.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './services.entity';
import { ServiceLevel } from './service-level.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
    @InjectRepository(ServiceLevel)
    private serviceLevelRepository: Repository<ServiceLevel>,
  ) {}

  // Crear un nuevo servicio
  async createService(serviceData: Partial<Service>): Promise<Service> {
    const service = this.servicesRepository.create(serviceData);
    return this.servicesRepository.save(service);
  }

  // Obtener todos los servicios
  async findAll(): Promise<Service[]> {
    return this.servicesRepository.find({
      relations: ['vendor', 'serviceLevel'],
    });
  }

  // Crear un nuevo nivel de servicio
  async createServiceLevel(
    levelData: Partial<ServiceLevel>,
  ): Promise<ServiceLevel> {
    const serviceLevel = this.serviceLevelRepository.create(levelData);
    return this.serviceLevelRepository.save(serviceLevel);
  }
}
