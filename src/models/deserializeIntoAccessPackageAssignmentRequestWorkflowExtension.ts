import {AccessPackageAssignmentRequestWorkflowExtension} from './accessPackageAssignmentRequestWorkflowExtension';
import {createCustomExtensionCallbackConfigurationFromDiscriminatorValue} from './createCustomExtensionCallbackConfigurationFromDiscriminatorValue';
import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {deserializeIntoCustomCalloutExtension} from './deserializeIntoCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from './serializeCustomExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestWorkflowExtension(accessPackageAssignmentRequestWorkflowExtension: AccessPackageAssignmentRequestWorkflowExtension | undefined = {} as AccessPackageAssignmentRequestWorkflowExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomCalloutExtension(accessPackageAssignmentRequestWorkflowExtension),
        "callbackConfiguration": n => { accessPackageAssignmentRequestWorkflowExtension.callbackConfiguration = n.getObjectValue<CustomExtensionCallbackConfiguration>(createCustomExtensionCallbackConfigurationFromDiscriminatorValue); },
        "createdBy": n => { accessPackageAssignmentRequestWorkflowExtension.createdBy = n.getStringValue(); },
        "createdDateTime": n => { accessPackageAssignmentRequestWorkflowExtension.createdDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { accessPackageAssignmentRequestWorkflowExtension.lastModifiedBy = n.getStringValue(); },
        "lastModifiedDateTime": n => { accessPackageAssignmentRequestWorkflowExtension.lastModifiedDateTime = n.getDateValue(); },
    }
}
