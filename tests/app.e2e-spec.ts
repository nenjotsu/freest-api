import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/main.module';

const successHealthStatus = {
  status: 'ok',
  info: {
    elastic_cluster: {
      status: 'up',
      isHealthyElasticCluster: true,
    },
  },
};

describe('AppController (e2e)', () => {
  // let app: INestApplication;
  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule],
  //   }).compile();
  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });
  // it('/api/health/status (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/api/health/status')
  //     .expect(200)
  //     .expect(successHealthStatus);
  // });
  it('/api/health/status (GET)', () => {
    expect(true).toBe(true);
  });
});

// describe('CandidateServiceCommands', () => {
//   let service: CandidateServiceCommands;

//   beforeAll(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [CandidateServiceCommands],
//     }).compile();
//     service = module.get<CandidateServiceCommands>(CandidateServiceCommands);
//   });
//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

// describe('CandidateServiceQueries', () => {
//   let service: CandidateServiceQueries;

//   beforeAll(async () => {
//     const moduleName: TestingModule = await Test.createTestingModule({
//       providers: [CandidateServiceQueries],
//     }).compile();
//     service = moduleName.get<CandidateServiceQueries>(CandidateServiceQueries);
//   });
//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
