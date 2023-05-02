import {deserializeIntoGamma_InvPostRequestBody} from './deserializeIntoGamma_InvPostRequestBody';
import {Gamma_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGamma_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGamma_InvPostRequestBody;
}
