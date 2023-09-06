import { type CustomExtensionData } from './customExtensionData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionData(customExtensionData: CustomExtensionData | undefined = {} as CustomExtensionData) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionData.odataType = n.getStringValue(); },
    }
}
