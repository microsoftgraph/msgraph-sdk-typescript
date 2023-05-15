import {deserializeIntoAddGroupResponse} from './deserializeIntoAddGroupResponse';
import {AddGroupResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddGroupResponse;
}
