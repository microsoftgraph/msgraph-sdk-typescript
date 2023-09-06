import { type Identity } from './identity';
import { type IdentitySet } from './identitySet';
import { serializeIdentity } from './serializeIdentity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentitySet(writer: SerializationWriter, identitySet: IdentitySet | undefined = {} as IdentitySet) : void {
        writer.writeObjectValue<Identity>("application", identitySet.application, serializeIdentity);
        writer.writeObjectValue<Identity>("device", identitySet.device, serializeIdentity);
        writer.writeStringValue("@odata.type", identitySet.odataType);
        writer.writeObjectValue<Identity>("user", identitySet.user, serializeIdentity);
        writer.writeAdditionalData(identitySet.additionalData);
}
