import {Poisson_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPoisson_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Poisson_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Poisson_DistPostRequestBody();
}
