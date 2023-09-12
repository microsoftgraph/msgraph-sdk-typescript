import { type Dictionary } from './dictionary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDictionary(dictionary: Dictionary | undefined = {} as Dictionary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { dictionary.odataType = n.getStringValue(); },
    }
}
