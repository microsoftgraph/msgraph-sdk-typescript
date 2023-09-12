import { type KeyValue } from './keyValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValue(keyValue: KeyValue | undefined = {} as KeyValue) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { keyValue.key = n.getStringValue(); },
        "@odata.type": n => { keyValue.odataType = n.getStringValue(); },
        "value": n => { keyValue.value = n.getStringValue(); },
    }
}
