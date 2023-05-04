// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'demo',
  remotes: ['mfe-auth'],
};

module.exports = moduleFederationConfig;
