/* eslint-disable prettier/prettier */
// src/services/service-level.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Service } from './services.entity';

@Entity({ name: 'services', schema: 'services' })
export class ServiceLevel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // Nombre del nivel de servicio (Ej: Proveedor de Internet, Mantenimiento)

  @OneToMany(() => Service, (service) => service.serviceLevel)
  services: Service[];
}
