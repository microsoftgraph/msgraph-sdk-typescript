import {ConfirmCompromisedPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfirmCompromisedPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfirmCompromisedPostRequestBody();
}
