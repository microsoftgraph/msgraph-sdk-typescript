import { deserializeIntoMailTips } from './deserializeIntoMailTips';
import { type MailTips } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailTips;
}
