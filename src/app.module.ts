import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [UsersModule, DatabaseModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
