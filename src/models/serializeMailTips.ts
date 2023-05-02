import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {EmailAddress} from './emailAddress';
import {MailTips} from './mailTips';
import {MailTipsError} from './mailTipsError';
import {Recipient} from './recipient';
import {RecipientScopeType} from './recipientScopeType';
import {serializeAutomaticRepliesMailTips} from './serializeAutomaticRepliesMailTips';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeMailTipsError} from './serializeMailTipsError';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
