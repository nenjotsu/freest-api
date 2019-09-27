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
import { ICreateRestModel, CreateRestModel } from './models/create.model';
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

  @Post('/user')
  async createRest(@Body() model: CreateRestModel) {
    const data = await this.commands.createRest(model);
    return data;
  }

  // @Patch('/candidates/:candidateID')
  // @ApiImplicitQuery({
  //   name: 'candidateID',
  // })
  // async updateCandidate(
  //   @Param('candidateID') candidateID: MongoCandidateID,
  //   @Body() CreateRestModel: CreateRestModel,
  // ) {
  //   const candidate = await this.commands.updateCandidate(
  //     candidateID,
  //     CreateRestModel,
  //   );
  //   if (!candidate) {
  //     throw new NotFoundException('Candidate does not exist!');
  //   }
  //   return candidate;
  // }

  // @Delete('/candidates/:candidateID')
  // @ApiImplicitQuery({
  //   name: 'candidateID',
  // })
  // async deleteCandidate(@Param('candidateID') candidateID: MongoCandidateID) {
  //   const candidate = await this.commands.deleteCandidate(
  //     candidateID,
  //   );
  //   if (!candidate) {
  //     throw new NotFoundException('Candidate does not exist');
  //   }
  //   return {
  //     message: 'Candidate has been deleted',
  //     _id: candidateID,
  //   };
  // }
}
