import { deserializeIntoAutomaticRepliesMailTips } from './deserializeIntoAutomaticRepliesMailTips';
import { type AutomaticRepliesMailTips } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAutomaticRepliesMailTips;
}
