export function callUrl(params, filter_set) {
  for (const key in filter_set) {
    if (filter_set[key] !== "") {
      if (filter_set[key] === 0) params = addToParam(params, key, "");
      else params = addToParam(params, key, filter_set[key]);
    }
  }

  return params;
}

function addToParam(params, newParamName, newParamValue) {
  if (newParamValue) {
    if (params) params = params + "&";
    else params = params + "?";
    params = params + newParamName + "=" + newParamValue;
  }
  return params;
}

export default {
  callUrl,
};
