import { deserializeIntoRemoveGroupResponse } from './deserializeIntoRemoveGroupResponse';
import { type RemoveGroupResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoveGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveGroupResponse;
}
