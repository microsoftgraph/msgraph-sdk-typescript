import {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetNotebookFromWebUrlPostRequestBody(getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {} as GetNotebookFromWebUrlPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("webUrl", getNotebookFromWebUrlPostRequestBody.webUrl);
        writer.writeAdditionalData(getNotebookFromWebUrlPostRequestBody.additionalData);
}
