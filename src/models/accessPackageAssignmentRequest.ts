import {AccessPackage} from './accessPackage';
import {AccessPackageAnswer} from './accessPackageAnswer';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageSubject} from './accessPackageSubject';
import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentRequest extends Entity, Parsable {
    /**
     * The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand.
     */
    accessPackage?: AccessPackage | undefined;
    /**
     * Answers provided by the requestor to accessPackageQuestions asked of them at the time of request.
     */
    answers?: AccessPackageAnswer[] | undefined;
    /**
     * For a requestType of userAdd or adminAdd, this is an access package assignment requested to be created.  For a requestType of userRemove, adminRemove or systemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
     */
    assignment?: AccessPackageAssignment | undefined;
    /**
     * The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    completedDateTime?: Date | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter.
     */
    createdDateTime?: Date | undefined;
    /**
     * The customExtensionCalloutInstances property
     */
    customExtensionCalloutInstances?: CustomExtensionCalloutInstance[] | undefined;
    /**
     * The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
     */
    requestor?: AccessPackageSubject | undefined;
    /**
     * The type of the request. The possible values are: notSpecified, userAdd, UserExtend, userUpdate, userRemove, adminAdd, adminUpdate, adminRemove, systemAdd, systemUpdate, systemRemove, onBehalfAdd (not supported), unknownFutureValue. A request from the user themselves would have requestType of userAdd, userUpdate or userRemove. This property cannot be changed once set.
     */
    requestType?: AccessPackageRequestType | undefined;
    /**
     * The range of dates that access is to be assigned to the requestor. This property cannot be changed once set.
     */
    schedule?: EntitlementManagementSchedule | undefined;
    /**
     * The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only. Supports $filter (eq).
     */
    state?: AccessPackageRequestState | undefined;
    /**
     * More information on the request processing status. Read-only.
     */
    status?: string | undefined;
}
