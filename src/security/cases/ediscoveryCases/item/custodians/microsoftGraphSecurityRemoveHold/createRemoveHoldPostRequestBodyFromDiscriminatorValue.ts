import { deserializeIntoRemoveHoldPostRequestBody } from './deserializeIntoRemoveHoldPostRequestBody';
import { type RemoveHoldPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoveHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveHoldPostRequestBody;
}
