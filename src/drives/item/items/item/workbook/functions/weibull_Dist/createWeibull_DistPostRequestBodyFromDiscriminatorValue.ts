import {deserializeIntoWeibull_DistPostRequestBody} from './deserializeIntoWeibull_DistPostRequestBody';
import {Weibull_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWeibull_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWeibull_DistPostRequestBody;
}
