import {AddGroupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddGroupPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddGroupPostRequestBody();
}
