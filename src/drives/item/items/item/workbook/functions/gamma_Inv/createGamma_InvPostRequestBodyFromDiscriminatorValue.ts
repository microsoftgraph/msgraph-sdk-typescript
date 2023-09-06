import { deserializeIntoGamma_InvPostRequestBody } from './deserializeIntoGamma_InvPostRequestBody';
import { type Gamma_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGamma_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGamma_InvPostRequestBody;
}
