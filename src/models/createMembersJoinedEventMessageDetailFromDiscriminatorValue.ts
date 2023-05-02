import {deserializeIntoMembersJoinedEventMessageDetail} from './deserializeIntoMembersJoinedEventMessageDetail';
import {MembersJoinedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersJoinedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersJoinedEventMessageDetail;
}
