import { deserializeIntoCosPostRequestBody } from './deserializeIntoCosPostRequestBody';
import { type CosPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCosPostRequestBody;
}
