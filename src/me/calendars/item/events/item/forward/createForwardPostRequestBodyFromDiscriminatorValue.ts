import { deserializeIntoForwardPostRequestBody } from './deserializeIntoForwardPostRequestBody';
import { type ForwardPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoForwardPostRequestBody;
}
