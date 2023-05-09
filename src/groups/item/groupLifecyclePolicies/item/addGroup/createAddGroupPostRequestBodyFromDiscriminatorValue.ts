import {deserializeIntoAddGroupPostRequestBody} from './deserializeIntoAddGroupPostRequestBody';
import {AddGroupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddGroupPostRequestBody;
}
