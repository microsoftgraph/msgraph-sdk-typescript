import { deserializeIntoBeta_InvPostRequestBody } from './deserializeIntoBeta_InvPostRequestBody';
import { type Beta_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBeta_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBeta_InvPostRequestBody;
}
