import { type CancelMediaProcessingPostRequestBody } from './cancelMediaProcessingPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingPostRequestBody(cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {} as CancelMediaProcessingPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { cancelMediaProcessingPostRequestBody.clientContext = n.getStringValue(); },
    }
}
