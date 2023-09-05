import { deserializeIntoOddLYieldPostRequestBody } from './deserializeIntoOddLYieldPostRequestBody';
import { type OddLYieldPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOddLYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddLYieldPostRequestBody;
}
