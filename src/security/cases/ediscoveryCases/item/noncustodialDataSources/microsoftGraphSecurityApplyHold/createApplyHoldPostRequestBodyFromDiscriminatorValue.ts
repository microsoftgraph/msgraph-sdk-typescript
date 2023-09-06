import { deserializeIntoApplyHoldPostRequestBody } from './deserializeIntoApplyHoldPostRequestBody';
import { type ApplyHoldPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyHoldPostRequestBody;
}
