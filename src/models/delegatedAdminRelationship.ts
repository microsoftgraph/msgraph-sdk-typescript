import type {DelegatedAdminAccessAssignment} from './delegatedAdminAccessAssignment';
import type {DelegatedAdminAccessDetails} from './delegatedAdminAccessDetails';
import type {DelegatedAdminRelationshipCustomerParticipant} from './delegatedAdminRelationshipCustomerParticipant';
import type {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import type {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipStatus} from './delegatedAdminRelationshipStatus';
import type {Entity} from './entity';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationship extends Entity, Parsable {
    /**
     * The access assignments associated with the delegated admin relationship.
     */
    accessAssignments?: DelegatedAdminAccessAssignment[] | undefined;
    /**
     * The accessDetails property
     */
    accessDetails?: DelegatedAdminAccessDetails | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the relationship became active. Read-only.
     */
    activatedDateTime?: Date | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the relationship was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The display name and unique identifier of the customer of the relationship. This is configured either by the partner at the time the relationship is created or by the system after the customer approves the relationship. Cannot be changed by the customer.
     */
    customer?: DelegatedAdminRelationshipCustomerParticipant | undefined;
    /**
     * The display name of the relationship used for ease of identification. Must be unique across all delegated admin relationships of the partner. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     */
    displayName?: string | undefined;
    /**
     * The duration of the relationship in ISO 8601 format. Must be a value between P1D and P2Y inclusive. This is set by the partner only when the relationship is in the created status and cannot be changed by the customer.
     */
    duration?: Duration | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the status of relationship changes to either terminated or expired. Calculated as endDateTime = activatedDateTime + duration. Read-only.
     */
    endDateTime?: Date | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the relationship was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The long running operations associated with the delegated admin relationship.
     */
    operations?: DelegatedAdminRelationshipOperation[] | undefined;
    /**
     * The requests associated with the delegated admin relationship.
     */
    requests?: DelegatedAdminRelationshipRequest[] | undefined;
    /**
     * The status of the relationship. Read Only. The possible values are: activating, active, approvalPending, approved, created, expired, expiring, terminated, terminating, terminationRequested, unknownFutureValue. Supports $orderBy.
     */
    status?: DelegatedAdminRelationshipStatus | undefined;
}
