import { deserializeIntoCeiling_MathPostRequestBody } from './deserializeIntoCeiling_MathPostRequestBody';
import { type Ceiling_MathPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCeiling_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCeiling_MathPostRequestBody;
}
