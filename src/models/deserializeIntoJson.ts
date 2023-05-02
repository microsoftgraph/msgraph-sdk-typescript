import {Json} from './json';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoJson(json: Json | undefined = {} as Json) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { json.odataType = n.getStringValue(); },
    }
}
