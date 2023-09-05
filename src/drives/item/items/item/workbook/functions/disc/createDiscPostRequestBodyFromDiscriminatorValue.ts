import { deserializeIntoDiscPostRequestBody } from './deserializeIntoDiscPostRequestBody';
import { type DiscPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDiscPostRequestBody;
}
