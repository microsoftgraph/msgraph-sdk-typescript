import {deserializeIntoCeiling_MathPostRequestBody} from './deserializeIntoCeiling_MathPostRequestBody';
import {Ceiling_MathPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCeiling_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCeiling_MathPostRequestBody;
}
