import {deserializeIntoSendMailPostRequestBody} from './deserializeIntoSendMailPostRequestBody';
import {SendMailPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendMailPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSendMailPostRequestBody;
}
