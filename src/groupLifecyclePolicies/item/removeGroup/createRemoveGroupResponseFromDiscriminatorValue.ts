import {deserializeIntoRemoveGroupResponse} from './deserializeIntoRemoveGroupResponse';
import {RemoveGroupResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveGroupResponse;
}
