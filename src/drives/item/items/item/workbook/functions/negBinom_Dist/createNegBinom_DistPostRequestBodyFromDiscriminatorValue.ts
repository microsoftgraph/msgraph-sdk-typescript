import {NegBinom_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNegBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NegBinom_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NegBinom_DistPostRequestBody();
}
