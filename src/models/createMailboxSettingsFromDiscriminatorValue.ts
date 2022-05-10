import {MailboxSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailboxSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailboxSettingsImpl();
}
