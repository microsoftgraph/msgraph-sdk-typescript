import { deserializeIntoAcceptPostRequestBody } from './deserializeIntoAcceptPostRequestBody';
import { type AcceptPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcceptPostRequestBody;
}
