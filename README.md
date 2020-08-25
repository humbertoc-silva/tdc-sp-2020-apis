# tdc-sp-2020-apis

## Design Guide

### Examples Rules
- Every request body must have an example.
- Every response must have an example.

### Security Rules
- The API must be protected with the default security schemes:
    - APIKeyAuth: API key scheme.
    - BearerTokenAuth: Bearer token scheme.

### Pagination Rules
- All collection routes using GET operation must have the pageOffset and pageLimit pagination parameters.

## References

- [Spectral](https://meta.stoplight.io/docs/spectral/README.md)
- [Jenkins](https://www.jenkins.io/)
- [Swagger Editor](https://editor.swagger.io/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

