import {RemovePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemovePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemovePostRequestBody();
}
