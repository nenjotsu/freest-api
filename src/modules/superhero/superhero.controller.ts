import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  NotFoundException,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiImplicitQuery,
  ApiImplicitParam,
} from '@nestjs/swagger';
import { isEmpty } from 'lodash';
import { SuperheroServiceCommands } from '@commands/superhero/superhero.commands';
import { SuperheroServiceQueries } from '@queries/superhero/superhero.queries';
import {
  ICreateRestModel,
  CreateRestModel,
  IRestID,
} from './models/create.model';

// @ApiBearerAuth()
@ApiUseTags('superhero')
@Controller('superhero')
export class SuperheroController {
  constructor(
    private commands: SuperheroServiceCommands,
    private queries: SuperheroServiceQueries,
  ) {}

  @Get('/heroes')
  async getAllRest(): Promise<ICreateRestModel[]> {
    return await this.queries.getAllRest();
  }

  @Get('/heroes/:id')
  @ApiImplicitParam({
    name: 'id',
  })
  async getSingleRest(@Param('id') id: IRestID): Promise<ICreateRestModel> {
    const data = await this.queries.getSingleRest(id);
    if (isEmpty(data)) {
      throw new NotFoundException('Hero does not exist!');
    }
    return data;
  }

  @Post('/heroes')
  async createRest(@Body() model: CreateRestModel) {
    const data = await this.commands.createRest(model);
    return data;
  }

  @Patch('/heroes/:id')
  @ApiImplicitQuery({
    name: 'id',
  })
  async updateCandidate(
    @Param('id') id: IRestID,
    @Body() model: CreateRestModel,
  ) {
    const data = await this.commands.updateRest(id, model);
    if (!data) {
      throw new NotFoundException('Hero does not exist!');
    }
    return data;
  }

  @Delete('/heroes/:id')
  @ApiImplicitQuery({
    name: 'id',
  })
  async deleteCandidate(@Param('id') id: IRestID) {
    const data = await this.commands.deleteRest(id);
    if (!data) {
      throw new NotFoundException('Hero Id does not exist');
    }
    return {
      message: 'Hero has been deleted',
      _id: id,
    };
  }
}
