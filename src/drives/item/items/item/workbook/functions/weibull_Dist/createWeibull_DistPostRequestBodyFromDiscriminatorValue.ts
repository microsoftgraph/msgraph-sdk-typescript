import { deserializeIntoWeibull_DistPostRequestBody } from './deserializeIntoWeibull_DistPostRequestBody';
import { type Weibull_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWeibull_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeibull_DistPostRequestBody;
}
