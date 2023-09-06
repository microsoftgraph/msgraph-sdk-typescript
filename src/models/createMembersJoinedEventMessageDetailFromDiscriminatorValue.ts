import { deserializeIntoMembersJoinedEventMessageDetail } from './deserializeIntoMembersJoinedEventMessageDetail';
import { type MembersJoinedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMembersJoinedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersJoinedEventMessageDetail;
}
