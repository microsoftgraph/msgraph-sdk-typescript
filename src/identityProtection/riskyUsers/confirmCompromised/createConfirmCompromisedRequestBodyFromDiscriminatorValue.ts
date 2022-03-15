import {ConfirmCompromisedRequestBody} from './confirmCompromisedRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfirmCompromisedRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfirmCompromisedRequestBody();
}
