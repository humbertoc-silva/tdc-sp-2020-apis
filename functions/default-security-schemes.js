module.exports = (targetVal, _opts, paths) => {
  const results = [];
  const rootPath = paths.target !== void 0 ? paths.target : paths.given;
  
  if (targetVal.APIKeyAuth && targetVal.BearerTokenAuth) {
    const apiKeyAuth = targetVal.APIKeyAuth;
    const bearerTokenAuth = targetVal.BearerTokenAuth;

    if (apiKeyAuth.type !== 'apiKey' || apiKeyAuth.name !== 'X-API-Key' || apiKeyAuth.in !== 'header') {
      results.push(
        {
          message: 'APIKeyAuth must have the following fields: `type: apiKey`, `name: X-API-Key` and `in: header`.',
          path: [...rootPath, "APIKeyAuth"]
        }  
      );
    }

    if (bearerTokenAuth.type !== 'http' || bearerTokenAuth.scheme !== 'bearer' || bearerTokenAuth.bearerFormat !== 'JWT') {
      results.push(
        {
          message: 'BearerTokenAuth must have the following fields: `type: http`, `scheme: bearer` and `bearerFormat: JWT`.',
          path: [...rootPath, "BearerTokenAuth"]
        }  
      );
    }
  } else {
    results.push(
      {
        message: 'APIKeyAuth and BearerTokenAuth must be defined as security schemes.'
      }
    );
  }

  return results;
};
