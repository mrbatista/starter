import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';

import {AuditLog} from '../models';
import { MemoryDataSource } from '../datasources';

export class AuditLogRepository extends DefaultCrudRepository<
  AuditLog,
  typeof AuditLog.prototype.id
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(AuditLog, dataSource);
  }
}