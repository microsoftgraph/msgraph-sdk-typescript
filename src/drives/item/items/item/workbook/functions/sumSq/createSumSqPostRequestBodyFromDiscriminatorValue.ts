import { deserializeIntoSumSqPostRequestBody } from './deserializeIntoSumSqPostRequestBody';
import { type SumSqPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSumSqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumSqPostRequestBody;
}
