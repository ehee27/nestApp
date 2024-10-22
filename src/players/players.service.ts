import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PlayersService {
  constructor(private readonly databaseService: DatabaseService) {}
  //
  async create(createPlayerDto: Prisma.PlayerCreateInput) {
    return this.databaseService.player.create({
      data: createPlayerDto,
    });
  }

  async findAll(role?: 'PLAYER' | 'COACH') {
    if (role)
      return this.databaseService.player.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.player.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.player.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePlayerDto: Prisma.PlayerUpdateInput) {
    return this.databaseService.player.update({
      where: {
        id,
      },
      data: updatePlayerDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.player.delete({
      where: {
        id,
      },
    });
  }
}
