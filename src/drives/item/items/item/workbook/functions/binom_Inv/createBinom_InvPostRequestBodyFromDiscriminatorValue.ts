import {Binom_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBinom_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Binom_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Binom_InvPostRequestBody();
}
