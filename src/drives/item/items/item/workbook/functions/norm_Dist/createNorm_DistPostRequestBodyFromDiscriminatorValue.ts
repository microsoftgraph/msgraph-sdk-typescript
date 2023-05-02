import {deserializeIntoNorm_DistPostRequestBody} from './deserializeIntoNorm_DistPostRequestBody';
import {Norm_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNorm_DistPostRequestBody;
}
