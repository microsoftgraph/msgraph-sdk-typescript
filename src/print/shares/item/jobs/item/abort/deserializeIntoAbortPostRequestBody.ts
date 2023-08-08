import type {AbortPostRequestBody} from './abortPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAbortPostRequestBody(abortPostRequestBody: AbortPostRequestBody | undefined = {} as AbortPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reason": n => { abortPostRequestBody.reason = n.getStringValue(); },
    }
}
