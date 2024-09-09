/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { MarketplaceController } from './marketplace/marketplace.controller';
import { MarketplaceService } from './marketplace/marketplace.service';
import { PricingModule } from './pricing/pricing.module';
import { PricingController } from './pricing/pricing.controller';
import { PricingService } from './pricing/pricing.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { LogisticModule } from './logistic/logistic.module';
import { LogisticController } from './logistic/logistic.controller';
import { LogisticService } from './logistic/logistic.service';
import { GeolocationModule } from './geolocation/geolocation.module';
import { GeolocationController } from './geolocation/geolocation.controller';
import { GeolocationService } from './geolocation/geolocation.service';
import { RolesModule } from './roles/roles.module';
import { VendorsModule } from './vendors/vendors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    VendorsModule,
    AuthModule,
    MarketplaceModule,
    PricingModule,
    PaymentModule,
    LogisticModule,
    GeolocationModule,
    RolesModule, // Importa el módulo de roles
  ],
  controllers: [
    AppController,
    AuthController,
    MarketplaceController,
    PricingController,
    PaymentController,
    LogisticController,
    GeolocationController,
  ],
  providers: [
    AppService,
    AuthService,
    MarketplaceService,
    PricingService,
    PaymentService,
    LogisticService,
    GeolocationService,
  ],
})
export class AppModule {}
