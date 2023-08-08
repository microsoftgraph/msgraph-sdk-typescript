import type {CopyPostRequestBody} from './copyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationId": n => { copyPostRequestBody.destinationId = n.getStringValue(); },
    }
}
