import {deserializeIntoNorm_S_DistPostRequestBody} from './deserializeIntoNorm_S_DistPostRequestBody';
import {Norm_S_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_S_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNorm_S_DistPostRequestBody;
}
