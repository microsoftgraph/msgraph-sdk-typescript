import { deserializeIntoErf_PrecisePostRequestBody } from './deserializeIntoErf_PrecisePostRequestBody';
import { type Erf_PrecisePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createErf_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErf_PrecisePostRequestBody;
}
