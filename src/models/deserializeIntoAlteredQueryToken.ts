import { type AlteredQueryToken } from './alteredQueryToken';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlteredQueryToken(alteredQueryToken: AlteredQueryToken | undefined = {} as AlteredQueryToken) : Record<string, (node: ParseNode) => void> {
    return {
        "length": n => { alteredQueryToken.length = n.getNumberValue(); },
        "@odata.type": n => { alteredQueryToken.odataType = n.getStringValue(); },
        "offset": n => { alteredQueryToken.offset = n.getNumberValue(); },
        "suggestion": n => { alteredQueryToken.suggestion = n.getStringValue(); },
    }
}
