import type {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetNotebookFromWebUrlPostRequestBody(getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {} as GetNotebookFromWebUrlPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "webUrl": n => { getNotebookFromWebUrlPostRequestBody.webUrl = n.getStringValue(); },
    }
}
