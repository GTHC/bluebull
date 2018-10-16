import crud from './utils/crud';

const getTeams = () => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_TEAM',
      end: 'END_GET_TEAM',
      fail: 'FAILED_GET_TEAM',
    },
    method: 'GET',
    url: `/teams`,
  })
);

export {
  getTeams,
};
