import { type KeyValuePair } from './keyValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValuePair(keyValuePair: KeyValuePair | undefined = {} as KeyValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { keyValuePair.name = n.getStringValue(); },
        "@odata.type": n => { keyValuePair.odataType = n.getStringValue(); },
        "value": n => { keyValuePair.value = n.getStringValue(); },
    }
}
