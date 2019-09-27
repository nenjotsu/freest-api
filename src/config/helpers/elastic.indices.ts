type IndexEngagement =
  | 'uat_engagements_dashboard'
  | 'uat_engagements_dashboard_3'
  | 'production_engagements_dashboard'
  | 'production_engagements_dashboard_3';

type IndexCandidate = 'uat_candidates' | 'production_candidates';

type Environment = 'uat' | 'production';

interface Index<T> {
  indexName: T;
  type: string;
}

interface ListOfIndex {
  engagementsDashboard: Index<IndexEngagement>;
  candidates: Index<IndexCandidate>;
}

const getEngagementsDashboard = (indexName: IndexEngagement) => {
  return {
    indexName,
    type: 'engagement',
  };
};

const getCandidates = (indexName: IndexCandidate) => {
  return {
    indexName,
    type: 'candidate',
  };
};

export const getElasticIndices = (env: Environment = 'uat'): ListOfIndex => {
  const defaultIndex = {
    engagementsDashboard: getEngagementsDashboard(
      'uat_engagements_dashboard_3',
    ),
    candidates: getCandidates('uat_candidates'),
  };

  switch (env) {
    case 'production':
      return {
        engagementsDashboard: getEngagementsDashboard(
          'production_engagements_dashboard',
        ),
        candidates: getCandidates('production_candidates'),
      };

    default:
      return defaultIndex;
  }
};
