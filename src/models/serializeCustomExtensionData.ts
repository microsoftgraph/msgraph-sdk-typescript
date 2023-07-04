import {CustomExtensionData} from './customExtensionData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionData(writer: SerializationWriter, customExtensionData: CustomExtensionData | undefined = {} as CustomExtensionData) : void {
        writer.writeStringValue("@odata.type", customExtensionData.odataType);
        writer.writeAdditionalData(customExtensionData.additionalData);
}
