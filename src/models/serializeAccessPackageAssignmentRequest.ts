import {AccessPackage} from './accessPackage';
import {AccessPackageAnswer} from './accessPackageAnswer';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageSubject} from './accessPackageSubject';
import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageAnswer} from './serializeAccessPackageAnswer';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeAccessPackageSubject} from './serializeAccessPackageSubject';
import {serializeCustomExtensionCalloutInstance} from './serializeCustomExtensionCalloutInstance';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
