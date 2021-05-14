module.exports = {
  docs: {
    'Overview': [
      'installation',
      'defining-entities',
      'relationships',
      'entity-manager',
      'unit-of-work',
    ],
    'Fundamentals': [
      'identity-map',
      'entity-references',
      'collections',
      'repositories',
      'transactions',
      'inheritance-mapping',
      'cascading',
      'filters',
      'deployment',
      'query-builder',
      'caching',
      'debugging',
    ],
    'Advanced Features': [
      'nested-populate',
      'query-conditions',
      'propagation',
      'loading-strategies',
      'serializing',
      'entity-helper',
      'lifecycle-hooks',
      'composite-keys',
      'custom-types',
      'embeddables',
      'entity-schema',
      'json-properties',
      'metadata-providers',
      'metadata-cache',
      'schema-generator',
      'entity-generator',
      'naming-strategy',
      'property-validation',
      'migrations',
      'seeder',
      'read-connections',
    ],
    'Reference': [
      { type: 'link', label: 'EntityManager API', href: '/docs/api/classes/core.entitymanager' },
      { type: 'link', label: 'EntityRepository API', href: '/docs/api/classes/core.entityrepository' },
      { type: 'link', label: 'QueryBuilder API', href: '/docs/api/classes/knex.querybuilder' },
      'decorators',
      'configuration',
    ],
    'Usage with Different Drivers': [
      'usage-with-sql',
      'usage-with-mongo',
    ],
    'Recipes': [
      'quick-start',
      'usage-with-nestjs',
      'usage-with-js',
      'usage-with-babel',
      'entity-constructors',
      'multiple-schemas',
      'using-bigint-pks',
      'async-local-storage',
      'custom-driver',
    ],
    'Example Integrations': [
      { type: 'link', label: 'Express + MongoDB + TypeScript', href: 'https://github.com/mikro-orm/express-ts-example-app' },
      { type: 'link', label: 'NestJS + MySQL + TypeScript', href: 'https://github.com/mikro-orm/nestjs-example-app' },
      { type: 'link', label: 'RealWorld example app (Nest + MySQL)', href: 'https://github.com/mikro-orm/nestjs-realworld-example-app' },
      { type: 'link', label: 'Express + MongoDB + JavaScript', href: 'https://github.com/mikro-orm/express-js-example-app' },
      { type: 'link', label: 'Koa + SQLite + TypeScript', href: 'https://github.com/mikro-orm/koa-ts-example-app' },
      { type: 'link', label: 'Inversify + PostgreSQL', href: 'https://github.com/PodaruDragos/inversify-example-app' },
      { type: 'link', label: 'NextJS + MySQL', href: 'https://github.com/jonahallibone/mikro-orm-nextjs' },
      { type: 'link', label: 'GraphQL + PostgreSQL + TypeScript', href: 'https://github.com/driescroons/mikro-orm-graphql-example' },
    ],
  },
  API: require('./typedoc-sidebar.js'),
};
