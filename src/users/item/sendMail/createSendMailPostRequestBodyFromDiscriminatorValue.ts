import { deserializeIntoSendMailPostRequestBody } from './deserializeIntoSendMailPostRequestBody';
import { type SendMailPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSendMailPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSendMailPostRequestBody;
}
