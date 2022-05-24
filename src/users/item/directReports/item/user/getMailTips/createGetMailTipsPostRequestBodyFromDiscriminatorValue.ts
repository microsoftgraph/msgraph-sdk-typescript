import {GetMailTipsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsPostRequestBodyImpl();
}
