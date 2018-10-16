import crud from './utils/crud';

const getTeam = (captain) => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_TEAM',
      end: 'END_GET_TEAM',
      fail: 'FAILED_GET_TEAM',
    },
    method: 'GET',
    url: `/team?id=${captain}`,
  })
);

const putTeam = (data) => (
  crud({
    dispatch: {
      begin: 'BEGIN_PUT_TEAM',
      end: 'END_PUT_TEAM',
      fail: 'FAILED_PUT_TEAM',
    },
    method: 'PUT',
    url: `/team`,
    data,
  })
);

const postTeam = (data) => (
  crud({
    dispatch: {
      begin: 'BEGIN_POST_TEAM',
      end: 'END_POST_TEAM',
      fail: 'FAILED_POST_TEAM',
    },
    method: 'POST',
    url: `/team`,
    data,
  })
);

export {
  getTeam,
  putTeam,
  postTeam,
};
