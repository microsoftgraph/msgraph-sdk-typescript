import {Gamma_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGamma_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Gamma_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Gamma_DistPostRequestBody();
}
