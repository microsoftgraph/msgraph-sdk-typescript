import { type AbortPostRequestBody } from './abortPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAbortPostRequestBody(abortPostRequestBody: AbortPostRequestBody | undefined = {} as AbortPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reason": n => { abortPostRequestBody.reason = n.getStringValue(); },
    }
}
