import {AutomaticRepliesMailTipsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutomaticRepliesMailTipsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AutomaticRepliesMailTipsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AutomaticRepliesMailTipsImpl();
}
