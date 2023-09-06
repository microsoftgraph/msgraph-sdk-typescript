import { type StringKeyObjectValuePair } from './stringKeyObjectValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyObjectValuePair(stringKeyObjectValuePair: StringKeyObjectValuePair | undefined = {} as StringKeyObjectValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyObjectValuePair.key = n.getStringValue(); },
        "@odata.type": n => { stringKeyObjectValuePair.odataType = n.getStringValue(); },
    }
}
