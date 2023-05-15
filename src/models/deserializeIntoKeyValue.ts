import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValue(keyValue: KeyValue | undefined = {} as KeyValue) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { keyValue.key = n.getStringValue(); },
        "@odata.type": n => { keyValue.odataType = n.getStringValue(); },
        "value": n => { keyValue.value = n.getStringValue(); },
    }
}
