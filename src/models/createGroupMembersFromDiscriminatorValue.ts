import {GroupMembers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupMembers {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupMembers();
}
