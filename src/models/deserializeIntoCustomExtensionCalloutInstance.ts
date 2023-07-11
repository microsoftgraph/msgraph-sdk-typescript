import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {CustomExtensionCalloutInstanceStatus} from './customExtensionCalloutInstanceStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionCalloutInstance(customExtensionCalloutInstance: CustomExtensionCalloutInstance | undefined = {} as CustomExtensionCalloutInstance) : Record<string, (node: ParseNode) => void> {
    return {
        "customExtensionId": n => { customExtensionCalloutInstance.customExtensionId = n.getStringValue(); },
        "detail": n => { customExtensionCalloutInstance.detail = n.getStringValue(); },
        "externalCorrelationId": n => { customExtensionCalloutInstance.externalCorrelationId = n.getStringValue(); },
        "id": n => { customExtensionCalloutInstance.id = n.getStringValue(); },
        "@odata.type": n => { customExtensionCalloutInstance.odataType = n.getStringValue(); },
        "status": n => { customExtensionCalloutInstance.status = n.getEnumValue<CustomExtensionCalloutInstanceStatus>(CustomExtensionCalloutInstanceStatus); },
    }
}
