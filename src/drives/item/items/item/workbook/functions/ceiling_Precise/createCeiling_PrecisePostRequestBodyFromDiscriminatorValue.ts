import {deserializeIntoCeiling_PrecisePostRequestBody} from './deserializeIntoCeiling_PrecisePostRequestBody';
import {Ceiling_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCeiling_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCeiling_PrecisePostRequestBody;
}
