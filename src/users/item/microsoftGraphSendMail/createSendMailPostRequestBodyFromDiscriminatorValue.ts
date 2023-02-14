import {SendMailPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendMailPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendMailPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendMailPostRequestBody();
}
