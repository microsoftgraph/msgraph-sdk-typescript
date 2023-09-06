import { deserializeIntoFollowupFlag } from './deserializeIntoFollowupFlag';
import { type FollowupFlag } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFollowupFlagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFollowupFlag;
}
