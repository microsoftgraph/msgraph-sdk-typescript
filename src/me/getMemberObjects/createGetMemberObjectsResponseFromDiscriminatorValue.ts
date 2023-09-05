import { deserializeIntoGetMemberObjectsResponse } from './deserializeIntoGetMemberObjectsResponse';
import { type GetMemberObjectsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberObjectsResponse;
}
