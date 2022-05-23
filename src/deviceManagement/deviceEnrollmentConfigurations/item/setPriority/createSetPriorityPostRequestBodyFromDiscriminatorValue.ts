import {SetPriorityPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPriorityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPriorityPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPriorityPostRequestBodyImpl();
}
