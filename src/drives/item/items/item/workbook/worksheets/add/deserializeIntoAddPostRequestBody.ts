import type {AddPostRequestBody} from './addPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { addPostRequestBody.name = n.getStringValue(); },
    }
}
