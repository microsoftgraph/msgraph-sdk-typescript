import {AccessPackageAssignmentWorkflowExtension} from './accessPackageAssignmentWorkflowExtension';
import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from './serializeCustomExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentWorkflowExtension(writer: SerializationWriter, accessPackageAssignmentWorkflowExtension: AccessPackageAssignmentWorkflowExtension | undefined = {} as AccessPackageAssignmentWorkflowExtension) : void {
        serializeCustomCalloutExtension(writer, accessPackageAssignmentWorkflowExtension)
        writer.writeObjectValue<CustomExtensionCallbackConfiguration>("callbackConfiguration", accessPackageAssignmentWorkflowExtension.callbackConfiguration, serializeCustomExtensionCallbackConfiguration);
        writer.writeStringValue("createdBy", accessPackageAssignmentWorkflowExtension.createdBy);
        writer.writeDateValue("createdDateTime", accessPackageAssignmentWorkflowExtension.createdDateTime);
        writer.writeStringValue("lastModifiedBy", accessPackageAssignmentWorkflowExtension.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", accessPackageAssignmentWorkflowExtension.lastModifiedDateTime);
}
