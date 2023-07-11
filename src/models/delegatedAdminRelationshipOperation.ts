import {DelegatedAdminRelationshipOperationType} from './delegatedAdminRelationshipOperationType';
import {Entity} from './entity';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipOperation extends Entity, Parsable {
    /**
     * The time in ISO 8601 format and in UTC time when the long-running operation was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The data (payload) for the operation. Read-only.
     */
    data?: string | undefined;
    /**
     * The time in ISO 8601 format and in UTC time when the long-running operation was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The operationType property
     */
    operationType?: DelegatedAdminRelationshipOperationType | undefined;
    /**
     * The status property
     */
    status?: LongRunningOperationStatus | undefined;
}
