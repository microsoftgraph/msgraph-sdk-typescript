import { deserializeIntoBinom_InvPostRequestBody } from './deserializeIntoBinom_InvPostRequestBody';
import { type Binom_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBinom_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBinom_InvPostRequestBody;
}
