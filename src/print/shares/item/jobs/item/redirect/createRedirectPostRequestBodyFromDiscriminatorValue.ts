import { deserializeIntoRedirectPostRequestBody } from './deserializeIntoRedirectPostRequestBody';
import { type RedirectPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRedirectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRedirectPostRequestBody;
}
