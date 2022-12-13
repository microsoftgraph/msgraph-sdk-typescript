import {EmailSender} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailSenderFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailSender {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailSender();
}
