import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type SharingInvitation } from './sharingInvitation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharingInvitation(writer: SerializationWriter, sharingInvitation: SharingInvitation | undefined = {} as SharingInvitation) : void {
        writer.writeStringValue("email", sharingInvitation.email);
        writer.writeObjectValue<IdentitySet>("invitedBy", sharingInvitation.invitedBy, serializeIdentitySet);
        writer.writeStringValue("@odata.type", sharingInvitation.odataType);
        writer.writeStringValue("redeemedBy", sharingInvitation.redeemedBy);
        writer.writeBooleanValue("signInRequired", sharingInvitation.signInRequired);
        writer.writeAdditionalData(sharingInvitation.additionalData);
}
