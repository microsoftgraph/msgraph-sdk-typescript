import { deserializeIntoSumIfsPostRequestBody } from './deserializeIntoSumIfsPostRequestBody';
import { type SumIfsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSumIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumIfsPostRequestBody;
}
