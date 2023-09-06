import { deserializeIntoRejectPostRequestBody } from './deserializeIntoRejectPostRequestBody';
import { type RejectPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRejectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRejectPostRequestBody;
}
