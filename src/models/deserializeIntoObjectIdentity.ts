import {ObjectIdentity} from './objectIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectIdentity(objectIdentity: ObjectIdentity | undefined = {} as ObjectIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        "issuer": n => { objectIdentity.issuer = n.getStringValue(); },
        "issuerAssignedId": n => { objectIdentity.issuerAssignedId = n.getStringValue(); },
        "@odata.type": n => { objectIdentity.odataType = n.getStringValue(); },
        "signInType": n => { objectIdentity.signInType = n.getStringValue(); },
    }
}
