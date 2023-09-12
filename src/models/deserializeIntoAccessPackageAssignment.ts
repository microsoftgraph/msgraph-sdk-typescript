import { type AccessPackage } from './accessPackage';
import { type AccessPackageAssignment } from './accessPackageAssignment';
import { type AccessPackageAssignmentPolicy } from './accessPackageAssignmentPolicy';
import { AccessPackageAssignmentState } from './accessPackageAssignmentState';
import { type AccessPackageSubject } from './accessPackageSubject';
import { createAccessPackageAssignmentPolicyFromDiscriminatorValue } from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import { createAccessPackageFromDiscriminatorValue } from './createAccessPackageFromDiscriminatorValue';
import { createAccessPackageSubjectFromDiscriminatorValue } from './createAccessPackageSubjectFromDiscriminatorValue';
import { createCustomExtensionCalloutInstanceFromDiscriminatorValue } from './createCustomExtensionCalloutInstanceFromDiscriminatorValue';
import { createEntitlementManagementScheduleFromDiscriminatorValue } from './createEntitlementManagementScheduleFromDiscriminatorValue';
import { type CustomExtensionCalloutInstance } from './customExtensionCalloutInstance';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EntitlementManagementSchedule } from './entitlementManagementSchedule';
import { serializeAccessPackage } from './serializeAccessPackage';
import { serializeAccessPackageAssignmentPolicy } from './serializeAccessPackageAssignmentPolicy';
import { serializeAccessPackageSubject } from './serializeAccessPackageSubject';
import { serializeCustomExtensionCalloutInstance } from './serializeCustomExtensionCalloutInstance';
import { serializeEntitlementManagementSchedule } from './serializeEntitlementManagementSchedule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignment(accessPackageAssignment: AccessPackageAssignment | undefined = {} as AccessPackageAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageAssignment),
        "accessPackage": n => { accessPackageAssignment.accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "assignmentPolicy": n => { accessPackageAssignment.assignmentPolicy = n.getObjectValue<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
        "customExtensionCalloutInstances": n => { accessPackageAssignment.customExtensionCalloutInstances = n.getCollectionOfObjectValues<CustomExtensionCalloutInstance>(createCustomExtensionCalloutInstanceFromDiscriminatorValue); },
        "expiredDateTime": n => { accessPackageAssignment.expiredDateTime = n.getDateValue(); },
        "schedule": n => { accessPackageAssignment.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
        "state": n => { accessPackageAssignment.state = n.getEnumValue<AccessPackageAssignmentState>(AccessPackageAssignmentState); },
        "status": n => { accessPackageAssignment.status = n.getStringValue(); },
        "target": n => { accessPackageAssignment.target = n.getObjectValue<AccessPackageSubject>(createAccessPackageSubjectFromDiscriminatorValue); },
    }
}
