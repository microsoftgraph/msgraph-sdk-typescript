import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { addPostRequestBody.address = n.getStringValue(); },
        "hasHeaders": n => { addPostRequestBody.hasHeaders = n.getBooleanValue(); },
    }
}
