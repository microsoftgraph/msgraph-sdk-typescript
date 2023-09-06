import { deserializeIntoCheckMemberObjectsResponse } from './deserializeIntoCheckMemberObjectsResponse';
import { type CheckMemberObjectsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberObjectsResponse;
}
