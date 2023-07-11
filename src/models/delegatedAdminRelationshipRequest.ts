import {DelegatedAdminRelationshipRequestAction} from './delegatedAdminRelationshipRequestAction';
import {DelegatedAdminRelationshipRequestStatus} from './delegatedAdminRelationshipRequestStatus';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedAdminRelationshipRequest extends Entity, Parsable {
    /**
     * The action property
     */
    action?: DelegatedAdminRelationshipRequestAction | undefined;
    /**
     * The date and time in ISO 8601 format and in UTC time when the relationship request was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The date and time in ISO 8601 format and UTC time when this relationship request was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The status of the request. Read-only. The possible values are: created, pending, succeeded, failed, unknownFutureValue.
     */
    status?: DelegatedAdminRelationshipRequestStatus | undefined;
}
