import {StringKeyLongValuePair} from './stringKeyLongValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyLongValuePair(stringKeyLongValuePair: StringKeyLongValuePair | undefined = {} as StringKeyLongValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyLongValuePair.key = n.getStringValue(); },
        "@odata.type": n => { stringKeyLongValuePair.odataType = n.getStringValue(); },
        "value": n => { stringKeyLongValuePair.value = n.getNumberValue(); },
    }
}
