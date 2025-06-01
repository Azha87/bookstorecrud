import { Module } from '@nestjs/common';
import { HandlerModule } from './api/handlers/handler.module';
import { RespositoriesModule } from './api/repositories/repositories.module';
import { ControllersModule } from './api/controllers/controllers.module';

@Module({
  imports: [HandlerModule, ControllersModule],
  providers: [RespositoriesModule],
})
export class RootModule {}
