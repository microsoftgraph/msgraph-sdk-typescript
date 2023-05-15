import {Dictionary} from './dictionary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDictionary(dictionary: Dictionary | undefined = {} as Dictionary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { dictionary.odataType = n.getStringValue(); },
    }
}
