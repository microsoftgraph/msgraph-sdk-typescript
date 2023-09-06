import { type AcceptPostRequestBody } from './acceptPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAcceptPostRequestBody(acceptPostRequestBody: AcceptPostRequestBody | undefined = {} as AcceptPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { acceptPostRequestBody.comment = n.getStringValue(); },
        "sendResponse": n => { acceptPostRequestBody.sendResponse = n.getBooleanValue(); },
    }
}
