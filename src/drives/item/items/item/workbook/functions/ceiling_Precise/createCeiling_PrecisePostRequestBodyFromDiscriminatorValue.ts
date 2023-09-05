import { deserializeIntoCeiling_PrecisePostRequestBody } from './deserializeIntoCeiling_PrecisePostRequestBody';
import { type Ceiling_PrecisePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCeiling_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCeiling_PrecisePostRequestBody;
}
