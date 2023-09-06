import { type StringKeyStringValuePair } from './stringKeyStringValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyStringValuePair(stringKeyStringValuePair: StringKeyStringValuePair | undefined = {} as StringKeyStringValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyStringValuePair.key = n.getStringValue(); },
        "@odata.type": n => { stringKeyStringValuePair.odataType = n.getStringValue(); },
        "value": n => { stringKeyStringValuePair.value = n.getStringValue(); },
    }
}
