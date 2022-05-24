import {SendMailPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendMailPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendMailPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendMailPostRequestBodyImpl();
}
