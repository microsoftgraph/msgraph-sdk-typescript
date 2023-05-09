import {deserializeIntoCheckMemberGroupsResponse} from './deserializeIntoCheckMemberGroupsResponse';
import {CheckMemberGroupsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberGroupsResponse;
}
