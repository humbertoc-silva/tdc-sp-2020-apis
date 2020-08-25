module.exports = (targetVal, _opts, paths) => {
  const results = [];
  const rootPath = paths.target !== void 0 ? paths.target : paths.given;

  for (const path in targetVal) {
    if (/^[\/a-zA-Z0-9]+(?!(?:\/\{.+\}))$/.test(path)) {
      const pathObject = targetVal[path];
      
      if (pathObject.get) {
        if (pathObject.get.parameters) {
          const parameters = pathObject.get.parameters;

          const pageOffsetFound = parameters.find(p => {
            return p.name === "pageOffset" && p.in === "query" && p.schema && p.schema.type === "integer";
          });
          
          const pageLimitFound = parameters.find(p => {
            return p.name === "pageLimit" && p.in === "query" && p.schema && p.schema.type === "integer";
          });

          if (!(pageOffsetFound && pageLimitFound)) {
            results.push(
              {
                message: `The collection route "${path}" must have the pageOffset and pageLimit pagination parameters.`,
                path: [...rootPath, path]
              }  
            );
          }
        } else {
          results.push(
            {
              message: `The collection route "${path}" must define the parameters field`,
              path: [...rootPath, path]
            }  
          );
        }
      }
    }
  }

  return results;
};