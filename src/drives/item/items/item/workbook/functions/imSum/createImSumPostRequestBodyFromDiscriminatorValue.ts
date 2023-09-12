import { deserializeIntoImSumPostRequestBody } from './deserializeIntoImSumPostRequestBody';
import { type ImSumPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSumPostRequestBody;
}
