import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {Recipient} from './recipient';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitedUserMessageInfo(writer: SerializationWriter, invitedUserMessageInfo: InvitedUserMessageInfo | undefined = {} as InvitedUserMessageInfo) : void {
        writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", invitedUserMessageInfo.ccRecipients, serializeRecipient);
        writer.writeStringValue("customizedMessageBody", invitedUserMessageInfo.customizedMessageBody);
        writer.writeStringValue("messageLanguage", invitedUserMessageInfo.messageLanguage);
        writer.writeStringValue("@odata.type", invitedUserMessageInfo.odataType);
        writer.writeAdditionalData(invitedUserMessageInfo.additionalData);
}
