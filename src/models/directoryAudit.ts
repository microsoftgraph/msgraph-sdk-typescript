import {AuditActivityInitiator} from './auditActivityInitiator';
import {Entity} from './entity';
import {KeyValue} from './keyValue';
import {OperationResult} from './operationResult';
import {TargetResource} from './targetResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryAudit extends Entity, Parsable {
    /**
     * Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    activityDateTime?: Date | undefined;
    /**
     * Indicates the activity name or the operation name (examples: 'Create User' and 'Add member to group'). For a list of activities logged, refer to Azure AD audit log categories and activities.
     */
    activityDisplayName?: string | undefined;
    /**
     * Indicates additional details on the activity.
     */
    additionalDetails?: KeyValue[] | undefined;
    /**
     * Indicates which resource category that's targeted by the activity. For example: UserManagement, GroupManagement, ApplicationManagement, RoleManagement. For a list of categories for activities logged, refer to Azure AD audit log categories and activities.
     */
    category?: string | undefined;
    /**
     * Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs across services.
     */
    correlationId?: string | undefined;
    /**
     * The initiatedBy property
     */
    initiatedBy?: AuditActivityInitiator | undefined;
    /**
     * Indicates information on which service initiated the activity (For example: Self-service Password Management, Core Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
     */
    loggedByService?: string | undefined;
    /**
     * Indicates the type of operation that was performed. The possible values include but are not limited to the following: Add, Assign, Update, Unassign, and Delete.
     */
    operationType?: string | undefined;
    /**
     * Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
     */
    result?: OperationResult | undefined;
    /**
     * Indicates the reason for failure if the result is failure or timeout.
     */
    resultReason?: string | undefined;
    /**
     * Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device, Directory, App, Role, Group, Policy or Other.
     */
    targetResources?: TargetResource[] | undefined;
}
