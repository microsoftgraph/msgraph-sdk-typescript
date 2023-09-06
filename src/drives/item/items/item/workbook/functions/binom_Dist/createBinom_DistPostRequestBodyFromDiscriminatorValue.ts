import { deserializeIntoBinom_DistPostRequestBody } from './deserializeIntoBinom_DistPostRequestBody';
import { type Binom_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBinom_DistPostRequestBody;
}
