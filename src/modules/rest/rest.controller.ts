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
// import { CandidateServiceQueries } from '@queries/candidate-fulfillment/candidate.queries';
import {
  ICreateRestModel,
  CreateRestModel,
  IRestID,
} from './models/create.model';
// import {
//   MongoCandidate,
//   MongoCandidateID,
//   ElasticCandidate,
//   MongoSupplierID,
// } from './interfaces/index.inteface';

// @ApiBearerAuth()
@ApiUseTags('rest')
@Controller('rest')
export class RestController {
  constructor(
    private commands: RestServiceCommands, // private candidateServiceQueries: CandidateServiceQueries,
  ) {}

  // @Get('/candidates')
  // async getAllCandidate(): Promise<MongoCandidate[]> {
  //   return await this.candidateServiceQueries.getAllCandidate();
  // }

  // @Get('/candidates/:candidateID')
  // @ApiImplicitParam({
  //   name: 'candidateID',
  // })
  // async getSingleCandidate(
  //   @Param('candidateID') candidateID,
  // ): Promise<MongoCandidate> {
  //   const candidate = await this.candidateServiceQueries.getSingleCandidate(
  //     candidateID,
  //   );
  //   if (isEmpty(candidate)) {
  //     throw new NotFoundException('Candidate does not exist!');
  //   }
  //   return candidate;
  // }

  // @Get('/keywords')
  // async getKeywords(
  //   @Query('supplierId') supplierID: MongoSupplierID,
  //   @Query('keyword') keyword: string,
  // ): Promise<ElasticCandidate> {
  //   const keywords = await this.candidateServiceQueries.getKeywords(
  //     supplierID,
  //     keyword,
  //   );
  //   return keywords;
  // }

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
