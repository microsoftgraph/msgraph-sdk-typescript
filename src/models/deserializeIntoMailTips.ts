import { type AutomaticRepliesMailTips } from './automaticRepliesMailTips';
import { createAutomaticRepliesMailTipsFromDiscriminatorValue } from './createAutomaticRepliesMailTipsFromDiscriminatorValue';
import { createEmailAddressFromDiscriminatorValue } from './createEmailAddressFromDiscriminatorValue';
import { createMailTipsErrorFromDiscriminatorValue } from './createMailTipsErrorFromDiscriminatorValue';
import { createRecipientFromDiscriminatorValue } from './createRecipientFromDiscriminatorValue';
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

export function deserializeIntoMailTips(mailTips: MailTips | undefined = {} as MailTips) : Record<string, (node: ParseNode) => void> {
    return {
        "automaticReplies": n => { mailTips.automaticReplies = n.getObjectValue<AutomaticRepliesMailTips>(createAutomaticRepliesMailTipsFromDiscriminatorValue); },
        "customMailTip": n => { mailTips.customMailTip = n.getStringValue(); },
        "deliveryRestricted": n => { mailTips.deliveryRestricted = n.getBooleanValue(); },
        "emailAddress": n => { mailTips.emailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        "error": n => { mailTips.errorEscaped = n.getObjectValue<MailTipsError>(createMailTipsErrorFromDiscriminatorValue); },
        "externalMemberCount": n => { mailTips.externalMemberCount = n.getNumberValue(); },
        "isModerated": n => { mailTips.isModerated = n.getBooleanValue(); },
        "mailboxFull": n => { mailTips.mailboxFull = n.getBooleanValue(); },
        "maxMessageSize": n => { mailTips.maxMessageSize = n.getNumberValue(); },
        "@odata.type": n => { mailTips.odataType = n.getStringValue(); },
        "recipientScope": n => { mailTips.recipientScope = n.getCollectionOfEnumValues<RecipientScopeType>(RecipientScopeType); },
        "recipientSuggestions": n => { mailTips.recipientSuggestions = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        "totalMemberCount": n => { mailTips.totalMemberCount = n.getNumberValue(); },
    }
}
