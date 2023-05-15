import {deserializeIntoPoisson_DistPostRequestBody} from './deserializeIntoPoisson_DistPostRequestBody';
import {Poisson_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPoisson_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPoisson_DistPostRequestBody;
}
