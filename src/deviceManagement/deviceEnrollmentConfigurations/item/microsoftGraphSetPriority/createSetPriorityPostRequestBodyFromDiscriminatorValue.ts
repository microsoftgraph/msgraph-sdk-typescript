import {SetPriorityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPriorityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPriorityPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPriorityPostRequestBody();
}
