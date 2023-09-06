import { deserializeIntoPercentile_ExcPostRequestBody } from './deserializeIntoPercentile_ExcPostRequestBody';
import { type Percentile_ExcPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPercentile_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPercentile_ExcPostRequestBody;
}
