import type {MarkReadPostRequestBody} from './markReadPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkReadPostRequestBody(markReadPostRequestBody: MarkReadPostRequestBody | undefined = {} as MarkReadPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { markReadPostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
