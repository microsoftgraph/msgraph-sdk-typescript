import {ConfirmCompromisedPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfirmCompromisedPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfirmCompromisedPostRequestBodyImpl();
}
