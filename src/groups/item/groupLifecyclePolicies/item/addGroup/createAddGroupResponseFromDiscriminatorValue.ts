import { deserializeIntoAddGroupResponse } from './deserializeIntoAddGroupResponse';
import { type AddGroupResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddGroupResponse;
}
