import { deserializeIntoImCosPostRequestBody } from './deserializeIntoImCosPostRequestBody';
import { type ImCosPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImCosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCosPostRequestBody;
}
