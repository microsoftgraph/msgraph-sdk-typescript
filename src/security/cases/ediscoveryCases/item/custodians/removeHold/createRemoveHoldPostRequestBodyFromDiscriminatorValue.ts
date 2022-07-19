import {RemoveHoldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveHoldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveHoldPostRequestBody();
}
