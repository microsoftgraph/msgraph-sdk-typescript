import {VerifiedDomain} from './verifiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifiedDomain(verifiedDomain: VerifiedDomain | undefined = {} as VerifiedDomain) : Record<string, (node: ParseNode) => void> {
    return {
        "capabilities": n => { verifiedDomain.capabilities = n.getStringValue(); },
        "isDefault": n => { verifiedDomain.isDefault = n.getBooleanValue(); },
        "isInitial": n => { verifiedDomain.isInitial = n.getBooleanValue(); },
        "name": n => { verifiedDomain.name = n.getStringValue(); },
        "@odata.type": n => { verifiedDomain.odataType = n.getStringValue(); },
        "type": n => { verifiedDomain.type = n.getStringValue(); },
    }
}
