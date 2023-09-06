import { type Json } from './json';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoJson(json: Json | undefined = {} as Json) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { json.odataType = n.getStringValue(); },
    }
}
