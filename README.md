# express-torm-ts-boilerplate

Service needs a .env file at the root containing the below variables (with some defaults provided)

TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_PORT = 5432
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = postgres
TYPEORM_DATABASE = boilerplate-dev
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = src/**/entities.ts
TYPEORM_MIGRATIONS = src/database/migrations/\*.ts
TYPEORM_SUBSCRIBERS = src/**/subscribers.ts
TYPEORM_ENTITIES_DIR = src/database/tempEntities
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_SUBSCRIBERS_DIR = src/database/tempSubscribers
