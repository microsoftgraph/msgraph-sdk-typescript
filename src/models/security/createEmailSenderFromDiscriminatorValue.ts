import { deserializeIntoEmailSender } from './deserializeIntoEmailSender';
import { type EmailSender } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailSenderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailSender;
}
