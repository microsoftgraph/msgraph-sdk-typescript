import { deserializeIntoPercentile_IncPostRequestBody } from './deserializeIntoPercentile_IncPostRequestBody';
import { type Percentile_IncPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPercentile_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPercentile_IncPostRequestBody;
}
