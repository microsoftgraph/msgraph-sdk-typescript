import { deserializeIntoNorm_InvPostRequestBody } from './deserializeIntoNorm_InvPostRequestBody';
import { type Norm_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNorm_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNorm_InvPostRequestBody;
}
