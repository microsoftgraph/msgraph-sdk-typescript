import { deserializeIntoGeStepPostRequestBody } from './deserializeIntoGeStepPostRequestBody';
import { type GeStepPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGeStepPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeStepPostRequestBody;
}
