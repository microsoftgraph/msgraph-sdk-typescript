import {deserializeIntoGroupMembers} from './deserializeIntoGroupMembers';
import {GroupMembers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupMembers;
}
