import {AlteredQueryToken} from './alteredQueryToken';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlteredQueryToken(alteredQueryToken: AlteredQueryToken | undefined = {} as AlteredQueryToken) : Record<string, (node: ParseNode) => void> {
    return {
        "length": n => { alteredQueryToken.length = n.getNumberValue(); },
        "@odata.type": n => { alteredQueryToken.odataType = n.getStringValue(); },
        "offset": n => { alteredQueryToken.offset = n.getNumberValue(); },
        "suggestion": n => { alteredQueryToken.suggestion = n.getStringValue(); },
    }
}
