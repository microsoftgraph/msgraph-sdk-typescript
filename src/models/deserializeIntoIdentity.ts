import { type Identity } from './identity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentity(identity: Identity | undefined = {} as Identity) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { identity.displayName = n.getStringValue(); },
        "id": n => { identity.id = n.getStringValue(); },
        "@odata.type": n => { identity.odataType = n.getStringValue(); },
    }
}
