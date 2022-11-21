import myAxios from "../unit/axios";

/**
 * POSTdemo
 */
const postDemo = (currency: string) => {
  const data = {
    currency,
  };
  return myAxios({
    url: `/api/deal/detail`,
    method: "post",
    data,
  });
};

const getDemo = (currency: string) => {
  const data = {
    currency,
  };
  return myAxios({
    url: `/api/deal/detail`,
    method: "post",
    params: data,
  });
};

export { postDemo, getDemo };
