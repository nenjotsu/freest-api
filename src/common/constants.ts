export const defaultRateLimit = {
  windowMs: 15 * 60 * 1000,
  max: 100,
};

export const SUCCESS_STATUS_CODE = 200;

export enum MONGO {
  DATABASE_CONNECTION = 'MONGO_DATABASE_CONNECTION',
  CANDIDATE_MODEL = 'CANDIDATE_MODEL',
  REST_MODEL = 'REST_MODEL',
  COLLECTION_NAME = 'rest',
  COLLECTION_NAME_SUPPERHERO = 'superhero',
}

export enum ELASTICSEARCH {
  DATABASE_CONNECTION = 'ELASTIC_DATABASE_CONNECTION',
  CANDIDATE_MODEL = 'CANDIDATE_MODEL',
  INDEX_NAME = 'successfeecandidates',
}

export enum ENV {
  production = 'production',
  uat = 'uat',
  staging = 'staging',
  development = 'development',
}

export enum candidateStatus {
  PENDING_ID = 1,
  HIRED_ID = 2,
  REJECTED_ID = 3,
  SHORTLISTED_ID = 4,
  WITHDRAW_ID = 5,
  SCREENING_ID = 6,
  NOTSELECTED_ID = 7,
  INTERVIEWING_ID = 8,
  OFFEREXTENDED_ID = 9,
}

export const candidateStatusIds = [
  candidateStatus.PENDING_ID,
  candidateStatus.HIRED_ID,
  candidateStatus.REJECTED_ID,
  candidateStatus.SHORTLISTED_ID,
  candidateStatus.SCREENING_ID,
  candidateStatus.INTERVIEWING_ID,
  candidateStatus.OFFEREXTENDED_ID,
];

export const candidateStatusFilterIds = [
  candidateStatus.PENDING_ID,
  candidateStatus.HIRED_ID,
  candidateStatus.REJECTED_ID,
  candidateStatus.SHORTLISTED_ID,
  candidateStatus.SCREENING_ID,
  candidateStatus.INTERVIEWING_ID,
  candidateStatus.OFFEREXTENDED_ID,
];

export enum candidateStatusFilterIdsIndex {
  pending = 0,
  hired = 1,
  rejected = 2,
  shortlisted = 3,
  screening = 4,
  interviewing = 5,
  offerextended = 6,
}

export const candidateStatusFilterIdsIndexList = [
  { status: 'pending', id: candidateStatusFilterIdsIndex.pending },
  { status: 'hired', id: candidateStatusFilterIdsIndex.hired },
  { status: 'rejected', id: candidateStatusFilterIdsIndex.rejected },
  { status: 'shortlisted', id: candidateStatusFilterIdsIndex.shortlisted },
  { status: 'screening', id: candidateStatusFilterIdsIndex.screening },
  { status: 'interviewing', id: candidateStatusFilterIdsIndex.interviewing },
  { status: 'offerextended', id: candidateStatusFilterIdsIndex.offerextended },
];

export enum candidateStatusFilterByIds {
  pending = '0',
  hired = '1',
  rejected = '2',
  shortlisted = '3',
  screening = '4',
  interviewing = '5',
  offerextended = '6',
}

export enum auctionStatusIds {
  pending = 1,
  approved = 2,
  cancelled = 3,
  discontinued = 4,
}

export enum stageStatusIds {
  pending = 1,
  approved = 2,
  inProgress = 3,
  awarding = 4,
}

export enum applicationStageStatusIds {
  application = 1,
  clarification = 2,
  bidding = 3,
  fulfillment = 4,
  completed = 5,
}

export enum applicationStageStatusIdsCompetitiveIndex {
  application = 0,
  clarification = 1,
  bidding = 2,
  fulfillment = 3,
  completed = 4,
}

export enum applicationStageStatusIdsSuccessFeeIndex {
  fulfillment = 0,
  completed = 1,
}

export const competitiveApplicationStageStatusIdList = [
  applicationStageStatusIds.application,
  applicationStageStatusIds.clarification,
  applicationStageStatusIds.bidding,
  applicationStageStatusIds.fulfillment,
  applicationStageStatusIds.completed,
];

export const successFeeApplicationStageStatusIdList = [
  applicationStageStatusIds.fulfillment,
  applicationStageStatusIds.completed,
];
