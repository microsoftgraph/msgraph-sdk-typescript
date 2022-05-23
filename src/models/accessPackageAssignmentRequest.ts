import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageSubject} from './accessPackageSubject';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {Entity} from './entity';

export interface AccessPackageAssignmentRequest extends Entity{
    /** The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand. */
    accessPackage?:AccessPackage | undefined;
    /** For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand. */
    assignment?:AccessPackageAssignment | undefined;
    /** The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    completedDateTime?:Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?:Date | undefined;
    /** The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand. */
    requestor?:AccessPackageSubject | undefined;
    /** One of UserAdd, UserRemove, AdminAdd, AdminRemove or SystemRemove. A request from the user themselves would have requestType of UserAdd or UserRemove. Read-only. */
    requestType?:AccessPackageRequestType | undefined;
    /** The range of dates that access is to be assigned to the requestor. Read-only. */
    schedule?:EntitlementManagementSchedule | undefined;
    /** The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only. */
    state?:AccessPackageRequestState | undefined;
    /** More information on the request processing status. Read-only. */
    status?:string | undefined;
}
