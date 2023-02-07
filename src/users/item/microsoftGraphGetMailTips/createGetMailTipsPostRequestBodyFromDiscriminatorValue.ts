import {GetMailTipsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsPostRequestBody();
}
