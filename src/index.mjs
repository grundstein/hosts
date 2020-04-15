export const env = {
  TZ: 'Europe/Vienna',
  USERNAME: 'grundstein',
  USERHOME: '/home/grundstein',
  NVM_NODE_VERSION: 13,
  NVM_DIR: '$USERHOME/.nvm',
  GIT_URL: 'git://github.com/grundstein',
}

// Service config:
export const gps = { port: 4343, name: 'grundstein positioning service' }
export const grs = { port: 8080, name: 'grundstein redirection service' }

export const gms = { port: 2323, name: 'grundstein magic page server' }
export const gas = { port: 2324, name: 'grundstein api server' }

// export const gbs = { host: '127.0.0.1', port: 23523, name: 'grundstein build service' }
// export const ghs = { host: '127.0.0.1', port: 23524, name: 'grundstein health checker' }
// export const gul = { host: '127.0.0.1', port: 23525, name: 'grundstein universal logger' }

// hosts config, if you have multiple pods,
// duplicate the entry and add additional ips to this object.

export const hosts = {
  '127.0.0.1': {
    hostname: 'localhost',
    services: {
      gps,
      grs,
      gms,
      gas,
      // gul,
      // ghs,
      // gbs,
    },
  },
}

export const repos = {
  'dev.grundstein.it': {
    host: 'github.com',
    org: 'grundstein',
    repo: 'dev.grundstein.it',
    branch: 'master',
  },
}

export default {
  hosts,
  repos,
  env,
}
