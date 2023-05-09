import {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingPostRequestBody(cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {} as CancelMediaProcessingPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { cancelMediaProcessingPostRequestBody.clientContext = n.getStringValue(); },
    }
}
