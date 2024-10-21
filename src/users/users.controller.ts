// DTO Data Transfer Object
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
//

@Controller('users') // PARENT ROUTE
export class UsersController {
  // constructor 'SINGLETON' service available without... 'new UserService'
  constructor(private readonly usersService: UsersService) {}

  // --------------- FIND ALL ---------------------
  //'querying' users w 'role' param define position type and return service logic
  @Get() findAllUsers(@Query('role') role: 'PLAYER' | 'COACH') {
    return this.usersService.findAll(role);
  }

  // --------------- FIND ONE ---------------------
  // GET / users/:id
  @Get(':id') findOneUser(@Param('id', ParseIntPipe) id: number) {
    // return { id };
    return this.usersService.findOne(id);
  }

  // --------------- CREATE USER ---------------------
  // POST / users
  @Post() createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    // return {name: createUserDto.name,};
    return this.usersService.createUser(createUserDto);
  }

  // ---------------UPDATE USER ---------------------
  // PUT / users
  @Patch(':id') updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    // return {id,name: updateUserDto.name};
    return this.usersService.updateUser(id, updateUserDto);
  }

  // --------------- DELETE USER ---------------------
  // DELETE / users/:id
  @Delete(':id') deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeUser(id);
  }
}
