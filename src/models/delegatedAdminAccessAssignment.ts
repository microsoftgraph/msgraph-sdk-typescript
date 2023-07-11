import {DelegatedAdminAccessAssignmentStatus} from './delegatedAdminAccessAssignmentStatus';
import {DelegatedAdminAccessContainer} from './delegatedAdminAccessContainer';
import {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminAccessAssignment extends Entity, Parsable {
    /**
     * The accessContainer property
     */
    accessContainer?: DelegatedAdminAccessContainer | undefined;
    /**
     * The accessDetails property
     */
    accessDetails?: DelegatedAdminAccessDetails | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the access assignment was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The date and time in ISO 8601 and in UTC time when this access assignment was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The status of the access assignment. Read-only. The possible values are: pending, active, deleting, deleted, error, unknownFutureValue.
     */
    status?: DelegatedAdminAccessAssignmentStatus | undefined;
}
