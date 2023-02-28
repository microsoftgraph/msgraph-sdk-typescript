import {Norm_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Norm_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Norm_DistPostRequestBody();
}
