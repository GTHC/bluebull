import crud from './utils/crud';

const getTeams = () => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_TEAMS',
      end: 'END_GET_TEAMS',
      fail: 'FAILED_GET_TEAMS',
    },
    method: 'GET',
    url: `/teams`,
  })
);

export {
  getTeams,
};
