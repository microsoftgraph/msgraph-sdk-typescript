import { type CancelPostRequestBody } from './cancelPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelPostRequestBody(cancelPostRequestBody: CancelPostRequestBody | undefined = {} as CancelPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { cancelPostRequestBody.comment = n.getStringValue(); },
    }
}
