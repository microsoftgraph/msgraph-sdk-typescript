import {SendMailRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendMailRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendMailRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendMailRequestBodyImpl();
}
