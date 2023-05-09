import {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetNotebookFromWebUrlPostRequestBody(getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {} as GetNotebookFromWebUrlPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "webUrl": n => { getNotebookFromWebUrlPostRequestBody.webUrl = n.getStringValue(); },
    }
}
