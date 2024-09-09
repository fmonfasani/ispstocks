/* eslint-disable prettier/prettier */
// src/vendors/vendor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../products/products.entity';
import { Service } from '../services/services.entity';

@Entity({ name: 'vendors', schema: 'vendors' })
export class Vendor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;

  @Column()
  contactInfo: string;

  @Column({ default: false })
  isGoodsProvider: boolean; // Indica si es un proveedor de bienes

  @Column({ default: false })
  isServiceProvider: boolean; // Indica si es un proveedor de servicios

  // Relación con los productos que ofrece (proveniente del módulo de productos)
  @OneToMany(() => Product, (product) => product.vendor)
  products: Product[];

  // Relación con los servicios que ofrece (proveniente del módulo de servicios)
  @OneToMany(() => Service, (service) => service.vendor)
  services: Service[];
}
