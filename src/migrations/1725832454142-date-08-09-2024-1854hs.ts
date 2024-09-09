import { MigrationInterface, QueryRunner } from 'typeorm';

export class Date080920241854hs1725832454142 implements MigrationInterface {
  name = 'Date080920241854hs1725832454142';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS services;`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS products;`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS vendors;`);
    await queryRunner.query(
      `CREATE TABLE "products"."products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
       "name" character varying NOT NULL, 
       "price" numeric NOT NULL, "stock" integer NOT NULL,
        "vendorId" uuid, 
        CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "services"."services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
       "name" character varying NOT NULL, CONSTRAINT "UQ_019d74f7abcdcb5a0113010cb03" UNIQUE ("name"), CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vendors"."vendors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "companyName" character varying NOT NULL, "contactInfo" character varying NOT NULL, "isGoodsProvider" boolean NOT NULL DEFAULT false, "isServiceProvider" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_9c956c9797edfae5c6ddacc4e6e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "auth"."user_roles_role" ("userId" uuid NOT NULL, 
      "roleId" uuid NOT NULL, 
      CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "auth"."user_roles_role" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "auth"."user_roles_role" ("roleId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD "price" numeric NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD "vendorId" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD "serviceLevelId" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP CONSTRAINT "UQ_019d74f7abcdcb5a0113010cb03"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products"."products" ADD CONSTRAINT "FK_6b00af9e9c38a1673f594de74f4" FOREIGN KEY ("vendorId") REFERENCES "vendors"."vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD CONSTRAINT "FK_be2f79887a52a4f6e683e2506a0" FOREIGN KEY ("vendorId") REFERENCES "vendors"."vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD CONSTRAINT "FK_a76d4f1eef89476ec1358e55ea3" FOREIGN KEY ("serviceLevelId") REFERENCES "services"."services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth"."user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP CONSTRAINT "FK_a76d4f1eef89476ec1358e55ea3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP CONSTRAINT "FK_be2f79887a52a4f6e683e2506a0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "products"."products" DROP CONSTRAINT "FK_6b00af9e9c38a1673f594de74f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" ADD CONSTRAINT "UQ_019d74f7abcdcb5a0113010cb03" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP COLUMN "serviceLevelId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP COLUMN "vendorId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services"."services" DROP COLUMN "price"`,
    );
    await queryRunner.query(
      `DROP INDEX "auth"."IDX_4be2f7adf862634f5f803d246b"`,
    );
    await queryRunner.query(
      `DROP INDEX "auth"."IDX_5f9286e6c25594c6b88c108db7"`,
    );
    await queryRunner.query(`DROP TABLE "auth"."user_roles_role"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TABLE "vendors"."vendors"`);
    await queryRunner.query(`DROP TABLE "services"."services"`);
    await queryRunner.query(`DROP TABLE "products"."products"`);
  }
}
