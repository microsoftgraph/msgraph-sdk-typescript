import { deserializeIntoNegBinom_DistPostRequestBody } from './deserializeIntoNegBinom_DistPostRequestBody';
import { type NegBinom_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNegBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNegBinom_DistPostRequestBody;
}
