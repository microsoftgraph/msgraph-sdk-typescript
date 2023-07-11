import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentState} from './accessPackageAssignmentState';
import {AccessPackageSubject} from './accessPackageSubject';
import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeCustomExtensionCalloutInstance} from './serializeCustomExtensionCalloutInstance';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignment(writer: SerializationWriter, accessPackageAssignment: AccessPackageAssignment | undefined = {} as AccessPackageAssignment) : void {
        serializeEntity(writer, accessPackageAssignment)
        writer.writeObjectValue<AccessPackage>("accessPackage", accessPackageAssignment.accessPackage, serializeAccessPackage);
        writer.writeObjectValue<AccessPackageAssignmentPolicy>("assignmentPolicy", accessPackageAssignment.assignmentPolicy, serializeAccessPackageAssignmentPolicy);
        writer.writeCollectionOfObjectValues<CustomExtensionCalloutInstance>("customExtensionCalloutInstances", accessPackageAssignment.customExtensionCalloutInstances, serializeCustomExtensionCalloutInstance);
        writer.writeDateValue("expiredDateTime", accessPackageAssignment.expiredDateTime);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", accessPackageAssignment.schedule, serializeEntitlementManagementSchedule);
        writer.writeEnumValue<AccessPackageAssignmentState>("state", accessPackageAssignment.state);
        writer.writeStringValue("status", accessPackageAssignment.status);
        writer.writeObjectValue<AccessPackageSubject>("target", accessPackageAssignment.target, serializeAccessPackageSubject);
}
