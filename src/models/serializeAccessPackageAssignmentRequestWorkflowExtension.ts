import { type AccessPackageAssignmentRequestWorkflowExtension } from './accessPackageAssignmentRequestWorkflowExtension';
import { type CustomExtensionCallbackConfiguration } from './customExtensionCallbackConfiguration';
import { serializeCustomCalloutExtension } from './serializeCustomCalloutExtension';
import { serializeCustomExtensionCallbackConfiguration } from './serializeCustomExtensionCallbackConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestWorkflowExtension(writer: SerializationWriter, accessPackageAssignmentRequestWorkflowExtension: AccessPackageAssignmentRequestWorkflowExtension | undefined = {} as AccessPackageAssignmentRequestWorkflowExtension) : void {
        serializeCustomCalloutExtension(writer, accessPackageAssignmentRequestWorkflowExtension)
        writer.writeObjectValue<CustomExtensionCallbackConfiguration>("callbackConfiguration", accessPackageAssignmentRequestWorkflowExtension.callbackConfiguration, serializeCustomExtensionCallbackConfiguration);
        writer.writeStringValue("createdBy", accessPackageAssignmentRequestWorkflowExtension.createdBy);
        writer.writeDateValue("createdDateTime", accessPackageAssignmentRequestWorkflowExtension.createdDateTime);
        writer.writeStringValue("lastModifiedBy", accessPackageAssignmentRequestWorkflowExtension.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", accessPackageAssignmentRequestWorkflowExtension.lastModifiedDateTime);
}
