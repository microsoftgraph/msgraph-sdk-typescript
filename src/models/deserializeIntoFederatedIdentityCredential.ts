import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFederatedIdentityCredential(federatedIdentityCredential: FederatedIdentityCredential | undefined = {} as FederatedIdentityCredential) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(federatedIdentityCredential),
        "audiences": n => { federatedIdentityCredential.audiences = n.getCollectionOfPrimitiveValues<string>(); },
        "description": n => { federatedIdentityCredential.description = n.getStringValue(); },
        "issuer": n => { federatedIdentityCredential.issuer = n.getStringValue(); },
        "name": n => { federatedIdentityCredential.name = n.getStringValue(); },
        "subject": n => { federatedIdentityCredential.subject = n.getStringValue(); },
    }
}
