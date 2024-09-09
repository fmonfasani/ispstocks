/* eslint-disable prettier/prettier */
// src/roles/roles.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  // Endpoint para crear un nuevo rol
  @Post()
  async createRole(@Body('name') roleName: string) {
    return this.rolesService.createRole(roleName);
  }

  // Endpoint para obtener todos los roles
  @Get()
  async getAllRoles() {
    return this.rolesService.getAllRoles();
  }

  // Endpoint para obtener un rol por ID
  @Get(':id')
  async getRoleById(@Param('id') id: string) {
    return this.rolesService.getRoleById(id);
  }
}
