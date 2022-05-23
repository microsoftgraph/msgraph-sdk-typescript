import {MailTipsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailTipsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailTipsImpl();
}
