module.exports = (targetVal, _opts, paths) => {
  const results = [];
  const rootPath = paths.target !== void 0 ? paths.target : paths.given;

  for (const path in targetVal) {
    if (/^[\/a-zA-Z0-9]+(?!(?:\/\{.+\}))$/.test(path)) {
      const pathObject = targetVal[path];
      
      if (pathObject.get && pathObject.get.parameters) {
        const parameters = pathObject.get.parameters;

        const pageOffsetFound = parameters.find(p => {
          return p.name === "pageOffset" && p.in === "query" && p.schema && p.schema.type === "integer";
        });
        
        const pageLimitFound = parameters.find(p => {
          return p.name === "pageLimit" && p.in === "query" && p.schema && p.schema.type === "integer";
        });

        if (!(pageOffsetFound && pageLimitFound)) {
          
        }
      }
    }
  }

  return results;
};