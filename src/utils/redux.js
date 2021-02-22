const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const createAction = (type, data = {}, cb) => {
  return { type, payload: data, cb };
};

export const createActionTypes = type => ({
  request: (data, cb) => createAction(type.REQUEST, data, cb),
  success: (data, cb) => createAction(type.SUCCESS, data, cb),
  failure: (error, cb) => createAction(type.FAILURE, error, cb)
});
