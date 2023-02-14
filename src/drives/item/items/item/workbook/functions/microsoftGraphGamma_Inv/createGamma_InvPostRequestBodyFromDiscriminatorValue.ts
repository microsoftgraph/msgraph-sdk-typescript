import {Gamma_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGamma_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Gamma_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Gamma_InvPostRequestBody();
}
