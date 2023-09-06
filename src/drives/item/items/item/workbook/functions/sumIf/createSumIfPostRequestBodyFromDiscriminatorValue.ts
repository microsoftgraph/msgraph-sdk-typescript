import { deserializeIntoSumIfPostRequestBody } from './deserializeIntoSumIfPostRequestBody';
import { type SumIfPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSumIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumIfPostRequestBody;
}
