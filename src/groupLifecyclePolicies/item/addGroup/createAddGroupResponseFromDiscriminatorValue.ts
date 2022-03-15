import {AddGroupResponse} from './addGroupResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddGroupResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddGroupResponse();
}
