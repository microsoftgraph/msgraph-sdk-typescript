import {RemoveGroupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveGroupPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveGroupPostRequestBody();
}
