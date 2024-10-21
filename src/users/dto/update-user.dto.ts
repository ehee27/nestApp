import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// the controller contains the HTTP methods and the route params
// the return value is invoking the service (all the logic) to render our repsonse

// we define the type of req bodyobject/params/return etc. by referencing the Dto or the 'shape' of the data... similar to a model

// when service 'decorated' with @Injectable, means we can use this in our class (controller's) constructor, and it will automatically reference our service logic, instead of having to ceate a new service
