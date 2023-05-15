import {deserializeIntoGetMailTipsPostRequestBody} from './deserializeIntoGetMailTipsPostRequestBody';
import {GetMailTipsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMailTipsPostRequestBody;
}
