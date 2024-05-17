import {Constructor, Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {AuditRepositoryMixin} from '@sourceloop/audit-log';
import {MemoryDataSource} from '../datasources';
import {
  User,
  UserRelations,
} from '../models';
import { AuditLogRepository } from './audit-log.repository';

export class UserRepository extends AuditRepositoryMixin<
  User,
  typeof User.prototype.id,
  UserRelations,
  typeof User.prototype.id,
  Constructor<
    DefaultCrudRepository<
    User,
      typeof User.prototype.id,
      UserRelations
    >
  >
>(DefaultCrudRepository, {actionKey: 'User'}) {

  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
    @repository.getter(AuditLogRepository)
    public getAuditLogRepository: Getter<AuditLogRepository>,
  ) {
    super(User, dataSource);
  }
}
