import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackageSubject} from './accessPackageSubject';
import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignment extends Entity, Parsable {
    /**
     * Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     */
    accessPackage?: AccessPackage | undefined;
    /**
     * Read-only. Supports $filter (eq) on the id property and $expand query parameters.
     */
    assignmentPolicy?: AccessPackageAssignmentPolicy | undefined;
    /**
     * The customExtensionCalloutInstances property
     */
    customExtensionCalloutInstances?: CustomExtensionCalloutInstance[] | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    expiredDateTime?: Date | undefined;
    /**
     * When the access assignment is to be in place. Read-only.
     */
    schedule?: EntitlementManagementSchedule | undefined;
    /**
     * The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     */
    state?: AccessPackageAssignmentState | undefined;
    /**
     * More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.
     */
    status?: string | undefined;
    /**
     * The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     */
    target?: AccessPackageSubject | undefined;
}
