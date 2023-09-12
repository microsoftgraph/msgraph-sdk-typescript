import { deserializeIntoConfirmCompromisedPostRequestBody } from './deserializeIntoConfirmCompromisedPostRequestBody';
import { type ConfirmCompromisedPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfirmCompromisedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfirmCompromisedPostRequestBody;
}
