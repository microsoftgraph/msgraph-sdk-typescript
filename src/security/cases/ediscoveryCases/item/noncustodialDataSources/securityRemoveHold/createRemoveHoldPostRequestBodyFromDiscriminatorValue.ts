import {deserializeIntoRemoveHoldPostRequestBody} from './deserializeIntoRemoveHoldPostRequestBody';
import {RemoveHoldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveHoldPostRequestBody;
}
