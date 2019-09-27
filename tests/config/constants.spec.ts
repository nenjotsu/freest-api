const constants = require('../../dist/config/constants');
import { assert } from 'chai';

describe('constants', () => {
  describe('candidateStatus', () => {
    it('should PENDING_ID: 1', () => {
      assert.equal(constants.candidateStatus.PENDING_ID, 1);
    });
    it('should HIRED_ID: 2', () => {
      assert.equal(constants.candidateStatus.HIRED_ID, 2);
    });
    it('should REJECTED_ID: 3', () => {
      assert.equal(constants.candidateStatus.REJECTED_ID, 3);
    });
    it('should SHORTLISTED_ID: 4', () => {
      assert.equal(constants.candidateStatus.SHORTLISTED_ID, 4);
    });
    it('should WITHDRAW_ID: 5', () => {
      assert.equal(constants.candidateStatus.WITHDRAW_ID, 5);
    });
    it('should SCREENING_ID: 6', () => {
      assert.equal(constants.candidateStatus.SCREENING_ID, 6);
    });
    it('should NOTSELECTED_ID: 7', () => {
      assert.equal(constants.candidateStatus.NOTSELECTED_ID, 7);
    });
    it('should INTERVIEWING_ID: 8', () => {
      assert.equal(constants.candidateStatus.INTERVIEWING_ID, 8);
    });
    it('should OFFEREXTENDED_ID: 9', () => {
      assert.equal(constants.candidateStatus.OFFEREXTENDED_ID, 9);
    });
  });

  describe('candidateStatusIds', () => {
    const candidateStatusIdList = [1, 2, 3, 4, 6, 8, 9];

    candidateStatusIdList.forEach(id => {
      it(`should candidateStatusIds: ${id} included`, () => {
        assert.include(constants.candidateStatusIds, id);
      });
    });
  });

  describe('candidateStatusFilterIds', () => {
    const candidateStatusFilterIdsList = [1, 2, 3, 4, 6, 8, 9];

    candidateStatusFilterIdsList.forEach(id => {
      it(`should candidateStatusIds: ${id} included`, () => {
        assert.include(constants.candidateStatusFilterIds, id);
      });
    });
  });

  describe('candidateStatusFilterIdsIndex', () => {
    it('should pending: 0', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.pending, 0);
    });
    it('should hired: 1', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.hired, 1);
    });
    it('should rejected: 2', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.rejected, 2);
    });
    it('should shortlisted: 3', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.shortlisted, 3);
    });
    it('should screening: 4', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.screening, 4);
    });
    it('should interviewing: 5', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.interviewing, 5);
    });
    it('should offerextended: 6', () => {
      assert.equal(constants.candidateStatusFilterIdsIndex.offerextended, 6);
    });
  });

  describe('auctionStatusIds', () => {
    it('should pending: 1', () => {
      assert.equal(constants.auctionStatusIds.pending, 1);
    });
    it('should approved: 2', () => {
      assert.equal(constants.auctionStatusIds.approved, 2);
    });
    it('should cancelled: 3', () => {
      assert.equal(constants.auctionStatusIds.cancelled, 3);
    });
    it('should discontinued: 4', () => {
      assert.equal(constants.auctionStatusIds.discontinued, 4);
    });
  });

  describe('stageStatusIds', () => {
    it('should pending: 1', () => {
      assert.equal(constants.stageStatusIds.pending, 1);
    });
    it('should approved: 2', () => {
      assert.equal(constants.stageStatusIds.approved, 2);
    });
    it('should inProgress: 3', () => {
      assert.equal(constants.stageStatusIds.inProgress, 3);
    });
    it('should awarding: 4', () => {
      assert.equal(constants.stageStatusIds.awarding, 4);
    });
  });

  describe('applicationStageStatusIds', () => {
    it('should application: 1', () => {
      assert.equal(constants.applicationStageStatusIds.application, 1);
    });
    it('should clarification: 2', () => {
      assert.equal(constants.applicationStageStatusIds.clarification, 2);
    });
    it('should bidding: 3', () => {
      assert.equal(constants.applicationStageStatusIds.bidding, 3);
    });
    it('should fulfillment: 4', () => {
      assert.equal(constants.applicationStageStatusIds.fulfillment, 4);
    });
    it('should completed: 5', () => {
      assert.equal(constants.applicationStageStatusIds.completed, 5);
    });
  });

  describe('applicationStageStatusIdsCompetitiveIndex', () => {
    it('should application: 0', () => {
      assert.equal(
        constants.applicationStageStatusIdsCompetitiveIndex.application,
        0,
      );
    });
    it('should clarification: 1', () => {
      assert.equal(
        constants.applicationStageStatusIdsCompetitiveIndex.clarification,
        1,
      );
    });
    it('should bidding: 2', () => {
      assert.equal(
        constants.applicationStageStatusIdsCompetitiveIndex.bidding,
        2,
      );
    });
    it('should fulfillment: 3', () => {
      assert.equal(
        constants.applicationStageStatusIdsCompetitiveIndex.fulfillment,
        3,
      );
    });
    it('should completed: 4', () => {
      assert.equal(
        constants.applicationStageStatusIdsCompetitiveIndex.completed,
        4,
      );
    });
  });

  describe('applicationStageStatusIdsSuccessFeeIndex', () => {
    it('should fulfillment: 0', () => {
      assert.equal(
        constants.applicationStageStatusIdsSuccessFeeIndex.fulfillment,
        0,
      );
    });
    it('should completed: 1', () => {
      assert.equal(
        constants.applicationStageStatusIdsSuccessFeeIndex.completed,
        1,
      );
    });
  });

  describe('competitiveApplicationStageStatusIdList', () => {
    const competitiveApplicationStageStatusIdList = [1, 2, 3, 4, 5];

    competitiveApplicationStageStatusIdList.forEach(id => {
      it(`should competitiveApplicationStageStatusIdList: ${id} included`, () => {
        assert.include(constants.competitiveApplicationStageStatusIdList, id);
      });
    });
  });

  describe('successFeeApplicationStageStatusIdList', () => {
    const successFeeApplicationStageStatusIdList = [4, 5];

    successFeeApplicationStageStatusIdList.forEach(id => {
      it(`should successFeeApplicationStageStatusIdList: ${id} included`, () => {
        assert.include(constants.competitiveApplicationStageStatusIdList, id);
      });
    });
  });
});
