import {Norm_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNorm_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Norm_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Norm_InvPostRequestBody();
}
