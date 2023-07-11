import {CustomExtensionCalloutInstance} from './customExtensionCalloutInstance';
import {CustomExtensionCalloutInstanceStatus} from './customExtensionCalloutInstanceStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionCalloutInstance(writer: SerializationWriter, customExtensionCalloutInstance: CustomExtensionCalloutInstance | undefined = {} as CustomExtensionCalloutInstance) : void {
        writer.writeStringValue("customExtensionId", customExtensionCalloutInstance.customExtensionId);
        writer.writeStringValue("detail", customExtensionCalloutInstance.detail);
        writer.writeStringValue("externalCorrelationId", customExtensionCalloutInstance.externalCorrelationId);
        writer.writeStringValue("id", customExtensionCalloutInstance.id);
        writer.writeStringValue("@odata.type", customExtensionCalloutInstance.odataType);
        writer.writeEnumValue<CustomExtensionCalloutInstanceStatus>("status", customExtensionCalloutInstance.status);
        writer.writeAdditionalData(customExtensionCalloutInstance.additionalData);
}
