import { deserializeIntoGamma_DistPostRequestBody } from './deserializeIntoGamma_DistPostRequestBody';
import { type Gamma_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGamma_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGamma_DistPostRequestBody;
}
