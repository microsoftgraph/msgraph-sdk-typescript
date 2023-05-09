import {ObjectIdentity} from './objectIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectIdentity(writer: SerializationWriter, objectIdentity: ObjectIdentity | undefined = {} as ObjectIdentity) : void {
        writer.writeStringValue("issuer", objectIdentity.issuer);
        writer.writeStringValue("issuerAssignedId", objectIdentity.issuerAssignedId);
        writer.writeStringValue("@odata.type", objectIdentity.odataType);
        writer.writeStringValue("signInType", objectIdentity.signInType);
        writer.writeAdditionalData(objectIdentity.additionalData);
}
