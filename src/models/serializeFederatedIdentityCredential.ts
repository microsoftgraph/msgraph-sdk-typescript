import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFederatedIdentityCredential(writer: SerializationWriter, federatedIdentityCredential: FederatedIdentityCredential | undefined = {} as FederatedIdentityCredential) : void {
        serializeEntity(writer, federatedIdentityCredential)
        writer.writeCollectionOfPrimitiveValues<string>("audiences", federatedIdentityCredential.audiences);
        writer.writeStringValue("description", federatedIdentityCredential.description);
        writer.writeStringValue("issuer", federatedIdentityCredential.issuer);
        writer.writeStringValue("name", federatedIdentityCredential.name);
        writer.writeStringValue("subject", federatedIdentityCredential.subject);
}
