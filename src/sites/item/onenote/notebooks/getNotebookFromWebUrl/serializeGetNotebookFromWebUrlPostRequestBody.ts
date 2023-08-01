import type {GetNotebookFromWebUrlPostRequestBody} from './getNotebookFromWebUrlPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetNotebookFromWebUrlPostRequestBody(writer: SerializationWriter, getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {} as GetNotebookFromWebUrlPostRequestBody) : void {
        writer.writeStringValue("webUrl", getNotebookFromWebUrlPostRequestBody.webUrl);
        writer.writeAdditionalData(getNotebookFromWebUrlPostRequestBody.additionalData);
}
