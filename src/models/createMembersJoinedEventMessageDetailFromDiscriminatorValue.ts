import {MembersJoinedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersJoinedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersJoinedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersJoinedEventMessageDetail();
}
