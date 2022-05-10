import {ConfirmCompromisedRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfirmCompromisedRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfirmCompromisedRequestBodyImpl();
}
