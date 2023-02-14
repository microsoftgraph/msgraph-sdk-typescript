import {Weibull_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWeibull_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Weibull_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Weibull_DistPostRequestBody();
}
