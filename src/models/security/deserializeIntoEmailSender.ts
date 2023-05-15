import {EmailSender} from './emailSender';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailSender(emailSender: EmailSender | undefined = {} as EmailSender) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { emailSender.displayName = n.getStringValue(); },
        "domainName": n => { emailSender.domainName = n.getStringValue(); },
        "emailAddress": n => { emailSender.emailAddress = n.getStringValue(); },
        "@odata.type": n => { emailSender.odataType = n.getStringValue(); },
    }
}
