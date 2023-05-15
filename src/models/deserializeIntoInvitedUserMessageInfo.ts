import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {Recipient} from './recipient';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitedUserMessageInfo(invitedUserMessageInfo: InvitedUserMessageInfo | undefined = {} as InvitedUserMessageInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "ccRecipients": n => { invitedUserMessageInfo.ccRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        "customizedMessageBody": n => { invitedUserMessageInfo.customizedMessageBody = n.getStringValue(); },
        "messageLanguage": n => { invitedUserMessageInfo.messageLanguage = n.getStringValue(); },
        "@odata.type": n => { invitedUserMessageInfo.odataType = n.getStringValue(); },
    }
}
