import {deserializeIntoNorm_S_InvPostRequestBody} from './deserializeIntoNorm_S_InvPostRequestBody';
import {Norm_S_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_S_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNorm_S_InvPostRequestBody;
}
