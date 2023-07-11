import {AccessPackageAssignmentWorkflowExtension} from './accessPackageAssignmentWorkflowExtension';
import {createCustomExtensionCallbackConfigurationFromDiscriminatorValue} from './createCustomExtensionCallbackConfigurationFromDiscriminatorValue';
import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {deserializeIntoCustomCalloutExtension} from './deserializeIntoCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from './serializeCustomExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentWorkflowExtension(accessPackageAssignmentWorkflowExtension: AccessPackageAssignmentWorkflowExtension | undefined = {} as AccessPackageAssignmentWorkflowExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomCalloutExtension(accessPackageAssignmentWorkflowExtension),
        "callbackConfiguration": n => { accessPackageAssignmentWorkflowExtension.callbackConfiguration = n.getObjectValue<CustomExtensionCallbackConfiguration>(createCustomExtensionCallbackConfigurationFromDiscriminatorValue); },
        "createdBy": n => { accessPackageAssignmentWorkflowExtension.createdBy = n.getStringValue(); },
        "createdDateTime": n => { accessPackageAssignmentWorkflowExtension.createdDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { accessPackageAssignmentWorkflowExtension.lastModifiedBy = n.getStringValue(); },
        "lastModifiedDateTime": n => { accessPackageAssignmentWorkflowExtension.lastModifiedDateTime = n.getDateValue(); },
    }
}
