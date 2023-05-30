import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyStringValuePair(stringKeyStringValuePair: StringKeyStringValuePair | undefined = {} as StringKeyStringValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyStringValuePair.key = n.getStringValue(); },
        "@odata.type": n => { stringKeyStringValuePair.odataType = n.getStringValue(); },
        "value": n => { stringKeyStringValuePair.value = n.getStringValue(); },
    }
}
