/* eslint-disable prettier/prettier */
// src/products/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vendor } from '../vendors/vendor.entity';

@Entity({ name: 'products', schema: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Nombre del producto

  @Column('decimal')
  price: number; // Precio del producto

  @Column()
  stock: number; // Stock disponible

  // Relación con el proveedor
  @ManyToOne(() => Vendor, (vendor) => vendor.products)
  vendor: Vendor;
}
