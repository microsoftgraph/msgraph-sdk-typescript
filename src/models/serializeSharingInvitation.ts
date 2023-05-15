import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {SharingInvitation} from './sharingInvitation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharingInvitation(writer: SerializationWriter, sharingInvitation: SharingInvitation | undefined = {} as SharingInvitation) : void {
        writer.writeStringValue("email", sharingInvitation.email);
        writer.writeObjectValue<IdentitySet>("invitedBy", sharingInvitation.invitedBy, serializeIdentitySet);
        writer.writeStringValue("@odata.type", sharingInvitation.odataType);
        writer.writeStringValue("redeemedBy", sharingInvitation.redeemedBy);
        writer.writeBooleanValue("signInRequired", sharingInvitation.signInRequired);
        writer.writeAdditionalData(sharingInvitation.additionalData);
}
