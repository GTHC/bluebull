import crud from './utils/crud';

const url = "https://us-central1-gthc-kville.cloudfunctions.net"

const getUser = (id) => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_USER',
      end: 'END_GET_USER',
      fail: 'FAILED_GET_USER',
    },
    method: 'GET',
    url: `/user?id=${id}`
  })
);

const putUser = (data) =>  (
  crud({
    dispatch: {
      begin: 'BEGIN_PUT_USER',
      end: 'END_PUT_USER',
      fail: 'FAILED_PUT_USER',
    },
    method: 'PUT',
    url: `/user`,
    data
  })
);

export {
  getUser,
  putUser
}
