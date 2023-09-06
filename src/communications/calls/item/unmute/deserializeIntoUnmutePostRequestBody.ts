import { type UnmutePostRequestBody } from './unmutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmutePostRequestBody(unmutePostRequestBody: UnmutePostRequestBody | undefined = {} as UnmutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { unmutePostRequestBody.clientContext = n.getStringValue(); },
    }
}
