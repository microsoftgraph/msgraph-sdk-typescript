import { deserializeIntoGetMemberGroupsResponse } from './deserializeIntoGetMemberGroupsResponse';
import { type GetMemberGroupsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberGroupsResponse;
}
