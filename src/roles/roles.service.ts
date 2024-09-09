/* eslint-disable prettier/prettier */
// src/roles/roles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  // Crear un nuevo rol
  async createRole(name: string): Promise<Role> {
    const role = new Role();
    role.name = name;
    return this.roleRepository.save(role);
  }

  // Obtener todos los roles
  async getAllRoles(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  // Obtener un rol por ID
  async getRoleById(id: string): Promise<Role> {
    return this.roleRepository.findOne({ where: { id } });
  }
}
