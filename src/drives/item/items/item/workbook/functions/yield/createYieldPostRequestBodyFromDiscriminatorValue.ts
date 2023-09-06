import { deserializeIntoYieldPostRequestBody } from './deserializeIntoYieldPostRequestBody';
import { type YieldPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYieldPostRequestBody;
}
