import {Norm_S_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_S_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Norm_S_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Norm_S_DistPostRequestBody();
}
