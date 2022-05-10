import {MailTipsErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailTipsErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailTipsErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailTipsErrorImpl();
}
