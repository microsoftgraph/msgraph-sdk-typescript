import {deserializeIntoGamma_DistPostRequestBody} from './deserializeIntoGamma_DistPostRequestBody';
import {Gamma_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGamma_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGamma_DistPostRequestBody;
}
