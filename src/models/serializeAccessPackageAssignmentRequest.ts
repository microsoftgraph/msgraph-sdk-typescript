import type {AccessPackage} from './accessPackage';
import type {AccessPackageAnswer} from './accessPackageAnswer';
import type {AccessPackageAssignment} from './accessPackageAssignment';
import type {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import type {AccessPackageSubject} from './accessPackageSubject';
import type {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import type {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAnswer} from './serializeAccessPackageAnswer';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeCustomExtensionCalloutInstance} from './serializeCustomExtensionCalloutInstance';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequest(writer: SerializationWriter, accessPackageAssignmentRequest: AccessPackageAssignmentRequest | undefined = {} as AccessPackageAssignmentRequest) : void {
        serializeEntity(writer, accessPackageAssignmentRequest)
        writer.writeObjectValue<AccessPackage>("accessPackage", accessPackageAssignmentRequest.accessPackage, serializeAccessPackage);
        writer.writeCollectionOfObjectValues<AccessPackageAnswer>("answers", accessPackageAssignmentRequest.answers, serializeAccessPackageAnswer);
        writer.writeObjectValue<AccessPackageAssignment>("assignment", accessPackageAssignmentRequest.assignment, serializeAccessPackageAssignment);
        writer.writeDateValue("completedDateTime", accessPackageAssignmentRequest.completedDateTime);
        writer.writeDateValue("createdDateTime", accessPackageAssignmentRequest.createdDateTime);
        writer.writeCollectionOfObjectValues<CustomExtensionCalloutInstance>("customExtensionCalloutInstances", accessPackageAssignmentRequest.customExtensionCalloutInstances, serializeCustomExtensionCalloutInstance);
        writer.writeObjectValue<AccessPackageSubject>("requestor", accessPackageAssignmentRequest.requestor, serializeAccessPackageSubject);
        writer.writeEnumValue<AccessPackageRequestType>("requestType", accessPackageAssignmentRequest.requestType);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", accessPackageAssignmentRequest.schedule, serializeEntitlementManagementSchedule);
        writer.writeEnumValue<AccessPackageRequestState>("state", accessPackageAssignmentRequest.state);
        writer.writeStringValue("status", accessPackageAssignmentRequest.status);
}
