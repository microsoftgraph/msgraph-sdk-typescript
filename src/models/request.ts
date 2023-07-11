import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Request extends Entity, Parsable {
    /**
     * The identifier of the approval of the request.
     */
    approvalId?: string | undefined;
    /**
     * The request completion date time.
     */
    completedDateTime?: Date | undefined;
    /**
     * The principal that created the request.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The request creation date time.
     */
    createdDateTime?: Date | undefined;
    /**
     * Free text field to define any custom data for the request. Not used.
     */
    customData?: string | undefined;
    /**
     * The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.
     */
    status?: string | undefined;
}
