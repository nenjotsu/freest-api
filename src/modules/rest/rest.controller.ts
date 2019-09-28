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
import { RestServiceCommands } from '@commands/rest/rest.commands';
import { RestServiceQueries } from '@queries/rest/rest.queries';
import {
  ICreateRestModel,
  CreateRestModel,
  IRestID,
} from './models/create.model';

// @ApiBearerAuth()
@ApiUseTags('rest')
@Controller('rest')
export class RestController {
  constructor(
    private commands: RestServiceCommands,
    private queries: RestServiceQueries,
  ) {}

  @Get('/campaigns')
  async getAllRest(): Promise<ICreateRestModel[]> {
    return await this.queries.getAllRest();
  }

  @Get('/campaigns/:id')
  @ApiImplicitParam({
    name: 'id',
  })
  async getSingleRest(@Param('id') id: IRestID): Promise<ICreateRestModel> {
    const data = await this.queries.getSingleRest(id);
    if (isEmpty(data)) {
      throw new NotFoundException('Campaign does not exist!');
    }
    return data;
  }

  @Get('/campaigns/find/:name')
  @ApiImplicitParam({
    name: 'name',
  })
  async findByName(@Param('name') name: string): Promise<ICreateRestModel[]> {
    const data = await this.queries.findByName(name);
    if (isEmpty(data)) {
      throw new NotFoundException('Campaign does not exist!');
    }
    return data;
  }

  @Post('/campaigns')
  async createRest(@Body() model: CreateRestModel) {
    const data = await this.commands.createRest(model);
    return data;
  }

  @Patch('/campaigns/:id')
  @ApiImplicitQuery({
    name: 'id',
  })
  async updateCandidate(
    @Param('id') id: IRestID,
    @Body() model: CreateRestModel,
  ) {
    const data = await this.commands.updateRest(id, model);
    if (!data) {
      throw new NotFoundException('Candidate does not exist!');
    }
    return data;
  }

  @Delete('/campaigns/:id')
  @ApiImplicitQuery({
    name: 'id',
  })
  async deleteCandidate(@Param('id') id: IRestID) {
    const data = await this.commands.deleteRest(id);
    if (!data) {
      throw new NotFoundException('Campaign Id does not exist');
    }
    return {
      message: 'Campaign has been deleted',
      _id: id,
    };
  }
}
