import {Binom_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Binom_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Binom_DistPostRequestBody();
}
