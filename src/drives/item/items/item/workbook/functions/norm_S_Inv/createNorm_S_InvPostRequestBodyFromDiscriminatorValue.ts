import {Norm_S_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_S_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Norm_S_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Norm_S_InvPostRequestBody();
}
