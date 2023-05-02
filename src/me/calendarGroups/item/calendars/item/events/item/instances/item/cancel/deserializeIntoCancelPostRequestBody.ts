import {CancelPostRequestBody} from './cancelPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelPostRequestBody(cancelPostRequestBody: CancelPostRequestBody | undefined = {} as CancelPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { cancelPostRequestBody.comment = n.getStringValue(); },
    }
}
