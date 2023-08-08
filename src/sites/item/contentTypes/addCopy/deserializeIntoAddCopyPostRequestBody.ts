import type {AddCopyPostRequestBody} from './addCopyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddCopyPostRequestBody(addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {} as AddCopyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "contentType": n => { addCopyPostRequestBody.contentType = n.getStringValue(); },
    }
}
