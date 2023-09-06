import { deserializeIntoGetMailTipsPostRequestBody } from './deserializeIntoGetMailTipsPostRequestBody';
import { type GetMailTipsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetMailTipsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMailTipsPostRequestBody;
}
