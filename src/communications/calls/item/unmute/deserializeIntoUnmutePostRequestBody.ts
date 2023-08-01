import type {UnmutePostRequestBody} from './unmutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmutePostRequestBody(unmutePostRequestBody: UnmutePostRequestBody | undefined = {} as UnmutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { unmutePostRequestBody.clientContext = n.getStringValue(); },
    }
}
