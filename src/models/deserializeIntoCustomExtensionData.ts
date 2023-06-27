import {CustomExtensionData} from './customExtensionData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionData(customExtensionData: CustomExtensionData | undefined = {} as CustomExtensionData) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionData.odataType = n.getStringValue(); },
    }
}
