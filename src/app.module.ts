import { Module } from '@nestjs/common';
import { AppController } from './main/app.controller';
import { AppService } from './main/app.service';
import { UserModule } from './user/user.module';
import { PruebaModule } from './prueba/prueba.module';

@Module({
  imports: [UserModule, PruebaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
