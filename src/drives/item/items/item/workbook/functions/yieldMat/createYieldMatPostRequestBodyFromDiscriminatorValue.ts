import { deserializeIntoYieldMatPostRequestBody } from './deserializeIntoYieldMatPostRequestBody';
import { type YieldMatPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createYieldMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYieldMatPostRequestBody;
}
