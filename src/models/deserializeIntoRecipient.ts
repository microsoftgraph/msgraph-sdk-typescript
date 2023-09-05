import { createEmailAddressFromDiscriminatorValue } from './createEmailAddressFromDiscriminatorValue';
import { type EmailAddress } from './emailAddress';
import { type Recipient } from './recipient';
import { serializeEmailAddress } from './serializeEmailAddress';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRecipient(recipient: Recipient | undefined = {} as Recipient) : Record<string, (node: ParseNode) => void> {
    return {
        "emailAddress": n => { recipient.emailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        "@odata.type": n => { recipient.odataType = n.getStringValue(); },
    }
}
