import {AlternativeSecurityId} from './alternativeSecurityId';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlternativeSecurityId(alternativeSecurityId: AlternativeSecurityId | undefined = {} as AlternativeSecurityId) : Record<string, (node: ParseNode) => void> {
    return {
        "identityProvider": n => { alternativeSecurityId.identityProvider = n.getStringValue(); },
        "key": n => { alternativeSecurityId.key = n.getStringValue(); },
        "@odata.type": n => { alternativeSecurityId.odataType = n.getStringValue(); },
        "type": n => { alternativeSecurityId.type = n.getNumberValue(); },
    }
}
