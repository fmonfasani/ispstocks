/* eslint-disable prettier/prettier */
// src/services/service.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vendor } from '../vendors/vendor.entity';
import { ServiceLevel } from './service-level.entity';

@Entity({ name: 'services', schema: 'services' })
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Nombre del servicio

  @Column('decimal')
  price: number; // Precio del servicio

  // Relación con el proveedor que ofrece el servicio
  @ManyToOne(() => Vendor, (vendor) => vendor.services)
  vendor: Vendor;

  // Relación con el nivel del servicio
  @ManyToOne(() => ServiceLevel, (serviceLevel) => serviceLevel.services)
  serviceLevel: ServiceLevel;
}
