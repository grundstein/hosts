import { is } from '@magic/test'

import config, { env, hosts } from '../src/index.mjs'

export default [
  { fn: is.object(config), info: 'config is an object' },
  { fn: is.object(config.env), info: 'config.env is an object' },
  { fn: is.object(config.hosts), info: 'config.hosts is an object' },

  { fn: is.deep.equal(config.env, env), info: 'config.env and env are equal' },
  { fn: is.empty(env), expect: false, info: 'env is not empty' },

  { fn: is.deep.equal(config.hosts, hosts), info: 'config.hosts and hosts are equal' },
  { fn: is.empty(hosts), expect: false, info: 'hosts is not empty' },
]
