import {MembersJoinedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersJoinedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersJoinedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersJoinedEventMessageDetailImpl();
}
