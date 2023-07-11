import {AccessPackageAssignmentRequestWorkflowExtension} from './accessPackageAssignmentRequestWorkflowExtension';
import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from './serializeCustomExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestWorkflowExtension(writer: SerializationWriter, accessPackageAssignmentRequestWorkflowExtension: AccessPackageAssignmentRequestWorkflowExtension | undefined = {} as AccessPackageAssignmentRequestWorkflowExtension) : void {
        serializeCustomCalloutExtension(writer, accessPackageAssignmentRequestWorkflowExtension)
        writer.writeObjectValue<CustomExtensionCallbackConfiguration>("callbackConfiguration", accessPackageAssignmentRequestWorkflowExtension.callbackConfiguration, serializeCustomExtensionCallbackConfiguration);
        writer.writeStringValue("createdBy", accessPackageAssignmentRequestWorkflowExtension.createdBy);
        writer.writeDateValue("createdDateTime", accessPackageAssignmentRequestWorkflowExtension.createdDateTime);
        writer.writeStringValue("lastModifiedBy", accessPackageAssignmentRequestWorkflowExtension.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", accessPackageAssignmentRequestWorkflowExtension.lastModifiedDateTime);
}
