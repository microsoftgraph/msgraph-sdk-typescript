import { type AutomaticRepliesMailTips } from './automaticRepliesMailTips';
import { type EmailAddress } from './emailAddress';
import { type MailTips } from './mailTips';
import { type MailTipsError } from './mailTipsError';
import { type Recipient } from './recipient';
import { RecipientScopeType } from './recipientScopeType';
import { serializeAutomaticRepliesMailTips } from './serializeAutomaticRepliesMailTips';
import { serializeEmailAddress } from './serializeEmailAddress';
import { serializeMailTipsError } from './serializeMailTipsError';
import { serializeRecipient } from './serializeRecipient';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMailTips(writer: SerializationWriter, mailTips: MailTips | undefined = {} as MailTips) : void {
        writer.writeObjectValue<AutomaticRepliesMailTips>("automaticReplies", mailTips.automaticReplies, serializeAutomaticRepliesMailTips);
        writer.writeStringValue("customMailTip", mailTips.customMailTip);
        writer.writeBooleanValue("deliveryRestricted", mailTips.deliveryRestricted);
        writer.writeObjectValue<EmailAddress>("emailAddress", mailTips.emailAddress, serializeEmailAddress);
        writer.writeObjectValue<MailTipsError>("error", mailTips.errorEscaped, serializeMailTipsError);
        writer.writeNumberValue("externalMemberCount", mailTips.externalMemberCount);
        writer.writeBooleanValue("isModerated", mailTips.isModerated);
        writer.writeBooleanValue("mailboxFull", mailTips.mailboxFull);
        writer.writeNumberValue("maxMessageSize", mailTips.maxMessageSize);
        writer.writeStringValue("@odata.type", mailTips.odataType);
        writer.writeEnumValue<RecipientScopeType>("recipientScope", mailTips.recipientScope);
        writer.writeCollectionOfObjectValues<Recipient>("recipientSuggestions", mailTips.recipientSuggestions, serializeRecipient);
        writer.writeNumberValue("totalMemberCount", mailTips.totalMemberCount);
        writer.writeAdditionalData(mailTips.additionalData);
}
